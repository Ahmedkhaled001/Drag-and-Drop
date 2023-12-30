let inputBox = document.getElementById("inputBox")
let btn = document.getElementById("addBtn")
let boxs = document.querySelectorAll(".box")
let drag = null;



btn.onclick = function(){
    if(inputBox.value != ""){
        const newElement = document.createElement("p")
        newElement.classList.add('item')
        newElement.setAttribute('draggable', 'true')
        newElement.innerText = inputBox.value
        boxs[0].appendChild(newElement)
        inputBox.value = ''
    }

    dragItems()
}
// btn.onclick = function(){
//     if(inputBox.value != ""){
//         const newElement = document.createElement("p")
//         newElement.classList.add('item')
//         newElement.setAttribute('draggable', 'true')
//         newElement.innerText = inputBox.value
//         boxs[0].appendChild(newElement)
//         inputBox.value = ''
//     }

//     dragItems()
// }

function dragItems(){
    let item = document.querySelectorAll('.item')
    item.forEach(items=>{
        items.addEventListener("dragstart", function(){
            drag = items
            items.style.opacity = ("0.5")
        })
    })
    item.forEach(items=>{
        items.addEventListener("dragend", function(){
            drag = null
            items.style.opacity = ("1")

        })
    })
    boxs.forEach(box=>{
        box.addEventListener("dragover", function(e){
            e.preventDefault()
            this.style.backgroundColor = "#090"
            this.style.color = "#fff"

        })
    })
    boxs.forEach(box=>{
        box.addEventListener("dragleave", function(){
            this.style.backgroundColor = "#fff"
            this.style.color = "#000"

        })
    })
    boxs.forEach(box=>{
        box.addEventListener("drop", function(){
            this.append(drag)


        })
    })

}
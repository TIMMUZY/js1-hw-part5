

let box = document.getElementById('btn')
let input1 = document.getElementById('first')
let input2 = document.getElementById('second')
btn.onclick = () =>{
    let bob = input1.value
    input1.value = input2.value
    input2.value = bob 
}


let btn2 = document.getElementById('btn2')
let input3 = document.getElementById('third')
let div = document.getElementById('win')

btn2.onclick = () =>{
    let color = input3.value
    div.style.backgroundColor = color
}
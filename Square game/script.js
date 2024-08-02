let a = document.getElementById("box1")
let b = document.getElementById("box2")
let c = document.getElementById("box3")
let d = document.getElementById("box4")
let cursor = document.getElementById("cursor")
let main = document.getElementById("main")


a.addEventListener("click", function(){
    let r  =Math.ceil(Math.random()*100)
    a.innerHTML = `<h1>${r}</h1>`
})

let clr = "red"
b.addEventListener("mouseenter", function(){
    if (clr=="red"){
        b.style.backgroundColor = "red"
        clr = "green"
    }
    else{
        b.style.backgroundColor = "green"
        clr = "red"
    }
   
})
b.addEventListener("mouseleave", function(){
    b.style.backgroundColor = "white"
})

c.addEventListener("mouseenter", function(){
    let x = Math.ceil(Math.random()*255)
    let y = Math.ceil(Math.random()*255)
    let z = Math.ceil(Math.random()*255)
    c.style.backgroundColor = `rgb(${x},${y},${z})`;
})

c.addEventListener("mouseleave", function(){
    c.style.backgroundColor = "white"
})

d.addEventListener("mouseleave", function(){
    a.style.backgroundColor = "white"
    b.style.backgroundColor = "white"
    c.style.backgroundColor = "white"
})

d.addEventListener("click", function(){
    let x = Math.ceil(Math.random()*255)
    let y = Math.ceil(Math.random()*255)
    let z = Math.ceil(Math.random()*255)
    a.style.backgroundColor = `rgb(255,${y},255)`;
    b.style.backgroundColor = `rgb(255,255,${z})`;
    c.style.backgroundColor = `rgb(${x},255,255)`;
})

main.addEventListener("mousemove", function(details){
    cursor.style.top = details.y + "px"
    cursor.style.left = details.x + "px"
})
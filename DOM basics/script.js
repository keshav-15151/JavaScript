
let x = document.querySelector("h1") //only first one is selected, in case there are multiple h1 tags
x = document.querySelector("h1") //takes in all occurences of h1, makes a NodeList
console.log(x);

x.style.color = "red"
x.style.backgroundColor = "yellow"

//change the content of h1 using setTimeout 
let y = document.querySelector("h1")
setTimeout(function(){
    y.innerHTML = "CHANGED"
},2000)

//EVENT LISTENERS: means changing the elemnts design/content if we hover on the element or bring the cursor out of the content

let a = document.getElementById("hi")
a.addEventListener("click", function(){
    a.style.color = "red"
    a.style.backgroundColor = "yellow"

})
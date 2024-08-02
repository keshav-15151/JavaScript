let main = document.getElementById("main")
var s = ""
let arr = 
["https://www.shutterstock.com/image-vector/cute-funny-baby-panda-hanging-600nw-334228436.jpg",
    "https://m.media-amazon.com/images/I/71qTm-Xrh0L._AC_UF1000,1000_QL80_.jpg", 
    "https://m.media-amazon.com/images/I/51DwGfBvcBL._AC_UF894,1000_QL80_.jpg", 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAo7Npr4XWq0v48vNvLqV-2lJvVWo6qSgg-g&usqp=CAU", 
    "https://easydrawingguides.com/wp-content/uploads/2022/03/how-to-draw-an-easy-cartoon-lion-featured-image-1200.png" ]
for (let i=0; i<44; i++){
    let r = Math.floor(Math.random()*3)
    s+= `<div class = "card"><img src = "${arr[Math.floor(Math.random()*arr.length)]}"></div>`;
}
main.innerHTML = s


console.log("first line")

setTimeout(()=>{
    console.log("Inside the function")
},3000) //the function is exectued after 3 seconds

console.log("End line")

//concept of closure
function outerfn(){
    let outervar = "Outer Function"
    function innerfn(){
        console.log(outervar)
    }
    return innerfn
}
let fn = outerfn()
fn();
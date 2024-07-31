let arr = [1,-1,2,-5,-10]
function twice(x){
    return Math.abs(x);
}
let brr = arr.map(twice)
console.log(arr)
console.log(brr)
brr = brr.map(ele => ele*ele) //squaring elements
console.log(brr);
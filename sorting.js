arr = [-11,9,-3,4,-5,1,3,2]
arr.sort()
console.log(arr)
//The default sorting in js does not sort negative numbers in proper order, it would keep -2 before -9

//For proper sorting, use the sort function, and pass the function
arr = arr.sort(function(a,b){
    return a-b
})
console.log(arr)

// cusstom sort
// arr = arr.sort(function(a,b){
//     return b-a
// })

arr = arr.sort((a,b) => b-a)
console.log(arr)
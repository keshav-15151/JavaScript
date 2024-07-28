var a = "Var is a variable";
console.log(a);

var integer = 3;
console.log(integer)

list = [1,2,3,4,5]
newl = list.map(num=>num**3)
console.log(newl)

let arr1 = [1,2,3,4,5,6,7,8,9,10]
console.log(arr1.filter((num)=>num%2==0))

//reduce
console.log(arr1.reduce((curr,next)=>curr+next))

for (var i=0; i<=20; i++){
    console.log(i);
}
console.table([ list1, integer, arr1]);

//Difference between var and let: Var does not follow global and local scope definitions
//Prefer not to use var because of issue in block scope and fucntional scope

arr = ["hello", "hi"]
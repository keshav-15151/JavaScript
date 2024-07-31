// A function which is passed inside a function is called a callback function

function product(a,b,c){
    return a*b*c
}

function fun(x,y){ //x is a function here
    console.log(x(2,3,5)-y)
}

fun(product,7)
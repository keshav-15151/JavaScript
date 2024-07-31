//print 2 to 10 with delay of 1 sec after each number gets printed

function print(){
    console.log("Hello")
}

function print2(){
    console.log("How are you?")
}

setTimeout(print, 2*1000) //print function is executed after delay of 2 seconds of pressing the run button
setTimeout(print2, 1*1000) 

//fucntion can be directly passed too
setTimeout(function(){                
    console.log("Keshav Sharma")
}, 5*1000)

for (let i=1; i<11; i++){
    setTimeout(function(){
        console.log(i)
    },i*1000)     //use i*1000 and not 1*1000
}
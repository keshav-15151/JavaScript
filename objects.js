let x = {
    name:"Keshav",
    age:20,
    gender:'male',
    'is married': false
}
console.log(x);
console.log(x['is married']);
console.log(x.age);
console.log(x['age']); //always string to be used in the brackets.

//object values can be changed
x.age = 21;
console.log(x.age);

//for each loop to print all the keys, notice we used x[key] and not x.key
for (const key in x) {
    if (Object.hasOwnProperty.call(x, key)) {
        console.log(key,x[key]);
    }
}


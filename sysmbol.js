const wes= Symbol('wes');
//symbols are unique identifiers
//u can never a name in collision with them
//symbol cannot be loop over
const person= Symbol('wes');


const classroom={
    [Symbol('mark')]:{grade:50,gender:'male'},  
    [Symbol('olivia')]:{grade:80,gender:'female'},
    [Symbol('olivia')]:{grade:80,gender:'female'},

}
const syns = Object.getOwnPropertySymbols(classroom);
console.log(syns);


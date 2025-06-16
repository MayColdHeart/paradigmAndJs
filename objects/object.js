
// const name = 'may'
// const surname = 'coldheart'
// const age = 20;

// const name1 = 'lops'
// const surname1 = 'leandra'
// const age1 = 21;

//very work...

//But, we have a solution.. create a agroupament for variables



// const object = { //literal object
//     //create atributes
//     name: 'May', 
//     surname: 'Coldheart',
//     age: 20,
// };

// console.log(object.name);
// console.log(object.surname);
// console.log(object.age);



//still have to create object1

//But.. there is another solution for this

//create a FACTORY
function createObject (name, surname, age) {
    return {name, surname, age,};
    
}

const pessoa1 = createObject('mayara', 'ColdHeart', 21);
const pessoa2 = createObject('lops', 'ColdHeart', 21);
const pessoa3 = createObject('mike', 'ColdHeart', 21);
const pessoa4 = createObject('ani', 'ColdHeart', 21);
console.log(pessoa1.name, pessoa2.name, pessoa3.name);
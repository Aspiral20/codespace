// Prototype = obiect care mareste intervalul de actiuni pentru obiecte sau clase.

// Un obiect care poate exista la alte obiecte
const person = new Object({
  name: 'Maxim',
  age: 25,
  greet: function() {
    console.log('Greet!');
  }
});

// Initializeaza o noua functie in person.prototype
Object.prototype.sayHello = function () {
  console.log('Hello!')
}

// Creeaza obiecte noi. (ca parametru v-a fi prototip pentru obiectul creat)
const lena = Object.create(person)
lena.name = 'Elena';

//
// const str = new String('I am string');
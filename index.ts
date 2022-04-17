const person1 = {
  name: 'Frank',
  age: 45
};

// setting a new object equal to an existin object copies the ref
const person2 = person1;
console.log('Object Definition', person1 === person2);

const getPerson = () => ({
  name: 'Maude',
  age: 39
});

// even though we are returning the same properties we are returning new refs
const person3 = getPerson();
const person4 = getPerson();
console.log('Function Retuning State', person3 == person4);

// Person1 and person2 share a ref, mutating person2 also mutates person2
person2.name = 'Lucy';
console.log('Person 1', person1);
console.log('Person 2', person2);

// Person3 and Person4 do not share a ref
person3.name = 'George';
console.log('Person 3', person3);
console.log('Person 4', person4);
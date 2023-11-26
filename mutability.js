const person = {
    name: 'Rick',
    age: 77,
    country: 'US',
  }
const samePerson=person
const newage=person.age+1
  const clone1={...person,age:newage,country:'FR'}
  const clone2={...person,age:newage,country:'FR'}


  console.log(person===samePerson);


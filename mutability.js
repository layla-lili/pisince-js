const samePerson=person
const newage=person.age+1
const clone1={...person,age:newage,country:'FR'}
const clone2=JSON.parse(JSON.stringify(person))



const samePerson=JSON.parse(JSON.stringify(person))
const newage=person.age+1
const clone1={...person,age:newage,country:'FR'}
const clone2={...person,age:newage,country:'FR'}



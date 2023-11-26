const samePerson={...person}
const newage=person.age+1
const clone1={...person}
const clone2={...person}
clone1.age=newage
clone2.age=newage
clone1.country='FR'
clone2.country='FR'



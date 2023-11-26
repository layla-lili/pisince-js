const samePerson={ 
    name: 'Rick',
    age: 77,
    country: 'US',
  }
const newage=person.age+1
const clone1={ 
    name: 'Rick',
    age: 77,
    country: 'US',
  }
const clone2={...clone1}
clone1.age=newage
clone2.age=newage
clone1.country='FR'
clone2.country='FR'



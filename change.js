const sourceObject = {
    num: 42,
    bool: true,
    str: 'some text',
    log: console.log,
  }
  
const get = (source) => sourceObject[source+'']

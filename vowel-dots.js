var vowels=/[aeiou]/gi
const vowelDots=(str)=>str.replace(vowels,'$&.')
console.log(vowelDots('Hello World'))
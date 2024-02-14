//Debounce and throttle are two similar (but different!) techniques to control how many times we allow a function to be executed over time.


const debounce = (fn, delay)=>{
let timer;
return function(...args){
    clearTimeout(timer)
    timer = setTimeout(() =>{
        fn(...args)
    },delay)
}
}

const opDebounce =(fn, delay, leading=false)=>{
    let timer;
    return function(...args){
        if (leading && !timer) {
            fn(...args);
          }
        clearTimeout(timer)
        timer = setTimeout(() =>{
            fn(...args)
        },delay)
    }
}
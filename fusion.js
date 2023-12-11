function fusion(obj1, obj2) {
    var fusioned = {};
    var isNum = is.num;
    var isStr = is.str;
    var isArr = is.arr;
    var isObj = is.obj;

    Object.keys(obj1).forEach(key => {
        if (!obj2.hasOwnProperty(key)) {
            // If obj2 does not have the key, assign the value from obj1 to fusioned[key]
            fusioned[key] = obj1[key];
            return;
        }
    
        if (isObj(obj1[key]) && isObj(obj2[key])) {
            // If both values are objects, call fusion() function to merge them
            fusioned[key] = fusion(obj1[key], obj2[key]);
        } else if (isArr(obj1[key]) && isArr(obj2[key])) {
            // If both values are arrays, concatenate them using concat()
            fusioned[key] = obj1[key].concat(obj2[key]);
        } else if (isNum(obj1[key]) && isNum(obj2[key])) {
            // If both values are numbers, add them together
            fusioned[key] = obj1[key] + obj2[key];
        } else if (isStr(obj1[key]) && isStr(obj2[key])) {
            // If both values are strings, concatenate them with a space in between
            fusioned[key] = obj1[key] + " " + obj2[key];
        } else {
            // If none of the above conditions are met, assign the value from obj2 to fusioned[key]
            fusioned[key] = obj2[key];
        }
    });

    Object.keys(obj2).forEach(function(key) {
        if (!obj2.hasOwnProperty(key)) return;
        // If obj2 does not have the key, skip to the next iteration
    
        if (!obj1.hasOwnProperty(key)) {
            // If obj1 does not have the key, assign the value from obj2 to fusioned[key]
            fusioned[key] = obj2[key];
        }
    });
    

    return fusioned;
}



const is = {}

const typeOf = (n)=> typeof n
const isArray =(n)=> Array.isArray(n)
const isFunction = (n) => typeof n === 'function';
const isObject = (n)=> typeOf(n) === "object" && !isFunction(n) && !isArray && n!=null

is.num = (n)=> typeOf(n) === "number";
is.str = (n)=> typeOf(n) === "string"
is.arr = isArray
is.obj = isObject
is.fun = isFunction


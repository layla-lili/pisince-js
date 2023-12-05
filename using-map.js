const citiesOnly=arrobj=> arrobj.map(obj => obj.city);
// const upperCasingStates = arrstr => arrstr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
function upperCasingStates(arr) {
    return arr.map((item) =>
        item
            .split(" ")
            .map((word) => {
                return word[0].toUpperCase() + word.slice(1);
            })
            .join(" ")
    );
}

const fahrenheitToCelsius = temperatures => temperatures.map( temp=>Math.floor( ( (+temp.replace('°F','')) -32 )*(5/9) ).toString()+'°C')
// const trimTemp = temperatures => temperatures.map(temp=>({city: temp.city, temperature: temp.temperature.trim().replace(/\s+/g, '')}))
function trimTemp(arr) {
    return arr.map((item) => {
        item.temperature = item.temperature.replaceAll(" ", "");
        return item;
    });
}


function tempForecasts(arr) {
    return arr.map((item) => {
        return `${
            Math.floor( ( (+item.temperature.replace('°F','')) -32 )*(5/9) ).toString() + "°Celsius"
        } in ${item.city}, ${item.state
            .split(" ")
            .map((word) => {
                return word[0].toUpperCase() + word.slice(1);
            })
            .join(" ")}`;
    });
}
  




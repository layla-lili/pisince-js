const citiesOnly = arrobj=> arrobj.map(aobj=>aobj.city)

const upperCasingStates = (arr) => {
    return arr.map((item) =>
        item
            .split(" ")
            .map((word) => {
                return word[0].toUpperCase() + word.slice(1);
            })
            .join(" ")
    );
}

  
const fahrenheitToCelsius = fts=>fts.map(ftss=> Math.floor(((parseInt(ftss) - 32) * (5/9))).toString()+'°C')

const trimTemp = (arr) =>{
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
  
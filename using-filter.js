const arr=['Alaska',
'Hawaii',
'Idaho',
'Iowa',
'Kansas',
'Maine',
'Nevada',
'Ohio',
'Oregon',
'Texas',
'Utah',
'aeiou'
]
var vowels=/[aeiou]/gi
const filterShortStateName=strarr=>strarr.filter(str=>str.length < 7)
//console.log("🚀 ~ file: using-filter.js:14 ~ filterShortStateName:", filterShortStateName(arr))

const filterStartVowel = strarr=>strarr.filter(str=>str.charAt(0).match(vowels))
//console.log("🚀 ~ file: using-filter.js:18 ~ filterStartVowel:", filterStartVowel(arr))

const filter5Vowels = strarr=>strarr.filter(str=>str.match(vowels).length >= 5)
console.log("🚀 ~ file: using-filter.js:21 ~ filter5Vowels:", filter5Vowels(arr))

// const filter1DistinctVowel = str=>str.filter(str=> new Set(str.toLowerCase().match(vowels).length === 1))

function filter1DistinctVowel(arr) {
    return arr.filter(
        (item) => new Set(item.toLowerCase().match(/[aeiou]/gi)).size === 1
    );
}


console.log("🚀 ~ file: using-filter.js:25 ~ filter1DistinctVowel:", filter1DistinctVowel(arr))
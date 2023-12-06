var vowels=/[aeiou]/gi
const filterShortStateName=strarr=>strarr.filter(str=>str.length < 7)

const filterStartVowel = strarr=>strarr.filter(str=>str.charAt(0).match(vowels))

const filter5Vowels = strarr=>strarr.filter(str=>str.match(vowels).length >= 5)

const filter1DistinctVowel = str=>str.filter((str)=> new Set(str.toLowerCase().match(vowels)).size === 1)

const multiFilter = arrobj=>arrobj.filter(arob=>arob.capital.length >=8 && !(arob.name.charAt(0).match(vowels)) && arob.tag.toLowerCase().match(vowels)?.length >= 1 && !(arob.region === "South"))


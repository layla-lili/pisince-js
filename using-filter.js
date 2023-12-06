const arr2 = Object.freeze(
    [
      { tag: 'AL', name: 'Alabama', capital: 'Montgomery', region: 'South' },
      { tag: 'AK', name: 'Alaska', capital: 'Juneau', region: 'West' },
      { tag: 'AZ', name: 'Arizona', capital: 'Phoenix', region: 'West' },
      { tag: 'AR', name: 'Arkansas', capital: 'Little Rock', region: 'South' },
      { tag: 'CA', name: 'California', capital: 'Sacramento', region: 'West' },
      { tag: 'CO', name: 'Colorado', capital: 'Denver', region: 'West' },
      {
        tag: 'CT',
        name: 'Connecticut',
        capital: 'Hartford',
        region: 'Northeast',
      },
      { tag: 'DE', name: 'Delaware', capital: 'Dover', region: 'South' },
      {
        tag: 'DC',
        name: 'District Of Columbia',
        capital: 'Washington',
        region: 'South',
      },
      { tag: 'FL', name: 'Florida', capital: 'Tallahassee', region: 'South' },
      { tag: 'GA', name: 'Georgia', capital: 'Atlanta', region: 'South' },
      { tag: 'HI', name: 'Hawaii', capital: 'Honolulu', region: 'West' },
      { tag: 'ID', name: 'Idaho', capital: 'Boise', region: 'West' },
      {
        tag: 'IL',
        name: 'Illinois',
        capital: 'Springfield',
        region: 'Midwest',
      },
      {
        tag: 'IN',
        name: 'Indiana',
        capital: 'Indianapolis',
        region: 'Midwest',
      },
      { tag: 'IA', name: 'Iowa', capital: 'Des Moines', region: 'Midwest' },
      { tag: 'KS', name: 'Kansas', capital: 'Topeka', region: 'Midwest' },
      { tag: 'KY', name: 'Kentucky', capital: 'Frankfort', region: 'South' },
      { tag: 'LA', name: 'Louisiana', capital: 'Baton Rouge', region: 'South' },
      { tag: 'ME', name: 'Maine', capital: 'Augusta', region: 'Northeast' },
      { tag: 'MD', name: 'Maryland', capital: 'Annapolis', region: 'South' },
      {
        tag: 'MA',
        name: 'Massachusetts',
        capital: 'Boston',
        region: 'Northeast',
      },
      { tag: 'MI', name: 'Michigan', capital: 'Lansing', region: 'Midwest' },
      { tag: 'MN', name: 'Minnesota', capital: 'St. Paul', region: 'Midwest' },
      { tag: 'MS', name: 'Mississippi', capital: 'Jackson', region: 'South' },
      {
        tag: 'MO',
        name: 'Missouri',
        capital: 'Jefferson City',
        region: 'Midwest',
      },
      { tag: 'MT', name: 'Montana', capital: 'Helena', region: 'West' },
      { tag: 'NE', name: 'Nebraska', capital: 'Lincoln', region: 'Midwest' },
      { tag: 'NV', name: 'Nevada', capital: 'Carson City', region: 'West' },
      {
        tag: 'NH',
        name: 'New Hampshire',
        capital: 'Concord',
        region: 'Northeast',
      },
      {
        tag: 'NJ',
        name: 'New Jersey',
        capital: 'Trenton',
        region: 'Northeast',
      },
      { tag: 'NM', name: 'New Mexico', capital: 'Santa Fe', region: 'West' },
      { tag: 'NY', name: 'New York', capital: 'Albany', region: 'Northeast' },
      {
        tag: 'NC',
        name: 'North Carolina',
        capital: 'Raleigh',
        region: 'South',
      },
      {
        tag: 'ND',
        name: 'North Dakota',
        capital: 'Bismarck',
        region: 'Midwest',
      },
      { tag: 'OH', name: 'Ohio', capital: 'Colombus', region: 'Midwest' },
      {
        tag: 'OK',
        name: 'Oklahoma',
        capital: 'Oklahoma City',
        region: 'South',
      },
      { tag: 'OR', name: 'Oregon', capital: 'Salem', region: 'West' },
      {
        tag: 'PA',
        name: 'Pennsylvania',
        capital: 'Harrisburg',
        region: 'Northeast',
      },
      {
        tag: 'RI',
        name: 'Rhode Island',
        capital: 'Providence',
        region: 'Northeast',
      },
      {
        tag: 'SC',
        name: 'South Carolina',
        capital: 'Columbia',
        region: 'South',
      },
      { tag: 'SD', name: 'South Dakota', capital: 'Pierre', region: 'Midwest' },
      { tag: 'TN', name: 'Tennessee', capital: 'Nashville', region: 'South' },
      { tag: 'TX', name: 'Texas', capital: 'Austin', region: 'South' },
      { tag: 'UT', name: 'Utah', capital: 'Salt Lake City', region: 'West' },
      {
        tag: 'VT',
        name: 'Vermont',
        capital: 'Montpelier',
        region: 'Northeast',
      },
      { tag: 'VA', name: 'Virginia', capital: 'Richmond', region: 'South' },
      { tag: 'WA', name: 'Washington', capital: 'Olympia', region: 'West' },
      {
        tag: 'WV',
        name: 'West Virginia',
        capital: 'Charleston',
        region: 'South',
      },
      { tag: 'WI', name: 'Wisconsin', capital: 'Madison', region: 'Midwest' },
      { tag: 'WY', name: 'Wyoming', capital: 'Cheyenne', region: 'West' },
    ].map((e) => Object.freeze(e))
  )

var vowels=/[aeiou]/gi
// const filterShortStateName=strarr=>strarr.filter(str=>str.length < 7)
//console.log("🚀 ~ file: using-filter.js:14 ~ filterShortStateName:", filterShortStateName(arr))

// const filterStartVowel = strarr=>strarr.filter(str=>str.charAt(0).match(vowels))
//console.log("🚀 ~ file: using-filter.js:18 ~ filterStartVowel:", filterStartVowel(arr))

// const filter5Vowels = strarr=>strarr.filter(str=>str.match(vowels).length >= 5)
// console.log("🚀 ~ file: using-filter.js:21 ~ filter5Vowels:", filter5Vowels(arr))

// const filter1DistinctVowel = str=>str.filter(str=> new Set(str.toLowerCase().match(vowels).length === 1))

// function filter1DistinctVowel(arr) {
//     return arr.filter(
//         (item) => new Set(item.toLowerCase().match(/[aeiou]/gi)).size === 1
//     );
// }

// console.log("🚀 ~ file: using-filter.js:25 ~ filter1DistinctVowel:", filter1DistinctVowel(arr))
const multiFilter = arrobj=>arrobj.filter(arob=>arob.capital.length >=8 && !(arob.name.charAt(0).match(vowels)) && arob.tag.toLowerCase().match(vowels)?.length >= 1 && !(arob.region === "South"))
 console.log("🚀 ~ file: using-filter.js:34 ~ multiFilter:", multiFilter(arr2))
console.log("layla".length)

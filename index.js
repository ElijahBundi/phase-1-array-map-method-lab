const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  const splitString = tutorials.map(title => title.split(' '));
  const titleCaps = [];
  for (let item of splitString) {
    titleCaps.push(item.map(element => element[0].toUpperCase() + element.substring(1)).join(' '))
  }
  return tit
}


// const splitString = tutorials.map((element) => {
//   return element.split(' ')
// })
// console.log(splitString)
// const upperCased = 

// for (const item of splitString) {
//   console.log(item.map((element) => (element[0].toUpperCase() + element.substring(1))
//   ).join(' '))
// }

// console.log(upperCased)



























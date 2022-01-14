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


function myCb(someString) {
  const singleTitle = someString
  const words = singleTitle.split(" ")
  let test = words.map(word => word[0].toUpperCase() + word.substring(1))
  test = test.join(' ')
  return test
}

function titleCased() {
  const newArr = tutorials.map(title => {
    const words = title.split(" ")
    let test = words.map(word => word[0].toUpperCase() + word.substring(1))
    test = test.join(' ')
    return test
  })
  return newArr
}


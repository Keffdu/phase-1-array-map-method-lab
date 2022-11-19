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

// const titleCased = () => {
//   return tutorials.map((phrase) => {
//     const words = phrase.split(' ');
//     const firstLetter = words.map((letter) => letter.charAt(0).toUpperCase() + token.slice(1))
//     const response = firstLetter.join(" ")
//     return response
//   })
// }

// console.log(titleCased)

const titleCased = () => {
  return tutorials.map((line) => {
    const tokens = line.split(" ");
    const capitalizedTokens = tokens.map(
      (token) => token.charAt(0).toUpperCase() + token.slice(1)
    );
    const response = capitalizedTokens.join(" ");
    return response;
  });
};
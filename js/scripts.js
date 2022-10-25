const offensiveWords = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"];
let textArray = text.split(" ");
let cleanArray = [];

// event handler (event, callback)
  // offensiveWordChecker();
  // wordCounter();
  // numberOfOccurencesInText();

function wordCounter(cleanArray) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  // const textArray = text.split(" "); removed for functionality in test 7
 cleanArray.forEach(function(element) {
    if (!Number(element)) {
    wordCount++;
    }
  });
  return wordCount;
}
// word, text are elements passed to numberofoccurrences
//element is passed to the for each and refers to element of const textArray
//keep user inputs as-is, let business logic translate cases if needed
function numberOfOccurencesInText(word, cleanArray) {
  // const textArray = text.split(" "); commented out temporarily
  let wordCount = 0;
  cleanArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
    return wordCount;
}

function offensiveWordChecker (textArray, offensiveWords) {
  textArray.forEach(function(element) {
    // if element in textArray === a word in offensiveWords;
    if (element.includes(offensiveWords)); //assuming this syntax works, might have to change element to text.array.element
      textArray.pop(word)
  })
  return cleanArray
}

// our version
// function numberOfOccurencesInText(word, text) {
//   //variables
//   const array = text.split(" ");
//   let wordCount = 0;
//   //testing
//   array.forEach(function(element) {
//     if ((!Number(word)) && (word.toLowerCase() === element.toLowerCase().includes(word.toLowerCase()))) {
//       wordCount ++;
//     } else {
//       wordCount += 0;
//     };
//   return wordCount;
//   });
// };
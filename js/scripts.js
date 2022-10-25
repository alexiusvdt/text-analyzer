// Business Logic

function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const textArray = text.split(" ");
  textArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  const textArray = text.split(" ");
  let wordCount = 0;
  textArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}

// UI Logic
function handleFormSubmission() {
  e.preventDefault();
  const passage = document.getElementById("text-passage").value;
  const word = document.getElementById("word").value;
  const wordCount = wordCounter(passage);
  const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
  document.getElementById("total-count").innerText = wordCount;
  document.getElementById("selected-count").innerText = occurrencesOfWord;
}

window.addEventListener("load", function() {
  document.querySelector("form#word-counter").addEventListener("submit", handleFormSubmission);
});


//old practice code, reference only do not uncomment
// const offensiveWords = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"];
// let textArray = text.split(" ");
// let cleanArray = [];

// // event handler (event, callback)
//   // offensiveWordChecker();
//   // wordCounter();
//   // numberOfOccurencesInText();

//   //counts number of words in sentence
// function wordCounter(cleanArray) {
//   if (text.trim().length === 0) {
//     return 0;
//   }
//   let wordCount = 0;
//   // const textArray = text.split(" "); removed for functionality in test 7
//  cleanArray.forEach(function(element) {
//     if (!Number(element)) {
//     wordCount++;
//     }
//   });
//   return wordCount;
// }
//counts # of times words are in text
// word, text are elements passed to numberofoccurrences
//element is passed to the for each and refers to element of const textArray
//keep user inputs as-is, let business logic translate cases if needed
// function numberOfOccurencesInText(word, cleanArray) {
//   // const textArray = text.split(" "); commented out temporarily
//   let wordCount = 0;
//   cleanArray.forEach(function(element) {
//     if (element.toLowerCase().includes(word.toLowerCase())) {
//       wordCount++;
//     }
//   });
//     return wordCount;
// }

// function offensiveWordChecker (textArray, offensiveWords) {
//   textArray.forEach(function(element) {
//     // if element in textArray === a word in offensiveWords;
//     if (element.includes(offensiveWords)); //assuming this syntax works, might have to change element to text.array.element
//       textArray.pop(word)
//   })
//   return cleanArray
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
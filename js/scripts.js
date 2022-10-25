// Utility Logic
function isEmpty(testString) {
  return (testString.trim().length === 0);
}

// Business Logic

function wordCounter(text) {
  if (isEmpty(text)) {
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
  if (isEmpty(word) || isEmpty(text)) {
    return 0;
  }
  const textArray = text.split(" ");
  let wordCount = 0;
  textArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}

function boldPassage(word, text) {
  if (isEmpty(word) || isEmpty(text)) {
    return null;
  }
  const p = document.createElement("p");
  let textArray = text.split(" ");
  textArray.forEach(function(element, index) {
    if (word === element) {
      const bold = document.createElement("strong");
      bold.append(element);
      p.append(bold);
    } else {
      p.append(element);
    }
    if (index !== (textArray.length - 1)) {
      p.append(" ");
    }
  });
  return p;
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
  // new lines here!
  let boldedPassage = boldPassage(word, passage);
  if (boldedPassage) {
    document.querySelector("div#bolded-passage").append(boldedPassage);
  } else {
    document.querySelector("div#bolded-passage").innerText = null;
  }
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
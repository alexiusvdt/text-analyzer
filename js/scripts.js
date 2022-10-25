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
// word, text are elements passed to numberofoccurrences
//element is passed to the for each and refers to element of const textArray
//keep user inputs as-is, let business logic translate cases if needed
function numberOfOccurencesInText(word, text) {
  const textArray = text.split(" ");
  let wordCount = 0;
  textArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}

// our version
function numberOfOccurencesInText(word, text) {
  //variables
  const array = text.split(" ");
  let wordCount = 0;
  //testing
  array.forEach(function(element) {
    if ((!Number(word)) && (word.toLowerCase() === element.toLowerCase().includes(word.toLowerCase()))) {
      wordCount ++;
    } else {
      wordCount += 0;
    };
  return wordCount;
  });
};
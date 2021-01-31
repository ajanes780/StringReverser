// this program can handle up to 4 data sets of numbers and letters
// it will reverse the words and keep the numbers in the same order
// this is done with out .reverse or .join intentionally
// data can be entered from the command line via node

let userInput = process.argv.slice(2);

const reverse = function (data) {
  let start = [];
  start.push(data[0]);
  start.push(data[1]);
  start.push(data[2]);
  start.push(data[3]);
  // filer out undefined data
  let filtered = start.filter(function (x) {
    return x !== undefined;
  });

  filtered = filtered.toString();
  let outputNumbers = [];
  let outputLetters = [];

  if (data[0] === undefined) {
    console.log("Hey bro enter something first okay");
  }
  for (let i = filtered.length - 1; i >= 0; i--) {
    if (
      filtered[i] !== "1" &&
      filtered[i] !== "2" &&
      filtered[i] !== "3" &&
      filtered[i] !== "4" &&
      filtered[i] !== "5" &&
      filtered[i] !== "6" &&
      filtered[i] !== "7" &&
      filtered[i] !== "8" &&
      filtered[i] !== "9" &&
      filtered[i] !== "0"
    ) {
      outputLetters.push(filtered[i]);
    } else {
      outputNumbers.push(filtered[i]);
    }
  }
  let opNumbersSorted = outputNumbers.sort((a, b) => a - b);
  outputLetters.splice(outputLetters.length / 2, 0, outputNumbers[1]);
  outputLetters.splice(outputLetters.length / 2 - 1, 0, " ");
  let opLettersString = outputLetters.toString();
  if (outputNumbers[0] === undefined) {
    let option1 = opLettersString.replace(/,/g, "");
    console.log("this is answer with no numbers", option1);
  } else {
    let answer = opNumbersSorted[0] + opLettersString.replace(/,/g, "");
    console.log(" This is the answer with numbers", answer);
  }
};

reverse(userInput);

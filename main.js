const currListHolder = document.getElementById('currListHolder');
const binanceTextHolder = document.getElementById('binanceTextHolder');
const charLenInput = document.getElementById('charLen');
const clueCharInput = document.getElementById('clueChar');
const clueCharIndexInput = document.getElementById('clueCharIndex');
const clueCharsInput = document.getElementById('clueCharsInput');
let currList = [];
let currListCopy = [];


function filterByLen() {
  let binancetext = String(binanceTextHolder.innerText || "").split(/[\s,.]+/);
  let charlen = parseInt(charLenInput.value);
  let counter = 0;
  let currList = [];

  for (let i = 0; i < binancetext.length; i++) {
    const word = binancetext[i];
    if (
      word.length === charlen //||
      /*word.length === charlen + 1 ||
      word.length === charlen - 1*/
    ) {
      counter++;
      currList.push(word);
    }
  }

  alert("Done. Found Words: " + counter);
  currListHolder.innerText = currList.join(", ");
  document.getElementById("cluebtn").removeAttribute("disabled");
  document.getElementById("multiCluebtn").removeAttribute("disabled");
}


function filterByClue() {
  let clueChar = clueCharInput.value;
  let clueCharIndex = parseInt(clueCharIndexInput.value) - 1;
  let counter = 0;
  let currListCopy = [];

  alert("True clue character index is " + clueCharIndex + " and clue character is " + clueChar);

  for (let i = 0; i < currList.length; i++) {
    let word = currList[i];
    if (
      /*word[clueCharIndex - 1] === clueChar ||*/
      word[clueCharIndex] === clueChar /*||
      word[clueCharIndex + 1] === clueChar*/
    ) {
      currListCopy.push(word);
      counter++;
    }
  }

  if (counter === 0) {
    alert("No words found.");
    currListHolder.innerText = currList.join(", ");
  } else {
    currListHolder.innerText = currListCopy.join(", ");
  }
}


function filterByMultiClue() {
  let clueChars = clueCharsInput.value;
  let counter = 0;
  let currListCopy = [];

  for (let i = 0; i < currList.length; i++) {
    let word = currList[i];
    for (let j = 0; j < clueChars.length; j++) {
      if (word.includes(clueChars[j])) {
        currListCopy.push(word);
        counter++;
        break;  // Avoid pushing the same word multiple times
      }
    }
  }

  if (counter === 0) {
    alert("No words found.");
    currListHolder.innerText = currList.join(", ");
  } else {
    currListHolder.innerText = currListCopy.join(", ");
  }
}

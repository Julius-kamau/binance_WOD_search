const currListHolder = document.getElementById('currListHolder');
const binanceTextHolder = document.getElementById('binanceTextHolder');
const charLenInput = document.getElementById('charLen');
const clueCharInput = document.getElementById('clueChar');
const clueCharIndexInput = document.getElementById('clueCharIndex');
const clueCharsInput = document.getElementById('clueCharsInput');
const clueCharsInputA = document.getElementById('multiCLueCharA');
const clueCharsInputB = document.getElementById('multiCLueCharB');
const clueCharsInputC = document.getElementById('multiCLueCharC');
let currList = [];
let currListCopy = [];


function filterByLen() {
  let binancetext = String(binanceTextHolder.innerText || "").split(/[\s,.]+/);
  let charlen = parseInt(charLenInput.value);
  let counter = 0;
  currList = [];
  
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
  currListCopy = [];
  
  alert("True clue character index is " + clueCharIndex + " and clue character is " + clueChar);
  
  for (let i = 0; i < currList.length; i++) {
    let word = currList[i];
    if (word[clueCharIndex] === clueChar) {
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

function filterByCosecutiveClue() {
  let clueChars = clueCharsInput.value;
  let counter = 0;
  currListCopy = [];
  
  for (let i = 0; i < currList.length; i++) {
    let word = currList[i];
    if (word.includes(clueChars)) {
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
  currListCopy = [];
  let clueCharsA = clueCharsInputA.value;
  let clueCharsB = clueCharsInputB.value;
  let clueCharsC = clueCharsInputC.value;
  let counter = 0;
  //alert(clueCharsA + clueCharsB + clueCharsC);
  
  for (let i = 0; i < currList.length; i++) {
    if (currList[i].includes(clueCharsA) && currList[i].includes(clueCharsB) && currList[i].includes(clueCharsC)) {
      currListCopy.push(currList[i]);
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
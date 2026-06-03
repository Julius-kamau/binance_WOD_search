const currListHolder = document.getElementById('currListHolder');
const binanceTextHolder = document.getElementById('binanceTextHolder');
const charLenInput = document.getElementById('charLen');
const clueCharInput = document.getElementById('clueChar');
const clueCharIndexInput = document.getElementById('clueCharIndex');
const clueCharsInput = document.getElementById('clueCharsInput');
const clueCharsInputA = document.getElementById('multiCLueCharA');
const clueCharsInputB = document.getElementById('multiCLueCharB');
const clueCharsInputC = document.getElementById('multiClueCharC');
const nonClueCharsInput = document.getElementById('nonClueCharsInput');
let currList = [];
let currListCopy = [];


function filterByLen() {
  let binancetext = String(binanceTextHolder.innerText || "").split(/[\s,.]+/);
  let charlen = parseInt(charLenInput.value);
  let counter = 0;
  currList = [];
  for (let i = 0; i < binancetext.length; i++) {
    const word = binancetext[i];
    if (word.length === charlen && !currList.includes(word)) {
      currList.push(word);
      counter++;
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
  const clueCharsA = clueCharsInputA.value.split("");
  const currListCopy = [];
  for (let i = 0; i < currList.length; i++) {
    const word = currList[i];
    let matchesAll = true;
    for (let c of clueCharsA) {
      if (!word.includes(c)) {
        matchesAll = false;
        break;
      }
    }
    if (matchesAll) currListCopy.push(word);
  }
  currListHolder.innerText = currListCopy.length ?
    currListCopy.join(", ") :
    "No words found.";
}


function filterByNonChars() {
  let nonClueChars = nonClueCharsInput.value.toLowerCase().split("");

  for (let i = 0; i < nonClueChars.length; i++) {
    let currNonChar = nonClueChars[i];

    for (let j = currList.length - 1; j >= 0; j--) {
      if (currList[j].toLowerCase().includes(currNonChar)) {
        currList.splice(j, 1);
      }
    }
  }

  currListHolder.innerText = currList.join(", ");
}



//JUNK----

/*https://www.binance.com/en/activity/word-of-the-day/binancechat?utm_source=muses
function checkWord() {
  let str = document.getElementById('myText').value;
  let output= document.getElementById('output');
  //let substring = "bn-flex";
  let myStr = str.replace(/bn-flex/g, "--------------IT WAS HERE----------------");
  output.innerText = myStr;
}

//window.getComputedStyle(document.getElementsByName( "bn-flex")[3]);

*/

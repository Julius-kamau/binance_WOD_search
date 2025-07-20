const currListHolder = document.getElementById('currListHolder');
const binanceTextHolder = document.getElementById('binanceTextHolder');
const charLenInput = document.getElementById('charLen');
const clueCharInput = document.getElementById('clueChar');
const clueCharIndexInput = document.getElementById('clueCharIndex');
const clueCharsInput = document.getElementById('clueCharsInput');
let currList = [];
let currListCopy = [];


function filterByLen(){
  let binancetext = String(binanceTextHolder.innerText || "").split(" "||","||".");
  let charlen = parseInt(charLenInput.value);
  let counter = 0;
  currList = [];
  
  for(i=0; i<binancetext.length; i++){
    if(binancetext[i].length===charlen||binancetext[i].length===charlen++||binancetext[i].length===charlen--){
      counter ++;
      currList.push(binancetext[i]);
    }
  }
  alert("done.Found Words: "+counter);
  currListHolder.innerText=currList;
  document.getElementById('cluebtn').removeAttribute("disabled");
  document.getElementById('multiCluebtn').removeAttribute("disabled");
}

function filterByClue(){
  let clueChar = clueCharInput.value;
  let clueCharIndex = parseInt(clueCharIndexInput.value)-1;
  let counter = 0;
  currListCopy = [];
  alert("true clue character index is "+clueCharIndex+" and clue character is "+clueChar);
  
  for(i=0; i<currList.length; i++){
    if(currList[i][clueCharIndex] == clueChar||currList[i][clueCharIndex++] == clueChar||currList[i][clueCharIndex--]== clueChar){
      //alert("the word is: "+currList[i]);
      currListCopy.push(currList[i]);
      counter++;
    }
    //alert(currList[i][clueCharIndex]+" "+clueChar);
  } 
  //alert(clueCharIndex + " "+typeof(clueCharIndex));
  if(counter==0){alert("no words found."); currListHolder.innerText=currList;}
  currListHolder.innerText = currListCopy;
}

function filterByMultiClue(){
  let clueChars = clueCharsInput.value;
  let counter = 0;
  currListCopy = [];
  for(i=0; i<currList.length; i++){
   if(currList[i].includes(clueChars)){
    //alert(currList[i]+" could be the word");
    currListCopy.push(currList[i]);
    counter ++;
   } 
  }
  if(counter==0){alert("no words found."); currListHolder.innerText=currList;}
  currListHolder.innerText = currListCopy;
}
// This function for removing spaces
function cleanString(str) {
  return str.trim().replace(/\s+/g," ");
}

// This function splits sentences
function splitWords(str) {
  return str.split(" ");
}

// This function counts if there is a repeative elemeent
function countWords(words) {
  const wordCount = {};

  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    if (wordCount[word]) {
      wordCount[word] = wordCount[word] + 1;
    } else {
      wordCount[word] = 1;
    }
  }

  return wordCount;
}

// calling function 
 const str = "hello    world    hello   ";
 const cleans = cleanString(str);
 const words = splitWords(cleans);
 const Counts = countWords(words);
 console.log(Counts);


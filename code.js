let textArea = document.getElementById("text");
let results = document.getElementById("results");

// Your Code Here.
let dataRenderer = function() { // This functioin renders the table with the data by creating, styling and placing the needed elements
    //Create two divs, one to hold the Text Analysis Title, and one to Hold the Data
    let textAnalysisDiv = document.createElement(`div`);
    let h2Element = document.createElement(`h2`);
    results.append(textAnalysisDiv);
    textAnalysisDiv.append(h2Element)
    h2Element.innerText = `Text Analysis`;

    let dataResultsDiv = document.createElement(`div`);
    results.append(dataResultsDiv);
    dataResultsDiv.style.display = `flex`;
    dataResultsDiv.style.flexDirection = `row`;
    dataResultsDiv.style.justifyContent = `space-evenly`;

    //Create two divs withing the bottom div to make two columns
    let resultsLeftDiv = document.createElement(`div`);
    dataResultsDiv.append(resultsLeftDiv);

    let resultsRightDiv = document.createElement(`div`);
    dataResultsDiv.append(resultsRightDiv);

    //Create the elements within the left div to hold the Vowel and Punctuation Counts
    let vowelTitleElement = document.createElement(`h3`);
    let vowelsElement = document.createElement(`p`);
    resultsLeftDiv.append(vowelTitleElement);
    resultsLeftDiv.append(vowelsElement);
    vowelTitleElement.innerText = `Vowel Counts`;
    vowelsElement.id = `vowelsCount`

    let punctuationTitleElement = document.createElement(`h3`);
    let punctuationTextElement = document.createElement(`p`);
    resultsLeftDiv.append(punctuationTitleElement);
    resultsLeftDiv.append(punctuationTextElement);
    punctuationTitleElement.innerText = `Punctuation Counts`
    punctuationTextElement.id = `punctuationsCount`
    
    //Create the elements within the right div to hold the rest of the data counts
    let numCharactersElement = document.createElement(`h3`);
    let numWordsElement = document.createElement(`h3`);
    let longestWordElement = document.createElement(`h3`);
    let shortestWordElement = document.createElement(`h3`);
    let last3WordsElement = document.createElement(`h3`);
    let waldoCountElement = document.createElement(`h3`);
    resultsRightDiv.append(numCharactersElement);
    numCharactersElement.id = `charactersCount`;
    resultsRightDiv.append(numWordsElement);
    numWordsElement.id = `wordsCounts`;
    resultsRightDiv.append(longestWordElement);
    longestWordElement.id = `longestWord`;
    resultsRightDiv.append(shortestWordElement);
    shortestWordElement.id = `shortestWord`;
    resultsRightDiv.append(last3WordsElement);
    last3WordsElement.id = `last3Words`;
    resultsRightDiv.append(waldoCountElement);
    waldoCountElement.id = `waldoIndex`;

    // Creates the default view before updating renderer
    vowelsElement.innerText = `a: 0 \n e: 0 \n i: 0 \n o: 0 \n u: 0`;
    punctuationTextElement.innerText = `Periods: 0 \n Commas: 0 \n Question Marks: 0 \n Exclamations: 0`;
    numCharactersElement.innerText = `Number of Characters: 0`;
    numWordsElement.innerText = `Number of Words: 0`;
    longestWordElement.innerText = `Longest Word: ""`;
    shortestWordElement.innerText = `Shortest Word: ""`;
    last3WordsElement.innerText = `Last Three Words: []`;
    waldoCountElement.innerText = `Waldo Indexes: []`;
}

let updateRenderer = function(resultData) { // This function updates the renderer to the new values for the analyzed data
    document.getElementById(`vowelsCount`).innerText = `a: ${resultData.vowels.a} \n e: ${resultData.vowels.e} \n i: ${resultData.vowels.i} \n o: ${resultData.vowels.o} \n u: ${resultData.vowels.u}`;
    document.getElementById(`punctuationsCount`).innerText = `Periods: ${resultData.punctuation.period} \n Commas: ${resultData.punctuation.comma} \n Question Marks: ${resultData.punctuation.questionMark} \n Exclamations: ${resultData.punctuation.exclamation}`;
    document.getElementById(`charactersCount`).innerText = `Number of Characters: ${resultData.numCharacters}`;
    document.getElementById(`wordsCounts`).innerText = `Number of Words: ${resultData.numWords}`;
    document.getElementById(`longestWord`).innerText = `Longest Word: ${resultData.longestWord}`;
    document.getElementById(`shortestWord`).innerText = `Shortest Word: ${resultData.shortestWord}`;
    document.getElementById(`last3Words`).innerText = `Last Three Words: ${resultData.lastThreeWords}`;
    document.getElementById(`waldoIndex`).innerText = `Waldo Indexes: ${resultData.waldoIndexes}`;
}


let dataAnalyzer = function() { // This function is the master function that will call on keyup
    let result = {
        text: `${textArea}`,
        vowels: {
          a: 0,
          e: 0,
          i: 0,
          o: 0,
          u: 0
        },
        punctuation: {
          period: 0,
          comma: 0,
          exclamation: 0,
          questionMark: 0
        },
        numCharacters: 0,
        numWords: 0,
        longestWord: "",
        shortestWord: "",
        lastThreeWords: [],
        waldoIndexes: [],
      }

      vowelAnalyzer(result);
      punctuationAnalyzer(result);
      characterAnalyzer(result);
      wordAnalyzer(result);
      longWordAnalyzer(result);
      shortWordAnalyzer(result);
      last3Analyzer(result);
      waldoAnalyzer(result);
      updateRenderer(result);
}

let vowelAnalyzer = function(resultData) { // This function analyzes the input text for vowels, and increase count
    for (let index = 0; index < resultData.text.length; index++) {
        if (resultData.text[index] === `a`) {
            resultData.vowels.a += 1;
        } else if (resultData.text[index] === `e`) {
            resultData.vowels.e += 1;
        } else if (resultData.text[index] === `i`) {
            resultData.vowels.i += 1;
        } else if (resultData.text[index] === `o`) {
            resultData.vowels.o += 1;
        }  else if (resultData.text[index] === `u`) {
            resultData.vowels.u += 1;
        }
    }
}

let punctuationAnalyzer = function(resultData) { // This function analyzes the input text for punctuation, increase count
    for (let index = 0; index < resultData.text.length; index++) {
        if (resultData.text[index] === `.`) {
            resultData.punctuation.period += 1;
        } else if (resultData.text[index] === `,`) {
            resultData.punctuation.comma += 1;
        } else if (resultData.text[index] === `!`) {
            resultData.punctuation.exclamation += 1;
        } else if (resultData.text[index] === `?`) {
            resultData.punctuation.questionMark += 1;
        }
    }
}

let characterAnalyzer = function(resultData) { // This function analyzes the input text and determines the number of characters
    let characterCount = 0;

    for ( let index = 0; index < resultData.text.length; index++) {
        characterCount += 1;
    }
    resultData.numCharacters = characterCount;
}

let wordAnalyzer = function(resultData) { // This function analyzes the input text and determins the word count
    let removePuctuation = resultData.text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    let cleanArray = removePuctuation.split(` `);
    let wordCount = 0

    for ( let index = 0; index < cleanArray.length; index++) {
            wordCount += 1;
    }
}
let longWordAnalyzer = function(resultData) { // This function analyzes the input text and determines the longest word
    let removePuctuation = resultData.text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    let cleanArray = removePuctuation.split(` `);
    let longestWord = 0;

    for ( let index = 0; index < cleanArray.length; index++) {
        if (cleanArray[index].length > longestWord) {
            longestWord = cleanArray[index].length;
        }

    }
}

let shortWordAnalyzer = function(resultData) {  // This function analyzes the input text and determines the shortest word
    let removePuctuation = resultData.text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    let cleanArray = removePuctuation.split(` `);
    let shortestWord = 0;

    for ( let index = 0; index < cleanArray.length; index++) {
        if (cleanArray[index].length < shortestWord) {
            shortestWord = cleanArray[index].length;
        }
    }
    resultData.shortestWord = shortestWord;
}

let last3Analyzer = function(resultData) {  // This function analyzes the input text and determines the last 3 words
    let removePuctuation = resultData.text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    let cleanArray = removePuctuation.split(` `);
    
    resultData.last3Words = cleanArray.slice(-3);
}

let waldoAnalyzer = function(resultData) { // This function analyzes the input text and determines the Waldo Indexes
    for (let index = 0; index < resultData.text.length; index++) {
        if (resultData.text.toLowerCase().slice(index, index + 5) === `waldo`) {
            resultData.waldoIndexes.push(index);
        }
    }
}

dataRenderer();
textArea.addEventListener(`keyup`, dataAnalyzer);

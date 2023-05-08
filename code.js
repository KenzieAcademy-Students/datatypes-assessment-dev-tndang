let textArea = document.getElementById("text");
let results = document.getElementById("results");

// Your Code Here.
let result = {}

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
    return resultData.vowels;
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
    return resultData.punctuation;
}

let characterAnalyzer = function(resultData) { // This function analyzes the input text and determines the number of characters
    let characterCount = 0;

    for (let index = 0; index < resultData.text.length; index++) {
        characterCount += 1;
    }
    return characterCount;
}

let wordAnalyzer = function(resultData) { // This function analyzes the input text and determins the word count
    let removePuctuation = resultData.text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g,"");
    let cleanArray = removePuctuation.split(` `);
    let wordCount = 0

    for (let index = 0; index < cleanArray.length; index++) {
        wordCount += 1;
    }
    return wordCount;
}
let longWordAnalyzer = function(resultData) { // This function analyzes the input text and determines the longest word
    let removePuctuation = resultData.text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g,"");
    let cleanArray = removePuctuation.split(` `);
    let longestWord = cleanArray.sort(function(word, anotherWord) {
        return anotherWord.length - word.length;
    })
    return longestWord[0];
}

let shortWordAnalyzer = function(resultData) {  // This function analyzes the input text and determines the shortest word
    let removePuctuation = resultData.text.replaceAll(/\s+[.,\/#!$%\^&\*;:{}=\-_`~()?]/g,"");
    let cleanArray = removePuctuation.split(` `);
    let shortest = cleanArray[0].length
    let shortestWord = ``;

    for (let index = 0; index < cleanArray.length; index++) {
        if (shortest > cleanArray[index].length) {
            shortestWord = cleanArray[index];
        }
    }

    return shortestWord;
}

let last3Analyzer = function(resultData) {  // This function analyzes the input text and determines the last 3 words
    let removePuctuation = resultData.text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g,"");
    let cleanArray = removePuctuation.split(` `);
    
    return cleanArray.slice(-3);
}

let waldoAnalyzer = function(resultData) { // This function analyzes the input text and determines the Waldo Indexes
    for (let index = 0; index < resultData.text.length; index++) {
        if (resultData.text.toLowerCase().slice(index, index + 5) === `waldo`) {
            resultData.waldoIndexes.push(index);
        }
    }
    return resultData.waldoIndexes;
}

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
    longestWordElement.innerText = `Longest Word: `;
    shortestWordElement.innerText = `Shortest Word: `;
    last3WordsElement.innerText = `Last Three Words: `;
    waldoCountElement.innerText = `Waldo Indexes: []`;
}

let updateRenderer = function() { // This function updates the renderer to the new values for the analyzed data
    document.getElementById(`vowelsCount`).innerText = `a: ${result.vowels.a} \n e: ${result.vowels.e} \n i: ${result.vowels.i} \n o: ${result.vowels.o} \n u: ${result.vowels.u}`;
    document.getElementById(`punctuationsCount`).innerText = `Periods: ${result.punctuation.period} \n Commas: ${result.punctuation.comma} \n Question Marks: ${result.punctuation.questionMark} \n Exclamations: ${result.punctuation.exclamation}`;
    document.getElementById(`charactersCount`).innerText = `Number of Characters: ${result.numCharacters}`;
    document.getElementById(`wordsCounts`).innerText = `Number of Words: ${result.numWords}`;
    document.getElementById(`longestWord`).innerText = `Longest Word: ${result.longestWord}`;
    document.getElementById(`shortestWord`).innerText = `Shortest Word: ${result.shortestWord}`;
    document.getElementById(`last3Words`).innerText = `Last Three Words: ${result.lastThreeWords}`;
    document.getElementById(`waldoIndex`).innerText = `Waldo Indexes: [${result.waldoIndexes}]`;
}

let dataAnalyzer = function() { // This function is the master function that will call on keyup
    result = {
        text: `${textArea.value}`,
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

      result.vowels = vowelAnalyzer(result);
      result.punctuation = punctuationAnalyzer(result);
      result.numCharacters = characterAnalyzer(result);
      result.numWords = wordAnalyzer(result);
      result.longestWord = longWordAnalyzer(result);
      result.shortestWord = shortWordAnalyzer(result);
      result.lastThreeWords = last3Analyzer(result);
      result.waldoIndexes = waldoAnalyzer(result);
      updateRenderer();
}


dataRenderer(); //Evokes the renderer once
textArea.addEventListener(`keyup`, dataAnalyzer); // On every keyup in the textArea should execute the functions within 

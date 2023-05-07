let textArea = document.getElementById("text");
let results = document.getElementById("results");

// Your Code Here.
let analyzedData = {
    vowels: {
        a: 0,
        e: 0, 
        i: 0,
        o: 0,
        u: 0,
    },
    punctuationMarks: {
        period: 0,
        comma: 0,
        questionMark: 0,
        exclamationPoint: 0,
    },
    numberOfCharacters: 0,
    numnerOfWords: 0,
    longestWord: "",
    shortestWord: "",
    last3Words: [],
    waldoOccuranceIndex: [],
}

let vowelCounter = function() {
    let vowels = {
        a: 0,
        e: 0,
        i: 0,
        o: 0,
        u: 0,
    };
}

let punctuationCounter = function() {
    let punctuation = {
        period: 0,
        comma: 0,
        questionMark: 0,
        exclamation: 0,
    };
}

let characterCounter = function() {
    let numCharacters = 0;
}

let wordCounter = function() {
    let numWords = 0;
}

let longWordDeterminer = function() {
    let longestWord = ``;
}

let shortWordDeterminer = function() {
    let shortestWord = ``;
}

let last3WordsDeterminer = function() {
    let last3Words = ``;
}

let waldoIndexDeterminer = function() {
    let waldoIndexes = ``;
}

let dataAnalysis = function() {
}

let renderResults = function() {
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
    vowelTitleElement.innerText = `Vowel Counts`
    vowelsElement.innerText = `a: 0 \n e: 0 \n i: 0 \n o: 0 \n u: 0`;

    let punctuationTitleElement = document.createElement(`h3`);
    let punctuationTextElement = document.createElement(`p`);
    resultsLeftDiv.append(punctuationTitleElement);
    resultsLeftDiv.append(punctuationTextElement);
    punctuationTitleElement.innerText = `Punctuation Counts`
    punctuationTextElement.innerText = `Periods: 0 \n Commas: 0 \n Question Marks: 0 \n Exclamations: 0`;

    //Create the elements within the right div to hold the rest of the data counts
    let numCharactersElement = document.createElement(`h3`);
    let numWordsElement = document.createElement(`h3`);
    let longestWordElement = document.createElement(`h3`);
    let shortestWordElement = document.createElement(`h3`);
    let last3WordsElement = document.createElement(`h3`);
    let waldoCountElement = document.createElement(`h3`);
    resultsRightDiv.append(numCharactersElement);
    numCharactersElement.innerText = `Number of Characters: 0`;
    resultsRightDiv.append(numWordsElement);
    numWordsElement.innerText = `Number of Words: 0`;
    resultsRightDiv.append(longestWordElement);
    longestWordElement.innerText = `Longest Word: `;
    resultsRightDiv.append(shortestWordElement);
    shortestWordElement.innerText = `Shortest Word: `;
    resultsRightDiv.append(last3WordsElement);
    last3WordsElement.innerText = `Last Three Words: `;
    resultsRightDiv.append(waldoCountElement);
    waldoCountElement.innerText = `Waldo Indexes: [ ]`;
}

renderResults();
textArea.addEventListener("keyup", dataAnalysis);
let textArea = document.getElementById("text");
let results = document.getElementById("results");

// Your Code Here.
let result = {};

let vowelAnalyzer = function() {
    let vowels = {
        a: 0,
        e: 0,
        i: 0,
        o: 0,
        u: 0,
    }

    for (let index = 0; index < textArea.length; index++) {
        if (textArea.charAt(index) == `a`) {
            vowels.a += 1;
        }
    }
    return vowels;
}

let punctuationAnalyzer = function() {
    let punctuation = {
        period: 0,
        comma: 0,
        exclamation: 0,
        questionMark: 0
    }
    return punctuation;
}

let characterAnalyzer = function() {
    let numCharacters = 0;
    return numCharacters;
}
let wordAnalyzer = function() {
    let numWords = 0;
    return numWords;
}
let longWordAnalyzer = function() {
    let longestWord = ``;
    return longestWord;
}

let shortWordAnalyzer = function() {
    let shortestWord = ``;
    return shortestWord;
}

let last3Analyzer = function() {
    let lastThreeWords = [];
    return lastThreeWords;
}

let waldoAnalyzer = function() {
    let waldoIndexes = [];
    return waldoIndexes;
}

let dataRenderer = function(resultData) {
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
    vowelsElement.innerText = `a: ${resultData.vowels.a} \n e: ${resultData.vowels.e} \n i: ${resultData.vowels.i} \n o: ${resultData.vowels.o} \n u: ${resultData.vowels.u}`;

    let punctuationTitleElement = document.createElement(`h3`);
    let punctuationTextElement = document.createElement(`p`);
    resultsLeftDiv.append(punctuationTitleElement);
    resultsLeftDiv.append(punctuationTextElement);
    punctuationTitleElement.innerText = `Punctuation Counts`
    punctuationTextElement.innerText = `Periods: ${resultData.punctuation.period} \n Commas: ${resultData.punctuation.comma} \n Question Marks: ${resultData.punctuation.questionMark} \n Exclamations: ${resultData.punctuation.exclamation}`;

    //Create the elements within the right div to hold the rest of the data counts
    let numCharactersElement = document.createElement(`h3`);
    let numWordsElement = document.createElement(`h3`);
    let longestWordElement = document.createElement(`h3`);
    let shortestWordElement = document.createElement(`h3`);
    let last3WordsElement = document.createElement(`h3`);
    let waldoCountElement = document.createElement(`h3`);
    resultsRightDiv.append(numCharactersElement);
    numCharactersElement.innerText = `Number of Characters: ${resultData.numCharacters}`;
    resultsRightDiv.append(numWordsElement);
    numWordsElement.innerText = `Number of Words: ${resultData.numWords}`;
    resultsRightDiv.append(longestWordElement);
    longestWordElement.innerText = `Longest Word: ${resultData.longestWord}`;
    resultsRightDiv.append(shortestWordElement);
    shortestWordElement.innerText = `Shortest Word: ${resultData.shortestWord}`;
    resultsRightDiv.append(last3WordsElement);
    last3WordsElement.innerText = `Last Three Words: ${resultData.lastThreeWords}`;
    resultsRightDiv.append(waldoCountElement);
    waldoCountElement.innerText = `Waldo Indexes: ${resultData.waldoIndexes}`;
}

textArea.addEventListener("keyup", vowelAnalyzer);
textArea.addEventListener("keyup", punctuationAnalyzer);
textArea.addEventListener("keyup", characterAnalyzer);
textArea.addEventListener("keyup", wordAnalyzer);
textArea.addEventListener("keyup", longWordAnalyzer);
textArea.addEventListener("keyup", shortWordAnalyzer);
textArea.addEventListener("keyup", last3Analyzer);
textArea.addEventListener("keyup", waldoAnalyzer);

dataRenderer(result);
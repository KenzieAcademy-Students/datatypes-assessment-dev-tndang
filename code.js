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

let dataAnalysis = function() {
    renderResults();
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
    
    //Create two divs withing the bottom div to make two columns
    let resultsLeftDiv = document.createElement(`div`);
    dataResultsDiv.append(resultsLeftDiv);

    let resultsRightDiv = document.createElement(`div`);
    dataResultsDiv.append(resultsRightDiv);

    //Create two divs within the following first div to hold the Vowel and Punctuation Counts
    let vowelCountDiv = document.createElement(`div`);
    let pElement1 = document.createElement(`p`);
    resultsLeftDiv.append(vowelCountDiv);
    vowelCountDiv.append(pElement1);
    pElement1.innerText = 
        `
        a: 0 \n
        e: 0 \n
        i: 0 \n
        o: 0 \n
        u: 0
        `
    ;
    let punctuationCountDiv = document.createElement(`div`);
    resultsLeftDiv.append(punctuationCountDiv);
}

textArea.addEventListener("keyup", dataAnalysis);
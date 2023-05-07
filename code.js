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

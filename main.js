let start = document.getElementById("start")
let result = document.getElementById("result")
let main = document.getElementById("main")
let allQuestions = [
    {
        question: '2+2',
        correct: 4,
        answers:[4, 6,8, 10]
    },
    {
        question: '4+4',
        correct: 8,
        answers:[8, 9,12, 15]
    },
];
let currentQuestion = 0;
let countsuccess = 0;
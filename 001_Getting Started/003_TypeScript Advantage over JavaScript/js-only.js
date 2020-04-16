// Platform             : GitHub
// Course Name          : typescript-tutorials
// Company              : Go Digit General Insurance Limited
// Author               : Deepjyoti Barman
// Designation          : QA Analyst
// Date                 : April 16 (Thursday), 2020




/* Program to demonstrate the advantage of TypeScript over JavaScript */

const button   = document.querySelector("button");
const inputTF1 = document.getElementById("num1");
const inputTF2 = document.getElementById("num2");
const resultTF = document.getElementById("result");

// Function that does not work and performs concatenation instead of addition
function add1(num1, num2) {
    return num1 + num2
}

// Function that works and performs addition with an extra type check
function add2(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number")
        return num1 + num2;
    else
        return +num1 + +num2;
}

button.addEventListener("click", function() {
    resultTF.placeholder = add2(inputTF1.value, inputTF2.value);
});
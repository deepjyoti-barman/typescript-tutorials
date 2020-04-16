// Platform             : GitHub
// Course Name          : typescript-tutorials
// Company              : Go Digit General Insurance Limited
// Author               : Deepjyoti Barman
// Designation          : QA Analyst
// Date                 : April 16 (Thursday), 2020
/* Program to demonstrate the advantage of TypeScript over JavaScript */
// ! --> (it means) the element identified will never yield null, it will always find an element
// HTMLInputElement  --> This specifies the type of the element
var button = document.querySelector("button");
var inputTF1 = document.getElementById("num1");
var inputTF2 = document.getElementById("num2");
var resultTF = document.getElementById("result");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    resultTF.placeholder = add(+inputTF1.value, +inputTF2.value).toString();
});

// Platform             : GitHub
// Course Name          : typescript-tutorials
// Company              : Go Digit General Insurance Limited
// Author               : Deepjyoti Barman
// Designation          : QA Analyst
// Date                 : April 16 (Thursday), 2020




/* Program to demonstrate the advantage of TypeScript over JavaScript */

// ! --> (it means) the element identified will never yield null, it will always find an element
// HTMLInputElement  --> This specifies the type of the element
const button   = document.querySelector("button") as HTMLButtonElement;
const inputTF1 = document.getElementById("num1")! as HTMLInputElement;
const inputTF2 = document.getElementById("num2")! as HTMLInputElement;
const resultTF = document.getElementById("result")! as HTMLInputElement;

function add(num1: number, num2: number) {
        return num1 + num2;
}

button.addEventListener("click", function() {
    resultTF.placeholder = add(+inputTF1.value, +inputTF2.value).toString();
});
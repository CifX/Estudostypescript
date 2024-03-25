"use strict";
let arrayA = [];
let arrayB = [];
let arrayC = [];
let canContinue = true;
let num1;
let num2;
let canContinue2;
while (canContinue) {
    const inputA = prompt("Insira um numero no primeiro vetor: ");
    if (inputA != null) {
        num1 = parseFloat(inputA);
        arrayA.push(num1);
    }
    else {
        console.log("Entrada invalida! Insira apenas numeros!");
        continue;
    }
    const inputB = prompt("Insira um numero no segundo vetor: ");
    if (inputB != null) {
        num2 = parseFloat(inputB);
        arrayB.push(num2);
    }
    else {
        console.log("Entrada invalida! Insira apenas numeros!");
        continue;
    }
    if (arrayA.length != arrayB.length) {
        console.log("Os dois vetores devem ter a mesma quantidade de numeros!");
    }
    canContinue2 = prompt("Deseja inserir mais numeros? Digite s para sim ou n para não");
    if (canContinue2 == 'n') {
        canContinue = false;
    }
    else {
        continue;
    }
    for (let i = 0; i < arrayA.length; i++) {
        if (arrayB.includes(arrayA[i]) || arrayA[i] % 2 !== 0) {
            arrayC.push(arrayA[i]);
        }
    }
    for (let j = 0; j < arrayB.length; j++) {
        if (arrayA.includes(arrayB[j]) || arrayB[j] % 2 !== 0) {
            arrayC.push(arrayB[j]);
        }
    }
}
console.log("Vetor A: ", arrayA);
console.log("Vetor B: ", arrayB);
console.log("Vetor C", arrayC);
//# sourceMappingURL=index.js.map
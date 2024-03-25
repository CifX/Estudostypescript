let arrayA: number[] = [];
let arrayB: number[] = [];
let arrayC: number[] = []
let canContinue = true;
let num1: number;
let num2: number;
let canContinue2: string | null

while(canContinue){
  const inputA: string | null = prompt("Insira um numero no primeiro vetor: ");
  if(inputA != null){
    num1 = parseFloat(inputA)
    arrayA.push(num1)
  }else{
    console.log("Entrada invalida! Insira apenas numeros!")
    continue;
  }
  const inputB: string | null = prompt("Insira um numero no segundo vetor: ");
  if(inputB != null){
    num2 = parseFloat(inputB)
    arrayB.push(num2)
  }else{
    console.log("Entrada invalida! Insira apenas numeros!")
    continue;
  }
  if(arrayA.length != arrayB.length){
    console.log("Os dois vetores devem ter a mesma quantidade de numeros!")
  }
canContinue2 = prompt("Deseja inserir mais numeros? Digite s para sim ou n para não")
if(canContinue2 == 'n'){
    canContinue = false
}else{
    continue;
}
for(let i = 0; i < arrayA.length; i++){
    if(arrayB.includes(arrayA[i]) || arrayA[i] % 2 !== 0){
        arrayC.push(arrayA[i])
    }
}
for(let j = 0; j < arrayB.length; j++){
    if(arrayA.includes(arrayB[j]) || arrayB[j] % 2 !== 0){
        arrayC.push(arrayB[j])
    }
} 
}
console.log("Vetor A: ", arrayA)
console.log("Vetor B: ", arrayB)
console.log("Vetor C", arrayC)

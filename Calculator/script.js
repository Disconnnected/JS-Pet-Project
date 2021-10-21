let inputElement = document.querySelector('#input');

let plusButtonElement = document.querySelector('#plus-btn');
let minusButtonElement = document.querySelector('#minus-btn');
let multipleButtonElement = document.querySelector('#multiple-btn');
let divideButtonElement = document.querySelector('#divide-btn');

let number1Element = document.querySelector('#number1');
let number2Element = document.querySelector('#number2');
let number3Element = document.querySelector('#number3');
let number4Element = document.querySelector('#number4');
let number5Element = document.querySelector('#number5');
let number6Element = document.querySelector('#number6');
let number7Element = document.querySelector('#number7');
let number8Element = document.querySelector('#number8');
let number9Element = document.querySelector('#number9');
let number0Element = document.querySelector('#number0');

let numberDotElement = document.querySelector('#numberDot');
let clearElement = document.querySelector('#clear');
let equalElement = document.querySelector('#equal');

let number1 = 1;
let number2 = 2;
let number3 = 3;
let number4 = 4;
let number5 = 5;
let number6 = 6;
let number7 = 7;
let number8 = 8;
let number9 = 9;



number1Element.onclick = function () {
    inputElement.innerHTML += 1
}
number1Element.onclick = function () {
    inputElement.innerHTML += 1
}
number2Element.onclick = function () {
    inputElement.innerHTML += 2
}
number3Element.onclick = function () {
    inputElement.innerHTML += 3
}
number4Element.onclick = function () {
    inputElement.innerHTML += 4
}
number5Element.onclick = function () {
    inputElement.innerHTML += 5
}
number6Element.onclick = function () {
    inputElement.innerHTML += 6
}
number7Element.onclick = function () {
    inputElement.innerHTML += 7
}
number8Element.onclick = function () {
    inputElement.innerHTML += 8
}
number9Element.onclick = function () {
    inputElement.innerHTML += 9
}
number0Element.onclick = function () {
    inputElement.innerHTML += 0
}
clearElement.onclick = function () {
    inputElement.innerHTML = ''
}
numberDotElement.onclick = () => {
    inputElement.innerHTML = '';
    alert('Tính năng đang phát triển')
}

plusButtonElement.onclick = function () {
    checkIfOperatorValidToPrintAndPrint('+')
}
minusButtonElement.onclick = function () {
    checkIfOperatorValidToPrintAndPrint('-')
}
multipleButtonElement.onclick = function () {
    checkIfOperatorValidToPrintAndPrint('x')
}
divideButtonElement.onclick = function () {
    checkIfOperatorValidToPrintAndPrint('%')
}



function sum(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

let minus = (firstNumber, secondNumber) => {
    return firstNumber - secondNumber;
}

let multiple = (firstNumber, secondNumber) => {
    result = firstNumber * secondNumber;
    console.log(result)
    return result
}

let devide = (firstNumber, secondNumber) => {
    if (secondNumber !== 0) {
        return firstNumber / secondNumber
    }
}

let checkIfOperatorValidToPrintAndPrint = (operator) => {
    if (
        inputElement.textContent.charAt(inputElement.textContent.length - 1) == '+' ||
        inputElement.textContent.charAt(inputElement.textContent.length - 1) == '-' ||
        inputElement.textContent.charAt(inputElement.textContent.length - 1) == 'x' ||
        inputElement.textContent.charAt(inputElement.textContent.length - 1) == '%' ||
        inputElement.textContent == ''
    ) {
        inputElement.innerHTML += '';
    } else {
        inputElement.innerHTML += `${operator}`;
    }
}






let stringConvert = () => {
    let string = '12+34-56x78%89'
    var stringSplitNumber = string.split(/\+|\-|x|\%/g)
    console.log(stringSplitNumber)
    for (var i = 0; i < stringSplitNumber.length; i++) {
        stringSplitNumber[i] = Number(stringSplitNumber[i])
    }
    console.log(stringSplitNumber)
    var stringSplitOperator = string.replace(/[0-9]/g, '').split('')
    console.log(stringSplitOperator)

    // for (var j = 0; j < stringSplitOperator.length; j++) {
    //     if (stringSplitOperator.includes('x')) {
    //         let keyForNumber = stringSplitOperator.indexOf('x');
    //         multiple(stringSplitNumber[keyForNumber], stringSplitNumber[keyForNumber + 1]);
    //         stringSplitNumber.splice(keyForNumber, 2);
    //         stringSplitOperator.splice(keyForNumber, 0);
    //         console.log(stringSplitNumber)
    //         console.log(stringSplitOperator)
    //     }
    //     else if (stringSplitOperator.includes('x')) {
    //         let keyForNumber = stringSplitOperator.indexOf('x');
    //         multiple(stringSplitNumber[keyForNumber], stringSplitNumber[keyForNumber + 1]);
    //     }
    // }

    let keyForNumber = stringSplitOperator.indexOf('x');
    multiple(stringSplitNumber[keyForNumber], stringSplitNumber[keyForNumber + 1]);
    stringSplitNumber.splice(keyForNumber, 2);
    stringSplitOperator.splice(keyForNumber, 1);
    console.log(stringSplitNumber)
    console.log(stringSplitOperator)
}



stringConvert()









// let test = () => {
//     let string = '12+34+56x78%89'
//     let stringSub = string.split('+');

//     console.log(stringSub)
// }

// test()























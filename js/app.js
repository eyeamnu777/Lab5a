'use strict';

function sum(a, b) {
  let sum = a + b;
  let myStr = `The sum of ${a} and ${b} is ${sum}.`;
  return [sum, myStr];

}
testSum(4, 7);


function multiply(a, b) {

  let prod = a * b;
  let myStr = `The product of ${a} and ${b} is ${prod}.`;
  return [prod, myStr];

}

testMultiply(5, 9);

function sumAndMultiply(a, b, c) {
  let sumOfThree = sum(sum(a, b)[0], c)[0];
  let multiple = multiply(multiply(a, b)[0], c)[0];
  let sumString = `${a} and ${b} and ${c} sum to ${sumOfThree}.`;
  let prodStr = `The product of ${a} and ${b} and ${c} is ${multiple}.`;
  return [sumOfThree, multiple, sumString, prodStr];
}

testSumAndMultiply(4, 7, 5);


let testArray = [2, 3, 4];

function sumArray(sumArr) {
  let arrSum = 0;
  for (let i = 0; i < sumArr.length; i++) {
    arrSum = sum(arrSum, sumArr[i])[0];
  }
  let myStr = `${sumArr[0]},${sumArr[1]},${sumArr[2]} was passed in as an array of numbers, and ${arrSum} is their sum.`;
  return [arrSum, myStr];

}

testSumArray(testArray);



function multiplyArray(multArr) {
  let multiple = 1;
  for (let i = 0; i < multArr.length; i++) {
    multiple = multiply(multiple, multArr[i])[0];
  }
  let myStr = `The numbers ${multArr[0]},${multArr[1]},${multArr[2]} have a product of ${multiple}.`;
  return [multiple, myStr];
}

testMultiplyArray(testArray);

let testDynamicArray = [1, 2, 3, 4, 5];

function multiplyAnyArray(dynamicArray) {
  let multipleProd = 1;
  let myStr = 'The numbers ';

  for (let i = 0; i < dynamicArray.length; i++) {
    multipleProd = multiply(multipleProd, dynamicArray[i])[0];
    if (i === (dynamicArray.length - 1)) {
      myStr += dynamicArray[i].toString() + ` have a product of ${multipleProd}.`;
    } else if (i < dynamicArray.length) {
      myStr += dynamicArray[i].toString() + ',';
    }
  }
  return [multipleProd, myStr];
}


testMultiplyAnyArray(testDynamicArray);


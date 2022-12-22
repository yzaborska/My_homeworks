"use strict";

// Завдання 1 (мінімум)
// let sum = 0.1 + 0.2;
// console.log(sum.toFixed(1));
//console.log((.1 * 10 + .2 * 10) / 10);
// Завдання 2 (мінімум)
// a = '1';
// b = 2;
// console.log(y = parseInt(a) + b);
// Завдання 3 (мінімум)
function filesCalc() {
  var file_size = 820;
  var flash_card_size = parseInt(prompt('Specify the memory capacity of your flash card in Gb'));

  if (!isNaN(flash_card_size) && flash_card_size !== null && flash_card_size !== '' && flash_card_size < 0) {
    var files_quantity = Math.floor(flash_card_size * 1024 / file_size);
    alert("Your card can hold ".concat(files_quantity, " file(s) of 820 MB each"));
  } else {
    alert("Only positive numeric value more than 0 is acceptable");
  }
} // Завдання 1 (норма)


function chocoMoneyLeft() {
  var money = parseInt(prompt('Enter the amount of money you have in USD'));

  if (!isNaN(money) && money !== null && money !== '' && money >= 1 && money < 1000) {
    var choco_cost = parseInt(prompt('Enter the cost of a chocolate bar in USD'));

    if (!isNaN(choco_cost) && choco_cost !== null && choco_cost !== '') {
      var choco_quantity = Math.floor(money / choco_cost);
      var change = money - choco_quantity * choco_cost;
      alert("You may by ".concat(choco_quantity, " chocolate(s) and rest of money will be ").concat(change, " USD"));
    } else {
      alert("Only numeric value is acceptable which is more than 1");
    }
  } else {
    alert("Only numeric value is acceptable which is more than 1 and less than 1000");
  }
} //Завдання 2 (норма)


function numberReverse() {
  thundes = '';
  tens = '';
  remaider = '';
  var number = parseInt(prompt('Enter a three-digit number for me to print it back'));

  if (!isNaN(number) && number !== '' && number !== -'') {
    var _thundes = parseInt(number / 100);

    var _tens = Math.trunc(number % 100 / 10);

    var _remaider = Math.trunc(number % 10);

    var number_reverse = _remaider * 100 + _tens * 10 + _thundes;
    alert("Your number printed backwards is ".concat(number_reverse));
  } else {
    alert("Only positive numeric value is acceptable");
  }
} //Завдання 1 (максимум)


function amountOfInterest() {
  var depositSum = parseInt(prompt('Please specify the amount of money you wish to deposit (HRN, USD, EURO)? The minimum amount is 1000.'));
  var two_month_interest = 0.00833;

  if (!isNaN(depositSum) && depositSum !== null && depositSum !== '' && depositSum >= 1000) {
    var client_interest = (depositSum * two_month_interest).toFixed(2);
    alert("The amount of profit for two months is ".concat(client_interest, " HRN, USD, EURO (depending on the currency of the deposit account)."));
  } else {
    alert('Only numeric value is acceptable. The minimum amount is 1000 HRN/USD/EURO.');
  }
}
/* 

Завдання 2 (максимум)

Що повернуть вирази:

2 && 0 && 3 - повернеться '0'

2 || 0 || 3 - повернеться '2'

2 && 0 || 3 - повернеться '3'

*/
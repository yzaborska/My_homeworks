"use strict";

// Завдання 1 (мінімум)
function youAre() {
  var age = parseInt(prompt('How old are you?'));

  if (age >= 0 && age <= 11) {
    alert("You are a child.");
  } else if (age >= 12 && age <= 17) {
    alert("You are teenager.");
  } else if (age >= 18 && age <= 59) {
    alert("You are adult.");
  } else if (age >= 60 && age <= 115) {
    alert("You are a pensioner");
  } else {
    alert("Only positive numeric value is acceptable. Try again!");
  }
} // Завдання 2 (мінімум)


function numbWildСard() {
  var number = prompt('Enter a number from 0 to 9');

  switch (number) {
    case '0':
      alert("The wildcard is )");
      break;

    case '1':
      alert("The wildcard is !");
      break;

    case '2':
      alert("The wildcard is @)");
      break;

    case '3':
      alert("The wildcard is #");
      break;

    case '4':
      alert("The wildcard is $");
      break;

    case '5':
      alert("The wildcard is %");
      break;

    case '6':
      alert("The wildcard is ^");
      break;

    case '7':
      alert("The wildcard is &");
      break;

    case '8':
      alert("The wildcard is *");
      break;

    case '9':
      alert("The wildcard is (");
      break;

    default:
      alert("Value is invalid. Try again!");
      break;
  }
} // Завдання 3 (мінімум)


function sumInRange() {
  var from = parseInt(prompt('Enter number from'));
  var to = parseInt(prompt('Enter number to'));
  var sum = 0;

  if (!isNaN(from) && !isNaN(to)) {
    if (from !== to) {
      var forFrom = from < to ? from : to;
      var forTo = to > from ? to : from;

      for (var i = forFrom; i <= forTo; i++) {
        sum = sum + i; // sum += i; альтернативний варіант скорочення попереднього рядка
      }
    }

    alert("Total sum is range ".concat(from, " - ").concat(to, " is ").concat(sum));
  } else {
    alert("Enter valid from/to values");
  }
} // Завдання 4 (мінімум)


function findNSD() {
  var num1 = parseInt(prompt('Enter 1 number '));
  var num2 = parseInt(prompt('Enter 2 number'));
  var nsd = 0;

  if (!isNaN(num1) && !isNaN(num2)) {
    var forEnd = num1 < num2 ? num1 : num2;

    for (var i = 1; i <= forEnd; i++) {
      if (num1 % i === 0 && num2 % i === 0) {
        nsd = i;
      }
    }

    alert("NSD is: " + nsd);
  } else {
    alert("Enter valid numbers");
  }
} // Завдання 5 (мінімум)


function findAllDividers() {
  var num = parseInt(prompt('Enter number'));
  var result = '';

  if (!isNaN(num)) {
    for (var i = 1; i <= num / 2; i++) {
      if (num % i === 0) {
        result += i + ', ';
      }
    }

    result += num;
    alert("Number ".concat(num, ", the dividers are ").concat(result));
  } else {
    alert("Enter valid number");
  }
} // Завдання 1 (норма)


function isNumberPalindrome() {
  var number = parseInt(prompt('Enter a five-digit number and I will determine if it is a palindrome.'));
  var a = Math.trunc(number / 10000); //1 digit

  var b = Math.trunc(number % 10000 / 1000); //2 digit

  var c = Math.trunc(number % 100 / 10); // 4 digit

  var d = number % 10; //5 digit

  if (a == d && b == c) {
    alert("Your number is a palindrome.");
  } else {
    alert("Your number is not a palindrome.");
  }
} // Завдання 2 (норма)


function discountSum() {
  var sum = parseInt(prompt('Enter the purchase amount'));

  if (sum >= 200 && sum < 300) {
    var disc3 = sum - sum * 0.03;
    alert("3% discount, the amount to be paid is ".concat(disc3));
  } else if (sum >= 300 && sum < 500) {
    var disc5 = sum - sum * 0.05;
    alert("5% discount, the amount to be paid is ".concat(disc5));
  } else if (sum >= 500 && sum < 10000) {
    var disc7 = sum - sum * 0.07;
    alert("7% discount, the amount to be paid is ".concat(disc7));
  } else {
    alert("Only positive numeric value is acceptable, where the minimum amount to receive a discount is 200");
  }
} // Завдання 3 (норма)
// Завдання 4 (норма)


function showNextDay() {
  var i = 0;
  var test;
  var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  while (test !== false) {
    if (i >= 7) {
      i = 0;
    }

    test = confirm("Next day is " + days[i]);
    i++;
  }
} // Завдання 2 (максимум)


for (var i = 2; i <= 10; i++) {
  for (var j = 1; j <= 10; j++) {
    console.log(i, j, i * j);
  }
}
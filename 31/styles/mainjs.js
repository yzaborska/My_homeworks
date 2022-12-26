// Завдання 1 (мінімум)

function youAre() {
    const age = parseInt(prompt('How old are you?'));
    if (age >= 0 && age <= 11) {
        alert(`You are a child.`);
    } else if (age >= 12 && age <= 17) {
        alert( `You are teenager.`);
    } else if (age >= 18 && age <= 59) {
        alert(`You are adult.`);
    } else if (age >= 60 && age <= 115) {
        alert(`You are a pensioner`);
    } else {
        alert(`Only positive numeric value is acceptable. Try again!`);
    }
}

// Завдання 2 (мінімум)

function numbWildСard() {
    const number = prompt('Enter a number from 0 to 9');
    switch (number) {
        case '0':
            alert(`The wildcard is )`);
            break;
        case '1':
            alert(`The wildcard is !`);
            break;
        case '2':
            alert(`The wildcard is @)`);
            break;
        case '3':
            alert(`The wildcard is #`);
            break;
        case '4':
            alert(`The wildcard is $`);
            break
        case '5':
            alert(`The wildcard is %`);
            break;
        case '6':
            alert(`The wildcard is ^`);
            break;
        case '7':
            alert(`The wildcard is &`);
            break;
        case '8':
            alert(`The wildcard is *`);
            break;
        case '9':
            alert(`The wildcard is (`);
            break;
        default:
            alert(`Value is invalid. Try again!`);
            break;        
    }
}


// Завдання 3 (мінімум)

function sumInRange() {
    const from = parseInt(prompt('Enter number from'));
    const to = parseInt(prompt('Enter number to'));
    let sum = 0;

    if(!isNaN(from) && !isNaN(to)) {
        if(from !== to) {
            const forFrom = from < to ? from : to;
            const forTo = to > from ? to : from;
            for(let i = forFrom; i <= forTo; i++) {
            sum = sum + i;
            // sum += i; альтернативний варіант скорочення попереднього рядка
            }
        }
        alert(`Total sum is range ${from} - ${to} is ${sum}`);
    } else {
        alert(`Enter valid from/to values`);
    }
}

// Завдання 4 (мінімум)

function findNSD() {
    const num1 = parseInt(prompt('Enter 1 number '));
    const num2 = parseInt(prompt('Enter 2 number'));
    let nsd = 0;

    if(!isNaN(num1) && !isNaN(num2)) {
        const forEnd = num1 < num2 ? num1 : num2;
        for(let i = 1; i <= forEnd; i++) {
            if(num1 % i===0 && num2 % i===0) {
                nsd = i;
            }
        }
        alert(`NSD is: `+nsd);
    } else {
        alert(`Enter valid numbers`)
    }
}


// Завдання 5 (мінімум)

function findAllDividers() {
    const num = parseInt(prompt('Enter number'));
    let result = '';
    if(!isNaN(num)) {
        for(let i = 1; i <= num/2; i++) {
            if(num % i === 0) {
                result += i+', ';
            }
        }
        result += num;
        alert(`Number ${num}, the dividers are ${result}`);            
    } else {
        alert(`Enter valid number`);
    }
}


// Завдання 1 (норма)

function isNumberPalindrome() {
    const number = parseInt(prompt('Enter a five-digit number and I will determine if it is a palindrome.'));
    let a = Math.trunc(number / 10000); //1 digit
    let b = Math.trunc((number % 10000) / 1000); //2 digit
    let c = Math.trunc((number % 100) / 10); // 4 digit
    let d = number % 10; //5 digit
    if ((a == d) && (b == c)) {
        alert(`Your number is a palindrome.`);
    } else { 
        alert(`Your number is not a palindrome.`);
    }
}

// Завдання 2 (норма)

function discountSum() {
    const sum = parseInt(prompt('Enter the purchase amount'));
    if (sum >= 200 && sum < 300) {
        const disc3 = sum - sum * 0.03;
        alert(`3% discount, the amount to be paid is ${disc3}`);
    } else if (sum >= 300 && sum < 500) {
        const disc5 = sum - sum * 0.05;
        alert( `5% discount, the amount to be paid is ${disc5}`);
    } else if (sum >= 500 && sum < 10000) {
        const disc7 = sum - sum * 0.07;
        alert(`7% discount, the amount to be paid is ${disc7}`);
    } else {
        alert(`Only positive numeric value is acceptable, where the minimum amount to receive a discount is 200`);
    }
}

// Завдання 3 (норма)

// Завдання 4 (норма)

function showNextDay() {
    let i = 0;
    let test;
    const days = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    ];
    while (test !== false) {
        if (i >=7) {
            i = 0;
        }
        test = confirm("Next day is " + days[i]);
        i++;
    }
}

// Завдання 2 (максимум)

for(let i=2; i<=10; i++) {
    for(let j=1; j<=10; j++) {
        console.log(i, j, i*j);
    }
}



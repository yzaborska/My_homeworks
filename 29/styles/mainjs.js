// "Правильні" імена змінних 

const username_surname = 123;
const userNameSurname = 123;
const $username_surname = 123;
const username_surname1 = 123;

/* "Неправильні" імена змінних

const 1username_surname = 123;
const 1-userNameSurname = 123;
const username_surname! = 123;
const username-surname = 123;

*/

/*Коментування коду в JS подібне до того, як це відбувається у CSS

// закоментований рядок
/* закоментований цілий блок */


/*

Стилі іменування у JS

const UserNameSurname = 123; //CamelCase
const userNameSurname = 123; //lowerCamelCase
const user-name-surname = 123; //kebab-case
const user_name_surname = 123; //snake_case

Перші два стилі використовуються у JS при присвоєнні змінним імен.
*/

function sayHello() {
    const userName = prompt('Enter your name').trim();
    if (isNaN(userName) && userName !== null && userName !== '') {
        alert(`Hello, ${userName}!`);
    } else {
        alert('Enter your name, please');
    }    
}

function userAge() {
    const current_year = 2022;
    const year_of_birth = prompt('Enter the year of your birth').trim();
    if (!isNaN(year_of_birth) && year_of_birth !== null && year_of_birth !== '') {
        const age = current_year - year_of_birth;
        if (age <= 10 || age >= 110) {
            alert("Age is inapropriate");
        } else {
            alert(`Your age is ${age}`);
        }   
    } else {
        alert("Only numeric value is available");
    }
}

function sqPerimeter() {
    const lenth = parseInt(prompt("Enter length of the square"));
    if (!isNaN(lenth) && lenth !== null && lenth !== '') {
        const result = lenth * lenth;
        alert(`The perimeter of the square is ${result}`);
    } else {
        alert("Only numeric value is available");
    }
}

function circleArea() {
    const radius = parseInt(prompt("Enter circle radius"));
    if (!isNaN(radius) && radius !== null && radius !== '') {
        const result = (Math.PI * radius * radius).toFixed('2');
        alert(`The circle area is ${result}`);
    } else {
        alert("Only numeric value is available");
    }
}

function speedCalc() {
    const spacing = parseInt(prompt("Enter the distance beetwen cities in km/miles")); 
    if (!isNaN(spacing) && spacing !== null && spacing !=='') {
        const time = parseInt(prompt("Indicate the time you are planning to spend on the road in hours"));
        
        if (!isNaN(time) && time !== null && time !=='') {
            const velocity = (spacing / time);
            alert(`The velocity is ${velocity}`);
        } else {
            alert("Only numeric value is available");
        }
    } else {
        alert("Only numeric value is available");
    }
}

function currencyConverter() {
    const koef = 0.94;
    const usd = parseInt(prompt("Enter the summ in USD you whant to convert in EURO"));
    if (!isNaN (usd) && usd !== null && usd !== '') {
    const result = (usd * koef).toFixed(2);
    alert(`${usd} USD = ${result} EURO`);
    } else {
        alert("Only numeric value is available");
    } 
}





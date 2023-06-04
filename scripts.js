// Привітання

const userName = prompt("What is your name?");
alert("Hello, " + userName + "! How are you?");

// Арифметика

const num1 = parseFloat(prompt("Введіть перше число:"));
const num2 = parseFloat(prompt("Введіть друге число:"));
const sum = num1 + num2;
const difference = num1 - num2;
const product = num1 * num2;
const quotient = num1 / num2;

alert(
  "Результати:\n\nСума чисел: " +
    sum +
    " \nРізниця чисел: " +
    difference +
    "\nДобуток чисел: " +
    product +
    "\nЧастка чисел: " +
    quotient
);

// Порівняння

const value1 = parseFloat(
  prompt("Порівняймо значення:\n\nВведіть перше значення:")
);
const value2 = parseFloat(prompt("Введіть друге значення:"));
const comparison = value1 === value2;

alert("Відповідь: " + comparison);

// Cереднє арифметичне трьох чисел

const number1 = parseFloat(
  prompt("Визначення середнього арифметичного.\n\nВведіть перше число:")
);
const number2 = parseFloat(prompt("Введіть друге число:"));
const number3 = parseFloat(prompt("Введіть третє число:"));
const arithmetic = (number1 + number2 + number3) / 3;

alert("Cереднє арифметичне: " + arithmetic);

// Розкладання по цифрах п'ятизначне число

const decomposition = prompt("Введіть п'ятизначне число:");
const numb5 = decomposition % 10;
const numb4 = Math.floor(decomposition / 10) % 10;
const numb3 = Math.floor(decomposition / 100) % 10;
const numb2 = Math.floor(decomposition / 1000) % 10;
const numb1 = Math.floor(decomposition / 10000);
alert(numb1 + " " + numb2 + " " + numb3 + " " + numb4 + " " + numb5);


const result = 5 + 5 + '5';
console.log("Значення result:", result);
console.log("Тип змінної result:", typeof result);

const email = "samostrol.t2021@gmail.com";
const hasAtSymbol = email.includes("@");
const emailLength = email.length;

console.log("Email:", email);
console.log("Чи містить символ '@':", hasAtSymbol);
console.log("Кількість символів в email:", emailLength);

const word1 = "My";
const word2 = "name";
const word3 = "is";

let fullName = `${word1} ${word2} ${word3}`;
fullName += " Viktor";

console.log("Повний рядок (fullName):", fullName);

const userName = "Олександро";
const payment = 300;

alert(`Дякуємо, ${userName}! До сплати ${payment} гривень`);


// Задание
// Функция checkName(fullname, name) принимает два параметра и возвращает буль true или false -
//     результат проверки вхождения подстроки name в строку fullname.

// fullname - полное имя состоящее из двух слов (имени и фамилии) разделённых пробелом.
// name - имя для проверки вхождения в полное имя.
// Присвой переменной result выражение проверки вхождения имени(параметр name), в полное имя(параметр fullname).
// Пусть функция строго относится к регистру букв, то есть «Петя» и «петя» для неё разные имена.

function checkForName(fullName, name) {
 const result = fullName.includes(name); // Дополни эту строку
  return result;
}

console.log(checkForName('Егор Колбасов', 'егор')) // false.
console.log(checkForName('Егор Колбасов', 'егОр')) // false.
console.log(checkForName('Егор Колбасов', 'Женя')) // false.
console.log(checkForName('Вадим Некрасов', 'Вадим')) // true.
console.log(checkForName('Егор Колбасов', 'Егор')) // true.
console.log(checkForName('Вадим Некрасов', 'вадим')) // false.
console.log(checkForName('Вадим Некрасов', 'Дима')) // false.

// не чувствительные к регистру
function checkForName2(fullName, name) {
 const result = fullName.toLowerCase().includes(name.toLowerCase()); // Дополни эту строку
  return result;
}

console.log(checkForName2('Егор Колбасов', 'егор')) // true.
console.log(checkForName2('Егор Колбасов', 'егОр')) // true.
console.log(checkForName2('Егор Колбасов', 'Женя')) // false.
console.log(checkForName2('Вадим Некрасов', 'Вадим')) // true.
console.log(checkForName2('Егор Колбасов', 'Егор')) // true.
console.log(checkForName2('Вадим Некрасов', 'вадим')) // true.
console.log(checkForName2('Вадим Некрасов', 'Дима')) // false.
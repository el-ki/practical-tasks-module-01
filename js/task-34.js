
// Задание
// Функция normalizeInput(input) принимает строку(параметр input) и возвращает такую же строку, но в нижнем регистре.
// Присвой переменной normalizedInput выражение создания строки в нижнем регистре из параметра input.

function normalizeInput(input) {
  const normalizedInput = input.toLowerCase(); // Дополни эту строку
  return normalizedInput;
}


console.log(normalizeInput('Привет мир')) // 'привет мир'.
console.log(normalizeInput('Это НЕ СпаМ')) // 'это не спам'.
console.log(normalizeInput('Большие СКИДКИ')) // 'большие скидки'.
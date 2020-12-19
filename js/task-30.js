
// Задание
// Функция getNameLength(name) принимает имя(параметр name) и возвращает строку, в которой указана его длина.
// Дополни шаблонную строку в переменной message длиной строки из параметра name.

function getNameLength(name) {
  const message = `Длина вашего имени ${name.length} символа(ов)`;

  return message;
}


console.log(getNameLength('Poly')) // 'Длина вашего имени 4 символа(ов)'.
console.log(getNameLength('Harambe')) // 'Длина вашего имени 7 символа(ов)'.
console.log(getNameLength('Billy')) // 'Длина вашего имени 5 символа(ов)'.
console.log(getNameLength('Joe')) // 'Длина вашего имени 3 символа(ов)'.
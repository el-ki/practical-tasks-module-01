// Задание
// Функция getSubstring(string, length) принимает строку и возвращает подстроку от начала и до length символов.
// Она объявляет два параметра, значения которых будут задаваться во время её вызова:

// string - оригинальная строка
// length - количество символов с начала строки для подстроки
// Присвой переменной substring выражение создания подстроки длинной length символов (от начала) из строки string.

function getSubstring(string, length) {
  const substring = string.slice(0, length); // Дополни эту строку

  return substring;
}

console.log(getSubstring('Привет мир', 3))  //'При'.
console.log(getSubstring('Привет мир', 6))  //'Привет'.
console.log(getSubstring('Привет мир', 8))  //'Привет м'.
console.log(getSubstring('Привет мир', 10)) // 'Привет мир'.
console.log(getSubstring('Привет мир', 0))  //''.
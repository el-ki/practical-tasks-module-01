// Проверка спама
// Задание
// Функция checkForSpam(message) принимает строку(параметр message), проверяет её на содержание запрещённых слов spam и sale,
//     и возвращает результат проверки.Слова в строке параметра message могут быть в произвольном регистре,
//         например SPAM или sAlE.

function checkForSpam(message) {
  let result;
  const normalizedMessage = message.toLowerCase();
  result = normalizedMessage.includes('sale') || normalizedMessage.includes('spam');
  return result;
}

console.log(checkForSpam('Latest technology news')) // false.
console.log(checkForSpam('JavaScript weekly newsletter')) //false.
console.log(checkForSpam('Get best sale offers now!')) // true.
console.log(checkForSpam('Amazing SalE, only tonight!')) // true.
console.log(checkForSpam('Trust me, this is not a spam message')) // true.
console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!')) // true.
console.log(checkForSpam('[SPAM] How to earn fast money?')) // true.
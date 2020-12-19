// Задание
// Выполни рефакторинг решения задачи «Склад товаров», заменив инструкцию if...else тернарным оператором.

function checkStorage(available, ordered) {
  let message;


//   if (ordered > available) {
//     message = 'На складе недостаточно товаров!';
//   } else {
//     message = 'Заказ оформлен, с вами свяжется менеджер';
//   }
  
  message = ordered > available ? 'На складе недостаточно товаров!' : 'Заказ оформлен, с вами свяжется менеджер';

  return message;
}

console.log(checkStorage(100, 50)) // 'Заказ оформлен, с вами свяжется менеджер'.
console.log(checkStorage(200, 20)) //  'Заказ оформлен, с вами свяжется менеджер'.
console.log(checkStorage(200, 250)) //  'На складе недостаточно товаров!'.

// Задача: склад товаров 2.0
// Задание
// Функция checkStorage(available, ordered) проверяет возможность оформления заказа и возвращает сообщение о результате.
// Она объявляет два параметра, значения которых будут задаваться во время её вызова.

// available - доступное количество товаров на складе
// ordered - единиц товара в заказе
// Используя ветвления дополни код функции так, что:

// Если в заказе еще нет товаров, то есть значение параметра ordered равно 0, в переменную message присваивается строка В заказе еще нет товаров.
// Eсли товаров в заказе больше чем доступно товаров на складе, то в переменную message присваивается строка 'Слишком большой заказ, на складе недостаточно товаров!'.
// В противном случае в переменную message присваевается строка 'Заказ оформлен, с вами свяжется менеджер'.

function checkStorage(available, ordered) {
  let message;
  if (ordered === 0) {
    message = 'В заказе еще нет товаров'
  } else if (ordered > available) {
    message = 'Слишком большой заказ, на складе недостаточно товаров!'
  } else {
    message = 'Заказ оформлен, с вами свяжется менеджер'
  };
  return message;
}
    
console.log(checkStorage(100, 50)) // 'Заказ оформлен, с вами свяжется менеджер'.
console.log(checkStorage(100, 130)) //  'Слишком большой заказ, на складе недостаточно товаров!'.
console.log(checkStorage(70, 0)) // 'В заказе еще нет товаров'.
console.log(checkStorage(200, 20)) //  'Заказ оформлен, с вами свяжется менеджер'.
console.log(checkStorage(200, 250)) //  'Слишком большой заказ, на складе недостаточно товаров!'.
console.log(checkStorage(150, 0)) //  'В заказе еще нет товаров'.
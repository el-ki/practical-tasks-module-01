// Задание
// Функция calculateTotalPrice считает и возвращает общую сумму покупки.Она принимает два параметра,
//     значения которых будут задаваться во время её вызова.

// orderedQuantity - количество единиц товара в заказе;
// pricePerItem - цена одной единицы товара.
// Дополни код функции так, чтобы в переменную totalPrice записывалась общая сумма покупки,
//     результат умножения кол - ва товаров на цену одного.

function calculateTotalPrice (orderedQuantity, pricePerItem) {
  const totalPrice = orderedQuantity * pricePerItem;

  return totalPrice;
};

console.log(calculateTotalPrice(4, 25));
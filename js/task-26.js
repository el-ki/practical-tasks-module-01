// Задача: проверка пароля
// Задание
// Функция checkPassword(password) сравнивает переданный ей пароль(параметр password) с сохранённым паролем администратора
//     (константа ADMIN_PASSWORD) и возвращает строку с сообщением о результате.

// Используя тернарный оператор дополни функцию так, что:

// Если значения password и ADMIN_PASSWORD совпадают, присвой переменной message строку 'Доступ разрешен'.
// В противном случае, присвой message строку 'Доступ запрещён, неверный пароль!'.

function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;
  message = password === ADMIN_PASSWORD ? 'Доступ разрешен' : 'Доступ запрещён, неверный пароль!';
  return message;
}


console.log(checkPassword('jqueryismyjam')) // 'Доступ разрешен'.
console.log(checkPassword('angul4r1sl1f3')) // 'Доступ запрещён, неверный пароль!'.
console.log(checkPassword('r3actsux')) // 'Доступ запрещён, неверный пароль!'.
function checkPassword(password) {
    const ADMIN_PASSWORD = 'jqueryismyjam';
    let message;
  
    if (password==null) { // Дополни эту строку
      message =  'Отменено пользователем!';
    } else if (password===ADMIN_PASSWORD) { // Дополни эту строку
      message = 'Добро пожаловать!';
    } else {
      message = 'Доступ запрещен, неверный пароль!';
    }
  console.log(message);
    return message;
  }
  checkPassword('mangohackzor');
  checkPassword(null);
  checkPassword('polyhax');
  checkPassword('jqueryismyjam');
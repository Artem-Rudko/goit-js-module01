function checkStorage(available, ordered) {
    let message;
    // Пиши код ниже этой строки
  if (ordered>=available) {
      message ='На складе недостаточно товаров!';
  } else {
      message ='Заказ оформлен, с вами свяжется менеджер';
  }
  console.log(message);
    // Пиши код выше этой строки
    return message;
  }
  checkStorage(100, 50);
  checkStorage(100, 130);
  checkStorage(200, 20);
  checkStorage(200, 150);
  checkStorage(150, 180);
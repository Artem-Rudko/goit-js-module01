function checkStorage(available, ordered) {
    let message;
    // Пиши код ниже этой строки
  
    message= ordered > available ? 'На складе недостаточно товаров!' : 'Заказ оформлен, с вами свяжется менеджер';
    console.log(message);
    //if (ordered > available) {
      //message = 'На складе недостаточно товаров!';
    //} else {
      //message = 'Заказ оформлен, с вами свяжется менеджер';
    //}
  
    // Пиши код выше этой строки
    return message;
  }
  checkStorage(100, 50);
  checkStorage(100, 130);
  checkStorage(200, 20);
  checkStorage(200, 150);
  checkStorage(150, 180);
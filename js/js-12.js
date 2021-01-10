function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
    // Пиши код ниже этой строки
  const message=`Вы заказали дроидов на сумму ${orderedQuantity*pricePerDroid+deliveryFee} кредитов. Доставка (${deliveryFee} кредитов) включена в сумму заказа.`;
    console.log(message);
    // Пиши код выше этой строки
    return message;
  }
  makeOrderMessage(2, 100, 50);
  makeOrderMessage(4, 300, 100);
  makeOrderMessage(10, 70, 200);
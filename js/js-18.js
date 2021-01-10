function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
    let message;
    // Пиши код ниже этой строки
  let totalPrice=pricePerDroid*orderedQuantity;
  if (totalPrice>customerCredits) {
      message ='Недостаточно средств на счету!'
  } else {
      message =`Вы купили ${orderedQuantity} дроидов, на счету осталось ${customerCredits-totalPrice} кредитов`;
  }
  console.log(message);
    // Пиши код выше этой строки
    return message;
  }
  makeTransaction(3000, 5, 23000);
  makeTransaction(1000, 3, 15000);
  makeTransaction(5000, 10, 8000);
  makeTransaction(2000, 8, 10000);
  makeTransaction(500, 10, 5000);
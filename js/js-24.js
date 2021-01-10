function getDiscount(totalSpent) {
    const BASE_DISCOUNT = 0;
    const BRONZE_DISCOUNT = 0.02;
    const SILVER_DISCOUNT = 0.05;
    const GOLD_DISCOUNT = 0.1;
    let discount;
    // Пиши код ниже этой строки
    if (totalSpent< 5000) {
      discount=BASE_DISCOUNT;
  } else if (totalSpent>= 5000 && totalSpent<20000) {
      discount=BRONZE_DISCOUNT;  
  } else if (totalSpent>=20000 && totalSpent<50000) {
      discount=SILVER_DISCOUNT;
  } else {
      discount=GOLD_DISCOUNT;
  }
      console.log(discount);
    // Пиши код выше этой строки
    return discount;
  }
  getDiscount(137000);
  getDiscount(46900);
  getDiscount(8250);
  getDiscount(1300);
  getDiscount(5000);
  getDiscount(20000);
  getDiscount(50000);

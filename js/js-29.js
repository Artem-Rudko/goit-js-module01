function getShippingCost(country) {
    let message;
    // Пиши код ниже этой строки
  
    switch (country) {
      case 'Китай':
        message=`Доставка в ${country} будет стоить 100 кредитов`;
          break;

      case 'Чили':
        message=`Доставка в ${country} будет стоить 250 кредитов`;
          break;

      case 'Австралия':
        message=`Доставка в ${country} будет стоить 170 кредитов`;
          break;
          
      case 'Ямайка':
        message=`Доставка в ${country} будет стоить 120 кредитов`;
          break;
  
      default:
  }
  console.log(message);
    // Пиши код выше этой строки
    return message;
  }
  getShippingCost('Австралия');
  getShippingCost('Германия');
  getShippingCost('Китай');
  getShippingCost('Чили');
  getShippingCost('Ямайка');
  getShippingCost('Швеция');
function checkForSpam(message) {
    let result;
    // Пиши код ниже этой строки
   const normalizedMessage=message.toLowerCase();
    if (normalizedMessage.includes('spam') || normalizedMessage.includes('sale')) {
       result=true;
   } else {
       result=false;
   }
   console.log(result);
    // Пиши код выше этой строки
    return result;
  }
  checkForSpam('Latest technology news');
  checkForSpam('JavaScript weekly newsletter');
  checkForSpam('Get best sale offers now!');
  checkForSpam('Amazing SalE, only tonight!');
  checkForSpam('Trust me, this is not a spam message');
  checkForSpam('Get rid of sPaM emails. Our book in on sale!');
  checkForSpam('[SPAM] How to earn fast money?');
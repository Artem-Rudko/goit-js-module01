function formatMessage(message, maxLength) {
    let result;
  // Пиши код ниже этой строки
if (message.length>maxLength) {
    result=message.slice(0,maxLength)+'...';
} else {
    result=message;
}
console.log(result);
  // Пиши код выше этой строки
    return result;
  }
  
  formatMessage('Curabitur ligula sapien', 16);
  formatMessage('Curabitur ligula sapien', 23);
  formatMessage('Vestibulum facilisis purus nec', 20);
  formatMessage('Vestibulum facilisis purus nec', 30);
  formatMessage('Nunc sed turpis a felis in nunc fringilla', 15);
  formatMessage('Nunc sed turpis a felis in nunc fringilla', 41);
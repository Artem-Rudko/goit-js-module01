function checkForName(fullName, name) {
    const result = fullName.includes(name); 
    console.log(result);// Дополни эту строку
     return result;
   }
   
   checkForName('Егор Колбасов', 'Егор');
   checkForName('Егор Колбасов', 'егор');
   checkForName('Егор Колбасов', 'егОр');
   checkForName('Егор Колбасов', 'Женя');
   checkForName('Вадим Некрасов', 'Вадим');
   checkForName('Вадим Некрасов', 'вадим');
   checkForName('Вадим Некрасов', 'Дима');
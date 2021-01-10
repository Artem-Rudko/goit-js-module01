function isNumberNotInRange(start, end, number) {
    const isInRange = number >= start && number <= end;
    const isNotInRange = !isInRange; // Дополни эту строку
  console.log(isNotInRange);
    return isNotInRange;
  }
  
  isNumberNotInRange(10, 30, 17);
  isNumberNotInRange(10, 30, 5);
  isNumberNotInRange(20, 50, 24);
  isNumberNotInRange(20, 50, 76);
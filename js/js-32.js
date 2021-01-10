function getSubstring(string, length) {
    const substring = string.slice(0,length); // Дополни эту строку
  console.log(substring);
    return substring;
  }

  getSubstring('Привет мир', 3);
  getSubstring('Привет мир', 6);
  getSubstring('Привет мир', 8);
  getSubstring('Привет мир', 10);
  getSubstring('Привет мир', 0);
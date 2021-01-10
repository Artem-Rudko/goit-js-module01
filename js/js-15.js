function checkAge(age) {
    let message;
    if (age>=18) {
        message = 'Вы совершеннолетний человек';
    } else {
        message = 'Вы не совершеннолетний человек';
    }
    console.log(message);
    return message;
}

checkAge(20);
checkAge(8);
checkAge(14);
checkAge(38);
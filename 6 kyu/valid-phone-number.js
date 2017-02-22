const validPhoneNumber = (phoneNumber) => /^\(\d{3}\) \d{3}-\d{4}$/i.test(phoneNumber);
console.log(validPhoneNumber("(123) 456-7890"));

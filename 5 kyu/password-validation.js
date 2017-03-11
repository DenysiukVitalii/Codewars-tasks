const validate = (password) => /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,}$/.test(password);

console.log(validate("jhasdg23bhj2"));

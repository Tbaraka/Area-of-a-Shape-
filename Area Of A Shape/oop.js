class Validator {
    constructor(validators) {
      this.validators = validators;
    }
  
    isValid(input) {
      return this.validators.every(validator => validator(input));
    }
  }
  
  class UsernameValidator extends Validator {
    constructor() {
      super([
        (username) => {
          const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
          return emailRegex.test(username);
        },
      ]);
    }
  }
  
  class PasswordValidator extends Validator {
    constructor() {
      super([
        (password) => {
          return password.length === 8;
        },
      ]);
    }
  }
  
  const setUsernameError = (isValid) => {
    if (!isValid) {
      usernameErrorElement.textContent = 'Username must be a valid email.';
    } else {
      usernameErrorElement.textContent = '';
    }
  };
  
  const setPasswordError = (isValid) => {
    if (!isValid) {
      passwordErrorElement.textContent = 'Password must be 8 characters long.';
    } else {
      passwordErrorElement.textContent = '';
    }
  };
  
  const usernameValidator = new UsernameValidator();
  const passwordValidator = new PasswordValidator();
  
  let isValid = true;
  
  if (usernameValidator.isValid(enteredUsername)) {
    setUsernameError(true);
  } else {
    setUsernameError(false);
    isValid = false;
  }
  
  if (passwordValidator.isValid(enteredPassword)) {
    setPasswordError(true);
  } else {
    setPasswordError(false);
    isValid = false;
  }
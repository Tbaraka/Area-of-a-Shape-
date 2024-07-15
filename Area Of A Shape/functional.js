const validators = {
    username: [
      (username) => {
        const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        return emailRegex.test(username);
      },
    ],
    password: [
      (password) => {
        return password.length === 8;
      },
    ],
  };
  
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
  
  let isValid = true;
  
  if (validators.username.every(validator => validator(enteredUsername))) {
    setUsernameError(true);
  } else {
    setUsernameError(false);
    isValid = false;
  }
  
  if (validators.password.every(validator => validator(enteredPassword))) {
    setPasswordError(true);
  } else {
    setPasswordError(false);
    isValid = false;
  }
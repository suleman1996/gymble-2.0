let reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const loginValidation = (username, password) => {
  if (username === '') {
    return {
      valid: false,
      errors: username === '' ? 'Please Enter Your Email' : null,
    };
  } else if (reg.test(username) === false) {
    return {
      valid: false,
      errors: reg.test(username) === false ? 'Email format is invalid' : null,
    };
  } else if (password === '') {
    return {
      valid: false,
      errors: password === '' ? 'Please Enter Your Password' : null,
    };
  } else if (password.length < 6) {
    return {
      valid: false,
      errors:
        password.length < 6 ? 'Password must should contain 6 digits' : null,
    };
  } else {
    return { valid: true, errors: null };
  }
};

export const Signup_validation = ({ name, email, password }) => {
  const HasNumber = /[0-9]/g
  const HasUpperCase = /[A-Z]/g
  const HasLowerCase = /[a-z]/g
  const HasSymbol = /[!@#$%^&*()_+=\[{\]};:<>|./?,-]/g
  if (name === '') {
    return {
      valid: false,
      errors: name === '' ? 'Please Enter Your Name' : null,
    };
  } else if (name.length < 3) {
    return {
      valid: false,
      errors: name.length < 3 ? 'Name must should contain 3 letters' : null,
    };
  } else if (email === '') {
    return {
      valid: false,
      errors: email === '' ? 'Please Enter Your Email' : null,
    };
  } else if (reg.test(email) === false) {
    return {
      valid: false,
      errors: reg.test(email) === false ? 'Email format is invalid' : null,
    };
  }
  else if (password === '') {
    return {
      valid: false,
      errors: password === '' ? 'Please Enter Your Password' : null,
    };
  } else if (password.length < 6) {
    return {
      valid: false,
      errors: password.length < 6
        ? 'Password must should contain 6 digits'
        : null,
    };
  }
  else if (HasNumber.test(password) == false) {
    return {
      valid: false,
      errors: HasNumber.test(password) == false ? "Password Does not have Number" : null
    }
  }
  else if (HasUpperCase.test(password) == false) {
    console.log(HasUpperCase.test(password), 'password');
    return {
      valid: false,
      errors: HasUpperCase.test(password) == false ? "Password Does not have UpperCase" : null
    }
  }
  else if (HasSymbol.test(password) === false) {
    return {
      errors: HasSymbol.test(password) === false ? "Password Does not have Special Character" : null,
      valid: false
    }
  }
  else if (HasLowerCase.test(password) === false) {
    return {
      valid: false,
      errors: HasLowerCase.test(password) === false ? "Password Does not have LowerCase" : null
    }
  }
  else {
    return { valid: true, errors: null };
  }
};

export const addTime = time => {
  if (time === '') {
    return {
      valid: false,
      errors: time === '' ? 'Please Add Time' : null,
    };
  } else {
    return { valid: true, errors: null };
  }
};



export const passwordValidation = (password, confirmPassword) => {
  if (password === '') {
    return {
      valid: false,
      errors: password === '' ? 'Please Enter Your Password' : null,
    };
  } else if (password.length < 6) {
    return {
      valid: false,
      errors:
        password.length < 6 ? 'Password must should contain 6 digits' : null,
    };
  } else if (confirmPassword === '') {
    return {
      valid: false,
      errors:
        confirmPassword === '' ? 'Please Enter Your Confirm Password' : null,
    };
  } else if (confirmPassword !== password) {
    return {
      valid: false,
      errors: confirmPassword !== password ? 'Enter Confirm Password' : null,
    };
  } else {
    return { valid: true, errors: null };
  }
};

export const forgetPasswordValidation = email => {
  if (email === '') {
    return {
      valid: false,
      errors: email === '' ? 'Please Enter Your Email' : null,
    };
  } else if (reg.test(email) === false) {
    return {
      valid: false,
      errors: reg.test(email) === false ? 'Email format is invalid' : null,
    };
  } else {
    return { valid: true, errors: null };
  }
};

export const SignUp_Third = ({ bussinessName, address, city, state, zipCode, phone }) => {
  if (bussinessName === '') {
    return {
      valid: false,
      errors: bussinessName === '' ? 'Please Enter Business Name' : null,
    };
  } else if (bussinessName.length < 2) {
    return {
      valid: false,
      errors: bussinessName.length < 2 ? 'Business Name must have atleast 2 characters' : null,
    };
  } else if (address === "") {
    return {
      valid: false,
      errors: address === "" ? 'Please Enter address' : null,
    };
  } else if (address.length < 8) {
    return {
      valid: false,
      errors: address.length < 8 ? 'address must have atleast 8 characters' : null,
    };
  } else if (city === "") {
    return {
      valid: false,
      errors: city === "" ? 'Please Enter city' : null,
    };
  } else if (state === "") {
    return {
      valid: false,
      errors: state === "" ? 'Please Enter state' : null,
    };
  } else if (zipCode === "") {
    return {
      valid: false,
      errors: zipCode === "" ? 'Please Enter zipCode' : null,
    };
  }
  else if (zipCode.length < 5) {
    return {
      valid: false,
      errors: zipCode.length < 5 ? 'The zip code must be between 5 and 6 digits' : null,
    };
  }
  else if (phone === "") {
    return {
      valid: false,
      errors: phone === "" ? 'Please Enter phone' : null,
    };
  } else if (phone.length < 10) {
    return {
      valid: false,
      errors: phone.length < 10 ? 'Your Phone Number must be 10 digits' : null,
    };
  }
  else {
    return { valid: true, errors: null };
  }
};

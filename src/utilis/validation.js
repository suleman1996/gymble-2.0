export const loginValidation = (username, password) => {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
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
    return {valid: true, errors: null};
  }
};

export const Signup_validation = (
  name,
  useremail,
  userpassword,
) => {
  let reg =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let Reg = /^\d{1,5}\s\w.\s(\b\w*\b\s){1,2}\w*\./;
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
  } else if (useremail === '') {
    return {
      valid: false,
      errors: useremail === '' ? 'Please Enter Your Email' : null,
    };
  } else if (reg.test(useremail) === false) {
    return {
      valid: false,
      errors: reg.test(useremail) === false ? 'Email format is invalid' : null,
    };
  } 
  else if (userpassword === '') {
    return {
      valid: false,
      errors: userpassword === '' ? 'Please Enter Your Password' : null,
    };
  } else if (userpassword.length < 6) {
    return {
      valid: false,
      errors:
        userpassword.length < 6
          ? 'Password must should contain 6 digits'
          : null,
    };
  } else {
    return {valid: true, errors: null};
  }
};

export const updateValidation = (name, lastname, email) => {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  if (name === '') {
    return {
      valid: false,
      errors: name === '' ? 'Please Enter Your Name' : null,
    };
  }
  if (name.length < 3) {
    return {
      valid: false,
      errors: name.length < 3 ? 'Name must should contain 3 letters' : null,
    };
  }

  if (lastname === '') {
    return {
      valid: false,
      errors: lastname === '' ? 'Please Enter Your Last Name' : null,
    };
  }
  if (lastname.length < 3) {
    return {
      valid: false,
      errors: lastname.length < 3 ? 'Name should contain 3 letters' : null,
    };
  }

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
    return {valid: true, errors: null};
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
    return {valid: true, errors: null};
  }
};

export const forgetPasswordValidation = email => {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  if (email === '') {
    return {
      valid: false,
      errors: email === '' ? 'Please Enter Your Email' : null,
    };
  }
  //  else if (reg.test(email) === false) {
  //   return {
  //     valid: false,
  //     errors: reg.test(email) === false ? 'Email format is invalid' : null,
  //   };
  // } 
  else {
    return {valid: true, errors: null};
  }
};

export const SignUp_Third = (Bname,Address,City,State,Zipcode,PhoneNumber) => {
  if (Bname === '') {
    return {
      valid: false,
      errors: Bname === '' ? 'Please Enter Business Name' : null,
    };
  } else if (Bname.length < 3) {
    return {
    valid: false,
      errors: Bname.length < 3 ? 'Business Name must have atleast 3 characters' : null,
    };
  } else if (Address === "") {
    return {
      valid: false,
      errors: Address === "" ? 'Please Enter Address' : null,
    };
  } else if (Address.length < 8) {
    return {
    valid: false,
      errors: Address.length < 8 ? 'Address must have atleast 8 characters' : null,
    };
  } else if (City === "") {
    return {
      valid: false,
      errors: City === "" ? 'Please Enter City' : null,
    };
  } else if (State === "") {
    return {
      valid: false,
      errors: State === "" ? 'Please Enter State' : null,
    };
  } else if (Zipcode === "") {
    return {
      valid: false,
      errors: Zipcode === "" ? 'Please Enter Zipcode' : null,
    };
  } else if (PhoneNumber === "") {
    return {
      valid: false,
      errors: PhoneNumber === "" ? 'Please Enter PhoneNumber' : null,
    };
  }
  else {
    return {valid: true, errors: null};
  }
};

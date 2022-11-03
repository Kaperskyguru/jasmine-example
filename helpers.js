function fibonacci(num, memo) {
  memo = memo || {};

  if (memo[num]) return memo[num];
  if (num <= 1) return 1;

  return (memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo));
}

/*first name input validation*/
function FirstName(fname) {
  var letters = /^[A-Za-z]+$/;
  if (fname.match(letters)) {
    return true;
  } else {
    return false;
  }
}

/*last name input validation*/
function LastName(lname) {
  var letters = /^[A-Za-z]+$/;
  if (lname.match(letters)) {
    text = '';
    return true;
  } else {
    return false;
  }
}

/*email address input validation*/
function Email(email) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var atpos = email.indexOf('@');
  var dotpos = email.lastIndexOf('.');

  if (email.match(mailformat) || (atpos > 1 && dotpos - atpos > 2)) {
    return true;
  } else {
    return false;
  }
}

/*phone number validation*/
function PhoneNumber(pnumber) {
  var numbers = /^[0-9]+$/;
  if (pnumber.match(numbers)) {
    return true;
  } else {
    return false;
  }
}

/*country input validation*/
function Country(country) {
  var letters = /^[A-Za-z]+$/;
  if (country.match(letters)) {
    return true;
  } else {
    return false;
  }
}

/*validate password*/
function Password(password) {
  var illegalChars = /[\W_]/; // allow only letters and numbers
  if (illegalChars.test(password)) {
    return false;
  } else if (password.search(/[0-9]+/) == -1) {
    return false;
  } else {
    return true;
  }
}

function formValidation(data) {
  const messages = [];
  var fname = data['firstName'];
  var lname = data['lastName'];
  var pnumber = data['phoneNumber'];
  var country = data['country'];
  var email = data['e-mail'];
  var password = data['password'];

  if (!FirstName(fname)) {
    messages['firstName'] = 'First name should contain only letters';
  }
  if (!LastName(lname)) {
    messages['firstName'] = 'Last name should contain only letters';
  }
  if (!PhoneNumber(pnumber)) {
    messages['phoneNumber'] = 'Phone number should contain only numbers';
  }
  if (!Country(country)) {
    messages['country'] = 'Country name should contain only letters';
  }
  if (!Email(email)) {
    messages['email'] = 'Wrong email format';
  }
  if (!Password(password)) {
    messages['password'] = 'Password should contain at least one number';
  }
  return messages;
}

module.exports = {
  fibonacci: fibonacci,
  validateCountry: Country,
  validatePhoneNumber: PhoneNumber,
  validateFirstName: FirstName,
  validateEmail: Email,
  validateLastName: LastName,
  validatePassword: Password,
  validator: formValidation,
};

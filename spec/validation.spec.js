const {
  validateCountry,
  validatePassword,
  validatePhoneNumber,
  validateEmail,
  validateLastName,
  validator,
} = require('../helpers');

describe('Validation Helpers', function () {
  it('should validate country', function () {
    const country = validateCountry('nigeria');
    expect(country).toEqual(true);
  });

  it('should validate acceptable password', function () {
    const password = validatePassword('Password1');
    expect(password).toEqual(true);
  });

  it('should validate wrong password', function () {
    const password = validatePassword('Password');
    expect(password).toEqual(false);
  });

  it('should validate good PhoneNumber', function () {
    const password = validatePhoneNumber('081456552232');
    expect(password).toEqual(true);
  });

  it('should validate empty PhoneNumber', function () {
    const password = validatePhoneNumber('');
    expect(password).toEqual(false);
  });

  it('should validate good email', function () {
    const email = validateEmail('test@test.com');
    expect(email).toEqual(true);
  });

  it('should validate empty email', function () {
    const email = validateEmail('');
    expect(email).toEqual(false);
  });

  it('should validate good last name', function () {
    const lastName = validateLastName('Solomon');
    expect(lastName).toEqual(true);
  });

  it('should validate empty last name', function () {
    const lastName = validateLastName('');
    expect(lastName).toEqual(false);
  });

  it('should validate correct data', function () {
    const data = {
      firstName: 'Solomon',
      lastName: 'Eseme',
      phoneNumber: '0814565426',
      country: 'Nigeria',
      'e-mail': 'test@test.com',
      password: 'Password1',
    };
    const messages = validator(data);
    expect(Object.keys(messages).length).toEqual(0);
  });

  it('should validate wrong data', function () {
    const data = {
      firstName: 'Solomon',
      lastName: 'Eseme',
      phoneNumber: '0814565426',
      country: 'Nigeria',
      'e-mail': 'test',
      password: 'Password',
    };
    const messages = validator(data);

    expect(Object.keys(messages).length).toEqual(2);
  });
});

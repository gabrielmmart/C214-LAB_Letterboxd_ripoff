const mongoose = require('mongoose');
const crypto = require('crypto');
const userModel = require('../src/models/user.model');

describe('User Model', () => {
  beforeAll(async () => {
    await mongoose.connect('mongodb://localhost:27017/testdb', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
  });

  it('Definindo e validando a senha', () => {
    const user = new userModel({
      username: 'christopherLima',
      displayName: 'Christopher Lima',
    });

    const password = 'christopherlima';
    user.setPassword(password);

    expect(user.password).toBeDefined();
    expect(user.password).not.toEqual(password);

    expect(user.salt).toBeDefined();

    const validPassword = user.validPassword(password);
    expect(validPassword).toBe(true);

    const invalidPassword = user.validPassword('1');
    expect(invalidPassword).toBe(false);
  });
});

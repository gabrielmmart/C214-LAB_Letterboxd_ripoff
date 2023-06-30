const tokenMiddleware = require('../src/middlewares/token.middleware');
const jsonwebtoken = require('jsonwebtoken');
const responseHandler = require('../src/handlers/response.handler');
const userModel = require('../src/models/user.model');

describe('tokenDecode', () => {
    test('Teste retorno do token decodificado quando eh passado o valid-token', () => {
      const req = {
        headers: {
          authorization: 'Bearer ehosguri',
        },
      };
  
      const decodedToken = {
        data: '<user-id>',
      };
  
      jest.spyOn(jsonwebtoken, 'verify').mockReturnValue(decodedToken);
  
      const result = tokenMiddleware.tokenDecode(req);
  
      expect(result).toEqual(decodedToken);
      expect(jsonwebtoken.verify).toHaveBeenCalledWith(
        'ehosguri',
        process.env.TOKEN_SECRET
      );
    });
  
    test('Teste retornar falso se o token fornecido for invalido', () => {
      const req = {
        headers: {
          authorization: 'Bearer 123',
        },
      };
  
      jest.spyOn(jsonwebtoken, 'verify').mockImplementation(() => {
        throw new Error();
      });
  
      const result = tokenMiddleware.tokenDecode(req);
  
      expect(result).toBe(false);
      expect(jsonwebtoken.verify).toHaveBeenCalledWith(
        '123',
        process.env.TOKEN_SECRET
      );
    });
});  
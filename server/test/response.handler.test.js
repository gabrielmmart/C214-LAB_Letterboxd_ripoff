const responseHandler = require('../src/handlers/response.handler');

describe('response.handler', () => {
  let res;

  beforeEach(() => {
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  describe('error', () => {
    test('Teste erro 500', () => {
      responseHandler.error(res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        status: 500,
        message: 'Oops! Something worng!',
      });
    });
  });

  describe('badrequest', () => {
    test('Teste erro 404 + retorno da mensagem', () => {
      const message = 'eh os guri';

      responseHandler.badrequest(res, message);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        status: 400,
        message,
      });
    });
  });

  describe('ok', () => {
    test('Teste retorno ok', () => {
      const data = { id: 1, name: 'gabirel medeiros' };

      responseHandler.ok(res, data);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(data);
    });
  });

  describe('created', () => {
    test('Teste 201 criaçao bem sucedida', () => {
      const data = { id: 1, name: 'gabirle medeiros' };

      responseHandler.created(res, data);

      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith(data);
    });
  });

  describe('unauthorize', () => {
    test('Teste de acesso nao autorizado', () => {
      responseHandler.unauthorize(res);

      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalledWith({
        status: 401,
        message: 'Unauthorized',
      });
    });
  });

  describe('notfound', () => {
    test('Teste de erro 404 recuros nao achado', () => {
      responseHandler.notfound(res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({
        status: 404,
        message: 'Resource not found',
      });
    });
  });
});

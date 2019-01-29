const server = require('./handling');

describe('server () :', () => {
    const options = {
      method: 'GET',
      url: '/',
 
    };
    // afterall
    it('should return “Hello handling”', async () => {
      const temp = await server.inject(options);
      expect(temp.result).toEqual('Hello Handling');
    });
    it('should return “Status Code 200”', async () => {
        const temp = await server.inject(options);
        expect(temp.result.statusCode).toEqual(200);
      });
  });
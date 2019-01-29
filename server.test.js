const server = require('./server');

describe('server', () => {
  afterAll( () => {
    server.close();
  })
  const options = {
    method: 'GET',
    url: '/ping',
  };
  it('should return pong when getting request for /ping', async () => {
    const temp = await server.inject(options);
    expect(temp.result).toEqual('pong');
  });
  const options1 = {
    method: 'GET',
    url: '/ab',
  };
  it('should return 404 resource not found', async () => {
    const temp = await server.inject(options1);
    expect(temp.result.statusCode).toEqual(404);
  });
});
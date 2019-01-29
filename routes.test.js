const server = require('./routes');

describe('server', () => {
  afterAll( () => {
    server.close();
  })
  let options = {
    method: 'GET',
    url: '/Shashwat',
  };
  it('should return hello hapi string', async () => {
    const temp = await server.inject(options);
    expect(temp.result).toEqual('Hello Shashwat');
  });
  let options1 = {
    method: 'GET',
    url: '/ ',
  };
  it('should return hello hapi string', async () => {
    const temp = await server.inject(options1);
    expect(temp.result).toEqual('Hello  ');
  });
  let options2 = {
    method: 'GET',
    url: '/a b',
  };
  it('should return hello hapi string', async () => {
    const temp = await server.inject(options2);
    expect(temp.result).toEqual('Hello a b');
  });
  let options3 = {
    method: 'GET',
    url: '/a/b',
  };
  it('should return hello hapi string', async () => {
    const temp = await server.inject(options3);
    expect(temp.result).toEqual('Hello  a/b');
  });
  let options4 = {
    method: 'GET',
    url: '/a/b/c/d',
  };
  it('should return hello hapi string', async () => {
    const temp = await server.inject(options4);
    expect(temp.result.statusCode).toEqual(404);
  });
});
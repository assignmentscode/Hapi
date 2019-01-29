const hapi = require('hapi');
const auth = require('hapi-auth-basic');

const server = hapi.Server({
  host: 'localhost',
  port: Number(process.argv[2] || 8080),
});

const routes = {
  method: 'GET',
  path: '/',
  handler(request, h) {
    return 'welcome';
  },
};

const validate = async (request, username, password, h) => {
  const checkAuth = username === 'hapi' && password === 'auth';
  console.log(checkAuth);
  return {
    isValid: checkAuth,
    credentials: {
      name: username,
    },
  };
};
const start = async () => {
  await server.register(auth);
  server.auth.strategy('simple', 'basic', { validate });
  server.auth.default('simple');

  server.route(routes);
  await server.start();
  console.log('Server started at port', server.info.uri);
};

start();

module.exports = server;
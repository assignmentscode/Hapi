const Hapi = require('hapi');
const Path = require('path');

const server = Hapi.server({
  routes: {
    files: {
      relativeTo: Path.join(__dirname, '/')
    }
  }
});

const start = async () => {
  await server.register(require('inert'));
  server.route({
    method: 'GET',
    path: '/',
    handler: function (request, h) {
      return h.file('index.html');
    }
  });
  if (!module.parent) {
    await server.start();
    console.log('Server running at:', server.info.uri);
  }
  
};
start();
module.exports = server;
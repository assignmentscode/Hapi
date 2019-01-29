const Hapi = require('hapi');
const routes = require('./routes/ping');
const server = Hapi.server({
  host: 'localhost',
  port: 8080
});
server.route(routes.routes);
// Start the server
const start =  async () => {
  try {
    if (!module.parent) {
        await server.start();
        console.log('Server running at:', server.info.uri);
      }
  }
  catch (err) {
      console.log(err);
      process.exit(1);
  }
  console.log('Server running at:', server.info.uri);
};
start();
module.exports = server;
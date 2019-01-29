const Hapi = require('hapi');
const routes = require('./routes/routing');
const server = Hapi.server({
  host: 'localhost',
  //port: Number(process.argv[2] || 8080)
  port: 8080
});
server.route(routes.routes);
// Start the server
const start =  async () => {
  try {
      await server.start();
  }
  catch (err) {
      console.log(err);
      process.exit(1);
  }
  console.log('Server running at:', server.info.uri);
};
start();
module.exports = server;
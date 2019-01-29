const Hapi = require('hapi');
const server = Hapi.server({
  host: 'localhost',
  port: 8080
});
server.route({
  method:'GET',
  path:'/',
  handler: (request,h) => {
    return 'Hello hapi';
  }
});
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

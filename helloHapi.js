const Hapi = require('hapi');
const server = Hapi.server({
  host: 'localhost',
  port: Number(process.argv[2] || 8080)
});
server.route({
  method:'GET',
  path:'/',
  handler: (request,h) => {
    return 'hello world';
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
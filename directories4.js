const hapi = require('hapi');
const path = require('path');
const inert = require('inert');

const server = new hapi.server({
  host: 'localhost',
  //port: Number(process.argv[2] || 8080),
  port: 8000,
});

const start = async () => {
  await server.register(inert);
  server.route({
    method: 'GET',
    path: '/foo/bar/baz/{param*}',
    handler: {
      file: path.join(__dirname, 'public/file.html'),
    }
  });
  try{
    await server.start();
    console.log('Server running at:', server.info.uri);
  } catch (error) {
    console.log(error);
  }

};
//start();
module.exports = server;
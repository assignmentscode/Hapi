const hapi = require('hapi');
const joi = require('joi');

const server = new hapi.server({
  host: 'localhost',
  //port: Number(process.argv[2] || 8080),
  port: 8080,
});

const start = async () => {
  try {
    server.route({
      method: 'GET',
      path: '/chickens/{breed?}',
      handler: (request, h) => {
        return `The breed you entered is ${request.params.breed}`;
      },
      options: {
        validate: {
          params: {
            breed: joi.string().required().error(() => {
              return {
                message: 'Invalid request params input',
              }
            }),
          }
        }
      }
    });
    await server.start();
    console.log('Server running at:', server.info.uri);
  } catch (error) {
    console.log(error);
  }
};
start();
module.exports = server;

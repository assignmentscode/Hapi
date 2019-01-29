const Hapi = require('hapi');

const server = Hapi.server({
  port: Number(process.argv[2] || 8080),
  host: 'localhost'
});

const start = async () => {
  server.route({
    method: 'POST',
    path: '/upload',
    config: {
      handler: (request, h) => {
        return new Promise((resolve, reject) => {
          let body = '';

          request.payload.file.on('data', (data) => {
            body += data;
          });
          request.payload.file.on('end', () => {
            let result = {
              description: request.payload.description,
              file: {
                data: body,
                filename: request.payload.file.hapi.filename,
                headers: request.payload.file.hapi.headers
              }
            };

            return resolve(JSON.stringify(result));
          });

        });
      },
      payload: {
        output: 'stream',
        parse: true,
        allow: 'multipart/form-data'
      }
    }
  });
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};
start();

module.exports = server;
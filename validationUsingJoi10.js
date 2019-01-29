const hapi = require('hapi');
const inert = require('inert');
const joi = require('Joi');

const server = hapi.server({
    port: Number(process.argv[2] || 8080),
    host: 'localhost',

});

const start = async () => {
    await server.register(inert);
    server.route({
        path: '/login',
        method: 'POST',
        config: {
            handler: (request, h) => {
                return "login successful";
            },
            validate: {
               payload: joi.object({
                    username: joi.string().when('isGuest', { is:false, then: joi.required() }),
                    password: joi.string().alphanum(),
                    accessToken: joi.string().alphanum(),
                    isGuest: joi.boolean().required()
               })
               .options({allowUnknown: true})
               .without('password', 'accessToken')
            }
        }
    });
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

start();

module.exports = server;
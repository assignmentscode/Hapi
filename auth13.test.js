const request = require('request');


describe('basicAuth', () => {
    it('should return welcome when username hapi and password auth is passed using basic auth', () => {
      const username = 'hapi';
      const password = 'auth';
      const options = {
        url: 'http://localhost:8080',
        auth: {
          user: username,
          password,
        },
      };
  
      request(options, (err, res, body) => {
        if (err) {
          console.dir(err);
          return;
        }
        expect(body).toEqual('welcome');
      });
    });
    it('should return 401 when username and password is other than hapi:auth', () => {
      const username = 'shashwat';
      const password = 'sinha';
      const options = {
        url: 'http://localhost:8080',
        auth: {
          user: username,
          password,
        },
      };
      request(options, (err, res, body) => {
        if (err) {
          console.dir(err);
          return;
        }
        expect(res.statusCode).toEqual(401);
      });
    });
  });
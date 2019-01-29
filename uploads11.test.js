const request = require('request');

test("output should be login successful because payload is correct", (done) => {
    const callback = (data) => {
        expect(data).toEqual("login successful");
        done();
    }
    request.post(
        'http://localhost:8080/upload', {
            json: {
                isGuest: false,
                filename: 'hapi',
                description: 'makemehapi'
            }
        },
        (error, response, body) => {
            console.log(body);
            callback(body);
        }
    );
});
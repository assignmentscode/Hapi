const request = require('request');

test("output should be login successful because payload is correct", (done) => {
    let callback = (data) => {
        expect(data).toEqual("login successful");
        done();
    }
    request.post(
        'http://localhost:8080/login', {
            json: {
                isGuest: false,
                username: 'hapi',
                password: 'makemehapi'
            }
        },
        (error, response, body) => {
            console.log(body);
            callback(body);
        }
    );
});

test("check if wrong payload is handled", (done) => {
    let callback = (data) => {
        expect(data).not.toEqual("login successful");
        done();
    }
    request.post(
        'http://localhost:8080/login', {
            json: {
                isGuest: false,
                username: 'hapi',
                password: 'makemehapi$'
            }
        },
        (error, response, body) => {
            console.log(body);
            callback(body);
        }
    );
})

test("check if empty payload is handled", (done) => {
    let callback = (data) => {
        expect(data).not.toEqual("login successful");
        done();
    }
    request.post(
        'http://localhost:8080/login', {
            json: {}
        },
        (error, response, body) => {
            console.log(body);
            callback(body);
        }
    );
})
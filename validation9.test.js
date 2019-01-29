const validationServer = require('./validation9');

describe('server', () => {
    const options = {
        method: 'GET',
        url: '/chickens/hi',
    };
    it('should return the string "hi"', async () => {
        const temp = await validationServer.inject(options);
        expect(temp.result).toEqual('The breed you entered is hi');
    });
    it('should return something', async () => {
        const temp = await validationServer.inject(options);
        expect(temp.result).not.toEqual('');
    });
    it('check with numbers in the endpoint', async () => {
        const temp = await validationServer.inject({method: 'GET', url: '/234'});
        expect(temp.result).toEqual({"error": "Not Found", "message": "Not Found", "statusCode": 404});
    });
    it('check with special characters in the endpoint', async () => {
        const temp = await validationServer.inject({method: 'GET', url: '/%'});
        expect(temp.result).not.toEqual('%');
    });
    it('check with spaces in the endpoint', async () => {
        const temp = await validationServer.inject({method: 'GET', url: '/3 4'});
        expect(temp.result).not.toEqual('3 4');
    });
    it('check with forward slash in the endpoint', async () => {
        const temp = await validationServer.inject({method: 'GET', url: '//'});
        expect(temp.result).not.toEqual('/');
    });
    it('check with forward braces in the endpoint', async () => {
        const temp = await validationServer.inject({method: 'GET', url: '/<>?'});
        console.log(temp.result);
        expect(temp.result).not.toEqual('<>?');
    });
});
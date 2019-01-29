const server = require('./directories4');
describe('server', () => {
    const options = {
        method: 'GET',
        url: '/foo/bar/baz/hello',
    };
    it('should return "Hello Directories"', async () => {
        const temp = await server.inject(options);
        expect(temp.result).toEqual(
    `<html>
    <head><title>Hello Directories</title></head>
    <body>
        Hello Directories
    </body>
</html>
`);
    });

});
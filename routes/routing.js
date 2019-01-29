module.exports.routes = [
    {
      method:'GET',
      path:'/shashwat',
      handler: (request,h) => {
        return `Hello Shashwat`;
      }
    },
    {
      method:'GET',
      path:'/first',
      handler: (request,h) => {
        return `Hello first`;
      }
    },
    {
      method:'GET',
      path:'/{name}/{randomString}',
      handler: (request,h) => {
        return `Hello ${request.params.name}, You entered wrong URI`;
      }
    },
    {
        method:'GET',
        path:'/ping',
        handler: (request,h) => {
          return `pong`;
        }
      }
    ];
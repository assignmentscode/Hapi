module.exports.routes = [
    {
      method:'GET',
      path:'/ping',
      handler: (request,h) => {
        return `pong`;
      }
    },
    {
        method:'GET',
        path:'/happy',
        handler: (request,h) => {
          return `Make me Happy`;
        }
      },
      {
        method:'GET',
        path:'/{anything}',
        handler: (request,h) => {
          return `resource not found`;
        }
      },
      {
        method:'GET',
        path:'/{anything}/{anything1}',
        handler: (request,h) => {
          return `resource not found`;
        }
      }
    ];
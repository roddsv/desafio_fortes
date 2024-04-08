const jsonServer =  require('json-server');
const { v4: uuidv4 } = require('uuid');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(middlewares.bodyParser);


// Gerar user id automaticamente
server.use((req, res, next) => {
    if (req.method === 'POST' && req.path === '/users') {
        req.body.id = uuidv4(); 
    }

    next();
});


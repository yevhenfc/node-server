const http = require('http');
const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || '127.0.0.1';

const app = require('./app.js');
const server = http.createServer(app);

server.listen (PORT, HOST, () => console.log(`server is working on ${PORT} port for ${HOST}`));




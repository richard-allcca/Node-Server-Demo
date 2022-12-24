const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
  try {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hola mundo');

  } catch (error) {
    console.log(error);
  }
});

server.listen(port, () => {
  console.log(`Servidor corriendo en el puerto: ${port}`);
});

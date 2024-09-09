import http from "node:http";

const PORT = 5500;

const requestListener: http.RequestListener = (_request, response) => {
  response.end("Hola mundo");
};

const server: http.Server = http.createServer(requestListener);

server.listen(PORT, () => {
  console.log(`Escuchando desde el puerto ${PORT}`);
});

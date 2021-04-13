/* eslint-disable no-undef */
const http = require("http");

const server = http.createServer((request, response) => {
  const book = {
    author: "Isla Nur",
    title: "Berlayar di tepi pantai",
  };

  response.setHeader("Content-Type", "application/json");
  response.write(JSON.stringify(book));
  response.end();
});

server.listen(8000);

const http = require('http');
const PORT = 9001;

const incommingData = ({url, headers}) => ({url, headers});
const print = (func, params) => func(params);
const responseBody = body => `<html><body>${body}</body></html>`;

http.createServer((request, response) => {

  print(console.log, incommingData(request));
  response.writeHead(200, {
    ContentType: "text/html"
  });

  switch (request.url) {
    case '/bye':
      response.write(responseBody("Welcome"));
      break;
    default:
      response.write(responseBody("Welcome <a href='/bye'>Bye</a>"));
  }
  response.end();
}).listen(PORT);

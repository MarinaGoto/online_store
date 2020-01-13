const fs = require('fs');

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.write('<html>');
    res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>');
    res.write('</html>');
    // if we do not write return here then the code will just continue execution to the next lines
    return res.end();
  }
  if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on('end', () => {
      // here we know that the date is a string
      const parseBody = Buffer.concat(body).toString();
      // store data
      const message = parseBody.split('=')[0];
      // do not use writeFileSync because in this case you wait until the file operation is done before running the next lines of code = block the code execution
      fs.writeFile('message.txt', message, err => {
        res.statusCode = 302;
        res.setHeader('Location' , '/');
        return res.end();
      });
    });
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<h1>Hello from Node JS</h1>');
  res.write('</html>');
  res.end();
};

exports.handler = requestHandler;
exports.someText = 'Some text 666';



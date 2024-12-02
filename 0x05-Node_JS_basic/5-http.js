#!/usr/bin/node
const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    try {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.write('This is the list of our students\n');
      await countStudents(process.argv[2]);
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.write(err.message);
    }
    res.end();
  }
});

app.listen(1245);

module.exports = app;

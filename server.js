'use strict';

const personsFolder = './people/';
const fs = require('fs');
const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {


var namesList = '';

fs.readdir(personsFolder, (err, files) => {
  
  files.forEach(file => {
	namesList += '<li>' + file + '</li>';
  });
  
  const html = `
  <html>
    <body>
      <h1>Name List</h1>
      <ul>
  	${namesList}
     </ul>
    </body>
  </html>`;

  res.send(html);
});


});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

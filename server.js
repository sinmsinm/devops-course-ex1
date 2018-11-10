'use strict';

const personsFolder = './persones/';
const fs = require('fs');
const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {


var llistaNoms = '';

fs.readdir(personsFolder, (err, files) => {
  
  files.forEach(file => {
	llistaNoms += '<li>' + file + '</li>';
	console.log (llistaNoms);


  });
  
  const html = `
  <html>
    <body>
      <h1>Llista de classe</h1>
      <ul>
  	${llistaNoms}
     </ul>
    </body>
  </html>`;

  res.send(html);
});


});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

const express = require('express');
//const path = require('path');

var port = process.env.PORT || 4201;
const app = express();

app.use(express.static(__dirname + '/public'));

// app.get('/playground/es6-classes1.js', (req, res) => {
//   res.sendFile(path.join(__dirname + "/playground/es6-classes1.js"));
// });
// app.get('/scripts/app.js', (req, res) => {
//   res.sendFile(path.join(__dirname + '/public/scripts/app.js'));
// });

app.listen(port);

console.log(`Server is running at ${port}.`);

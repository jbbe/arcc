const express = require('express');
var fs = require('fs')
var https = require('https')
// var http = require('http')
const app = express();
const port = 7777;




app.use('/node_modules', express.static('node_modules'));
app.use(express.static('public'))
app.use('/', express.static('./app'));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

credentials = {key: fs.readFileSync('server.key'), cert: fs.readFileSync('server.cert')};
var httpsServer = https.createServer(credentials, app);

// var httpServer = http.createServer(credentials, app);
  

// iframeserver.use('/', express.static('./iframeview''));
httpsServer.listen(port, () => console.log(
    `Express server running at http://127.0.0.1:${port}`));


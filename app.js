var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/main.html');
});

//Return the requested resource
app.get('/*', function(request, response) {
    response.sendFile(__dirname + '/' + request.url);
});


//Puerto de nuestro servidor
app.listen(8080, function() {
  console.log("Running Express in port 8080");  
});

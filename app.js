var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/main.html');
});

app.get('/main.css', function(request, response) {
    response.sendFile(__dirname + '/main.css');
});

app.get('/Imagenes/Cofre.png', function(request, response) {
    response.sendFile(__dirname + '/Imagenes/Cofre.png');
});

//Old copy-paste
app.get('/books', function(request, response) {
  response.redirect(301,'/');
});

app.listen(3000, function() {
  console.log("Running Express");  
});

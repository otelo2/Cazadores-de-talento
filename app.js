//Archivo de nuestras clases
var clases = require('./clases');
var express = require('express');
var app = express();

app.use(express.static('public'));

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.use(express.urlencoded());

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/main.html');
});

//Return the requested resource
app.get('/*', function(request, response) {
    response.sendFile(__dirname + '/' + request.url);
});

app.post('/cazador/crear_cazador.html', function(request, response) {
    
    clases.crearCazador(request.body.alias, request.body.giro_de_proyectos, request.body.coordenadas)
    response.sendFile(__dirname + '/cazador/crear_cazador.html');
});

app.post('/talento/crear_talento.html', function(request, response) {
    
  clases.crearTalento(request.body.alias, request.body.actividad_profesional, request.body.horario, request.body.lugar, request.body.costo, request.body.habilidad)
  response.sendFile(__dirname + '/talento/crear_talento.html');
});

app.post('/proyecto/crear_proyecto.html', function(request, response) {
    
  clases.addProyecto(PROYECTO(request.body.nombre, request.body.descripcion, request.body.cuota, request.body.habilidad));
  response.sendFile(__dirname + '/proyecto/crear_proyecto.html');
});


//Puerto de nuestro servidor
app.listen(8080, function() {
  console.log("Running Express in port 8080");  
});

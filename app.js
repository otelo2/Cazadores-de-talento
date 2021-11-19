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
    
  clases.crearProyecto(request.body.nombre, request.body.descripcion, request.body.cuota, request.body.habilidad)
  response.sendFile(__dirname + '/proyecto/crear_proyecto.html');
});

app.post('/contrato/crear_contrato.html', function(request, response) {

  clases.crearContrato(request.body.lista_de_talentos, request.body.giro_de_proyectos)
  response.sendFile(__dirname + '/contrato/crear_contrato.html');
});

app.post('/cita/crear_cita_cazador.html', function(request, response) {

  clases.crearCitaC(request.body.lista_de_talentos, request.body.horario, request.body.lugar)
  response.sendFile(__dirname + '/cita/crear_cita_cazador.html');
});

app.post('/cita/crear_cita_administrador.html', function(request, response) {

  clases.crearCitaA(request.body.lista_de_cazadores, request.body.lista_de_talentos, request.body.horario, request.body.lugar)
  response.sendFile(__dirname + '/cita/crear_cita_administrador.html');
});

app.post('/cita/crear_cita_talento.html', function(request, response) {

  clases.crearCitaT(request.body.lista_de_cazadores, request.body.horario, request.body.lugar)
  response.sendFile(__dirname + '/cita/crear_cita_talento.html');
});

app.post('/habilidad/crear_habilidad.html', function(request, response) {

  clases.crearHabilidad(request.body.nombre, request.body.input)
  response.sendFile(__dirname + '/habilidad/crear_habilidad.html');
});


//Puerto de nuestro servidor
app.listen(8080, function() {
  console.log("Running Express in port 8080");  
});

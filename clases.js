module.exports = {
	crearCazador, crearTalento, crearProyecto, crearCitaA, crearCitaC, crearCitaT, crearContrato, crearHabilidad
}

var DATABASE = (function() {
 var cazadores = [];
 var talentos = [];
 var citas = [];
 var contratos = [];
 var proyectos = [];
 var habilidades = [];
 //var subjects = ['Physics', 'Mathematics', 'Chemistry', 'Psychology', 'Geography'];

 return {
    getCazadores: function() { return cazadores; },
    getCazadorIndex: function( s ) { return cazadores.indexOf(s); },
    addCazador: function( b ) { b.displayInformation(); cazadores.push( b ); },

		getTalentos: function() { return talentos; },
    getSubjectIndex: function( s ) { return subjects.indexOf(s); },
    addTalento: function( b ) { talentos.push( b ); },

		getCitas: function() { return citas; },
    getSubjectIndex: function( s ) { return subjects.indexOf(s); },
    addCita: function( b ) { citas.push( b ); },

		getContratos: function() { return contratos; },
    getContratosIndex: function( s ) { return contratos.indexOf(s); },
    addContrato: function( b ) { contratos.push( b ); },

		getProyectos: function() { return proyectos; },
    getProyectosIndex: function( s ) { return proyectos.indexOf(s); },
    addProyecto: function( b ) { proyecto.push( b ); },

		getHabilidades: function() { return habilidades; },
    getHabilidadesIndex: function( s ) { return habilidades.indexOf(s); },
    addHabilidad: function( b ) { habilidades.push( b ); }
 }
})();

//------------------------------------------------------	CLASES		------------------------------------------------------//

var CAZADOR = (function(a, g, c){
	CAZADOR.counter = (++CAZADOR.counter || 1);
	var idCazador = CAZADOR.counter;
	var alias = a;
	var giroProyectos = g;
	var coordenadas = c;
	var listaProyectos = new Array();
	var listaContratos = new Array();
	var puntosVentajas = 0;
	var descuento = 0;
	var reputacion = 0;

	return {
		getID: function() {return idCazador;},
		getAlias: function() {return alias;},
		setAlias: function(a) {alias = a;},
		getGiroProyectos: function() {return giroProyectos;},
		setGiroProyectos: function(g) {giroProyectos = g;},
		getCoordenadas: function() {return coordenadas;},
		setCoordenadas: function(c) {coordenadas = c;},
		addProyecto: function(p) {
			if(listaProyectos.length == 0)
			{
				listaProyectos.push(p);
			}
			else
			{
				for(var i = 0; i < listaProyectos.length; i++)
				{
					if(listaProyectos[i] == undefined)
					{
						listaProyectos[i] = p;
					}
					else if(i == listaProyectos.length - 1)
					{
						listaProyectos.push(p);
					}
				}
			}
		},
		getListaProyectos: function() {return listaProyectos;},
		addContrato: function(c) {
			if(listaContratos.length == 0)
			{
				listaContratos.push(c);
			}
			else
			{
				for(var i = 0; i < listaContratos.length; i++)
				{
					if(listaContratos[i] == undefined)
					{
						listaContratos[i] = c;
					}
					else if(i == listaContratos.length - 1)
					{
						listaContratos.push(c);
					}
				}
			}
		},
		getListaContratos: function() {return listaContratos;},
		getPuntosVentajas: function() {return puntosVentajas;},
		setPuntosVentajas: function() {},
		getDescuento: function() {return descuento;},
		setDescuento: function() {},
		getReputacion: function() {return reputacion;},
		setReputacion: function() {},
		displayInformation: function() {
			console.log('Cazador id: ' + idCazador);
			console.log('Cazador alias: ' + alias);
			console.log('Cazador giro de proyectos: ' + giroProyectos);
			console.log('Cazador coordenadas: ' + coordenadas);
			console.log('Cazador proyectos: ' + listaProyectos.length);
			console.log('Cazador contratos: ' + listaContratos.length);
			console.log('Cazador puntosVentajas: ' + puntosVentajas);
			console.log('Cazador descuento: ' + descuento);
			console.log('Cazador reputacion: ' + reputacion);
		}
	}
});

var TALENTO = (function(a, ac, ho, l, c, ha){
	TALENTO.counter = (++TALENTO.counter || 1);
	var idTalento = TALENTO.counter;
	var alias = a;
	var listaHabilidades = ha;
	var actividadProfesional = ac;
	var horario = ho;
	var lugar = l;
	var listaContratos = new Array();
	var costo = c;
	var reputacion = 0;

	return {
		getID: function() {return idTalento;},
		getAlias: function() {return alias;},
		setAlias: function(a) {alias = a;},
		getHabilidades: function() {return habilidades;},
		setHabilidades: function(h) {habilidades = h;}, //talvez sea mejor usar un push?
		addHabilidad: function(h) {
			if(listaHabilidades.length == 0)
			{
				listaHabilidades.push(h);
			}
			else
			{
				for(var i = 0; i < listaHabilidades.length; i++)
				{
					if(listaHabilidades[i] == undefined)
					{
						listaHabilidades[i] = h;
					}
					else if(i == listaHabilidades.length - 1)
					{
						listaHabilidades.push(h);
					}
				}
			}
		},
		getActividadProfesional: function() {return actividadProfesional;},
		setActividadProfesional: function(ac) {actividadProfesional = ac;},
		getHorario: function() {return horario;},
		setHorario: function(h) {horario = h;},
		getLugar: function() {return lugar;},
		setLugar: function(l) {lugar = l;},
		addContrato: function(c) {
			if(listaContratos.length == 0)
			{
				listaContratos.push(c);
			}
			else
			{
				for(var i = 0; i < listaContratos.length; i++)
				{
					if(listaContratos[i] == undefined)
					{
						listaContratos[i] = c;
					}
					else if(i == listaContratos.length - 1)
					{
						listaContratos.push(c);
					}
				}
			}
		},
		getListaContratos: function() {return listaContratos;},
		getCosto: function() {return costo;},
		setCosto: function(c) {costo = c;},
		getReputacion: function() {return reputacion;},
		setReputacion: function() {},
		displayInformation: function() {
			console.log('Talento id: ' + idTalento);
			console.log('Talento alias: ' + alias);
			console.log('Talento habilidades: ' + habilidades.length);
			console.log('Talento actividad profesional: ' + actividadProfesional);
			console.log('Talento horario: ' + horario);
			console.log('Talento contratos: ' + listaContratos.length);
			console.log('Talento lugar: ' + lugar);
			console.log('Talento costo: ' + costo);
			console.log('Talento reputacion: ' + reputacion);
		}
	}
});

var CITA = (function(iC, iT, h, l){
	CITA.counter = (++CITA.counter || 1);
	var idCita = CITA.counter;
	var idCazador = iC;
	var idTalento = iT;
	var horario = h;
	var lugar = l;

	return {
		getID: function() {return idCita;},
		getHorario: function() {return horario;},
		setHorario: function(h) {horario = h;},
		getLugar: function() {return lugar;},
		setLugar: function(l) {lugar = l;},
		displayInformation: function() {
			console.log('Cita id: ' + idCita);
			console.log('Cazador id: ' + idCazador);
			console.log('Talento id: ' + idTalento);
			console.log('Cita horario: ' + horario);
			console.log('Cita lugar: ' + lugar);
		}
	}
});

var PROYECTO = (function(iC, n, d, c, h){
	PROYECTO.counter = (++PROYECTO.counter || 1);
	var idProyecto = PROYECTO.counter;
	var idCazador = iC;
	//var idTalento = "";			///PENDIENTE
	var nombre = n;
	var descripcion = d;
	var cuota = c;
	var habilidades = h; 	//var habilidades = new Array();
	var tieneTalento = false;
	var estaActivo = true;

	return {
		getID: function() {return idProyecto;},
		getNombre: function() {return nombre;},
		setNombre: function(n) {nombre = n;},
		getDescripcion: function() {return descripcion;},
		setDescripcion: function(d) {descripcion = d;},
		getCuota: function() {return cuota;},
		setCuota: function(c) {cuota = c;},
		getHabilidades: function() {return habilidades;},
		setHabilidades: function(h) {habilidades = h;},
		setTieneTalento: function() {tieneTalento = !tieneTalento;},
		getTieneTalento: function() {return tieneTalento;},
		setEstaActivo: function() {estaActivo = !estaActivo;},
		getEstaActivo: function() {return estaActivo;},
		displayInformation: function() {
			console.log('Proyecto id: ' + idProyecto);
			console.log('Proyecto nombre ' + nombre);
			console.log('Proyecto descripcion: ' + descripcion);
			console.log('Proyecto cuota: ' + cuota);
			console.log('Proyecto habilidades: ' + habilidades);
			console.log('Proyecto tiene talento: ' + tieneTalento);
			console.log('Proyecto esta activo: ' + estaActivo);
		}
	}
});

var CONTRATO = (function(iC, iT, iP){
	CONTRATO.counter = (++CONTRATO.counter || 1);
	var idContrato = CONTRATO.counter;
	var idCazador = iC;
	var idTalento = iT;
	var idProyecto = iP;
	var calificacionCazador;
	var calificacionTalento;
	var cerrado = false;

	return {
		getID: function() {return idProyecto;},
		setCalificacionCazador: function() {},
		setCalificacionTalento: function() {},
		setCerrado: function() {cerrado = !cerrado;},
		displayInformation: function() {
			console.log('Contrato id: ' + idContrato);
			console.log('Contrato cerrado: ' + cerrado);
			console.log('\t Calificacion Talento: ' + nombre);
			console.log('\t Calificacion Cazador: ' + nombre);
		}
	}
});

var HABILIDAD = (function(n, d){
	HABILIDAD.counter = (++HABILIDAD.counter || 1);
	var idHabilidad = HABILIDAD.counter;
	var nombre = n;
	var descripcion = d;

	return {
		getID: function() {return idHabilidad;},
		getNombre: function() {return nombre;},
		setNombre: function(n) {nombre = n;},
		getDescripcion: function() {return descripcion;},
		setLugar: function(d) {descripcion = d;},
		displayInformation: function() {
			console.log('Habilidad id: ' + idHabilidad);
			console.log('Habilidad Nombre: ' + nombre);
			console.log('Habilidad Descripcion: ' + descripcion);
		}
	}
});

//------------------------------------------------------	CAZADOR		------------------------------------------------------//
function crearCazador(alias, giro, coordenadas)
{
	//var alias = document.getElementById("alias").value;
	//var giro = document.getElementById("giro_de_proyectos").value;
	//var coordenadas = document.getElementById("coordenadas").value;
	DATABASE.addCazador(CAZADOR(alias, giro, coordenadas));
	console.log('DONE');
	console.log(CAZADOR.counter);
}

function editarCazador()
{
	//
}

function eliminarCazador()
{
	//
}

function buscarCazador()
{
	//
}

//------------------------------------------------------	CITA		------------------------------------------------------//
function crearCitaA(ic, it, h, l)
{
	/*var ic = document.getElementById("lista_de_cazadores").value;
	var it = document.getElementById("lista_de_talentos").value;
	var h = document.getElementById("horario").value;
	var l = document.getElementById("lugar").value;*/
	DATABASE.addCazador(CITA(ic, it, h, l));
	console.log('DONE');
}

function newCitaC()
{
	var HTML_expr = "";
	//<option value="talentos1">Talento 1</option>
	for(var i = 0; i < DATABASE.getTalentos().length; i++) {
			HTML_expr += "<option value='" + DATABASE.getTalentos()[i].idTalento + "'>";
			HTML_expr += DATABASE.getTalentos()[i].alias + "</option>";
	}
	document.getElementById("lista_de_talentos").innerHTML = HTML_expr;
}

function crearCitaC()
{
	var it = document.getElementById("lista_de_talentos").value;
	var h = document.getElementById("horario").value;
	var l = document.getElementById("lugar").value;
	DATABASE.addCazador(CITA('default', it, h, l));
	console.log('DONE');
}

function newCitaT()
{
	var HTML_expr = "";
	for(var i = 0; i < DATABASE.getCazadores().length; i++) {
			HTML_expr += "<option value='" + DATABASE.getCazadores()[i].idCazador + "'>";
			HTML_expr += DATABASE.getCazadores()[i].alias + "</option>";
	}
	document.getElementById("lista_de_cazadores").innerHTML = HTML_expr;
}

function crearCitaT()
{
	var ic = document.getElementById("lista_de_cazadores").value;
	var h = document.getElementById("horario").value;
	var l = document.getElementById("lugar").value;
	DATABASE.addCazador(CITA(ic, 'default', h, l));
	console.log('DONE');
}

function editarCita()
{
	//
}

function eliminarCita()
{
	//
}

function buscarCita()
{
	//
}

//------------------------------------------------------	CONTRATO		------------------------------------------------------//
//(iC, iT, iP)
function newContrato()
{
	var HTML_expr = "";
	for(var i = 0; i < DATABASE.getProyectos().length; i++) {
			HTML_expr += "<option value='" + DATABASE.getProyectos()[i].idProyecto + "'>";
			HTML_expr += DATABASE.getProyectos()[i].nombre + "</option>";
	}
	document.getElementById("lista_de_proyectos").innerHTML = HTML_expr;

	for(var i = 0; i < DATABASE.getTalentos().length; i++) {
			HTML_expr += "<option value='" + DATABASE.getTalentos()[i].idTalento + "'>";
			HTML_expr += DATABASE.getTalentos()[i].alias + "</option>";
	}
	document.getElementById("lista_de_talentos").innerHTML = HTML_expr;
}

function crearContrato(it, ip)
{
	/*var it = document.getElementById("lista_de_talentos").value;
	var ip = document.getElementById("giro_de_proyectos").value;*/
	DATABASE.addContrato(CONTRATO('default', it, ip));
	console.log('DONE');
}

function editarContrato()
{
	//
}

function eliminarContrato()
{
	//
}

function buscarContrato()
{
	//
}

//------------------------------------------------------	HABILIDAD		------------------------------------------------------//
function crearHabilidad(nombre, descripcion)
{
	/*var nombre = document.getElementById("nombre").value;
	var descripcion = document.getElementById("input").value;*/
	DATABASE.addHabilidad(HABILIDAD(nombre, descripcion));
	console.log('DONE');
	console.log(HABILIDAD.counter);
}

function editarHabilidad()
{
	//
}

function eliminarHabilidad()
{
	//
}

function buscarHabilidad()
{
	//
}

//------------------------------------------------------	PROYECTO		------------------------------------------------------//
function newHabilidades()
{
	var HTML_expr = "";
	for(var i = 0; i < DATABASE.getHabilidades().length; i++) {
			HTML_expr += "<option value='" + DATABASE.getHabilidades()[i].idHabilidad + "'>";
			HTML_expr += DATABASE.getHabilidades()[i].nombre + "</option>";
	}
	document.getElementById("habilidad").innerHTML = HTML_expr;
}

//n, d, c, h
function crearProyecto(nombre, descripcion, cuota, habilidades)
{
	/*var nombre = document.getElementById("nombre").value;
	var descripcion = document.getElementById("descripcion").value;
	var cuota = document.getElementById("cuota").value;
	var habilidades = document.getElementById("habilidad").value;*/
	DATABASE.addProyecto(PROYECTO(nombre, descripcion, cuota, habilidades));
	console.log('DONE');
}

function editarProyecto()
{
	//
}

function eliminarProyecto()
{
	//
}

function buscarProyecto()
{
	//
}

//------------------------------------------------------	TALENTO		------------------------------------------------------//
//a, ac, ho, l, c, ha
function crearTalento(alias, actividadProfesional, horario, lugar, costo, habilidades)
{
	/*var alias = document.getElementById("alias").value;
	var actividadProfesional = document.getElementById("actividad_profesional").value;
	var horario = document.getElementById("horario").value;
	var lugar = document.getElementById("lugar").value;
	var costo = document.getElementById("costo").value;
	var habilidades = document.getElementById("habilidad").value;*/
	DATABASE.addTalento(TALENTO(alias, actividadProfesional, horario, lugar, costo));
	console.log('DONE');
}

function editarTalento()
{
	//
}

function eliminarTalento()
{
	//
}

function buscarTalento()
{
	//
}

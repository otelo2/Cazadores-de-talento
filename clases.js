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
    //getCazadorIndex: function( s ) { return cazadores.indexOf(s); },
    removeCazador: function(i) { cazadores.splice(i, 1);},
    addCazador: function( b ) { b.displayInformation(); cazadores.push( b ); },

		getTalentos: function() { return talentos; },
    //getSubjectIndex: function( s ) { return subjects.indexOf(s); },
    removeTalento: function(i) { talentos.splice(i, 1);},
    addTalento: function( b ) { talentos.push( b ); },

		getCitas: function() { return citas; },
    //getSubjectIndex: function( s ) { return subjects.indexOf(s); },
    removeCita: function(i) { citas.splice(i, 1);},
    addCita: function( b ) { citas.push( b ); },

		getContratos: function() { return contratos; },
    //getContratosIndex: function( s ) { return contratos.indexOf(s); },
    removeContrato: function(i) { contratos.splice(i, 1);},
    addContrato: function( b ) { contratos.push( b ); },

		getProyectos: function() { return proyectos; },
    //getProyectosIndex: function( s ) { return proyectos.indexOf(s); },
    removeProyecto: function(i) { proyectos.splice(i, 1);},
    addProyecto: function( b ) { proyectos.push( b ); },

		getHabilidades: function() { return habilidades; },
    //getHabilidadesIndex: function( s ) { return habilidades.indexOf(s); },
    removeHabilidad: function(i) { habilidades.splice(i, 1);},
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
		getTalentoID: function() {return idTalento;},
		setTalentoID: function(it) {idTalento = it},
		getCazadorID: function() {return idCazador;},
		setCazadorID: function(ic) {idCazador = ic},
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
		getCazadorID: function() {return idCazador;},
		setCazadorID: function(ic) {idCazador = ic},
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
		getID: function() {return idContrato;},
		getProyectoID: function() {return idProyecto;},
		getTalentoID: function() {return idTalento;},
		setProyectoID: function(iP) {idProyecto = iP;},
		setTalentoID: function(iT) {idTalento = iT;},
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
		setDescripcion: function(d) {descripcion = d;},
		displayInformation: function() {
			console.log('Habilidad id: ' + idHabilidad);
			console.log('Habilidad Nombre: ' + nombre);
			console.log('Habilidad Descripcion: ' + descripcion);
		}
	}
});

//------------------------------------------------------	FUNCIONES		------------------------------------------------------//

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
	var o = document.getElementById("cazador").value;
	//encontrar al Cazador
	for(var j = 0; j < DATABASE.getCazadores().length; j++)
	{
		if(DATABASE.getCazadores()[j].getID() == o)
		{
				o = j;
				break;
		}
	}
	//editar valores que cambiaron
	if(DATABASE.getCazadores()[o].getAlias()!=document.getElementById("alias"))
	{
		DATABASE.getCazadores()[o].setAlias(document.getElementById("alias"))
	}
	if(DATABASE.getCazadores()[o].getGiroProyectos()!=document.getElementById("giro_de_proyectos"))
	{
		DATABASE.getCazadores()[o].setGiroProyectos(document.getElementById("giro_de_proyectos"))
	}
	if(DATABASE.getCazadores()[o].getCoordenadas()!=document.getElementById("coordenadas"))
	{
		DATABASE.getCazadores()[o].setCoordenadas(document.getElementById("coordenadas"))
	}
}

function defaultCazador()
{
	var o = document.getElementById("cazador").value;
	//encontrar al Cazador
	for(var j = 0; j < DATABASE.getCazadores().length; j++)
	{
		if(DATABASE.getCazadores()[j].getID() == o)
		{
				o = j;
				break;
		}
	}
	//poner los datos del cazadores en el formato
	var HTML_expr = "<label for='alias'>Alias</label>"
	HTML_expr += "<input type='text' name='alias' id='alias' value='" + getCazadores()[o].getAlias() + "'>"
	HTML_expr += "<label for='giro_de_proyectos'>Giro de proyectos</label>"
	HTML_expr += "<input type='text' name='giro_de_proyectos' id='giro_de_proyectos' value='"+getCazadores()[o].getGiroProyectos()+"'>"
	HTML_expr += "<label for='coordenadas'>Coordenadas</label>"
	HTML_expr += "<input type='text' name='coordenadas' id='coordenadas' value='"+getCazadores()[o].getCoordenadas()+"'>"
	document.getElementById("changing").innerHTML = HTML_expr;
}

function newCazador()
{
	var HTML_expr = "";
	for(var i = 0; i < DATABASE.getCazadores().length; i++) {
			HTML_expr += "<option value='" + DATABASE.getCazadores()[i].getID() + "'>";
			HTML_expr += DATABASE.getCazadores()[i].getAlias() + "</option>";
	}
	document.getElementById("cazador").innerHTML = HTML_expr;
}

function eliminarCazador()
{
  var cazador = document.getElementById("cazador");
  var index = -1
  for ( var i = 0, l = cazador.options.length, o; i < l; i++ )
  {
    o = cazador.options[i].value;
    for(var j = 0; j < DATABASE.getCazadores().length; j++)
    {
      if(DATABASE.getCazadores()[j].getID() == o)
      {
          DATABASE.removeCazador(j);
          break;
      }
    }
  }
}

function buscarCazador()
{
  var query = document.getElementById("query");
  var result = [];
  for(var j = 0; j < DATABASE.getCazadores().length; j++)
  {
    if((DATABASE.getCazadores()[j].getID() == query)||(DATABASE.getCazadores()[j].getAlias() == query)||(DATABASE.getCazadores()[j].getGiroProyectos() == query)||(DATABASE.getCazadores()[j].getCoordenadas() == query)||(DATABASE.getCazadores()[j].getReputacion() == query))
    {
        result.push(DATABASE.getTalentos()[j]);
    }
    else
    {
      for(var i = 0; i < DATABASE.getCazadores()[j].getListaProyectos().length; j++)
      {
        if(DATABASE.getCazadores()[j].getListaProyectos()[i] == query)
        {
            result.push(DATABASE.getTalentos()[j]);
            break;
        }
      }
    }
  }
  //print talentos on screen
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

function defaultCitaA()
{

}

function newCitaC()
{
	var HTML_expr = "";
	//<option value="talentos1">Talento 1</option>
	for(var i = 0; i < DATABASE.getTalentos().length; i++) {
			HTML_expr += "<option value='" + DATABASE.getTalentos()[i].getID() + "'>";
			HTML_expr += DATABASE.getTalentos()[i].getAlias() + "</option>";
	}
	document.getElementById("lista_de_talentos").innerHTML = HTML_expr;
}

function crearCitaC(it, h, l)
{
	/*var it = document.getElementById("lista_de_talentos").value;
	var h = document.getElementById("horario").value;
	var l = document.getElementById("lugar").value;*/
	DATABASE.addCazador(CITA('default', it, h, l));
	console.log('DONE');
}

function newCitaT()
{
	var HTML_expr = "";
	for(var i = 0; i < DATABASE.getCazadores().length; i++) {
			HTML_expr += "<option value='" + DATABASE.getCazadores()[i].getID() + "'>";
			HTML_expr += DATABASE.getCazadores()[i].getAlias() + "</option>";
	}
	document.getElementById("lista_de_cazadores").innerHTML = HTML_expr;
}

function crearCitaT(ic, h, l)
{
	/*var ic = document.getElementById("lista_de_cazadores").value;
	var h = document.getElementById("horario").value;
	var l = document.getElementById("lugar").value;*/
	DATABASE.addCazador(CITA(ic, 'default', h, l));
	console.log('DONE');
}

function editarCita()
{
	//
}

function newCitas()
{
	var HTML_expr = "";
	for(var i = 0; i < DATABASE.getCitas().length; i++) {
			HTML_expr += "<option value='" + DATABASE.getCitas()[i].getID() + "'>";
			HTML_expr += "Cita" + DATABASE.getCitas()[i].getID() + "</option>";
	}
	document.getElementById("cita").innerHTML = HTML_expr;
}

function eliminarCita()
{
  var citas = document.getElementById("cita");
  var index = -1
  for ( var i = 0, l = citas.options.length, o; i < l; i++ )
  {
    o = citas.options[i].value;
    for(var j = 0; j < DATABASE.getCitas().length; j++)
    {
      if(DATABASE.getCitas()[j].getID() == o)
      {
          DATABASE.removeCita(j);
          break;
      }
    }
  }
}

function buscarCita()
{
  var query = document.getElementById("query");
  var result = [];
  for(var j = 0; j < DATABASE.getCitas().length; j++)
  {
    if((DATABASE.getCitas()[j].getID() == query)||(DATABASE.getCitas()[j].getHorario() == query)||(DATABASE.getCitas()[j].getLugar() == query))
    {
        result.push(DATABASE.getContratos()[j]);
    }
  }
  //print citas on screen
}

//------------------------------------------------------	CONTRATO		------------------------------------------------------//
//(iC, iT, iP)
function newContrato()
{
	var HTML_expr = "";
	for(var i = 0; i < DATABASE.getProyectos().length; i++) {
			HTML_expr += "<option value='" + DATABASE.getProyectos()[i].getID() + "'>";
			HTML_expr += DATABASE.getProyectos()[i].getNombre() + "</option>";
	}
	document.getElementById("lista_de_proyectos").innerHTML = HTML_expr;

	for(var i = 0; i < DATABASE.getTalentos().length; i++) {
			HTML_expr += "<option value='" + DATABASE.getTalentos()[i].getID() + "'>";
			HTML_expr += DATABASE.getTalentos()[i].getAlias() + "</option>";
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
	var o = document.getElementById("contrato").value;
	//encontrar al Cazador
	for(var j = 0; j < DATABASE.getContratos().length; j++)
	{
		if(DATABASE.getContratos()[j].getID() == o)
		{
				o = j;
				break;
		}
	}
	//editar valores que cambiaron
	if(document.getElementById("lista_de_talentos") != DATABASE.getContratos()[o].getTalentoID())
	{
		DATABASE.getContratos()[o].setTalentoID(document.getElementById("lista_de_talentos"))
	}
	if(document.getElementById("lista_de_proyectos") != DATABASE.getContratos()[o].getProyectoID())
	{
		DATABASE.getContratos()[o].setProyectoID(document.getElementById("lista_de_proyectos"))
	}
}

function defaultContrato()
{
	var o = document.getElementById("contrato").value;
	//encontrar al Cazador
	for(var j = 0; j < DATABASE.getContratos().length; j++)
	{
		if(DATABASE.getContratos()[j].getID() == o)
		{
				o = j;
				break;
		}
	}

	var HTML_expr = "<label for='lista_de_proyectos'>Para el proyecto:</label>"
	HTML_expr += "<select name='lista_de_proyectos' id='lista_de_proyectos'>"
	for(var i = 0; i < DATABASE.getProyectos().length; i++) {
			HTML_expr += "<option value='" + DATABASE.getProyectos()[i].getID() + "'>";
			HTML_expr += DATABASE.getProyectos()[i].getNombre() + "</option>";
	}
	HTML_expr += "</select>"
	HTML_expr += "<label for='lista_de_talentos'>Talento seleccionado:</label>"
	HTML_expr += "<select name='lista_de_talentos' id='lista_de_talentos'>"
	for(var i = 0; i < DATABASE.getTalentos().length; i++) {
			HTML_expr += "<option value='" + DATABASE.getTalentos()[i].getID() + "'>";
			HTML_expr += DATABASE.getTalentos()[i].getAlias() + "</option>";
	}
	HTML_expr += "</select>"

	document.getElementById("changing").innerHTML = HTML_expr;
	document.getElementById("lista_de_proyectos").value = DATABASE.getContratos()[o].getProyectoID();
	document.getElementById("lista_de_talentos").value = DATABASE.getContratos()[o].getTalentoID();
}

function newContratoList()
{
  var HTML_expr = "";
  for(var i = 0; i < DATABASE.getContratos().length; i++) {
      HTML_expr += "<option value='" + DATABASE.getContratos()[i].getID() + "'>";
      HTML_expr += "Contrato "+ DATABASE.getContratos()[i].getID() + "</option>";
  }
  document.getElementById("contrato").innerHTML = HTML_expr;
}

function eliminarContrato()
{
  var contratos = document.getElementById("contrato");
  var index = -1
  for ( var i = 0, l = contratos.options.length, o; i < l; i++ )
  {
    o = contratos.options[i].value;
    for(var j = 0; j < DATABASE.getContratos().length; j++)
    {
      if(DATABASE.getContratos()[j].getID() == o)
      {
          DATABASE.removeContrato(j);
          break;
      }
    }
  }
}

function buscarContrato()
{
  var query = document.getElementById("query");
  var result = [];
  for(var j = 0; j < DATABASE.getContratos().length; j++)
  {
    if(DATABASE.getContratos()[j].getID() == query)
    {
        result.push(DATABASE.getContratos()[j]);
    }
  }
  //print contratos on screen
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
  var habilidades = document.getElementById("habilidad");
  var index = -1
  for ( var i = 0, l = habilidades.options.length, o; i < l; i++ )
  {
    o = habilidades.options[i].value;
    for(var j = 0; j < DATABASE.getHabilidades().length; j++)
    {
      if(DATABASE.getHabilidades()[j].getID() == o)
      {
          DATABASE.removeHabilidad(j);
          break;
      }
    }
  }
}

function buscarHabilidad()
{
  var query = document.getElementById("query");
  var result = [];
  for(var j = 0; j < DATABASE.getHabilidades().length; j++)
  {
    if((DATABASE.getHabilidades()[j].getID() == query)||(DATABASE.getHabilidades()[j].getNombre() == query)||(DATABASE.getHabilidades()[j].getDescripcion() == query))
    {
        result.push(DATABASE.getHabilidades()[j]);
    }
  }
  //print habilidades on screen
	var HTML_expr = ""
	for(var j = 0; j < result.length; j++)
	{
		HTML_expr += "<div> <p>Habilidad "+result[j].getID()+"</p>"
		HTML_expr += "<p>Nombre: "+result[j].getNombre()+"</p>"
		HTML_expr += "<p>Descripcion: "+result[j].getDescripcion()+"</p> </div>"
	}
	document.getElementById("result").innerHTML = HTML_expr;
}

//------------------------------------------------------	PROYECTO		------------------------------------------------------//
function newHabilidades()
{
	var HTML_expr = "";
	for(var i = 0; i < DATABASE.getHabilidades().length; i++) {
			HTML_expr += "<option value='" + DATABASE.getHabilidades()[i].getID() + "'>";
			HTML_expr += DATABASE.getHabilidades()[i].getNombre() + "</option>";
	}
	document.getElementById("habilidad").innerHTML = HTML_expr;
}

function newProyecto()
{
	var HTML_expr = "";
	//<option value="talentos1">Talento 1</option>
	for(var i = 0; i < DATABASE.getProyectos().length; i++) {
			HTML_expr += "<option value='" + DATABASE.getProyectos()[i].getID() + "'>";
			HTML_expr += DATABASE.getProyectos()[i].getNombre() + "</option>";
	}
	document.getElementById("proyecto").innerHTML = HTML_expr;
}

//n, d, c, h
function crearProyecto(nombre, descripcion, cuota, habilidades)
{
	/*var nombre = document.getElementById("nombre").value;
	var descripcion = document.getElementById("descripcion").value;
	var cuota = document.getElementById("cuota").value;
	var habilidades = document.getElementById("habilidad");
  var h = []
  for ( var i = 0, l = habilidades.options.length, o; i < l; i++ )
  {
    o = select.options[i].value;
    for(var j = 0; j < DATABASE.getHabilidades().length; j++)
    {
      if(DATABASE.getHabilidades()[j].getID() == o)
      {
          h.push(DATABASE.getHabilidades()[j]);
          break;
      }
    }
  }
	DATABASE.addProyecto(PROYECTO(nombre, descripcion, cuota, h));
	console.log('DONE');
}

function editarProyecto()
{
	//
}

function eliminarProyecto()
{
  var proyectos = document.getElementById("proyecto");
  var index = -1
  for ( var i = 0, l = proyectos.options.length, o; i < l; i++ )
  {
    o = proyectos.options[i].value;
    for(var j = 0; j < DATABASE.getProyectos().length; j++)
    {
      if(DATABASE.getProyectos()[j].getID() == o)
      {
          DATABASE.removeProyecto(j);
          break;
      }
    }
  }
}

function buscarProyecto()
{
  var query = document.getElementById("query");
  var result = [];
  for(var j = 0; j < DATABASE.getProyectos().length; j++)
  {
    if((DATABASE.getProyectos()[j].getID() == query)||(DATABASE.getProyectos()[j].getNombre() == query)||(DATABASE.getProyectos()[j].getDescripcion() == query)||(DATABASE.getProyectos()[j].getCuota() == query))
    {
        result.push(DATABASE.getProyectos()[j]);
    }
    else
    {
      for(var i = 0; j < DATABASE.getProyectos()[j].getHabilidades().length; j++)
      {
        if(DATABASE.getProyectos()[j].getHabilidades()[i] == query)
        {
            result.push(DATABASE.getProyectos()[j]);
            break;
        }
      }
    }
  }
	var HTML_expr = ""
	for(var j = 0; j < result.length; j++)
	{
		HTML_expr += "<div> <p>Proyecto "+result[j].getID()+"</p>"
		HTML_expr += "<p>Nombre: "+result[j].getNombre()+"</p>"
		HTML_expr += "<p>Descripcion: "+result[j].getDescripcion()+"</p>"
		HTML_expr += "<p>Habilidades: </p> <ul>"
		for(var i = 0; i < result[j].getHabilidades().length; i++)
		{
				HTML_expr += "<li>" + result[j].getTalentos()[i].getNombre() + "</li>";
		}
		HTML_expr += "</ul>"
		HTML_expr += "<p>Cuota: "+ result[j].getCuota() +"</p>"
		HTML_expr += "<p>Activo:: "+result[j].getEstaActivo()+"</p> </div>"
	}
	document.getElementById("result").innerHTML = HTML_expr;
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
	var habilidades = document.getElementById("habilidad");  //PENDIENTE
  var h = []
  for ( var i = 0, l = habilidades.options.length, o; i < l; i++ )
  {
    o = select.options[i].value;
    for(var j = 0; j < DATABASE.getHabilidades().length; j++)
    {
      if(DATABASE.getHabilidades()[j].getID() == o)
      {
          h.push(DATABASE.getHabilidades()[j]);
          break;
      }
    }
  }
	DATABASE.addTalento(TALENTO(alias, actividadProfesional, horario, lugar, costo, h));
	console.log('DONE');
}

function editarTalento()
{
	//
}

function eliminarTalento()
{
  var talentos = document.getElementById("lista_de_talentos");
  var index = -1
  for ( var i = 0, l = talentos.options.length, o; i < l; i++ )
  {
    o = talentos.options[i].value;
    for(var j = 0; j < DATABASE.getTalentos().length; j++)
    {
      if(DATABASE.getTalentos()[j].getID() == o)
      {
          DATABASE.removeTalento(j);
          break;
      }
    }
  }
}

function newTalento()
{
	var HTML_expr = "";
	for(var i = 0; i < DATABASE.getTalentos().length; i++) {
			HTML_expr += "<option value='" + DATABASE.getTalentos()[i].getID() + "'>";
			HTML_expr += DATABASE.getTalentos()[i].getAlias() + "</option>";
	}
	document.getElementById("talento").innerHTML = HTML_expr;
}

function buscarTalento()
{
  var query = document.getElementById("query");
  var result = [];
  for(var j = 0; j < DATABASE.getTalentos().length; j++)
  {
    if((DATABASE.getTalentos()[j].getID() == query)||(DATABASE.getTalentos()[j].getAlias() == query)||(DATABASE.getTalentos()[j].getActividadProfesional() == query)||(DATABASE.getTalentos()[j].getHorario() == query)||(DATABASE.getTalentos()[j].getLugar() == query)||(DATABASE.getTalentos()[j].getCosto() == query)||(DATABASE.getTalentos()[j].getReputacion() == query))
    {
        result.push(DATABASE.getTalentos()[j]);
    }
    else
    {
      for(var i = 0; i < DATABASE.getTalentos()[j].getHabilidades().length; j++)
      {
        if(DATABASE.getTalentos()[j].getHabilidades()[i] == query)
        {
            result.push(DATABASE.getTalentos()[j]);
            break;
        }
      }
    }
  }
  //print talentos on screen
	var HTML_expr = ""
	for(var j = 0; j < result.length; j++)
	{
		HTML_expr += "<div> <p>Talento "+result[j].getID()+"</p>"
		HTML_expr += "<p>Alias: "+result[j].getAlias()+"</p>"
		HTML_expr += "<p>Habilidades: </p> <ul>"
		for(var i = 0; i < result[j].getHabilidades().length; i++)
		{
				HTML_expr += "<li>" + result[j].getTalentos()[i].getNombre() + "</li>";
		}
		HTML_expr += "</ul>"
		HTML_expr += "<p>Horario: "+result[j].getHorario()+"</p>"
		HTML_expr += "<p>Lugar: "+result[j].getLugar()+"</p>"
		HTML_expr += "<p>Costo: "+result[j].getCosto()+"</p>"
		HTML_expr += "<p>Reputacion: "+result[j].getReputacion()+"</p> </div>"
	}
	document.getElementById("result").innerHTML = HTML_expr;
}

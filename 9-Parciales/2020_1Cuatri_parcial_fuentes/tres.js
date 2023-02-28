// Devita Mateo
/* 
Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil
("soltero", "casado" o "viudo") y temperatura corporal. 

a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.
*/ 
function mostrar()
{
	/*let respuesta; // INICIA EJERCICIO 
	let nombrePersona; 
	let edadPersona; 
	let sexoIngresado; 
	let estadoCivil; 
	let temperaturaCorporal; 

	let banderaPersonaConMasTemperatura; 
	let personaConMasTemperatura; 
	let edadPersonaConMasTemperatura; 
	let temperaturaPersonaConMasTemperatura; 
	let contadorMayoresEdadViudos; 
	let contadorHombresSolterosViudos; 
	let contadorTerceraEdadTemperatura; 
	let acumuladorEdadHombresSolteros; 
	let contadorHombresSolteros; 
	let promedioHombresSolteros;

	contadorMayoresEdadViudos = 0; 
	contadorHombresSolterosViudos = 0; 
	contadorTerceraEdadTemperatura = 0; 
	acumuladorEdadHombresSolteros = 0; 
	contadorHombresSolteros = 0; 
	respuesta = "si"; 
	banderaPersonaConMasTemperatura = true; 

	while(respuesta == "si")
	{
		nombrePersona = prompt("Ingrese su nombre"); 
		
		edadPersona = parseInt(prompt("Ingrese su edad (Entre 0 a 123 Años)")); 
		while(isNaN(edadPersona) || edadPersona < 0 || edadPersona > 123)
		{
			edadPersona = parseInt(prompt("Error,Ingrese su edad (Entre 0 a 123 Años)"));
		} 

		sexoIngresado = prompt("Ingrese su Sexo. 'f' si es mujer, 'm' si es hombre o 'b' si es binario."); 
		while(!isNaN(sexoIngresado) || sexoIngresado != "f" && sexoIngresado != "m" && sexoIngresado != "b")
		{
			sexoIngresado = prompt("Error, Ingrese su Sexo. 'f' si es mujer, 'm' si es hombre o 'b' si es binario.");
		} 

		estadoCivil = prompt("Ingrese su estado civil (soltero/casado/viudo)");
		while(estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo")
		{
			estadoCivil = prompt("Error,Ingrese su estado civil (soltero/casado/viudo)");
		} 

		temperaturaCorporal = parseFloat(prompt("Ingrese su temperatura corporal (Entre 32 a 50"));
		while(isNaN(temperaturaCorporal) || temperaturaCorporal < 32 || temperaturaCorporal > 50)
		{
			temperaturaCorporal = parseFloat(prompt("Error, Ingrese su temperatura corporal (Entre 32 a 50"));
		} 

		switch(estadoCivil)
		{
			case "casado": 
				break; 
			case "soltero": 
				if(sexoIngresado == "m") 
				{ 
					acumuladorEdadHombresSolteros = acumuladorEdadHombresSolteros + edadPersona; 
					contadorHombresSolteros = contadorHombresSolteros + 1; 
					contadorHombresSolterosViudos = contadorHombresSolterosViudos + 1;
				}
				break; 
			case "viudo": 
				if(sexoIngresado == "m")
				{
					contadorHombresSolterosViudos = contadorHombresSolterosViudos + 1;
				}

				if(edadPersona > 17)
				{
					contadorMayoresEdadViudos = contadorMayoresEdadViudos + 1; 
				}
				break; 
		} // Fin Switch 

		if(edadPersona > 59 && temperaturaCorporal > 37)
		{
			contadorTerceraEdadTemperatura = contadorTerceraEdadTemperatura + 1;
		}

		if(banderaPersonaConMasTemperatura == true || temperaturaCorporal > temperaturaCorporal)
		{
			personaConMasTemperatura = nombrePersona; 
			edadPersonaConMasTemperatura = edadPersona; 
			temperaturaPersonaConMasTemperatura = temperaturaCorporal; 
			banderaPersonaConMasTemperatura = false; 
		}

		respuesta = prompt("Desea seguir ingresando Datos? si/no"); 
	} // Fin WHile 

	promedioHombresSolteros =  acumuladorEdadHombresSolteros/contadorHombresSolteros; 
	if(contadorHombresSolteros = 0)
	{
		promedioHombresSolteros = "No hubo hombres solteros ingresados"; 
	}

	document.write("La persona con mas temperatura corporal es: " + personaConMasTemperatura + " tiene de edad: " + edadPersonaConMasTemperatura + " y tiene un total de: " + temperaturaPersonaConMasTemperatura + " grados" + "<br>"); 
	document.write("La cantidad de mayores de edad que estan viudos es: " + contadorMayoresEdadViudos + "<br>"); 
	document.write("La cantidad de hombres que hay solteros o viudos es: " + contadorHombresSolterosViudos  + "<br>");
	document.write("La cantidad de personas de tercera edad que tiene mas de 38 temperatura corporal es: " + contadorTerceraEdadTemperatura + "<br>");
	document.write("El promedio de edad entre los hombres solteros es:" + promedioHombresSolteros); */ // FINALIZA EJERCICIO 

	/*  // INICIA EJERCICIO
	* Apellido: Devita
	* Nombre: Mateo
	* Comisión: B
	* Tutor: Matias Bustamante
	* 
	Ejercicio 1
	La Premier League de Inglaterra necesita un sistema capaz de reunir las estadisticas de los 
	jugadores que la integran.
	Para ellos se pide realizar una app.

	Se debe ingresar por cada jugador

	-Nombre del jugador
	-Nacionalidad
	-Posición (Arquero, Defensor, Mediocampista o Delantero)
	-Cantidad de Tarjetas Rojas recibidas
	-Goles 

	Se necesita saber

	a)El goleador del torneo
	b)El jugador Argentino con menos rojas recibidas.
	c)El porcentaje de jugadores Ingleses de la liga

	NOTA: Deben poder ingresarse todos números positivos, no se deben pueden ingresar números negativos.
	*/ 

	/*let respuesta; 
	let nombreJugador; 
	let nacionalidad; 
	let posicionJugador; 
	let cantidadTarjetasRojas; 
	let golesIngresados; 

	let banderaGoleadorTorneo; 
	let mayorGoleadorTorneo; 
	let contadorTarjetasRojas; 
	let banderaJugadorMenosRojas; 
	let jugadorMenosRojasTorneo; 
	let cantidadRojasJugadorMenosRojas; 
	let contadorJugadoresIngleses; 
	let contadorJugadoresArgentina;
	let contadorJugadoresLiga; 
	let promedioIngleses; 

	banderaGoleadorTorneo = true; 
	respuesta = "si"; 
	contadorTarjetasRojas = 0; 
	banderaJugadorMenosRojas = true; 
	contadorJugadoresIngleses = 0; 
	contadorJugadoresLiga = 0; 
	contadorJugadoresArgentina = 0; 

	while(respuesta == "si")
	{
		nombreJugador = prompt("Ingrese su nombre");  

		nacionalidad = prompt("Ingrese su pais (Inglaterra/Europa/Argentina/Otro"); 
		
		posicionJugador = prompt("Ingrese su posicion (Arquero, Defensor, Mediocampista o Delantero)"); 
		while(posicionJugador != "Arquero" &&  posicionJugador != "Defensor" && posicionJugador != "Mediocampista" && posicionJugador != "Delantero")
		{
			posicionJugador = prompt("Error, Ingrese su posicion (Arquero, Defensor, Mediocampista o Delantero)");
		} 

		cantidadTarjetasRojas = parseInt(prompt("Ingrese la cantidad de tarjetas rojas")); 
		while(isNaN(cantidadTarjetasRojas))
		{
			cantidadTarjetasRojas = parseInt(prompt("Error, Ingrese la cantidad de tarjetas rojas")); 
		} 

		golesIngresados = parseInt(prompt("Ingrese la cantidad de goles marcados")); 
		while(isNaN(golesIngresados))
		{
			golesIngresados = parseInt(prompt("Ingrese la cantidad de goles marcados"));
		} 

		contadorJugadoresLiga = contadorJugadoresLiga + 1; 

		switch(nacionalidad)
		{
			case "Inglaterra": 
				contadorJugadoresIngleses = contadorJugadoresIngleses + 1;  
				if(contadorJugadoresIngleses == 0)
				{
					promedioIngleses = "No hay jugadores Ingleses en la liga";
				}else
				{
					promedioIngleses = contadorJugadoresLiga/contadorJugadoresIngleses; 
				}
				promedioIngleses = contadorJugadoresLiga/contadorJugadoresIngleses; 
				break; 
			case "Argentina": 
				if(banderaJugadorMenosRojas == true || cantidadTarjetasRojas < cantidadTarjetasRojas)
				{
					jugadorMenosRojasTorneo = nombreJugador; 
					cantidadRojasJugadorMenosRojas = cantidadTarjetasRojas; 
					banderaJugadorMenosRojas = false; 
				}
				break; 	
		} 

		respuesta = prompt("Desea seguir ingresando Jugadores? si/no")
	} // Fin WHILE 

	if(banderaGoleadorTorneo == true || golesIngresados > golesIngresados)
	{
		mayorGoleadorTorneo = nombreJugador; 
		banderaGoleadorTorneo = false;
	} 

	document.write("El goleador del torneo es: " + mayorGoleadorTorneo + "<br>"); 
	document.write("El argentino con menos cantidad rojas es: " + jugadorMenosRojasTorneo + " con: " + cantidadRojasJugadorMenosRojas + "<br>"); 
	document.write("El promedio de jugadores ingleses es: " + promedioIngleses);  
	// FIN EJERCICIO SABADOS 25-02 I */ 

	/* // INICIA EJERCICIO 
	* Apellido: Devita
	* Nombre: Mateo
	* Comisión: B
	* Tutor: Matias Bustamante 
	
	Ejercicio 2

	Dr. Gregory Cat (Diagnostico Veterinario)
	Para el hospital de mascotas: Princeton-Plainsboro de Nueva Jersey.

	Es necesario registrar el ingreso de las mascotas al hospital, para esto hay que considerar
	los siguientes datos y encasillarlos en ciertos diagnósticos para poder derivarlos adecuadamente:

	Nombre de la mascota
	Edad (Validar 1 - 20)
	Tipo: (Validar “gato”, “perro”, “hamster”)
	Peso: (Más de 0)
	Diagnostico: (Validar “problemas digestivos”, “otitis”, “alergias en la piel”, “parasitos”, 
	“picazon de abeja”)
	Vacuna antirrábica (validar “si”, ”no”)

	Informes:

	a) Nombre de la mascota más vieja con la vacuna antirrábica
	b) Cantidad de mascotas sin vacuna antirrábica y con parásitos
	c) El tipo de mascota con más ingresos por problemas digestivos.
	d) Nombre, edad y diagnóstico de la mascota más joven ingresada.
	e) Cantidad de perros ingresados por otitis. 
	*/ 

	/*let nombreMascota; 
	let edadIngresada; 
	let tipoMascota; 
	let pesoMascota; 
	let respuesta; 
	let diagnosticoMascota; 
	let vacunaAntirrabica; 

	let banderaMascotaMasVieja; 
	let nombreMascotaMasViejaConAntirrabica; 
	let edadMascotaMasViejaConAntirrabica; 
	let cantidadMascotasSinVacunaParasitos; 
	let banderaMascotaMasJoven; 
	let nombreMascotaMasJovenIngresada; 
	let edadMascotaMasJovenIngresada; 
	let diagnosticoMascotaMasJovenIngresada; 
	let cantidadPerrosOtitis; 
	let tipoMayorProblemasDigestivos; 

	let cantidadGatosDigestivos = 0; 
	let cantidadPerrosDigestivos = 0;
	let cantidadHamsterDigestivos = 0;

	respuesta = "si"; 
	banderaMascotaMasVieja = true; 
	banderaMascotaMasJoven = true;  
	cantidadPerrosOtitis = 0; 
	cantidadMascotasSinVacunaParasitos = 0; 

	while(respuesta == "si")
	{
		nombreMascota = prompt("Ingrese nombre de la mascota"); 

		edadIngresada = parseInt(prompt("Ingrese edad mascota (Entre 1 a 20 años)"));
		while(isNaN(edadIngresada) || edadIngresada < 1 || edadIngresada > 20)
		{
			edadIngresada = parseInt(prompt("Error, Ingrese edad mascota (Entre 1 a 20 años)"));
		} 

		tipoMascota = prompt("ingrese Tipo Mascota (gato/hamster/perro)");
		while(tipoMascota != "perro" && tipoMascota != "gato" && tipoMascota != "hamster")
		{
			tipoMascota = prompt("ingrese Tipo Mascota (gato/hamster/perro)");
		} 

		pesoMascota = parseFloat(prompt("Ingrese el peso de su mascota (Mas de 0)")); 
		while(isNaN(pesoMascota) || pesoMascota < 0)
		{
			pesoMascota = parseFloat(prompt("Error,Ingrese el peso de su mascota (Mas de 0)")); 
		} 

		diagnosticoMascota = prompt("Ingrese diagnostico su mascota (problemas digestivos/otitis/alergias en la piel/parasitos/picazón de abeja)");
		while(diagnosticoMascota != "problemas digestivos" && diagnosticoMascota != "otitis" && diagnosticoMascota != "alergias en la piel" && diagnosticoMascota != "parasitos" && diagnosticoMascota != "picazón de abeja")
		{
			diagnosticoMascota = prompt("Error, Ingrese diagnostico su mascota (problemas digestivos/otitis/alergias en la piel/parasitos)");
		} 

		vacunaAntirrabica = prompt("Tiene vacuna antirrabica? si/no");
		while(vacunaAntirrabica != "si" && vacunaAntirrabica != "no")
		{
			vacunaAntirrabica = prompt("Error, Tiene vacuna antirrabica? si/no")
		} 

		switch(vacunaAntirrabica)
		{
			case "si": 
				if(banderaMascotaMasVieja == true || edadIngresada < edadIngresada)
				{
					nombreMascotaMasViejaConAntirrabica = nombreMascota; 
					edadMascotaMasViejaConAntirrabica = edadIngresada; 
					banderaMascotaMasVieja = false; 
				} 
				break; 
			case "no": 
				if(diagnosticoMascota == "parasitos")
				{
					cantidadMascotasSinVacunaParasitos = cantidadMascotasSinVacunaParasitos + 1; 
				} 
				break;
		}

		switch(tipoMascota)
		{
			case "gato": 
				if(diagnosticoMascota == "problemas digestivos")
				{
					cantidadGatosDigestivos = cantidadGatosDigestivos + 1; 
				}
				break; 
			case "perro": 
				if(diagnosticoMascota == "problemas digestivos")
				{
					cantidadPerrosDigestivos = cantidadPerrosDigestivos + 1; 
				} 

				if(diagnosticoMascota == "otitis")
				{
					cantidadPerrosOtitis = cantidadPerrosOtitis + 1;
				}
				break; 
			case "hamster":
				if(diagnosticoMascota == "problemas digestivos")
				{
					cantidadHamsterDigestivos = cantidadHamsterDigestivos + 1; 
				}
				break; 
		} 

		if(banderaMascotaMasJoven == true || edadIngresada < edadIngresada)
		{
			nombreMascotaMasJovenIngresada = nombreMascota; 
			edadMascotaMasJovenIngresada = edadIngresada; 
			diagnosticoMascotaMasJovenIngresada = diagnosticoMascota; 
			banderaMascotaMasJoven = false; 
		}
		respuesta = prompt("Desea seguir ingresando mascotas? si/no"); 
	} // FIN WHILE

	if(cantidadGatosDigestivos > cantidadPerrosDigestivos && cantidadGatosDigestivos > cantidadHamsterDigestivos)
	{
		tipoMayorProblemasDigestivos = "Gato";
	}else if(cantidadPerrosDigestivos > cantidadHamsterDigestivos && cantidadPerrosDigestivos >= cantidadGatosDigestivos)
	{
		tipoMayorProblemasDigestivos = "Perro";
	}else
	{
		tipoMayorProblemasDigestivos = "Hamster";
	} 

	document.write("El nombre de la mascota mas vieja con vacuna antirrabica es: " + nombreMascotaMasViejaConAntirrabica + "<br>"); 
	document.write("La cantidad de mascotas sin Antirrabica con Parasitos es: " + cantidadMascotasSinVacunaParasitos + "<br>"); 
	document.write("El tipo de Mascota con mas Ingresos por problemas digestivos es: " + tipoMayorProblemasDigestivos + "<br>");  
	document.write("La cantidad de perros que tienen Otitis es: " + cantidadPerrosOtitis); */
	// FIN EJERCICIO 2 25-02 SABADOS 

	/* // INICIA EJERCICIO
	* Apellido: Devita 
	* Nombre: Mateo
	* Comisión: B
	* Tutor: Matias Bustamante
	
	Ejercicio 3

	Una fabrica de muebles nos pide realizar una app para gestionar sus productos. 
	El programa pide dar de alta cada venta realizada (Cada venta representa un mueble 
	en particular, con los atributos definidos mas abajo).

	Se debe ingresar en cada venta.
	-Nombre del mueble
	-Material del mueble (Madera, Metal y Vidrio)
	-Peso
	-Altura
	-Anchura 
	-Precio

	Debido a la tala excesiva de árboles el gobierno pone un impuesto del 15% ante la compra de 
	muebles de madera.
	Los muebles de vidrio o metal tienen un 10% de descuento.

	Se pide

	a)Precio promedio por mueble vendido
	b)Cantidad total de muebles de madera
	c)El mueble de metal más alto 
	d)El mueble más liviano
	e)Porcentaje de muebles de cada tipo de material
	f)Monto total recaudado bruto de todos los muebles (sin descuentos ni impuestos)
	g)Monto total recaudado, pero solo de los muebles de madera(incluido descuentos e impuestos)

	NOTA: Los precios no podran ser cero ni negativo. 
	*/ // A TERMINAR 

	/* 
	Devita Mateo EJERCICIO 3 RECUPERATORIO 2020 
	En el ingreso a un viaje en avión nos solicitan nombre, nacionalidad , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
	a) la Nacionalidad de la persona con mas temperatura.
	b) Cuantos mayores de edad( más de 17) estan solteros
	c) La cantidad de Mujeres que hay solteras o viudas.
	d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
	e) El promedio de edad entre las mujeres casadas.
	*/ 

	/*let respuesta; // INICIA EJERCICIO 
	let nombrePersona; 
	let edadPersona; 
	let sexoIngresado; 
	let estadoCivil; 
	let temperaturaCorporal; 
	let nacionalidadPersona; 

	let banderaPersonaConMasTemperatura; 
	let personaConMasTemperatura; 
	let edadPersonaConMasTemperatura; 
	let temperaturaPersonaConMasTemperatura; 
	let nacionalidadPersonaConMasTemperatura; 
	let contadorMayoresEdadViudos; 
	let contadorMujeresSolterasViudas; 
	let contadorTerceraEdadTemperatura; 
	let acumuladorEdadMujeresCasadas; 
	let contadorMayoresEdadSolteros; 
	let contadorMujeresCasadas; 
	let promedioMujeresCasadas;

	contadorMayoresEdadViudos = 0; 
	contadorMujeresCasadas = 0;
	contadorMujeresSolterasViudas = 0; 
	contadorTerceraEdadTemperatura = 0; 
	acumuladorEdadMujeresCasadas = 0; 
	contadorMayoresEdadSolteros = 0; 
	respuesta = "si"; 
	banderaPersonaConMasTemperatura = true; 

	while(respuesta == "si")
	{
		nombrePersona = prompt("Ingrese su nombre");  

		nacionalidadPersona = prompt("Ingrese su nacionalidad");
		
		edadPersona = parseInt(prompt("Ingrese su edad (Entre 0 a 123 Años)")); 
		while(isNaN(edadPersona) || edadPersona < 0 || edadPersona > 123)
		{
			edadPersona = parseInt(prompt("Error,Ingrese su edad (Entre 0 a 123 Años)"));
		} 

		sexoIngresado = prompt("Ingrese su Sexo. 'f' si es mujer, 'm' si es hombre o 'b' si es binario."); 
		while(!isNaN(sexoIngresado) || sexoIngresado != "f" && sexoIngresado != "m" && sexoIngresado != "b")
		{
			sexoIngresado = prompt("Error, Ingrese su Sexo. 'f' si es mujer, 'm' si es hombre o 'b' si es binario.");
		} 

		estadoCivil = prompt("Ingrese su estado civil (soltero/casado/viudo)");
		while(estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo")
		{
			estadoCivil = prompt("Error,Ingrese su estado civil (soltero/casado/viudo)");
		} 

		temperaturaCorporal = parseFloat(prompt("Ingrese su temperatura corporal (Entre 32 a 50"));
		while(isNaN(temperaturaCorporal) || temperaturaCorporal < 32 || temperaturaCorporal > 50)
		{
			temperaturaCorporal = parseFloat(prompt("Error, Ingrese su temperatura corporal (Entre 32 a 50"));
		} 

		switch(estadoCivil)
		{
			case "casado": 
				if(sexoIngresado == "f")
				{
					acumuladorEdadMujeresCasadas = acumuladorEdadMujeresCasadas + edadPersona; 
					contadorMujeresCasadas = contadorMujeresCasadas + 1; 
				}
				break; 
			case "soltero": 
				// PUNTO B 
				if(edadPersona > 17) 
				{ 
					contadorMayoresEdadSolteros = contadorMayoresEdadSolteros + 1; 
				} 

				// PUNTO C
				if(sexoIngresado == "f")
				{
					contadorMujeresSolterasViudas = contadorMujeresSolterasViudas + 1; 
				}
				break; 
			case "viudo": 
				// PUNTO C 
				if(sexoIngresado == "f")
				{
					contadorMujeresSolterasViudas = contadorMujeresSolterasViudas + 1;
				}
				break; 
		} // Fin Switch 

		// PUNTO D
		if(edadPersona > 59 && temperaturaCorporal > 37)
		{
			contadorTerceraEdadTemperatura = contadorTerceraEdadTemperatura + 1;
		}

		// PUNTO A 
		if(banderaPersonaConMasTemperatura == true || temperaturaCorporal > temperaturaCorporal)
		{
			personaConMasTemperatura = nombrePersona; 
			edadPersonaConMasTemperatura = edadPersona; 
			nacionalidadPersonaConMasTemperatura = nacionalidadPersonaConMasTemperatura;
			temperaturaPersonaConMasTemperatura = temperaturaCorporal; 
			banderaPersonaConMasTemperatura = false; 
		}

		respuesta = prompt("Desea seguir ingresando Datos? si/no"); 
	} // Fin WHile 

	promedioMujeresCasadas =  acumuladorEdadMujeresCasadas/contadorMujeresCasadas; 
	if(contadorMujeresCasadas == 0)
	{
		promedioMujeresCasadas = "No hubo hombres solteros ingresados"; 
	}

	document.write("La nacionalidad de la persona con mas temperatura corporal es: " + nacionalidadPersonaConMasTemperatura + ", tiene de edad: " + edadPersonaConMasTemperatura + ", tiene un total de: " + temperaturaPersonaConMasTemperatura + " grados" + "<br>"); 
	document.write(" y el nombre de la persona con mas temperatura es: " + personaConMasTemperatura + "<br>"); // PUNTO A 
	document.write("La cantidad de mayores de edad que estan solteros es: " + contadorMayoresEdadSolteros + "<br>"); // PUNTO B 
	document.write("La cantidad de mujeres que estan solteras o viudas es: " + contadorMujeresSolterasViudas + "<br>"); // PUNTO C
	document.write("La cantidad de personas de tercera edad que tiene mas de 38 temperatura corporal es: " + contadorTerceraEdadTemperatura + "<br>"); // PUNTO D
	document.write("El promedio de edad de mujeres casadas es: " + promedioMujeresCasadas + "<br>"); // PUNTO E . */ // FIN EJERCICIO 
}

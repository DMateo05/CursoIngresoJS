function mostrar()
{
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
	document.write("El promedio de edad de mujeres casadas es: " + promedioMujeresCasadas + "<br>"); // PUNTO E .  // FIN EJERCICIO */

	// INICIO EJERCICIO 3 RECUPERATORIO BIS 
	/*Vacaciones en Familia" 
	Nos ingresan una cantidad indeterminada de estadías de vacaciones, 
	validando los datos ingresados:
	nombre del pasajero titular, 

	destino( “Brasil”, “Caribe” o “Europa”), 

	temporada(“alta”,”baja”,“media”), 

	cantidad de pasajeros que viajan. 

	Informar:
	a)El destino más elegido.
	b)El nombre del pasajero titular que lleva menos pasajeros.
	c)El promedio de personas, que viajan en temporada alta.
	d)El total de personas que viajaron a Europa. */ 

	/*let respuesta; 
	let nombrePasajeroTitular; 
	let destinoElegido; 
	let temporadaElegida; 
	let cantidadPasajerosViaja; 

	let contadorDestinoBrasil; 
	let contadorDestinoCaribe; 
	let contadorDestinoEuropa; 
	let destinoMasElegido; 

	let banderaPersonaTitularMenosPasajeros; 
	let personaTitularMenosPasajeros; 
	let cantidadPersonasMenosTitular; 
	let acumuladorPersonasAltaTemporada; 
	let contadorPersonasAltaTemporada; 
	let promedioPersonasAltaTemporada; 
	let acumuladorTotalPersonasEuropa; 
	
	respuesta = "si"; 
	acumuladorPersonasAltaTemporada = 0; 
	contadorPersonasAltaTemporada = 0; 
	contadorDestinoBrasil = 0; 
	contadorDestinoCaribe = 0; 
	acumuladorTotalPersonasEuropa = 0; 
	banderaPersonaTitularMenosPasajeros = true; 
	contadorDestinoEuropa = 0; 


	while(respuesta == "si")
	{
		nombrePasajeroTitular = prompt("Ingrese un nombre titular"); 

		destinoElegido = prompt("Elija un destino(Brasil/Caribe/Europa)"); 
		while(destinoElegido != "Brasil" && destinoElegido != "Caribe" && destinoElegido != "Europa") 
		{
			destinoElegido = prompt("Error, Elija un destino(Brasil/Caribe/Europa)"); 
		} 

		temporadaElegida = prompt("Elija una temporada (alta/media/baja)"); 
		while(temporadaElegida != "alta" && temporadaElegida != "baja" && temporadaElegida != "media") 
		{
			temporadaElegida = prompt("Error, Elija una temporada (alta/media/baja)");
		}

		cantidadPasajerosViaja = parseInt(prompt("Ingrese la cantidad de pasajeros que viajan (Minimo 1 Maximo 10)"))
		while(isNaN(cantidadPasajerosViaja) || cantidadPasajerosViaja < 1 || cantidadPasajerosViaja > 10)
		{
			cantidadPasajerosViaja = parseInt(prompt("Error, Ingrese la cantidad de pasajeros que viajan (Minimo 1 Maximo 10)"))
		} 

		switch(destinoElegido)
		{
			case "Brasil": 
				contadorDestinoBrasil = contadorDestinoBrasil + 1;
				break; 
			case "Caribe": 
				contadorDestinoCaribe = contadorDestinoCaribe + 1
				break; 
			case "Europa": 
				acumuladorTotalPersonasEuropa = acumuladorTotalPersonasEuropa + cantidadPasajerosViaja; 
				contadorDestinoEuropa = contadorDestinoEuropa + 1; 
				break; 
		} 

		if(temporadaElegida == "alta")
		{
			contadorPersonasAltaTemporada = contadorPersonasAltaTemporada + 1; 
			acumuladorPersonasAltaTemporada = acumuladorPersonasAltaTemporada + cantidadPasajerosViaja;
		}

		if(banderaPersonaTitularMenosPasajeros == true || cantidadPersonasMenosTitular > cantidadPasajerosViaja)
		{
			personaTitularMenosPasajeros = nombrePasajeroTitular; 
			cantidadPersonasMenosTitular = cantidadPasajerosViaja; 
			banderaPersonaTitularMenosPasajeros = false; 
		} 

		respuesta = prompt("Desea seguir ingresando titulares? si/no"); 
	} // FIN WHILE  

	if(contadorPersonasAltaTemporada == 0)
	{
		promedioPersonasAltaTemporada = "NO HAY PERSONAS VIAJANDO EN ALTA TEMPORADA"; 
	}else{
		promedioPersonasAltaTemporada = acumuladorPersonasAltaTemporada/contadorPersonasAltaTemporada; 
	}
	

	if(contadorDestinoBrasil > contadorDestinoCaribe && contadorDestinoBrasil > contadorDestinoEuropa)
    {
        destinoMasElegido = "Brasil"
    }else if(contadorDestinoCaribe > contadorDestinoBrasil && contadorDestinoCaribe >= contadorDestinoEuropa)
    {
        destinoMasElegido = "Caribe"
    }else
    {
        destinoMasElegido = "Europa"
    } 
	
	document.write("El destino mas elegido es: " + destinoMasElegido + "<br>"); 
	document.write("El titular que lleva menos pasajeros es: " + personaTitularMenosPasajeros + " y lleva: " + cantidadPersonasMenosTitular + " personas" + "<br>"); 
	document.write("El promedio de personas que viajan en temporada alta es: " + promedioPersonasAltaTemporada + "<br>"); 
	document.write("El total de personas que viajaron a europa es: " + acumuladorTotalPersonasEuropa); */ 
	// FIN EJERCICIO
}

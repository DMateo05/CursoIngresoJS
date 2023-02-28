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

	let respuesta; // INICIA EJERCICIO 
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
	document.write("El promedio de edad de mujeres casadas es: " + promedioMujeresCasadas + "<br>"); // PUNTO E .  // FIN EJERCICIO 
}

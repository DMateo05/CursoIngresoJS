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

	// INICIO EJERCICIO 3 PARCIAL BIS 
	/* 
	"Mapa Mundi"
	Realizar el algoritmo que permita ingresar 5 paises:

	el continente (validar entre America , Asia , Europa ,Africa y Oceania) 

	el nombre del país, 

	cantidad de habitantes en millones entre 1 y 7000 (validar)

	el nivel de pobresa entre (pobre, rico, millonario) en europa no hay paises pobre(validar)

	la temperaruta mínima que se registra en su territorio(entre -50 y 50) 

	a)La cantidad de temperaturas pares.
	b)la cantidad de temperaturas impares de europa
	c)El nombre del pais con menos habitantes
	d)la cantidad de paises que superan los 40 grados.
	e)la cantidad de paises de america que tienen menos de 0 grados .
	f)el promedio de habitantes entre los paises ingresados .
	g)el promedio de habitantes entre los paises que superan los 40 grados
	H) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura. 
	i) que continente tiene mas habitantes.*/ 
 
	/*let continenteIngresado; 
	let nivelPobreza; 
    let cantidadHabitantes; 
    let temperaturaMinima; 
    let nombrePais; 

	let acumuladorTemperaturasPares; 
	let acumuladorTemperaturasImparesEuropa; 

	let banderaPaisMenosHabitantes; 
	let paisMenosHabitantes; 
	let cantidadHabitantesMenorPais; 
	let contadorPaisesCuarentaGrados; 
	let contadorPaisesAmericaBajoCero; 
	let acumuladorHabitantesPaises; 
	let contadorTotalPaises; 
	let promedioHabitantesPaises; 
	let acumuladorPaisesCuarentaGrados; 
	let promedioPaisesCuarentaGrados; 
	let banderaMinimaTemperatura; 
	let nombrePaisMinimaTemperatura; 
	let temperaturaPaisMenorTemperatura; 

	let acumuladorHabitantesEuropa; 
	let acumuladorHabitantesAmerica; 
	let acumuladorHabitantesAfrica; 
	let acumuladorHabitantesAsia; 
	let acumuladorHabitantesOceanida; 

	let continenteMasHabitantes; 
	let cantidadGenteContinenteMasHabitantes; 

	acumuladorTemperaturasPares = 0; 
	acumuladorTemperaturasImparesEuropa = 0; 
	banderaPaisMenosHabitantes = true; 
	contadorPaisesCuarentaGrados = 0; 
	contadorPaisesAmericaBajoCero = 0; 
	acumuladorHabitantesPaises = 0; 
	banderaMinimaTemperatura = true; 
	acumuladorPaisesCuarentaGrados = 0; 
	contadorTotalPaises = 0; 

	acumuladorHabitantesAmerica = 0; 
	acumuladorHabitantesAsia = 0; 
	acumuladorHabitantesEuropa = 0; 
	acumuladorHabitantesAfrica = 0; 
	acumuladorHabitantesOceanida = 0; 
	
    for(let i = 0;i < 5;i++)
    { 

        nombrePais = prompt("Ingrese el nombre del Pais"); 

        continenteIngresado = prompt("Ingrese el continente (America/Asia/Europa/Africa/Oceanida)");
        while(continenteIngresado != "America" && continenteIngresado != "Asia" && continenteIngresado != "Europa"  && continenteIngresado != "Africa" && continenteIngresado != "Oceanida")
        {
            continenteIngresado = prompt("Ingrese el continente (America/Asia/Europa/Africa/Oceanida)")
        }  

        cantidadHabitantes = parseInt(prompt("Ingrese la cantidad de habitantes (Entre 1 a 7000 Millones)"));
        while(isNaN(cantidadHabitantes) || cantidadHabitantes < 1|| cantidadHabitantes > 7000)
        {
            cantidadHabitantes = parseInt(prompt("Error, Ingrese la cantidad de habitantes (Entre 1 a 7000 Millones)"));
        } 

        temperaturaMinima = parseFloat(prompt("Ingrese la temperatura de la zona (Entre -50 y 50 grados)"));
        while(isNaN(temperaturaMinima) || temperaturaMinima < -50 || temperaturaMinima > 50)
        {
            temperaturaMinima = parseFloat(prompt("Error, Ingrese la temperatura de la zona (Entre -50 y 50 grados)"));
        } 

		nivelPobreza = prompt("Ingrese el nivel de pobreza (Rico/Millonario/Pobre)");
        while(nivelPobreza != "Rico" && nivelPobreza != "Millonario" && nivelPobreza != "Pobre" || nivelPobreza == "Pobre" && continenteIngresado == "Europa")
        {
            nivelPobreza = prompt("Error, Ingrese el nivel de pobreza (Rico/Millonario/Pobre)"); 

        }  

		acumuladorHabitantesPaises = acumuladorHabitantesPaises + cantidadHabitantes; 
		contadorTotalPaises = contadorTotalPaises + 1; 

		if(temperaturaMinima%2 == 0)
		{
			acumuladorTemperaturasPares = acumuladorTemperaturasPares + 1; 
		} 

		switch(continenteIngresado)
		{
			case "Europa": 
				acumuladorHabitantesEuropa = acumuladorHabitantesEuropa + cantidadHabitantes;
				if(temperaturaMinima%2 == 1)
				{
					acumuladorTemperaturasImparesEuropa = acumuladorTemperaturasImparesEuropa + 1; 
				}
				break; 
			case "America": 
				acumuladorHabitantesAmerica = acumuladorHabitantesAmerica + cantidadHabitantes;
				if(temperaturaMinima < 0)
				{
					contadorPaisesAmericaBajoCero = contadorPaisesAmericaBajoCero + 1; 
				}
				break; 
			case "Africa": 
				acumuladorHabitantesAfrica = acumuladorHabitantesAfrica + cantidadHabitantes; 
				break; 
			case "Asia":
				acumuladorHabitantesAsia = acumuladorHabitantesAsia + cantidadHabitantes;  
				break; 
			case "Oceanida": 
				acumuladorHabitantesOceanida = acumuladorHabitantesOceanida + cantidadHabitantes; 
				break;
		}  

		if(banderaPaisMenosHabitantes == true || cantidadHabitantesMenorPais > cantidadHabitantes)
		{
			paisMenosHabitantes = nombrePais; 
			cantidadHabitantesMenorPais = cantidadHabitantes; 
			banderaPaisMenosHabitantes = false; 
		} 

		if(temperaturaMinima > 39)
		{
			contadorPaisesCuarentaGrados = contadorPaisesCuarentaGrados + 1; 
			acumuladorPaisesCuarentaGrados = acumuladorPaisesCuarentaGrados + cantidadHabitantes; 

		} 

		if(banderaMinimaTemperatura == true || temperaturaPaisMenorTemperatura > temperaturaMinima)
		{
			nombrePaisMinimaTemperatura = nombrePais; 
			temperaturaPaisMenorTemperatura = temperaturaMinima; 
			banderaMinimaTemperatura = false; 
		}
	} // FIN FOR 

	promedioHabitantesPaises = acumuladorHabitantesPaises/contadorTotalPaises; 

	if(contadorPaisesCuarentaGrados == 0)
	{
		promedioPaisesCuarentaGrados = "NO SE REGISTRARON PAISES DE MAS DE 40 GRADOS";
	}else{
		promedioPaisesCuarentaGrados = acumuladorPaisesCuarentaGrados/contadorPaisesCuarentaGrados; 
	}

	if(acumuladorHabitantesEuropa > acumuladorHabitantesAmerica && acumuladorHabitantesEuropa > acumuladorHabitantesAsia && acumuladorHabitantesEuropa > acumuladorHabitantesAfrica && acumuladorHabitantesEuropa > acumuladorHabitantesOceanida)
	{
		continenteMasHabitantes = "Europa"; 
		cantidadGenteContinenteMasHabitantes = acumuladorHabitantesEuropa; 
	}else if(acumuladorHabitantesAmerica > acumuladorHabitantesAsia && acumuladorHabitantesAmerica > acumuladorHabitantesAfrica && acumuladorHabitantesAmerica > acumuladorHabitantesOceanida)
    {
		continenteMasHabitantes = "America" 
		cantidadGenteContinenteMasHabitantes = acumuladorHabitantesAmerica; 
    }else if(acumuladorHabitantesAsia > acumuladorHabitantesAfrica && acumuladorHabitantesAsia > acumuladorHabitantesOceanida)
    { 
		continenteMasHabitantes = "Asia" 
		cantidadGenteContinenteMasHabitantes = acumuladorHabitantesAsia;
    }else if(acumuladorHabitantesAfrica > acumuladorHabitantesAsia && acumuladorHabitantesAfrica >= acumuladorHabitantesOceanida)
    {
        continenteMasHabitantes = "Africa" 
		cantidadGenteContinenteMasHabitantes = acumuladorHabitantesAfrica;
    }else
    {
        continenteMasHabitantes = "Oceanida" 
		cantidadGenteContinenteMasHabitantes = acumuladorHabitantesOceanida;
    } 

	document.write("La cantidad de temperaturas pares es: " + acumuladorTemperaturasPares + "<br>"); 
	document.write("La cantidad de temperaturas impares en Europa es: " + acumuladorTemperaturasImparesEuropa + "<br>"); 
	document.write("El nombre del pais con menos habitantes es: " + paisMenosHabitantes + " y tiene: " + cantidadHabitantesMenorPais + " millones" + "<br>"); 
	document.write("La cantidad de paises que superan los 40 grados es: " + contadorPaisesCuarentaGrados + "<br>");
	document.write("La cantidad de paises de America que tienen menos de 0 grados es: " + contadorPaisesAmericaBajoCero + "<br>"); 
	document.write("El promedio de habitantes entre los paises ingresados es: " + promedioHabitantesPaises + " millones" +"<br>"); 
	document.write("El promedio de habitantes de los paises que superan los 40 grados es:" + promedioPaisesCuarentaGrados + " millones" + "<br>");
	document.write("El pais con menos temperatura es: " + nombrePaisMinimaTemperatura + " y se registro: " + temperaturaPaisMenorTemperatura + " grados" + "<br>");
	document.write("El continente con mayor cantidad de habitantes es: " + continenteMasHabitantes + " y tiene: " + cantidadGenteContinenteMasHabitantes + " millones" + "<br>"); */
}

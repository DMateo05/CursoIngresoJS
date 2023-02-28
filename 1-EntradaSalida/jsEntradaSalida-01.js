/* Devita Mateo
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"*/
function mostrar()
{
	//alert("Esto funciona de maravilla"); 

	/* 
	Devita Mateo 
	Enunciado Preparcial Ejercicio 
	A)Nos ingresan una cantidad indeterminada de estadías de  vacaciones,
	validando los datos ingresados:

	nombre del titular ,
	lugar ( “Puerto Madryn”, “Villa Gessel” o “Córdoba”),
	temporada(“alta”, “baja”),
	cantidad de días que durará el viaje.
	importe del viaje
	altura del pasajero
	peso del pasajero
	sexo pasajero (F o M o NB)
	Viaja con equipaje de mano?
	paga con mercado , tarjeta o efectivo 

	1 
	a- cantidad de personas que viajan en cada temporada
	b- el peso acumulado de todos los que viajan a villa gessel
	c- el lugar con la mayor cantidad de días acumulados
	d- la suma de todos los importes

	2
	e-el nombre del más pesado de los pasajeros y el del más liviano
	f-el lugar donde se pagó el mayor importe
	g-el nombre de la mujer más alta

	3
	h- Cuál fue la forma de pago más utilizada
	i- en qué temporada se viajó más
	j- qué lugar tuvo más pasajeros

	4
	k- qué porcentaje usa equipaje de mano
	l- que porcentaje hay de cada sexo

	5-solo para alumnos que crean sus propios desafíos
	m- inventate uno
	n- se creativo en este
	o- uno facil 
	p- uno dificil 
	*/ 
	
	let respuesta; 
	let nombreDelTitular; 
	let destinoIngresado; 
	let temporadaIngresada; 
	let cantidadDiasViaje; 
	let importeDelViaje; 
	let alturaPasajero; 
	let pesoDelPasajero; 
	let sexoIngresado; 
	let preguntaEquipajeMano; 
	let metodoPago; 

	let acumuladorPersonasTemporadaAlta; 
	let acumuladorPersonasTemporadaBaja; 
	let acumuladorPesoVillaGessel; 
	let acumuladorDiasVillaGessel; 
	let acumuladorDiasCordoba; 
	let acumuladorDiasPuertoMadryn; 
	let lugarMayorCantidadDias; 
	let acumuladorImportes; 
	let banderaDelMasPesadoPasajeros; 
	let banderaDelMasLivianoPasajeros; 
	let personaMasPesadaPasajeros; 
	let pesoPersonaMasPesada; 
	let personaMasLivianaPasajeros; 
	let pesoPersonaMasLiviana; 
	let acumuladorImporteVillaGessel; 
	let acumuladorImporteCordoba; 
	let acumuladorImportePuertoMadryn; 
	let lugarConMasImporte; 
	let banderaMujerMasAlta; 
	let nombreMujerMasAlta; 
	let alturaMujerMasAlta; 
	let cantidadIngresosMercado; 
	let cantidadIngresosTarjeta; 
	let cantidadIngresosEfectivo; 
	let mayorMetodoPago;
	let acumuladorPasajerosCordoba; 
	let acumuladorPasajerosGessel; 
	let acumuladorPasajerosPuerto; 
	let lugarMasPasajeros; 
	let contadorPersonasConEquipaje;
	let contadorPersonasSinEquipaje; 
	let porcentajeGenteConEquipaje; 
	let acumuladorEquipaje; 
	
	cantidadIngresosEfectivo = 0; 
	acumuladorPasajerosCordoba = 0; 
	acumuladorPasajerosGessel = 0; 
	acumuladorPasajerosPuerto = 0; 
	cantidadIngresosMercado = 0; 
	cantidadIngresosTarjeta = 0; 
	acumuladorPersonasTemporadaAlta = 0; 
	acumuladorPersonasTemporadaBaja = 0; 
	acumuladorPesoVillaGessel = 0; 
	acumuladorDiasVillaGessel = 0; 
	acumuladorDiasPuertoMadryn = 0; 
	acumuladorDiasCordoba = 0; 
	acumuladorImporteCordoba = 0; 
	acumuladorImportePuertoMadryn = 0; 
	acumuladorImporteVillaGessel = 0;
	acumuladorImportes = 0; 
	acumuladorEquipaje = 0; 
	contadorPersonasConEquipaje = 0; 
	contadorPersonasSinEquipaje = 0; 
	banderaDelMasPesadoPasajeros = true; 
	banderaDelMasLivianoPasajeros = true; 
	banderaMujerMasAlta = true; 
	respuesta = "si"; 

	while(respuesta == "si")
	{
		// nombreDelTitular = prompt("Ingrese su nombre"); 

		// destinoIngresado = prompt("Elija un destino a viajar (Puerto Madryn/Villa Gessel/Cordoba)"); 

		// temporadaIngresada = prompt("Elija la temporada en la que desea viajar (alta/baja)")

		// cantidadDiasViaje = parseInt(prompt("Ingrese la cantidad de dias que durara el viaje (Hasta 100 Dias)"));
		
		// importeDelViaje = parseFloat(prompt("Ingrese el importe del viaje (No menor a 1, hasta 10000")); 

		// alturaPasajero = parseFloat(prompt("Ingrese su altura")); 

		// pesoDelPasajero = parseFloat(prompt("Ingrese su peso")); 

		// sexoIngresado = prompt("Ingrese su sexo. 'F' para femenino, 'M' para masculino y 'NB' para no binario"); 

		preguntaEquipajeMano = prompt("¿Viaja con equipaje en mano? si/no");
		
		// metodoPago = prompt("Ingrese su metodo de pago (mercado/tarjeta/efectivo)"); 

		
		acumuladorImportes = acumuladorImportes + importeDelViaje; 

		if(banderaDelMasPesadoPasajeros == true || pesoPersonaMasPesada > pesoDelPasajero)
		{
			personaMasPesadaPasajeros = nombreDelTitular; 
			pesoPersonaMasPesada = pesoDelPasajero; 
			banderaDelMasPesadoPasajeros = false; 
		} 

		if(banderaDelMasLivianoPasajeros == true || pesoPersonaMasLiviana < pesoDelPasajero)
		{
			personaMasLivianaPasajeros = nombreDelTitular; 
			pesoPersonaMasLiviana = pesoDelPasajero; 
			banderaDelMasLivianoPasajeros = false;
		} 

		if(preguntaEquipajeMano == "si")
		{
			contadorPersonasConEquipaje = contadorPersonasConEquipaje + 1;
		}else
		{
			contadorPersonasConEquipaje = contadorPersonasSinEquipaje + 1; 
		} 

		acumuladorEquipaje = acumuladorEquipaje + contadorPersonasConEquipaje + contadorPersonasSinEquipaje; 

		porcentajeGenteConEquipaje = contadorPersonasConEquipaje*acumuladorEquipaje/100 - contadorPersonasConEquipaje; 
		
		switch(temporadaIngresada)
		{
			case "alta": 
				acumuladorPersonasTemporadaAlta = acumuladorPersonasTemporadaAlta + 1;
				break; 
			case "baja": 
				acumuladorPersonasTemporadaBaja = acumuladorPersonasTemporadaBaja + 1; 
				break;
		} 

		switch(destinoIngresado)
		{
			case "Villa Gessel": 
				acumuladorPesoVillaGessel = acumuladorPesoVillaGessel + pesoDelPasajero; 
				acumuladorDiasVillaGessel = acumuladorDiasVillaGessel + cantidadDiasViaje; 
				acumuladorImporteVillaGessel = acumuladorDiasVillaGessel + importeDelViaje; 
				acumuladorPasajerosGessel = acumuladorPasajerosGessel + 1;
				break;
			case "Puerto Madryn": 
				acumuladorDiasPuertoMadryn = acumuladorDiasPuertoMadryn + cantidadDiasViaje; 
				acumuladorImportePuertoMadryn = acumuladorDiasPuertoMadryn + importeDelViaje; 
				acumuladorPasajerosPuerto = acumuladorPasajerosPuerto  + 1;
				break;
			case "Cordoba": 
				acumuladorDiasCordoba = acumuladorDiasCordoba + cantidadDiasViaje; 
				acumuladorImporteCordoba = acumuladorImporteCordoba + importeDelViaje; 
				acumuladorPasajerosCordoba = acumuladorPasajerosCordoba + 1; 
				break;
		}	

		if(banderaMujerMasAlta == true || (alturaMujerMasAlta > alturaPasajero && sexoIngresado == "M"))
		{
			nombreMujerMasAlta = nombreDelTitular; 
			alturaMujerMasAlta = alturaPasajero; 
			banderaMujerMasAlta = false; 
		} 

		switch(metodoPago)
		{
			case "mercado": 
				cantidadIngresosMercado = cantidadIngresosMercado + 1;
				break; 
			case "tarjeta": 
				cantidadIngresosTarjeta = cantidadIngresosTarjeta + 1; 
				break; 
			case "efectivo": 
				cantidadIngresosEfectivo = cantidadIngresosEfectivo + 1;
				break;
		}
		
		respuesta = prompt("Desea continuar? si/no"); 
	} // FIN WHILE 

	if(acumuladorDiasVillaGessel > acumuladorDiasPuertoMadryn && acumuladorDiasVillaGessel > acumuladorDiasCordoba)
	{
		lugarMayorCantidadDias = "Villa Gessel";
	}else if(acumuladorDiasPuertoMadryn > acumuladorDiasVillaGessel && acumuladorDiasPuertoMadryn >= acumuladorDiasCordoba)
	{
		lugarMayorCantidadDias = "Puerto Madryn"
	}else
	{
		lugarMayorCantidadDias = "Cordoba";
	} 

	if(acumuladorImportePuertoMadryn > acumuladorImporteCordoba && acumuladorImportePuertoMadryn > acumuladorImporteVillaGessel)
	{
		lugarConMasImporte = "Puerto Madryn";
	}else if(acumuladorImporteCordoba > acumuladorImportePuertoMadryn && acumuladorImporteCordoba >= acumuladorImporteVillaGessel)
	{
		lugarConMasImporte = "Cordoba"
	}else
	{
		lugarConMasImporte = "Villa Gessel";
	} 

	if(cantidadIngresosMercado > cantidadIngresosEfectivo && cantidadIngresosMercado > cantidadIngresosTarjeta)
	{
		mayorMetodoPago = "Mercado";
	}else if(cantidadIngresosTarjeta > cantidadIngresosMercado && cantidadIngresosTarjeta >= cantidadIngresosEfectivo)
	{
		mayorMetodoPago = "Tarjeta"
	}else
	{
		mayorMetodoPago = "Efectivo";
	} 

	if(acumuladorPasajerosCordoba > acumuladorPasajerosGessel && acumuladorPasajerosCordoba > acumuladorPasajerosPuerto)
	{
		lugarMasPasajeros = "Cordoba";
	}else if(acumuladorPasajerosGessel > acumuladorPasajerosCordoba && acumuladorPasajerosGessel >= acumuladorPasajerosPuerto)
	{
		lugarMasPasajeros = "Villa Gessel"
	}else
	{
		lugarMasPasajeros = "Puerto Madryn";
	}

	if(acumuladorPersonasTemporadaAlta > acumuladorPersonasTemporadaBaja)
	{
		temporadaMasViajada = "Alta"
	}else
	{
		temporadaMasViajada = "Baja"
	} 

	console.log(porcentajeGenteConEquipaje)
}


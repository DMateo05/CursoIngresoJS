/* 
Devita Mateo
al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!." */ 
function mostrar()
{
	let mesDelAño; 
	let mensaje;

	mesDelAño = document.getElementById("txtIdMes").value; 

	//if(mesDelAño = "Enero"){
		//mensaje = "Que comiences bien el año"; 
	//}else if(mesDelAño = "Marzo"){
		//mensaje = "A clases"; 
	//}else if(mesDelAño == "Julio"){ 
		//mensaje = "Se vienen las vacaciones";
	//}else if(mesDelAño == "Diciembre"){
		//mensaje = "Felices Fiestas"; 
	//}else{
		//mensaje = "Sos aburrido";
	//}

	// switch = cantidad > Para el TP4
	// if = marcas > TP4
	// if = cantidad > TP4
	// switch = marca > TP4
	switch(mesDelAño) 
	{
		case "Enero": 
			mensaje = "Que comiences bien el año";
			break;
		case "Marzo":  
			mensaje = "A clases"; 
			break;
		case "Julio": 
			mensaje = "Se vienen las vacaciones"; 
			break;
		case "Diciembre": 
			mensaje = "Felices Fiestas"; 
			break; 
		case "Octubre": 
		case "Noviembre": 
			mensaje = "Epoca de Examenes" 
			break; 
		default : 
			mensaje = "Sos Aburrido" 
			break;
	} 
	alert(mensaje);
}
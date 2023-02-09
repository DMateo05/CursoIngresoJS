/* 
Devita Mateo 
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.*/
function mostrar()
{
	let mesDelAño; 
	let mensaje; 

	mesDelAño = document.getElementById("txtIdMes").value; 

	switch(mesDelAño)
	{
		case "Febrero": 
			mensaje = "Tiene 28 Dias";
			break; 
		case "Enero": 
		case "Marzo": 
		case "Mayo": 
		case "Julio": 
		case "Agosto": 
		case "Octubre": 
		case "Diciembre": 
			mensaje = "Tiene 31 Dias"; 
			break; 
		default: 
			mensaje = "Tiene 30 Dias"; 
	} 
	alert(mensaje); 
}
/* 
Devita Mateo
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{ 
	let sexoIngresado; 
	let mensaje; 

	sexoIngresado = prompt('Escriba "F" si es mujer o "M" si es hombre'); 

	while(sexoIngresado != 'F' && sexoIngresado != 'M' && sexoIngresado != "f" && sexoIngresado != "m")
	{ 
		sexoIngresado = prompt('Error, Escriba "F" si es mujer o "M" si es hombre'); 
	} 

	if(sexoIngresado == "F" || sexoIngresado == "f"){
		mensaje = "Usted es mujer"; 
	}else{
		mensaje = "Usted es Hombre" 
	} 

	document.getElementById("txtIdSexo").value = mensaje
}
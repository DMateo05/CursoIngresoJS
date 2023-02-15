/* 
Devita Mateo
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 9."); 
	numeroIngresado = parseInt(numeroIngresado); 

	while(isNaN(numeroIngresado) || numeroIngresado < 0 || numeroIngresado > 10)
	{
		numeroIngresado = prompt("Error, ingrese numero valido"); 
		numeroIngresado = parseInt(numeroIngresado); 
	} 
	document.getElementById("txtIdNumero").value = numeroIngresado; 
}
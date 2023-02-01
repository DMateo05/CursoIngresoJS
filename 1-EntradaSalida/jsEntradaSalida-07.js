/* 
Devita Mateo
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let numeroUno; 
	let numeroDos; 
	let numUnoTexto; 
	let numDosTexto; 
	let mensaje;  

	numUnoTexto = document.getElementById("txtIdNumeroUno").value; 
	numDosTexto = document.getElementById("txtIdNumeroDos").value; 

	numeroUno=parseInt(numUnoTexto); 
	numeroDos=parseInt(numDosTexto); 
	
	mensaje="La suma es " + (numeroUno + numeroDos); 

	alert(mensaje); 
}

function restar()
{
	let numeroUno; 
	let numeroDos; 
	let numUnoTexto; 
	let numDosTexto; 
	let mensaje; 

	numUnoTexto = document.getElementById("txtIdNumeroUno").value; 
	numDosTexto = document.getElementById("txtIdNumeroDos").value; 

	numeroUno=parseInt(numUnoTexto); 
	numeroDos=parseInt(numDosTexto); 

	mensaje="La resta es " + (numeroUno - numeroDos); 

	alert(mensaje); 
}

function multiplicar()
{ 
	let numeroUno; 
	let numeroDos; 
	let numUnoTexto; 
	let numDosTexto; 
	let mensaje; 

	numUnoTexto = document.getElementById("txtIdNumeroUno").value; 
	numDosTexto = document.getElementById("txtIdNumeroDos").value; 

	numeroUno=parseInt(numUnoTexto); 
	numeroDos=parseInt(numDosTexto); 

	mensaje="El resultado es " + (numeroUno * numeroDos); 

	alert(mensaje); 
}

function dividir()
{
	let numeroUno; 
	let numeroDos; 
	let numUnoTexto; 
	let numDosTexto; 
	let mensaje; 

	numUnoTexto = document.getElementById("txtIdNumeroUno").value; 
	numDosTexto = document.getElementById("txtIdNumeroDos").value; 

	numeroUno=parseInt(numUnoTexto); 
	numeroDos=parseInt(numDosTexto); 

	mensaje="El resultado es " + (numeroUno / numeroDos); 

	alert(mensaje); 
}


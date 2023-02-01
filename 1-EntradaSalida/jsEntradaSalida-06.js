/* 
Devita Mateo
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar() 
{	
	let numeroUno; 
	let numeroDos; 
	let numeroUnoTexto; 
	let numeroDosTexto; 
	let mensajeNumero; 

	numeroUnoTexto = document.getElementById("txtIdNumeroUno").value; 
	numeroDosTexto = document.getElementById("txtIdNumeroDos").value; 

	numeroUno = parseInt(numeroUnoTexto); 
	numeroDos = parseInt(numeroDosTexto); 

	mensajeNumero ="La suma es " + (numeroUno + numeroDos); 
	
	alert(mensajeNumero);  
}


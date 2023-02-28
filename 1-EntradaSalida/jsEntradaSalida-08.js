/* 
Devita Mateo
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{	
	// Ejercicio 8
	let numeroUno; 
	let numeroDos; 
	let numUnoTexto; 
	let numDosTexto; 
	let mensaje; 

	numUnoTexto=document.getElementById("txtIdNumeroDividendo").value; 
	numDosTexto=document.getElementById("txtIdNumeroDivisor").value;  

	numeroUno=parseInt(numUnoTexto);  
	numeroDos=parseInt(numDosTexto);  

	mensaje="El resto es " + (numeroUno % numeroDos); 

	alert(mensaje); 
	// Fin Ejercicio 8 

	// Inicio Ejercicio 8BIS
	//let numeroUno; 
	//let numeroDos; 
	//let resultadoSuma; 
	//let resultadoPromedio; 
	//let resto;

	//numeroUno=parseInt(document.getElementById("txtIdNumeroDividendo").value); 
	//numeroDos=parseInt(document.getElementById("txtIdNumeroDivisor").value); 

	//resultadoSuma=numeroUno+numeroDos; 
	//resultadoPromedio=resultadoSuma/2; 
	//resto=numeroUno % numeroDos; 

	//alert("La suma da: " + resultadoSuma); 
	//alert("El promedio es: " + resultadoPromedio); 
	//alert("El resto es: " + resto); 
	// Fin Ejercicio 8BIS 
	
}

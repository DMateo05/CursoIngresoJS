/* 
Devita Mateo
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
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
}

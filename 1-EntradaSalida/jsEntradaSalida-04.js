/* 
Devita Mateo
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID.value' al presionar el botón 'mostrar'
*/
function mostrar()
{   
	let datoIngresado; 
    datoIngresado= prompt("Ingresar Dato");  
	document.getElementById("txtIdNombre").value = datoIngresado; 
}


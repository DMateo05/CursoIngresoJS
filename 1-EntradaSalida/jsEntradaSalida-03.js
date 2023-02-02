/* 
Devita Mateo
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
    // Ejercicio 3 
	let nombreIngresado; 
    let mensaje; 
     
    //nombreIngresado=txtIdNombre.value; Solo funciona en Google
    nombreIngresado = document.getElementById("txtIdNombre").value;
    mensaje = "Vos te llamas: " + nombreIngresado; 
    alert(mensaje);   
    // Fin Ejercicio 3 

    // Ejercicio 3Bis 
     //let precioIngresado; 
     //let aumento; 
     //let porcentaje = 30;  
     //let aumentoDos; 
     //let descripcionProducto; 
     
     //precioIngresado=parseInt(document.getElementById("txtIdNombre").value); 
     //descripcionProducto=prompt("Ingrese Descripcion del Producto"); 
     
     //aumento=(precioIngresado*porcentaje/100); 
     //aumentoDos=(precioIngresado+aumento); 
     //alert(descripcionProducto+aumentoDos); 
    // Fin Ejercicio 3Bis
}
  


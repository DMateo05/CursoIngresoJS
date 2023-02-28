/*    
Devita Mateo
1.Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let precio1; 
    let precio2; 
    let precio3; 
    let txtPrecioUno; 
    let txtPrecioDos; 
    let txtPrecioTres; 
    let resultadoSuma; 

    txtPrecioUno=document.getElementById("txtIdPrecioUno").value;
    txtPrecioDos=document.getElementById("txtIdPrecioDos").value;
    txtPrecioTres=document.getElementById("txtIdPrecioTres").value; 

    precio1=parseInt(txtPrecioUno);
    precio2=parseInt(txtPrecioDos);
    precio3=parseInt(txtPrecioTres); 

    resultadoSuma="La suma da: " + (precio1+precio2+precio3); 
    alert(resultadoSuma); 
}
function Promedio () 
{
	let precio1; 
    let precio2; 
    let precio3; 
    let txtPrecioUno; 
    let txtPrecioDos; 
    let txtPrecioTres; 
    let resultadoSuma; 
    let resultadoPromedio; 

    txtPrecioUno=document.getElementById("txtIdPrecioUno").value;
    txtPrecioDos=document.getElementById("txtIdPrecioDos").value;
    txtPrecioTres=document.getElementById("txtIdPrecioTres").value; 

    precio1=parseInt(txtPrecioUno);
    precio2=parseInt(txtPrecioDos);
    precio3=parseInt(txtPrecioTres); 

    resultadoSuma=(precio1+precio2+precio3); 
    resultadoPromedio="El promedio es: " + resultadoSuma/3; 
    alert(resultadoPromedio); 
}
function PrecioFinal () 
{
	let precio1; 
    let precio2; 
    let precio3; 
    let resultadoPrecio;
    let txtPrecioUno; 
    let txtPrecioDos; 
    let txtPrecioTres; 
    let calculoIva; 
    let resultadoIva; 
    let porcentaje = 21; 
    
    txtPrecioUno=document.getElementById("txtIdPrecioUno").value;
    txtPrecioDos=document.getElementById("txtIdPrecioDos").value;
    txtPrecioTres=document.getElementById("txtIdPrecioTres").value; 

    precio1=parseInt(txtPrecioUno);
    precio2=parseInt(txtPrecioDos);
    precio3=parseInt(txtPrecioTres); 

    resultadoPrecio=precio1+precio2+precio3; 
    calculoIva=resultadoPrecio*porcentaje/100; 
    resultadoIva="El precio Final es: " + (resultadoPrecio+calculoIva); 

    alert(resultadoIva);
}
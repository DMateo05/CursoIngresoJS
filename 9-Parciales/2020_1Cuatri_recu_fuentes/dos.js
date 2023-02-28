/* 
Devita Mateo
Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas(0-300),
Precio por bolsa (más de cero y menor a 10000 ),
al terminar la compra el cliente accede a un descuento segun las bolsas en total
Si compro más de 15 bolsas en total tenes 10% de descuento sobre el total a pagar.
Si compro más de 45 bolsas en total tenes 30% de descuento sobre el total a pagar.
a)El importe total a pagar , bruto sin descuento y...
b)el importe total a pagar con descuento(solo si corresponde)
d)Informar la bolsa mas cara de Cal y la mas barata de Cemento.
e)Cuantas bolsas de arena se compraron en total, y el promedio por compra.
*/
function mostrar() 
{
    let respuesta; 
    let tipoProducto; 
    let cantidadBolsas; 
    let precioPorBolsa; 

    let porcentaje; 
    let acumuladorPrecio; 
    let acumuladorBolsas; 
    let contadorTotalArena;  
    let precioBolsaMasCaroCal;  
    let banderaBolsaMasCaroCal; 
    let mensaje; 
    let importeTotalDescuento;  
    let banderaBolsaMasBarataCemento; 
    let bolsaMasBarataCemento; 
    let acumuladorBolsasArena; 
    let promedioBolsasArena; 

    acumuladorPrecio = 0; 
    acumuladorBolsasArena = 0; 
    acumuladorBolsas = 0; 
    contadorTotalArena = 0;   
    banderaBolsaMasCaroCal = true;  
    banderaBolsaMasBarataCemento = true; 
    respuesta = "si"; 

    while(respuesta == "si")
    {
        tipoProducto = prompt("Ingrese el tipo de producto (arena/cal/cemento)"); 
        while(tipoProducto != "arena" && tipoProducto != "cal" && tipoProducto != "cemento")
        {
            tipoProducto = prompt("Error, Ingrese el tipo de producto(arena/cal/cemento)");
        } 

        cantidadBolsas = parseInt(prompt("Ingrese Cantidad de Bolsas (Entre 1 a 1000)")); 
        while(isNaN(cantidadBolsas) || cantidadBolsas < 1 || cantidadBolsas > 1000)
        {
            cantidadBolsas = parseInt(prompt("Ingrese Cantidad de Bolsas (Entre 1 a 1000)")); 
        } 

        precioPorBolsa = parseFloat(prompt("Ingrese el precio de las Bolsas (Entre 1 a 10000)")); 
        while(isNaN(precioPorBolsa) || precioPorBolsa < 1 || precioPorBolsa > 10000)
        {
            precioPorBolsa = parseFloat(prompt("Ingrese el precio de las Bolsas (Entre 1 a 10000)"));
        } 

        // Punto A
        acumuladorPrecio = acumuladorPrecio + (precioPorBolsa*cantidadBolsas); 
        acumuladorBolsas = acumuladorBolsas + cantidadBolsas; 

        switch(tipoProducto)
        {
            case "arena": 
                // Punto E
                acumuladorBolsasArena = acumuladorBolsasArena + cantidadBolsas; 
                contadorTotalArena = contadorTotalArena + 1;  
                promedioBolsasArena = acumuladorBolsasArena/contadorTotalArena;
                break;  
            case "cal": 
                // Punto D
                if(banderaBolsaMasCaroCal == true || precioBolsaMasCaroCal < precioPorBolsa)
                {
                    precioBolsaMasCaroCal = precioPorBolsa;  
                    banderaBolsaMasCaroCal = false;
                } 
                break;
            case "cemento": 
                // Punto D
                if(banderaBolsaMasBarataCemento == true || banderaBolsaMasBarataCemento > precioPorBolsa)
                {
                    bolsaMasBarataCemento= precioPorBolsa;  
                    banderaBolsaMasBarataCemento = false;
                } 
                break;  
        }

        respuesta = prompt("Desea seguir Ingresando Productos? si/no"); 
    } // FIN WHILE  

    // Definicion Porcentajes
    if(acumuladorBolsas > 44)
    {
        porcentaje = -30; 
    }else if (acumuladorBolsas > 14)
    {
        porcentaje = -10; 
    }else
    {
        porcentaje = 0; 
    } 

    if(porcentaje != 0)
    {
        // Punto B 
        importeTotalDescuento = acumuladorPrecio + (acumuladorPrecio*porcentaje/100); 
        mensaje = "El importe con Descuento es: $" + importeTotalDescuento + "<br>"; 
    }else
    {
        mensaje = "No se aplico Descuento" + "<br>"; 
    } 

    document.write("El importe total a pagar sin descuento es: $" + acumuladorPrecio + "<br>"); 
    document.write(mensaje); 
    document.write("La bolsa mas cara de cal es: $" + precioBolsaMasCaroCal + " y la bolsa mas barata de cemento es: $" + bolsaMasBarataCemento + "<br>"); 
    document.write("Se compraron: " + acumuladorBolsasArena + " bolsas de arena en total y el promedio de compra es: " + promedioBolsasArena);
}

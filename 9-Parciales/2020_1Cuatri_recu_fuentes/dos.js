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
    /*let respuesta; 
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
    document.write("Se compraron: " + acumuladorBolsasArena + " bolsas de arena en total y el promedio de compra es: " + promedioBolsasArena); */ 

    /*
    "El cine"
    De un cine se deben ingresar una cantidad indeterminada 
    de venta de entradas diaria, validando los
    siguientes datos:
    nombre de película, precio, cantidad de entradas, tipo(3D o 4D)
    a)El nombre de la película más cara de tipo 4D.
    b)Informar el precio total de la venta del día.
    c)El nombre de la película con menos cantidad de entradas.
    d)El tipo de pelicula más vista y la cantidad de entradas. 
    e)El nombre de la pelicula más barata en 3D.  
    */ 

    let nombrePelicula; 
    let precioPelicula; 
    let cantidadEntradas; 
    let tipoPelicula; 

    let banderaPeliculaMasCara4D; 
    let nombrePeliculaMasCara4D; 
    let precioPeliculaMasCara4D; 

    let acumuladorPrecioEntradas; 

    let banderaPeliculaMenosEntradas; 
    let nombrePeliculaMenosEntradas; 
    let cantidadEntradasMenorPelicula; 
    
    let contadorPelicula3D; 
    let contadorEntradasPelicula3D;
    let contadorPelicula4D; 
    let contadorEntradasPelicula4D; 

    let banderaPeliculaBarata3D; 
    let nombrePeliculaBarata3D; 
    let precioPeliculaBarata3D; 

    let respuesta; 
    let mayorTipoVisto; 

    banderaPeliculaMasCara4D = true; 
    banderaPeliculaMenosEntradas = true; 
    banderaPeliculaBarata3D = true; 

    acumuladorPrecioEntradas = 0; 
    contadorPelicula3D = 0; 
    contadorPelicula4D = 0; 
    contadorEntradasPelicula3D = 0; 
    contadorEntradasPelicula4D = 0;
    respuesta = "si"; 


    while(respuesta == "si")
    {
        nombrePelicula = prompt("Ingrese Nombre de la Pelicula"); 

        precioPelicula = parseFloat(prompt("Ingrese precio de la pelicula (Entre 1 a 1000")); 
        while(isNaN(precioPelicula) || precioPelicula < 1 || precioPelicula > 100)
        {
            precioPelicula = parseFloat(prompt("Error, Ingrese precio de la pelicula (Entre 1 a 1000")); 
        } 

        cantidadEntradas = parseInt(prompt("Ingrese la cantidad de entradas (Entre 1 a 100)")); 
        while(isNaN(cantidadEntradas) || cantidadEntradas < 1 || cantidadEntradas > 100)
        {
            cantidadEntradas = parseInt(prompt("Ingrese la cantidad de entradas (Entre 1 a 100)")); 
        } 

        tipoPelicula = prompt("Ingrese el tipo de pelicula (3D/4D)"); 
        while(tipoPelicula != "3D" && tipoPelicula != "4D")
        {
            tipoPelicula = prompt("Error, Ingrese el tipo de pelicula (3D/4D)"); 
        } 

        acumuladorPrecioEntradas = acumuladorPrecioEntradas + (precioPelicula * cantidadEntradas);  

        switch(tipoPelicula)
        {
            case "3D": 
                contadorPelicula3D = contadorPelicula3D + 1; 
                contadorEntradasPelicula3D = contadorEntradasPelicula3D + cantidadEntradas;

                if(banderaPeliculaBarata3D == true || precioPeliculaBarata3D > precioPelicula)
                {
                    nombrePeliculaBarata3D = nombrePelicula; 
                    precioPeliculaBarata3D = precioPelicula; 
                    banderaPeliculaBarata3D = false; 
                }
                break; 
            case "4D": 
                contadorPelicula4D = contadorPelicula4D + 1; 
                contadorEntradasPelicula4D = contadorEntradasPelicula4D + cantidadEntradas; 
                
                if(banderaPeliculaMasCara4D == true || precioPeliculaMasCara4D < precioPelicula)
                {
                    nombrePeliculaMasCara4D = nombrePelicula; 
                    precioPeliculaMasCara4D = precioPelicula; 
                    banderaPeliculaMasCara4D = false; 
                }
                break;
        } 

        if(banderaPeliculaMenosEntradas == true || cantidadEntradasMenorPelicula > cantidadEntradas)
        {
            nombrePeliculaMenosEntradas = nombrePelicula; 
            cantidadEntradasMenorPelicula = precioPelicula; 
            banderaPeliculaMenosEntradas = false; 
        }
        
        respuesta = prompt("Quiere seguir ingresando entradas? si/no"); 
    } // FIN WHILE 

    if(contadorPelicula3D > contadorPelicula4D)
    {
        mayorTipoVisto = "El mayor tipo de pelicula visto fue en: 3D, con un total de: " + contadorEntradasPelicula3D + " entradas" + "<br>"; 
    }else{
        mayorTipoVisto = "El mayor tipo de pelicula visto fue en: 4D, con un total de: " + contadorEntradasPelicula4D + " entradas" + "<br>";
    } 

    document.write("La pelicula mas cara en 4D es: " + nombrePeliculaMasCara4D + " y el precio es : $" + precioPeliculaMasCara4D + "<br>"); 
    document.write("La venta total de entradas recaudo: " + acumuladorPrecioEntradas + "<br>"); 
    document.write("El nombre de la pelicula con menos cantidad entradas es: " + nombrePeliculaMenosEntradas + " con: " + cantidadEntradasMenorPelicula + " entradas" + "<br>"); 
    document.write(mayorTipoVisto); 
    document.write("El nombre de la pelicula mas barata en 3D es: " + nombrePeliculaBarata3D + " y cuesta: $" + precioPeliculaBarata3D); 
}

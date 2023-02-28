// Devita Mateo 
/* 
Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
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
    let contadorTotalCal; 
    let contadorTotalCemento; 
    let precioBolsaMasCaro; 
    let tipoBolsaMasCaro; 
    let banderaBolsaMasCaro; 
    let mensaje; 
    let importeTotalDescuento; 
    let mayorCantidadBolsas; 

    acumuladorPrecio = 0; 
    acumuladorBolsas = 0; 
    contadorTotalArena = 0; 
    contadorTotalCal = 0; 
    contadorTotalCemento = 0; 
    banderaBolsaMasCaro = true;  
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
                contadorTotalArena = contadorTotalArena + cantidadBolsas;  
                break;  
            case "cal": 
                contadorTotalCal = contadorTotalCal + cantidadBolsas; 
                break;
            case "cemento": 
                contadorTotalCemento = contadorTotalCemento + cantidadBolsas; 
                break;  
        }

        // Punto D
        if(banderaBolsaMasCaro == true || precioBolsaMasCaro < precioPorBolsa)
        {
            precioBolsaMasCaro = precioPorBolsa; 
            tipoBolsaMasCaro = tipoProducto; 
            banderaBolsaMasCaro = false;
        } 

        respuesta = prompt("Desea seguir Ingresando Productos? si/no"); 
    } // FIN WHILE  

    //Punto C
    if(contadorTotalArena > contadorTotalCal && contadorTotalArena > contadorTotalCemento)
    {
        mayorCantidadBolsas = "Arena";
    }else if(contadorTotalCal > contadorTotalArena || contadorTotalCal >= contadorTotalCemento)
    {
        mayorCantidadBolsas = "Cal"; 
    }else
    {
        mayorCantidadBolsas = "Cemento"; 
    }

    // Definicion Porcentajes
    if(acumuladorBolsas > 29)
    {
        porcentaje = -25; 
    }else if (acumuladorBolsas > 9)
    {
        porcentaje = -15; 
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
    document.write("El tipo con mas cantidad de bolsas es: " + mayorCantidadBolsas + "<br>"); 
    document.write("El tipo mas caro es: " + tipoBolsaMasCaro + " con $" + precioBolsaMasCaro); */ 

    /* 
    "La veterinaria" pedir el ingreso de 10 mascotas
    validar
    tipo ( gato , perro , pájaro y otros)solo esos cuatro tipo 

    raza: si es perro (pastor, toy, callejero) y  
    si gato (siamés, turco, Peterbald , generico) 
    y si es de tipo "otros" o pájaro , pedir solo un texto 

    Edad entre 1 y 20 para gatos y perros , para "otros" entre 1 y 100 , para pájaro 1 de 50 

    nombre (no se permite solo numero) 

    mostrar por cada tipo el nombre del mas viejo , solo si hay de ese tipo 

    mostrar que raza de gatos tiene mas animales y el promedio de edad de esta raza/  
    */ 

    let nombreMascota; 
    let tipoMascota; 
    let razaMascota; 
    let edadIngresada; 

    let banderaGatoMasViejo = true; 
    let nombreGatoMasViejo; 
    let edadGatoMasViejo; 

    let banderaPerroMasViejo = true;  
    let nombrePerroMasViejo; 
    let edadPerroMasViejo; 

    let banderaPajaroMasViejo = true; 
    let nombrePajaroMasViejo; 
    let edadPajaroMasViejo; 

    let banderaOtrosMasViejo = true;
    let nombreOtrosMasViejos; 
    let edadOtrosMasViejos; 

    let contadorSiames = 0; 
    let acumuladorEdadSiames = 0; 
    let contadorTurco = 0;
    let acumuladorEdadTurco = 0; 
    let contadorPeterbald = 0; 
    let acumuladorEdadPeterbald = 0; 
    let contadorGenerico = 0; 
    let acumuladorEdadGenerico = 0; 
    let contadorGato = 0; 
    let contadorPerro = 0; 
    let contadorPajaro = 0; 
    let contadorOtros = 0; 
    let razaGatoMasAnimales; 
    let promedioMayorRazaGato; 

    let mensajeGatoMasViejo; 
    let mensajePerroMasViejo; 
    let mensajePajaroMasViejo; 
    let mensajeOtrosMasViejo; 
    
    for(let i = 0;i < 10;i++)
    {
        tipoMascota = prompt("Ingrese el tipo de su mascota (gato/perro/pájaro/otros)"); 
        while(tipoMascota != "gato" && tipoMascota != "perro" && tipoMascota != "pájaro" && tipoMascota != "otros")
        {
            tipoMascota = prompt("Ingrese el tipo de su mascota (gato/perro/pájaro/otros)");
        } 

        nombreMascota = prompt("Ingrese el nombre de su mascota"); 
        while(!isNaN(nombreMascota))
        {
            nombreMascota = prompt("Error, Ingrese el nombre de su mascota"); 
        } 

        switch(tipoMascota)
        {
            case "gato": 
                contadorGato = contadorGato + 1; 
                razaMascota = prompt("Ingrese la raza de su gato (siamés/turco/peterbald/generico)");
                while(razaMascota != "siamés" && razaMascota != "turco" && razaMascota != "peterbald" && razaMascota != "generico")
                {
                    razaMascota = prompt("Error, Ingrese la raza de su gato (siamés/turco/peterbald/generico)");
                } 

                edadIngresada = parseInt(prompt("Ingrese la edad de su gato (Entre 1 y 20 años)"));
                while(isNaN(edadIngresada) || edadIngresada < 1 || edadIngresada > 20)
                {
                    edadIngresada = parseInt(prompt("Error, Ingrese la edad de su gato (Entre 1 y 20 años)"));
                } 

                switch(razaMascota)
                {
                    case "siamés": 
                        contadorSiames = contadorSiames + 1; 
                        acumuladorEdadSiames = acumuladorEdadSiames + edadIngresada;
                        break; 
                    case "turco": 
                        contadorTurco = contadorTurco + 1; 
                        acumuladorEdadTurco = acumuladorEdadTurco + edadIngresada;
                        break;
                    case "peterbald": 
                        contadorPeterbald = contadorPeterbald + 1; 
                        acumuladorEdadPeterbald = acumuladorEdadPeterbald + edadIngresada;
                        break;
                    case "generico": 
                        contadorGenerico = contadorGenerico + 1; 
                        acumuladorEdadGenerico = acumuladorEdadGenerico + edadIngresada;
                        break;
                } 

                if(banderaGatoMasViejo == true || edadGatoMasViejo < edadIngresada)
                {
                    nombreGatoMasViejo = nombreMascota; 
                    edadGatoMasViejo = edadIngresada; 
                    banderaGatoMasViejo = false; 
                }
                break; 
            case "perro": 
                contadorPerro = contadorPerro + 1; 
                razaMascota = prompt("Ingrese la raza de su perro (pastor/toy/callejero)");
                while(razaMascota != "pastor" && razaMascota != "toy" && razaMascota != "callejero")
                {
                    razaMascota = prompt("Error, Ingrese la raza de su perrro (pastor/toy/callejero)");
                } 

                edadIngresada = parseInt(prompt("Ingrese la edad de su perro (Entre 1 y 20 años)"));
                while(isNaN(edadIngresada) || edadIngresada < 1 || edadIngresada > 20)
                {
                    edadIngresada = parseInt(prompt("Error, Ingrese la edad de su perro (Entre 1 y 20 años)"));
                } 

                if(banderaPerroMasViejo == true || edadPerroMasViejo < edadIngresada)
                {
                    nombrePerroMasViejo = nombreMascota; 
                    edadPerroMasViejo = edadIngresada; 
                    banderaPerroMasViejo = false; 
                }
                break; 
            case "pájaro": 
                contadorPajaro = contadorPajaro + 1;
                razaMascota = prompt("Ingrese la raza de su pájaro"); 
                edadIngresada = parseInt(prompt("Ingrese la edad de su pájaro (Entre 1 y 50 años)"));
                while(isNaN(edadIngresada) || edadIngresada < 1 || edadIngresada > 50)
                {
                    edadIngresada = parseInt(prompt("Error, Ingrese la edad de su pajaro (Entre 1 y 50 años)"));
                } 

                if(banderaPajaroMasViejo == true || edadPajaroMasViejo < edadIngresada)
                {
                    nombrePajaroMasViejo = nombreMascota; 
                    edadPajaroMasViejo = edadIngresada; 
                    banderaPajaroMasViejo = false; 
                }
                break; 
            case "otros": 
                contadorOtros = contadorOtros + 1; 
                razaMascota = prompt("Ingrese la raza de su pájaro"); 

                edadIngresada = parseInt(prompt("Ingrese la edad de su mascota (Entre 1 y 100 años)"));
                while(isNaN(edadIngresada) || edadIngresada < 1 || edadIngresada > 100)
                {
                    edadIngresada = parseInt(prompt("Error, Ingrese la edad de su mascota (Entre 1 y 100 años)"));
                } 

                if(banderaOtrosMasViejo == true || edadOtrosMasViejos < edadIngresada)
                {
                    nombreOtrosMasViejos = nombreMascota; 
                    edadOtrosMasViejos = edadIngresada; 
                    banderaOtrosMasViejo = false; 
                }
                break;
        } // FIN SWITCH 
    } // FIN FOR 

    if(contadorSiames > contadorTurco && contadorSiames > contadorPeterbald && contadorSiames > contadorGenerico)
    {
        razaGatoMasAnimales = "Siames"; 
        promedioMayorRazaGato = acumuladorEdadSiames/contadorSiames; 
    }else if(contadorTurco > contadorPeterbald && contadorTurco > contadorGenerico)
    {
        razaGatoMasAnimales = "Turco"; 
        promedioMayorRazaGato = acumuladorEdadTurco/contadorTurco; 
    }else if(contadorPeterbald > contadorTurco && contadorPeterbald >= contadorGenerico)
    {
        razaGatoMasAnimales = "Peterbald"; 
        promedioMayorRazaGato = acumuladorEdadPeterbald/contadorPeterbald;
    }else
    {
        razaGatoMasAnimales = "Generico" 
        promedioMayorRazaGato = acumuladorEdadGenerico/contadorGenerico; 
    } 

    if(contadorGato == 0){
        mensajeGatoMasViejo = "No se ingresaron gatos" + "<br>"
    }else{
        mensajeGatoMasViejo = "El gato mas viejo es: " + nombreGatoMasViejo + " y su edad es: " + edadGatoMasViejo + "<br>"; 
    } 

    if(contadorPerro == 0){
        mensajePerroMasViejo = "No se ingresaron perros" + "<br>" 
    }else
    {
        mensajePerroMasViejo = "El perro mas viejo es: " + nombrePerroMasViejo + " y su edad es: " + edadPerroMasViejo + "<br>"; 
    } 

    if(contadorPajaro == 0){
        mensajePajaroMasViejo = "No se ingresaron pajaros" + "<br>" 
    }else{
        mensajePajaroMasViejo = "El pajaro mas viejo es: " + nombrePajaroMasViejo + " y su edad es: " + edadPajaroMasViejo + "<br>"; 
    } 

    if(contadorOtros == 0){
        mensajeOtrosMasViejo = "No se ingresaron otros tipos de mascota" + "<br>"
    }else
    {
        mensajeOtrosMasViejo = "El otro tipo de mascota mas viejo es: " + nombreOtrosMasViejos + " y su edad es: " + edadOtrosMasViejos + "<br>"; 
    } 

    document.write(mensajeGatoMasViejo); 
    document.write(mensajePerroMasViejo); 
    document.write(mensajePajaroMasViejo); 
    document.write(mensajeOtrosMasViejo); 
    document.write("La raza de gatos que tiene mas animales es: " + razaGatoMasAnimales + " y su promedio de edad es: " + promedioMayorRazaGato); 
    // FIN EJERCICIO
}

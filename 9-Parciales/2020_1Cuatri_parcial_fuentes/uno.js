/*
Devita Mateo
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/
function mostrar()
{
    /*let tipoProducto; 
    let precioProducto; 
    let cantidadProducto; 
    let marcaProducto; 
    let fabricanteProducto; 
    let cantidadJabon; 
    let cantidadBarbijo; 
    let cantidadAlcohol; 
    let acumuladorBarbijo; 
    let acumuladorAlcohol; 
    let acumuladorJabon; 
    let mayorTipo; 
    let promedioTotal; 
    let alcoholMasBarato; 
    let cantidadAlcoholMasBarato; 
    let fabricanteAlcoholMasBarato; 
    let banderaAlcohol; 

    acumuladorAlcohol = 0; 
    cantidadAlcohol = 0; 
    cantidadBarbijo = 0; 
    cantidadJabon = 0; 
    acumuladorBarbijo = 0; 
    acumuladorJabon = 0; 
    banderaAlcohol = true; 
    

    for(let i = 0;i < 5;i++)
    {
        tipoProducto = prompt("Ingrese el tipo de producto (barbijo/alcohol/jabon)");
        while(tipoProducto != "barbijo" && tipoProducto != "alcohol" && tipoProducto != "jabon")
        {
            tipoProducto = prompt("Error, Ingrese el tipo de producto (barbijo/alcohol/jabon)");
        } 

        precioProducto = parseFloat(prompt("Ingrese el precio (Entre 100 y 300)"));
        while(isNaN(precioProducto) || precioProducto < 100 || precioProducto > 300)
        {
            precioProducto = parseFloat(prompt("Error, Ingrese el precio (Entre 100 y 300)"));
        } 

        cantidadProducto = parseInt(prompt("Ingrese la cantidad (Entre 1 a 1000)"));
        while(isNaN(cantidadProducto) || cantidadProducto < 1 || cantidadProducto > 1000)
        {
            cantidadProducto = parseInt(prompt("Error, Ingrese la cantidad (Entre 1 a 1000)"));
        } 

        marcaProducto = prompt("Ingrese la marca"); 
        fabricanteProducto = prompt("Ingrese el fabricante"); 

        switch(tipoProducto)
        {
            case "barbijo": 
                acumuladorBarbijo = acumuladorBarbijo + cantidadProducto;
                cantidadBarbijo = cantidadBarbijo + 1;
                break; 
            case "alcohol": 
                acumuladorAlcohol = acumuladorAlcohol + cantidadProducto; 
                cantidadAlcohol = cantidadAlcohol + 1; 

                // Punto A 
                if(banderaAlcohol == true || alcoholMasBarato > precioProducto)
                {
                    alcoholMasBarato = precioProducto; 
                    cantidadAlcoholMasBarato = cantidadProducto; 
                    fabricanteAlcoholMasBarato = fabricanteProducto;  
                    banderaAlcohol = false; 
                }
                break; 
            case "jabon": 
                // Punto C 
                acumuladorJabon = acumuladorJabon + cantidadProducto; 
                cantidadJabon = cantidadJabon + 1; 
                break;
        }   
    } // FIN FOR 

    // PUNTO B 
    if(acumuladorAlcohol > acumuladorJabon && acumuladorAlcohol > acumuladorBarbijo)
    {
        mayorTipo = "Alcohol"; 
        promedioTotal = acumuladorAlcohol/cantidadAlcohol; 
    }else if(acumuladorJabon > acumuladorBarbijo && acumuladorJabon >= acumuladorAlcohol)
    {
        mayorTipo = "Jabon"; 
        promedioTotal = acumuladorJabon/cantidadJabon;
    }else
    {
        mayorTipo = "Barbijo"; 
        promedioTotal = acumuladorBarbijo/cantidadBarbijo;
    } 

    document.write("El más barato de los alcoholes es: " + alcoholMasBarato + " y la cantidad es: " + cantidadAlcoholMasBarato + " y el fabricante es: " + fabricanteAlcoholMasBarato + "<br>"); 
    document.write("El tipo con mayor unidades es: " + mayorTipo + " y el promedio por compra es: " + promedioTotal + "<br>"); 
    document.write("La cantidad de unidades de jabones que hay es: " + acumuladorJabon); */ // FIN EJERCICIO

    /* 
    Devita Mateo 
    "Super chino" Se pide el ingreso de mercadería de un supermercado , 
    hasta que el usuario quiera,se pide :
    tipo(limpieza , comestible , otros)solo estos tres tipos
    nombre del producto
    importe del producto (no mayor a 1000 pesos)
    procedencia(importado, nacional, elaborado)
    Peso (no mayor a 30 kilos)

    informar SOLO SI HAY
    a) el NOMBRE del mas pesado de los comestibles
    b) el NOMBRE del mas caro de todos los productos
    c) el NOMBRE del mas barato de los elaborados
    d)el tipo de mercadería que mas aparece
    e)el porcentaje de productos elaborados por sobre el total
    f) el promedio de pesos por cada tipo ingresado/ 
    */ 

    let tipoProducto; 
    let nombreProducto; 
    let respuesta; 
    let precioProducto; 
    let procedenciaProducto;
    let pesoProducto; 

    let banderaMasPesadoComestibles; 
    let banderaMasBaratoTodosElaborados;
    let nombreMasBaratoTodosElaborados; 
    let precioMasBaratoTodosElaborados; 
    let banderaMasCaroTodosProductos; 
    let elMasCaroTodosProductos; 
    let precioElMasCaroTodosLosProductos; 
    let elMasPesadoComestibles; 
    let pesoElMasPesadoComestibles; 
    let contadorMercaderiaOtros; 
    let contadorMercaderiaComestible; 
    let contadorMercaderiaLimpieza; 
    let tipoMasAparece; 
    let cantidadProducciones; 
    let acumuladorPesosOtros; 
    let acumuladorPesosComestibles; 
    let acumuladorPesosLimpieza; 
    let promedioPesosOtros; 
    let promedioPesosComestibles; 
    let promedioPesosLimpieza; 
    let contadorMaximo;

    contadorMercaderiaOtros = 0
    acumuladorPesosComestibles = 0; 
    acumuladorPesosLimpieza = 0; 
    acumuladorPesosOtros = 0;
    contadorMercaderiaComestible = 0
    contadorMercaderiaLimpieza = 0
    banderaMasPesadoComestibles = true; 
    banderaMasCaroTodosProductos = true; 
    banderaMasBaratoTodosElaborados = true; 
    respuesta = "si";

    while(respuesta == "si")
    {
        tipoProducto = prompt("Ingrese el tipo de producto (limpieza/comestible/otros)");
        while(tipoProducto != "limpieza" && tipoProducto != "comestible" && tipoProducto != "otros")
        {
            tipoProducto = prompt("Error, Ingrese el tipo de producto (limpieza/comestible/otros)");
        } 

        nombreProducto = prompt("Ingrese el nombre del producto"); 

        precioProducto = parseFloat(prompt("Ingrese el precio (Entre 1 y 1000)"));
        while(isNaN(precioProducto) || precioProducto < 1 || precioProducto > 1000)
        {
            precioProducto = parseFloat(prompt("Error, Ingrese el precio (Entre 1 y 1000)"));
        } 

        procedenciaProducto = prompt("Ingrese la procedencia del producto (importado/nacional/elaborado)");
        while(procedenciaProducto != "nacional" && procedenciaProducto != "importado" && procedenciaProducto != "elaborado")
        {
            procedenciaProducto = prompt("Error,Ingrese la procedencia del producto (importado/nacional/elaborado)");
        } 

        pesoProducto = parseFloat(prompt("Ingrese el peso del producto (Entre 0 a 30)"));
        while(isNaN(pesoProducto) || pesoProducto < 0 || pesoProducto > 30)
        {
            pesoProducto = parseFloat(prompt("Error, Ingrese el peso del producto (Entre 0 a 30)"))
        } 

        cantidadProducciones = cantidadProducciones + 1;

        if(banderaMasCaroTodosProductos == true || precioElMasCaroTodosLosProductos < precioProducto) // para maximo
        {
            elMasCaroTodosProductos = nombreProducto; 
            precioElMasCaroTodosLosProductos = precioProducto; 
            banderaMasCaroTodosProductos = false;
        } 

        switch(tipoProducto)
        {
            case "otros": 
                acumuladorPesosOtros = acumuladorPesosOtros + pesoProducto;
                contadorMercaderiaOtros = contadorMercaderiaOtros + 1;
                break;
            case "comestible": 
                acumuladorPesosComestibles = acumuladorPesosComestibles + pesoProducto;
                contadorMercaderiaComestible = contadorMercaderiaComestible + 1; 
                if(banderaMasPesadoComestibles == true || pesoProducto > pesoProducto)
                {
                    elMasPesadoComestibles = nombreProducto; 
                    pesoElMasPesadoComestibles = pesoProducto; 
                    banderaMasPesadoComestibles = false;
                }  
                break; 
            case "limpieza": 
                acumuladorPesosLimpieza = acumuladorPesosLimpieza + pesoProducto;
                contadorMercaderiaLimpieza = contadorMercaderiaLimpieza + 1;
                break;
        } 

        if(banderaMasBaratoTodosElaborados == true || (precioMasBaratoTodosElaborados > precioProducto && procedenciaProducto == "elaborado")) // para minimo
        {
            nombreMasBaratoTodosElaborados = nombreProducto; 
            precioMasBaratoTodosElaborados = precioProducto; 
            banderaMasBaratoTodosElaborados = false;
        } 
        
        respuesta = prompt("TEST, si/no"); 
    } // FIN WHILE 

    promedioPesosComestibles = acumuladorPesosComestibles/contadorMercaderiaComestible; 
    promedioPesosLimpieza = acumuladorPesosLimpieza/contadorMercaderiaLimpieza; 
    promedioPesosOtros = acumuladorPesosOtros/contadorMercaderiaOtros; 

    if(elMasPesadoComestibles == undefined && pesoElMasPesadoComestibles == undefined)
    {
        elMasPesadoComestibles = "NO SE INGRESARON COMESTIBLES "; 
        pesoElMasPesadoComestibles = "NO HAY PESO QUE CALCULAR "; 
    }

    if(contadorMercaderiaComestible == 0)
    {
        promedioPesosComestibles = "NO SE INGRESARON COMESTIBLES"
    } 

    if(contadorMercaderiaLimpieza == 0)
    {
        promedioPesosLimpieza = "NO SE INGRESARON LIMPIEZA"
    }

    if(contadorMercaderiaOtros == 0)
    {
        promedioPesosOtros = "NO SE INGRESARON OTROS"
    }

    if(contadorMercaderiaOtros > contadorMercaderiaLimpieza && contadorMercaderiaOtros > contadorMercaderiaComestible)
    {
        tipoMasAparece = "Otros"; 
        contadorMaximo = contadorMercaderiaOtros;
    }else if(contadorMercaderiaLimpieza >= contadorMercaderiaOtros && contadorMercaderiaLimpieza >= contadorMercaderiaComestible)
    {
        tipoMasAparece = "Limpieza" 
        contadorMaximo = contadorMercaderiaLimpieza
    }else
    {
        tipoMasAparece = "Comestibles" 
        contadorMaximo = contadorMercaderiaComestible; 
    } 

    document.write("El nombre del mas pesado de todos los comestibles es: " + elMasPesadoComestibles + " y su peso es de: " + pesoElMasPesadoComestibles + "kg" + "<br>"); 
    document.write("El nombre del mas caro de todos los productos es: " + elMasCaroTodosProductos + " y su precio es de: $" + precioElMasCaroTodosLosProductos + "<br>"); 
    document.write("El nombre del mas barato de todos los elaborados es: " + nombreMasBaratoTodosElaborados + " y su precio es de: $" + precioMasBaratoTodosElaborados + "<br>"); 
    document.write("El tipo mercaderia que mas aparece es: " + tipoMasAparece + " con: " + contadorMaximo + " apariciones" + "<br>"); 
    document.write("El promedio de peso para los 'Otros' es: " + promedioPesosOtros + "<br>"); 
    document.write("El promedio de peso para los 'Comestibles' es: " + promedioPesosComestibles + "<br>"); 
    document.write("El promedio de peso para los  productos de 'Limpieza' es: " + promedioPesosLimpieza); // FIN EJERCICIO PARCIAL 1 2020 BIS 
}

/*  
Devita Mateo
Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total
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
    let jabonesMasCaro; 
    let cantidadJabonesMasCaro; 
    let fabricanteJabonesMasCaro; 
    let banderaJabones; 

    acumuladorAlcohol = 0; 
    cantidadAlcohol = 0; 
    cantidadBarbijo = 0; 
    cantidadJabon = 0; 
    acumuladorBarbijo = 0; 
    acumuladorJabon = 0; 
    banderaJabones = true; 
    

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
                // Punto C
                acumuladorBarbijo = acumuladorBarbijo + cantidadProducto; 
                cantidadBarbijo = cantidadBarbijo + 1;
                break; 
            case "alcohol": 
                acumuladorAlcohol = acumuladorAlcohol + cantidadProducto; 
                cantidadAlcohol = cantidadAlcohol + 1; 
                break; 
            case "jabon": 
                acumuladorJabon = acumuladorJabon + cantidadProducto; 
                cantidadJabon = cantidadJabon + 1; 

                // Punto A 
                if(banderaJabones == true || jabonesMasCaro < precioProducto)
                {
                    jabonesMasCaro = precioProducto; 
                    cantidadJabonesMasCaro = cantidadProducto; 
                    fabricanteJabonesMasCaro = fabricanteProducto;  
                    banderaJabones = false; 
                }
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

    document.write("El más caro de los jabones es: " + jabonesMasCaro + " y la cantidad es: " + cantidadJabonesMasCaro + " y el fabricante es: " + fabricanteJabonesMasCaro + "<br>"); 
    document.write("El tipo con mayor unidades es: " + mayorTipo + " y el promedio por compra es: " + promedioTotal + "<br>"); 
    document.write("La cantidad de unidades de barbijos que se compraron es: " + acumuladorBarbijo); */ 

    // INICIO EJERCICIO 1 RECUPERATORIO BIS 
    /* 
    De 7 personas que ingresan al hospital se deben tomar y validar los siguientes datos:
    nombre, altura, peso y sexo.
    a)Informar la cantidad de personas de sexo femenino. 
    b)La altura promedio en total de pacientes.
    c)El nombre del hombre con menos peso(si lo hay).
    d)De la persona no binaria, el más flaco. 
    Pedir datos por prompt y mostrar por document.write o console.log 
    */  

    let sexoIngresado; 
    let alturaIngresada; 
    let pesoIngresado; 
    let nombreIngresado

    let contadorPersonasSexoFemenino; 
    let acumuladorAlturaPacientes; 
    let contadorPacientes; 
    let promedioTotalAltura; 
    let banderaHombreMenosPeso; 
    let hombreConMenosPeso; 
    let pesoHombreConMenosPeso; 
    let banderaNoBinariaFlaco; 
    let noBinariaMasFlaco; 
    let pesoNoBinariaMasFlaco; 
    let contadorHombres; 
    let contadorNoBin; 

    contadorPersonasSexoFemenino = 0; 
    acumuladorAlturaPacientes = 0; 
    contadorPacientes = 0; 
    contadorNoBin = 0;
    contadorHombres = 0; 
    banderaHombreMenosPeso = true; 
    banderaNoBinariaFlaco = true; 


    for(let i = 0;i < 7;i++)
    { 

        nombreIngresado = prompt("Ingrese su nombre"); 

        sexoIngresado = prompt("Ingrese su sexo (f/m/nb)");
        while(sexoIngresado != "f" && sexoIngresado != "m "&& sexoIngresado != "nb")
        {
            sexoIngresado = prompt("Ingrese su sexo (f/m/nb)")
        }  

        alturaIngresada = parseFloat(prompt("Ingrese su altura (En centimentros)"));
        while(isNaN(alturaIngresada) || alturaIngresada < 25|| alturaIngresada > 250)
        {
            alturaIngresada = parseFloat(prompt("Error, Ingrese su altura (En centimentros)"));
        } 

        pesoIngresado = parseFloat(prompt("Ingrese su peso (Hasta 200kg)"));
        while(isNaN(pesoIngresado) || pesoIngresado < 5|| pesoIngresado > 200)
        {
            pesoIngresado = parseFloat(prompt("Error, Ingrese su peso (Hasta 200kg)"));
        } 

        acumuladorAlturaPacientes = acumuladorAlturaPacientes + alturaIngresada; 
        contadorPacientes = contadorPacientes + 1; 

        switch(sexoIngresado)
        {
            case "f": 
                contadorPersonasSexoFemenino = contadorPersonasSexoFemenino + 1; 
                break; 
            case "m": 
                contadorHombres = contadorHombres + 1; 
                if(banderaHombreMenosPeso == true || pesoHombreConMenosPeso < pesoIngresado)
                {
                    hombreConMenosPeso = nombreIngresado; 
                    pesoHombreConMenosPeso = pesoIngresado; 
                    banderaHombreMenosPeso = false;
                }
                break; 
            case "nb": 
                contadorNoBin = contadorNoBin + 1; 
                if(banderaNoBinariaFlaco == true || pesoNoBinariaMasFlaco < pesoIngresado)
                {
                    noBinariaMasFlaco = nombreIngresado
                    pesoNoBinariaMasFlaco = pesoIngresado; 
                    banderaNoBinariaFlaco = false; 
                }
                break;
        }

    } // FIN FOR 

    promedioTotalAltura = acumuladorAlturaPacientes/contadorPacientes; 

    document.write("La cantidad de personas de sexo femenino es: " + contadorPersonasSexoFemenino + "<br"); 
    document.write("La altura promedio entre los pacientes es: " + promedioTotalAltura + "<br"); 
    if(contadorHombres == 0)
    {
        document.write("No se ingresaron hombres" + "<br"); 
    }else
    {
        document.write("El nombre del hombre con menos peso es: " + hombreConMenosPeso + " y su peso es: " + pesoHombreConMenosPeso + "<br"); 
    }
    if(contadorNoBin == 0)
    {
        document.write("No se ingresaron de ese sexo");
    }else
    {
        document.write("La persona no binaria con el menor peso es: " + noBinariaMasFlaco + " y su peso es: " + pesoNoBinariaMasFlaco + "<br");
    } // FIN EJERCICIO 
}

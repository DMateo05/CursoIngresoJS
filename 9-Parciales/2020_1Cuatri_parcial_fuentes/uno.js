// Devita mateo 
/*
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
    let tipoProducto; 
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
    acumuladorBarbijo = 0; 
    acumuladorJabon = 0; 
    banderaAlcohol = true; 
    

    for(let i = 0;i < 5;i++)
    {
        tipoProducto = prompt("Ingrese el tipo de producto (barbijo/alcohol/jabon)");
        while(!isNaN(tipoProducto) || tipoProducto != "barbijo" && tipoProducto != "alcohol" && tipoProducto != "jabon")
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
                acumuladorBarbijo += cantidadProducto;
                cantidadBarbijo++;

                if(banderaAlcohol == true || alcoholMasBarato > precioProducto)
                {
                    alcoholMasBarato = precioProducto; 
                    cantidadAlcoholMasBarato = cantidadProducto; 
                    fabricanteAlcoholMasBarato = fabricanteProducto;  
                    banderaAlcohol = false; 
                }
                break; 
            case "alcohol": 
                acumuladorAlcohol += cantidadProducto; 
                cantidadAlcohol++;
                break; 
            case "jabon": 
                acumuladorJabon += cantidadProducto; 
                cantidadJabon++;
                break;
        }   
    } 

    if(acumuladorAlcohol > acumuladorJabon && acumuladorAlcohol > acumuladorBarbijo)
    {
        mayorTipo = "alcohol" 
        promedioTotal = acumuladorAlcohol/cantidadAlcohol;
    }else if(acumuladorBarbijo > acumuladorJabon && acumuladorBarbijo >= acumuladorAlcohol)
    {
        mayorTipo = "barbijo" 
        promedioTotal = acumuladorBarbijo/cantidadBarbijo;
    }else{
        mayorTipo = "jabon" 
        promedioTotal = acumuladorJabon/cantidadJabon;
    } 

    document.write("El más barato de los alcoholes es: " + alcoholMasBarato + " y la cantidad es: " + cantidadAlcoholMasBarato + " y el fabricante es: " + fabricanteAlcoholMasBarato + "<br>"); 
    document.write("El tipo con mayor unidades es: " + mayorTipo + " y el promedio por compra es: " + promedioTotal); 
    document.write("La cantidad de unidades de jabones que hay es: " + cantidadJabon); 
}

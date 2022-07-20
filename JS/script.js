let nombreProductoA = "Implantes"
let precioProductoA = 50000;
let stockProductoA = 32;

let nombreProductoB = "Endodoncia"
let precioProductoB = 9500;

let nombreProductoC = "Blanqueamiento"
let precioProductoC = 15000;

let nombreProductoD = "Placa de Relajacion"
let precioProductoD = 11500
let stockProductoD = 50


let cantidadCompras = prompt("Cuantos productos o servicios distintos que quiere comprar: ").toLowerCase()
let precioTotal = 0;

function calcularPrecio(cantidad, precio){
    precioTotal += cantidad * precio
}

function sumaIva(precio){
    return precio * 1.21
}

for(let i = 0; i < cantidadCompras; i++){

    let compra1 = prompt ("ingrese el nombre del producto o servicio que quiere comprar: \n- Implantes\n- Endodoncia\n- Blanqueamiento\n- Placa de Relajacion").toLowerCase().trim()

    let cantidad1 = prompt("Ingrese la cantidad del producto/servicio elegido que quiere comprar:").toLowerCase().trim()

    if(compra1 == "Implantes".toLowerCase()){
        if(stockProductoA >= cantidad1){
            precioTotal += cantidad1 * precioProductoA
            alert("El precio Neto es de: $" + (cantidad1 * precioProductoA))
        }
        else{
            alert("No disponemos esa cantidad en stock. Nuestro Stock actual es de: " + stockProductoA)
        }
    }
    else if(compra1 == "Endodoncia".toLowerCase()){
            precioTotal += cantidad1 * precioProductoB
            alert("El precio Neto es de: $" + (cantidad1 * precioProductoB))
        }
    else if(compra1 == "Blanqueamiento".toLowerCase()){
            precioTotal += cantidad1 * precioProductoC
            alert("El precio Neto es de: $" + (cantidad1 * precioProductoC))
    } 
    else if(compra1 == "Placa de Relajacion".toLowerCase()){
        if(stockProductoD >= cantidad1){
            precioTotal += cantidad1 * precioProductoD
            alert("El precio Neto es de: $" + (cantidad1 * precioProductoD))
        }
        else{
            alert("No disponemos esa cantidad en stock. Nuestro Stock actual es de: " + stockProductoD)
        }
    }        
        
    else{
        alert("No tenemos ese producto/servicio")
    }
}

switch(true){
    case precioTotal < 25000:
        precioTotal = precioTotal * 1
        alert("Para obtener descuento su compra debe ser superior a $25.000")
        break;
    case precioTotal > 25000:
        precioTotal = precioTotal * 0.95
        alert("Recibiste un descuento del 5% de descuento por tu compra")
        break;
    case precioTotal > 100000:
        precioTotal = precioTotal * 0.90
        alert("Recibiste un descuento del 10% de descuento por tu compra")
        break;
    case precioTotal < 150000:
        precioTotal = precioTotal * 0.85
        alert("Recibiste un descuento del 15% de descuento por tu compra")
        break;
    case precioTotal > 150000:
        alert("Recibiste un descuento del 20% de descuento por tu compra")
        precioTotal = precioTotal * 0.80
        break;
    default:
        console.log(precioTotal)
        alert("No ingresaste un precio en numeros")
        break;
}

/* switch(true){    
    case cantidadTotal < 5 || cantidadTotal > 2:
        precioTotal = precioTotal * 0.90
        alert("Recibiste un descuento del 10% por tu compra")
        break;
    case cantidadTotal < 7 || cantidadTotal > 4:
        precioTotal = precioTotal * 0.85
        alert("Recibiste un descuento del 15% por tu compra")
        break;
    case cantidadTotal > 6:
        precioTotal = precioTotal * 0.75
        alert("Recibiste un descuento del 25% por tu compra")
        break;
    default:
        console.log(precioTotal)
        break;
} */
    


/* if(compra1 = "Implantes".toLowerCase()){
    if(cantidad1 > 2 || cantidad1 < 5 ){
        precioTotal = precioTotal * 0.90
        alert("Recibiste un descuento del 10% por tu compra de Implantes")
        
    }
    else if(cantidad1 > 4){
        precioTotal = precioTotal * 0.85
        alert("Recibiste un descuento del 15% por tu compra")
        
    }
    else if(cantidad1 > 6 && cantidad1 < stockProductoA){
        precioTotal = precioTotal * 0.75
        alert("Recibiste un descuento del 25% por tu compra")
        
    }
    else{
        alert("Para acceder a descuento, deber comprar mas de dos Implantes")
     }
} */

let precioToTalConIva = sumaIva(precioTotal)

if(cantidadCompras >= 1){
    alert("Este es el precio total con IVA de su compra: " + precioToTalConIva)
}
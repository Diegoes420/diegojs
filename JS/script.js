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
let compra1 = prompt ("ingrese el nombre del producto o servicio que quiere comprar: \n- Implantes\n- Endodoncia\n- Blanqueamiento\n- Placa de Relajacion").toLowerCase().trim()

var cantidad1 = prompt("Ingrese la cantidad del producto/servicio elegido que quiere comprar:").toLowerCase().trim()

for(let i = 0; i < cantidadCompras; i++){


    if(compra1 == "Implantes".toLowerCase()){
        if(stockProductoA >= cantidad1){
            precioTotal += cantidad1 * precioProductoA
            alert("El precio Neto es de: $" + (cantidad1 * precioProductoA))
        }
        else{
            alert("No disponemos esa cantidad en stock. Nuestro Stock actual es de: " + stockProductoA)
        }

        if(compra1 == "Implantes".toLowerCase()){
            if(cantidad1 < 5 && cantidad1 > 2){
                precioTotal = precioTotal * 0.90
                alert("Recibiste un descuento del 10% por tu compra")
                
            }
            else if(cantidad1 > 4){
                precioTotal = precioTotal * 0.85
                alert("Recibiste un descuento del 15% por tu compra")
                
            }
            else if(cantidad1 > 6 && cantidad1 < stockProductoA){
                precioTotal = precioTotal * 0.75
                alert("Recibiste un descuento del 25% por tu compra")
                
            }
        else{}
        }


        
    }
    else if(compra1 == "Endodoncia".toLowerCase()){
            precioTotal += cantidad1 * precioProductoB
        }
    else if(compra1 == "Blanqueamiento".toLowerCase()){
            precioTotal += cantidad1 * precioProductoB
    } 
    else if(compra1 == "Placa de Relajacion".toLowerCase()){
        if(stockProductoD >= cantidad1){
            precioTotal += cantidad1 * precioProductoB
        }
        else{
            alert("No disponemos esa cantidad en stock. Nuestro Stock actual es de: " + stockProductoD)
        }
    }        
        
    else{
        alert("No tenemos ese producto/servicio")
    }
}

/* if(compra1 == "Implantes".toLowerCase()){
    switch(true){    
        case cantidad1 > 2 && cantidad1 < 5:
            precioTotal = precioTotal * 0.90
            alert("Recibiste un descuento del 10% por tu compra")
            break;
        case cantidad1 > 4:
            precioTotal = precioTotal * 0.85
            alert("Recibiste un descuento del 15% por tu compra")
            break;
        case cantidad1 > 6:
            precioTotal = precioTotal * 0.75
            alert("Recibiste un descuento del 25% por tu compra")
            break;
        default:
            console.log(precioTotal)
            alert("No ingresaste una cantidad");
            break;
    }
    
} */



let precioToTalConIva = sumaIva(precioTotal)

if(cantidadCompras >= 1){
    alert("Este es el precio total con IVA de su compra: " + precioToTalConIva)
}
let nombreProductoA = "Implantes"
let precioProductoA = 25000
let stockProductoA = 32

let nombreProductoB = "Endodoncia"
let precioProductoB = 4500

let nombreProductoC = "Blanqueamiento"
let precioProductoC = 15000

let nombreProductoD = "Placa de Relajacion"
let precioProductoD = 7500
let stockProductoD = 50


let cantidadCompras = prompt("Ingrese el productos o servicios que quiere comprar: \n- Implantes\n- Endodoncia\n- Blanqueamiento\n- Placa de Relajacion").toLowerCase
let precioTotal = 0;


for(let i = 0; i < cantidadCompras; i++){

    let compra1 = prompt ("ingrese el nombre del producto o servicio que quiere comprar: \n- Implantes\n- Endodoncia\n- Blanqueamiento\n- Placa de Relajacion").toLowerCase() .Str.trim()
    let cantidad1 = prompt("Ingrese la cantidad del producto/servicio que quiere comprar:")

    if(compra1 == "Implantes".toLowerCase()){
        if(stockProductoA >= cantidad1){
            precioTotal += cantidad1 * precioProductoA
            alert("El precio total es de: $" + (cantidad1 * precioProductoA))
        }
        else{
            alert("No disponemos esa cantidad en stock. Nuestro Stock actual es de: " + stockProductoA)
        }
    }
    else if(compra1 == "Endodoncia".toLowerCase()){
            precioTotal += cantidad1 * precioProductoB
            alert("El precio total es de: $" + (cantidad1 * precioProductoB))
        }
    else if(compra1 == "Blanqueamiento".toLowerCase()){
        precioTotal += cantidad1 * precioProductoB
        alert("El precio total es de: $" + (cantidad1 * precioProductoB))
    } 
    else if(compra1 == "Placa de Relajacion".toLowerCase()){
        if(stockProductoD >= cantidad1){
            precioTotal += cantidad1 * precioProductoB
            alert("El precio total es de: $" + (cantidad1 * precioProductoB))
        }
    }        
        
    else{
        alert("No tenemos ese producto/servicio")
    }
}

if(cantidadCompras > 1){
    alert("Este es el precio total de su compra: " + precioTotal)
}
// Ignorar ()[]{} \n

/*
function solicitarPrecio () {
    let precioProducto = Number(prompt('Ingrese el Precio'))
    alert('El precio ingresado es $' + precioProducto)
}
solicitarPrecio()
function solicitarIva () {
    let iva = Number(prompt('Ingrese el Monto de IVA'))
    alert('El IVA ingresado es %' + iva)
}
solicitarIva()
function sumar () {
    let precioFinal = precioProducto + iva
    alert('El precio final es de $' + precioFinal)
}

sumar()

*/

//Funciones


function saludar () {
    let nombre = prompt("Porfavor, Ingrese su nombre:")
    alert(
        "Bienvenido/a " + nombre + " a nuestro almacén en línea"
    )
    alert(
        "A continuación, seleccione los productos que desea agregar al carrito"
        )
}

let productoCarrito
function agregarProducto () {
    productoCarrito = parseInt(prompt(
        "Lista de Productos: \n 1: NVidia GForce GTX 1660 ti \n 2: NVidia GForce RTX 2080 ti \n 3: NVidia GForce RTX 3080 ti \n 4: NVidia GForce RTX 4090")
        )
    
    if (productoCarrito === 1) {
        alert("Seleccionasate NVidia GForce GTX 1660 ti")
    } else if (productoCarrito === 2) {
        alert("Seleccionasate NVidia GForce RTX 2080 ti")
    } else if (productoCarrito === 3) {
        alert("Seleccionasate NVidia GForce RTX 3080")
    } else if (productoCarrito === 4) {
        alert("Seleccionasate NVidia GForce RTX 4090")
    } else alert("La opcion seleccionada no es valida")
}

function finalizarCompra () {
    if (productoCarrito == 1) {
        alert("El precio final de tu NVidia GForce GTX 1660 ti es " + gtx1660 * 1.21)
    } else if (productoCarrito == 2) {
        alert("El precio final de tu NVidia GForce RTX 2080 ti es " + rtx2080ti * 1.21)
    } else if (productoCarrito == 3) {
        alert("El precio final de tu NVidia GForce RTX 3080 es " + rtx3080 * 1.21)
    } else if (productoCarrito == 4) {
        alert("El precio final de tu NVidia GForce RTX 4090 es " + rtx4090 * 1.21)
    } else alert("La opcion seleccionada no es valida")    
}



//Main 

saludar()
agregarProducto()


let confirmarContinuacion = parseInt(prompt(
    "Que desea realizar a continuacion? \n 1: Finalizar Compra \n 2: Continuar Comprando \n 3: Cancelar Compra")
)

let gtx1660 = 70000
let rtx2080ti = 145000
let rtx3080 = 190000
let rtx4090 = 340000


while (confirmarContinuacion !== 3) {
    if (confirmarContinuacion === 1) {
        finalizarCompra()
        alert("A continuacion veras tu carrito para finalizar tu compra")
        alert("*SE MOSTRARIA EL CARRITO*")
        break
    } else if (confirmarContinuacion === 2) {
        agregarProducto()
        
    } 
    confirmarContinuacion = parseInt(prompt(
        "Que desea realizar a continuacion? \n 1: Finalizar Compra \n 2: Continuar Comprando \n 3: Cancelar Compra")
    )
}
alert("Gracias por utilizar nuestro servicio! Esperamos verlo nuevamente por aqui muy pronto!")



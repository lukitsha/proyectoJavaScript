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


// Objetos 
// let gtx1660 = 70000
// let rtx2080ti = 145000
// let rtx3080 = 190000
// let rtx4090 = 340000

class productosCarrito {
    constructor(nombre,categoria,precio){
    this.nombre = nombre
    this.categoria = categoria
    this.precio = precio
    }

    aplicarImpuesto () {
        console.log('el precio con Impuestos es de ' + this.precio * 1.21)
    }
    aplicarDescuento () {
        console.log('el precio con Descuento es de ' + this.precio * 0.90)
    }
        
    
}

const producto1 = new productosCarrito ('gtx1660','placas de video',70000)
const producto2 = new productosCarrito ('rtx2080ti','placas de video',145000)
const producto3 = new productosCarrito ('rtx3080','placas de video',190000)
const producto4 = new productosCarrito ('rtx4090','placas de video',340000)

console.log(producto1)
console.log(producto2)
console.log(producto3)
console.log(producto4)

producto1.aplicarImpuesto()
producto2.aplicarImpuesto()
producto3.aplicarImpuesto()

console.log(producto1)
console.log(producto2)
console.log(producto3)
console.log(producto4)

producto4.aplicarDescuento()


console.log(producto4)


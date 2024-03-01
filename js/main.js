
// Cambio de Modo de Color

let darkMode = localStorage.getItem("dark-mode")

const body = document.querySelector("body")
const div = document.querySelector("div")
const calculadoraIntereses = document.querySelector("#calculadoraIntereses")
const darkModeButton = document.querySelector("#color-dark")
const lightModeButton = document.querySelector("#color-light")
const changeModeButton = document.querySelector("#color-change")
const recuadrosConversor1 = document.querySelector("#cambioColor1")
const recuadrosConversor2 = document.querySelector("#cambioColor2")
const recuadrosConversor3 = document.querySelector("#cambioColor3")
const recuadrosConversor4 = document.querySelector("#cambioColor4")
const recuadrosConversor5 = document.querySelector("#cambioColor5")


darkModeButton.addEventListener("click", cambiarModoOscuro);
darkModeButton.addEventListener("click", () => {
    Toastify({
        text: "Modo Oscuro Seleccionado!",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", 
        position: "right", 
        stopOnFocus: true,
        style: {
          background: "linear-gradient(to right, #5a0170, #9a04bf)",
        },
        onClick: function(){}
      }).showToast();
       
}) 

function cambiarModoOscuro() {
    body.classList.add("dark-mode")
    calculadoraIntereses.classList.add("addDarkMode")
    recuadrosConversor1.classList.add("divisaDark")
    recuadrosConversor2.classList.add("divisaDark")
    recuadrosConversor3.classList.add("divisaDark")
    recuadrosConversor4.classList.add("divisaDark")
    recuadrosConversor5.classList.add("divisaDark")
 
    localStorage.setItem("dark-mode", "activado")
}

lightModeButton.addEventListener("click", cambiarModoClaro);
lightModeButton.addEventListener("click", () => {
    Toastify({
        text: "Modo Claro Seleccionado!",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", 
        position: "right", 
        stopOnFocus: true, 
        style: {
          background: "linear-gradient(to right, #017c82, #02b2ba)",
        },
        onClick: function(){}
      }).showToast();
       
}) 

function cambiarModoClaro() {
    body.classList.remove("dark-mode")
    calculadoraIntereses.classList.remove("addDarkMode")
    recuadrosConversor1.classList.remove("divisaDark")
    recuadrosConversor2.classList.remove("divisaDark")
    recuadrosConversor3.classList.remove("divisaDark")
    recuadrosConversor4.classList.remove("divisaDark")
    recuadrosConversor5.classList.remove("divisaDark")
    localStorage.setItem("dark-mode", "desactivado")
}

if (darkMode === "activado") {
    cambiarModoOscuro();
} else {
    cambiarModoClaro();
}

changeModeButton.addEventListener("click", () =>{
    darkMode = localStorage.getItem("dark-mode");

    if (darkMode === "activado") {
        cambiarModoClaro();
        Toastify({
            text: "Modo Claro Seleccionado!",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", 
            position: "right", 
            stopOnFocus: true, 
            style: {
              background: "linear-gradient(to right, #017c82, #02b2ba)",
            },
            onClick: function(){}
          }).showToast();
    } else {
        cambiarModoOscuro();
        Toastify({
            text: "Modo Oscuro Seleccionado!",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", 
            position: "right", 
            stopOnFocus: true, 
            style: {
              background: "linear-gradient(to right, #5a0170, #9a04bf)",
            },
            onClick: function(){} 
          }).showToast();
    }
})
    
function cambiarModoActual() {
    body.classList.toggle("dark-mode")
    calculadoraIntereses.classList.toggle("addDarkMode")
}


//Calculadora de intereses

function computeLoan(){
     // Calculr tasa de Interes
    const amount = document.querySelector('#amount').value;
    const interest_rate = document.querySelector('#interest_rate').value;
    const months = document.querySelector('#months').value
    // Calcular Interes por mes
    const interest = (amount * (interest_rate * 0.01)) / months;
    // Dividir el interes total entre la cantidd de meses, y gregarlo al costo mensual
    let payment = ((amount / months) + interest).toFixed(2);

    // Aregar una coma(,) cada tres numeros
    payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    // Usamos DOM para mandar el valor total correspondiente al Pago Mensual
    document.querySelector('#payment').innerHTML = `Pago Mensual = ${payment}`
}



// CONVERSOR DIVISAS LOCAL

let inputs = document.querySelectorAll(".valor");
inputs.forEach((input) => {
  input.value = input.dataset.cambio;  
});

function valorModificado(input) {
    let factor = input.value / input.dataset.cambio;
    inputs.forEach(campo => {
      campo.value = (campo.dataset.cambio * factor).toFixed(2);
    })
}


 
// CONVERSOR DIVISAS API

const monedaEl_one = document.getElementById('moneda-uno');
const monedaEl_two = document.getElementById('moneda-dos');
const cantidadEl_one = document.getElementById('cantidad-uno');
const cantidadEl_two = document.getElementById('cantidad-dos');
const cambioEl = document.getElementById('cambio');
const tazaEl = document.getElementById('taza');



function calculate(){
    const moneda_one = monedaEl_one.value;
    const moneda_two = monedaEl_two.value;

   fetch(`https://api.exchangerate-api.com/v4/latest/${moneda_one}`)
   .then(res => res.json() )
   .then(data => {
       const taza = data.rates[moneda_two];
       
       cambioEl.innerText = `1 ${moneda_one} = ${taza} ${moneda_two}`;

       cantidadEl_two.value = (cantidadEl_one.value * taza).toFixed(2);

    } );
    
}

monedaEl_one.addEventListener('change', calculate);
cantidadEl_one.addEventListener('input', calculate);
monedaEl_two.addEventListener('change', calculate);
cantidadEl_two.addEventListener('input', calculate);

taza.addEventListener('click', () =>{
    const temp = monedaEl_one.value;
    monedaEl_one.value = monedaEl_two.value;
    monedaEl_two.value = temp;
    calculate();
} );


calculate();
  
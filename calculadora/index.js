const mousetrap = require('mousetrap')

mousetrap.bind('1',clickUno)
mousetrap.bind('2',clickDos)
mousetrap.bind('3',clickTres)
mousetrap.bind('4',clickCuatro)
mousetrap.bind('5',clickCinco)
mousetrap.bind('6',clickSeis)
mousetrap.bind('7',clickSiete)
mousetrap.bind('8',clickOcho)
mousetrap.bind('9',clickNueve)
mousetrap.bind('0',clickCero)
mousetrap.bind('+',clickSuma)
mousetrap.bind('-',clickResta)
mousetrap.bind('x',clickMult)
mousetrap.bind('/',clickDivision)
mousetrap.bind(' ',clickLimpiar)


document.getElementById('botonUno').addEventListener('click',clickUno)
document.getElementById('botonDos').addEventListener('click',clickDos)
document.getElementById('botonTres').addEventListener('click',clickTres)
document.getElementById('botonCuatro').addEventListener('click',clickCuatro)
document.getElementById('botonCinco').addEventListener('click',clickCinco)
document.getElementById('botonSeis').addEventListener('click',clickSeis)
document.getElementById('botonSiete').addEventListener('click',clickSiete)
document.getElementById('botonOcho').addEventListener('click',clickOcho)
document.getElementById('botonNueve').addEventListener('click',clickNueve)
document.getElementById('botonDiez').addEventListener('click',clickDiez)
document.getElementById('botonCero').addEventListener('click',clickCero)

document.getElementById('suma').addEventListener('click',clickSuma)
document.getElementById('resta').addEventListener('click',clickResta)
document.getElementById('mult').addEventListener('click',clickMult)
document.getElementById('division').addEventListener('click',clickDivision)

document.getElementById('Limpiar').addEventListener('click',clickLimpiar)

var actualElemento =document.getElementById('numeroactual')


var actual = ''
var resultado = 0

function clickUno(){
    actual +=1
    actualElemento.innerHTML = actual
}
function clickDos(){
    actual +=2
    actualElemento.innerHTML = actual
}
function clickTres(){
    actual +=3
    actualElemento.innerHTML = actual
}
function clickCuatro(){
    actual +=4
    actualElemento.innerHTML = actual
}
function clickCinco(){
    actual +=5
    actualElemento.innerHTML = actual
}
function clickSeis(){
    actual +=6
    actualElemento.innerHTML = actual
}
function clickSiete(){
    actual +=7
    actualElemento.innerHTML = actual
}
function clickOcho(){
    actual +=8
    actualElemento.innerHTML = actual
}
function clickNueve(){
    actual +=9
    actualElemento.innerHTML = actual
}
function clickCero(){
    actual +=0
    actualElemento.innerHTML = actual
}
function clickLimpiar(){
    actual +=' '
    actualElemento.innerHTML = actual
}

function clickSuma(){
    if(actual != ''){ 
      resultado += parseInt(actual)
      actual=''
      actualElemento.innerHTML='0' 
      resultadoElemento.innerHTML= resultado
}
}

function clickResta(){
    if(actual != ''){ 
      resultado -= parseInt(actual)
      actual=''
      actualElemento.innerHTML='0' 
      resultadoElemento.innerHTML= resultado
}
}

function clickDivision(){
    if(actual != ''){ 
      resultado /= parseInt(actual)
      actual=''
      actualElemento.innerHTML='0' 
      resultadoElemento.innerHTML= resultado
}
}

function clickMult(){
    if(actual != ''){ 
      resultado *= parseInt(actual)
      actual=''
      actualElemento.innerHTML='0' 
      resultadoElemento.innerHTML= resultado
}
}


 

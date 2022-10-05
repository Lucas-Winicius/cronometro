const tempo = { milesimos: 0,
                segundos: 0,
                minutos: 0,
                horas: 0
            }

let timer

function iniciar() {
    document.querySelector('.iniciar').style.display = 'none'
    document.querySelector('#parar').style.display = 'block'
    document.querySelector('#zerar').style.display = 'block'

    timer = setInterval(() => {
        tempo.milesimos++
        VerificarTempo()
        exibirTempo()
    }, 1)
}

function pausar() {
    document.querySelector('#parar').style.display = 'none'
    document.querySelector('.retomar').style.display = 'block'
}

function retomar() {
    document.querySelector('.retomar').style.display = 'none'
    document.querySelector('#parar').style.display = 'block'
}

function zerar() {
    location.reload()
}


function VerificarTempo() {
    
    if(tempo.milesimos == 1000) tempo.milesimos = 0 + tempo.segundos++
    
    if(tempo.segundos == 60) tempo.segundos = 0 + tempo.minutos++

    if(tempo.minutos == 60) tempo.minutos = 0 + tempo.horas++
}

function exibirTempo() {
    document.querySelector('#tempo').innerHTML = 
    `${tempo.horas}:${tempo.minutos}:${tempo.segundos}:${tempo.milesimos}`

    console.log(`${tempo.horas}:${tempo.minutos}:${tempo.segundos}:${tempo.milesimos}`)
}
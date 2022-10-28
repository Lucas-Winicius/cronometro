const startButton = document.querySelector("[data-start]")
const pauseButton = document.querySelector("[data-pause]")
const stopButton = document.querySelector("[data-stop]")
const timeElement = document.querySelector("[data-time]")
let seconds = 0, minutes = 0, hours = 0
let interval

const renderTime = () => {
    const secondsValue = seconds < 10 ? `0${seconds}` : seconds
    const minutesValue = minutes < 10 ? `0${minutes}` : minutes
    const hoursValue = hours < 10 ? `0${hours}` : hours

    timeElement.innerHTML = `${hoursValue}:${minutesValue}:${secondsValue}`
    console.log(`${hoursValue}:${minutesValue}:${secondsValue}`)
}

const startTime = (startValue) => {
    startButton.setAttribute('disabled', true)
    pauseButton.removeAttribute('disabled')
    stopButton.removeAttribute('disabled')
    
    if (startValue === 'restart') seconds = 0, minutes = 0, hours = 0
    
    interval = setInterval(() => {
        seconds++
        minutes = seconds === 60 ? ++minutes : minutes
        hours = minutes === 60 ? ++hours : hours
        
        seconds = seconds === 60 ? 0 : seconds
        minutes = minutes === 60 ? 0 : minutes
        
        renderTime()
    }, 1000)

}

startButton.onclick = e => {
    const startValue = startButton.getAttribute('data-start')
    
    startTime(startValue)
    
}

pauseButton.onclick = e => {
    clearInterval(interval)
    startButton.removeAttribute('disabled')
    startButton.setAttribute('data-start', 'continue')
    startButton.innerHTML = 'Continuar'
    pauseButton.setAttribute('disabled', true)
}

stopButton.onclick = e => {
    clearInterval(interval)

    startButton.removeAttribute('disabled')
    startButton.innerHTML = "Reiniciar"
    startButton.setAttribute('data-start', 'restart')

    pauseButton.setAttribute('disabled', true)
    stopButton.setAttribute('disabled', true)


}
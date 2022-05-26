const canvas = document.createElement("canvas") //criação do elemento || canvas = quadro em branco
const context = canvas.getContext("2d") //caneta

canvas.width = 800 //largura da parte branca
canvas.height = 650 //altura da parte branca

let x = 100 //onde começa a barra
let barWidth = 100 //largura da barra
let barHeight = 20 //altura da barra
let directionX = 0 //direção da barra

document.addEventListener ("keydown", ev => {
    if (ev.cod == "KeiD"){

    }
})

function mainLoop() { //Início da função
    context.clearRect(0, 0, canvas.width, canvas.height)
    context.fillRect(x, canvas.height - barHeight, barWidth, 20) 
    x += directionX
    if (x <= 0 || x >= canvas.width - barWidth) {
        directionX *= -1
    }
    requestAnimationFrame(mainLoop)
}

requestAnimationFrame(mainLoop)

document.body.append(canvas) //desenhar o que eu faço no canvas, dentro do body - html

//const canvas = document.createElement("canvas")
//const context = canvas.getContext("2d")

//canvas.width = 800
//canvas.height = 600

//let y = 0
//let barSize = 100
//let directionY = 1

//function mainLoop() {
    //context.clearRect(0, 0, canvas.width, canvas.height)
    //context.fillRect(10, y, 20, barSize)
    //y += directionY
    //if (y <= 0 || y >= canvas.height - barSize) {
        //directionY *= -1
    //}
    //requestAnimationFrame(mainLoop)
//}

//requestAnimationFrame(mainLoop)

//document.body.append(canvas)

//====================================================================

const canvas = document.createElement("canvas")
const context = canvas.getContext("2d")

canvas.width = 800
canvas.height = 600

let y = 0
let x = 0
let barSize = 100
let barX = 100
let directionY = 1
let directionX = 1

function mainLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height)
    context.fillRect(10, y, 20, barSize) //deso.hori,ini.deslo.verti.,largura
    context.fillRect(50, x, 20, barX)
        y += directionY
        if (y <= 0 || y >= canvas.height - barSize) {
            directionY *= -1
        }
        x += directionX
        if (x <= 0 || x >= canvas.height - barX) {
            directionX *= -1
        }
    requestAnimationFrame(mainLoop)
}
requestAnimationFrame(mainLoop)

document.body.append(canvas)

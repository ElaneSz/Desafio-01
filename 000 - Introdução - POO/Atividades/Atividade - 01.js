const canvas = document.createElement("canvas") // Criação do elemento | canvas = quadro em branco
const context = canvas.getContext("2d") // Criação de uma "caneta" | para desenhar no quadro em branco (dnominado "canvas")
  
canvas.width = 800 //largura do canvas 
canvas.height = 600 //altura do canvas
//======================================================================
// Abaixo a criação e atribuição de valores das variaveis da barra (que sera utilizada dendro do canvas)

let y = 0 //onde começa a barra
let barSize = 100 //tamanho da barra
let directionY = 1 //direção da barra
//======================================================================
// Inicio da função | Será um loop - repetição | O loop consiste em desenhar e apagar "blocos" simultaneamente - para causar a impressão de movimento 
function mainLoop() { 
    context.clearRect(0, 0, canvas.width, canvas.height) // Coordenadas para apagar o "bloco" desenhado anteriormente
    context.fillRect(10, y, 20, barSize) // Coordenadas para preencher novo "bloco" || Inicio do deslocamento horizontal | Inicio do deslocamento vertical | largura | Tamanho da barra
    y += directionY // Mudança da coordenada de criação do novo bloco | Sempre muda, porquê é somado +1 à variavel "y"
    //======================================================================
    // O "if" abaixo tem como função causar a impressão de que a barra bate nas extremidades do canvas (quadrado branco)
    if (y <= 0 || y >= canvas.height - barSize) { 
    directionY *= -1 
    } 
    requestAnimationFrame(mainLoop) // Requisição para a execução da função - Após a 1º vez
} 
  
requestAnimationFrame(mainLoop) // Requisição para a execução da função - 1º vez
  
document.body.append(canvas) // Desenhar o que eu faço no canvas, dentro do body - estrutura do html

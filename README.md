# Desafio-01
Atividade 05.05
const readline = require('readline')
const { stdin: input, stdout: output } = require('process')
const rl = readline.createInterface({ input, output })
const question = q => new Promise((rs, rj) => rl.question(q + ' ', a => rs(a)))

void async function () {
    var soma = 0
    var count = 0
    var media = 0
    while (true) {
        var strNota = await question(`Digite o valor da ${count + 1}° nota ou N/n para calcular a média entre os valores inseridos: `)
        if (strNota.toUpperCase() == 'N') {
            break
        }     
        var nota = parseFloat(strNota)
        if ( isNaN(nota) || nota < 0 || nota > 10){
            console.log('[ ALERTA ] - Somente são permitidos valores racionais entre 0 e 10 ou caracteres N/n!!')
            continue
        }
        soma = soma + nota
        count++
    }
    media = soma / count
    console.log(`[ RESULTADO ] A média de todos os valores informados é: `, media)
    process.exit()
}()

//Desafio-01 (Sem modificações)
//Atividade 05.05
import * as readline from 'node:readline'
import { stdin as input, stdout as output } from 'node:process'
const rl = readline.createInterface({ input, output })
const question = question => new Promise((resolve, reject) => rl.question(question, answer => resolve(answer)))


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

const result = document.querySelector('.result')
const humanResult = document.getElementById('human-result')
const machineResult = document.getElementById('machine-result')

let humanScoreNumber = 0
let machineScoreNumber = 0


const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = ['pedra', 'papel', 'tesoura']
    const randonNumber = Math.floor(Math.random() * 3)

    return choices[randonNumber]
}

const playTheGame = (human, machine) => {
    if(human === machine){
        result.innerHTML = 'Deu empate'
    } else if((human === 'papel' && machine === 'pedra') || (human === 'pedra' && machine === 'tesoura') || (human === 'tesoura' && machine === 'papel')){
        humanScoreNumber++
        humanResult.innerHTML = humanScoreNumber
        result.innerHTML = `<span style="color: green;">Você ganhou &#x1F3C6;</span> a maquina escolheu ${machine}`
    }else{
        machineScoreNumber++
        machineResult.innerHTML = machineScoreNumber
        result.innerHTML = `<span style="color: red;">Você perdeu &#x1F622;</span> a maquina escolheu ${machine}`
    }
}



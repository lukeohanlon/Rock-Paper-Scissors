let useChoice = document.getElementById('x')
let comp = document.getElementById('cc')
let win = document.getElementById('winner')
let startC = document.getElementById('start-c')
let startP = document.getElementById('start-p')
let rockP = document.getElementById('rock')
let paperP = document.getElementById('paper')
let scissorsP = document.getElementById('scissors')
let rockC = document.getElementById('rock-c')
let paperC = document.getElementById('paper-c')
let scissorsC = document.getElementById('scissors-c')
let pResult = document.getElementById('p-result')
let cResult = document.getElementById('c-result')
let pScoreHolder = document.getElementById('player-score')
let cScoreHolder = document.getElementById('computer-score')
let playerScore = 0
let computerScore = 0
let userVal
const compChoices = ['Rock', 'Paper', 'Scissors']

let userPlay = userVal => {
  pResult.innerText = ''
  cResult.innerText = ''
  rockP.style.display = 'none'
  paperP.style.display = 'none'
  scissorsP.style.display = 'none'
  startP.style.display = 'flex'
  rockC.style.display = 'none'
  paperC.style.display = 'none'
  scissorsC.style.display = 'none'
  startC.style.display = 'flex'
  let computer = compChoices[Math.floor(Math.random() * 3)]
  setTimeout(() => {
    startC.style.transform = 'translateY(-10px)'
    startP.style.transform = 'translateY(-10px)'
    useChoice.style.color = '#ffe84a'
    comp.style.color = '#ffe84a'
    useChoice.innerText = 'Rock'
    comp.innerText = 'Rock'
    setTimeout(() => {
      startC.style.transform = 'translateY(0px)'
      startP.style.transform = 'translateY(0px)'
      setTimeout(() => {
        startC.style.transform = 'translateY(-10px)'
        startP.style.transform = 'translateY(-10px)'

        setTimeout(() => {
          useChoice.innerText = 'Paper'
          comp.innerText = 'Paper'
          useChoice.style.color = '#00e1d4'
          comp.style.color = '#00e1d4'
          startC.style.transform = 'translateY(0px)'
          startP.style.transform = 'translateY(0px)'
          setTimeout(() => {
            startC.style.transform = 'translateY(-10px)'
            startP.style.transform = 'translateY(-10px)'

            setTimeout(() => {
              startC.style.transform = 'translateY(0px)'
              startP.style.transform = 'translateY(0px)'
              useChoice.style.color = '#f1baf5'
              comp.style.color = '#f1baf5'
              useChoice.innerText = 'Scissors'
              comp.innerText = 'Scissors'
              setTimeout(() => {
                startC.style.transform = 'translateY(-10px)'
                startP.style.transform = 'translateY(-10px)'

                setTimeout(() => {
                  startC.style.transform = 'translateY(0px)'
                  startP.style.display = 'none'
                  startP.style.transform = 'translateY(0px)'
                  startC.style.display = 'none'
                  if (computer == 'Rock') {
                    comp.style.color = '#ffe84a'
                    rockC.style.display = 'flex'
                    paperC.style.display = 'none'
                    scissorsC.style.display = 'none'
                    startC.style.display = 'none'
                    console.log(computer)
                  } else if (computer == 'Paper') {
                    comp.style.color = '#00e1d4'
                    rockC.style.display = 'none'
                    paperC.style.display = 'flex'
                    scissorsC.style.display = 'none'
                    startC.style.display = 'none'
                    console.log(computer)
                  } else {
                    comp.style.color = '#f1baf5'
                    scissorsC.style.display = 'flex'
                    rockC.style.display = 'none'
                    paperC.style.display = 'none'
                    startC.style.display = 'none'
                    console.log(computer)
                  }
                  if (userVal == 'Rock') {
                    useChoice.style.color = '#ffe84a'
                    rockP.style.display = 'flex'
                    paperP.style.display = 'none'
                    scissorsP.style.display = 'none'
                    startP.style.display = 'none'
                  } else if (userVal == 'Paper') {
                    useChoice.style.color = '#00e1d4'
                    rockP.style.display = 'none'
                    paperP.style.display = 'flex'
                    scissorsP.style.display = 'none'
                    startP.style.display = 'none'
                  } else {
                    useChoice.style.color = '#f1baf5'
                    rockP.style.display = 'none'
                    paperP.style.display = 'none'
                    scissorsP.style.display = 'flex'
                    startP.style.display = 'none'
                  }
                  useChoice.innerText = 'Shoot!'
                  comp.innerText = 'Shoot!'
                }, 250)
              }, 250)
            }, 250)
          }, 250)
        }, 250)
      }, 250)
    }, 250)
  }, 250)

  setTimeout(() => {
    if (userVal == computer) {
      cResult.innerText = 'Tie'
      pResult.innerText = 'Tie'
    } else if (userVal == 'Rock' && computer == 'Paper') {
      computerScore++
      cResult.innerText = 'Win'
      pResult.innerText = 'Lose'
    } else if (userVal == 'Rock' && computer == 'Scissors') {
        playerScore++
      cResult.innerText = 'Lose'
      pResult.innerText = 'Win'
    } else if (userVal == 'Paper' && computer == 'Rock') {
        playerScore++
      cResult.innerText = 'Lose'
      pResult.innerText = 'Win'
    } else if (userVal == 'Paper' && computer == 'Scissors') {
      computerScore++
      cResult.innerText = 'Win'
      pResult.innerText = 'Lose'
    } else if (userVal == 'Scissors' && computer == 'Paper') {
        playerScore++
      cResult.innerText = 'Lose'
      pResult.innerText = 'Win'
    } else if (userVal == 'Scissors' && computer == 'Rock') {
      computerScore++
      cResult.innerText = 'Win'
      pResult.innerText = 'Lose'
    }
    pScoreHolder.innerText = playerScore
    cScoreHolder.innerText = computerScore
  }, 2100)
  win.innerText = ''
}


let resetScore = () => {
    playerScore = 0;
    computerScore = 0;
    pScoreHolder.innerText = playerScore
    cScoreHolder.innerText = computerScore
}
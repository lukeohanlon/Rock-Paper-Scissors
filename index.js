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

let userVal

const compChoices = ['Rock', 'Paper', 'Scissors']

let userPlay = userVal => {
    pResult.innerText = ""
    cResult.innerText = ""
    rockP.style.display = "none";
    paperP.style.display = "none";
    scissorsP.style.display = "none";
    startP.style.display = "flex";
    useChoice.style.color = "#ffe84a";
    rockC.style.display = "none";
    paperC.style.display = "none";
    scissorsC.style.display = "none";
    comp.style.color = "#ffe84a";
    startC.style.display = "flex";
   

  setTimeout(() => {
    startC.style.transform = 'translateY(-10px)'
    startP.style.transform = 'translateY(-10px)'
    useChoice.innerText = "Rock"
    comp.innerText = "Rock"
    setTimeout(() => {
       
      startC.style.transform = 'translateY(0px)'
      startP.style.transform = 'translateY(0px)'
      setTimeout(() => {
        startC.style.transform = 'translateY(-10px)'
        startP.style.transform = 'translateY(-10px)'
        
        setTimeout(() => {
            useChoice.innerText = "Paper"
            comp.innerText = "Paper"
            useChoice.style.color = "#00e1d4";
            comp.style.color = "#00e1d4";
          startC.style.transform = 'translateY(0px)'
          startP.style.transform = 'translateY(0px)'
          setTimeout(() => {
            startC.style.transform = 'translateY(-10px)'
            startP.style.transform = 'translateY(-10px)'
            
            setTimeout(() => {
                
              startC.style.transform = 'translateY(0px)'
              startP.style.transform = 'translateY(0px)'
              useChoice.style.color = "#f1baf5";
              comp.style.color = "#f1baf5";
              useChoice.innerText = "Scissors"
              comp.innerText = "Scissors"
              setTimeout(() => {
                startC.style.transform = 'translateY(-10px)'
                startP.style.transform = 'translateY(-10px)'
                
                setTimeout(() => {
                   
                  startC.style.transform = 'translateY(0px)'
                  startP.style.display = "none";
                  startP.style.transform = 'translateY(0px)'
                  startC.style.display = "none";
                  useChoice.innerText = "Shoot!"
                  comp.innerText = "Shoot!"
                  
                }, 250)
              }, 250)
            }, 250)
          }, 250)
        }, 250)
      }, 250)
    }, 250)
  }, 250)

  setTimeout(() => {
   
    let computer = compChoices[Math.floor(Math.random() * 3)]
    if (userVal == computer) {
      cResult.innerText = 'Tie'
      pResult.innerText = 'Tie'
    } else if (userVal == 'Rock' && computer == 'Paper') {
        cResult.innerText = 'Win'
        pResult.innerText = 'Lose'
    } else if (userVal == 'Rock' && computer == 'Scissors') {
        cResult.innerText = 'Lose'
        pResult.innerText = 'Win'
    } else if (userVal == 'Paper' && computer == 'Rock') {
        cResult.innerText = 'Lose'
        pResult.innerText = 'Win'
    } else if (userVal == 'Paper' && computer == 'Scissors') {
        cResult.innerText = 'Win'
        pResult.innerText = 'Lose'
    } else if (userVal == 'Scissors' && computer == 'Paper') {
        cResult.innerText = 'Lose'
        pResult.innerText = 'Win'
    } else if (userVal == 'Scissors' && computer == 'Rock') {
        cResult.innerText = 'Win'
        pResult.innerText = 'Lose'
    }
    if(userVal == "Rock"){
        // useChoice.innerText = "Rock"
        rockP.style.display = "flex";
        paperP.style.display = "none";
        scissorsP.style.display = "none";
        startP.style.display = "none";
    } else if(userVal == "Paper"){
        // useChoice.innerText = "Paper"
        rockP.style.display = "none";
        paperP.style.display = "flex";
        scissorsP.style.display = "none";
        startP.style.display = "none";
    } else if(userVal == "Scissors"){
        // useChoice.innerText = "Scissors"
        rockP.style.display = "none";
        paperP.style.display = "none";
        scissorsP.style.display = "flex";
        startP.style.display = "none";
    }
    if(computer == "Rock"){
        // useChoice.innerText = "Rock"
        rockC.style.display = "flex";
        paperC.style.display = "none";
        scissorsC.style.display = "none";
        startC.style.display = "none";
    } else if(computer == "Paper"){
        // useChoice.innerText = "Paper"
        rockC.style.display = "none";
        paperC.style.display = "flex";
        scissorsC.style.display = "none";
        startC.style.display = "none";
    } else if(computer == "Scissors"){
        // useChoice.innerText = "Scissors"
        rockC.style.display = "none";
        paperC.style.display = "none";
        scissorsC.style.display = "flex";
        startC.style.display = "none";
    }
  }, 2100)
  win.innerText = ''
}

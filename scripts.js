/**
 * 

const playerText =document.querySelector('#player')
const computerText = document.querySelector('#computer')
const choicebtns = document.querySelectorAll('.selection-btn')

const resultComputer = document.querySelector('.result-computer-score')
const resultPlayer = document.querySelector('.result-player-scor')


let player;
let computer
let result

choicebtns.forEach(button => button.addEventListener('click', () =>{

    player = button.textContent;
    computerTurn();
    
    checkWinner();


}))

function computerTurn(){
    const randNum = Math.floor(Math.random()) + 1;

    switch(randNum){
        case 1:
            computer = 'rock';
            break;
        case 2:
            computer = 'paper';
            break;
        case 3:
            computer = 'sicessors';
            break;
    }
    console.log(computer)
}

function checkWinner (){
    if(player == computer){
        return "draw!"
    }else if(computer == 'rock'){
        if(player == 'paper'){
            console.log(resultPlayer++)
            return  resultPlayer++;
        
        }else{
            return  resultComputer++
        }
       //  return (player == 'paper')? "you win" : "you lose"
    }
    else if(computer == 'paper'){
        if(player == 'sicessors'){
            console.log(resultPlayer++)
            return resultPlayer++;
        }
        else{
            return  resultComputer++
        }
       // return (player == 'sicessors')? "you win" : "you lose"
   }
   else if(computer == 'sicessors'){
    if(player == 'sicessors'){
        console.log(resultPlayer++)
        return resultPlayer++;
    }
    else{
        return resultComputer++
    }
  //  return (player == 'rock')? "you win" : "you lose"
}
}
 */

const selectionButtons = document.querySelectorAll('[data-selection]')
const finalCol = document.querySelector('[data-final-col]')
const computerScore = document.querySelector('[data-computer]')
const playerscore = document.querySelector('[data-player')


const SelectionsArray= [
    {
        name: 'rock',
        emoji: '✊',
        beat: 'paper'
    },
    {
        name: 'paper',
        emoji: '✋',
        beat: 'sicessor'
    },
    {
        name: 'sicessors',
        emoji: '✌',
        beat: 'rock'
    }
]


 
selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', () =>{
        const selectionName = selectionButton.dataset.selection
        const selection = SelectionsArray.find(selection => selection.name === selectionName)

        makeSelection(selection)
    })
});

function makeSelection(selection){
    const computerSelection = randomSelection()
    const yourWinner = isWinner(selection, computerSelection)
    const computerWinner = isWinner(computerSelection, selection)
    console.log(selection)
    console.log(computerSelection)
    addSelectionResult(computerSelection, computerWinner)
    addSelectionResult(selection, yourWinner)

    if(yourWinner)incrementScore(playerscore)
    if(computerWinner)incrementScore(computerScore)


}

function randomSelection(){
    const randomIndex = Math.floor(Math.random()* SelectionsArray.length)
    return SelectionsArray[randomIndex]
}

function isWinner(selection, opponentSelection){
    return selection.beat === opponentSelection.name
}


function addSelectionResult(selection, winner){
    const div = document.createElement('div')
    div.innerText = selection.emoji
    div.classList.add('result-selection')
    if(winner)div.classList.add('winner')
    finalCol.after(div)
}

function incrementScore(scorespan){
scorespan.innerText = parseInt(scorespan.innerText)+1
}
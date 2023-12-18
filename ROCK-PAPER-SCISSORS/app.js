const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const displayAnwser = document.getElementById('result')
const choiceOptions = document.querySelectorAll('button')

let userChoice
let computerChoice
let result
choiceOptions.forEach( choiceOption => choiceOption.addEventListener('click',(e) =>{
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    showComputerChoice()
    showResult()

}) )

function showComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3 + 1 /*choiceOptions.length*/)

    if(randomNumber === 1){
        computerChoice = 'Rock'
    }
    if(randomNumber === 2){
        computerChoice = 'Paper'
    } 
    if(randomNumber === 3){
        computerChoice = 'Scissors'
    }

    computerChoiceDisplay.innerHTML = computerChoice
}


function showResult(){
    if( userChoice === computerChoice){
        result = 'It is a Draw!'
    } 
    if( computerChoice ==='Paper ' && userChoice ==='Scissors'){
        result = 'Great Job, You Win! '

    }
    if (computerChoice === 'Rock' && userChoice === 'Scissors'){
        result = 'Sorry, You lose!'
    }

    if (computerChoice === 'Rock' && userChoice === 'Paper'){
        result = 'Great Job, You Win!'
    }

    if(computerChoice === 'Paper' && userChoice === 'Rock'){
        result = 'Sorry,You Lose !'
    }

    if(computerChoice ==='Scissors' && userChoice === 'Rock'){
            result ='Great Job,You Win!'
    }

    if (computerChoice ==='Scissors' && userChoice === 'Paper'){
        result ='Sorry, You Lose!'
    }      
    
    displayAnwser.innerHTML = result
}


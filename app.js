const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#resetButton');
const maxScoreSelect = document.querySelector('#playTo');

let maxScore = 5;

let p1Score = 0;
let p2Score = 0;
let gameOver = false;
let winner = document.querySelector("#winner")

let p1Display = document.querySelector('#p1Display')
let p2Display = document.querySelector('#p2Display')



p1Button.addEventListener('click', function (){
    if(!gameOver)
        {
            if(p1Score !== maxScore)
                {
                    p1Score+=1;
                    p1Display.textContent = p1Score;
                }            
            if(p1Score === maxScore)
                {
                    gameOver = true;
                    p1Display.classList.add("green")
                    winner.classList.add("green")
                    p2Display.classList.add("red")
                    displayWinner();
                }
        }
})

p2Button.addEventListener('click', function (){
    if(!gameOver)
        {
            if(p2Score !== maxScore)
                {
                    p2Score+=1;
                    p2Display.textContent = p2Score;
                }
            else if(p2Score === maxScore)
                {
                    gameOver = true;
                    p2Display.classList.add("green")
                    winner.classList.add("green")
                    p1Display.classList.add("red")
                    displayWinner();
                }
        }   
})

function displayWinner(){
    if(p1Score > p2Score)
        winner.textContent = "Player-1"
    else
        winner.textContent = "Player-2"
}

function reset(){
    gameOver=false;
    p1Score=0;
    p2Score=0;
    p1Display.textContent=p1Score;
    p2Display.textContent=p2Score;
    p1Display.classList.remove("green")
    p2Display.classList.remove("green")
    p1Display.classList.remove("red")
    p2Display.classList.remove("red")
    winner.classList.remove("green")

    winner.textContent = ""
}

resetButton.addEventListener('click', reset)

maxScoreSelect.addEventListener('change', function(){
    maxScore = parseInt(this.value);
    reset();
})

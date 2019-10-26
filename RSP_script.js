let playerscore = 0;
let computerscore = 0;

var btn1 = document.querySelector('#btn1');
btn1.addEventListener("click", function(){ 
    playerSelection = "Rock";     
    game();
   });

var btn2 = document.querySelector('#btn2');
btn2.addEventListener("click", function(){ 
    playerSelection = "Scissors";     
    game();
    });

var btn3 = document.querySelector('#btn3');
btn3.addEventListener("click", function(){ 
    playerSelection = "Paper";     
    game();
    });

var rsb = document.querySelector('#rsb');
    rsb.addEventListener('click', function(){
    resetSelection = "Reset";
    reset();
    });

const container = document.querySelector('#container');
const div1 = document.createElement("div");
container.appendChild (div1);


function computerPlay() {
    let messages = ["Rock", "Scissors", "Paper"];
    let result = messages[Math.floor(Math.random() * messages.length)];
return result;
}
let roundresult;
function playRound(playerSelection , computerSelection) {

if (playerSelection===computerSelection) { 
    roundresult = "It's a draw";              
} else {if (playerSelection==="Rock" && computerSelection==="Paper") { 
    roundresult = "You lose";
                
} else {if (playerSelection==="Rock" && computerSelection==="Scissors") {
    roundresult = "You win";
    
} else {if (playerSelection==="Scissors" && computerSelection==="Rock") {
    roundresult = "You lose";
   
} else {if (playerSelection==="Scissors" && computerSelection==="Paper") {
    roundresult = "You win";
    
} else {if (playerSelection==="Paper" && computerSelection==="Scissors") {
    roundresult = "You lose";
    
} else {if (playerSelection==="Paper" && computerSelection==="Rock") {
    roundresult = "You win";
} else {
    console.log("Not a valid selection")
}
    
 }}}}}}
}

function reset(){

	if(resetSelection === "Reset"){
		playerscore = 0;
		computerscore = 0;
	}
}

function game() {
    
    const computerSelection = computerPlay();                                         
    playRound(playerSelection , computerSelection);

        if (roundresult === "You win") {
            playerscore++ ;  
            div1.innerHTML ="YOU WIN; " + playerSelection + " beats " + computerSelection  + " , Player score = " + playerscore + " , Computer score = " + computerscore ;                      
        }
        if (roundresult === "You lose") {
            computerscore++ ;    
            div1.innerHTML = "COMPUTER WINS; " + computerSelection + " beats " + playerSelection + " , Player score = " + playerscore + " , Computer score = " + computerscore;                  
        }
        if (roundresult === "It's a draw") {
            div1.innerHTML = "This round is a draw, you both chose " + playerSelection + " , Player score = " + playerscore + " , Computer score = " + computerscore;
        }
        
    
    if (playerscore === 5) {
        div1.innerHTML = "Congratulations, you won the game" + ", Your score: " + playerscore + ", Computer score: " + computerscore;
        playerscore = 0;
        computerscore = 0;
    } 
    
    if (computerscore === 5) {
        div1.innerHTML = "Sorry, computer wins the game" + ", Your score: " + playerscore + ", Computer score: " + computerscore;
        playerscore = 0;
        computerscore = 0;        
    }               
}






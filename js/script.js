// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW
var userChoice = "";
var computerChoice = "";
var winner = "";
var computerScore = 0;
var point = 1;
var myPoints = 0;
function updateTerms(){
    $("#myPoints").text(myPoints);
    $("#computerPoints").text(computerScore)

}

$("#shoot").click(function(){
    userChoice = $("#input").val();
    
    $("#userChoice").text(userChoice);
    var randomNumber = Math.random();
    
     console.log(randomNumber);
    if(randomNumber < .33) {
        $("#computerChoice").text("rock"); 
        computerChoice = "rock"
    } else if(randomNumber > .33 && randomNumber < .66){
        $("#computerChoice").text("scissor")
        computerChoice = "scissor"
    }else{
    $("#computerChoice").text("paper");
    computerChoice = "paper"
}

    if(userChoice === "rock" && computerChoice === "scissors"){
        $("#winner").text("User wins");
        myPoints += point;
    } else if(userChoice === "rock" && computerChoice === "paper"){
        $("#winner").text("Computer wins!");
        computerScore += point;
    }
    else if(userChoice === "paper" && computerChoice === "rock"){
        $("#winner").text("User Wins!")
        myPoints += point;
    }
    else if(userChoice === "scissor" && computerChoice === "paper"){
        $("#winner").text("User Wins!")
        myPoints += point;
    }
    else if(userChoice === "paper" && computerChoice === "scissor"){
        $("#winner").text("Computer Wins!")
        computerScore += point;
    }
    else if(userChoice === "scissor" && computerChoice === "rock"){
        $("#winner").text("Computer Wins!")
    }
        
    else if(userChoice === computerChoice){
        $("#winner").text("Tie, Try Again!")
    }
    updateTerms()
}); 


    
    
    
    
    
    
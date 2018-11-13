// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW
var userChoice;
var computerChoice;
var winner;

   
$("#shoot").click(function(){
    userChoice = $("#input").val();
    
    $("#userChoice").text(userChoice);
    var randomNumber = Math.random();
    
     console.log(randomNumber);
    if(randomNumber < .33) {
        $("#computerChoice").text("rock"); 
    } else if(randomNumber > .33 && randomNumber < .66){
        $("#computerChoice").text("scissor")
    }else{
    $("#computerChoice").text("paper");
}

});
    
    
    
    
    
    
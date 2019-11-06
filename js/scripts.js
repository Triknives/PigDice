//player one
var playerOneBank = []
var playerOneTurnBank = []
//when rolled

$(document).ready(function(){
  $("#playerOneRollBtn").click(function(){
    function diceRoll() {
      return Math.floor(Math.random() * Math.floor(6))+1;
    }
    var diceValue = diceRoll();
    var accumulatorVar = (accumulator, currentValue) => accumulator + currentValue;
    //Dice Logic
    if (diceValue === 1) {
      playerOneTurnBank = []
      console.log("got a one and cleared the array");
    }
    else {
      playerOneTurnBank.push(diceValue);
      playerOneTurnBank.reduce(accumulatorVar);
      var result = playerOneTurnBank.reduce(accumulatorVar);
        playerOneTurnBank = []
      playerOneTurnBank.push(result);
      console.log(diceValue);
      console.log(playerOneTurnBank);
    }
  });
});
//player two

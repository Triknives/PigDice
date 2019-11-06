var playerOneBank = []
var playerOneTurnBank = []

function diceRoll() {
  return Math.floor(Math.random() * Math.floor(6))+1;
}

var accumulatorVar = (accumulator, currentValue) => accumulator + currentValue;




//player one
$(document).ready(function(){
  $("#playerOneRollBtn").click(function(){
    var diceValue = diceRoll();
    //display num
    $("#diceGen").text(diceValue);
    if (diceValue === 1) {
      playerOneTurnBank = [0]
      $("#pOneTurnBank").text(playerOneTurnBank);
      console.log("got a one and cleared the array");
      console.log(playerOneTurnBank);
      //clear turnbank
    }
    else {
      playerOneTurnBank.push(diceValue);
      playerOneTurnBank.reduce(accumulatorVar);
      var result = playerOneTurnBank.reduce(accumulatorVar);
      playerOneTurnBank = []
      playerOneTurnBank.push(result);
      $("#pOneTurnBank").text(playerOneTurnBank);
      console.log(diceValue);
      console.log(playerOneTurnBank);
    }
    console.log("test");

  });

  $("#PlayerOneHoldBtn").click(function(){
    playerOneBank.push(playerOneTurnBank[0])
    console.log(playerOneBank);
    playerOneBank.reduce(accumulatorVar);
    var resultForBank = playerOneBank.reduce(accumulatorVar);
    playerOneBank = []
    playerOneBank.push(resultForBank);
    playerOneTurnBank = []
    console.log(playerOneBank)
      $("#pOneBank").text(playerOneBank);


  });
});
//player two

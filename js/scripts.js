var playerOneBank = []
var playerOneTurnBank = []
var playerTwoBank = []
var playerTwoTurnBank = []


function diceRoll() {
  return Math.floor(Math.random() * Math.floor(6))+1;
}

var accumulatorVar = (accumulator, currentValue) => accumulator + currentValue;




//player one
$(document).ready(function(){
  $("#playerTwoHoldBtn").hide();
  $("#playerTwoRollBtn").hide();

  playerOneBank = [0]
  $("#pOneBank").text(playerOneBank);
  playerOneTurnBank = [0]
  $("#pOneTurnBank").text(playerOneTurnBank);
  playerTwoBank = [0]
  $("#pTwoBank").text(playerTwoBank);
  playerTwoTurnBank = [0]
  $("#pTwoTurnBank").text(playerTwoTurnBank);
  $("#playerOneRollBtn").click(function(){
    var diceValue = diceRoll();
    //display num
    $("#diceGen").text(diceValue);
    if (diceValue === 1) {
      playerOneTurnBank = [0]
      $("#pOneTurnBank").text(playerOneTurnBank);
      $("#playerTwoHoldBtn").show();
      $("#playerTwoRollBtn").show();
      $("#playerOneHoldBtn").hide();
      $("#playerOneRollBtn").hide();

      //clear turnbank
    }
    else {
      playerOneTurnBank.push(diceValue);
      playerOneTurnBank.reduce(accumulatorVar);
      var result = playerOneTurnBank.reduce(accumulatorVar);
      playerOneTurnBank = []
      playerOneTurnBank.push(result);
      $("#pOneTurnBank").text(playerOneTurnBank);
    }
  });

  $("#playerOneHoldBtn").click(function(){
    playerOneBank.push(playerOneTurnBank[0])

    playerOneBank.reduce(accumulatorVar);
    var resultForBank = playerOneBank.reduce(accumulatorVar);
    playerOneBank = []
    playerOneBank.push(resultForBank);
    playerOneTurnBank = []
    playerOneTurnBank = [0]
    $("#pOneTurnBank").text(playerOneTurnBank);
    if (playerOneBank[0] >= 100) {
      alert("!!You Win!!")
      location.reload();
    }
      $("#pOneBank").text(playerOneBank);
      $("#playerTwoHoldBtn").show();
      $("#playerTwoRollBtn").show();
      $("#playerOneHoldBtn").hide();
      $("#playerOneRollBtn").hide();
  });


//player two
$("#playerTwoRollBtn").click(function(){
  var diceValue = diceRoll();
  console.log("woot");
  //display num
  $("#diceGen").text(diceValue);
  if (diceValue === 1){
    playerTwoTurnBank = [0]
    $("#pTwoTurnBank").text(playerTwoTurnBank);
    $("#playerTwoHoldBtn").hide();
    $("#playerTwoRollBtn").hide();
    $("#playerOneHoldBtn").show();
    $("#playerOneRollBtn").show();

    //clear turnbank
  }
  else {
    playerTwoTurnBank.push(diceValue);
    playerTwoTurnBank.reduce(accumulatorVar);
    var result = playerTwoTurnBank.reduce(accumulatorVar);
    playerTwoTurnBank = []
    playerTwoTurnBank.push(result);
    $("#pTwoTurnBank").text(playerTwoTurnBank);
  }
});

$("#playerTwoHoldBtn").click(function(){
  playerTwoBank.push(playerTwoTurnBank[0])

  playerTwoBank.reduce(accumulatorVar);
  var resultForBank = playerTwoBank.reduce(accumulatorVar);
  playerTwoBank = []
  playerTwoBank.push(resultForBank);
  playerTwoTurnBank = []
  playerTwoTurnBank = [0]
  $("#pTwoTurnBank").text(playerTwoTurnBank);
    if (playerTwoBank[0] >= 100) {
      alert("!!You Win!!")
      location.reload();
    }

    $("#pTwoBank").text(playerTwoBank);
    $("#playerTwoHoldBtn").hide();
    $("#playerTwoRollBtn").hide();
    $("#playerOneHoldBtn").show();
    $("#playerOneRollBtn").show();
});
});

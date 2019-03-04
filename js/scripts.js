// Business Interface Logic
function Player (first,last) {
  this.firstName=first;
  this.secondName=last;
}
Player.prototype.fullName=function() {
  return this.firstName+ " " + this.secondName;
}
//User Interface Logic
function roll1() {
  var diceScore=Math.floor(Math.random() * 6) +1;
  if (diceScore!==1) {
    score1+=diceScore;
  }else  {
    score1=0;
  }
  result1.innerHTML=("You have rolled " + diceScore);
  points1.innerHTML=(score1);
}
function roll2() {
  var diceScore=Math.floor(Math.random() * 6) +1;
  if (diceScore!=1) {
    score2+=diceScore
  }else {
    score2=0;
  }
  result2.innerHTML=("You have rolled " + diceScore)
  points2.innerHTML=(score2)
}
function hold1() {
  total1+=score1
 alert("You have " +total1 +" points")
 if (total1==100){
   alert("You have won the game!Hurray!")
 }else {
   roll2()
 }

}

$(document).ready(function() {
  $("#roll1").click(function() {
    roll1();
  });
  $("#roll2").click(function() {
    roll2();
  })
  $("form#new-player").submit(function(event) {
    event.preventDefault();

    $(".login").hide();
    $(".game").show();

    var inputtedFirstName1 = $("input#new-first-name1").val();
    var inputtedSecondName1 = $("input#new-second-name1").val();
    var inputtedFirstName2=$("input#new-first-name2").val();
    var inputtedSecondName2=$("input#new-second-name2").val();

    var newPlayer1 = new Player(inputtedFirstName1, inputtedSecondName1);
    var newPlayer2=new Player(inputtedFirstName2, inputtedSecondName2);

    $("input#new-first-name1").val("");
    $("input#new-second-name1").val("");
    $("input#new-first-name2").val("");
    $("input#new-second-name2").val("");
      $(".first-name1").text(newPlayer1.firstName);
      $(".second-name1").text(newPlayer1.secondName);
      $(".first-name2").text(newPlayer2.firstName);
      $(".second-name2").text(newPlayer2.secondName);
  });
});

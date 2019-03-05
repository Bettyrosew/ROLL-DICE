// Business Interface Logic
function Player (first,last) {
  this.firstName=first;
  this.secondName=last;
}

Player.prototype.fullName=function() {
  return this.firstName+ " " + this.secondName;
}

function play2() {
  document.getElementById("roll1").disabled=true;
  document.getElementById("roll2").disabled=false;
}
function play1() {
  document.getElementById("roll1").disabled=false;
  document.getElementById("roll2").disabled=true;
}

var score1=0;
var score2=0;
//User Interface Logic
$(document).ready(function() {
  $("#roll1").click(function() {
    roll1();
  });
  function roll1() {
    var diceScore=Math.floor(Math.random() * 6) +1;
    result1.innerHTML=("You have rolled " + diceScore);
    if (diceScore!==1) {
      score1+=diceScore;
    }else  {
      score1=0;
      play2();
    }
    points1.innerHTML=(score1);
  }

  $("#roll2").click(function() {
    roll2();
  });
  function roll2() {
    var diceScore=Math.floor(Math.random() * 6) +1;
    result2.innerHTML=("You have rolled " + diceScore);
    if (diceScore!=1) {
      score2+=diceScore;
    }else {
      score2=0;
      play1();
    }
    points2.innerHTML=(score2);
  }

  $("#hold1").click(function() {
    hold1();
  });
  function hold1() {
    alert("You have " +score1 +" points");
    score1=0;
    if (score1==100){
      alert("You have won the game!Hurray!");
    }else {
      play2();
    }
  }

  $("#hold2").click(function() {
    hold2();
  });
  function hold2() {
    alert("You have " +score2 +" points");
    score2=0;
    if (score2==100){
      alert("You have won the game!Hurray!");
    }else {
      play1();
    }

  }
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

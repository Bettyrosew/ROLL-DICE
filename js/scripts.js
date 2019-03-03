$(document).ready(function() {
  $('button#submit').click(function() {
    $(".login").hide();
    $(".game").show();
  });
});
//User Interface Logic
function roll1() {
  var r1=Math.floor(Math.random() * 6) +1;
  var diceScore=r1;
  if (diceScore!=1) {
    score1+=diceScore
  }else  {
    score1=0;
  }
  result1.innerHTML=("You have rolled " + r1)
  points1.innerHTML=("Your total points are " + score1)
}
function roll2() {
  var r2=Math.floor(Math.random() * 6) +1;
  var diceScore=r2;
  if (diceScore!=1) {
    score2+=diceScore
  }else {
    score2=0;
  }
  result2.innerHTML=("You have rolled " + r2)
  points2.innerHTML=("Your total points are " + score2)
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

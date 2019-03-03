function roll1() {
  var r1=Math.floor(Math.random() * 6) +1;
  var diceScore=r1;
  if (diceScore!=1) {
    total1+=diceScore
  }else  {
    total1=0;
  }
  result1.innerHTML=("You have rolled " + r1)
  points1.innerHTML=("Your total points are " + total1)
}
function roll2() {
  var r2=Math.floor(Math.random() * 6) +1;
  var diceScore=r2;
  if (diceScore!=1) {
    total2+=diceScore
  }else {
    total2=0;
  }
  result2.innerHTML=("You have rolled " + r2)
  points2.innerHTML=("Your total points are " + total2)
}

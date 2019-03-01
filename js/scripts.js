function roll1() {
  var result1=document.getElementById("result1")
  var r1=Math.floor(Math.random() * 6) +1;
  var diceScore=r1;
  result1.innerHTML=r1
  status.innerHTML=("You rolled"+diceScore)
}
function roll2() {
  var result2=document.getElementById("result2")
  var r2=Math.floor(Math.random() * 6) +1;
  var diceScore=r2;
  result2.innerHTML=r2
  status.innerHTML=("You rolled"+diceScore)
}

function rolldiceSumProb(sumOfDice, countDice){
    var dice = [1,2,3,4,5,6];
    var allEvents = Math.pow(dice.length, countDice);
    var sum = 0;
    var count = 0;
      for (var j = 0; j < dice.length; j++) {
        for (var i = 0; i < dice.length - 1; i++) {
          sum = dice[j] + dice[i + 1];
        //  console.log(dice[j] + " + " +  dice[i + 1] +  " = " + sum);
          if (sum == sumOfDice) count++;
        }
      }
      //console.log(count);
    return count / allEvents;
}

console.log(rolldiceSumProb(8, 2));

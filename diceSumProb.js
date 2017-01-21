/* --- good --- */
function rolldiceSumProb(sumOfDice, countDice){

    function events(sumOfDice, countDice) {
      if (countDice == 0) return sumOfDice == 0 ? 1 : 0;
      if (sumOfDice <= 0) return 0;
      var count = 0;
      for (var i = 1; i <= 6; i++) count += events(sumOfDice - i, countDice - 1);
      return count;
    }

    return events(sumOfDice, countDice) / Math.pow(6, countDice);
}

console.log(rolldiceSumProb(8,3));

/* --- bad --- */
function rolldiceSumProb(sumOfDice, countDice){
    var allEvents = Math.pow(6, countDice);
    var sum = 0;
    var count = 0;
    var dice = [1,2,3,4,5,6];

    if (countDice == 2) {
      for (var j = 0; j < dice.length; j++) {
      for (var i = 0; i < dice.length; i++) {
        sum = dice[j] + dice[i];
        if (sum == sumOfDice) count++;
      }
      }
    }

    if (countDice == 3) {
        for (var k = 0; k < dice.length; k++) {
        for (var j = 0; j < dice.length; j++) {
        for (var i = 0; i < dice.length; i++) {
          sum = dice[k] + dice[j] + dice[i];
          if (sum == sumOfDice) count++;
        }
        }
        }
    }

    if (countDice == 4) {
      for (var m = 0; m < dice.length; m++) {
      for (var k = 0; k < dice.length; k++) {
      for (var j = 0; j < dice.length; j++) {
      for (var i = 0; i < dice.length; i++) {
        sum = dice[m] + dice[k] + dice[j] + dice[i];
        if (sum == sumOfDice) count++;
      }
      }
      }
      }
    }

    if (countDice == 5) {
      for (var u = 0; u < dice.length; u++) {
      for (var m = 0; m < dice.length; m++) {
      for (var k = 0; k < dice.length; k++) {
      for (var j = 0; j < dice.length; j++) {
      for (var i = 0; i < dice.length; i++) {
        sum = dice[u] + dice[m] + dice[k] + dice[j] + dice[i];
        if (sum == sumOfDice) count++;
      }
      }
      }
      }
      }
    }
    return count / allEvents;
}


console.log(rolldiceSumProb(8,3));

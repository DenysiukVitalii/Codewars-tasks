'use strict';

function getPercentage(sent, limit = 1000){
  if (sent == 0) return "No e-mails sent";
  if (sent >= limit) return "Daily limit is reached";
  return parseInt(sent/limit*100) + "%";
}
console.log(getPercentage(101, 1000));

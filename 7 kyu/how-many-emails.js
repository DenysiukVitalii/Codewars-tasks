'use strict';

function getPercentage(sent, limit = 1000){
  if (sent == 0) return "No e-mails sent";
  if (sent >= limit) return "Daily limit is reached";
  return parseInt(sent/limit*100) + "%";
}

function getPercentage(sent, limit = 1000){
  return sent === 0 ? 'No e-mails sent' : sent >= limit ? 'Daily limit is reached' : Math.floor(sent/limit*100) + '%';
}
console.log(getPercentage(101, 1000));

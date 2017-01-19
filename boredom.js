function boredom(staff){
 var result = 0;
 for (key in staff) {
    switch (staff[key]){
     case 'accounts': {result += 1; break;}
     case 'finance': {result += 2; break;}
     case 'canteen': {result += 10; break;}
     case 'regulation': {result += 3; break;}
     case 'trading': {result += 6; break;}
     case 'change': {result += 6; break;}
     case 'IS': {result += 8; break;}
     case 'retail': {result += 5; break;}
     case 'cleaning': {result += 4; break;}
     case 'pissing about': {result += 25; break;}
    }
 }
  return result <= 80 ? 'kill me now' : result > 80 && result < 100 ?
  'i can handle this':'party time!!';

}

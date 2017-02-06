"use strict";

function textAlign(str, n) {
	let words = str.split(' ');
	let result = '';
	let curL = 0;
	let curArr = [];

	for (let i = 0, countW = words.length; i < countW; i++) {
		let word = words[i];
		let wordL = word.length;
		if (curL + wordL + 1 <= n) {
			curArr.push(word + ' ');
			curL += wordL + 1;
			if (i == words.length - 1) result += curArr.join('');
		} else if (curL + wordL <= n) {
			curArr.push(word);
			curL += wordL;
			if (i == words.length - 1) result += curArr.join('');
		} else {
		 	curArr.push(curArr.pop().slice(0, -1));
			let countSpacesInGap = n - curL;
			let countGaps = curArr.length - 1;
			let numberWord = 0;

			while(countSpacesInGap > 0) {
				curArr[numberWord] += ' ';
				countSpacesInGap--;
				numberWord++;
				if(numberWord >= curArr.length - 1) numberWord = 0;
			}
			result += curArr.join('') + '\n';
			curArr.length = 0;
			curL = 0;
			i--;
		}
	};
	return result;
}

console.log( textAlign("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti ipsum velit amet dignissimos quam. Perferendis qui nemo, dolor itaque, atque ad voluptas quisquam eaque sint illum repellendus cumque. Obcaecati praesentium assumenda modi, harum eaque asperiores laboriosam vitae tempore reprehenderit aliquam, ullam omnis atque eius quasi itaque perspiciatis tempora quam sequi! lorem", 20) );

const generate = (totalChar, option) => {
	if (typeof option === "undefined" || option === null) option = {};
	if (typeof option.inclNums === "undefined" || option.inclNums === null) option.inclNums = false;
	if (typeof option.inclLower === "undefined" || option.inclLower === null) option.inclLower = true;
	if (typeof option.inclUpper === "undefined" || option.inclUpper === null) option.inclUpper = false;
	if (typeof option.inclSpecial === "undefined" || option.inclSpecial === null) option.inclSpecial = false;
	if (totalChar < 1) return '';
	let genStr = '';
	for (let i = 0;i < totalChar;i++) {
		let rate = Math.floor(Math.random() * 4);
		switch(rate) {
			case 0:
				if (option.inclUpper) {
					genStr += String.fromCharCode(Math.floor(Math.random() * 26) + 65);
				} else if (option.inclNums) {
					genStr += Math.floor(Math.random() * 10).toString();
				} else if (option.inclLower) {
					genStr += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
				} else if (option.inclSpecial) {
					genStr += Math.floor(Math.random() * 2) === 1 ?
					String.fromCharCode(Math.floor(Math.random() * 15) + 33) :
					String.fromCharCode(Math.floor(Math.random() * 26) + 97);
				}
				break;
			case 1:
				if (option.inclLower) {
					genStr += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
				} else if (option.inclSpecial) {
					genStr += Math.floor(Math.random() * 2) === 1 ?
					String.fromCharCode(Math.floor(Math.random() * 15) + 33) :
					String.fromCharCode(Math.floor(Math.random() * 26) + 97);
				} else if (option.inclNums) {
					genStr += Math.floor(Math.random() * 10).toString();
				} else if (option.inclUpper) {
					genStr += String.fromCharCode(Math.floor(Math.random() * 26) + 65);
				}
				break;
			case 2:
				if (option.inclNums) {
					genStr += Math.floor(Math.random() * 10).toString();
				} else if (option.inclUpper) {
					genStr += String.fromCharCode(Math.floor(Math.random() * 26) + 65);
				} else if (option.inclLower) {
					genStr += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
				} else if (option.inclSpecial) {
					genStr += Math.floor(Math.random() * 2) === 1 ?
					String.fromCharCode(Math.floor(Math.random() * 15) + 33) :
					String.fromCharCode(Math.floor(Math.random() * 26) + 97);
				}
				break;
			case 3:
				if (option.inclSpecial) {
					genStr += Math.floor(Math.random() * 2) === 1 ?
					String.fromCharCode(Math.floor(Math.random() * 15) + 33) :
					String.fromCharCode(Math.floor(Math.random() * 26) + 97);
				} else if (option.inclUpper) {
					genStr += String.fromCharCode(Math.floor(Math.random() * 26) + 65);
				} else if (option.inclLower) {
					genStr += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
				} else if (option.inclNums) {
					genStr += Math.floor(Math.random() * 10).toString();
				}
		}
	}
	rt('.text').val(genStr);
}

function copy() {
	let copyTextarea = document.querySelector('.text');
	copyTextarea.focus();
	copyTextarea.select();
	document.execCommand('copy');
}
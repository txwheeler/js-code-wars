//https://www.codewars.com/kata/5412509bd436bd33920011bc
function maskify(cc) {
	return cc.replace(/\w(?=\w{4})/g, "#");
}
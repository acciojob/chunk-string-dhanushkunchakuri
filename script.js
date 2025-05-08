function stringChop(str, size) {
	if(str.length === 0){
		return [];
	}
  let res = [];
  let n = str.length;
  let i = 0;
  while (i < n) {
    res.push(str.substr(i, size));
    i += size;
  }
  return res;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));

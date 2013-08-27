#!/usr/bin/env node

var primen = function(n){
	var i;
	if(n == 2){return n;}else{
		for(i = 2; i < n; i++){
			if(((n % i) == 0) && (i != n)){return primen(n + 1);}
			if(i == (n - 1)){return n;}
		}
	}
};

var firstprime = function(k){
	var i = 2;
	var j = 2;
	var arr = [];
	for(i; i < k+1; i++){
		arr.push(primen(j));
		j = primen(j);
		j++;
	}
	return arr;
};

var pmt = function(arr){
	return arr.join(" ");
};

var k = 100;
console.log("firstprime(" + k + ")");
console.log(pmt(firstprime(k)));

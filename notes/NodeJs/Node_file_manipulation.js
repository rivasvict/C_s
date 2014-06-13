	//Require file system management module
	var fs = require('fs');
	//Create an empty array to store all of the lines
	//This should be a global variable because that array is going to be set from a callback function
	linesArray = [];

	//Define a function for reading lines
	function readLines(input, func){
		//Remaining is the variable that is going to carry
		//the remaing string to process.
		var remaining = '';
		
		//Pass data as buffer of the read file to the handler (the function)
		input.on('data',function(data){

			//data at this point represents the buffer of the file we are working on
			//Appending data to a string
			remaining = data.toString();

			//index (in tis case) will be the number position at the end of the first line
			var index = remaining.indexOf('\n');
			while(index > -1){
				//This is the current line, a substring starting from 0 to the end of the first line as defined
				//in index variable
				var line = remaining.substring(0, index);
				//This positiones the remaining begining to the next line
				var remaining = remaining.substring(index + 1);
				func(line);
				index = remaining.indexOf('\n');
			}
		});

		//At the end of the buffer we ned to get the last part of it
		input.on('end', function(){
			if(remaining.length > 0){
				func(remaining);
			}
		});
	}

	function func(data){
		//Do something with lines that come from data.
		//In this case we are pushin each line to the array
		linesArray.push(data);
	}

	var input = fs.createReadStream(__dirname + '/node_file_manipulation.md');
	var file = readLines(input,func);

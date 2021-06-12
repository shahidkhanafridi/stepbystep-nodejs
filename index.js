const fs = require('fs');

//Creating new file
//fs.writeFileSync('read.txt',"Welcome to NodeJS tutorial");

// above line commented as we already created the file with FileStream,
// Now I need to add more text to the file, this can be doce using appednFile function as below:

fs.appendFileSync('read.txt'," Another line of text need to be added.");

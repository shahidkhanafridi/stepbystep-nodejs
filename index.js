const fs = require('fs');

//Creating new file
//fs.writeFileSync('read.txt',"Welcome to NodeJS tutorial");

// above line commented as we already created the file with FileStream,
// Now I need to add more text to the file, this can be doce using appednFile function as below:

//fs.appendFileSync('read.txt'," Another line of text need to be added.");

// commented above code as we already the additiona text to file by using append function

// now we need to read data from file.

const buf_data = fs.readFileSync('read-write.txt'); // it will just read buffered data, which will be encrypted 
console.log(buf_data); // printing buffered data on console.
org_data = buf_data.toString();// converting buffered data to plain text by using toString extension method.
console.log(org_data); // printing actual human/end-user readable data
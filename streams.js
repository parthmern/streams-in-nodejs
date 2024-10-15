const fs = require("fs");

const writableStream = fs.createWriteStream('output.txt');

// Write some data to the file
writableStream.write("Hello, world!\n");
writableStream.write("This is a test.\n");

// Signal that writing is complete
writableStream.end("Finished writing.");

// Handle the 'finish' event to know when the writing is done
writableStream.on('finish', () => {
    console.log("All data written to file");
});

// Handle any errors
writableStream.on('error', (err) => {
    console.error("Error writing to file:", err);
});

// ===================================================================================
// ===================================================================================


// Create a readable stream to read the file 'largeFile.txt' in 'utf-8' encoding
const readableStream = fs.createReadStream('largeFile.txt', 'utf-8');

// Event listener for the 'data' event, which triggers whenever a chunk of data is available
readableStream.on('data', (chunk) => {
    console.log("received chunk: ", chunk);
});

// Event listener for the 'end' event, which triggers when the entire file has been read
readableStream.on('end', () => {
    console.log("Finished reading file");
});

// Event listener for the 'error' event, which triggers if an error occurs while reading the file
readableStream.on('error', (err) => {
    console.log("Got error =>", err);
});



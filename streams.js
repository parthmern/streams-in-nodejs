const fs = require("fs");
const { Transform } = require("stream");

// First part: Writing data independently to 'output.txt'
const writableStream = fs.createWriteStream('output.txt');

// Write some data to the file
writableStream.write("Hello, world!\n");
writableStream.write("This is a test.\n");

// Signal that writing is complete
writableStream.end("Finished writing.");

// Handle the 'finish' event to know when the writing is done
writableStream.on('finish', () => {
    console.log("Initial data written to file");
});

// Handle any errors
writableStream.on('error', (err) => {
    console.error("Error writing to file:", err);
});

// ===================================================================================

// Second part: Using streams with piping and transformation

// Create a readable stream to read the file 'largeFile.txt' in 'utf-8' encoding
const readableStream = fs.createReadStream('largeFile.txt', {
    encoding: 'utf-8',
    highWaterMark: 1 * 1024 // 1 KB chunks
});

// Create a new writable stream for the transformed data
const transformedWritableStream = fs.createWriteStream('transformedOutput.txt');

// Define a transform stream to convert the text to uppercase
const upperCaseTransform = new Transform({
    transform(chunk, encoding, callback) {
        console.log("Transforming chunk...");
        this.push(chunk.toString().toUpperCase());
        callback();
    }
});

// Use piping to connect the streams in order == PIPING
readableStream.pipe(upperCaseTransform).pipe(transformedWritableStream);    // here pipe underthehood call write() to transformedWritableStream

// Handle events
transformedWritableStream.on('finish', () => {
    console.log("Transformed data written to 'transformedOutput.txt'");
});

readableStream.on('end', () => {
    console.log("Finished reading 'largeFile.txt'");
});

readableStream.on('error', (err) => {
    console.error("Error reading 'largeFile.txt':", err);
});

transformedWritableStream.on('error', (err) => {
    console.error("Error writing to 'transformedOutput.txt':", err);
});

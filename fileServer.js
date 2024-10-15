const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

    if (req.url === "/") {

        // Create a readable stream with a highWaterMark of 1 KB
        const readableStream = fs.createReadStream('largeFile.txt', {
            encoding: 'utf-8',
            highWaterMark: 1 * 1024 // 1 KB per chunk   // DONOT SET it just for understanding purpose
        });
        // Pipe the readable stream directly to the response
        readableStream.pipe(res);


        
        readableStream.on('data', (chunk) => {
            console.log("Received chunk =============================================================", 
            chunk);
        });

        readableStream.on('end', () => {
            console.log("Finished reading file");
        });

        
    } 

});

// Start the server on port 3000
server.listen(3000, () => {
    console.log("Server running at http://localhost:3000/");
});

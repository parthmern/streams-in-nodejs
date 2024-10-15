# Streams in node js

- collection of data - stream
- streams might not availabe all at once
- we are going to divide the big data in small chunks and then send it

<br/>

- move data from a source to a destination in a bit-by-bit (or let’s say, in chunks)
- We have two buckets named source and destination. The source bucket is full of water, while the destination bucket is empty. We cannot move these two buckets from their spots, however, we have a third movable bucket called **buffer**. We can use this buffer to transfer water from source to destination.
- Now, in the simplest of approach, let’s say, we transfer all the water from source to the buffer bucket. We carry this buffer to the destination, and then transfer everything from buffer to destination. However, there is an alternate approach as well, if we have a hose pipe called stream. We can connect source and destination with this stream, and then transfer water from source to destination in small amounts. This is what streams enable us with in NodeJS.


<br/>

- streams are powerful way to handle I/O operations effectively

## types
1) readable stream
2) writable stream

3) transform stream
4) duplex stream

- assume u have largeFile.txt and u have to convert all data to uppercase and then put them into outputFile.txt
- reading data from file is readable and then converting to uppercase is transform stream and then writing into file is writable stream
- duplex stream is sockets example 

<br/>
- good things = machine par load nhi ayega while working with big files

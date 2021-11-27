/*
* The starting point file for the API
*
*
*
*/

// Dependencies
const http = require('http');
const url = require('url');
const StringDecoder = require('string_decoder').StringDecoder;

// initiate the server
const server = http.createServer((req, res) => {

    // Parse the URL
    const parsedUrl = url.parse(req.url, true);
    // Get the path
    const path = parsedUrl.pathname.replace(/^\/+|\/+$/g, '');

    // Get the query strings 
    const queryObject = parsedUrl.query;

    // Get the http method
    const method = req.method.toLowerCase();

    // Get headers
    const reqHeaders = req.headers;


    // Get the payload, if any
    const decoder = new StringDecoder('utf8');
    let buffer = '';
    req.on('data', (data) => {
        buffer += decoder.write(data);
    });
    req.on('end', () => {
        buffer += decoder.end();
        res.end('success');
        console.log('data: ', buffer)
    });
});

// Start the server 
server.listen(3000, () => {
    console.log('Server is listening on localhost:3000')
});

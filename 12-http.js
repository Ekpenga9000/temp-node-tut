// HTTP Module

const http = require('http');

// creating our server

const server = http.createServer((req, res) => {
    // checking for the homepage
    if (req.url === '/') {
        res.end('Welcome to our home page. This is my first home page!!!')
    }

    // checking for the about page

    if (req.url === '/about') {
        res.end('Here is our short history')
    }

    // checking for the 404 issue
    res.end(`
        <h1>Oops!</h1>
        <p> We can't seem to find the page you're looking for... </p>
        <a href="/">Back to home</a>

    `)

})

// creating the port the server will be listening to.

server.listen(5000)
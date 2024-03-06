const express = require('express');
const {createServer} = require('http');
const {Server} = require('socket.io');

const app = express();
const server = createServer(app);

const io = new Server(server, {
    cors:{
        origin: 'https://localhost:3000',
    }
});


module.exports = {app, server};


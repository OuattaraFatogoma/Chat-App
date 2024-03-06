const express = require('express');
const {createServer} = require('http');
const {Server} = require('socket.io');
const connection = require('../database/db');

const app = express();
const server = createServer(app);

const io = new Server(server, {
    cors:{
        origin: 'http://localhost:3000',
        credentials: true
    }
});

let usersConnected = [];

io.on("connection", (socket)=>{
    const userId = socket.handshake.query.user_id;

    if(userId !== "undefined") usersConnected.push(userId);

    io.emit("getOnlineUsers", usersConnected);

    socket.on("disconnect", ()=>{
        usersConnected = usersConnected?.filter(userFilteredId => userFilteredId !== userId);
        io.emit("getOnlineUsers", usersConnected);
    })
})

module.exports = {app, server};


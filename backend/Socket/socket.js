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

const getReceiverSocketId = (receiverId) => {
    return userSocketsId[receiverId];
}

const userSocketsId = {};

io.on("connection", (socket)=>{
    const userId = socket.handshake.query.user_id;

    if(userId !== "undefined") userSocketsId[userId] = socket.id;

    io.emit("getOnlineUsers", Object.keys(userSocketsId));

    socket.on("disconnect", ()=>{
        delete userSocketsId[userId];
        io.emit("getOnlineUsers", Object.keys(userSocketsId));
    })
})

module.exports = {app, server, io, getReceiverSocketId};


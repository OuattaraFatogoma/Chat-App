require('dotenv').config();
require('express-async-errors');
const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');


// imports routes
const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');
const messageRoutes = require('./routes/message.routes');

// import middlewares
const errorHandlerMiddleware = require('./middleware/errorHandler');
const routeNotFoundMiddleware = require('./middleware/routeNotFound');

// constants
const {app,server }= require('./Socket/socket');
const port = process.env.PORT || 5000;
const db = require('./database/db');


// middleware
// app.options('*', cors());
app.use(cors({
    credentials: true,
    origin: "http://localhost:3000",
    credentials: true,
}));
app.use(express.json());
app.use(cookieParser());


// routes 
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/messages', messageRoutes);

app.use(routeNotFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = async () => {
    try {
        await db.query("SELECT 1");
        console.log("db connected successfully");
        server.listen(port, console.log(`server is listening on port ${port}`));
    } catch (error) {
        console.error(error);
    }
}

start();
# Chat App

This is a real time chat application.

## Why ?
The purpose of this chat application is to apply my new knowledge. 

## Technologies Used:
### Fronted:
1. REACT JS / REACT Router
1. Material UI and CSS for styling
1. Notistack to inform the user 
1. socket.io to enable real time communication

### Backend
1. NodeJS / Express
1. MYSQL Database
1. mysql2 to interact with MySQL database
1. socket.io to enable real time communication
1. bcryptjs to hash users password before storing them
1. jsonwebtoken to generate a json web token for user authentication purposes
1. cookie-parser to parse cookies
1. dotenv to access the environment variables
1. express-async-errors to handle errors instead of using try-catch
1. cors to enable CORS

## All available routes
### User

``` 
fields:
{
    user_id: number,
    username: String,
    password: String,
    genders: String,
    profile_picture: String,
    created_at: Date,
    updated_at: Date
}
```
#### GET
* /api/v1/users (get all users)
* /api/v1/users/:id (get a single user)

#### POST

#### PATCH

#### DELETE
* /api/v1/users/:id (delete user)


### Authentication

#### GET

#### POST
* /api/v1/auth/register (register a user)
* /api/v1/auth/login (login)
* /api/v1/auth/logout (logout)

#### PATCH

#### DELETE


### Messages

``` 
fields:
{
    message_id: number,
    sender_id: number,
    conversation_id: number,
    message_text: String,
    created_at: Date,
}
```
#### GET
* /api/v1/messages/:receiverId (get all messages between user and the receiver)

#### POST
* /api/v1/messages/send/:userToChatId (send user message to the other user whith whom he communicates)

#### PATCH

#### DELETE

### Sockets.io "routes"

#### getOnlineUsers
 `` io.emit("getOnlineUsers", OnlineUserArray); ``

#### newMessages 
 `` io.emit("newMessage", newMessage); ``

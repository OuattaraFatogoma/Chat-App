const db = require('../database/db');

const sendMessage = async (req, res) => {
    const senderId = req.userId;
    const {text} = req.body;
    const {id: receiverId} = req.params;

    // verify that the receiver and the sender exist
    const [[sender]] = await db.query(`SELECT username FROM user where user_id =${senderId}`);
    const [[receiver]] = await db.query(`SELECT username FROM user where user_id =${receiverId}`);
    if(!receiver || !sender) return res.status(404).send({ message: "One or both users not found"});

    // fetch their conversation information if the conversation exist
    const conversationName = `${sender.username}_${receiver.username}`;
    let [[conversation]] = await db.query(`SELECT * FROM conversation 
                                WHERE conversation_name = "${conversationName}" OR conversation_name = "${receiver.username}_${sender.username}"`)
    
    // Create a new conversation if it doesn't already exist
    if(!conversation){
        await db.query(`INSERT into conversation(conversation_name) VALUES ("${conversationName}");`);
        const [[newConversation]] = await db.query(`SELECT * FROM conversation 
                                    WHERE conversation_name = "${conversationName}"`);
        conversation = newConversation;
    } 

    // Store the message in the database 
    const [{affectedRows}] = await db.query(`INSERT into message(sender_id, conversation_Id, message_text) 
                                VALUES ("${senderId}","${conversation.conversation_id}","${text}");`);
    
    if(affectedRows === 0) return res.status(500).send({message: 'Something went wrong'});
    res.send({message: 'Message was successfully sent'});
};

const getMessages = async (req, res) => {
    const senderId = req.userId;
    const {id: userToChatId} = req.params;
    
    // verify that the receiver and the sender exist
    const [[sender]] = await db.query(`SELECT username FROM user where user_id =${senderId}`);
    const [[userToChat]] = await db.query(`SELECT username FROM user where user_id =${userToChatId}`);
    if(!userToChat || !sender) return res.status(404).send({ message: "One or both users not found"});
    
    // fetch their conversation information if the conversation exist
    const conversationName = `${sender.username}_${userToChat.username}`;
    let [[conversation]] = await db.query(`SELECT * FROM conversation 
                                WHERE conversation_name = "${conversationName}" OR conversation_name = "${userToChat.username}_${sender.username}"`)
    
    if(!conversation) return res.status(200).send([]);
    const [messages] = await db.query(`SELECT * FROM message WHERE conversation_Id =${conversation.conversation_id}`);
    res.status(200).json(messages);
}

module.exports = {sendMessage, getMessages};
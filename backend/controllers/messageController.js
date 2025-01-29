// Importing necessary models
import Conversation from "../models/conversationModel.js"; // Model for managing conversations between users
import Message from "../models/messageModel.js"; // Model for managing messages in conversations

// Function to send a message between two users
export const sendMessage = async (req, res) => {
    try {
        // Extracting the message content from the request body
        const { message } = req.body;


        // Extracting the receiver's ID from the route parameters
        const { id: receiverId } = req.params;

        // Extracting the sender's ID from the authenticated user's information in the request object
        const senderId = req.user._id;

        // Check if a conversation already exists between the sender and receiver
        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] } // Both sender and receiver must be participants in the conversation
        });

        // If no conversation exists, create a new one
        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId], // Add sender and receiver as participants in the new conversation
            });
        }

        // Create a new message with the sender's ID, receiver's ID, and the message content
        const newMessage = new Message({
            senderId, // ID of the user sending the message
            receiverId, // ID of the user receiving the message
            message, // The message text
        });

        // If the message is created successfully, add it to the conversation's messages array
        if (newMessage) {
            conversation.messages.push(newMessage._id); // Add the message ID to the conversation
        }

        await Promise.all([conversation.save(), newMessage.save()]);
        // Respond with the newly created message
        res.status(201).json(newMessage);
    } catch (error) {
        // Log the error to the console for debugging
        console.log("Message Controller", error);

        // Respond with an internal server error if something goes wrong
        res.status(500).json({ error: "Internal Server Error" });
    }
};

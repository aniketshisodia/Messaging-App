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

// Controller function to get messages from a conversation
export const getMessage = async (req, res) => {
    try {
        // Extract the userToChatId from the request parameters
        const { id: userToChatId } = req.params;

        // Extract the senderId from the authenticated user (assumed to be added to req.user by middleware)
        const senderId = req.user._id;

        // Query the Conversation collection to find a conversation between the two users
        const conversation = await Conversation.findOne({
            // Use $all to ensure both user IDs are present in the participants array
            participants: { $all: [senderId, userToChatId] },
        })
            // Populate the 'messages' field with the actual message documents
            .populate("messages");

        if (!conversation)
            returnres.status(200).json([]);

        // If a conversation is found, send the messages array as the response
        res.status(200).json(conversation.messages);
    } catch (error) {
        // Log the error for debugging purposes
        console.log("error in getMessage , MessageController", error);

        // Respond with a 500 status code and an error message
        res.status(500).json({ error: "Internal server error" });
    }
};

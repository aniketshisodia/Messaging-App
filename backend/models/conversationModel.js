import mongoose from "mongoose"; // Importing mongoose for creating a schema and model

// Define the schema for a conversation
const conversationSchema = new mongoose.Schema(
    {
        // Array of participants in the conversation
        participants: [
            {
                type: mongoose.Schema.Types.ObjectId, // Each participant is referenced by their ObjectId
                res: "User", // Refers to the "User" model for storing user IDs
            },
        ],

        // Array of messages in the conversation
        messages: [
            {
                type: mongoose.Schema.Types.ObjectId, // Each message is referenced by its ObjectId
                ref: "Message", // Refers to the "Message" model for storing message IDs
                default: [], // Default value is an empty array
            },
        ],
    },
    { timestamps: true } // Automatically adds `createdAt` and `updatedAt` timestamps
);

// Create a model named "Conversation" using the schema
const Conversation = mongoose.model("Conversation", conversationSchema);

// Export the Conversation model to be used in other parts of the application
export default Conversation;

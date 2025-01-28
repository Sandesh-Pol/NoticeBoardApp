import mongoose, { Schema } from "mongoose";

const commentSchema = new Schema(
    {
        content: {
            type: String,
            required: true,
            trim: true
        },
        userId: {
            type: Schema.Types.ObjectId, // Reference to the user who made the comment
            ref: 'User',
            required: true
        },
        noticeId: {
            type: Schema.Types.ObjectId, // Reference to the notice the comment belongs to
            ref: 'Notice',
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now // Automatically set the creation date of the comment
        }
    },
    {
        timestamps: true // Adds `createdAt` and `updatedAt` fields automatically
    }
);

export const Comment = mongoose.model("Comment", commentSchema);

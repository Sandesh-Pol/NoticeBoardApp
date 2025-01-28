import mongoose, { Schema } from "mongoose";

const pollSchema = new Schema(
    {
        question: {
            type: String,
            required: true,
            trim: true
        },
        options: [
            {
                text: {
                    type: String,
                    required: true
                },
                votes: {
                    type: Number,
                    default: 0 // Tracks the number of votes for this option
                }
            }
        ],
        type: {
            type: String, // Defines whether the poll is single or multiple choice
            enum: ['single', 'multiple'],
            default: 'single', // Default to single-choice
            required: true
        },
        createdBy: {
            type: Schema.Types.ObjectId, // The user who created the poll
            ref: 'User',
            required: true
        },
        isActive: {
            type: Boolean, // Indicates if the poll is still active
            default: true
        },
        deadline: {
            type: Date, // Optional deadline for when the poll closes
            required: false
        }
    },
    {
        timestamps: true // Adds createdAt and updatedAt timestamps automatically
    }
);

export const Poll = mongoose.model("Poll", pollSchema);

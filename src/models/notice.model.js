import mongoose, { Schema } from "mongoose";

const noticeSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },
        content: {
            type: String,
            required: true,
            trim: true
        },
        category: {
            type: String,
            enum: ['Assignment Deadlines', 'Exam Dates', 'Timetables', 'Urgent Notices', 'General Announcements'],
            required: true
        },
        type: {
            type: String,
            enum: ['Short', 'Long', 'Special'],
        },
        deadline: {
            type: Date, 
            required: false
        },
        postedBy: {
            type: Schema.Types.ObjectId, 
            ref: 'User',
            required: true
        },
        visibility: {
            type: String,
            enum: ['Public', 'Private'],
            default: 'Public',
            required: true
        },
        department: {
            type: String, 
            required: false,
            trim: true
        },
        isActive: {
            type: Boolean, 
            default: true
        },
        verified: {
            type: Boolean, 
            default: false, 
            required: true
        },
        attachment: {
            type: String,  // Store the file URL or path after upload
        }
    },
    {
        timestamps: true 
    }
);

export const Notice = mongoose.model("Notice", noticeSchema);

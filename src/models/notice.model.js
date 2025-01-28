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
        deadline: {
            type: Date, // For time-bound notices
            required: false
        },
        postedBy: {
            type: Schema.Types.ObjectId, // Reference to the admin user
            ref: 'User',
            required: true
        },
        visibility: {
            type: String,
            enum: ['Public', 'Private'], // Controls access to the notice
            default: 'Public',
            required: true
        },
        department: {
            type: String, // For targeting notices to specific departments/classes
            required: false,
            trim: true
        },
        isActive: {
            type: Boolean, // Whether the notice is currently active
            default: true
        },
        verified: {
            type: Boolean, // Indicates whether the notice is verified
            default: false, // Default to false, requiring verification
            required: true
        },
    },
    {
        timestamps: true // Automatically adds `createdAt` and `updatedAt` fields
    }
);

export const Notice = mongoose.model("Notice", noticeSchema);

const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the enquiry schema
const enquirySchema = new Schema(
    {
        name: {
            type: String,
            lowercase: true,
            required: [true, "Name is required"],
            trim: true,
        },
        phone: {
            type: String,
            required: [true, "Phone number is required"],
            trim: true,
        },
        email: {
            type: String,
            lowercase: true,
            trim: true,
        },
        address: {
            type: String,
            trim: true,
            required: [true, "Address is required"],
        },
        subject: {
            type: String,
            trim: true,
        },
        comment: {
            type: String,
            trim: true,
            required: [true, "Comment is required"],
        },
    },
    { timestamps: true } // Automatically creates 'createdAt' and 'updatedAt'
);

// Create the model
const Enquiry = mongoose.model('Enquiry', enquirySchema);

module.exports = Enquiry;

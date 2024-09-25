const mongoose = require('mongoose');

const travelSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    birthDate: {
        type: Date,
        required: true,
    },
    organizationName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    departureCountry: {
        type: String,
        required: true,
    },
    destinationCountry: {
        type: String,
        required: true,
    },
    departureDateTime: {
        date: {
            type: Date,
            required: true,
        },
        time: {
            type: String,
            required: true,
        }
    },
    returnDateTime: {
        date: {
            type: Date,
            required: true,
        },
        time: {
            type: String,
            required: true,
        }
    },
    classOfService: {
        type: String,
        required: true,
    },
    preferredHotel: {
        type: String,
    },
    preferredAirline: {
        type: String,
    },
    additionalInfo: {
        type: String,
    }
}, {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const travelData = mongoose.model('Travel', travelSchema);
module.exports = travelData;

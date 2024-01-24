const mongoose = require('mongoose');

// Дефиниране на схема за модела на резервацията
const reservationSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true,
    },
    vacation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vacation', 
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    // Други полета, които могат да бъдат нужни за резервацията
});

// Създаване на модел на базата данни
const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;

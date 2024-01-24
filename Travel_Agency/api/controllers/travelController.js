const Reservation = require('../models/reservationModel');

// Контролер за резервация на ваканция
const reserve = async (req, res) => {
    try {
        // Приемане на данните от заявката
        const { userId, vacationId, startDate, endDate } = req.body;

        // Създаване на нова резервация
        const reservation = await Reservation.create({
            user: userId,
            vacation: vacationId,
            startDate,
            endDate,
        });

        // Връщане на успешен отговор
        res.status(201).json({ success: true, reservation });
    } catch (error) {
        // Обработка на грешки и връщане на съобщение за грешка
        console.error(error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
};

module.exports = {
    reserve,
    
};
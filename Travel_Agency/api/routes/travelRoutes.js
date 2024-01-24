const express = require('express');
const travelController = require('../controllers/travelController');
const { authenticateUser } = require('../middlewares/authenticationMiddleware');

const router = express.Router();

// Рута за резервация на ваканция, където се използва middleware за аутентикация
router.post('/reserve', authenticateUser, travelController.reserve);


router.get('/vacations', travelController.getAllVacations);
router.get('/vacations/:id', travelController.getVacationById);

module.exports = router;
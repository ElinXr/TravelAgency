const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const travelRoutes = require('./api/routes/travelRoutes');

const app = express();
const port = process.env.PORT || 3000;

// Свързване с базата данни (променете 'mongodb://localhost:27017/travelAgency' с вашия URI)
mongoose.connect('mongodb://localhost:27017/travelAgency', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Middleware за обработка на JSON заявки
app.use(bodyParser.json());

// Използване на рутите за ваканциите
app.use('/api/travel', travelRoutes);

// Обработка на непознати рути
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

// Обработка на грешки
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message,
        },
    });
});

// Стартиране на сървъра
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
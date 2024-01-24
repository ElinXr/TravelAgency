const authenticateUser = (req, res, next) => {
    
    // Например, проверка на наличието на токен в хедъра на заявката

    const authToken = req.headers.authorization;

    if (!authToken) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    // Проверка на валидността на токена и други логики...

    // Ако всичко е наред, продължаваме към следващия middleware или контролера
    next();
};

module.exports = { authenticateUser };
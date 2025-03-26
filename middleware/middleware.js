
const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    // Récupérer le token depuis le header
    const token = req.header('Authorization');

    // Vérifier si le token est fourni
    if (!token) {
        return res.status(401).json({ message: 'Accès refusé. Aucun token fourni.' });
    }

    try {
        // Vérifier et décoder le token
        const decoded = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET);
        req.user = decoded; // Ajouter l'utilisateur décodé à la requête
        next(); // Passer à la prochaine étape
    } catch (error) {
        res.status(401).json({ message: 'Token invalide.' });
    }
};

module.exports = authMiddleware;

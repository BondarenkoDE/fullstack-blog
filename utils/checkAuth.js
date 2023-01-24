import jwt from 'jsonwebtoken';

export default (req, res, next) => {
    const token = (req.headers.authorization || '').replace(/Bearer\s?/, '');

    if (token) {
        try {
            //расшифровка токена
            const decoded = jwt.verify(token, 'secret123');

            //запись id из токена в req.userId
            req.userId = decoded._id;

            //если всё получилось, то говорим, что можно идти дальше
            next();
        } catch (error) {
            return res.status(403).json({ message: 'Нет доступа' });
        }
    } else {
        return res.status(403).json({ message: 'Нет доступа' });
    }
};

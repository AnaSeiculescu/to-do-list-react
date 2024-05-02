import jwt from 'jsonwebtoken';
import { SECRET_TOKEN_KEY } from '../constants/auth.js';

export function verifyToken(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.sendStatus(401);

    const token = authHeader.split(' ')[1];
    if (!token) return res.sendStatus(401);

    try {
        const userData = jwt.verify(token, SECRET_TOKEN_KEY);
        req.user = userData;
        next();
    } catch (e) {
        console.log(e);
        return res.sendStatus(401);
    }
}

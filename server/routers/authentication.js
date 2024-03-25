import express from 'express';

import { isValidPassword, isValidUsername, waitFor } from '../utils.js';
import { ERROR_400 } from '../constants/errors.js';
import { DATA } from '../data/users.js';

const authRouter = express.Router();

const MOCK_ACCESS_TOKEN = 'sadfkj45h4w35jh43hj5j43bhv';
const TWO_SECONDS = 2000;

authRouter.post('/sign-in', async (req, res) => {
    const { username, password } = req.body;

    await waitFor(TWO_SECONDS);

    const user = DATA.users.find((user) => user.username === username);

    if (!user || user.password !== password) {
        return res.status(400).send(ERROR_400.InvalidCredentials);
    }

    return res.status(200).send({ token: MOCK_ACCESS_TOKEN });
});

authRouter.post('/register', async (req, res) => {
    const { username, password, passwordConfirmation } = req.body;

    await waitFor(TWO_SECONDS);

    if (!isValidUsername(username)) {
        return res.status(400).send(ERROR_400.InvalidUsername);
    }

    if (!isValidPassword(password)) {
        return res.status(400).send(ERROR_400.InvalidPassword);
    }

    if (password !== passwordConfirmation) {
        return res.status(400).send(ERROR_400.PasswordMismatch);
    }

    if (DATA.users.some((user) => user.username === username)) {
        return res.status(400).send(ERROR_400.UsernameExists);
    }

    DATA.users.push({
        username,
        password,
    });

    return res.status(200).send();
});

export { authRouter };

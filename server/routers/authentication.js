import express from 'express';
import ld from 'lodash';
import jwt from 'jsonwebtoken';

import { isValidPassword, isValidUsername, waitFor } from '../utils.js';
import { ERROR_400 } from '../constants/errors.js';
import { SECRET_TOKEN_KEY } from '../constants/auth.js';
import { users } from '../dao/users.js';

const authRouter = express.Router();

const TWO_SECONDS = 2000;

authRouter.post('/sign-in', async (req, res) => {
    const { username, password } = req.body;

    await waitFor(TWO_SECONDS);

    const user = users.getAll().find((user) => user.username === username);

    if (!user || user.password !== password) {
        return res.status(400).send(ERROR_400.InvalidCredentials);
    }

    const token = jwt.sign(ld.pick(user, ['id', 'username']), SECRET_TOKEN_KEY);

    return res.status(200).send({ token });
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

    if (users.getAll().some((user) => user.username === username)) {
        return res.status(400).send(ERROR_400.UsernameExists);
    }

    const id = users.addUser({ username, password });
    const response = { id, username };
    return res.status(201).send(response);
});

export { authRouter };

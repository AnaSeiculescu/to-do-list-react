import express from 'express';

import { waitFor } from '../utils.js';

const authRouter = express.Router();

const MOCK_ACCESS_TOKEN = 'sadfkj45h4w35jh43hj5j43bhv';
const TWO_SECONDS = 2000;

authRouter.post('/sign-in', async (req, res) => {
    const { username, password } = req.body;

    await waitFor(TWO_SECONDS);

    if (username === 'ana' && password === 'mere') {
        res.status(200).send({ token: MOCK_ACCESS_TOKEN });
    } else {
        res.status(401).send({ error: 'Bad username or password' });
    }
});

export { authRouter };

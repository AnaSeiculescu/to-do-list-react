import express from 'express';
import cors from 'cors';

import { authRouter } from './routers/authentication.js';
import { todosRouter } from './routers/todos.js';

const app = express();
const port = 3030;

app.use(cors({ origin: '*' }));
app.use(express.json());

app.use('/auth', authRouter);
app.use('/api/todos', todosRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

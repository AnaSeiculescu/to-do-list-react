import express from 'express';
import cors from 'cors';

import { authRouter } from './routers/authentication.js';
import { todosRouter } from './routers/todos.js';
import { handleError } from './middleware/errorHandler.js';

const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());

app.use('/auth', authRouter);
app.use('/api/todos', todosRouter);

app.use(express.static('dist'));

app.use(handleError);

app.listen(80, () => {
    console.log(`Example app listening on port 80`);
});
app.listen(443, () => {
    console.log(`Example app listening on port 443`);
});

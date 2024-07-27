import http from 'http';
import https from 'https';
import fs from 'fs';
import express from 'express';
import cors from 'cors';
import { config as configEnv } from 'dotenv';

import { authRouter } from './routers/authentication.js';
import { todosRouter } from './routers/todos.js';
import { handleError } from './middleware/errorHandler.js';

configEnv();

const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());

app.use('/auth', authRouter);
app.use('/api/todos', todosRouter);

app.use(express.static('dist'));

app.use(handleError);

// eslint-disable-next-line no-undef
console.log('process.env.APP_ENV', process.env.APP_ENV);

// eslint-disable-next-line no-undef
if (process.env.APP_ENV === 'production') {
    const sslOptions = {
        key: fs.readFileSync('/etc/letsencrypt/live/yourdomain.com/privkey.pem'),
        cert: fs.readFileSync('/etc/letsencrypt/live/yourdomain.com/fullchain.pem'),
    };

    // Start the HTTPS server
    https.createServer(sslOptions, app).listen(443, () => {
        console.log('HTTPS Server running on port 443');
    });

    http.createServer((req, res) => {
        res.writeHead(301, { Location: 'https://' + req.headers['host'] + req.url });
        res.end();
    }).listen(80, () => {
        console.log('HTTP Server running on port 80 and redirecting to HTTPS');
    });
} else {
    app.listen(80, () => {
        console.log(`Example app listening on port 80`);
    });
    app.listen(443, () => {
        console.log(`Example app listening on port 443`);
    });
}

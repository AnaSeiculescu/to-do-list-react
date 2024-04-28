export function handleError(err, req, res, next) {
    console.log('err', err);
    if (err === 403) {
        res.sendStatus(403);
        return;
    }

    if (err === 404) {
        res.sendStatus(404);
        return;
    }

    res.sendStatus(500);
    next();
}

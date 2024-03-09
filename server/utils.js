export function waitFor(milliseconds) {
    return new Promise((res) => {
        setTimeout(() => {
            res();
        }, milliseconds);
    });
}

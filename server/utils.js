import { REGEX } from './constants/regex';

export function waitFor(milliseconds) {
    return new Promise((res) => {
        setTimeout(() => {
            res();
        }, milliseconds);
    });
}

export function isValidPassword(str) {
    if (typeof str !== 'string') return false;
    if (str.length < 3 || str.length > 12) return false;

    return true;
}

export function isValidUsername(str) {
    if (typeof str !== 'string') return false;
    if (str.length < 3 || str.length > 12) return false;
    if (!REGEX.Alphanumeric.test(str)) return false;

    return true;
}

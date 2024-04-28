import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

export const DEFAULT_DATA = {
    users: [],
    todos: [],
};

const currentFilePath = fileURLToPath(import.meta.url);
const parsedPath = path.parse(currentFilePath);
const currentDir = parsedPath.dir;
const dbFilePath = path.join(currentDir, 'db.json');

let dbData;
try {
    const jsonText = fs.readFileSync(dbFilePath, 'utf8', { flag: 'r+' });
    dbData = JSON.parse(jsonText);
} catch (e) {
    console.error(e);
    fs.writeFileSync(dbFilePath, JSON.stringify(DEFAULT_DATA, null, 2), { flag: 'w+' });
}

function saveData() {
    fs.writeFileSync(dbFilePath, JSON.stringify(dbData, null, 2), { flag: 'w+' });
}

export { dbData, saveData };

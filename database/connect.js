import mariadb from '../node_modules/mariadb/callback.js';

export const db = mariadb.createConnection({
    host: '127.0.1.1',
    user: 'root',
    password: '2003',
    database: 'Barsuk'
});
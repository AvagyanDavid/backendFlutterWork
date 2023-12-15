import mariadb from '../node_modules/mariadb/callback.js';

export const db = mariadb.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '3915',
    database: 'Barsuk'
});
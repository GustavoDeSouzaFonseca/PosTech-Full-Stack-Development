import express from 'express';
import db from './config/db/mongoConfig';

const app = express();

db.on('error', () => console.log.bind(console, 'Connection Error!'));
db.once('open', () => {
    console.log('Database connection success!');
})

export default app;
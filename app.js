import express from 'express';
import cors from 'cors';
import Router from './routes/router.js';
import fileUpload from 'express-fileupload';

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(cors());
app.use(Router);
app.use(fileUpload({
    createParentPath: true
}));
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log('Сервер запущен на порту', PORT);
});


import express from 'express';
import Layout from "express-ejs-layouts";
import Mainrouter from './routers/main.router.js'
import ImageRouter from './routers/image.router.js';
import moment from 'moment';
import multer from 'multer';

const app = express();
app.set('view engine', 'ejs');
app.set('port', 2062);

app.use(express.static('public'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use('/', Mainrouter);
app.use('/image', ImageRouter);
app.use(Layout);



app.listen(app.get('port'), () => console.info(`Server is running on PORT: ${app.get('port')}`));
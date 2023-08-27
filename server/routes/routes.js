import express from 'express';
import { uploadImage, downloadImage } from '../controller/image-controller.js';
import upload from '../utils/upload.js';


const Router = express.Router();


Router.post('/upload',upload.single('file'),uploadImage);
Router.get('/file/:fileId', downloadImage);

export default Router;
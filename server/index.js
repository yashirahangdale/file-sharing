import express from 'express';
import Router from './routes/routes.js';
import cors from 'cors';
import DBConnection from './database/db.js';

const app = express();

app.use(cors());
app.use('/', Router);

const PORT = 8000;

DBConnection();

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
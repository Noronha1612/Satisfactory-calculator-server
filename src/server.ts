import express from 'express';
import cors from 'cors';
import { errors } from 'celebrate';
import mongoose from 'mongoose';
import { config } from 'dotenv';

config();

import routes from './routes';

const port = 3333;

const app = express();

mongoose.connect(process.env.DB_URI as string, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(errors());

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
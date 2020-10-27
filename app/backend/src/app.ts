import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
const app = express();
// imports
import messageRoutes from './routes/message.routes';

// Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use('/api', messageRoutes);


export default app;
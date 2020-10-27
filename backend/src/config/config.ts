import dotenv from 'dotenv';
dotenv.config();

export default {
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_HOST: process.env.DB_HOST,
    DB_NAME: process.env.DB_NAME,
    PORT: process.env.PORT || 4000,
    PUSHER_SECRET: process.env.PUSHER_SECRET,
    PUSHER_KEY: process.env.PUSHER_KEY,
    PUSHER_APP_ID: process.env.PUSHER_APP_ID
}
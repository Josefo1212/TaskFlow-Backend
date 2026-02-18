import express from 'express';
import dotenv from 'dotenv';
import { Pool } from 'pg';
dotenv.config();
const app = express();
app.use(express.json());
// Configuración de la base de datos
export const db = new Pool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
});
db.connect()
    .then(() => console.log('Connected to PostgreSQL'))
    .catch((err) => console.error('Database connection error:', err));
export default app;
//# sourceMappingURL=app.js.map
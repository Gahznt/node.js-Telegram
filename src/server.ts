import express from 'express';
import dotenv from 'dotenv';
import mainRoutes from './routes/api';

dotenv.config();

const server = express();

server.use('/api/', mainRoutes);
server.use((req, res) => {
    res.json({'404': 'Página não encontrada'})
})

server.listen(process.env.PORT);
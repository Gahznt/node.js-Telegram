import { Request, Response } from 'express';
const axios = require('axios');
import dotenv from 'dotenv';

export const home = async (req: Request, res: Response) => {
    res.send(
        `<h1>Teste BOT Telegram</h1> 
        <br>
        <a href="/api/telegram">Enviar mensagem</a>
        `
    );
}

export const telegram = (req: Request, res: Response) => {
    (async () => {
          const response = await axios.get(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_KEY}/sendMessage?chat_id=${process.env.TELEGRAM_CHAT_ID}&text=Hello World`)
          console.log(response.data.url);
          console.log(response.data);
      })();
    res.redirect('/api/');
}
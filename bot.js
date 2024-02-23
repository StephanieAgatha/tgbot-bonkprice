// Import package using dynamic import
import('node-fetch').then(async (fetch) => {
    const TelegramBot = require('node-telegram-bot-api');

    const botToken = '6567868659:AAGlhqP4pGjv_7V3ay3iXYAlwbcKmlLrp80';
    const bot = new TelegramBot(botToken, { polling: true });

    bot.onText(/\/bonk/, async (msg) => {
        const chatId = msg.chat.id;

        console.log(`User with chat ID ${chatId} ran /bonk command`);

        try {
            const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bonk&vs_currencies=idr');
            const data = await response.json();

            const idrValue = data.bonk.idr;
            const message = `1 Bonk = ${idrValue} IDR`;

            bot.sendMessage(chatId, message);
        } catch (error) {
            console.error('Error:', error);
        }
    });
});

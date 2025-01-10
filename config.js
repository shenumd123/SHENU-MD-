const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PZUxkaaJ#YLEAcu_ubHvnJDwYDxZ-VcKYu9iLe3V8jH_uTZat5C8",
MONGODB: process.env.MONGODB || "mongodb://mongo:MfPJLADhRWNHvxuOORrlmfJHboedaADB@junction.proxy.rlwy.net:57828",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/CV1hdLc/4801cfe28ce1e9e7.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "🤖🔰 Hi SHENU-MD Is Online Now 💻\n*💻 Owner* - SHENU-MD\n\n*💻 Owner Number* 94741140620",
SUDO_NB: process.env.SUDO_NB || "94741140620",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE:"true"
};

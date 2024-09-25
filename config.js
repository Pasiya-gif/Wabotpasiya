
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "qKJXlZBb#uJrIpU3HHTz0QlbDkrquUxEP18-BSIIRPaUFrjX_voY",
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/7e9c7890e1dfb7f482b27.jpg",
ALIVE_MSG: process.env.ALIVE_MSG ||  "Hello, I am Pasiya-MD Whatsapp Bot i am alive now!",
};

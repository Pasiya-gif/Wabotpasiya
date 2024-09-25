
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
ALIVE_IMG: process.env.ALIVE_IMG || "https://.avertars.githubusercontent.com/U/106251140?v=4".
ALIVE_MSG: process.env.ALIVE_MSG ||  "Hello, I am yourName i am alive now!".
};
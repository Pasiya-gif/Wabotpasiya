
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "qKJXlZBb#uJrIpU3HHTz0QlbDkrquUxEP18-BSIIRPaUFrjX_voY",
ALIVE_IMG: process.env.ALIVE_IMG || "https://repository-images.githubusercontent.com/500020161/090ee0ff-60fe-49c9-aee0-002f9b960490",
ALIVE_MSG: process.env.ALIVE_MSG ||  "Hello, I am Pasiya-MD Whatsapp Bot i am alive now!",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
};

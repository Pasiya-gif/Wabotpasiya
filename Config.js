
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
};
config.js
Pasindu Madushan 
(pasindupasindu2024@gmail.com)
General Info
TypeJavascript
Size261 bytes
Modified11:43 PM Aug 8
Created11:40 PM Aug 8
Opened by me9:17 PM Aug 29
Sharing
Anyone with the link
Can View

prabathmdofficial
Owner
Description
No description
Download Permission
Viewers can download
Displaying config.js.

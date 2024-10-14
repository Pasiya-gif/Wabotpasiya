const axios = require('axios');
const config = require('../config');
const { cmd, commands } = require('../command');
const { botwatermark } = require('../botwatermark')

cmd({
    pattern: "weather",
    desc: "Get weather information any city.",
    category: "other",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

        if (!q) return reply("Give a city name.");
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=2d61a72574c11c4f36173b627f8cb177&units=metric`;
        const response = await axios.get(url);
        const data = response.data;

        const weather = `
> *Country:* ${data.sys.country}
> *City:* ${data.name}
> *Temperature:* ${data.main.temp}°C
> *Feels:* ${data.main.feels_like}°C
> *Min Temp:* ${data.main.temp_min}°C
> *Max Temp:* ${data.main.temp_max}°C
> *Humidity:* ${data.main.humidity}%
> *Weather:* ${data.weather[0].main}
> *Desc:* ${data.weather[0].description}
> *Wind Speed:* ${data.wind.speed} m/s
> *Pressure:* ${data.main.pressure} hPa
`

await conn.sendMessage(from,{text:weather},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
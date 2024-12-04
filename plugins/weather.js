const axios = require('axios');
const config = require('../config');
const { cmd, commands } = require('../command');

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

cmd({
    pattern: "distance",
    desc: "Find the distance between two countries or two cities.",
    category: "other",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {

if(!q) {
    await m.react("❌")
    return reply("*❗ Give Two City Names Or Countries. Like Kegalle,Colombo. ❗*")
}
const name1 = q.split(",")[0]
const name2 = q.split(",")[1]
const cnames = q.includes(",")
if(!name1 || !name2 || cnames === false) {
    await m.react("❌")
    return reply("*❗ Give Two Names. Like Kegalle,Colombo. ❗*")
}
const apiUrl = `https://${dmdata.api.widipeapi}/jarak?dari=${name1}&ke=${name2}`
const response = await axios.get(apiUrl)
const data = response.data
if(data.url.status === false) {
await m.react("❌")
return reply("*❗ Can't Find Distance Between ${name1} And ${name2}. ❗*")
}
await m.react("🗺️")
let desc = `
*⭐ PASIYA BOT DISTANCE FIND ⭐*

${data.url.desc}`
await conn.sendMessage(from,{image: {url: data.url.data},caption: desc},{quoted: mek})
  
}catch(e){
console.log(e)
reply(`${e}`)
}
})

const {cmd , commands} = require('../command')
const yts = require('yt-search')
const axios = require('axios')

cmd({
    pattern: "song",
    desc: "download songs.",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    
if(!q) return reply("please give me url or title")
const search =  await yts(q)
const data = search.videos[0]
const url = data.url
let desc = `
🫵 * 𝙮𝙤𝙪𝙧 𝙨𝙤𝙣𝙜 𝙙𝙤𝙬𝙣𝙡𝙤𝙖𝙙 * ❤️ = 👉⬇️👈
title: ${data.title}
description ${data.description}
time: ${data.timestamp}
ago: ${data.ago}
views: ${data.views}
MADE BY ♥️ 👉𝙥𝙖𝙨𝙞𝙮𝙖 𝙗𝙤𝙮👈 ❗
`
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{qouted:mek})
                        
const apiUrl = `https://api.tioo.eu.org/download/ytdl?url=` + data.url
const response = await axios.get(apiUrl)
const ddata = response.data
await conn.sendMessage(from,{audio:{url: ddata.result.mp3},mimetype: "audio/mpeg"},{qouted:mek})
await conn.sendMessage(from,{document:{url: ddata.result.mp3},mimetype:"audio/mpeg",fileName:ddata.result.title + ".mp3",caption:"MADE BY ♥️ 👉𝙥𝙖𝙨𝙞𝙮𝙖 𝙗𝙤𝙮👈 ❗"},{qouted:mek})

  
  
}catch(e){
console.log(e)
reply(`${e}`)
}
})

//===========vidio-dl===========

cmd({
    pattern: "video",
    desc: "download video.",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("please give me url or title")
const search =  await yts(q)
const data = search.videos[0]
const url = data.url
let desc = `
🫵 * 𝙮𝙤𝙪𝙧 𝙫𝙞𝙙𝙚𝙤 𝙙𝙤𝙬𝙣𝙡𝙤𝙖𝙙 * ❤️ = 👉⬇️👈
title: ${data.title}
description ${data.description}
time: ${data.timestamp}
ago: ${data.ago}
views: ${data.views}
MADE BY ♥️ 👉𝙥𝙖𝙨𝙞𝙮𝙖 𝙗𝙤𝙮👈 ❗
`
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{qouted:mek})

const apiUrl = `https://api.tioo.eu.org/download/ytdl?url=` + data.url
const response = await axios.get(apiUrl)
const ddata = response.data
    
await conn.sendMessage(from,{video:{url: ddata.result.mp4},mimetype:"video/mp4",caption:"MADE BY ♥️ 👉𝙥𝙖𝙨𝙞𝙮𝙖 𝙗𝙤𝙮👈 ❗"},{qouted:mek})
await conn.sendMessage(from,{document:{url: ddata.result.mp4},mimetype:"video/mp4",fileName:ddata.result.title + ".mp4",caption:"MADE BY ♥️ 👉𝙥𝙖𝙨𝙞𝙮𝙖 𝙗𝙤𝙮👈 ❗"},{qouted:mek})

 
}catch(e){
console.log(e)
reply(`${e}`)
}
})

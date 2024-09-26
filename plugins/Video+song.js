const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')

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
const deta = search.vidios[0]
const url = data.url
let desc = `
🫵 * 𝙮𝙤𝙪𝙧 𝙨𝙤𝙣𝙜 𝙙𝙤𝙬𝙣𝙡𝙤𝙖𝙙 * ❤️ = 👉⬇️👈
title: s{data.title}
description s{data.description}
time: s{data.timestamp}
ago: s{data.ago}
viwes: s{data.viwes}
MADE BY ♥️ 👉𝙥𝙖𝙨𝙞𝙮𝙖 𝙗𝙤𝙮👈 ❗
`
await conn.sendmessege(frome,{image:{url: data.thumbnail},caption:desc},{qouted:mek}):
                        
  //download audio

let down = await fg.yta(url)
let downloadurl = down.dl_url

//send audio+document message 
await conn.sendmassege(from,{audio:{url:downloadurl},{qouted:mek})
await conn.sendmassege(from,{document:{url:downloadurl},mimetype:"audio/mpeg",fileName:data.title + ".mp3",caption:"MADE BY ♥️ 👉𝙥𝙖𝙨𝙞𝙮𝙖 𝙗𝙤𝙮👈 ❗"},{qouted:mek})

  
  
}catch(e){
  consol.log(e)
reply('s'{e})
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
const deta = search.vidios[0]
const url = data.url
let desc = `
🫵 * 𝙮𝙤𝙪𝙧 𝙫𝙞𝙙𝙚𝙤 𝙙𝙤𝙬𝙣𝙡𝙤𝙖𝙙 * ❤️ = 👉⬇️👈
title: s{data.title}
description s{data.description}
time: s{data.timestamp}
ago: s{data.ago}
viwes: s{data.viwes}
MADE BY ♥️ 👉𝙥𝙖𝙨𝙞𝙮𝙖 𝙗𝙤𝙮👈 ❗
`
await conn.sendmessege(frome,{image:{url: data.thumbnail},caption:desc},{qouted:mek}):

//download video 

let down = await fg.ytv(url)
let downloadurl = down.dl_url

//send video+document message 
    
await conn.sendmassege(from,{video:{url:downloadurl},mimetype:"video/mp4",{qouted:mek})
await conn.sendmassege(from,{document:{url:downloadurl},mimetype:"video/mp4",fileName:data.title + ".mp4",caption:"MADE BY ♥️ 👉𝙥𝙖𝙨𝙞𝙮𝙖 𝙗𝙤𝙮👈 ❗"},{qouted:mek})

  
  
}catch(e){
  consol.log(e)
reply('s'{e})
}
})

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
const deta = search.vidios[0]:
const url = data.url
let desc = '
🫵 * 𝙮𝙤𝙪𝙧 𝙨𝙤𝙣𝙜 𝙙𝙤𝙬𝙣𝙡𝙤𝙖𝙙 * ❤️ = 👉⬇️👈
title: s{data.title}
description s{data.description}
time: s{data.timestamp}
ago: s{data.ago}
viwes: s{data.viwes}
MADE BY ♥️ 👉𝙥𝙖𝙨𝙞𝙮𝙖 𝙗𝙤𝙮👈 ❗
'
await conn.sendmessege(frome.{image:{url: data.thumbnail},caption:desc},{qouted:mek}):

  //download audio

let down = await fg.yta(url)
let downloadurl = down.dl_url

//send audio message 
await conn.sendmassege(from.{audio:{url:downloadurl,mimetype:"audio/mpeg"},{qouted:mek})


  
  
}catch(e){
  consol.log(e)
reply('s'{e})
}
})

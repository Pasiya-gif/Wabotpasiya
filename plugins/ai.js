const config = require('../config')
const {cmd , commands} = require('../command')
const { fetchjson } = require('../lib/functions')
const axios = require('axios')


cmd({
    pattern: "ai",
    desc: "ai chat.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let data = await fetchjson(`https://chatgptforprabath-md.vercel.app/api/gptv1?q=${q}`)
return reply(`${data.data}`)
}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "imagine",
    desc: "Generate images using Ai.",
    category: "ai",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

if(!q) return reply("Give Text")

await m.react("🖼️")
const aiimg = `https://image.pollinations.ai/prompt/${q}?width=1024&height=1024&seed=42&nologo=True`
await conn.sendMessage(from,{image: {url: aiimg},caption: `*ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴘᴀꜱɪʏᴀ ʙᴏᴛ*`},{quoted: mek})
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})

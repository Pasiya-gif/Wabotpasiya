const config = require('../config')
const { cmd, commands } = require('../command')

cmd({
    pattern: "ping",
    desc: "Check bot's response time.",
    category: "main",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

        await m.react("📍")
        const startTime = Date.now()
        await conn.sendMessage(from, { text: '*❮❮ 🔄 Checking Pasiya Bot Ping... ❯❯*' }, {quoted:mek})
        const endTime = Date.now()
        const ping = endTime - startTime

        await conn.sendMessage(from, { text: `*❮❮ 📍 Pasiya Bot Ping: ${ping}ms ❯❯*` })
        
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})

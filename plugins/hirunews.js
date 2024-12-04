const {cmd , commands} = require('../command')
const cheerio = require('cheerio')
const fetch = require('node-fetch')
const axios = require('axios');

cmd({
    pattern: "hirunews",
    desc: "Get news from hirunews.",
    category: "news",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

await m.react("🔄")
    const scrape1 = await fetch(`https://www.hirunews.lk/local-news.php?pageID=1`)
    const $ = cheerio.load(await scrape1.text())
    const newsurl = $("body > div:nth-child(15) > div.row > div.col-sm-12.col-md-9.col-lg-9.section > div > div:nth-child(2) > div.column.middle > div.all-section-tittle > a:nth-child(2)").attr('href')
    const newstitle = $("body > div:nth-child(15) > div.row > div.col-sm-12.col-md-9.col-lg-9.section > div > div:nth-child(2) > div.column.middle > div.all-section-tittle > a:nth-child(2)").text().trim()
    const newsdate = $("body > div:nth-child(15) > div.row > div.col-sm-12.col-md-9.col-lg-9.section > div > div:nth-child(2) > div.column.middle > div.middle-tittle-time").text().trim()
    const newsimg = $("body > div:nth-child(15) > div.row > div.col-sm-12.col-md-9.col-lg-9.section > div > div:nth-child(2) > div.column.left > div > a > img").attr('src')
    
    const scrape2 = await fetch(newsurl)
    const $$ = cheerio.load(await scrape2.text())
    const news = $$("#article-phara2").text().trim()

let desc = `
*⭐ PASIYA BOT NEWS ⭐*

${newstitle} | ${newsdate}
    
*${news}`

await conn.sendMessage(from,{image: {url: newsimg},caption: desc},{quoted: mek})
await m.react("✅")
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})

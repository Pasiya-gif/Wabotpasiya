const axios = require('axios');
const { cmd } = require('../command');
const config = require('../config');

cmd({
    pattern: "movie",
    desc: "Get information about a movie.",
    category: "search",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const movieName = q;
        if (!movieName) {
            return reply("Give movie name to get informations");
        }

        const apiUrl = `http://www.omdbapi.com/?t=${encodeURIComponent(movieName)}&apikey=324f5cb4`;
        const response = await axios.get(apiUrl);

        const data = response.data;
        if (data.Response === "False") {
            return reply("Movie not found");
        }

      let movieInfo = `
*🏷️ Title:* ${data.Title}
*📆 Year:* ${data.Year}
*⭐ Rated:* ${data.Rated}
*🗓️ Relesed:* ${data.Released}
*⏰ Runtime:* ${data.Runtime}
*🎭 Genre:* ${data.Genre}
*📽️ Directors:* ${data.Director}
*✍️ Writer:* ${data.Writer}
*🧚‍♂️ Actors:* ${data.Actors}
*📝 Plot:* ${data.Plot}
*🔖 Language:* ${data.Language}
*🌍 Country:* ${data.Country}
*🏆 Awards:* ${data.Awards}
*🌟 Imdb Rating:* ${data.imdbRating}
*🗃️ Imdb Votes:* ${data.imdbVotes}`;

        const moviePic = data.Poster && data.Poster !== 'N/A' ? data.Poster : config.ALIVE_IMG;
        await conn.sendMessage(from,{image:{url: moviePic},caption: movieInfo},{quoted:mek})
    }catch(e){
console.log(e)
reply(`${e}`)
}
})

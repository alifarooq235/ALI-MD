/*
_  ______   _____ _____ _____ _   _
| |/ / ___| |_   _| ____/___ | | | |
| ' / |  _    | | |  _|| |   | |_| |
| . \ |_| |   | | | |__| |___|  _  |
|_|\_\____|   |_| |_____\____|_| |_|

ANYWAY, YOU MUST GIVE CREDIT TO MY CODE WHEN COPY IT
CONTACT ME HERE +237656520674
YT: KermHackTools
Github: Kgtech-cmr
*/

const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
const axios = require('axios')

cmd({

    pattern: "menu",

    react: "📑",

    desc: "Get bot command list.",

    category: "main",

    use: '.menu',

    filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, umarmd, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{
let madeMenu = `╭━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷
*┌─〈 ${config.BOT_NAME} 〉─◆*
*│╭─────────────···▸*
*┴│▸*
*❖│▸* *ʀᴜɴᴛɪᴍᴇ* : ${runtime(process.uptime())}
*❖│▸* *ᴍᴏᴅᴇ* : *${config.MODE}*
*❖│▸* *ᴘʀᴇғɪx* : *${config.PREFIX}*
*❖│▸* *ʀᴀᴍ ᴜsᴇ* : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*❖│▸* *ᴄʀᴇᴀᴛᴏʀ* : *𓆩ု᪳𝐀𝐋𝐈 𝐈𝐍𝅦𝐒i͜͡𝐃𝐄ှ᪳𓆪*
*❖│▸* *ᴀʟᴡᴀʏs ᴏɴʟɪɴᴇ* : *${config.ALWAYS_ONLINE}*
*❖│▸* *ᴠᴇʀsɪᴏɴs* : *ᴠ.4.1.0*
*┬│▸*
*└──────────────···▸*
  *ɪғ ʏᴏᴜ ᴡᴀɴᴛ ʙᴏᴛ ᴄᴏɴᴛᴀᴄᴛ ᴛᴏ .ᴏᴡɴᴇʀ*
 *♡︎•━━━━━━☻︎━━━━━━•♡︎*
*╭────❒⁠⁠⁠⁠* *📥 DOWNLOADER-CMD 📥* *❒⁠⁠⁠⁠* 
*┋* *.ғʙ*
*┋* *.ɪɴꜱᴛᴀ*
*┋* *.ᴠɪᴅᴇᴏ*
*┋* *.ɢᴅʀɪᴠᴇ*
*┋* *.ᴛᴡɪᴛᴛᴇʀ*
*┋* *.ᴛᴛ*
*┋* *.ᴍᴇᴅɪᴀғɪʀᴇ*
*┋* *.ᴘʟᴀʏ*
*┋* *.ᴘʟᴀʏ2*
*┋* *.sᴏɴɢ*
*┋* *.ᴠɪᴅᴇᴏ*
*┋* *.ᴠɪᴅᴇᴏ2*
*┋* *.sᴘᴏᴛɪꜰʏ*
*┋* *.ᴠɪᴅᴇᴏ4*
*┋* *.ɪᴍɢ*
*┋* *.Lʏʀɪᴄs*
*┋* *.ᴀᴘᴋ*
*┋* *.ᴅᴀʀᴀᴍᴀ*
*┋* *.ᴘʟᴀʏ2*
*┋* *.ᴘʟᴀʏ4*
*┋* *.ʙᴀɪsᴄᴏᴘᴇ*
*┋* *.ɢɪɴɪsɪsɪʟᴀ*
*┕───────────────────❒*
*╭────❒⁠⁠⁠⁠* *🏮EMPIRE KERM🏮* *❒⁠⁠⁠⁠* 
*┋* *.Fᴀᴍɪʟʏ*
*┋* *.Vᴀᴡᴜʟᴇɴᴄᴇ*
*┋* *.ᴄʜᴀɴɴᴇʟ*
*┋* *.sᴜᴘᴘᴏʀᴛ*
*┋* *.ᴇxᴏʀ*
*┋* *.ᴘʀᴏᴍᴏᴛᴇsᴛᴀꜰꜰ*
*┕───────────────────❒*
*╭────❒⁠⁠⁠⁠* *🔎 SEARCH-CMD 🔍* *❒⁠⁠⁠⁠* 
*┋* *.ʏᴛꜱ*
*┋* *.ʏᴛᴀ*
*┋* *.ʟᴏʟɪ*
*┋* *.ᴍᴏᴠɪᴇɪɴғᴏ*
*┋* *.ᴍᴏᴠɪᴇ*
*┋* *.Gᴏᴏɢʟᴇ*
*┋* *.ᴡᴇᴀᴛʜᴇʀ*
*┋* *.sᴛɪᴄᴋsᴇᴀʀᴄʜ*
*┕───────────────────❒*
*╭────❒⁠⁠⁠⁠* *🎮 GAME-CMD 🎮* *❒⁠⁠⁠⁠* 
*┋* *.ɴᴜᴍʙᴇʀɢᴀᴍᴇ*
*┋* *.ʀᴏʟʟ🎲*
*┋* *.ᴄᴏɪɴꜰʟɪᴘ🪙*
*┋* *.pick*
*┕───────────────────❒*
*╭────❒⁠⁠⁠⁠* *🔞 NSFW-CMD 🔞* *❒⁠⁠⁠⁠* 
*┋* *.ɴsꜰᴡ*
*┋* *.Eᴊᴀᴄᴜʟᴀᴛɪᴏɴ*
*┋* *.ᴘᴇɴɪs*
*┋* *.ᴇʀᴇᴄ*
*┋* *.ɴᴜᴅᴇ*
*┋* *.sᴇx*
*┋* *.ᴄᴜᴛᴇ*
*┋* *.ᴏʀɢᴀsᴍ*
*┋* *.ᴀɴᴀʟ*
*┋* *.sᴜsᴘᴇɴsɪᴏɴ*
*┋* *.ᴋɪss*
*┕───────────────────❒*
*╭────❒⁠⁠⁠⁠* *🧠 AI-CMD 🧠* *❒⁠⁠⁠⁠* 
*┋* *.ɢᴘᴛ*
*┋* *.ᴀɪ*
*┋* *.ᴀɴᴀʟʏsᴇ*
*┕───────────────────❒*
*╭────❒⁠⁠⁠⁠* *👨‍💻 OWNER-CMD 👨‍💻* *❒⁠⁠⁠⁠* 
*┋* *.ᴜᴘᴅᴀᴛᴇᴄᴍᴅ*
*┋* *.sᴇᴛᴛɪɴɢs*
*┋* *.ᴏᴡɴᴇʀ*
*┋* *.ʀᴇᴘᴏ*
*┋* *.ꜱʏꜱᴛᴇᴍ*
*┋* *.ꜱᴛᴀᴛᴜꜱ*
*┋* *.Aʙᴏᴜᴛ*
*┋* *.ʙʟᴏᴄᴋ*
*┋* *.ᴜɴʙʟᴏᴄᴋ*
*┋* *.sʜᴜᴛᴅᴏᴡɴ*
*┋* *.ᴄʟᴇᴀʀᴄʜᴀᴛs*
*┋* *.sᴇᴛᴘᴘ*
*┋* *.ʙʀᴏᴀᴅᴄᴀsᴛ*
*┋* *.ᴊɪᴅ*
*┋* *.ɢᴊɪᴅ*
*┋* *.ᴘᴀɪʀ*
*┋* *.sᴀᴠᴇ*
*┋* *.ʀᴀɴᴋ*
*┋* *.ᴄᴀʟᴄ*
*┋* *.ʀᴇꜱᴛᴀʀᴛ*
*┕───────────────────❒*
*╭────❒⁠⁠⁠⁠* *👥 GROUP-CMD 👥* *❒⁠⁠⁠⁠* 
*┋* *.ʀᴇᴍᴏᴠᴇ*
*┋* *.ᴅᴇʟᴇᴛᴇ*
*┋* *.ᴀᴅᴅ*
*┋* *.ᴋɪᴄᴋ*
*┋* *.ᴋɪᴄᴋᴀʟʟ*
*┋* *.sᴇᴛɢᴏᴏᴅʙʏᴇ*
*┋* *.sᴇᴛᴡᴇʟᴄᴏᴍᴇ*
*┋* *.ᴘʀᴏᴍᴏᴛᴇ*
*┋* *.ᴅᴇᴍᴏᴛᴇ*
*┋* *.ᴛᴀɢᴀʟʟ*
*┋* *.ɢᴇᴛᴘɪᴄ*
*┋* *.ɪɴᴠɪᴛᴇ*
*┋* *.ʀᴇᴠᴏᴋᴇ*
*┋* *.ᴊᴏɪɴʀᴇǫᴜᴇsᴛs*
*┋* *.ᴀʟʟʀᴇǫ*
*┋* *.ᴍᴜᴛᴇ*
*┋* *.ᴜɴᴍᴜᴛᴇ*
*┋* *.ʟᴏᴄᴋɢᴄ*
*┋* *.ᴜɴʟᴏᴄᴋɢᴄ*
*┋* *.ʟᴇᴀᴠᴇ*
*┋* *.ᴜᴘᴅᴀᴛᴇɢɴᴀᴍᴇ*
*┋* *.ᴜᴘᴅᴀᴛᴇɢᴅᴇsᴄ*
*┋* *.ᴊᴏɪɴ*
*┋* *.ʜɪᴅᴇᴛᴀɢ*
*┋* *.ɢɪɴғᴏ*
*┋* *.ᴅɪsᴀᴘᴘᴇᴀʀ ᴏɴ*
*┋* *.ᴅɪsᴀᴘᴘᴇᴀʀ ᴏғғ*
*┋* *.ᴅɪsᴀᴘᴘᴇᴀʀ 7ᴅ 24ʜ 90ᴅ*
*┋* *.sᴇɴᴅᴅᴍ*
*┕───────────────────❒*
*╭────❒⁠⁠⁠⁠* *📃 INFO-CMD 📃* *❒⁠⁠⁠⁠* 
*┋* *.ᴀʙᴏᴜᴛ*
*┋* *.Dᴇᴠ*
*┋* *.ᴋɢᴛᴇᴄʜ*
*┋* *.ᴀʟɪᴠᴇ*
*┋* *.ʙᴏᴛɪɴꜰᴏ*
*┋* *.ꜱᴛᴀᴛᴜꜱ*
*┋* *.ᴘɪɴɢ*
*┋* *.ᴘɪɴɢ2*
*┋* *.ꜱʏꜱᴛᴇᴍ*
*┕───────────────────❒*
*╭────❒⁠⁠⁠⁠* *✝️ GOD-CMD ✝️* *❒⁠⁠⁠⁠* 
*┋* *.ʙɪʙʟᴇ*
*┋* *.ʙɪʙʟᴇʟɪsᴛ*
*┕───────────────────❒*
*╭────❒⁠⁠⁠⁠* *🤖 BOT-CMD 🤖* *❒⁠⁠⁠⁠* 
*┋* *.ᴠᴇʀsɪᴏɴ*
*┋* *.ʀᴇᴘᴏ*
*┋* *.ᴍᴇɴᴜ*
*┋* *.ᴍᴇɴᴜ2*
*┋* *.ᴍᴇɴᴜ3*
*┕───────────────────❒*
*╭────❒⁠⁠⁠⁠* *🎡 CONVERTER-CMD 🎡* *❒⁠⁠⁠⁠* 
*┋* *.sᴛɪᴄᴋᴇʀ*
*┋* *.ᴛʀᴛ*
*┋* *.ᴛᴛs*
*┋* *.ꜰᴀɴᴄʏ*
*┋* *.ᴜʀʟ*
*┋* *.Aɢᴇ*
*┋* *.Cᴏɴᴠᴇʀᴛ*
*┋* *.ᴛɪɴʏ*
*┕───────────────────❒*
*╭────❒⁠⁠⁠⁠* *⛱️ RANDOM-CMD ⛱️* *❒⁠⁠⁠⁠* 
*┋* *.ᴋᴇʀᴍ*
*┋* *.ᴅᴏɢ*
*┋* *.ᴄᴀᴛ*
*┋* *.ᴀɴɪᴍᴇ*
*┋* *.ᴄᴏᴜᴘʟᴇᴘᴘ*
*┋* *.ꜰɪɴᴅɴᴀᴍᴇ*
*┋* *.ʀᴀɴᴅᴏᴍᴀɴɪᴍᴇ*
*┋* *.ᴀɴɪᴍᴇɢɪʀʟ*
*┋* *.ᴀɴɪᴍᴇɢɪʀʟ1*
*┋* *.ᴀɴɪᴍᴇɢɪʀʟ2*
*┋* *.ᴀɴɪᴍᴇɢɪʀʟ3*
*┋* *.ᴀɴɪᴍᴇɢɪʀʟ4*
*┋* *.ᴀɴɪᴍᴇɢɪʀʟ5*
*┋* *.ᴘɪᴄᴋᴜᴘʟɪɴᴇ*
*┕───────────────────❒*
*╭────❒⁠⁠⁠⁠* *🏜️ WALLPAPERS-CMD 🏜️* *❒⁠⁠⁠⁠* 
*┋* *.ɪᴍɢ*
*┋* *.ʟᴏɢᴏ*
*┋* *.ss*
*┕───────────────────❒*
*╭────❒⁠⁠⁠⁠* *🌐 OTHER-CMD 🌐* *❒⁠⁠⁠⁠* 
*┋* *.ᴛʀᴛ*
*┋* *.ᴊᴏᴋᴇ*
*┋* *.ꜰᴀᴄᴛ*
*┋* *.ɢɪᴛʜᴜʙ*
*┋* *.ɢᴘᴀꜱꜱ*
*┋* *.ʜᴀᴄᴋ*
*┋* *.ǫᴜᴏᴛᴇ*
*┋* *.ǫʀ*
*┋* *.ꜱʀᴇᴘᴏ*
*┋* *.sʏsᴛᴇᴍ*
*┋* *.ʀᴀɴᴋ*
*┋* *.Tɪᴍᴇᴢᴏɴᴇ*
*┋* *.ᴅᴇꜰɪɴᴇ*
*┋* *.Dᴀɪʟʏꜰᴀᴄᴛ*
*┋* *.Mɪɴᴜᴛᴏʀ*
*┕───────────────────❒*
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})
    
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: false,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363318387454868@newsletter',
                    newsletterName: '『𝐀𝐋𝐈-𝐌𝐃 𝚩❍𝐓🍁』',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

}catch(e){
console.log(e)
reply(`${e}`)
}
})

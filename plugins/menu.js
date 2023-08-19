const fs = require("fs")
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom } = require('../libs/fuctions.js'); 
const path = require("path")
const chalk = require("chalk");
const moment = require('moment-timezone') 
const gradient = require('gradient-string') 
const fetch = require('node-fetch') 
const axios = require('axios')
const cheerio = require('cheerio')
const Jimp = require('jimp')
const os = require('os')
 
const menu = (main, prefix, pushname, m) => {
let user = global.db.data.users[m.sender]
let wa = m.key.id.length > 21 ? 'Android' : m.key.id.substring(0, 2) == '3A' ? 'IOS' : 'whatsapp web'

return `╔═════ೋೋ═════╗
║◤━━━━━ ☆. ∆ .☆ ━━━━━◥
║✾ Hola 👋🏻 ${pushname}
║◤━━━━━ ☆. ∆ .☆ ━━━━━◥
║✾ ᴜsᴜᴀʀɪᴏ : ${Object.keys(global.db.data.users).length}
║✾ ᴀᴄᴛɪᴠɪᴅᴀᴅ : ${runtime(process.uptime())}
║✾ Modo : ${conn.public ? 'publico' : 'privado'}
║
║✾ ʟɪᴍɪᴛᴇ : ${user.limit}
║✾ ɴɪᴠᴇʟ : ${user.nivel}
║✾ ᴇxᴘ : ${user.exp}
║◤━━━━━ ☆. ∆ .☆ ━━━━━◥
╚════ ≪ •❈• ≫ ════╝

╔═════「 ɪɴғᴏʀᴍᴀᴄɪᴏɴ 」═════╗
║◤━━━━━ ☆. ∆ .☆ ━━━━━◥
║ ᴇʟ ʙᴏᴛ ᴇs ɴᴜᴇᴠᴏ ᴛᴏᴅᴀᴠɪᴀ ᴇsᴛᴀ ᴅᴇsᴀʀʀᴏʟʟᴀᴅᴏ,
║ sɪ ᴘʀᴇsᴇɴᴛᴀ ᴀʟɢᴜɴ ᴘʀᴏʙʟᴇᴍᴀ,
║ ᴄᴏᴍᴜɴɪᴄᴀʀsᴇ ᴄᴏɴ ᴍɪ ᴄʀᴇᴀᴅᴏʀ
║ ᴇsᴄʀɪʙɪʀ !creador
║◤━━━━━ ☆. ∆ .☆ ━━━━━◥
║ʙᴏᴛ sɪᴍᴘʟᴇ ᴄᴏɴ ᴘᴏᴄᴏs ᴄᴏᴍᴀɴᴅᴏs
║◤━━━━━ ☆. ∆ .☆ ━━━━━◥
╚════ ≪ •❈• ≫ ════╝

╔═════「 INFO 」═════╗
║❑ ${prefix}estado 
║❑ ${prefix}ping
║❑ ${prefix}report
║❑ ${prefix}menu
║❑ ${prefix}owner
╚════ ≪ •❈• ≫ ════╝

╔═════「 SERBOT/JADIBOT 」═════╗
║ *(Este serbot esta modo beta)*
║❑ ${prefix}serbot 
║❑ ${prefix}jadibot
║❑ ${prefix}bots
║❑ ${prefix}stop
╚════ ≪ •❈• ≫ ════╝

╔═════「 DESCARGAR 」═════╗
║❑ ${prefix}play
║❑ ${prefix}play2
║❑ ${prefix}yts
║❑ ${prefix}tiktok (pronto)
║❑ ${prefix}Facebook (pronto)
╚════ ≪ •❈• ≫ ════╝

╔═════「 GRUPOS 」═════╗
║❑ ${prefix}antilink (Elimina a los que manda link de otro grupo) 
║❑ ${prefix}antifake (eliminar a los números virtuales) 
║❑ ${prefix}antiarabe (eliminar a los numero arabe) 
║❑ ${prefix}kick (@tag) 
║❑ ${prefix}promote (@tag) 
║❑ ${prefix}demote (@tag) 
║❑ ${prefix}grupo close/open 
╚════ ≪ •❈• ≫ ════╝`
}

module.exports = { menu }

 let file = require.resolve(__filename)  
  fs.watchFile(file, () => {  
  fs.unwatchFile(file)  
  console.log(chalk.redBright(`Update ${__filename}`))  
  delete require.cache[file]  
  require(file)  
  })
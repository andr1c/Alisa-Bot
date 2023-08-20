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

return `╔═══════ೋೋ═══════╗
║◤━━━━━ ☆. ∆ .☆ ━━━━━◥
║✾ Hola 👋🏻 ${pushname}
║◤━━━━━ ☆. ∆ .☆ ━━━━━◥
║✾ ᴜsᴜᴀʀɪᴏ : ${Object.keys(global.db.data.users).length}
║✾ ᴀᴄᴛɪᴠɪᴅᴀᴅ : ${runtime(process.uptime())}
║✾ ᴍᴏᴅᴏ : ${conn.public ? 'publico' : 'privado'}
║
║✾ ʟɪᴍɪᴛᴇ : ${user.limit}
║✾ ɴɪᴠᴇʟ : ${user.level}
║✾ ᴇxᴘ : ${user.exp}
╚══════════════════════

╔═══「 ＩＮＦＯＲＭＡＣＩＯ́Ｎ 」═══╗
║◤━━━━━ ☆. ∆ .☆ ━━━━━◥
║ ᴇʟ ʙᴏᴛ ᴇs ɴᴜᴇᴠᴏ ᴛᴏᴅᴀᴠɪᴀ ᴇsᴛᴀ ᴅᴇsᴀʀʀᴏʟʟᴀᴅᴏ,
║ sɪ ᴘʀᴇsᴇɴᴛᴀ ᴀʟɢᴜɴ ᴘʀᴏʙʟᴇᴍᴀ,
║ ᴄᴏᴍᴜɴɪᴄᴀʀsᴇ ᴄᴏɴ ᴍɪ ᴄʀᴇᴀᴅᴏʀ
║ ᴇsᴄʀɪʙɪʀ #creador
║◤━━━━━ ☆. ∆ .☆ ━━━━━◥
║ʙᴏᴛ sɪᴍᴘʟᴇ ᴄᴏɴ ᴘᴏᴄᴏs ᴄᴏᴍᴀɴᴅᴏs
║◤━━━━━ ☆. ∆ .☆ ━━━━━◥
╚══════════════════════

╔═════「 *💫 ＩＮＦＯ* 」═════╗ 
║❑ ${prefix}estado 
║❑ ${prefix}ping (Velocidad del bot)
║❑ ${prefix}report (report comando con falla/errores/ortografía, etc)
║❑ ${prefix}grupos (unirte al los grupos oficiales y divirte con el bot 😸)
║❑ ${prefix}owner (te envia los contactos del mi creador)
╚═════════════════════

╔════「 ＪＡＤＩＢＯＴ 」════╗
║ *(Este serbot esta modo beta)*
║◤━━━━━ ☆. ∆ .☆ ━━━━━◥
║❑ ${prefix}serbot (Te envia qr para convertirte el un sub bot) 
║❑ ${prefix}jadibot
║❑ ${prefix}bots (prueba si hay sub bot conectado) 
║❑ ${prefix}stop (📴 comando solo para los sub bot) 
╚══════════════════════

╔════「 ＤＥＳＣＡＲＧＡ 」════╗
║❑ ${prefix}play
║❑ ${prefix}play2 
║❑ ${prefix}yts 
║❑ ${prefix}ytmp3 
║❑ ${prefix}ytmp4 
║❑ ${prefix}gitclone 
║❑ ${prefix}tiktok (pronto)
║❑ ${prefix}Facebook (pronto)
╚══════════════════════ 

╔═════「 ＧＲＵＰＯＳ 」═════╗
║❑ ${prefix}antilink (Elimina a los que manda link de otro grupo) 
║❑ ${prefix}antifake (eliminar a los números virtuales) 
║❑ ${prefix}antiarabe (eliminar a los numero arabe) 
║❑ ${prefix}kick (@tag) 
║❑ ${prefix}promote (@tag) 
║❑ ${prefix}demote (@tag) 
║❑ ${prefix}grupo close/open 
║❑ ${prefix}hidetag (etiqueta a todos el un mensaje) 
║❑ ${prefix}tagall (etiqueta a todos el una listas) 
╚══════════════════════

╔═══「 ＢＵＳＣＡＤＯＲＥＳ 」═══╗
║❑ ${prefix}google
║❑ ${prefix}ia
╚═══════════════════════

╔═════「 ＪＵＥＧＯＳ 」═════╗
║❑ ${prefix}simi (no usar api caida 😯) 
║❑ ${prefix}ppt (pronto) 
╚══════════════════════

╔═════「 ＯＷＮＥＲ 」═════╗
║❑ ${prefix}autoadmin
║❑ ${prefix}join
║❑ ${prefix}setpp (cambia la foto del bot) 
║❑ ${prefix}public (modo público) 
║❑ ${prefix}privado (modo privado) 
║❑ ${prefix}modojadibot
║❑ ${prefix}getcase
╚═════════════════════╝`
}

module.exports = { menu }

 let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
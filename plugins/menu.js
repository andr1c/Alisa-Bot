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
║✾ ᴍᴏᴅᴏ : ${conn.public ? 'Público' : `Privado`}
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
║❑ ${prefix}estado _(comprueba el estado del bot)_
║❑ ${prefix}ping _(Velocidad del bot)_
║❑ ${prefix}grupos _(unirte al los grupos oficiales y divirte con el bot 😸)_
║❑ ${prefix}owner _(te envia los contactos del mi creador)_
║❑ ${prefix}report _(reporta comando con falla/errores/ortografía, etc)_
╚═════════════════════

╔════「 ＪＡＤＩＢＯＴ 」════╗
║ *(Este serbot esta modo beta)*
║◤━━━━━ ☆. ∆ .☆ ━━━━━◥
║❑ ${prefix}serbot _(Te envia qr para convertirte el un sub bot)_
║❑ ${prefix}jadibot
║❑ ${prefix}bots _(comprueba si hay sub bot conectado)_
║❑ ${prefix}stop _(comando solo para sub bot)_
╚══════════════════════

╔════「 🔄ＤＥＳＣＡＲＧＡ 」════╗
║❑ ${prefix}play _(Titulo/nombre de la canción para descargar el audio)_
║❑ ${prefix}play2 _(Titulo/nonbre de la canción para descarga el video)_
║❑ ${prefix}yts _(buscar los links para descarga el video)_
║❑ ${prefix}ytmp3 _(ingresa el link para descargar el audio)_
║❑ ${prefix}ytmp4 _(ingresa el link para descargar el video)_
║❑ ${prefix}gitclone _(ingresa el link del GitHub para descargar el repositorio)_
║❑ ${prefix}tiktok (pronto)
║❑ ${prefix}Facebook (pronto)
╚══════════════════════ 

╔═════「 ＧＲＵＰＯＳ 」═════╗
║❑ ${prefix}antilink _(Elimina a los que manda link de otro grupo)_
║❑ ${prefix}antifake _(eliminar a los números virtuales)_
║❑ ${prefix}antiarabe _(eliminar a los numero arabe)_
║❑ ${prefix}kick _(@tag)_
║❑ ${prefix}add _(@tag)_
║❑ ${prefix}invita _(@tag)_
║❑ ${prefix}promote _(@tag)_
║❑ ${prefix}demote _(@tag)_
║❑ ${prefix}grupo close/open 
║❑ ${prefix}setppname _(cambia el nombre del grupo)_
║❑ ${prefix}setdesc _(cambia la descripción del Grupo)_
║❑ ${prefix}setppgroup _(cambia la foto del Grupo)_
║❑ ${prefix}hidetag _(etiqueta a todos el un mensaje)_
║❑ ${prefix}tagall _(etiqueta a todos el una listas)_
╚══════════════════════

╔═══「 ＢＵＳＣＡＤＯＲＥＳ 」═══╗
║❑ ${prefix}google _(ingresa nombre de que quiera buscar)_
║❑ ${prefix}ia _(ingresa el texto de que quiera buscar con la (IA)_
╚═══════════════════════

╔═════「 ＪＵＥＧＯＳ 」═════╗
║❑ ${prefix}simi _(Hablar con el bot)_
║❑ ${prefix}ppt (Esta mantenimiento funciona pero responde cuando quiere xd) 
╚══════════════════════

╔═════「 ＯＷＮＥＲ 」═════╗
║ _(Comando explusivo para propietario/owner del bot)_
║◤━━━━━ ☆. ∆ .☆ ━━━━━◥
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
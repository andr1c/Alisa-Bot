//Código desde cero y comentarios hecho por: 
// @gata_dios 
// @Skidy89
// @elrebelde21 
  
//═════════[ Importaciones ]═════════ 
const baileys = require('@whiskeysockets/baileys'); // trabajar a través de descargas por Whatsapp 
const { WaMessageStubType, areJidsSameUser, downloadContentFromMessage, generateWAMessageContent, generateWAMessageFromContent, generateWAMessage, prepareWAMessageMedia, relayMessage} = require('@whiskeysockets/baileys'); // Importa los objetos 'makeWASocket' y 'proto' desde el módulo '@whiskeysockets/baileys'   
const { default: makeWASocket, proto } = require("@whiskeysockets/baileys") 
const moment = require('moment-timezone') // Trabajar con fechas y horas en diferentes zonas horarias
const gradient = require('gradient-string') // Aplicar gradientes de color al texto   
const { exec, spawn, execSync } =  require("child_process")// Función 'execSync' del módulo 'child_process' para ejecutar comandos en el sistema operativo 
const chalk = require('chalk') // Estilizar el texto en la consola  
const os = require('os') // Proporciona información del sistema operativo 
const fs = require('fs') // Trabajar con el sistema de archivos   
const fetch = require('node-fetch')
const axios = require('axios') 
const cheerio = require('cheerio')
const gpt = require('api-dylux')
const util = require('util')
const createHash = require('crypto') 
const mimetype = require("mime-types")  
const ws = require('ws')
const JavaScriptObfuscator = require('javascript-obfuscator')
const webp = require("node-webpmux")
const Jimp = require('jimp')
const scp1 = require('./libs/scraper') 
const { File } = require("megajs")
const speed = require("performance-now")
const ffmpeg = require("fluent-ffmpeg")
const similarity = require('similarity') 
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./libs/uploader.js')
const { toAudio, toPTT, toVideo } = require('./libs/converter.js')
const { canLevelUp, xpRange } = require('./libs/levelling.js')
const { smsg, fetchBuffer, getBuffer, buffergif, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, msToTime, downloadMediaMessage } = require('./libs/fuctions')
const { ytmp4, ytmp3, ytplay, ytplayvid } = require('./libs/youtube')
const { mediafireDl } = require('./libs/mediafire.js') 
const {jadibot, listJadibot, killJadibot} = require('./serbot.js')  
const { jadibot2} = require('./serbot2.js')
const { menu, menu2} = require('./plugins/menu.js')
const { state, owner, grupo, instalar, ping, report, ow} = require('./plugins/info.js')
const {rob, bal, reg, reg1, reg2, work, mine, buy, afk, claim, perfil, nivel, cofre, lb} = require('./plugins/rpg.js') 
const {game, game1, game2, game3, game4, game5, game6, game7, game8, game9, game10, game11, game12, game13, game14, game15} = require('./plugins/juegos.js') 
const {yt, acortar, google, imagen, tran, tts, ia, ssw, wall} = require('./plugins/buscadores.js')
const {efec, url, tomp3, toimg} = require('./plugins/convertidores.js') 
const {grup, del, join, setpp, hide, setna, setde, add, k, p, d, link, ban, tag, adm, infogr, warn1, warn2, online, listw} = require('./plugins/grupos.js')
const {nsfw1, nsfw2, nsfw3, nsfw4, nsfw5} = require('./plugins/nsfw.js')
const {randow1, randow2, randow3, randow4, randow5, randow6, randow7, randow8, randow9} = require('./plugins/randow.js') 
const {play, mp3, mp4, git, tiktok, letra, mediafire, fb, ig, ig2, apk} = require('./plugins/descargas.js')  
const {s, wm, attp, dado} = require('./plugins/stickers.js') 
const {owner1, owner2, owner3, owner4, owner5, owner6, owner7, owner8, owner9} = require('./plugins/propietario.js')  
const {on, on1, on2, on3, on4, on5, on6, on7, on8, on9, on10, on11, on12, onn} = require('./plugins/enable.js') 

const msgs = (message) => { 
if (message.length >= 10) { 
return `${message.substr(0, 500)}` 
} else { 
return `${message}`}} 
const getFileBuffer = async (mediakey, MediaType) => {  
const stream = await downloadContentFromMessage(mediakey, MediaType)  
let buffer = Buffer.from([])  
for await(const chunk of stream) {  
buffer = Buffer.concat([buffer, chunk]) }  
return buffer
}  

module.exports = conn = async (conn, m, chatUpdate, mek, store) => {  
var budy = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
  
// ‿︵‿︵ʚɞ『 ATRIBUTOS 』ʚɞ‿︵‿︵     
if (m.key.id.startsWith("BAE5")) return  
var body = (typeof m.text == 'string' ? m.text : '') 
var _prefix = /^[°•÷×™+✓_=|~!?@#%^.©^]/gi.test(body) ? body.match(/^[°•÷×™+✓_=|~!?@#%^.©^]/gi)[0] : ""
global.prefix = _prefix
const isCmd = body.startsWith(prefix)   
const from = m.chat 
const msg = JSON.parse(JSON.stringify(m, undefined, 2)) 
const content = JSON.stringify(m.message) 
const type = m.mtype 
const arg = body.substring(body.indexOf(' ') + 1) 
const command = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null
const args = body.trim().split(/ +/).slice(1) 
const q = args.join(" ") 
let t = m.messageTimestamp 
const pushname = m.pushName || "Sin nombre" 
const botnm = conn.user.id.split(":")[0] + "@s.whatsapp.net"  
const _isBot = conn.user.jid
const userSender = m.key.fromMe ? botnm : m.isGroup && m.key.participant.includes(":") ? m.key.participant.split(":")[0] + "@s.whatsapp.net" : m.key.remoteJid.includes(":") ? m.key.remoteJid.split(":")[0] + "@s.whatsapp.net" : m.key.fromMe ? botnm : m.isGroup ? m.key.participant : m.key.remoteJid  
const isCreator = global.owner.map(([numero]) => numero.replace(/[^\d\s().+:]/g, '').replace(/\s/g, '') + '@s.whatsapp.net').includes(userSender) 
const itsMe = m.sender == conn.user.id ? true : false 
const text = args.join(" ") 
const quoted = m.quoted ? m.quoted : m 
const sender = m.key.fromMe ? botnm : m.isGroup ? m.key.participant : m.key.remoteJid 
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
const mime = (quoted.msg || quoted).mimetype || ''  
const isMedia = /image|video|sticker|audio/.test(mime)
const mentions = []  
if (m.message[type].contextInfo) {   
if (m.message[type].contextInfo.mentionedJid) {  
const msd = m.message[type].contextInfo.mentionedJid  
for (let i = 0; i < msd.length; i++) {  
mentions.push(msd[i])}}} 
  
// ‿︵‿︵ʚɞ『 GRUPO 』ʚɞ‿︵‿︵      
const groupMetadata = m.isGroup ? await conn.groupMetadata(from) : ''
const groupName = m.isGroup ? groupMetadata.subject : '' 
const participants = m.isGroup ? await groupMetadata.participants : '' 
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : '' 
const isBotAdmins = m.isGroup ? groupAdmins.includes(botnm) : false  
const isGroupAdmins = m.isGroup ? groupAdmins.includes(userSender) : false 
const isBaneed = m.isGroup ? blockList.includes(userSender) : false 
const isPremium = m.isGroup ? premium.includes(userSender) : false   
const who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
const thumb = fs.readFileSync("./media/test.jpg")
const fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${userSender.split('@')[0]}:${userSender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: thumb, surface: 200, message: "ɴᴏᴠᴀʙᴏᴛ-ᴍᴅ", orderTitle: "sᴜᴘᴇʀ ʙᴏᴛ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ", sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
const fdoc = {key : {participant : '0@s.whatsapp.net', ...(from ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: botname, jpegThumbnail: null}}}
const kick = function (from, orangnya) {  
for (let i of orangnya) {  
conn.groupParticipantsUpdate(m.chat, [i], "remove")}}  
const time = moment(Number(msg.messageTimestamp + "000")).locale("es-mx").tz("America/Asuncion").format('MMMM Do YYYY, h:mm:ss a')  
  
const reply = (text) => {  
m.reply(text)} 
const sendAdMessage = (text, title, body, image, url) => { conn.sendMessage(m.chat, {text: text, contextInfo: { externalAdReply: { title: title, body: body, mediaUrl: url, sourceUrl: url, previewType: 'PHOTO', showAdAttribution: true, thumbnail: image, sourceUrl: url }}}, {})}  
const sendImage = ( image, caption ) => { conn.sendMessage(m.chat, { image: image, caption: caption }, { quoted: m })}  
const sendImageAsUrl = ( url, caption ) => { conn.sendMessage(m.chat, { image:  {url: url }, caption: caption }, { quoted: m })}  

// ‿︵‿︵ʚɞ『 TIPOS DE MENSAJES Y CITADOS 』ʚɞ‿︵‿︵  
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
  
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {userJid: conn.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, conn.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {...chatUpdate, messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
conn.ev.emit('messages.upsert', msg)}

// ‿︵‿︵ʚɞ『 INFO CONSOLE 』ʚɞ‿︵‿︵	
if (m.message) {
console.log(chalk.bold.cyanBright(`▣────────────···\n│${botname} ${conn.user.id == global.numBot2 ? '' : '(SubBot)'}`), 
chalk.bold.magenta('\n│⏰HORARIO: ') + chalk.magentaBright(moment(t * 1000).tz(place).format('DD/MM/YY HH:mm:ss'),
chalk.bold.red('\n️│🏷️ TAGS: ') + chalk.bold.white(`[${conn.public ? 'Publico' : 'Privado'}]`), 
chalk.bold.yellow('\n│📑TIPO (SMS): ') + chalk.yellowBright(`${type}`), 
chalk.bold.cyan('\n│📊USUARIO: ') + chalk.cyanBright(pushname) + ' ➜', gradient.rainbow(userSender), 
m.isGroup ? chalk.bold.greenBright('\n│📤GRUPO: ') + chalk.greenBright(groupName) + ' ➜ ' + gradient.rainbow(from) : chalk.bold.greenBright('\n│📥PRIVADO'), 
//chalk.bold.red('\nETIQUETA: ') + chalk.redBright(`[${isBaneed ? 'Banned' : ''}]`),
chalk.bold.white('\n│💬MENSAJE: ') + chalk.whiteBright(`\n▣────────────···\n${msgs(m.text)}\n`))
)}          

//autobio
if (global.db.data.settings[numBot].autobio) {
let setting = global.db.data.settings[numBot]
if (new Date() * 1 - setting.status > 1000) {
let uptime = await runtime(process.uptime())
try {
const bio = `ɴᴏᴠᴀʙᴏᴛ-ᴍᴅ | ᴀᴄᴛɪᴠᴏ ✅️: ${runtime(process.uptime())}\n\nᴘᴀʀᴀ ᴠᴇᴢ ᴍɪ ʟɪsᴛᴀ ᴅᴇ ᴄᴏᴍᴀɴᴅᴏ ᴜsᴀʀ #menu`
await conn.updateProfileStatus(bio)
setting.status = new Date() * 1
} catch {
console.log('[Update]') 
}}}
  
//autoread
if (!conn.autoread && m.message) {
await conn.sendPresenceUpdate('composing', m.chat)
conn.readMessages([m.key])}

//antispam
if (global.db.data.chats[m.chat].antispam && prefix) {
const date = global.db.data.users[m.sender].spam + 5000; //5 seg
if (new Date - global.db.data.users[m.sender].spam < 5000) return conn.sendMessage(m.chat, {text: `_*Espere unos segundos antes de usar otro comando...*_ ✓`, mentions: [sender], },{quoted: m}) 
global.db.data.users[m.sender].spam = new Date * 1
}
            
//antifake
if (global.db.data.chats[m.chat].antifake && !isGroupAdmins) {	
let forbidPrefixes = ["1", "994", "48", "43", "40", "41", "49"];
for (let prefix of forbidPrefixes) {
if (m.sender.startsWith(prefix)) {
m.reply('✳️ El este grupo no esta permitido numero fake sera expulsado...', m.sender)
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}}}
if (global.db.data.chats[m.chat].antiarabe && !isGroupAdmins) {
let forbidPrefixes = ["212", "265", "234", "258", "263", "967", "20", "92", "91"];
//if (m.chat && m.sender.startsWith('212')) return
for (let prefix of forbidPrefixes) {
if (m.sender.startsWith(prefix)) {
m.reply('✳️ En este grupo no esta permitido numero arabe hasta la próxima...', m.sender)
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}}}
	
//antilink
if (global.db.data.chats[m.chat].antilink) {
if (budy.match(`chat.whatsapp.com`)) {
let delet = m.key.participant
let bang = m.key.id
user = m.sender
conn.sendMessage(m.chat, {text: `\`\`\`「 ANTILINK DETECTADO 」\`\`\`\n\n@${user.split("@")[0]} 🤨 eso no esta permitido rata, Sera expulsado del grupo....`, mentions: [user], },{quoted: m}) 
if (!isBotAdmins) return reply(`Te salvarte puto no soy admins 🙄`)
let gclink = (`https://chat.whatsapp.com/`+await conn.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return reply(`Te salvarte el link enviado es de este grupo`)
if (isGroupAdmins) return reply(`Te salvarte por que eres un admins :v`)
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

//autosticker
if (global.db.data.chats[m.chat].autosticker) {  
if (/image/.test(mime)) {  
await conn.sendPresenceUpdate('composing', m.chat)
m.reply(`_Calma crack estoy haciendo tu sticker 👏_\n\n_*Autosticker esta activado*_`)   
media = await quoted.download()  
let encmedia = await conn.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author, contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: nn, thumbnail: imagen1}}}, { quoted: m })
await fs.unlinkSync(encmedia)  
} else if (/video/.test(mime)) {  
if ((quoted.msg || quoted).seconds > 40) return reply('¡Máximo 40 segundos!')  
media = await quoted.download()  
let encmedia = await conn.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: goblal.author, contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: wm, body: `h`, mediaType: 2, sourceUrl: nn, thumbnail: imagen1}}}, { quoted: m })
await new Promise((resolve) => setTimeout(resolve, 2000));   
await fs.unlinkSync(encmedia)  
}}

if (global.db.data.settings[conn.user.jid].antiprivado && !isCreator) {
if (m.isBaileys && m.fromMe) return !0;
if (m.isGroup) return !1;
if (!m.message) return !0;
if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') ||  m.text.includes('menu') ||  m.text.includes('estado') || m.text.includes('bots') ||  m.text.includes('serbot') || m.text.includes('jadibot')) return !0
const chat = global.db.data.chats[m.chat];
const bot = global.db.data.settings[conn.user.jid] || {};
if (bot.antiprivado && !isCreator) {
await conn.sendMessage(m.chat, {text: `*ʜᴏʟᴀ @${sender.split`@`[0]}, ᴇsᴛᴀ ᴘʀᴏʜɪʙɪᴅᴏ ʜᴀʙʟᴀʀ ᴀʟ ᴘʀɪᴠᴀᴅᴏ ᴅᴇʟ ʙᴏᴛ ᴘᴏʀ ʟᴏ ᴄᴜᴀʟ sᴇʀᴀs ʙʟᴏϙᴜᴇᴀᴅᴏ.*\n*ᴘᴀʀᴀ ᴜsᴀʀ ᴇʟ ʙᴏᴛ ᴜɴɪʀᴛᴇ ᴀʟ ɢʀᴜᴘᴏ ᴅᴇʟ ʙᴏᴛ*\n\n${nn}`, mentions: [sender], },{quoted: m}) 
await conn.updateBlockStatus(m.chat, 'block')}
return !1;
}

//ARRANCA LA DIVERSIÓN
switch (command) { 
case 'yts': case 'ytsearch':
yt(conn, m, text, from, command, fkontak, prefix)  
break
case 'acortar': 
acortar(conn, m, text, args, command)  
break
case 'google': {      
google(conn, m, text, command)}
break 
case 'imagen': {
imagen(conn, m, text, command)}
break
case 'traducir': case 'translate': {
tran(conn, m, args, quoted, prefix, command)}
break
case "tts":
tts(conn, m, q, text, quoted)
break		              				
case 'ia': case 'chatgpt':
ia(conn, m, text, quoted)
break
case 'ss': case 'ssweb': {
ssw(conn, m, q, prefix, command, quoted, scp1)}
break
case 'wallpaper':
wall(conn, text, command, m) 
break 
 
case 'serbot': case 'qr':
jadibot(conn, m, command)  
break  
case 'jadibot': case 'sercode':
jadibot2(conn, m, command, text, args, sender)
break
case 'deljadibot': case 'stop': 
killJadibot(conn, m, prefix, command)
break 
case 'bots': case 'listbots': 
const user = [...new Set([...global.listJadibot.filter((conn) => conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED).map((conn) => conn)])];
const message = user.map((v, index) => `[${index + 1}] ${v.user.name || '•'}\nwa.me/${v.user.jid.replace(/[^0-9]/g, '')}?text=${prefix}estado`).join('\n\n');
const replyMessage = message.length === 0 ? '' : message;
const totalUsers = user.length;
const responseMessage = `*𝘚𝘜𝘉𝘉𝘖𝘛𝘚 𝘊𝘖𝘕𝘌𝘊𝘛𝘈𝘋𝘖𝘚:* ${totalUsers || '0'}\n\n${replyMessage.trim()}`.trim();
await conn.sendMessage(m.chat, {text: responseMessage, mentions: conn.parseMention(responseMessage)}, {quoted: m});
break

//info
case 'estado':
state(conn, m, speed, sender, fkontak) 
break
case 'menu': case 'help': case 'menucompleto':
menu(conn, prefix, pushname, sender, m, fkontak)
break  
case 'menu2': case 'audios':
menu2(conn, pushname, m, fkontak)
break
case 'owner': case 'creador': 
owner(conn, m, sender) 
break 
case 'grupos': case 'grupoficiales': 
grupo(conn, m, sender) 
break
case 'instalarbot': case 'crearbot': 
instalar(conn, m, pushname, sender) 
break
case '5492266613038': case '593980586516': case '595975740803': await ow(conn, args, m) 
break
case 'ping': 
ping(conn, from, msg, speed) 
break  		  
case 'report': 
report(conn, from, m, prefix, command, text)
break 
case 'speedtest': {
m.reply('*🚀 Test de velocidad | Speed...*')
let cp = require('child_process')
let { promisify } = require('util')
let exec = promisify(cp.exec).bind(cp)
let o
try {
o = await exec('python speed.py')
} catch (e) {
o = e
} finally {
let { stdout, stderr } = o
if (stdout.trim()) m.reply(stdout)
if (stderr.trim()) m.reply(stderr)}}
break
//opción activa/desartiva
case 'welcome': on(isGroupAdmins, text, command, args, m) 
break
case 'antilink': case 'antienlace': on1(isBotAdmins, isGroupAdmins, text, command, args, m)
break
case 'antifake': case 'antiFake': on2(isBotAdmins, isGroupAdmins, text, command, args, m)
break
case 'antiarabe': case 'antiArabe': on3(isBotAdmins, isGroupAdmins, text, command, args, m)
break
case 'autodetect': case 'detect': on4(isBotAdmins, isGroupAdmins, text, command, args, m)
break
case 'audios': on5(text, command, args, m) 
break
case 'autosticker': case 'stickers': on6(text, command, args, m) 
break
case 'modocaliente': case 'antinsfw': on7(isGroupAdmins, text, command, args, m) 
break
case 'modoadmin': case 'modoadmins': on8(isBotAdmins, isGroupAdmins, text, command, args, m) 
break
case 'antiprivado': case 'antipv': on9(isCreator, text, command, args, m) 
break
case 'anticall': case 'antillamada': on10(isCreator, text, command, args, m) 
break           
case 'modojadibot': case 'jadibot': on11(isCreator, text, command, args, m) 
break
case 'autoread': case 'autovisto':
on12(isCreator, text, command, args, m, conn) 
break
case 'antispam': onn(text, command, args, m) 
break
//Grupo 
case 'grupo': grup(conn, m, args, isBotAdmins, isGroupAdmins, command, prefix, text)
break
case 'delete': case 'del': 
del(conn, m, isBotAdmins, isGroupAdmins)
break  		
case 'join': 
join(conn, m, isCreator, text, delay, args, sender)
break           
case 'hidetag': case 'notificar': 
hide(conn, m, isBotAdmins, isGroupAdmins, q, participants)
break 
case 'setppname': case 'nuevonombre': case 'newnombre': 
setna(conn, m, isBotAdmins, isGroupAdmins, text)
break
case 'setdesc': case 'descripción':  
setde(conn, m, isBotAdmins, isGroupAdmins, text)
break
case 'setppgroup': case 'setpp': 
setpp(conn, m, isBotAdmins, isGroupAdmins, quoted, prefix, command, mime, args, from)
break
case 'anularlink': case 'resetlink': case 'revoke':
let res = conn.groupRevokeInvite(m.chat)
break
case 'add': case 'agregar': case 'invitar': 
add(conn, m, isBotAdmins, isGroupAdmins, text, sender, prefix)
break           
case 'kick': case 'echar': case 'sacar':
k(conn, m, isBotAdmins, isGroupAdmins, quoted, text, sender)
break 
case 'promote':
p(conn, m, isBotAdmins, isGroupAdmins, quoted, sender)
break
case 'demote':
d(conn, m, isBotAdmins, isGroupAdmins, quoted, sender)
break            
case 'link': case 'linkgc': 
link(conn, m, isBotAdmins)
break                        		
case 'banchat': 
ban(m, text, command, args)
break              
case 'tagall': case 'invocar': case 'todos':
tag(conn, m, isBotAdmins, isGroupAdmins, participants, q)
break            
case 'admins': case 'administradores': 
adm(conn, participants, groupMetadata, args, m) 
break
case 'infogrupo': case 'groupinfo':
infogr(conn, participants, groupMetadata, fkontak, m) 
break  
case 'warn': case 'advertencia':
warn1(conn, m, isBotAdmins, isGroupAdmins, sender, command, text, delay) 
break 
case 'unwarn': case 'quitardvertencia': 
warn2(conn, m, isBotAdmins, isGroupAdmins, sender, command, delay) 
break
case 'listwarn': 
listw(conn, isCreator, m) 
break
case 'listonline': case 'liston': 
online(conn, sender, args, store, m) 
break
//juegos
case 'simi': case 'bot': 
await game(conn, m, text, pushname, command, quoted)
break 
case 'gay': 
await game1(conn, m, participants, sender, who)
break            
case 'pareja': 
await game2(conn, m, pushname, participants, sender)
break
case 'fake': {
await game3(conn, text, prefix, command, body, from, m, sender, quoted)}
break
case 'follar': case 'violar':
game4(conn, m, pushname, text, sender)
break 
case 'ppt': 
game5(conn, m, pushname, text, sender)
break
case 'pregunta':
game6(text, command, m)  
break   
case 'doxear': case 'doxxeo': 
game7(conn, pickRandom, text) 
break
case 'personalidad': 
game8(conn, text, pickRandom, m) 
break   
case 'slot':  
game9(conn, args, prefix, command, msToTime, m) 
break
case 'verdad': 
game10(sendImageAsUrl, pickRandom)   
break   
case 'reto': 
game11(pickRandom, sendImageAsUrl)   
break                
case 'top': 
game12(conn, text, participants, pickRandom, m) 
break 
case 'topgays': case 'topotakus': 
game13(conn, participants, command, m) 
break 
case 'piropo':
game14(m, pickRandom) 
break
case 'racista':
game15(m, body)  
break
//convertidores
case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel': 
efec(conn, command, mime, quoted, exec, prefix, m, from) 
break   
case 'toaudio': case 'tomp3': 
tomp3(conn, mime, quoted, m) 
break
case 'toimg': case 'toimagen':
toimg(conn, mime, quoted, exec, m) 
break
case 'tourl': 
url(conn, mime, quoted, util, m) 
break
//nsfw
case 'hentai': 
await nsfw1(conn, m, pickRandom)
break
case 'nsfwloli': 
await nsfw2(conn, m, pickRandom) 
break
case 'lewd': case 'feed': case 'gasm': case 'anal': case 'holo': case 'tits': case 'kuni': case 'kiss': case 'erok': case 'smug': case 'solog': case 'feetg': case 'lewdk': case 'waifu': case 'pussy': case 'femdom': case 'cuddle': case 'eroyuri': case 'cum_jpg': case 'blowjob': case 'holoero': case 'erokemo': case 'fox_girl': case 'futanari': case 'wallpaper':
await nsfw3(conn, m, pickRandom, sendImageAsUrl, command)
break
case 'hentai2':
nsfw4(sendImageAsUrl, m) 
break
case 'porno':
nsfw5(sendImageAsUrl, m) 
break
//randow
case 'memes':
await randow1(sendImageAsUrl, m)
break
case 'loli': 
await randow2(sendImageAsUrl, m, pickRandom)
break
case 'lolivid':
await randow3(conn, m, pickRandom)
break
case 'neko':
await randow4(sendImageAsUrl, m, pickRandom)
break
case 'akira': case 'akiyama': case 'anna': case 'asuna': case 'ayuzawa': case 'boruto': case 'chiho': case 'chitoge': case 'deidara': case 'erza': case 'elaina': case 'eba': case 'emilia': case 'hestia': case 'hinata': case 'inori': case 'isuzu': case 'itachi': case 'itori': case 'kaga': case 'kagura': case 'kaori': case 'keneki': case 'kotori': case 'kurumi': case 'madara': case 'mikasa': case 'miku': case 'minato': case 'naruto': case 'nezuko': case 'sagiri': case 'sasuke': case 'sakura': case 'cosplay':
await randow5(sendImageAsUrl, command, pickRandom, m)
break 
case 'horny':  
await randow6(conn, m) 
break
case 'simp':  
randow7(conn, m) 
break
case 'lolice':
randow8(conn, m) 
break  
case 'comentar': case 'comment':
randow9(conn, text, m, sender, pushname)
break 
case 'blackpink':  
sendImageAsUrl("https://delirius-image-random.vercel.app/api/all");
break
//descargas		    
case 'play': case 'play2':
play(conn, text, command, m) 
break 
case "ytmp3": case "ytaudio": 
mp3(conn, args, text, command, fkontak, ytplayvid, m)
break 
case 'ytmp4': case 'ytvideo': 
mp4(conn, args, text, command, fkontak, m)
break   
case 'gitclone':
git(conn, args, command, m) 
break
case 'tiktok': 
tiktok(conn, text, command, q, m) 
break 
case 'lyrics': case 'letra': 
letra(conn, text, command, fkontak, m) 
break
case 'mediafire': 
mediafire(conn, text, command, mediafireDl, m) 
break 
case 'facebook': case 'fb':
fb(conn, text, command, lolkeysapi, args, m) 
break
case 'instagram': case 'ig':
ig(conn, text, command, lolkeysapi, args, m) 
break
case 'igstalk':
ig2(conn, args, command, m) 
break
case 'apk': case 'modoapk':
apk(conn, text, m)  
break
//rpg
case 'reg': case 'verificar':
await reg(conn, m, sender, text, fkontak, delay)
break            
case 'unreg': 
reg1(args, m, sender)  
break
case 'myns':
reg2(sender, m)
break 
case 'afk': 
await afk(m, sender, text, pushname)
break             
case 'buy': case 'buyall': {
await buy(conn, m, sender, args, command, text, fkontak)}
break
case 'minar': case 'mine':
await mine(conn, m, sender, fkontak)
break 
case 'trabajar': case 'work': {
await work(conn, m, sender, fkontak)}
break
case 'rob': case 'robar': { 
await rob(conn, m, sender, fkontak)}
break
case 'bal': case 'balance': case 'diamond': {
await bal(conn, m, sender, fkontak)}
break
case 'claim': case 'daily': 
await claim(conn, m, sender)
break
case 'perfil':
await perfil(conn, who, sender, pushname, fkontak, m) 
break
case 'levelup': case 'nivel': {  
nivel(conn, sender, canLevelUp, xpRange, m, pushname)}
break  
case 'cofre':
cofre(conn, sender, m) 
break 
case 'lb': case 'leaderboard':
lb(conn, participants, args, m) 
break
//stickers
case 's': case 'sticker':  
s(conn, mime, quoted, m) 
break; 
case 'wm': case 'take': 
wm(conn, args, quoted, mime, m) 
break 
case 'attp': 
attp(conn, text, lolkeysapi, fkontak, m) 
break
case 'dado': 
dado(conn, lolkeysapi, fkontak, m) 
break
//owner
case 'bcgc': case 'bcgroup': 
owner1(conn, isCreator, text, delay, fkontak, m) 
break
case 'bc': case 'broadcast': case 'bcall': 
owner2(conn, isCreator, text, store, delay, fkontak, m) 
break 
case 'block': case 'bloquear': 
owner3(conn, isCreator, quoted, sender, text, m) 
break 
case 'unblock': case 'desbloquear': 
owner4(conn, isCreator, quoted, sender, text, m) 
break            
case 'setcmd':  case 'addcmd':
owner5(conn, quoted, text, command, m) 
break
case 'delcmd': 
owner6(conn, m) 
break
case 'listcmd': 
owner7(conn, m) 
break
case 'addcase': 
owner8(conn, isCreator, text, q, m) 
break	     
case 'getcase': 
owner9(conn, isCreator, text, args, m) 
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
await conn.groupParticipantsUpdate(m.chat, [m.sender], "promote")} 
break 
case 'leave': { 
if (!isCreator) return reply(info.owner)
reply(m.chat, `*Adios fue un gusto esta aqui hasta pronto 👋*`)
await conn.groupLeave(m.chat)}
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
case 'reiniciar': case 'restart': {
if (!isCreator) return conn.sendMessage(from, { text: info.owner }, { quoted: msg });   
m.reply('_🔄 Reiniciando Bot..._');
await delay(3 * 3000) 
conn.ws.close()}
break

//función pickrandow
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}

default:
if (budy.includes(`Todo bien`)) {
reply(`Si amigo todo bien, vite`)}
if (budy.includes(`Buenos dias`)) {
reply(`Buenos Dias trolos de mierda`)}
if (budy.includes(`Bot gay`)) {
reply(`Miren a este boludito`)}
if (budy.includes(`Che messi vo le preguntaste?`)) {
reply(`No`)}
if (budy.includes(`Opa`)) {
reply(`opaaaaa`)}
if (budy.includes(`Fua`)) {
reply(`el diegote pa`)}
if (budy.includes(`Bot`)) {
let anu = await fetchJson(`https://api.simsimi.net/v2/?text=${budy}&lc=es&cf=false`)
let res = anu.success;
m.reply(res)}
if (budy.startsWith(`a`)) {
if (!global.db.data.chats[m.chat].audios) return
let vn = './media/a.mp3'
await conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": botname, "body": ``, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": md, "showAdAttribution": true}}, seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}
if (budy.startsWith(`Feliz cumpleaños`)) {
const vn = './media/Feliz cumple.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Vete a la verga`)) {
const vn = './media/vete a la verga.mp3';
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Uwu`)) {
const vn = './media/UwU.mp3';
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Siuuu`)) {
const vn = './media/siu.mp3';
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Pasa pack`)) {
const vn = './media/Elmo.mp3';
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Audio hentai`)) {
const vn = './media/hentai.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Pasen porno`)) {
const vn = './media/maau2.mp3'
conn.sendAudio(m.chat, vn, m)}			
if (budy.startsWith(`VAMOOO`)) {
const vn = './media/vamo.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Hora del sexito`)) {
const vn = './media/maau1.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Cuentate un chiste`)) {
const vn = './media/dylan2.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Admin party`)) {
const vn = './media/fiesta.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Fiesta del admin`)) {
const vn = './media/admin.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Viernes`)) {
const vn = './media/viernes.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`:v`)) {
const vn = './media/viejo1.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`La toca 7w7`)) {
const vn = './media/anime5.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Quien es tu sempai botsito`)) {
const vn = './media/anime4.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Me gimes 7u7`)) {
const vn = './media/anime3.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Te amo botsito uwu`)) {
const vn = './media/anime2.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Onichan`)) {
const vn = './media/anime1.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Pasen sexo`)) {
const vn = './media/fernan.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Paraguayo`)) {
const vn = './media/gaspi11.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Venezolano`)) {
const vn = './media/gaspi10.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Gaspi corte`)) {
const vn = './media/gaspi12.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Gaspi buenos dias`)) {
const vn = './media/gaspi13.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Enano`)) {
const vn = './media/gaspi14.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Buenas noches`)) {
const vn = './media/gaspi15.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Peruano`)) {
const vn = './media/gaspi16.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Alto temazo`)) {
const vn = './media/sombare14.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`GOOOOD`)) {
const vn = './media/sombare13.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Ya me voy a dormir`)) {
const vn = './media/sombare12.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Calefon`)) {
const vn = './media/sombare11.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Bot de mierda`)) {
const vn = './media/sombare10.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Apurate bot`)) {
const vn = './media/sombare9.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Un chino`)) {
const vn = './media/sombare7.mp3'
conn.sendAudio(m.chat, vn, m)}				
if (budy.startsWith(`No funciona`)) {
const vn = './media/sombare8.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Boliviano`)) {
const vn = './media/gaspi3.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Corte`)) {
const vn = './media/gaspi2.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Gaspi me saludas`)) {
const vn = './media/gaspi4.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Gaspi y las minitas`)) {
const vn = './media/gaspi6.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Gaspi todo bien`)) {
const vn = './media/gaspi7.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Me quiero suicidar`)) {
const vn = './media/gaspi81.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Gaspi ya no aguanto`)) {
const vn = './media/gaspi9.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Contate algo bot`)) {
const vn = './media/gaspi5.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Sexo`)) { 
const vn = './media/sexo.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Pongan cuties`)) { 
const vn = './media/neymar1.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Momento epico`)) {
const vn = './media/sombare1.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`El bot del orto no funciona`)) {
const vn = './media/sombare2.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Epicardo`)) {
const vn = './media/sombare3.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Insta de la minita`)) {
const vn = './media/sombare4.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Una mierda de bot`)) {
const vn = './media/sombare5.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Ultimo momento`)) {
const vn = './media/sombare6.mp3'
conn.sendAudio(m.chat, vn, m)}			
if (budy.startsWith(`Nefasto`)) {
const vn = './media/gaspi1.mp3'
conn.sendAudio(m.chat, vn, m)}
                  
if (budy.startsWith('>')) {
if (!isCreator) return
try {
return reply(JSON.stringify(eval(budy.slice(2)), null, '\t'))
} catch (e) {
e = String(e)
reply(e)
}}
if (budy.startsWith('=>')) {
if (!isCreator) return
try {
return  reply(JSON.stringify(eval(`(async () => { ${budy.slice(3)} })()`), null, '\t'))  //gata.sendMessage(from, JSON.stringify(eval(`(async () => { ${budy.slice(3)} })()`), null, '\t'), text, { quoted: msg })
} catch (e) {
e = String(e)
reply(e)
}}
if (budy.startsWith('$')) {
if (!isCreator) return
try {
return reply(String(execSync(budy.slice(2), { encoding: 'utf-8' })))
} catch (err) {
console.log(util.format(err))
let e = String(err) 
conn.sendMessage("595975740803@s.whatsapp.net", { text: "Hola Creador/desarrollador, parece haber un error, por favor arreglarlo 🥲\n\n" + util.format(e), 
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

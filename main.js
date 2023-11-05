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
const yts = require("yt-search") 
const ytdl = require('ytdl-core') 
const translate = require('@vitalets/google-translate-api') 
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./libs/uploader.js')
const { toAudio, toPTT, toVideo } = require('./libs/converter.js') 
const { canLevelUp, xpRange } = require('./libs/levelling.js')
const { smsg, fetchBuffer, getBuffer, buffergif, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, msToTime, downloadMediaMessage, convertirMsADiasHorasMinutosSegundos, pickRandom} = require('./libs/fuctions')
const { ytmp4, ytmp3, ytplay, ytplayvid } = require('./libs/youtube') 
const { mediafireDl } = require('./libs/mediafire.js') 
const {jadibot, listJadibot, killJadibot} = require('./plugins/serbot.js')   
//const { jadibot2} = require('./plugins/serbot2.js')
const { menu, menu2, nuevo, regla} = require('./plugins/menu.js') 
const { state, owner, grupo, instalar, ping, report, ow, sc} = require('./plugins/info.js')
const {rob, bal, reg, reg1, reg2, work, mine, buy, claim, perfil, nivel, cofre, lb} = require('./plugins/rpg.js') 
const {game, game1, game2, game3, game4, game5, game6, game7, game8, game9, game10, game11, game12, game13, game14, game15, game16, game17, game18, game19} = require('./plugins/juegos.js')   
const {yt, acortar, google, imagen, tran, tts, ia, ssw, wall, hd, dalle} = require('./plugins/buscadores.js')
const {efec, url, tomp3, toimg, toanime} = require('./plugins/convertidores.js') 
const {grup, del, join, setpp, hide, setna, setde, add, k, p, d, link, ban, tag, adm, infogr, warn1, warn2, online, listw} = require('./plugins/grupos.js')
const {nsfw1, nsfw2, nsfw3, nsfw4, nsfw5, nsfw6, nsfw7, nsfw8, nsfw9} = require('./plugins/nsfw.js')
const {randow1, randow2, randow3, randow4, randow5, randow6, randow7, randow8, randow9} = require('./plugins/randow.js') 
const {play, play2, play3, play4, mp3, mp4, git, tiktok, letra, mediafire, fb, ig, ig2, apk, spoti, gdrive, tttimg} = require('./plugins/descargas.js')   
const {s, wm2, attp, dado} = require('./plugins/stickers.js') 
const {owner1, owner2, owner3, owner4, owner5, owner6, owner7, owner8, owner9, owner10, owner11} = require('./plugins/propietario.js')  
const {on, on1, on2, on3, on4, on5, on6, on7, on8, on9, on10, on11, on12, on13, on14, on15} = require('./plugins/enable.js')

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
const command = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null
  const args = body.trim().split(/ +/).slice(1) 
const q = args.join(" ") 
let t = m.messageTimestamp 
const pushname = m.pushName || "Sin nombre" 
const botnm = conn.user.id.split(":")[0] + "@s.whatsapp.net"  
const _isBot = conn.user.jid
const userSender = m.key.fromMe ? botnm : m.isGroup && m.key.participant.includes(":") ? m.key.participant.split(":")[0] + "@s.whatsapp.net" : m.key.remoteJid.includes(":") ? m.key.remoteJid.split(":")[0] + "@s.whatsapp.net" : m.key.fromMe ? botnm : m.isGroup ? m.key.participant : m.key.remoteJid  
const isCreator = [conn.decodeJid(conn.user.id), ...global.owner.map(([numero]) => numero)].map((v) => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender);
const isOwner = isCreator || m.fromMe;
const isMods = isOwner || global.mods.map((v) => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender);
//const isCreator = global.owner.map(([numero]) => numero.replace(/[^\d\s().+:]/g, '').replace(/\s/g, '') + '@s.whatsapp.net').includes(userSender) 
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
const sendImage = ( image, caption ) => { conn.sendMessage(m.chat, { image: image, caption: caption }, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}  
const sendImageAsUrl = ( url, caption ) => { conn.sendMessage(m.chat, { image:  {url: url }, caption: caption }, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}  

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
console.log(chalk.bold.cyanBright(`▣────────────···\n│+${conn.user.jid.split`@`[0]} ➢ ${botname} ${conn.user.id == global.numBot2 ? '' : '(SubBot)'}`), 
chalk.bold.magenta('\n│────────────\n│⏰HORARIO: ') + chalk.magentaBright(moment(t * 1000).tz(place).format('DD/MM/YY HH:mm:ss'),
chalk.bold.red('\n️│🏷️ MODO: ') + chalk.bold.white(`[${conn.public ? 'Publico' : 'Privado'}]`), 
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
if (!conn.autoread && m.message && prefix) {
await conn.sendPresenceUpdate('composing', m.chat)
conn.readMessages([m.key])}
          
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
//await conn.groupRequestParticipantsUpdate(m.chat, [m.sender], 'approve')
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}}} 
	
//antilink
if (global.db.data.chats[m.chat].antilink) {
if (budy.match(`chat.whatsapp.com`)) {
let delet = m.key.participant
let bang = m.key.id
user = m.sender
conn.sendMessage(m.chat, {text: `\`\`\`「 ANTILINK DETECTADO 」\`\`\`\n\n@${user.split("@")[0]} 🤨 eso no esta permitido rata, Sera expulsado del grupo....`, mentions: [user], },{quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
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
if (global.db.data.chats[m.chat].isBanned && isCreator) {
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
//m.reply(`_Calma crack estoy haciendo tu sticker 👏_\n\n_*Autosticker esta activado*_`)   
media = await quoted.download()  
let encmedia = await conn.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author, contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: nn6, thumbnail: imagen1}}}, { quoted: m })
await fs.unlinkSync(encmedia)   
} else if (/video/.test(mime)) {  
if ((quoted.msg || quoted).seconds > 25) return reply('🤡 Hey Donde carajo viste un stickes que dure tanto bobo 🤣. (Máximo 15 segundos)')  
media = await quoted.download()  
let encmedia = await conn.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: goblal.author, contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: wm, body: `h`, mediaType: 2, sourceUrl: nn6, thumbnail: imagen1}}}, { quoted: m })
await new Promise((resolve) => setTimeout(resolve, 2000));   
await fs.unlinkSync(encmedia)  
}}

//autolevelup
if (global.db.data.users[m.sender].autolevelup) {	
let user = global.db.data.users[m.sender]
if (!user.autolevelup)
return !0
let before = user.level * 1
while (canLevelUp(user.level, user.exp, global.multiplier))
user.level++
//user.role = global.rpg.role(user.level).name
if (before !== user.level) {
const str = `*「 FELICIDADES LEVEL UP 🆙🥳 」*\n\n🥳 Felicidades @${sender.split`@`[0]} 👏 subiste de nivel sigue asi 👏\n\n*NIVEL :* ${before} ⟿ ${user.level}\n*RANGO :* ${user.role}\n*FECHA :* ${new Date().toLocaleString('id-ID')}\n\n_*Para saber cual es tu puerto del top, coloca el comando #lb*_`.trim()
return conn.sendMessage(m.chat, { text: str, contextInfo:{mentionedJid:[sender]}},{quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}}
 
//Chatbot
if (global.db.data.chats[m.chat].simi && prefix) {
try {     
await conn.sendPresenceUpdate('composing', m.chat)
let anu = await fetchJson(`https://api.simsimi.net/v2/?text=${budy}&lc=es&cf=false`)
let res = anu.success;
m.reply(res)
} catch (e) { 
m.reply(`*Api simsimi caida, desactive el ChatBot con:*\n#chatbot off`)
console.log(e)}}

//antiprivado
if (global.db.data.chats[m.chat].antiprivado && !isCreator) {
if (m.isBaileys && m.fromMe) return !0;
if (m.isGroup) return !1;
if (!m.message) return !0;
if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') ||  m.text.includes('menu') ||  m.text.includes('estado') || m.text.includes('bots') ||  m.text.includes('serbot') || m.text.includes('jadibot')) return !0
const chat = global.db.data.chats[m.chat];
const bot = global.db.data.settings[numBot]
await conn.sendMessage(m.chat, {text: `*ʜᴏʟᴀ @${sender.split`@`[0]}, ᴇsᴛᴀ ᴘʀᴏʜɪʙɪᴅᴏ ʜᴀʙʟᴀʀ ᴀʟ ᴘʀɪᴠᴀᴅᴏ ᴅᴇʟ ʙᴏᴛ ᴘᴏʀ ʟᴏ ᴄᴜᴀʟ sᴇʀᴀs ʙʟᴏϙᴜᴇᴀᴅᴏ.*\n*ᴘᴀʀᴀ ᴜsᴀʀ ᴇʟ ʙᴏᴛ ᴜɴɪʀᴛᴇ ᴀʟ ɢʀᴜᴘᴏ ᴅᴇʟ ʙᴏᴛ*\n\n${nn2}`, mentions: [sender], },{quoted: m})
await conn.updateBlockStatus(m.chat, 'block')
return !1;
}

let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.data.users[jid]
if (!user) continue
let afkTime = user.afkTime 
if (!afkTime || afkTime < 0) continue 
let reason = user.afkReason || ''
m.reply(`[ 💤 𝙽𝙾 𝙻𝙾𝚂 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙴 💤 ]\n\n𝙴𝚜𝚝𝚎 𝚞𝚜𝚞𝚊𝚛𝚒𝚘 𝚚𝚞𝚎 𝚖𝚎𝚗𝚌𝚒𝚘𝚗𝚊𝚜 𝚎𝚜𝚝𝚊 𝙰𝙵𝙺\n\n${reason ? '🔸️ *𝚁𝙰𝚉𝙾𝙽* : ' + reason : '🔸️ *𝚁𝙰𝚉𝙾𝙽* : 𝚂𝚒𝚗 𝚛𝚊𝚣𝚘𝚗'}\n🔸️ *𝙴𝚂𝚃𝚄𝚅𝙾 𝙸𝙽𝙰𝙲𝚃𝙸𝚅𝙾 𝙳𝚄𝚁𝙰𝙽𝚃𝙴 : ${clockString(new Date - afkTime)}`.trim())}
if (global.db.data.users[m.sender].afkTime > -1) {
let user = global.db.data.users[m.sender]
m.reply(`*🕔 𝙳𝙴𝙹𝙰𝚂𝚃𝙴 𝙳𝙴 𝙴𝚂𝚃𝙰 𝙰𝙵𝙺 🕔*\n${user.afkReason ? '\n*𝚁𝙰𝚉𝙾𝙽 :* ' + user.afkReason : ''}\n*𝙴𝚂𝚃𝚄𝚅𝙾 𝙸𝙽𝙰𝙲𝚃𝙸𝚅𝙾 𝙳𝚄𝚁𝙰𝙽𝚃𝙴 :* ${clockString(new Date - user.afkTime)}`.trim())
user.afkTime = -1
user.afkReason = ''
}
 
if (command) {
/*const date = global.db.data.users[m.sender].spam + 3000; //5 seg
if (new Date - global.db.data.users[m.sender].spam < 3000) return //conn.sendMessage(m.chat, {text: `_*Espere unos segundos antes de usar otro comando...*_ ✓`, mentions: [sender], },{quoted: m}) 
global.db.data.users[m.sender].spam = new Date * 1*/
await delay(2 * 2000)}

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
case 'hd': 
hd(conn, command, m) 
break
case 'dalle': case 'ia2': case 'aimg': case 'imagine': case 'dall-e':
dalle(conn, text, command, m, lolkeysapi) 
break
case 'whatmusic': case 'quemusica':
const acrcloud = require('acrcloud') 
const acr = new acrcloud({
  host: 'identify-eu-west-1.acrcloud.com',
  access_key: 'c33c767d683f78bd17d4bd4991955d81',
  access_secret: 'bvgaIAEtADBTbLwiPGYlxupWqkNGIjT7J9Ag2vIu', });
const q = m.quoted ? m.quoted : m;
const mime = (q.msg || q).mimetype || '';
if (/audio|video/.test(mime)) {
if ((q.msg || q).seconds > 25) return m.reply('[ ⚠️ ]\n\nEl archivo que carga es demasiado grande, le sugerimos que corte el archivo grande a un archivo más pequeño, 10-20 segundos Los datos de audio son suficientes para identificar');
const media = await q.download();
const ext = mime.split('/')[1];
fs.writeFileSync(`./tmp/${m.sender}.${ext}`, media);
const res = await acr.identify(fs.readFileSync(`./tmp/${m.sender}.${ext}`));
const {code, msg} = res.status;
if (code !== 0) throw msg;
const {title, artists, album, genres, release_date} = res.metadata.music[0];
const txt = `𝘙𝘌𝘚𝘜𝘓𝘛𝘈𝘋𝘖 𝘋𝘌 𝘓𝘈 𝘉𝘜𝘚𝘘𝘜𝘌𝘋𝘈

• 📌 𝘛𝘪𝘵𝘶𝘭𝘰: ${title}
• 👨‍🎤 𝘈𝘳𝘵𝘪𝘴𝘵𝘢: ${artists !== undefined ? artists.map((v) => v.name).join(', ') : 'No encontrado'}
• 💾 𝘈𝘭𝘣𝘶𝘮: ${album.name || 'No encontrado'}
• 🌐 𝘎𝘦𝘯𝘦𝘳𝘰: ${genres !== undefined ? genres.map((v) => v.name).join(', ') : 'No encontrado'}
• 📆 𝘍𝘦𝘤𝘩𝘢 𝘥𝘦 𝘭𝘢𝘯𝘻𝘢𝘮𝘪𝘦𝘯𝘵𝘰: ${release_date || 'No encontrado'}`.trim();
fs.unlinkSync(`./tmp/${m.sender}.${ext}`);
m.reply(txt);
} else throw '*[ ⚠️ ] 𝘙𝘦𝘴𝘱𝘰𝘯𝘥𝘢 𝘢 𝘶𝘯 𝘢𝘶𝘥𝘪𝘰*';
break
case 'serbot': case 'jadibot': case 'qr':
jadibot(conn, m, command, text, args, sender)
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
await conn.sendMessage(m.chat, {text: responseMessage, mentions: conn.parseMention(responseMessage)}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
break

//info
case 'estado': case 'infobot':
state(conn, m, speed, sender, fkontak) 
break
case 'menu': case 'help': case 'menucompleto':
menu(conn, prefix, pushname, sender, m, pickRandom, fkontak)
break  
case 'menu2': case 'audio': 
menu2(conn, pushname, m, fkontak)
break
case 'nuevo': case 'extreno':
nuevo(conn, m, sender, pickRandom, fkontak)    
break   
case 'reglas':    
regla(conn, m, sender, pickRandom, fkontak)   
break  
case 'owner': case 'creador': case 'contacto':
owner(conn, m, sender)  
break 
case 'grupos': case 'grupoficiales': 
grupo(conn, m, sender, pickRandom) 
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
case 'sc': 
sc(conn, m)  
break 
//activa/desactivar
case 'welcome': case 'bienvenida': on(isGroupAdmins, text, command, args, m) 
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
case 'antispam': on13(isCreator, text, command, args, m) 
break
case 'chatbot': case 'simsimi': on14(isGroupAdmins, text, command, args, m) 
break
case 'autolevelup': case 'autonivel': on15(text, command, args, m) 
break
//Grupo 
case 'grupo': grup(conn, m, args, isBotAdmins, isGroupAdmins, command, prefix, text)
break
case 'delete': case 'del': del(conn, m, isBotAdmins, isGroupAdmins)
break  		
case 'join': case 'unete': join(conn, m, isCreator, text, delay, args, sender)
break           
case 'hidetag': case 'notificar': case 'tag': hide(conn, m, isGroupAdmins, q, participants)
break 
case 'setppname': case 'nuevonombre': case 'newnombre': setna(conn, m, isBotAdmins, isGroupAdmins, text)
break
case 'setdesc': case 'descripción': setde(conn, m, isBotAdmins, isGroupAdmins, text)
break
case 'setppgroup': case 'setpp': setpp(conn, m, isBotAdmins, isGroupAdmins, quoted, prefix, command, mime, args, from)
break
case 'anularlink': case 'resetlink': case 'revoke':
let res = conn.groupRevokeInvite(m.chat)
break
case 'add': case 'agregar': case 'invitar': add(conn, m, isBotAdmins, isGroupAdmins, text, sender, prefix)
break           
case 'kick': case 'echar': case 'sacar': k(conn, m, isBotAdmins, isGroupAdmins, quoted, text, sender)
break 
case 'promote': case 'darpoder': p(conn, m, isBotAdmins, isGroupAdmins, quoted, sender)
break
case 'demote': case 'quitarpoder': d(conn, m, isBotAdmins, isGroupAdmins, quoted, sender)
break            
case 'link': case 'linkgc':  link(conn, m, isBotAdmins)
break                        		
case 'banchat': ban(m, isCreator, text, command, args)
break              
case 'tagall': case 'invocar': case 'todos': tag(conn, m, isGroupAdmins, participants, q)
break                 
case 'admins': case 'administradores': adm(conn, participants, groupMetadata, args, m) 
break 
case 'infogrupo': case 'groupinfo': infogr(conn, participants, groupMetadata, fkontak, m) 
break  
case 'warn': case 'advertencia': warn1(conn, m, isBotAdmins, isGroupAdmins, sender, command, text, delay) 
break 
case 'unwarn': case 'quitardvertencia': warn2(conn, m, isBotAdmins, isGroupAdmins, sender, command, delay) 
break
case 'listwarn': listw(conn, isCreator, m) 
break
case 'listonline': case 'liston': online(conn, sender, args, store, m) 
break
//juegos
case 'simi': case 'alexa': case 'siri': await game(m, text, pickRandom, pushname, command)
break  
case 'gay': await game1(conn, m, participants, sender, who)
break            
case 'pareja': case 'formarpareja': await game2(conn, m, pushname, participants, sender)
break
case 'fake': await game3(conn, text, prefix, command, body, from, m, sender, quoted)
break
case 'follar': case 'violar': case 'coger': game4(conn, m, pushname, text, sender)
break 
case 'ppt': case 'suit': game5(conn, m, pushname, text, sender)
break
case 'pregunta': case 'preg': game6(text, command, m)  
break   
case 'doxear': case 'doxxeo': game7(conn, pickRandom, text) 
break
case 'personalidad': game8(conn, text, pickRandom, m) 
break   
case 'slot':  case 'apuesta': game9(conn, args, prefix, command, msToTime, m) 
break
case 'verdad': game10(sendImageAsUrl, pickRandom)   
break   
case 'reto': game11(pickRandom, sendImageAsUrl)   
break                
case 'top': game12(conn, text, participants, pickRandom, m) 
break 
case 'topgays': case 'topotakus': game13(conn, participants, command, m) 
break 
case 'piropo': game14(m, pickRandom) 
break
case 'racista': game15(m, body)  
break
case 'love': game16(conn, text, m, sender) 
break
case 'ship': game17(conn, text, m)  
break 
case 'formartrio': game18(conn, participants, m)
break
case 'formapareja5': 
game19(conn, participants, m) 
break
//convertidores
case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel': efec(conn, command, mime, quoted, exec, prefix, m, from) 
break   
case 'toaudio': case 'tomp3': tomp3(conn, mime, quoted, m) 
break
case 'toimg': case 'toimagen': toimg(conn, mime, quoted, exec, m) 
break
case 'tourl': url(conn, mime, quoted, util, m) 
break
case 'toanime': toanime(conn, mime, quoted, lolkeysapi, m) 
break
//nsfw
case 'hentai': nsfw1(conn, m, pickRandom)
break
case 'nsfwloli': nsfw2(conn, m, pickRandom) 
break
case 'lewd': case 'feed': case 'gasm': case 'anal': case 'holo': case 'tits': case 'kuni': case 'kiss': case 'erok': case 'smug': case 'solog': case 'feetg': case 'lewdk': case 'waifu': case 'pussy': case 'femdom': case 'cuddle': case 'eroyuri': case 'cum_jpg': case 'blowjob': case 'holoero': case 'erokemo': case 'fox_girl': case 'futanari': case 'wallpaper': nsfw3(conn, m, pickRandom, sendImageAsUrl, command)
break
case 'hentai2': nsfw4(sendImageAsUrl, m) 
break
case 'porno': nsfw5(sendImageAsUrl, m) 
break 
case 'pack': nsfw6(sendImageAsUrl, m)   
break
case 'pack2': case 'pack3':  nsfw7(sendImageAsUrl, m)  
break
case 'videoxxx': case 'vídeoxxx': case 'videoxxxlesbi': nsfw8(conn, m)  
break
case 'videolesbixxx': case 'pornolesbivid': case 'pornolesbianavid': case 'pornolesbiv': case 'pornolesbianav': nsfw9(conn, m)  
break 
//randow     
case 'memes': randow1(sendImageAsUrl, m)
break  
case 'loli': randow2(sendImageAsUrl, m, pickRandom)
break   
case 'lolivid': randow3(conn, m, pickRandom)  
break
case 'neko': randow4(sendImageAsUrl, m, pickRandom)
break  
case 'akira': case 'akiyama': case 'anna': case 'asuna': case 'ayuzawa': case 'boruto': case 'chiho': case 'chitoge': case 'deidara': case 'erza': case 'elaina': case 'eba': case 'emilia': case 'hestia': case 'hinata': case 'inori': case 'isuzu': case 'itachi': case 'itori': case 'kaga': case 'kagura': case 'kaori': case 'keneki': case 'kotori': case 'kurumi': case 'madara': case 'mikasa': case 'miku': case 'minato': case 'naruto': case 'nezuko': case 'sagiri': case 'sasuke': case 'sakura': case 'cosplay': randow5(sendImageAsUrl, command, pickRandom, m)
break 
case 'horny': randow6(conn, m) 
break
case 'simp': randow7(conn, m) 
break
case 'lolice': randow8(conn, m) 
break  
case 'comentar': case 'comment': randow9(conn, text, m, sender, pushname)
break 
case 'blackpink':  
sendImageAsUrl("https://delirius-image-random.vercel.app/api/all");
break
//descargas		    
case 'play': case 'musica': 
play(conn, text, command, args, m)  
break   
case 'play2': case 'video': 
play2(conn, text, command, args, m)  
break 
case 'play3': case 'playdoc': case 'playaudiodoc': case 'ytmp3doc': 
play3(conn, text, command, args, m)  
break
case 'play4': case 'playdoc2': case 'playvideodoc': case 'ytmp4doc': 
play4(conn, text, command, args, m)   
break
case "ytmp3": case "ytaudio": 
mp3(conn, args, text, command, fkontak, ytplayvid, m)
break 
case 'ytmp4': case 'ytvideo': 
mp4(conn, args, text, command, fkontak, m)
break   
case 'music': case 'spotify':
spoti(conn, text, m, from) 
break
case 'gitclone':
git(conn, args, command, m) 
break
case 'tiktok': case 'tt':
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
case 'gdrive': 
gdrive(conn, args, command, m) 
break
case 'tiktokimg': case 'ttimg': 
tttimg(conn, text, command, m) 
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
case 'afk': {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
let user = global.db.data.users[m.sender]
user.afkTime = + new Date
user.afkReason = text
const afk = `𝙴𝚂𝚃𝙴 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂 ${pushname}  𝙴𝚂𝚃𝙰 𝙸𝙽𝙰𝙲𝚃𝙸𝚅𝙾 😴\n💤 𝙽𝙾 𝙻𝙾𝚂 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙴 💤\n☣️ 𝙼𝙾𝚃𝙸𝚅𝙾𝚂 : ${text ? text : ''}\n\n\n\n\n\n\n`
conn.relayMessage(m.chat, {scheduledCallCreationMessage: {callType: 'VIDEO', scheduledTimestampMs: 0, title: afk }}, {})}
/*/m.reply(`╭━─━─━─≪ 𝙰𝙺𝙵 ≫─━─━─━╮
┃ 𝙴𝚂𝚃𝙴 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂 ${pushname}
┃ 𝙴𝚂𝚃𝙰 𝙸𝙽𝙰𝙲𝚃𝙸𝚅𝙾 😴
┃ ≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋
┃ 💤 𝙽𝙾 𝙻𝙾𝚂 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙴 💤
┃ ☣️ 𝙼𝙾𝚃𝙸𝚅𝙾𝚂 : ${text ? text : ''}
╰━─━─━─≪ ${vs} ≫─━─━─━╯`)}*/
break             
case 'buy': case 'buyall': {
await buy(conn, m, sender, args, command, text, fkontak)}
break
case 'minar': case 'mine':
await mine(conn, m, sender, fkontak)
break 
case 'trabajar': case 'work': case 'w': {
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
wm2(conn, args, quoted, mime, m) 
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
owner5(isCreator, conn, quoted, text, command, m) 
break
case 'delcmd': 
owner6(isCreator, conn, m) 
break
case 'listcmd': 
owner7(isCreator, conn, m) 
break
case 'addcase': 
owner8(conn, isCreator, text, q, m) 
break	     
case 'getcase': 
owner9(conn, isCreator, text, args, m) 
break 
case 'añadirdiamantes': case 'dardiamantes': case 'addlimit':
owner10(isCreator, m, text) 
break
case 'añadirxp': case 'addexp': case 'addxp': 
owner11(isCreator, m, text) 
break 
case 'banuser': {
let who 
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
else who = m.chat
let user = global.db.data.users[who]
if (!who) return m.reply(`*⚠️ 𝘌𝘵𝘪𝘲𝘶𝘦𝘵𝘢/𝘮𝘦𝘯𝘤𝘪𝘰𝘯𝘢 𝘢 𝘢𝘭𝘨𝘶𝘪𝘦𝘯*\n\n*𝘌𝘫𝘦𝘮𝘱𝘭𝘰 :* ${prefix + command} @user`) 
let users = global.db.data.users
users[who].banned = true
m.reply(`*𝘌𝘭 𝘶𝘴𝘶𝘢𝘳𝘪𝘰𝘴 𝘧𝘶𝘦 𝘉𝘢𝘯𝘦𝘢𝘥𝘰 𝘺𝘢 𝘯𝘰 𝘱𝘰𝘥𝘳𝘢́ 𝘶𝘴𝘢𝘳 𝘮𝘪𝘴 𝘤𝘰𝘮𝘢𝘯𝘥𝘰𝘴*`)}
break
case 'unbanuser': {
let who 
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
else who = m.chat
let user = global.db.data.users[who]
if (!who) return m.reply(`*⚠️ 𝘌𝘵𝘪𝘲𝘶𝘦𝘵𝘢/𝘮𝘦𝘯𝘤𝘪𝘰𝘯𝘢 𝘢𝘭 𝘶𝘴𝘶𝘢𝘳𝘪𝘰 𝘱𝘢𝘳𝘢 𝘥𝘦𝘴𝘣𝘢𝘯𝘦𝘢𝘳*`) 
let users = global.db.data.users
users[who].banned = false
m.reply(`*𝘌𝘭 𝘶𝘴𝘶𝘢𝘳𝘪𝘰𝘴 𝘩𝘢 𝘴𝘪𝘥𝘰 𝘋𝘦𝘴𝘣𝘢𝘯𝘦𝘢𝘥𝘰 𝘤𝘰𝘯 𝘦𝘹𝘪𝘵𝘰𝘴✅ 𝘢𝘩𝘰𝘳𝘢 𝘴𝘪 𝘱𝘶𝘦𝘥𝘦 𝘶𝘴𝘢𝘳 𝘦𝘭 𝘣𝘰𝘵*`)}
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
if (!m.isGroup) return m.reply(info.group)
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isCreator) return reply(info.owner)
reply(`${pickRandom(['Ya eres admin mi jefe 😎', '*LISTO YA ERES ADMIN MI PROPIETARIO/DESARROLLADO 😎*'])}`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], "promote")}  
break 
case 'leave': {  
if (!isCreator) return reply(info.owner)
reply(m.chat, `*Adios fue un gusto esta aqui hasta pronto 👋*`)
await conn.groupLeave(m.chat)}
break
case 'backup': case 'respaldo': case 'copia':
if (!isCreator) return reply(info.owner)
try {
let d = new Date
let date = d.toLocaleDateString('fr', { day: 'numeric', month: 'long', year: 'numeric' })
let database = await fs.readFileSync(`./database.json`)
let creds = await fs.readFileSync(`./sessions/creds.json`)
await m.reply('*𝘌𝘯𝘷𝘪𝘢𝘯𝘥𝘰 𝘤𝘰𝘱𝘪𝘢 𝘥𝘦 𝘴𝘦𝘨𝘶𝘳𝘪𝘥𝘢 𝘶𝘯 𝘮𝘰𝘮𝘦𝘯𝘵𝘰*')
await conn.sendMessage(m.sender, {document: database, mimetype: 'application/json', fileName: `database.json`}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
await conn.sendMessage(m.sender, {document: creds, mimetype: 'application/json', fileName: `creds.json`}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} catch (e) {
console.log(e)}   
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
case 'unbanned': case 'sacasupport': {
if (!isCreator) return
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (!isCreator) return conn.sendMessage(from, { text: info.owner }, { quoted: msg }); 
var targetnya = tosend.split('@')[0]
try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=199999999999999999995777678776668876677777")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Aku Tidak Tau Mengapa Nomor Saya Tiba Tiba Di Larang Dari Menggunakan WhatsApp Aku Hanya Membalas Pesan Customer Saya Mohon Buka Larangan Akun WhatsApp Saya: [+${targetnya}]
Terimakasih`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")
let res = await axioss({url, method: "POST", data: form, headers: {cookie}})
reply(`Espere de 1 a 24 horas para el proceso de desbloqueo del bot y espere ±30 segundos para ver la respuesta por correo electrónico de WhatsApp señor Hw Mods🥺🙏`)
await sleep(90000)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(`##- WhatsApp Support -##\n\nHola, gracias por contactarnos. Nuestro sistema marca la actividad de su cuenta como una violación de nuestros Términos de servicio y bloquea su número de teléfono. Realmente te apreciamos como usuario. Nos disculpamos por cualquier confusión o inconveniente causado por este problema. Hemos eliminado el bloqueo después de revisar la actividad de su cuenta. Ahora deberías tener acceso a WhatsApp. Como siguiente paso, te recomendamos volver a registrar tu número de teléfono en WhatsApp para asegurarte de tener acceso. Puede visitar nuestro sitio web para descargar la aplicación WhatsApp o WhatsApp Business.`)
} else if (payload.includes(`"payload":false`)) {
reply(`##- WhatsApp Support -##\n\nGracias por contactarnos. Nos comunicaremos con usted por correo electrónico y eso puede demorar hasta tres días hábiles.`)
} else reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else reply('⚠️ *Escriba el numero que quiere desbanea*')}
break
//============= 

//función pickrandow
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}  

default:  
if (budy.includes(`Todo bien`)) {
conn.sendPresenceUpdate('composing', m.chat)
await m.reply(`${pickRandom(['Si amigo todo bien, vite', 'Todo bien capo y tu 😎'])}`)} 
if (budy.includes(`Buenos dias`)) {
conn.sendPresenceUpdate('composing', m.chat)
m.reply(`${pickRandom(['Buenos Dias trolos de mierda', '*Buen dias mi amor 😘*', '*Buenos Dias hermosa mañana 🥰*'])}`)}  
if (budy.includes(`autodestruction`)) { 
let e = fs.readFileSync('./src/autodestruction.webp')
let or = ['texto', 'sticker'];
let media = or[Math.floor(Math.random() * 2)]
if (media === 'texto')
m.reply('*Mi jefe no me quiere 😢*') 
if (media === 'sticker')
conn.sendFile(m.chat, e, 'sticker.webp', '',m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: 'ᶜ ᴬᵘᵗᵒᵈᵉˢᶜʳᵘʸᵉ', mediaType: 2, sourceUrl: nna, thumbnail: imagen1}}}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}
if (budy.includes(`NovaBot`)) {
m.react(`${pickRandom(['🌟', '👀', '🤑'])}`)}
if (budy.includes(`Bot`)) { 
await conn.sendPresenceUpdate('composing', m.chat)
game(m, text, pickRandom, pushname, command)} 
if (m.mentionedJid.includes(conn.user.jid)) {
let noetiqueta = fs.readFileSync('./src/etiqueta.webp')
let or = ['texto', 'sticker']; 
let media = or[Math.floor(Math.random() * 2)]
if (media === 'sticker')     
conn.sendFile(m.chat, noetiqueta, 'sticker.webp', '',m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: 'Yo que?', mediaType: 2, sourceUrl: nna, thumbnail: imagen1}}}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
if (media === 'texto')
await conn.sendMessage(m.chat, {text: `${pickRandom(['*QUE YO QUE?*', 'Que?'])}`}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}
if (budy.startsWith(`A`)) {
if (!global.db.data.chats[m.chat].audios) return
let vn = './media/a.mp3'
await conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": botname, "body": ``, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": md, "showAdAttribution": true}}, seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}
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
return reply(JSON.stringify(eval(`(async () => { ${budy.slice(3)} })()`), null, '\t'))  
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
conn.sendMessage("5492266466080@s.whatsapp.net", { text: "Hola Creador/desarrollador, parece haber un error, por favor arreglarlo 🥲\n\n" + util.format(e), 
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
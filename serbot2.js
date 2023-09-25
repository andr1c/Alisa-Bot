//jadibot : @skid89
const { makeWASocket, makeInMemoryStore, useMultiFileAuthState, DisconnectReason, proto , jidNormalizedUser,WAMessageStubType, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, msgRetryCounterMap, makeCacheableSignalKeyStore, fetchLatestBaileysVersion } = require("@whiskeysockets/baileys")
const pino = require('pino')
const { Boom } = require('@hapi/boom')   
const yargs = require('yargs/yargs')   
const fs = require('fs')   
const FileType = require('file-type')   
const chalk = require('chalk')   
const path = require('path')   
const qrcode = require('qrcode')   
const NodeCache = require('node-cache')
const util = require('util')
const ws = require('ws')
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom } = require('./libs/fuctions')   
   const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'storeV2' }) })   
const crm9 ='SmFkaWJvdCBoZWNobyBwb3IgQFNraWR5ODkNCmh0dHBzOi8vd3d3LmdpdGh1Yi5jb20vU2tpZHk4OQ=='
let rtx = `Escanea este QR para convertirte en un bot temporal\n\n1) Haz clic en los tres puntos en la esquina superior derecha\n2) Toca WhatsApp Web\n3) Escanea este QR\n\n*El QR expira a los 30 segundos*\n\n`
let rtx2 = `NUEVO FORMA DE HACERTE UN SUB BOT\n\n1) Haz clic en los tres puntos en la esquina superior derecha\n2) Toca WhatsApp Web\n3) da click en vincular con codigo de teléfono\n4) pega el codigo a continuación\n\n`
const jadibot2 = async (conn, m, command, text, args) => {
const { sendImage, sendMessage, decodeJid, getName } = conn
const { reply } = m
if (!global.db.data.settings[conn.user.jid].jadibot) return m.reply(`*⚠️ Este comando fue desabilitado por el creador*`)
if (conn.user.jid !== global.numBot) return m.reply(`*⚠️ Este comando solo puede ser usado en un Bot principa*\n\n👉🏻 https://api.whatsapp.com/send/?phone=${global.numBot.split`@`[0]}&text=${prefix + command}&type=phone_number&app_absent=0`) 
const drmer = Buffer.from(crm9, `base64`)
const mcode = args[0] && args[0].includes("--code") ? true : args[1] && args[1].includes("--code") ? true : false // stoled from aiden hehe
//const { state, saveCreds, saveState } = await useMultiFileAuthState(path.join(__dirname, `./jadibts/${m.sender.split("@")[0]}`), pino({ level: "silent" }));   
let _text = text
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? parentw.user.jid : m.sender
let id = `${who.split`@`[0]}`  

if (mcode) {
args[0] = args[0].replace("--code", "").trim()
if (args[1]) args[1] = args[1].replace("--code", "").trim()
if (args[0] == "") args[0] = undefined
console.log(args[0])
}
if (!fs.existsSync("./jadibts/"+ id)){
fs.mkdirSync("./jadibts/"+ id, { recursive: true });
}
args[0] && args[0] != undefined ? fs.writeFileSync("./jadibts/" + id + "/creds.json", JSON.stringify(JSON.parse(Buffer.from(args[0], "base64").toString("utf-8")), null, '\t')) : ""

if (fs.existsSync("./jadibts/" + id + "/creds.json")) {
let creds = JSON.parse(fs.readFileSync("./jadibts/" + id + "/creds.json"))
if (creds) {
if (creds.registered = false) {
fs.unlinkSync("./jadibts/" + id + "/creds.json")
}}}
    
try {
async function skBot() {
console.info = () => {}
let { version, isLatest } = await fetchLatestBaileysVersion()
const msgRetry = (MessageRetryMap) => { }
const msgRetryCache = new NodeCache()
const { state, saveState, saveCreds } = await useMultiFileAuthState("./jadibts/" + id)
   
const JadibotSettings = {
printQRInTerminal: false,
logger: pino({ level: 'silent' }),
auth: { creds: state.creds, keys: makeCacheableSignalKeyStore(state.keys, pino({level: 'silent'})) },
msgRetry,
msgRetryCache,
version,
syncFullHistory: true,
browser: mcode ? ["Chrome (Linux)", "", ""] : ['Sub bot','Safari','1.0.0'],
defaultQueryTimeoutMs: undefined,
getMessage: async (key) => {
if (store) {
const msg = store.loadMessage(key.remoteJid, key.id)
return msg.message && undefined
} return {
conversation: 'Simple Bot',
}}}
    
const conn = makeWASocket(JadibotSettings)
conn.isBotInit = false
let skmod = conn
    
skmod.ev.on('messages.upsert', async chatUpdate => {   
try {   
chatUpdate.messages.forEach(async (mek) => {   
try {   
if (!mek.message) return   
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message   
if (mek.key && mek.key.remoteJid === 'status@broadcast') return   
if (!chatUpdate.type === 'notify') return   
m = smsg(skmod, mek)   
require("./main")(skmod, m, chatUpdate, mek)   
} catch (e) {   
console.log(e)   
}})} catch (err) {   
console.log(err)   
}})   
    
skmod.ev.on('connection.update', async (up) => {     
const { connection, lastDisconnect, isNewLogin, qr } = up
if (connection == 'connecting') return
console.log('Ejecutar setcode (jadibot)....'); 
if (connection) { 
if (connection != 'connecting')  
console.log('Connectando....')
}
if (isNewLogin) conn.isInit = false
if (qr && !mcode) return sendMessage(m.chat, { image: await qrcode.toBuffer(qr, { scale: 8 }), caption: rtx + drmer.toString("utf-8")}, { quoted: m})
if (qr && mcode) {
sendMessage(m.chat, {text : rtx2 + drmer.toString("utf-8")}, { quoted: m })
await sleep(5000)
let secret = await conn.requestPairingCode((m.sender.split`@`[0]))
await m.reply(secret)
}
const code = lastDisconnect?.error?.output?.statusCode || lastDisconnect?.error?.output?.payload?.statusCode
console.log(code)
//} catch (error) {
//m.reply(util.format(error))
//}}
    
const endSesion = async (loaded) => {
if (!loaded) {
try {
skmod.ws.close()
} catch {
}
skmod.ev.removeAllListeners()
let i = global.listJadibot.indexOf(skmod)
if (i < 0) return 
delete global.listJadibot[i]
global.listJadibot.splice(i, 1)
}}
   
if (global.db.data == null) return loadDatabase()
if (connection == 'open') {
conn.isInit = true
global.listJadibot.push(conn)
await sendMessage(m.chat, {text : args[0] ? "*⚠️ Reconectado con éxito!!*" : `*✅ Conectado con exito*\n*Si tu bot fue desconectado usa ${prefix + command}*`}, { quoted: m })
if (connection === 'open') {
sendMessage(m.chat, {text: `*✅ Ya estas conectado, sea paciente, los mensajes se estan cargando...*`}, { quoted: m }) 
}
await sleep(5000)
if (!args[0]) sendMessage(m.chat, {text: prefix + command + " " + Buffer.from(fs.readFileSync("./jadibts/" + id + "/creds.json"), "utf-8").toString("base64")}, { quoted: m })
}
const reason = lastDisconnect?.error?.output?.statusCode || lastDisconnect?.error?.output?.payload?.statusCode
if (connection === 'close') {
console.log(reason)
if (reason == 405) {
await fs.unlinkSync("./jadibts/" + id + "/creds.json")
//thank you aiden_notLogic
return await reply(`*⚠️ Reenvia el comando....*`)
}
if (reason === DisconnectReason.restartRequired) {
skBot()
return console.log('[ ⚠️ ] Reinicio requerido, Reiniciando....'); 
// reply(`*⚠️ Reinicio requerido,*\n*Reiniciando...*`)
} else if (reason === DisconnectReason.loggedOut) {
sleep(4000)
return reply(`*⚠️ Dispositivo desconectado*\n\n*Tendras que volver a iniciar sesion (usa .deljadibot)*`)
} else if (reason == 428) {
await endSesion(false)
return reply(`*⚠️ Conexion cerrada*\n*Intenta reconectarte con: ${prefix + command}*`)
} else if (reason === DisconnectReason.connectionLost) {
await skBot()
return console.log('[ ⚠️ ] Conexion perdida con el servidor, reconexion Forzada'); 
//await reply(`*❗ Conexion perdida del servidor*\n*reconexion Forzada*`)
} else if (reason === DisconnectReason.badSession) {
return await reply(`*[ ⚠️ ] Tu conexion es invalida*\n*no se te reconectara*`)
} else if (reason === DisconnectReason.timedOut) {
await endSesion(false)
return console.log('[ ⚠️ ] Se agoto el tiempo de conexión...')
//reply(`*[ ⚠️ ] Se agoto el tiempo de conexión...*`)
} else {
console.log(`[ ⚠️ ] Error desconocido:\n${reason || ''}: ${connection || ''}`); 
//reply(`*⚠️ error desconocido*\n${reason || ''}: ${connection || ''}\n*Reportalo al creador*`) // also aiden lol
}
let i = global.listJadibot.indexOf(skmod)
if (i < 0) return console.log("[ ⚠️ ] No se encontro")
delete global.listJadibot[i]
global.listJadibot.splice(i, 1) // I stole it from aiden (credits to him)
}})

setInterval(async () => {
if (!conn.user) {
try {
conn.ws.close()
} catch { 
}
skmod.ev.removeAllListeners()
let i = global.listJadibot.indexOf(skmod)
if (i < 0) return 
delete global.listJadibot[i]
global.listJadibot.splice(i, 1)
}}, 60000) //again aiden -.-
  
skmod.ev.on("groups.update", async (json) => {
console.log(json)
const res = json[0];
let autoDetect = global.db.data.chats[res.id].autoDetect
if (!autoDetect) return
if (res.announce == true) {
await sleep(2000)
try {
ppgroup = await skmod.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
}
let text = `「 𝐀𝐉𝐔𝐒𝐓𝐄𝐒 𝐃𝐄𝐋 𝐆𝐑𝐔𝐏𝐎 」\n\n*¡Ahora solo los administradores pueden enviar mensajes!*`
skmod.sendMessage(res.id, {text: text,  
contextInfo:{forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[m.sender],  
"externalAdReply": {  
"showAdAttribution": true,  
"containsAutoReply": false,
"renderLargerThumbnail": false,  
"title": '[ 🔒 ＧＲＵＰＯ ＣＥＲＲＡＤＯ ]',   
"mediaType": 1,   
"thumbnail": global.imagen1,  
"mediaUrl": md,  
"sourceUrl": md 
}}}, { quoted: null })
} else if (res.announce == false) {
await sleep(2000)
try {
ppgroup = await skmod.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
}
let text = `「 𝐀𝐉𝐔𝐒𝐓𝐄𝐒 𝐃𝐄𝐋 𝐆𝐑𝐔𝐏𝐎 」\n\n*Ahora todos los participantes pueden mandar mensajes 🗣️*`
skmod.sendMessage(res.id, {text: text,  
contextInfo:{forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[m.sender],  
"externalAdReply": {  
"showAdAttribution": true,  
"containsAutoReply": false,
"renderLargerThumbnail": false,  
"title": '[ 🔓 ＧＲＵＰＯ ＡＢＩＥＲＴＯ ]',   
"mediaType": 1,   
"thumbnail": global.imagen1,  
"mediaUrl": md,  
"sourceUrl": md 
}}}, { quoted: null })
} else if (res.restrict == true) {
await sleep(2000)
try {
ppgroup = await skmod.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
}
let text = `「 𝐀𝐉𝐔𝐒𝐓𝐄𝐒 𝐃𝐄𝐋 𝐆𝐑𝐔𝐏𝐎 」\n\n*ᴀʜᴏʀᴀ sᴏʟᴏ ʟᴏs ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀᴇs ᴘᴜᴇᴅᴇ ᴇᴅɪᴛᴀʀ ʟᴏs ᴀᴊᴜsᴛᴇ ᴅᴇʟ ɢʀᴜᴘᴏ*`
skmod.sendMessage(res.id, {text: text,  
contextInfo:{forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[m.sender],  
"externalAdReply": {  
"showAdAttribution": true,  
"containsAutoReply": false,
"renderLargerThumbnail": false,  
"title": info.advertencia, 
"mediaType": 1,   
"thumbnail": global.imagen1,  
"mediaUrl": md,  
"sourceUrl": md 
}}}, { quoted: null })
} else if (res.restrict == false) {
await sleep(2000)
try {
ppgroup = await skmod.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
}
let text = `「 𝐀𝐉𝐔𝐒𝐓𝐄𝐒 𝐃𝐄𝐋 𝐆𝐑𝐔𝐏𝐎 」\n\n*ᴀʜᴏʀᴀ ᴛᴏᴅᴏs ʟᴏs ᴘᴀʀᴛɪᴄɪᴘᴀʀᴛᴇ ᴘᴜᴇᴅᴇ ᴇᴅɪᴛᴀʀ ʟᴏs ᴀᴊᴜsᴛᴇ ᴅᴇʟ ɢʀᴜᴘᴏ*`
skmod.sendMessage(res.id, {text: text,  
contextInfo:{forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[m.sender],  
"externalAdReply": {  
"showAdAttribution": true,  
"containsAutoReply": false,
"renderLargerThumbnail": false,  
"title": info.advertencia, 
"mediaType": 1,   
"thumbnail": global.imagen1,  
"mediaUrl": md,  
"sourceUrl": md 
}}}, { quoted: null })
} else if(!res.desc == ''){
await sleep(2000)
try {
ppgroup = await skmod.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
}
let text = `「 𝐀𝐉𝐔𝐒𝐓𝐄𝐒 𝐃𝐄𝐋 𝐆𝐑𝐔𝐏𝐎 」\n\n*La descripción del grupo fue cambiada nueva descripción es *\n${res.desc}`
skmod.sendMessage(res.id, {text: text,  
contextInfo:{forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[m.sender],  
"externalAdReply": {  
"showAdAttribution": true,  
"containsAutoReply": false,
"renderLargerThumbnail": false,  
"title": info.advertencia, 
"mediaType": 1,   
"thumbnail": global.imagen1,  
"mediaUrl": md,  
"sourceUrl": md 
}}}, { quoted: null })
} else {
await sleep(2000)
try {
ppgroup = await skmod.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
}
let text = `「 𝐀𝐉𝐔𝐒𝐓𝐄𝐒 𝐃𝐄𝐋 𝐆𝐑𝐔𝐏𝐎 」\n\n*El nombre del grupo fue cambiado nuevos nombre es :*\n${res.subject}`
skmod.sendMessage(res.id, {text: text,  
contextInfo:{forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[m.sender],  
"externalAdReply": {  
"showAdAttribution": true,  
"containsAutoReply": false,
"renderLargerThumbnail": false,  
"title": info.advertencia, 
"mediaType": 1,   
"thumbnail": global.imagen1,  
"mediaUrl": md,  
"sourceUrl": md 
}}}, { quoted: null })
}})

skmod.ev.on('group-participants.update', async (anu) => {
let isWelcome = global.db.data.chats[anu.id].welcome
if (!isWelcome) return
console.log(anu)
try {
let metadata = await skmod.groupMetadata(anu.id)
let participants = anu.participants
for (let num of participants) {
// Get Profile Picture User
try {
ppuser = await skmod.profilePictureUrl(num, 'image')
} catch {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}

//Profile
try {
ppgroup = await skmod.profilePictureUrl(anu.id, 'image')
} catch {
ppgroup = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}

if (anu.action == 'add') {
skmod.sendMessage(anu.id, { text: `┏─━─━─━∞◆∞━─━─━─┓\n┆ ｡･ﾟ♡ﾟ･｡🍓｡･ﾟ♡ﾟ･｡🍒\n┆ Hola @${num.split("@")[0]} ¿COMO ESTAS?😃\n┆——————«•»——————\n┆ Bienvenido a ${metadata.subject}\n┆——————«•»——————\n┆un gusto conocerte amig@ 🤗\n┆Recuerda leer las reglas del grupo\n┆para no tener ningun problema 🧐\n┖━─━─━─━─━─━─━─━─━\n\n${metadata.desc}`, contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[num],
"externalAdReply": {"showAdAttribution": true,
"containsAutoReply": true,
"title": `乂 ＷＥＬＣＯＭＥ 乂`,
body: `${metadata.subject}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": ppuser,
"sourceUrl": md}}}) 
} else if (anu.action == 'remove') {
skmod.sendMessage(anu.id, { text: `┏─━─━─━∞◆∞━─━─━─┓\n┆ ｡･ﾟ♡ﾟ･｡🍓｡･ﾟ♡ﾟ･｡🍒\n┆ adiós @${num.split("@")[0]} se fue\n┆ un fan del bts\n  ┖━─━─━─━─━─━─━─━─━┚`,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[num],
"externalAdReply": {"showAdAttribution": true,
"containsAutoReply": true,
"title": '乂 ＡＤＩＯ́Ｓ 乂', 
body: `Esperemos que no vuelva -_-`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": ppuser,
"sourceUrl": md}}}) 
} else if (anu.action == 'promote') {
skmod.sendMessage(anu.id, { text: `*Hey @${num.split('@')[0]} Ahora eres admin del grupo 🥳`, 
 contextInfo:{
 mentionedJid:[num],
 "externalAdReply": {"showAdAttribution": true,
 "containsAutoReply": true,
 "title": `乂 ＮＵＥＶＯ ＡＤＭＩＮ 乂`,
"body": botname,
 "previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": ppuser, 
"sourceUrl": md}}})
} else if (anu.action == 'demote') {
skmod.sendMessage(anu.id, { text: `Hey @${num.split('@')[0]} ya no eres admins 🥲`,
 contextInfo:{
 mentionedJid:[num],
 "externalAdReply": {"showAdAttribution": true,
 "containsAutoReply": true,
 "title": `乂 ＵＮ ＡＤＭＩＮ ＭＥＮＯＳ  乂`,
"body": botname, 
 "previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": ppuser,
"sourceUrl": md}}})
}}} catch (err) {
console.log(err)
}})
skmod.public = true
conn.ev.on('creds.update', saveCreds)   
store.bind(conn.ev);   
}
   
skBot()
} catch (e) {
m.reply(util.format(e))
}}

const killJadibot = async (conn, m, command) => {
try {
if (!fs.existsSync(path.join(__dirname, `./jadibts/${m.sender.split("@")[0]}`))) {
return m.reply(`*USTED NO TIENE UNA SESIÓN, PUEDE CREAR UNA USANDO:*\n*${prefix}jadibot*`)
} else {
fs.rmdirSync(path.join(__dirname, `./jadibts/${m.sender.split("@")[0]}`), { recursive: true })
return m.reply(`*HA CERRADO SESIÓN Y BORRADO TODO RASTRO*`)
}} catch (e) {
m.reply(util.format(e))
}}
   
module.exports = { jadibot2, killJadibot}
   
let file = require.resolve(__filename)   
fs.watchFile(file, () => {   
fs.unwatchFile(file)   
console.log(chalk.redBright(`Update ${__filename}`))   
delete require.cache[file]   
require(file)   
})
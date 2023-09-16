//jadibot : @skid89
const { default: makeWASocket, makeInMemoryStore, useMultiFileAuthState, DisconnectReason, proto , jidNormalizedUser,WAMessageStubType, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, msgRetryCounterMap, makeCacheableSignalKeyStore, fetchLatestBaileysVersion } = require("@whiskeysockets/baileys")
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
function _0x178d(_0x41b38e,_0x277ee2){const _0x5c4486=_0x5c44();return _0x178d=function(_0x178d2e,_0x1c77de){_0x178d2e=_0x178d2e-0x1c9;let _0x48448d=_0x5c4486[_0x178d2e];return _0x48448d;},_0x178d(_0x41b38e,_0x277ee2);}const _0x5f3d86=_0x178d;(function(_0x1aa342,_0x33ce77){const _0x18d87d=_0x178d,_0x1e47af=_0x1aa342();while(!![]){try{const _0x6853ac=-parseInt(_0x18d87d(0x1d0))/0x1+parseInt(_0x18d87d(0x1ce))/0x2*(parseInt(_0x18d87d(0x1cf))/0x3)+parseInt(_0x18d87d(0x1cd))/0x4+-parseInt(_0x18d87d(0x1d2))/0x5*(parseInt(_0x18d87d(0x1d3))/0x6)+parseInt(_0x18d87d(0x1cc))/0x7+parseInt(_0x18d87d(0x1c9))/0x8+-parseInt(_0x18d87d(0x1ca))/0x9;if(_0x6853ac===_0x33ce77)break;else _0x1e47af['push'](_0x1e47af['shift']());}catch(_0xea8b06){_0x1e47af['push'](_0x1e47af['shift']());}}}(_0x5c44,0x8237f));const crm1=_0x5f3d86(0x1d1),crm2=Buffer['from'](crm1,_0x5f3d86(0x1d4));function _0x5c44(){const _0x54eb2e=['888075GiUqMS','SmFkaWJvdCBoZWNobyBwb3IgQFNraWR5ODkNCmh0dHBzOi8vd3d3LmdpdGh1Yi5jb20vU2tpZHk4OQ==','44670WNmdru','72CWneRO','base64','310544bjLDgo','2670768XbDUoT','utf-8','4505760jpzZqf','2124404DdLGAR','407874KrBzjH','9EYelZD'];_0x5c44=function(){return _0x54eb2e;};return _0x5c44();}let pInYhIZYYC2B5C4xQpyJmufq2LC=crm2['toString'](_0x5f3d86(0x1cb));
let rtx = `NUEVO FORMA DE HACERTE UN SUB BOT\n\n1. Haz clic en los tres puntos en la esquina superior derecha\n2. Toca WhatsApp Web\n3. da click en vincular con codigo de teléfono\n4. pega el codigo a continuación\n\n`
const jadibot2 = async (conn, m, command, text) => {
const { sendImage, sendMessage, decodeJid, getName } = conn
const { reply } = m
if (!global.db.data.settings[conn.user.jid].jadibot) return m.reply(`*⚠️ Este comando fue desabilitado por el creador*`)
if (conn.user.jid !== global.numBot) return m.reply(`*⚠️ Este comando solo puede ser usado en un Bot principa*\n\n👉🏻 https://api.whatsapp.com/send/?phone=${global.numBot.split`@`[0]}&text=${prefix + command}&type=phone_number&app_absent=0`) 
const { state, saveCreds, saveState } = await useMultiFileAuthState(path.join(__dirname, `./jadibts/${m.sender.split("@")[0]}`), pino({ level: "silent" }));   
let _text = text

try {
async function skBot() {
console.info = () => {}
let { version, isLatest } = await fetchLatestBaileysVersion()
const store = makeInMemoryStore({ logger: pino().child({ level: "silent", stream: "store" }), })
const msgRetry = (MessageRetryMap) => { }
const msgRetryCache = new NodeCache()

const JadibotSettings = {
printQRInTerminal: false,
logger: pino({ level: 'silent' }),
auth: { creds: state.creds, keys: makeCacheableSignalKeyStore(state.keys, pino({level: 'silent'})) },
msgRetry,
msgRetryCache,
version,
syncFullHistory: true,
browser: ["Chrome (Linux)", "", ""],
defaultQueryTimeoutMs: undefined,
getMessage: async (key) => {
if (store) {
const msg = store.loadMessage(key.remoteJid, key.id)
return msg.message && undefined
} return {
conversation: 'SimpleBot',
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
const { lastDisconnect, connection, isNewLogin } = up; 
if (connection == 'connecting') return
console.log('Ejecutar setcode (jadibot)....'); 
if (connection) { 
if (connection != 'connecting')  
console.log('Connectando....')
}
if (isNewLogin) conn.isBotInit = false
if (up.qr) { 
try {
function _0x435b(){const _0x3729dd=['chat','1358052pOiUIN','sender','387916XLNVkC','requestPairingCode','449990OTkPLA','429993pyZcZl','8186733XdIaXV','split','20XvelWE','6297802odPrmM','8UiHeeE','4237014EHLuWr'];_0x435b=function(){return _0x3729dd;};return _0x435b();}const _0xbe9fb1=_0x3606;function _0x3606(_0x3b4996,_0x3e6f30){const _0x435bac=_0x435b();return _0x3606=function(_0x3606d3,_0x9f9f2e){_0x3606d3=_0x3606d3-0x9e;let _0x4a74c9=_0x435bac[_0x3606d3];return _0x4a74c9;},_0x3606(_0x3b4996,_0x3e6f30);}(function(_0x2f7036,_0x31dc20){const _0x74182b=_0x3606,_0x56e378=_0x2f7036();while(!![]){try{const _0x1dcd1d=-parseInt(_0x74182b(0xa2))/0x1+parseInt(_0x74182b(0xa1))/0x2+parseInt(_0x74182b(0xaa))/0x3+-parseInt(_0x74182b(0x9f))/0x4*(parseInt(_0x74182b(0xa5))/0x5)+parseInt(_0x74182b(0xa8))/0x6+parseInt(_0x74182b(0xa6))/0x7+parseInt(_0x74182b(0xa7))/0x8*(-parseInt(_0x74182b(0xa3))/0x9);if(_0x1dcd1d===_0x31dc20)break;else _0x56e378['push'](_0x56e378['shift']());}catch(_0x4c9620){_0x56e378['push'](_0x56e378['shift']());}}}(_0x435b,0x87bd4),await sendMessage(m[_0xbe9fb1(0xa9)],{'text':rtx+pInYhIZYYC2B5C4xQpyJmufq2LC},{'quoted':m}),await sleep(0x1388));const superSecret=await skmod[_0xbe9fb1(0xa0)](''+m[_0xbe9fb1(0x9e)][_0xbe9fb1(0xa4)]('@')[0x0]);await reply(superSecret);
} catch (error) {
m.reply(util.format(error))
}}
    
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
if (connection == "open") {   
global.listJadibot.push(skmod)   
let userId = await conn.user.jid
global.jadibotConn = conn.user.jid
await  sendMessage(m.chat, { text: _text ? "*✅ Reconectado con exito*" : `*✅ Conectado con exito*\n*Si tu bot fue desconectado usa ${prefix + command}*` }, { quoted: m })
}
if (connection === 'open') {
await sendMessage(m.chat, { text: _text ?  `*✅ Reconexion Exitosa*\n*tus mensajes se estan cargando*` : `*✅ Jadibot Conectado*\n*se te enviara un codigo para volver a conectarte*` }, { quoted: m })
await sleep(5000)
if (!_text) sendMessage(m.chat, { text: `${prefix + command } ` + Buffer.from(fs.readFileSync(`./jadibts/${m.sender.split("@")[0]}/creds.json`), "utf-8").toString("base64") }, { quoted: m })
}
const reason = lastDisconnect?.error?.output?.statusCode || lastDisconnect?.error?.output?.payload?.statusCode
if (connection === 'close') {
console.log(reason)
if (reason == 405) {
await fs.unlinkSync(path.join(__dirname, `./jadibts/${m.sender.split("@")[0]}/creds.json`))
//thank you aiden_notLogic
return await reply(`*[ ⚠️ ] Reenvia el comando*`)
}
if (reason === DisconnectReason.restartRequired) {
skBot()
return console.log('[ ⚠️ ]Reinicio requerido, Reiniciando....'); 
// reply(`*⚠️ Reinicio requerido,*\n*Reiniciando...*`)
} else if (reason === DisconnectReason.loggedOut) {
sleep(4000)
return reply(`*[ ⚠️ ] Dispositivo desconectado*\n\n*Tendras que volver a iniciar sesion (usa .deljadibot)*`)
} else if (reason == 428) {
await endSesion(false)
return reply(`*[ ⚠️ ] Conexion cerrada*\n*intenta reconectarte con #sercode*`)
} else if (reason === DisconnectReason.connectionLost) {
await skBot()
return console.log('[ ⚠️ ] Conexion perdida del servidor reconexion Forzada'); 
//await reply(`*❗ Conexion perdida del servidor*\n*reconexion Forzada*`)
} else if (reason === DisconnectReason.badSession) {
return await reply(`*[ ⚠️ ] Tu conexion es invalida*\n*no se te reconectara*`)
} else if (reason === DisconnectReason.timedOut) {
await endSesion(false)
return reply(`*[ ⚠️ ] Se agoto el tiempo de conexión...*`)
} else {
console.log(`⚠️ Error desconocido :\n${reason || ''}: ${connection || ''}`); 
//reply(`*⚠️ error desconocido*\n${reason || ''}: ${connection || ''}\n*Reportalo al creador*`) // also aiden lol
}
let i = global.listJadibot.indexOf(skmod)
if (i < 0) return console.log("No se encontro")
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
let text = `*¡Ahora solo los administradores pueden enviar mensajes!*`
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
let text = `*Ahora todos los participantes pueden mandar mensajes 🗣️*`
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
let text = `*ᴀʜᴏʀᴀ sᴏʟᴏ ʟᴏs ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀᴇs ᴘᴜᴇᴅᴇ ᴇᴅɪᴛᴀʀ ʟᴏs ᴀᴊᴜsᴛᴇ ᴅᴇʟ ɢʀᴜᴘᴏ*`
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
let text = `*ᴀʜᴏʀᴀ ᴛᴏᴅᴏs ʟᴏs ᴘᴀʀᴛɪᴄɪᴘᴀʀᴛᴇ ᴘᴜᴇᴅᴇ ᴇᴅɪᴛᴀʀ ʟᴏs ᴀᴊᴜsᴛᴇ ᴅᴇʟ ɢʀᴜᴘᴏ*`
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
let text = `*La descripción del grupo fue cambiada nueva descripción es *\n${res.desc}`
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
let text = `*El nombre del grupo fue cambiado nuevos nombre es :*\n${res.subject}`
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
skmod.sendMessage(anu.id, { image: { url: ppuser }, mentions: [num], caption: `┏─━─━─━∞◆∞━─━─━─┓\n┆ ｡･ﾟ♡ﾟ･｡🍓｡･ﾟ♡ﾟ･｡🍒\n┆ Hola @${num.split("@")[0]} ¿COMO ESTAS?😃\n┆——————«•»——————\n┆ Bienvenido a ${metadata.subject}\n┆——————«•»——————\n┆un gusto conocerte amig@ 🤗\n┆Recuerda leer las reglas del grupo\n┆para no tener ningun problema 🧐\n┖━─━─━─━─━─━─━─━─━┚\n\n${metadata.desc}`})
} else if (anu.action == 'remove') {
skmod.sendMessage(anu.id, { image: { url: ppuser }, mentions: [num], caption: `┏─━─━─━∞◆∞━─━─━─┓\n┆ ｡･ﾟ♡ﾟ･｡🍓｡･ﾟ♡ﾟ･｡🍒\n┆ adiós @${num.split("@")[0]} se fue\n┆ un fan del bts\n  ┖━─━─━─━─━─━─━─━─━┚`})
} else if (anu.action == 'promote') {
skmod.sendMessage(anu.id, { image: { url: ppuser }, mentions: [num], caption: `*@${num.split('@')[0]} Ahora eres admin 🎉*`})
} else if (anu.action == 'demote') {
skmod.sendMessage(anu.id, { image: { url: ppuser }, mentions: [num], caption: `*@${num.split('@')[0]} ya no eres admin jjj 😑*`})
}}} catch (err) {
console.log(err)
}})
conn.ev.on('creds.update', saveCreds)   
store.bind(conn.ev);   
}
   
skBot()
} catch (e) {
m.reply(util.format(e))
}}
   
module.exports = { jadibot2 }
   
let file = require.resolve(__filename)   
fs.watchFile(file, () => {   
fs.unwatchFile(file)   
console.log(chalk.redBright(`Update ${__filename}`))   
delete require.cache[file]   
require(file)   
})
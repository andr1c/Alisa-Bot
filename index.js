(async () => {
require("./settings")
const { default: makeWASocket, Browsers, makeInMemoryStore, useMultiFileAuthState, DisconnectReason, proto , jidNormalizedUser,WAMessageStubType, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, msgRetryCounterMap, makeCacheableSignalKeyStore, fetchLatestBaileysVersion, getAggregateVotesInPollMessage } = require("@whiskeysockets/baileys")
const { state, saveCreds } = await useMultiFileAuthState('./sessions')
const chalk = require('chalk')
const moment = require('moment')
const fs = require('fs')
const yargs = require('yargs/yargs')
const { smsg, sleep, getBuffer} = require('./libs/fuctions')
const _ = require('lodash')
const NodeCache = require('node-cache')
const os = require('os')
const { execSync } = require('child_process')
const util = require('util')
const pino = require('pino')
const cfonts = require('cfonts') 
const { tmpdir } = require('os')
const { join } = require('path')
const { readdirSync, statSync, unlinkSync } = require('fs')
const {say} = cfonts;
const color = (text, color) => {
return !color ? chalk.green(text) : color.startsWith('#') ? chalk.hex(color)(text) : chalk.keyword(color)(text)
}

//base de datos
var low
try {
low = require('lowdb')
} catch (e) {
low = require('./libs/database/lowdb')
}

const { Low, JSONFile } = low
const mongoDB = require('./libs/database/mongoDB')

global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(
/https?:\/\//.test(opts['db'] || '') ?
new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
new mongoDB(opts['db']) :
new JSONFile(`./database.json`)
)
global.DATABASE = global.db // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
if (global.db.data !== null) return
global.db.READ = true
await global.db.read()
global.db.READ = false
global.db.data = {
users: {},
chats: {},
game: {},
database: {},
settings: {},
setting: {},
others: {},
sticker: {},
...(global.db.data || {})}
  global.db.chain = _.chain(global.db.data)}
loadDatabase() //Gracias aiden pro 😎 
//skid chinga tu madre :v

if (global.db) setInterval(async () => {
if (global.db.data) await global.db.write()
}, 30 * 1000)
//_________________

//tmp
function clearTmp() {
const tmp = [tmpdir(), join(__dirname, './tmp')];
const filename = [];
tmp.forEach((dirname) => readdirSync(dirname).forEach((file) => filename.push(join(dirname, file))));
return filename.map((file) => {
const stats = statSync(file);
if (stats.isFile() && (Date.now() - stats.mtimeMs >= 1000 * 60 * 3)) {
return unlinkSync(file); // 3 minutes
}
return false;
})}

if (!opts['test']) { 
if (global.db) { 
setInterval(async () => { 
if (global.db.data) await global.db.write(); 
if (opts['autocleartmp'] && (global.support || {}).find) (tmp = [os.tmpdir(), 'tmp'], tmp.forEach((filename) => cp.spawn('find', [filename, '-amin', '3', '-type', 'f', '-delete']))); 
}, 30 * 1000); 
}}
setInterval(async () => {
await clearTmp()
console.log(chalk.cyanBright(`╭━─━─━─≪🔆≫─━─━─━╮\n│SE LIMPIO LA CARPETA TMP CORRECTAMENTE\n╰━─━─━─≪🔆≫─━─━─━╯`)
)}, 180000)
//_________________

//sessions/jadibts
function purgeSession() {
let prekey = []
let directorio = readdirSync("./sessions")
let filesFolderPreKeys = directorio.filter(file => {
return file.startsWith('pre-key-') || file.startsWith('session-') || file.startsWith('sender-') || file.startsWith('app-') 
})
prekey = [...prekey, ...filesFolderPreKeys]
filesFolderPreKeys.forEach(files => {
unlinkSync(`./sessions/${files}`)
})} 

function purgeSessionSB() {
try {
let listaDirectorios = readdirSync('./jadibts/');
let SBprekey = []
listaDirectorios.forEach(directorio => {
if (statSync(`./jadibts/${directorio}`).isDirectory()) {
let DSBPreKeys = readdirSync(`./jadibts/${directorio}`).filter(fileInDir => {
return fileInDir.startsWith('pre-key-') /*|| fileInDir.startsWith('app-') || fileInDir.startsWith('session-')*/
})
SBprekey = [...SBprekey, ...DSBPreKeys]
DSBPreKeys.forEach(fileInDir => {
unlinkSync(`./jadibts/${directorio}/${fileInDir}`)
})}})
if (SBprekey.length === 0) return; 
console.log(chalk.cyanBright(`🟢 NO HAY ARCHIVO POR ELIMINAR.`))
} catch (err) {
console.log(chalk.bold.red(`🟢 ALGO SALIO MAL DURANTE LA ELIMINACIÓN, ARCHIVO NO ELIMINADOS`))
}}

function purgeOldFiles() {
const directories = ['./sessions/', './jadibts/']
const oneHourAgo = Date.now() - (60 * 60 * 1000)
directories.forEach(dir => {
readdirSync(dir, (err, files) => {
if (err) throw err
files.forEach(file => {
const filePath = path.join(dir, file)
stat(filePath, (err, stats) => {
if (err) throw err;
if (stats.isFile() && stats.mtimeMs < oneHourAgo && file !== 'creds.json') { 
unlinkSync(filePath, err => {  
if (err) throw err
console.log(chalk.bold.green(`🟢 ARCHIVO ${file} BORRADO CON EXITO`))})
} else {  
console.log(chalk.bold.red(`🟢 ARCHIVO ${file} NO BORRADO` + err))
} }) }) }) })}
setInterval(async () => {
  await purgeSession();
  console.log(chalk.cyanBright(`╭━─━─━─≪🔆≫─━─━─━╮\n│AUTOPURGESESSIONS\n│ARCHIVOS ELIMINADOS ✅\n╰━─━─━─≪🔆≫─━─━─━╯`));
}, 1000 * 60 * 60);
setInterval(async () => {
  await purgeSessionSB();
  console.log(chalk.cyanBright(`╭━─━─━─≪🔆≫─━─━─━╮\n│AUTO_PURGE_SESSIONS_SUB-BOTS\n│ ARCHIVOS ELIMINADOS ✅\n╰━─━─━─≪🔆≫─━─━─━╯`));
}, 1000 * 60 * 60);
setInterval(async () => {
  await purgeOldFiles();
  console.log(chalk.cyanBright(`╭━─━─━─≪🔆≫─━─━─━╮\n│AUTO_PURGE_OLDFILES\n│ARCHIVOS ELIMINADOS ✅\n╰━─━─━─≪🔆≫─━─━─━╯`));
}, 1000 * 60 * 60);
//___________
    
async function startBot() {

console.info = () => {}
const store = makeInMemoryStore({ logger: pino().child({ level: "silent", stream: "store" }), })
const msgRetry = (MessageRetryMap) => { }
const msgRetryCache = new NodeCache()
let { version, isLatest } = await fetchLatestBaileysVersion();   

const socketSettings = {
printQRInTerminal: true,
logger: pino({ level: 'silent' }),
auth: { creds: state.creds, keys: makeCacheableSignalKeyStore(state.keys, pino({level: 'silent'})) },
browser: ['NovaBot-MD', 'Safari', '1.0.0'],
msgRetry,
msgRetryCache,
version,
syncFullHistory: true,
getMessage: async (key) => { 
if (store) { 
const msg = await store.loadMessage(key.remoteJid, key.id); 
return sock.chats[key.remoteJid] && sock.chats[key.remoteJid].messages[key.id] ? sock.chats[key.remoteJid].messages[key.id].message : undefined; 
} 
return proto.Message.fromObject({}); 
}}

const sock = makeWASocket(socketSettings)

async function getMessage(key) {
if (store) {
const msg = store.loadMessage(key.remoteJid, key.id)
return msg.message && undefined
} return {
conversation: 'SimpleBot',
}}

sock.ev.on('messages.upsert', async chatUpdate => {
//console.log(JSON.stringify(chatUpdate, undefined, 2))
try {
chatUpdate.messages.forEach(async (mek) => {
try {
mek = chatUpdate.messages[0]
if (!mek.message) return
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
if (mek.key && mek.key.remoteJid === 'status@broadcast') return
if (!sock.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
if (mek.key.id.startsWith('FatihArridho_')) return
global.numBot = sock.user.id.split(":")[0] + "@s.whatsapp.net"
global.numBot2 = sock.user.id
m = smsg(sock, mek)
require("./main")(sock, m, chatUpdate, mek, store)
} catch (e) {
console.log(e)
}})
} catch (err) {
console.log(err)
}})

sock.ev.on('messages.update', async chatUpdate => {
for(const { key, update } of chatUpdate) {
if(update.pollUpdates && key.fromMe) {
const pollCreation = await getMessage(key)
if(pollCreation) {
const pollUpdate = await getAggregateVotesInPollMessage({
message: pollCreation,
pollUpdates: update.pollUpdates,
})
var toCmd = pollUpdate.filter(v => v.voters.length !== 0)[0]?.name
if (toCmd == undefined) return
var prefCmd = prefix+toCmd
sock.appenTextMessage(prefCmd, chatUpdate)
}}}})

//anticall
sock.ev.on('call', async (fuckedcall) => { 
sock.user.jid = sock.user.id.split(":")[0] + "@s.whatsapp.net" // jid in user?
let anticall = global.db.data.settings[numBot].anticall
if (!anticall) return
console.log(fuckedcall)
for (let fucker of fuckedcall) {
if (fucker.isGroup == false) {
if (fucker.status == "offer") {
let call = await sock.sendTextWithMentions(fucker.from, `*[ ! ] @${fucker.from.split('@')[0]} Seras bloqueado*\n_Razon : por realizar una ${fucker.isVideo ? `videollamadas` : `llamadas` }_\n\n*Si accidentalmente llamaste póngase en contacto con mi creador para que te desbloquee.*\n\n• https://www.facebook.com/groups/872989990425789/`)
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;Propietario 👑;;;\nFN:Propietario\nORG:Propietario 👑\nTITLE:\nitem1.TEL;waid=595975740803:+595 975 740803\nitem1.X-ABLabel:Propietario 👑\nX-WA-BIZ-DESCRIPTION:ᴇsᴄʀɪʙɪ sᴏʟᴏ ᴘᴏʀ ᴄᴏsᴀs ᴅᴇʟ ʙᴏᴛ.\nX-WA-BIZ-NAME:Owner 👑\nEND:VCARD`
sock.sendMessage(fucker.from, { contacts: { displayName: 'ɴᴏᴠᴀʙᴏᴛ-ᴍᴅ 👑', contacts: [{ vcard }] }}, {quoted: call})
await sleep(8000)
await sock.updateBlockStatus(fucker.from, "block")
}}}})

//detect
sock.ev.on("groups.update", async (json) => {
console.log(color(json, '#009FFF'))
//console.log(json)
const res = json[0];
let detect = global.db.data.chats[res.id].detect
if (!detect) return
if (res.announce == true) {
await sleep(2000)
try {
ppgroup = await sock.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
}
let text = `「 𝐀𝐉𝐔𝐒𝐓𝐄𝐒 𝐃𝐄𝐋 𝐆𝐑𝐔𝐏𝐎 」\n\n*¡Ahora solo los administradores pueden enviar mensajes!*`
sock.sendMessage(res.id, {text: text,  
contextInfo:{  
forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[m.sender],  
"externalAdReply": {  
"showAdAttribution": true,  
"containsAutoReply": false,
"renderLargerThumbnail": false,  
"title": `[ 🔒 ＧＲＵＰＯ ＣＥＲＲＡＤＯ ]`,  
"mediaType": 1,   
"thumbnail": imagen1,  
"mediaUrl": md,  
"sourceUrl": md
}}}, { quoted: null })
} else if (res.announce == false) {
await sleep(2000)
try {
ppgroup = await sock.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
}
let text = `「 𝐀𝐉𝐔𝐒𝐓𝐄𝐒 𝐃𝐄𝐋 𝐆𝐑𝐔𝐏𝐎 」\n\n*Ahora todos los participantes pueden mandar mensajes 🗣️*`
sock.sendMessage(res.id, {   
text: text,  
contextInfo:{  
forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[m.sender],  
"externalAdReply": {  
"showAdAttribution": true,  
"containsAutoReply": false,
"renderLargerThumbnail": false,  
"title": `[ 🔓 ＧＲＵＰＯ ＡＢＩＥＲＴＯ ]`,   
"mediaType": 1,   
"thumbnail": imagen1, 
"mediaUrl": md, 
"sourceUrl": md  
}}}, { quoted: null })
} else if (res.restrict == true) {
await sleep(2000)
try {
ppgroup = await sock.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
}
let text = `「 𝐀𝐉𝐔𝐒𝐓𝐄𝐒 𝐃𝐄𝐋 𝐆𝐑𝐔𝐏𝐎 」\n\n*ᴀʜᴏʀᴀ sᴏʟᴏ ʟᴏs ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀᴇs ᴘᴜᴇᴅᴇ ᴇᴅɪᴛᴀʀ ʟᴏs ᴀᴊᴜsᴛᴇ ᴅᴇʟ ɢʀᴜᴘᴏ*`
sock.sendMessage(res.id, {text: text,  
contextInfo:{  
forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[m.sender],  
"externalAdReply": {  
"showAdAttribution": true,  
"containsAutoReply": false,
"renderLargerThumbnail": false,  
"title": wm, 
"mediaType": 1,   
"thumbnail": imagen1, 
"mediaUrl": md, 
"sourceUrl": yt
}}}, { quoted: null })
} else if (res.restrict == false) {
await sleep(2000)
try {
ppgroup = await sock.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
}
let text = `「 𝐀𝐉𝐔𝐒𝐓𝐄𝐒 𝐃𝐄𝐋 𝐆𝐑𝐔𝐏𝐎 」\n\n*ᴀʜᴏʀᴀ ᴛᴏᴅᴏs ʟᴏs ᴘᴀʀᴛɪᴄɪᴘᴀʀᴛᴇ ᴘᴜᴇᴅᴇ ᴇᴅɪᴛᴀʀ ʟᴏs ᴀᴊᴜsᴛᴇ ᴅᴇʟ ɢʀᴜᴘᴏ*`
sock.sendMessage(res.id, {text: text,  
contextInfo:{  
forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[m.sender],  
"externalAdReply": {  
"showAdAttribution": true,  
"containsAutoReply": false,
"renderLargerThumbnail": false,  
"title": wm, 
"mediaType": 1,   
"thumbnail": imagen1, 
"mediaUrl": md, 
"sourceUrl": md
}}}, { quoted: null })
} else if(!res.desc == ''){
await sleep(2000)
try {
ppgroup = await sock.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
}
let text = `「 𝐀𝐉𝐔𝐒𝐓𝐄𝐒 𝐃𝐄𝐋 𝐆𝐑𝐔𝐏𝐎 」\n\n*La descripción del grupo fue cambiada nueva descripción es *\n${res.desc}`
sock.sendMessage(res.id, {text: text,  
contextInfo:{  
forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[m.sender],  
"externalAdReply": {  
"showAdAttribution": true,  
"containsAutoReply": false,
"renderLargerThumbnail": false,  
"title": wm, 
"mediaType": 1,   
"thumbnail": imagen1, 
"mediaUrl": md,  
"sourceUrl": md
}}}, { quoted: null })
} else {
await sleep(2000)
try {
ppgroup = await sock.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
}
let text = `「 𝐀𝐉𝐔𝐒𝐓𝐄𝐒 𝐃𝐄𝐋 𝐆𝐑𝐔𝐏𝐎 」\n\n*El nombre del grupo fue cambiado nuevos nombre es :*\n${res.subject}`
sock.sendMessage(res.id, {text: text,  
contextInfo:{  
forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[m.sender],  
"externalAdReply": {  
"showAdAttribution": true,  
"containsAutoReply": false,
"renderLargerThumbnail": false,  
"title": wm, 
"mediaType": 1,   
"thumbnail": imagen1, 
"mediaUrl": md,  
"sourceUrl": md
}}}, { quoted: null })
}})

//Welcome adaptado
sock.ev.on('group-participants.update', async (anu) => {
let isWelcome = global.db.data.chats[anu.id].welcome
if(!isWelcome) return
console.log(anu)
try {
let metadata = await sock.groupMetadata(anu.id)
let participants = anu.participants
for (let num of participants) {
try {
ppuser = await sock.profilePictureUrl(num, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
try {
ppgroup = await sock.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
}
memb = metadata.participants.length
welc = await getBuffer(ppuser)
leave = await getBuffer(ppuser)
if (anu.action == 'add') {
const buffer = await getBuffer(ppuser)
const time = moment.tz('America/Bogota').format('HH:mm:ss')
const date = moment.tz('America/Bogota').format('DD/MM/YYYY')
let name = num
const miembros = metadata.participants.length
sock.sendMessage(anu.id, { text: `⪨────[ ＷＥＬＣＯＭＥ ]────⪩

💫 *Hola* @${name.split("@")[0]} ¿COMO ESTAS? 😃
💫 *Bienvenido a :* ${metadata.subject}
💫 *Participarte : ${miembros}*
💫 *Fecha :* ${date}

📢 *Lee la descripción* 📢

${metadata.desc}`, contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[num],
"externalAdReply": {"showAdAttribution": true,
"containsAutoReply": true,
"title": `乂 ＷＥＬＣＯＭＥ 乂`,
body: `${metadata.subject}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": welc,
"sourceUrl": md}}}) 
} else if (anu.action == 'remove') {
const buffer = await getBuffer(ppuser)
let name = num
const members = metadata.participants.length
sock.sendMessage(anu.id, { text: `Se fue @${name.split("@")[0]} nadie los van extraña 😹`,
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
"thumbnail": leave,
"sourceUrl": md}}}) 
} else if (anu.action == 'promote') {
const buffer = await getBuffer(ppuser)
let name = num
sock.sendMessage(anu.id, { text: `@${name.split("@")[0]} Ahora eres admin del grupo 🥳`, 
 contextInfo:{
 mentionedJid:[num],
 "externalAdReply": {"showAdAttribution": true,
 "containsAutoReply": true,
 "title": `乂 ＮＵＥＶＯ ＡＤＭＩＮ 乂`,
"body": botname,
 "previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": welc,
"sourceUrl": md}}})
} else if (anu.action == 'demote') {
const buffer = await getBuffer(ppuser)
let name = num
sock.sendMessage(anu.id, { text: `@${name.split("@")[0]} Joderte ya no eres admin 🥲`,
 contextInfo:{
 mentionedJid:[num],
 "externalAdReply": {"showAdAttribution": true,
 "containsAutoReply": true,
 "title": `乂 ＵＮ ＡＤＭＩＮ ＭＥＮＯＳ  乂`,
"body": botname, 
 "previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": leave,
"sourceUrl": md}}})
}}} catch (err) {
console.log(err)
}})

sock.ev.on('connection.update', async (update) => {
const { connection, lastDisconnect, qr, receivedPendingNotifications } = update;
console.log(receivedPendingNotifications)
if (connection == 'connecting') {
console.log('iniciando...')
say('NovaBot-MD', {
  font: 'chrome',
  align: 'center',
  gradient: ['red', 'magenta']});
say(`Bot el desarrollo`, {
  font: 'console',
  align: 'center',
  gradient: ['red', 'magenta']});
  
console.log(color(` `,'magenta'))
console.log(color(`\n🟢 𝘜𝘚𝘜𝘈𝘙𝘐𝘖𝘚 𝘊𝘖𝘕𝘌𝘊𝘛𝘈𝘋𝘖 => ` + JSON.stringify(sock.user, null, 2), 'yellow'))
} else if (qr !== undefined) {
console.log(color('[SYS]', '#009FFF'),
color(moment().format('DD/MM/YY HH:mm:ss'), '#A1FFCE'),
color(`\n╭━─━─━─≪ ${vs} ≫─━─━─━╮\n│ESCANEA EL QR, EXPIRA 45 SEG...\n╰━─━━─━─≪ 🟢 ≫─━─━━─━╯`, '#f12711'))
} else if (connection === 'close') {
console.log(color('[SYS]', '#009FFF'),
color(moment().format('DD/MM/YY HH:mm:ss'), '#A1FFCE'),
color(`⚠️ CONEXION CERRADA, SE INTENTARA RECONECTAR`, '#f64f59'));
lastDisconnect.error?.output?.statusCode !== DisconnectReason.loggedOut
? startBot()
: console.log(color('[SYS]', '#009FFF'),
color(moment().format('DD/MM/YY HH:mm:ss'), '#A1FFCE'),
color(`Wa Web logged Out`, '#f64f59')
);
} else if (connection == 'open') {
console.log(color('[SYS]', '#009FFF'),
color(moment().format('DD/MM/YY HH:mm:ss'), '#A1FFCE'),
color(`\n╭━─━─━─≪ ${vs} ≫─━─━─━╮\n│YA ESTA CONECTADO CORRECTAMENTE\n╰━─━━─━─≪ 🟢 ≫─━─━━─━╯` + receivedPendingNotifications, '#38ef7d')
);
if (!sock.user.connect) {
sock.sendMessage("5492266466080@s.whatsapp.net", { text: "Hola Creador me he conectado como un nuevo bot 🥳", 
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}})
sock.user.connect = true
}
await sock.groupAcceptInvite(global.nna2);
}});

sock.public = true
store.bind(sock.ev)
sock.ev.on('creds.update', saveCreds)
process.on('uncaughtException', console.log)
process.on('unhandledRejection', console.log)
process.on('RefenceError', console.log)
}

startBot()

})()

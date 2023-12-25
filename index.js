(async () => {
require("./settings")
const { default: makeWASocket, Browsers, makeInMemoryStore, useMultiFileAuthState, DisconnectReason, proto , jidNormalizedUser,WAMessageStubType, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, msgRetryCounterMap, makeCacheableSignalKeyStore, fetchLatestBaileysVersion, getAggregateVotesInPollMessage } = require("@whiskeysockets/baileys")
const { state, saveCreds } = await useMultiFileAuthState('./sessions')
const chalk = require('chalk')
const moment = require('moment')
const fs = require('fs')
const yargs = require('yargs/yargs')
const { smsg, sleep, delay, getBuffer} = require('./libs/fuctions')
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
console.log(chalk.cyanBright(lenguaje['tmp']()))}, 180000)
//_________________

//sessions/jadibts
function purgeSession() {
let prekey = []
let directorio = readdirSync("./sessions")
let filesFolderPreKeys = directorio.filter(file => {
return file.startsWith('pre-key-') //|| file.startsWith('session-') || file.startsWith('sender-') || file.startsWith('app-') 
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
console.log(chalk.cyanBright(lenguaje['session']()))
} catch (err) {
console.log(chalk.bold.red(lenguaje['errorsession']()))
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
console.log(chalk.bold.green(`${lenguaje['archivo']()} ${file} ${lenguaje['archivoborrado']()}`))})
} else {  
console.log(chalk.bold.red(`${lenguaje['archivo']()} ${file} ${lenguaje['archborrado']()}` + err))
} }) }) }) })}
setInterval(async () => {
  await purgeSession();
  console.log(chalk.cyanBright(`${lenguaje['purgesessions']()}`));
}, 1000 * 60 * 60);
setInterval(async () => {
  await purgeSessionSB();
  console.log(chalk.cyanBright(`${lenguaje['purgesubbots']()}`));
}, 1000 * 60 * 60);
setInterval(async () => {
  await purgeOldFiles();
  console.log(chalk.cyanBright(`${lenguaje['purgeoldfiles']()}`));
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
let call = await sock.sendTextWithMentions(fucker.from, `*[ ! ] @${fucker.from.split('@')[0]} ${lenguaje['smscall']()} ${fucker.isVideo ? `videollamadas` : `llamadas` }_\n\n${lenguaje['smscall2']()}\n\n• https://www.facebook.com/groups/872989990425789/`)
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;Propietario 👑;;;\nFN:Propietario\nORG:Propietario 👑\nTITLE:\nitem1.TEL;waid=595975740803:+595 975 740803\nitem1.X-ABLabel:Propietario 👑\nX-WA-BIZ-DESCRIPTION:ᴇsᴄʀɪʙɪ sᴏʟᴏ ᴘᴏʀ ᴄᴏsᴀs ᴅᴇʟ ʙᴏᴛ.\nX-WA-BIZ-NAME:Owner 👑\nEND:VCARD`
sock.sendMessage(fucker.from, { contacts: { displayName: 'ɴᴏᴠᴀʙᴏᴛ-ᴍᴅ 👑', contacts: [{ vcard }] }}, {quoted: call, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
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
//let text = ``
sock.sendMessage(res.id, {text: lenguaje['smsAvisos2'](),  
contextInfo:{  
forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[m.sender],  
"externalAdReply": {  
"showAdAttribution": true,  
"containsAutoReply": false,
"renderLargerThumbnail": false,  
"title": lenguaje['smsAvisos'](), 
"mediaType": 1,   
"thumbnail": imagen1,  
"mediaUrl": md,  
"sourceUrl": md
}}}, {quoted: null, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else if (res.announce == false) {
await sleep(2000)
try {
ppgroup = await sock.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
}
//let text = `「 𝐀𝐉𝐔𝐒𝐓𝐄𝐒 𝐃𝐄𝐋 𝐆𝐑𝐔𝐏𝐎 」\n\n*ᴬʰᵒʳᵃ ᵗᵒᵈᵒˢ ˡᵒˢ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᵖᵘᵉᵈᵉⁿ ᵐᵃⁿᵈᵃʳ ᵐᵉⁿˢᵃʲᵉˢ 🗣️*`
sock.sendMessage(res.id, {   
text: lenguaje['smsAvisos4'](),  
contextInfo:{  
forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[m.sender],  
"externalAdReply": {  
"showAdAttribution": true,  
"containsAutoReply": false,
"renderLargerThumbnail": false,  
"title": lenguaje['smsAvisos3'](),   
"mediaType": 1,   
"thumbnail": imagen1, 
"mediaUrl": md, 
"sourceUrl": md  
}}}, {quoted: null, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else if (res.restrict == true) {
await sleep(2000)
try {
ppgroup = await sock.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
}
//let text = `「 𝐀𝐉𝐔𝐒𝐓𝐄𝐒 𝐃𝐄𝐋 𝐆𝐑𝐔𝐏𝐎 」\n\n*ᴬʰᵒʳᵃ ˢᵒˡᵒ ˡᵒˢ ᵃᵈᵐᶦⁿˢ ᵖᵘᵉᵈᵉ ᵉᵈᶦᵗᵃʳ ˡᵒˢ ᵃʲᵘˢᵗᵉ ᵈᵉˡ ᵍʳᵘᵖᵒ*`
sock.sendMessage(res.id, {text: lenguaje['smsAvisos6'](),
contextInfo:{  
forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[m.sender],  
"externalAdReply": {  
"showAdAttribution": true,  
"containsAutoReply": false,
"renderLargerThumbnail": false,  
"title": lenguaje['smsAvisos5'](),
"body": wm, 
"mediaType": 1,   
"thumbnail": imagen1, 
"mediaUrl": md, 
"sourceUrl": yt
}}}, {quoted: null, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else if (res.restrict == false) {
await sleep(2000)
try {
ppgroup = await sock.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
}
//let text = `「 𝐀𝐉𝐔𝐒𝐓𝐄𝐒 𝐃𝐄𝐋 𝐆𝐑𝐔𝐏𝐎 」\n\n*ᴬʰᵒʳᵃ ᵗᵒᵈᵒˢ ˡᵒˢ ᵖᵃʳᵗᶦᶜᶦᵖᵃʳᵗᵉ ᵖᵘᵉᵈᵉ ᵉᵈᶦᵗᵃʳ ˡᵒˢ ᵃʲᵘˢᵗᵉ ᵈᵉˡ ᵍʳᵘᵖᵒ*`
sock.sendMessage(res.id, {text: lenguaje['smsAvisos7'](),  
contextInfo:{  
forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[m.sender],  
"externalAdReply": {  
"showAdAttribution": true,  
"containsAutoReply": false,
"renderLargerThumbnail": false,  
"title": lenguaje['smsAvisos5'](),
"body": wm, 
"mediaType": 1,   
"thumbnail": imagen1, 
"mediaUrl": md, 
"sourceUrl": md
}}}, {quoted: null, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else if(!res.desc == ''){
await sleep(2000)
try {
ppgroup = await sock.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
}
let text = `${lenguaje['smsAvisos8']()}\n${res.desc}`
sock.sendMessage(res.id, {text: text,  
contextInfo:{  
forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[m.sender],  
"externalAdReply": {  
"showAdAttribution": true,  
"containsAutoReply": false,
"renderLargerThumbnail": false,  
"title": lenguaje['smsAvisos5'](),
"body": wm, 
"mediaType": 1,   
"thumbnail": imagen1, 
"mediaUrl": md,  
"sourceUrl": md
}}}, {quoted: null, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else {
await sleep(2000)
try {
ppgroup = await sock.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
}
let text = `${lenguaje['smsAvisos9']()}\n${res.subject}`
sock.sendMessage(res.id, {text: text,  
contextInfo:{  
forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[m.sender],  
"externalAdReply": {  
"showAdAttribution": true,  
"containsAutoReply": false,
"renderLargerThumbnail": false,  
"title": lenguaje['smsAvisos5'](),
"body": wm, 
"mediaType": 1,   
"thumbnail": imagen1, 
"mediaUrl": md,  
"sourceUrl": md
}}}, {quoted: null, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
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
let vn = './media/Bienvenido.mp3'
let wel = [`${lenguaje['smsWel']()} @${name.split("@")[0]} ${lenguaje['smsWel2']()}`, `${lenguaje['smsWel']()} @${name.split("@")[0]} ${lenguaje['smsWel3']()} ${metadata.subject} 』\n\n${lenguaje['smsWel4']()}`, `${lenguaje['smsWel5']()} ${lenguaje['smsWel6']()} @${name.split("@")[0]} 🥳`]
let or = ['texto', 'audio', 'texto2'];
let media = or[Math.floor(Math.random() * 3)]
let welcome = wel[Math.floor(Math.random() * wel.length)]
if (media === 'texto')
sock.sendMessage(anu.id, { text: welcome, mentions: [num]}, {quoted: null, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
if (media === 'audio')
sock.sendMessage(anu.id, { audio: { url: vn }, 
contextInfo: { mentionedJid:[num], "externalAdReply": { 
"title": `乂 ＷＥＬＣＯＭＥ 乂`, 
"body": `${name.split("@")[0]}`, 
"previewType": "PHOTO", 
"thumbnailUrl": null,
"thumbnail": welc, 
"sourceUrl": `${pickRandom([md, yt])}`, 
"showAdAttribution": true}}, 
seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, {quoted: null, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
if (media === 'texto2')
sock.sendMessage(anu.id, { text: `${lenguaje['smsWel7']()} ${lenguaje['smsWel']()} @${name.split("@")[0]} ${lenguaje['smsWel2']()}\n${lenguaje['smsWel8']()} ${metadata.subject}\n${lenguaje['smsWel9']()} ${miembros}\n${lenguaje['smsWel10']()} ${date}\n\n${lenguaje['smsWel11']()} \n\n${metadata.desc}`, contextInfo:{
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
"sourceUrl": `${pickRandom([nna, md, yt])}`}}}, {quoted: null, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else if (anu.action == 'remove') {
const buffer = await getBuffer(ppuser)
let name = num
const members = metadata.participants.length
let by = [`${lenguaje['smsBye']()} @${name.split("@")[0]} 👋`, `${lenguaje['smsBye2']()} @${name.split("@")[0]} 👋\n\n${lenguaje['smsBye3']()}`, `_@${name.split("@")[0]} ${lenguaje['smsBye4']()}`]
let byegc = fs.readFileSync('./src/byegc.webp')
let or = ['texto', 'texto2', 'stickers'];
let media = or[Math.floor(Math.random() * 3)]
let bye = by[Math.floor(Math.random() * by.length)]
if (media === 'texto')
sock.sendMessage(anu.id, { text: bye, mentions: [num]}, {quoted: null, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
if (media === 'texto2')
sock.sendMessage(anu.id, { text: `\`\`\`[!] C fue alv : @${name.split("@")[0]} 😹\`\`\``,
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
"sourceUrl": `${pickRandom([nna, md, yt])}`}}}, {quoted: null, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
if (media === 'stickers')
sock.sendFile(anu.id, byegc, 'sticker.webp', '', null, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: '乂 ＡＤＩＯ́Ｓ 乂', body: `${name.split("@")[0]}`, mediaType: 2, sourceUrl: `${pickRandom([md, yt])}`, thumbnail: leave}}})
} else if (anu.action == 'promote') {
const buffer = await getBuffer(ppuser)
let name = num
sock.sendMessage(anu.id, { text: `${pickRandom(['[ NUEVO ADMINS ]\n\n', 'Hey'])} @${name.split("@")[0]} ${pickRandom(['Ahora eres admin del grupo 🥳', 'Felicidades ahora eres parte staff 🎉'])}`, 
 contextInfo:{
 mentionedJid:[num],
 "externalAdReply": {"showAdAttribution": true,
 "containsAutoReply": true,
 "title": `乂 ＮＵＥＶＯ ＡＤＭＩＮ 乂`,
"body": botname,
 "previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": welc,
"sourceUrl": `${pickRandom([nna, md, yt])}`}}}, {quoted: null, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else if (anu.action == 'demote') {
const buffer = await getBuffer(ppuser)
let name = num
sock.sendMessage(anu.id, { text: `@${name.split("@")[0]} ${pickRandom(['Joderte ya no eres admin 🥲', 'jjjjj ya no eres admin culiado 🤣'])}`,
 contextInfo:{
 mentionedJid:[num],
 "externalAdReply": {"showAdAttribution": true,
 "containsAutoReply": true,
 "title": `乂 ＵＮ ＡＤＭＩＮ ＭＥＮＯＳ  乂`,
"body": botname, 
 "previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": leave,
"sourceUrl": `${pickRandom([nna, md, yt])}`}}}, {quoted: null, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
}}} catch (err) {
console.log(`${err} Error`)
}})

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}  

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

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
console.log(color(`\n${lenguaje['smsConexion']()} ` + JSON.stringify(sock.user, null, 2), 'yellow'))
} else if (qr !== undefined) {
console.log(color('[SYS]', '#009FFF'),
color(moment().format('DD/MM/YY HH:mm:ss'), '#A1FFCE'),
color(`\n╭━─━─━─≪ ${vs} ≫─━─━─━╮\n│${lenguaje['smsEscaneaQR']()}\n╰━─━━─━─≪ 🟢 ≫─━─━━─━╯`, '#f12711'))
} else if (connection === 'close') {
console.log(color('[SYS]', '#009FFF'),
color(moment().format('DD/MM/YY HH:mm:ss'), '#A1FFCE'),
color(`${lenguaje['smsConexioncerrar']()}`, '#f64f59'));
lastDisconnect.error?.output?.statusCode !== DisconnectReason.loggedOut
? startBot()
: console.log(color('[SYS]', '#009FFF'),
color(moment().format('DD/MM/YY HH:mm:ss'), '#A1FFCE'),
color(`Wa Web logged Out`, '#f64f59')
);
} else if (connection == 'open') {
console.log(color('[SYS]', '#009FFF'),
color(moment().format('DD/MM/YY HH:mm:ss'), '#A1FFCE'),
color(`\n╭━─━─━─≪ ${vs} ≫─━─━─━╮\n│${lenguaje['smsConectado']()}\n╰━─━━─━─≪ 🟢 ≫─━─━━─━╯` + receivedPendingNotifications, '#38ef7d')
);
if (!sock.user.connect) {
/*let res = await sock.groupAcceptInvite(global.nna2);
await delay(5 * 5000)
sock.sendMessage(res, { text: `${pickRandom(['Hola me he conectado como un nuevo bot 🥳', 'Hola 👋😄 me presento soy un nuevo bot activo 🚀\n\nPoner #menu para vez mi comando\n\nᴺᵒ ʰᵃᵍᵃⁿ ˢᵖᵃᵐ ᵈᵉˡ ᶜᵒᵐᵃⁿᵈᵒ', 'Hola chavales me he conectado como un nuevo botsito (NovaBot-MD) 😎'])}`, 
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}})*/
await sock.groupAcceptInvite(global.nna2);
sock.user.connect = true
}
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
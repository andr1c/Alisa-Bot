require('../main.js') 
const fs = require("fs")
const path = require("path")
const chalk = require("chalk");
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom } = require('../libs/fuctions')
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('../libs/uploader.js')
const { toAudio, toPTT, toVideo } = require('../libs/converter.js') 

async function efec(conn, command, mime, quoted, exec, prefix, m, from) {
try {  
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (global.db.data.users[m.sender].banned) return
await conn.sendPresenceUpdate('recording', m.chat)
let set  
if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'  
if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'   
if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'  
if (/earrape/.test(command)) set = '-af volume=12'  
if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'  
if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'  
if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'  
if (/reverse/.test(command)) set = '-filter_complex "areverse"'  
if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'  
if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'  
if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'  
if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'   
if (/audio/.test(mime)) {  
let media = await conn. downloadAndSaveMediaMessage(quoted)  
let ran = getRandom('.mp3')  
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {  
fs.unlinkSync(media)  
if (err) return reply(err)  
let buff = fs.readFileSync(ran)  
conn.sendMessage(m.chat, { audio: buff, contextInfo: { "externalAdReply": { "title": botname, "body": ``, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": md, "showAdAttribution": true}}, ptt: false, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
fs.unlinkSync(ran)})  
} else m.reply(`${lenguaje.sms.text} *${prefix + command}*`)  
} catch (e) {  
m.reply(`${info.error} ${e}`)
console.log(e)}}

async function convertidores(conn, command, mime, quoted, util, m, exec, lolkeysapi) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (global.db.data.users[m.sender].banned) return
if (command == 'tourl') {
if (!mime) return m.reply(`${lenguaje.sms.text2}`)  
m.reply(info.wait) 
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('../libs/uploader') 
let media = await conn.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
m.reply(`*🔸Link :*\n${util.format(anu)}`)
} else if (!/image/.test(mime)) { 
let anu = await UploadFileUgu(media)
m.reply(util.format(anu))}
await fs.unlinkSync(media)}

if (command == 'toaudio' || command == 'tomp3') {
if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(lenguaje.sms.text3) 
if (!quoted) return m.reply(lenguaje.sms.text3) 
let { toAudio } = require('../libs/converter.js')
let media  = await conn.downloadMediaMessage(quoted)
let audio = await toAudio(media, 'mp4')
await conn.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg', contextInfo:{  externalAdReply: { showAdAttribution: true, mediaType:  1, mediaUrl: md, title: global.botname, sourceUrl: md, thumbnail: imagen1 }}}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'toimg' || command == 'toimagen') {
if (!m.quoted) return m.reply(lenguaje.sms.text4) 
if (!/webp/.test(mime)) return m.reply(lenguaje.sms.text4) 
let media = await conn.downloadAndSaveMediaMessage(m.quoted)
let ran = await getRandom('sk.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
conn.sendMessage(m.chat, { image: buffer }, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
fs.unlinkSync(ran)})}

if (command == 'toanime') {
if (/image/.test(mime)) {
let media = await conn.downloadAndSaveMediaMessage(quoted)
let _upload = await TelegraPh(media)
try {
let anime = await `https://api.lolhuman.xyz/api/imagetoanime?apikey=${lolkeysapi}&img=${_upload}`
m.reply(lenguaje.sms.text5);
await conn.sendFile(m.chat, anime, 'error.jpg', null, m) 
} catch (e) {
throw m.reply(info.error)}
} else { 
m.reply(lenguaje.sms.text7)}}}

module.exports = {efec, convertidores}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
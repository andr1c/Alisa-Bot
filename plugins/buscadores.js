require('../main.js') 
const fs = require("fs")
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom } = require('../libs/fuctions.js'); 
const path = require("path")
const chalk = require("chalk");
const moment = require('moment-timezone') 
const gradient = require('gradient-string') 
const fetch = require('node-fetch') 
const axios = require('axios')
const cheerio = require('cheerio')
const {googleImage} = require('@bochilteam/scraper') 
const Jimp = require('jimp')
const os = require('os')

async function yt(conn, m, text, from, command, fkontak, prefix) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (!text) return m.reply(`*Ejemplo:*\n${prefix + command} anime`)
if (global.db.data.users[m.sender].level < 2) return m.reply(`[ ❇️ ] ɴᴇᴄᴇsɪᴛᴀ ᴇʟ ɴɪᴠᴇʟ 2 ᴘᴀʀᴀ ᴘᴏᴅᴇʀ ᴜsᴀʀ ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ᴄᴏᴍᴘʀᴜᴇʙᴀ ᴛᴜ ɴɪᴠᴇʟ ᴀᴄᴛᴜᴀʟ ᴄᴏɴ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ .nivel`) 
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
}

async function acortar(conn, m, text, args, command) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (global.db.data.users[m.sender].level < 2) return m.reply(`[ ❇️ ] ɴᴇᴄᴇsɪᴛᴀ ᴇʟ ɴɪᴠᴇʟ 2 ᴘᴀʀᴀ ᴘᴏᴅᴇʀ ᴜsᴀʀ ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ᴄᴏᴍᴘʀᴜᴇʙᴀ ᴛᴜ ɴɪᴠᴇʟ ᴀᴄᴛᴜᴀʟ ᴄᴏɴ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ .nivel`) 
 if (!text) return m.reply(`*Ingresa un link para acortar!*`)
let shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text()  
if (!shortUrl1) return m.reply(`*⚠️ ERROR*`)
let done = `*❇️ LINK ACORTADO*\n\n*➵ link: ${text}*\n➵ *Link Acortado: ${shortUrl1}*`
m.reply(done)
}

async function google(conn, m, text, command) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (!text) return m.reply(`*Ejemplo:*\n${prefix + command} gatito`)
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `💫 𝘙𝘌𝘚𝘜𝘓𝘛𝘈𝘋𝘖𝘚 𝘋𝘌 : ${text}\n\n`
for (let g of res) {
teks += `🔶 *Titulo* : ${g.title}\n`
teks += `🔶 *Descripcion* : ${g.snippet}\n`
teks += `🔶 *Link* : ${g.link}\n\n✧⋄⋆⋅⋆⋄✧⋄⋆⋅⋆⋄✧⋄⋆⋅⋆⋄✧⋄⋆⋅⋆⋄✧\n\n`
} 
m.reply(teks)})
}

async function imagen(conn, m, text, command) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (!text) return m.reply(`*Que esta buscado?*\n*Ejemplo:*\n${prefix + command} gatito`)
try {  
image = await fetchJson(`https://api.akuari.my.id/search/googleimage?query=${text}`)
n = image.result
images = n[Math.floor(Math.random() * n.length)]
conn.sendMessage(m.chat, { image: { url: images}, caption: `*💫 𝘙𝘌𝘚𝘜𝘓𝘛𝘈𝘋𝘖𝘚 𝘋𝘌 :* ${text}`}, { quoted: m })
} catch {  
const res = await googleImage(text);
const image = res[Math.floor(Math.random() * res.length)]
const link = imagen;
conn.sendFile(m.chat, link, 'error.jpg', `*💫 𝘙𝘌𝘚𝘜𝘓𝘛𝘈𝘋𝘖𝘚 𝘋𝘌 :* ${text}`, m);
}}

async function tran(conn, m, args, quoted, prefix, command) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (!args || !args[0]) return m.reply(`*Ejemplo:*\n${prefix + command} es hello`)
let lang = args[0];
let text = args.slice(1).join(' ');
const defaultLang = 'es';
if ((args[0] || '').length !== 2) {
lang = defaultLang;
text = args.join(' ')}
if (!text && m.quoted && m.quoted.text) text = m.quoted.text;
const lol = await fetch(`https://api.lolhuman.xyz/api/translate/auto/${lang}?apikey=${lolkeysapi}&text=${text}`);
const loll = await lol.json();
const result2 = loll.result.translated;
await m.reply('*🔶 Traducción:* ' + result2)}

async function tts(conn, m, q, text, quoted) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (!q) return m.reply("*Y EL TEXTO?*")
await conn.sendPresenceUpdate('recording', m.chat)
let texttosay = text
? text
: m.quoted && m.quoted.text
? m.quoted.text
: m.text;
const SpeakEngine = require("google-tts-api"); 
const texttospeechurl = SpeakEngine.getAudioUrl(texttosay, {lang: "es", slow: false, host: "https://translate.google.com",});
conn.sendMessage(m.chat, { audio: { url: texttospeechurl }, contextInfo: { "externalAdReply": { "title": botname, "body": ``, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": md, "showAdAttribution": true}}, seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}

async function ia(conn, m, text, quoted) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (global.db.data.users[m.sender].limit < 1) return m.reply(info.endLimit)
if (!text) return conn.sendMessage(m.chat, { text: `*INGRESE EL TEXTO DE LOS QUE QUIERE BUSCAR?*` }, { quoted: m })
await conn.sendPresenceUpdate('composing', m.chat)
let tioress = await fetch(`https://api.lolhuman.xyz/api/openai-turbo?apikey=${lolkeysapi}&text=${text}`)
let hasill = await tioress.json()
m.reply(`${hasill.result}`.trim())   
db.data.users[m.sender].limit -= 1
}

async function ssw(conn, m, q, prefix, command, quoted, scp1) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (!q) return m.reply(`*Ejemplo:* ${prefix+command} link`)
conn.fakeReply(m.chat, `⏳ *Aguarde un momento....*`, '0@s.whatsapp.net', 'No haga spam')
let krt = await scp1.ssweb(q)
conn.sendMessage(m.chat, {image:krt.result, caption: info.result}, {quoted:m})}

async function wall(conn, text, command, m) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (global.db.data.users[m.sender].level < 3) return m.reply(`[ ❇️ ] ɴᴇᴄᴇsɪᴛᴀ ᴇʟ ɴɪᴠᴇʟ 3 ᴘᴀʀᴀ ᴘᴏᴅᴇʀ ᴜsᴀʀ ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ᴄᴏᴍᴘʀᴜᴇʙᴀ ᴛᴜ ɴɪᴠᴇʟ ᴀᴄᴛᴜᴀʟ ᴄᴏɴ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ .nivel`) 
if (!text) return m.reply(`*[ ⚠️ ] Ejemplo: ${prefix + command} anime*`) 
let { wallpaper, wallpaperv2 } = require('@bochilteam/scraper')
let _res = await (/2/.test(command) ? wallpaperv2 : wallpaper)(text) 
let _img = _res[Math.floor(Math.random() * _res.length)]
conn.sendMessage(m.chat, { image: { url: _img }, caption: `_*ＲＥＳＵＬＴＡＤＯＳ ＤＥ : ${text}*_`}, { quoted: m })}

module.exports = {yt, acortar, google, imagen, tran, tts, ia, ssw, wall}

exports.getRandom = (ext) => {
return `${Math.floor(Math.random() * 10000)}${ext}`
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
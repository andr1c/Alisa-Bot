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
const FormData = require("form-data") 
const os = require('os')

async function yt(conn, m, text, from, command, fkontak, prefix) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (!text) return m.reply(`*Ejemplo:*\n${prefix + command} anime`)
if (global.db.data.users[m.sender].level < 2) return m.reply(`[ ❇️ ] ɴᴇᴄᴇsɪᴛᴀᴅ ᴇʟ ɴɪᴠᴇʟ 2 ᴘᴀʀᴀ ᴘᴏᴅᴇʀ ᴜsᴀʀ ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ᴄᴏᴍᴘʀᴜᴇʙᴀ ᴛᴜ ɴɪᴠᴇʟ ᴀᴄᴛᴜᴀʟ ᴄᴏɴ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ .nivel`) 
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
await conn.sendMessage(from, {text: info.result, edit: key}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
m.react('💫') 
}

async function acortar(conn, m, text, args, command) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (global.db.data.users[m.sender].level < 2) return m.reply(`[ ❇️ ] ɴᴇᴄᴇsɪᴛᴀs ᴇʟ ɴɪᴠᴇʟ 2 ᴘᴀʀᴀ ᴘᴏᴅᴇʀ ᴜsᴀʀ ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ᴄᴏᴍᴘʀᴜᴇʙᴀ ᴛᴜ ɴɪᴠᴇʟ ᴀᴄᴛᴜᴀʟ ᴄᴏɴ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ .nivel`) 
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
const {googleImage} = require('@bochilteam/scraper') 
if (!text) return m.reply(`*Que esta buscado?*\n*Ejemplo:*\n${prefix + command} gatito`)
try {  
image = await fetchJson(`https://api.akuari.my.id/search/googleimage?query=${text}`)
n = image.result
images = n[Math.floor(Math.random() * n.length)]
conn.sendMessage(m.chat, { image: { url: images}, caption: `*💫 𝘙𝘌𝘚𝘜𝘓𝘛𝘈𝘋𝘖𝘚 𝘋𝘌 :* ${text}`}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} catch {
try {  
const res = await googleImage(text);
const image = res[Math.floor(Math.random() * res.length)]
const link = image;
conn.sendMessage(m.chat, { image: { url: link}, caption: `*💫 𝘙𝘌𝘚𝘜𝘓𝘛𝘈𝘋𝘖𝘚 𝘋𝘌 :* ${text}`}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} catch (e) {
console.log(e)
}}}

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
conn.sendMessage(m.chat, { audio: { url: texttospeechurl }, contextInfo: { "externalAdReply": { "title": botname, "body": ``, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": md, "showAdAttribution": true}}, seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
m.react('🗣️')}

async function ia(conn, m, text, quoted) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (global.db.data.users[m.sender].limit < 1) return m.reply(info.endLimit)
if (!text) return m.reply('*INGRESE EL TEXTO DE LO QUE QUIERE BUSCAR?*') 
await conn.sendPresenceUpdate('composing', m.chat)
let tioress = await fetch(`https://api.lolhuman.xyz/api/openai-turbo?apikey=${lolkeysapi}&text=${text}`)
let hasill = await tioress.json()
m.reply(`${hasill.result}`.trim())   
db.data.users[m.sender].limit -= 1
}

async function dalle(conn, text, command, m, lolkeysapi) {
if (!text) return m.reply(`*⚠️ INGRESE EL TEXTO PARA CREAR UNA IMAGEN Y ASI USAR LA FUNCION DE DALL-E*\n\n*• EJEMPLO:*\n*${prefix + command} gatitos llorando`) 
m.reply('*AGUARDE UN MOMENTO...*') 
try {
const tiores1 = await fetch(`https://vihangayt.me/tools/imagine?q=${text}`);
const json1 = await tiores1.json();
await conn.sendMessage(m.chat, {image: {url: json1.data}}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
} catch {  
console.log('[ ⚠️ ] Error con la api 1, intentamos con la otra api');  
try {
const tiores2 = await conn.getFile(`https://vihangayt.me/tools/midjourney?q=${text}`);
await conn.sendMessage(m.chat, {image: {url: tiores2.data}}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
} catch {
console.log('[ ⚠️ ] Error api 2 tambien esta caida.');
try {
const tiores3 = await fetch(`https://vihangayt.me/tools/lexicaart?q=${text}`);
 const json3 = await tiores3.json();
await conn.sendMessage(m.chat, {image: {url: json3.data[0].images[0].url}}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
} catch {
console.log('[ ⚠️ ] Error, api 3 tambien eata caida 😢');
try {
const tiores4 = await conn.getFile(`https://api.lolhuman.xyz/api/dall-e?apikey=${lolkeysapi}&text=${text}`);
await conn.sendMessage(m.chat, {image: {url: tiores4.data}}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
} catch (e) {
return m.reply(`*${info.error} *Error, no se obtuvierón resultados (Api caida)*`) 
console.log(e);}}}}}

async function ssw(conn, m, q, prefix, command, quoted, scp1) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (!q) return m.reply(`*Ejemplo:* ${prefix+command} link`)
conn.fakeReply(m.chat, `⏳ *Aguarde un momento....*`, '0@s.whatsapp.net', 'No haga spam')
let krt = await scp1.ssweb(q)
conn.sendMessage(m.chat, {image:krt.result, caption: info.result}, {quoted:m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

async function wall(conn, text, command, m) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (global.db.data.users[m.sender].level < 3) return m.reply(`[ ❇️ ] ɴᴇᴄᴇsɪᴛᴀ ᴇʟ ɴɪᴠᴇʟ 3 ᴘᴀʀᴀ ᴘᴏᴅᴇʀ ᴜsᴀʀ ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ᴄᴏᴍᴘʀᴜᴇʙᴀ ᴛᴜ ɴɪᴠᴇʟ ᴀᴄᴛᴜᴀʟ ᴄᴏɴ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ .nivel`) 
if (!text) return m.reply(`*[ ⚠️ ] Ejemplo: ${prefix + command} anime*`) 
let { wallpaper, wallpaperv2 } = require('@bochilteam/scraper')
let _res = await (/2/.test(command) ? wallpaperv2 : wallpaper)(text) 
let _img = _res[Math.floor(Math.random() * _res.length)]
conn.sendMessage(m.chat, { image: { url: _img }, caption: `_*ＲＥＳＵＬＴＡＤＯＳ ＤＥ : ${text}*_`}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

async function hd(conn, command, m) {
const FormData = require("form-data") 
const Jimp =  require("jimp") 
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
let q = m.quoted ? m.quoted : m;
let mime = (q.msg || q).mimetype || q.mediaType || "";
if (!mime) return m.reply(`*[ ⚠️ ] ᴇɴᴠɪᴇ/ʀᴇsᴘᴏɴᴅᴀ ᴀ ᴜɴᴀ ɪᴍᴀɢᴇɴ ᴄᴏɴ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ : ${prefix + command}*`) 
if (!/image\/(jpe?g|png)/.test(mime)) return m.reply(`*[ ⚠️ ] ᴇʟ ғᴏʀᴍᴀᴛᴏ ᴅᴇʟ ᴀʀᴄʜɪᴠᴏ (${mime}) ɴᴏ ᴇs ᴄᴏᴍᴘᴀʀᴛɪʙʟᴇ, ᴇɴᴠɪᴀ/ʀᴇsᴘᴏɴᴅᴀ ᴀ ᴜɴᴀ ғᴏᴛᴏ*`) 
m.reply('⏳ *𝘗𝘙𝘖𝘊𝘌𝘚𝘈𝘕𝘋𝘖 𝘓𝘈 𝘐𝘔𝘈𝘎𝘌𝘕, 𝘈𝘎𝘜𝘈𝘙𝘋𝘌 𝘜𝘕 𝘔𝘖𝘔𝘌𝘕𝘛𝘖...*') 
try {
let img = await q.download?.();
let pr = await remini(img, "enhance");
conn.sendMessage(m.chat, {image: pr, caption: `*𝘈𝘘𝘜𝘐 𝘛𝘐𝘌𝘕𝘌 𝘓𝘈 𝘐𝘔𝘈𝘎𝘌𝘕 𝘌𝘓 𝘏𝘋*\n\nˢᶦ ˡᵃ ᶦᵐᵃᵍᵉⁿ ⁿᵒ ˢᵃˡᵉ ᵉˡ ᴴᴰ ʳᵉˢᵖᵒⁿᵈᵉ ᵃ ˡᵃ ᶦᵐᵃᵍᵉⁿ ᶜᵒⁿ ᵉˡ ᶜᵒᵐᵃⁿᵈᵒ ᵈᵉ ⁿᵘᵉᵛᵒ`}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
} catch (e) {
return m.reply(`${info.error}\n\n*ʜᴜʙᴏʀ ᴜɴ ᴇʀʀᴏʀ (ᴀᴘɪ ᴄᴀɪᴅᴀ 🤡)*\n\n${e}`) 
console.log(e) 
}}
 
module.exports = {yt, acortar, google, imagen, tran, tts, ia, ssw, wall, hd, dalle}

exports.getRandom = (ext) => {
return `${Math.floor(Math.random() * 10000)}${ext}`
}

async function remini(imageData, operation) {
return new Promise(async (resolve, reject) => {
const availableOperations = ["enhance", "recolor", "dehaze"];
if (availableOperations.includes(operation)) {
operation = operation;
} else {
operation = availableOperations[0];
}
const baseUrl = "https://inferenceengine.vyro.ai/" + operation + ".vyro";
const formData = new FormData();
formData.append("image", Buffer.from(imageData), {filename: "enhance_image_body.jpg", contentType: "image/jpeg"});
formData.append("model_version", 1, {"Content-Transfer-Encoding": "binary", contentType: "multipart/form-data; charset=utf-8"});
formData.submit({url: baseUrl, host: "inferenceengine.vyro.ai", path: "/" + operation, protocol: "https:", headers: {"User-Agent": "okhttp/4.9.3", Connection: "Keep-Alive", "Accept-Encoding": "gzip"}},
function (err, res) {
if (err) reject(err);
const chunks = [];
res.on("data", function (chunk) {chunks.push(chunk)});
res.on("end", function () {resolve(Buffer.concat(chunks))});
res.on("error", function (err) {
reject(err);
})},)})}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
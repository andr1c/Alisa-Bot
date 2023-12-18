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

async function buscadores(m, command, conn, text, from, fkontak, prefix, args, q, quoted, lang, lolkeysapi) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (command == 'yts' || command == 'ytsearch') {
if (global.db.data.users[m.sender].level < 2) return m.reply(`${lenguaje['nivel']()} 2 ${lenguaje['nivel2']()}`) 
if (!text) return m.reply(`${lenguaje.lengua.ejem}\n${prefix + command} anime`)
const yts = require("youtube-yts");
const search = await yts(text);
const {key} = await conn.sendMessage(from, {text: info.wait}, { quoted: fkontak })
await conn.sendMessage(from, {text: info.waitt, edit: key}, { quoted: fkontak })
await conn.sendMessage(from, {text: info.waittt, edit: key}, { quoted: fkontak })
await conn.sendMessage(from, {text: info.waitttt, edit: key}, { quoted: fkontak })	
let teks = `💫 ${lenguaje['result']()} ` + text + '\n\n';
let no = 1;
let themeemoji = "🔶"
for (let i of search.all) {
  teks += `${themeemoji} ${lenguaje.lengua.opcion} ${no++}\n${themeemoji} ${lenguaje.lengua.tipo} ${i.type}\n${themeemoji} ${lenguaje.lengua.id} ${i.videoId}\n${themeemoji} ${lenguaje.lengua.titulo} ${i.title}\n${themeemoji} ${lenguaje.lengua.vista} ${i.views}\n${themeemoji} ${lenguaje.lengua.dura} ${i.timestamp}\n${themeemoji} ${lenguaje.lengua.subidos} ${i.ago}\n${themeemoji} URL: ${i.url}\n\n✧⋄⋆⋅⋆⋄✧⋄⋆⋅⋆⋄✧⋄⋆⋅⋆⋄✧⋄⋆⋅⋆⋄✧\n\n`;
}
await conn.sendMessage(from, { image: { url: search.all[0].thumbnail }, caption: teks }, { quoted: fkontak });
await conn.sendMessage(from, {text: info.result, edit: key}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
m.react('💫') 
}

if (command == 'acortar') {
if (global.db.data.users[m.sender].level < 2) return m.reply(`${lenguaje['nivel']()} 2 ${lenguaje['nivel2']()}`) 
 if (!text) return m.reply(`${lenguaje.lengua.text}`)
let shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text()  
if (!shortUrl1) return m.reply(`${lenguaje['error']()}`)
m.reply(`${shortUrl1}`)
}

if (command == 'google') {
if (!text) return m.reply(`${lenguaje.lengua.ejem}\n${prefix + command} gatito`)
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `💫  ${lenguaje['result']()} ${text}\n\n`
for (let g of res) {
teks += `🔶 ${lenguaje.lengua.titulo} ${g.title}\n`
teks += `🔶 ${lenguaje.lengua.desc} ${g.snippet}\n`
teks += `🔶 *LINK* : ${g.link}\n\n✧⋄⋆⋅⋆⋄✧⋄⋆⋅⋆⋄✧⋄⋆⋅⋆⋄✧⋄⋆⋅⋆⋄✧\n\n`
} 
m.reply(teks)})
}

if (command == 'imagen') {
const {googleImage} = require('@bochilteam/scraper') 
if (!text) return m.reply(`${lenguaje.lengua.ejemplo}\n${prefix + command} gatito`)
try {  
image = await fetchJson(`https://api.akuari.my.id/search/googleimage?query=${text}`)
n = image.result
images = n[Math.floor(Math.random() * n.length)]
conn.sendMessage(m.chat, { image: { url: images}, caption: `*💫 ${lenguaje['result']()}* ${text}`}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} catch {
try {  
const res = await googleImage(text);
const image = res[Math.floor(Math.random() * res.length)]
const link = image;
conn.sendMessage(m.chat, { image: { url: link}, caption: `*💫 ${lenguaje['result']()} :* ${text}`}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} catch (e) {
console.log(e)
}}}

if (command == 'traducir' || command == 'translate') {
if (!args || !args[0]) return m.reply(`${lenguaje.lengua.ejem}\n${prefix + command} es hello`)
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
await m.reply(`${lenguaje.lengua.trad} ` + result2)}

if (command == 'tts') {
if (!text) return m.reply(`${lenguaje.lengua.text2}`)
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

if (command == 'chatgpt' || command == 'ia') {
const translate = require('@vitalets/google-translate-api') 
const {Configuration, OpenAIApi} = require('openai') 
const configuration = new Configuration({organization: global.openai_org_id, apiKey: global.openai_key})
const openaiii = new OpenAIApi(configuration)
if (prefix == 'a' || prefix == 'A') return
if (!text) return m.reply(`${lenguaje.lengua.ia} ${prefix + command} Recomienda un top 10 de películas de acción`) 
try {
conn.sendPresenceUpdate('composing', m.chat)
let sistema1 = `Actuaras como un Bot de WhatsApp el cual fue creado por elrebelde, tu seras NovaBot-MD`
async function getOpenAIChatCompletion(texto) {
const openaiAPIKey = global.openai_key
let chgptdb = global.chatgpt.data.users[m.sender]
chgptdb.push({ role: 'user', content: texto })
const url = "https://api.openai.com/v1/chat/completions"
const headers = { "Content-Type": "application/json", "Authorization": `Bearer ${openaiAPIKey}` }
const data = { "model": "gpt-3.5-turbo", "messages": [{ "role": "system", "content": sistema1 }, ...chgptdb, ]}
const response = await fetch(url, {method: "POST", headers: headers, body: JSON.stringify(data)})
const result = await response.json()
const finalResponse = result.choices[0].message.content
return finalResponse
}
let respuesta = await getOpenAIChatCompletion(text)
if (respuesta == 'error' || respuesta == '' || !respuesta) return XD; // causar error undefined para usar otra api
m.reply(`${respuesta}`.trim())
} catch {
try {
const botIA222 = await openaiii.createCompletion({model: 'text-davinci-003', prompt: text, temperature: 0.3, max_tokens: 4097, stop: ['Ai:', 'Human:'], top_p: 1, frequency_penalty: 0.2, presence_penalty: 0});
if (botIA222.data.choices[0].text == 'error' || botIA222.data.choices[0].text == '' || !botIA222.data.choices[0].text) return XD; // causar error undefined para usar otra api
m.reply(botIA222.data.choices[0].text.trim());
} catch {
try {
const syms1 = `Actuaras como un Bot de WhatsApp el cual fue creado por elrebelde, tu seras NovaBot-MD.`;
const fgapi1 = await fetch(`https://api-fgmods.ddns.net/api/info/openai?text=${text}&symsg=${syms1}&apikey=XlwAnX8d`);
const fgjson1 = await fgapi1.json();
if (fgjson1.result == 'error' || fgjson1.result == '' || !fgjson1.result) return XD; // causar error undefined para lanzar msg de error
m.reply(`${fgjson1.result}`.trim());
} catch {
try {
const vihangayt1 = await fetch(`https://vihangayt.me/tools/chatgpt?q=${text}`);
const vihangaytjson1 = await vihangayt1.json();
if (vihangaytjson1.data == 'error' || vihangaytjson1.data == '' || !vihangaytjson1.data) return XD; // causar error undefined para usar otra api
m.reply(`${vihangaytjson1.data}`.trim());
} catch {
try {
const vihangayt2 = await fetch(`https://vihangayt.me/tools/chatgpt2?q=${text}`);
const vihangaytjson2 = await vihangayt2.json();
if (vihangaytjson2.data == 'error' || vihangaytjson2.data == '' || !vihangaytjson2.data) return XD; // causar error undefined para usar otra api
m.reply(`${vihangaytjson2.data}`.trim());
} catch {
try {
const vihangayt3 = await fetch(`https://vihangayt.me/tools/chatgpt3?q=${text}`);
const vihangaytjson3 = await vihangayt3.json();
if (vihangaytjson3.data == 'error' || vihangaytjson3.data == '' || !vihangaytjson3.data) return XD; // causar error undefined para usar otra api
m.reply(`${vihangaytjson3.data}`.trim());        
} catch {
try {
const tioress22 = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=${lolkeysapi}&text=${text}&user=${m.sender}`);
const hasill22 = await tioress22.json();
if (hasill22.result == 'error' || hasill22.result == '' || !hasill22.result) return XD; // causar error undefined para usar otra api
const hasill22_result = await translate(`${hasill22.result}`, {to: 'es', autoCorrect: true});
m.reply(`${hasill22_result.text}`.trim());
} catch {
try {
const searchString2 = ' Indonesia ';
const replacementString2 = ' español ';
const rres = await fetch(`https://api.ibeng.tech/api/others/chatgpt?q=Hola&apikey=eMlBNRzUXv`);
const jjson = await rres.json();
const hahaha = await translate(`${jjson.data}`, {to: 'es', autoCorrect: true});
const sextS = hahaha.text;
const replacedText = sextS.replace(searchString2, replacementString2).trim();
m.reply(replacedText);
} catch {
try {
const akuariapi2 = await fetch(`https://api.akuari.my.id/ai/gpt?chat=${text}`);
const akuariapijson2 = await akuariapi2.json();
if (akuariapijson2.respon == 'error' || akuariapijson2.respon == '' || !akuariapijson2.respon) return XD; // causar error undefined para lanzar msg de error
const akuariapiresult2 = await translate(`${akuariapijson2.respon}`, {to: 'es', autoCorrect: true});
m.reply(akuariapiresult2.text.trim());
} catch {
try {
const akuariapi1 = await fetch(`https://api.azz.biz.id/api/bard?q=${text}&key=global`);
const akuariapijson1 = await akuariapi1.json();
if (akuariapijson1.respon == 'error' || akuariapijson1.respon == '' || !akuariapijson1.respon) return XD; // causar error undefined para usar otra api
const akuariapiresult1 = await translate(`${akuariapijson1.respon}`, {to: 'es', autoCorrect: true});
m.reply(`${akuariapiresult1.text}`.trim());
} catch {
return m.reply(info.error)}}}}}}}}}}}

if (command == 'dalle' || command == 'ia2' || command == 'aimg' || command == 'imagine' || command == 'dall-e') {
if (!text) return m.reply(`${lenguaje.lengua.ia2} ${prefix + command} gatitos llorando`) 
m.reply(`${lenguaje.lengua.espere}`) 
try {
const tiores1 = await fetch(`https://vihangayt.me/tools/imagine?q=${text}`);
const json1 = await tiores1.json();
await conn.sendMessage(m.chat, {image: {url: json1.data}}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
} catch (e) {  
console.log(`${info.error + e}`);  
try {
const tiores2 = await conn.getFile(`https://vihangayt.me/tools/midjourney?q=${text}`);
await conn.sendMessage(m.chat, {image: {url: tiores2.data}}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
} catch (e) {
console.log(`${e}`) 
try {
const tiores3 = await fetch(`https://vihangayt.me/tools/lexicaart?q=${text}`);
 const json3 = await tiores3.json();
await conn.sendMessage(m.chat, {image: {url: json3.data[0].images[0].url}}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
} catch {
try {
const tiores4 = await conn.getFile(`https://api.lolhuman.xyz/api/dall-e?apikey=${lolkeysapi}&text=${text}`);
await conn.sendMessage(m.chat, {image: {url: tiores4.data}}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
} catch (e) {
return m.reply(info.error) 
console.log(e);}}}}}

if (command == 'ss' || command == 'ssweb') {
const scp1 = require('../libs/scraper') 
if (!text) return m.reply(`${lenguaje.lengua.ejem} ${prefix+command} link`)
conn.fakeReply(m.chat, `${lenguaje.lengua.espere}`, '0@s.whatsapp.net', 'No haga spam')
let krt = await scp1.ssweb(q)
conn.sendMessage(m.chat, {image:krt.result, caption: info.result}, {quoted:m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'wallpaper') {
if (global.db.data.users[m.sender].level < 3) return m.reply(`${lenguaje['nivel']()} 3 ${lenguaje['nivel2']()}`) 
if (!text) return m.reply(`${lenguaje.lengua.ejem} ${prefix + command} anime*`) 
let { wallpaper, wallpaperv2 } = require('@bochilteam/scraper')
let _res = await (/2/.test(command) ? wallpaperv2 : wallpaper)(text) 
let _img = _res[Math.floor(Math.random() * _res.length)]
conn.sendMessage(m.chat, { image: { url: _img }, caption: `_${lenguaje['result']()} ${text}_`}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'hd') {
const FormData = require("form-data") 
const Jimp =  require("jimp") 
let q = m.quoted ? m.quoted : m;
let mime = (q.msg || q).mimetype || q.mediaType || "";
if (!mime) return m.reply(`${lenguaje.lengua.responde} ${prefix + command}*`) 
if (!/image\/(jpe?g|png)/.test(mime)) return m.reply(`${lenguaje.lengua.incorrecto}`) 
m.reply(`${lenguaje.lengua.aguarde}`) 
try {
let img = await q.download?.();
let pr = await remini(img, "enhance");
conn.sendMessage(m.chat, {image: pr, caption: `${lenguaje.lengua.hd}`}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
} catch (e) {
return m.reply(info.error) 
console.log(e) 
}}}
 
module.exports = {buscadores}

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
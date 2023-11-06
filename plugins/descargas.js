require('../main.js') 
const fs = require("fs")
const path = require("path")
const chalk = require("chalk");
const axios = require('axios')
const fetch = require('node-fetch')
const cheerio = require('cheerio')
const yts = require("yt-search") 
const ytdl = require('ytdl-core') 
const { smsg, fetchBuffer, getBuffer, buffergif, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getFile, getRandom, msToTime, downloadMediaMessage, convertirMsADiasHorasMinutosSegundos} = require('../libs/fuctions')
const {sizeFormatter} = require('human-readable') 
const formatSize = sizeFormatter({
  std: 'JEDEC', decimalPlaces: 2, keepTrailingZeroes: false, render: (literal, symbol) => `${literal} ${symbol}B`});

async function play(conn, text, command, args, m) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (global.db.data.users[m.sender].limit < 1) return m.reply(info.endLimit)
const yts = require("yt-search") 
const ytdl = require('ytdl-core') 
if (!text) return m.reply(`*Que esta buscado? ingrese el nombre del tema*\n\nEjemplo: *${prefix + command}* ozuna`) 
try { 
m.react(rwait) 
let vid = (await yts(text)).all[0]
const yt_play = await search(args.join(" "))
let { title, description, url, thumbnail, videoId, timestamp, views, published } = vid
let message = await conn.sendMessage(m.chat, { text: `         *⌜Cancion Encontrada ✅⌟*\n\n◉ *Título:* ${yt_play[0].title}\n◉ *Duracion:* ${secondString(yt_play[0].duration.seconds)}\n◉ *Publicado:* ${yt_play[0].ago}\n◉ *Autor:* ${yt_play[0].author.name}\n◉ *Vistas:* ${MilesNumber(yt_play[0].views)}\n\n*• 𝘋𝘦𝘴𝘤𝘢𝘳𝘨𝘢𝘥𝘰 𝘢𝘶𝘥𝘪𝘰 🔊, 𝘈𝘨𝘶𝘢𝘳𝘥𝘦 𝘶𝘯 𝘮𝘰𝘮𝘦𝘯𝘵𝘰....*`, contextInfo: { externalAdReply: { title: wm, body: yt_play[0].title.replace(/\*/g, ''), thumbnailUrl: thumbnail, sourceUrl: yt_play[0].url, mediaType: 1, showAdAttribution: false, renderLargerThumbnail: true }}}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
let mediaa = await ytMp4(yt_play[0].url)
conn.sendMessage(m.chat, { audio: { url: mediaa.result }, mimetype: 'audio/mpeg', contextInfo: {
externalAdReply: {
title: yt_play[0].title,
body: "",
thumbnailUrl: yt_play[0].thumbnail, 
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}}}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})  
db.data.users[m.sender].limit -= 1
m.reply(info.limit)
m.react(done) 
} catch {
try { 
let search = await yts(text)
let anup3k = search.videos[0]
let anu = search.videos[Math.floor(Math.random() * search.videos.length)] 
eek = await getBuffer(anu.thumbnail) 
const playmp3 = require('../libs/ytdl2')
const pl= await playmp3.mp3(anup3k.url)
await conn.sendMessage(m.chat, { audio: fs.readFileSync(pl.path), fileName: `error.mp3`, mimetype: 'audio/mp4' },  {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
m.react(done) 
await fs.unlinkSync(pl.path)
} catch (e) {
m.react(error) 
console.log(e)}}}

async function play2(conn, text, command, args, m) {
const yts = require("yt-search") 
const ytdl = require('ytdl-core') 
if (!text) return m.reply(`*Que esta buscado? ingrese el nombre del tema*\n\nEjemplo: *${prefix + command}* ozuna`) 
m.react(rwait) 
let vid = (await yts(text)).all[0]
const yt_play = await search(args.join(" "))
let { title, description, url, thumbnail, videoId, timestamp, views, published } = vid
let message = await conn.sendMessage(m.chat, { text: `         *⌜Video Encontrado ✅⌟*\n\n◉ *Título:* ${yt_play[0].title}\n◉ *Duracion:* ${secondString(yt_play[0].duration.seconds)}\n◉ *Publicado:* ${yt_play[0].ago}\n◉ *Autor:* ${yt_play[0].author.name}\n◉ *Vistas:* ${MilesNumber(yt_play[0].views)}\n\n*• 𝘋𝘦𝘴𝘤𝘢𝘳𝘨𝘢𝘥𝘰 𝘷𝘪𝘥𝘦𝘰 🎥, 𝘈𝘨𝘶𝘢𝘳𝘥𝘦 𝘶𝘯 𝘮𝘰𝘮𝘦𝘯𝘵𝘰....*`, contextInfo: { externalAdReply: { title: wm, body: yt_play[0].title.replace(/\*/g, ''), thumbnailUrl: thumbnail, sourceUrl: yt_play[0].url, mediaType: 1, showAdAttribution: false, renderLargerThumbnail: true }}}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
let mediaa = await ytMp4(yt_play[0].url)
await conn.sendMessage(m.chat, { video: { url: mediaa.result }, fileName: `error.mp4`, caption: `*Aqui tiene sus video 👌*\n*🔰Titulo:* ${yt_play[0].title}`, thumbnail: mediaa.thumb, mimetype: 'video/mp4' }, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
m.react(done)}

async function play3(conn, text, command, args, m) {
const fetch = require('node-fetch') 
const yts = require('yt-search') 
const ytdl = require('ytdl-core') 
const axios = require('axios') 
const {youtubedl, youtubedlv2} = require('@bochilteam/scraper') 
if (!text) return m.reply(`*Que esta buscado? ingrese el nombre del tema*\n\nEjemplo: *${prefix + command}* ozuna`) 
try { 
m.react(rwait) 
let vid = (await yts(text)).all[0]
const yt_play = await search(args.join(" "))
let { title, description, url, thumbnail, videoId, timestamp, views, published } = vid
let message = await conn.sendMessage(m.chat, { text: `          *⌜Audio Encontrado ✅⌟*
◉ *Título* : ${yt_play[0].title}
◉ *Publicado:* ${yt_play[0].ago}
◉ *Duración:* ${secondString(yt_play[0].duration.seconds)}
◉ *Autor:* ${yt_play[0].author.name}
◉ *Vistas:* ${MilesNumber(yt_play[0].views)}
◉ *Link:* ${yt_play[0].url}

*𝘌𝘚𝘗𝘌𝘙𝘌 𝘌𝘕𝘝𝘐𝘈𝘕𝘋𝘖 𝘚𝘜 𝘈𝘙𝘊𝘏𝘐𝘝𝘖 𝘔𝘗3 ⚠*

*𝘚𝘦𝘳𝘷𝘪𝘤𝘪𝘰 𝘱𝘳𝘰𝘷𝘦𝘪𝘥𝘰 𝘱𝘰𝘳 𝘕𝘰𝘷𝘢𝘉𝘰𝘵*`, contextInfo: { externalAdReply: { title: wm, body: yt_play[0].title.replace(/\*/g, ''), thumbnailUrl: thumbnail, sourceUrl: yt_play[0].url, mediaType: 1, showAdAttribution: false, renderLargerThumbnail: true }}}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100}) 
const q = '128kbps';
const v = yt_play[0].url;
const yt = await youtubedl(v).catch(async (_) => await youtubedlv2(v));
const dl_url = await yt.audio[q].download();
const ttl = await yt.title;
const size = await yt.audio[q].fileSizeH;
await conn.sendMessage(m.chat, {document: {url: dl_url}, mimetype: 'audio/mpeg', fileName: `${ttl}.mp3`}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
m.react(done) 
} catch {
try {
const lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkeysapi}&url=${yt_play[0].url}`);
const lolh = await lolhuman.json();
const n = lolh.result.title || 'error';
await conn.sendMessage(m.chat, {document: {url: lolh.result.link}, fileName: `${n}.mp3`, mimetype: 'audio/mpeg'}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
m.react(done) 
} catch {
try {
const searchh = await yts(yt_play[0].url);
const __res = searchh.all.map((v) => v).filter((v) => v.type == 'video');
const infoo = await ytdl.getInfo('https://youtu.be/' + __res[0].videoId);
const ress = await ytdl.chooseFormat(infoo.formats, {filter: 'audioonly'});
conn.sendMessage(m.chat, {audio: {url: ress.url}, fileName: __res[0].title + '.mp3', mimetype: 'audio/mp4'}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
m.react(done) 
} catch (e) {
m.react(error) 
return m.reply(`${info.error}\n\nNo se pudo descargar sus video por favor vuelve a intenta`) 
console.log(e)}}}}

async function play4(conn, text, command, args, m) {
const fetch = require('node-fetch') 
const yts = require('yt-search') 
const ytdl = require('ytdl-core') 
const axios = require('axios') 
const {youtubedl, youtubedlv2} = require('@bochilteam/scraper') 
if (!text) return m.reply(`*Que esta buscado? ingrese el nombre del tema*\n\nEjemplo: *${prefix + command}* ozuna`) 
try { 
m.react(rwait) 
let vid = (await yts(text)).all[0]
const yt_play = await search(args.join(" "))
let { title, description, url, thumbnail, videoId, timestamp, views, published } = vid
let message = await conn.sendMessage(m.chat, { text: `          *⌜Video Encontrado ✅⌟*
◉ *Título* : ${yt_play[0].title}
◉ *Publicado:* ${yt_play[0].ago}
◉ *Duración:* ${secondString(yt_play[0].duration.seconds)}
◉ *Autor:* ${yt_play[0].author.name}
◉ *Vistas:* ${MilesNumber(yt_play[0].views)}
◉ *Link:* ${yt_play[0].url}
 
*𝘌𝘚𝘗𝘌𝘙𝘌 𝘌𝘕𝘝𝘐𝘈𝘕𝘋𝘖 𝘚𝘜 𝘈𝘙𝘊𝘏𝘐𝘝𝘖 𝘔𝘗4 ⚠*

*𝘚𝘦𝘳𝘷𝘪𝘤𝘪𝘰 𝘱𝘳𝘰𝘷𝘦𝘪𝘥𝘰 𝘱𝘰𝘳 𝘕𝘰𝘷𝘢𝘉𝘰𝘵*`, contextInfo: { externalAdReply: { title: wm, body: yt_play[0].title.replace(/\*/g, ''), thumbnailUrl: thumbnail, sourceUrl: yt_play[0].url, mediaType: 1, showAdAttribution: false, renderLargerThumbnail: true }}}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100}) 
const qu = '360';
const q = qu + 'p';
const v = yt_play[0].url;
const yt = await youtubedl(v).catch(async (_) => await youtubedlv2(v));
const dl_url = await yt.video[q].download();
const ttl = await yt.title;
const size = await yt.video[q].fileSizeH;
await await conn.sendMessage(m.chat, {document: {url: dl_url}, fileName: `${ttl}.mp4`, mimetype: 'video/mp4', caption: `*╭┄〔 📥 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐃𝐋 📥 〕┄⊱-*\n┆🔸️ *𝚃𝙸𝚃𝚄𝙻𝙾:* ${ttl}\n┆🔸️ *𝙿𝙴𝚂𝙾:* ${size}\n╰─────────────────`, thumbnail: await fetch(yt.thumbnail)}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
m.react(done) 
} catch {
try {
const mediaa = await ytMp4(yt_play[0].url);
await await conn.sendMessage(m.chat, {document: {url: dl_url}, caption: cap, mimetype: 'video/mp4', fileName: ttl + `.mp4`}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
} catch {
try {
const lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${lolkeysapi}&url=${yt_play[0].url}`);
const lolh = await lolhuman.json();
const n = lolh.result.title || 'error';
const n2 = lolh.result.link;
const n3 = lolh.result.size;
const n4 = lolh.result.thumbnail;
await conn.sendMessage(m.chat, {document: {url: n2}, fileName: `${n}.mp4`, mimetype: 'video/mp4', caption: `*╭┄〔 📥 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐃𝐋 📥 〕┄⊱-*\n┆🔸️ *𝚃𝙸𝚃𝚄𝙻𝙾:* ${n}\n┆🔸️ *𝙿𝙴𝚂𝙾:* ${n3}\n╰─────────────────`, thumbnail: await fetch(n4)}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
m.react(done) 
} catch (e) {
m.react(error) 
return m.reply(`${info.error}\n\nNo se pudo descargar sus video por favor vuelve a intenta`) 
console.log(e)}}}}

async function mp3(conn, args, text, command, fkontak, ytplayvid, m) {
if (global.db.data.users[m.sender].limit < 1) return m.reply(info.endLimit)
const mp = require('../libs/ytdl2')
if (args.length < 1 || !isUrl(text) || !mp.isYTUrl(text)) return m.reply(`*Que esta buscado?*\n\n*Ejemplo:*\n${prefix + command} https://youtu.be/7ouFkoU8Ap8?si=Bvm3LypvU_uGv0bw`)
m.react(rwait) 
conn.sendMessage(m.chat, { text: `         *⌜Audio Encontrado ✅⌟*\n\n• *Título:* ${vid.title}\n• *Publicado:* ${vid.date}\n\n*ESPERE ENVIANDO SU ARCHIVO MP3 ⚠*` }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
try {
let mediaa = await ytplayvid(text)
const audio = await mp.mp3(text)
await conn.sendMessage(m.chat, {audio: fs.readFileSync(audio.path), mimetype: 'audio/mp4',
contextInfo: {
externalAdReply: { title:audio.meta.title,
body: botname,
//await getBuffer(pl.meta.image),
thumbnail: getBuffer(audio.meta.image), 
mediaType:2,
mediaUrl:text,
}}}, {quoted:m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100}) 
await fs.unlinkSync(audio.path)
m.react(done) 
db.data.users[m.sender].limit -= 1
m.reply(info.limit)
} catch {
m.react(error) 
m.reply(info.error)}}

async function mp4(conn, args, text, command, fkontak, m) {
if (global.db.data.users[m.sender].limit < 1) return m.reply(info.endLimit)
const mp = require('../libs/ytdl2')
const vid = await mp.mp4(text)
if (args.length < 1 || !isUrl(text) || !mp.isYTUrl(text)) return m.reply(`*Que esta buscado?*\n\n*Ejemplo:*\n${prefix + command} https://youtu.be/7ouFkoU8Ap8?si=Bvm3LypvU_uGv0bw`)
m.react(rwait) 
conn.sendMessage(m.chat, { text: `         *⌜Video Encontrado ✅⌟*\n\n• *Título:* ${vid.title}\n\n*ESPERE ENVIANDO SU ARCHIVO MP4 ⚠*` }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});    
try {
const ytc = `*❏ Título :* ${vid.title} 
*❏ Duración :* ${vid.duration}
*❏ Subido :* ${vid.date}
*❏ calidad :* ${vid.quality}`
await conn.sendMessage(m.chat, {video: {url : vid.videoUrl}, caption: ytc }, {quoted:m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
db.data.users[m.sender].limit -= 1
m.reply(info.limit)
m.react(done) 
} catch {
m.react(error) 
m.reply(info.error)}}

async function spoti(conn, text, m, from, buffer, getFile) {
if (!text) return m.reply(`*Que esta buscados?*\n*Ingrese el nombre de alguna canción de spotify.*`) 
try { 
m.react(rwait) 
m.reply('*🕔 𝘈𝘎𝘜𝘈𝘙𝘋𝘌 𝘜𝘕 𝘔𝘖𝘔𝘌𝘕𝘛𝘖....*') 
const res = await fetch(global.API('ApiEmpire', '/api/spotifysearch?text=' + text))
const data = await res.json()
const linkDL = data.spty.resultado[0].link;
const musics = await fetch(global.API('ApiEmpire', '/api/spotifydl?text=' + linkDL))
const music = await conn.getFile(musics.url)
const infos = await fetch(global.API('ApiEmpire', '/api/spotifyinfo?text=' + linkDL))
const info = await infos.json()
const spty = info.spty.resultado
const img = await (await fetch(`${spty.thumbnail}`)).buffer()  
let spotifyi = `◦  *𝘛𝘐𝘛𝘜𝘓𝘖:* ${spty.title}\n`
spotifyi += `◦  *𝘈𝘙𝘛𝘐𝘚𝘛𝘈:* ${spty.artist}\n`
spotifyi += `◦  *𝘈𝘓𝘉𝘜𝘔:* ${spty.album}\n`          
spotifyi += `◦  *𝘗𝘜𝘉𝘓𝘐𝘊𝘈𝘋𝘖:* ${spty.year}\n\n`   
spotifyi += `𝘋𝘦𝘴𝘤𝘢𝘳𝘨𝘢𝘥𝘰 𝘢𝘶𝘥𝘪𝘰, 𝘢𝘨𝘶𝘢𝘳𝘥𝘦 𝘶𝘯 𝘮𝘰𝘮𝘦𝘯𝘵𝘰 𝘱𝘰𝘳 𝘧𝘢𝘷𝘰𝘳...`
await conn.sendMessage(m.chat, {text: spotifyi.trim(), contextInfo: {forwardingScore: 9999999, isForwarded: true, "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm2, "containsAutoReply": true, "mediaType": 1, "thumbnail": img, "thumbnailUrl": img, "mediaUrl": linkDL, "sourceUrl": linkDL}}}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
await conn.sendMessage(m.chat, {audio: music.data, fileName: `${spty.name}.mp3`, mimetype: 'audio/mpeg'}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
m.react(done) 
} catch (error) {
m.react(error) 
console.error(error);
return m.reply(`${info.error}\nNo fue posible descarga el audio (api caida 🤡)`)}}

async function git(conn, args, command, m) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (global.db.data.users[m.sender].limit < 1) return m.reply(info.endLimit)
if (!args[0]) return m.reply(`*Donde esta el link del github?*\n\n*Ejemplo :*\n${prefix + command} ${md}`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return m.reply(`Link invalido!!`)
m.react('🕔') 
m.reply('*𝘈𝘎𝘜𝘈𝘙𝘋𝘌 𝘜𝘕 𝘔𝘖𝘔𝘌𝘕𝘛𝘖...*\n\nˢᶦ ᵉˡ ᵃʳᶜʰᶦᵛᵒ ⁿᵒ ˡˡᵉᵍᵃ ᵉˢ ᵠᵘᵉ ʳᵉᵖᵒˢᶦᵗᵒʳᶦᵒ ᵉˢ ᵐᵘʸ ᵖᵉˢᵃᵈᵒ') 
try {
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let [, user, repo] = args[0].match(regex1) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
conn.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100}).catch((err) => m.reply(info.error))
db.data.users[m.sender].limit -= 1
m.reply(info.limit) 
m.react(done) 
} catch {
m.react(error) 
m.reply(info.error)}}

async function tiktok(conn, text, command, q, m) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (global.db.data.users[m.sender].limit < 1) return m.reply(info.endLimit)
if (!text) return m.reply(`*Ejemplo:*\n${prefix + command} https://vm.tiktok.com/ZMjdrFCtg/`)
if (!q.includes('tiktok')) return m.reply(`*link invalido!*`)
//await loading ()
conn.fakeReply(m.chat, `⏳ *Aguarde un momento....*`, '0@s.whatsapp.net', 'No haga spam')
try {
require('../libs/tiktok').Tiktok(q).then( data => {
conn.sendMessage(m.chat, { video: { url: data.nowm }}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
conn.sendMessage(m.chat, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})})
db.data.users[m.sender].limit -= 1
m.reply(info.limit) 
} catch {
m.reply(info.error)}}

async function letra(conn, text, command, fkontak, m) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (global.db.data.users[m.sender].limit < 1) return m.reply(info.endLimit)
if (!text) return m.reply(`*Que esta buscado? ingresa el titulo/nombre de la canción*\n*Ejemplo:* ${prefix + command} ozuna`)
const { lyrics, lyricsv2 } = require('@bochilteam/scraper')
const result = await lyricsv2(text).catch(async _ => await lyrics(text))
conn.editMessage(m.chat, '*Aguarde un momento....*', `*❏ Titulo:* ${result.title}\n*❏ Autor :* ${result.author}\n*❏ Url :* ${result.link}\n\n*❏ Letra :* ${result.lyrics}`, 3, fkontak)
db.data.users[m.sender].limit -= 1
m.reply(info.limit)}

async function mediafire(conn, text, command, mediafireDl, m) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (global.db.data.users[m.sender].limit < 1) return m.reply(info.endLimit)
if (!text) return m.reply(`*Ejemplo:*\n${prefix + command} https://www.mediafire.com/file/admrdma1ff3cq10/Siete-Ocho.zip/file`) 
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
m.reply(`${result4}`) 
 conn.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime ,  quoted : m, contextInfo: { externalAdReply:{ 
   title: botname, 
   body:"💫", 
   showAdAttribution: true, 
   mediaType:2, 
   thumbnail: fs.readFileSync(`./media/menu.jpg`) , 
   mediaUrl: md,  
 sourceUrl: md }}}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
 db.data.users[m.sender].limit -= 2
m.reply('*2 ᴅɪᴀᴍᴀɴᴛᴇ 💎 ᴜsᴀᴅᴏ*')}

async function fb(conn, text, command, lolkeysapi, args, m) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (global.db.data.users[m.sender].limit < 1) return m.reply(info.endLimit)
if (!text) return m.reply(`*Ejemplo:*\n${prefix + command} https://fb.watch/ncowLHMp-x/?mibextid=rS40aB7S9Ucbxw6v`)
conn.fakeReply(m.chat, `⏳ *Aguarde un momento....*`, '0@s.whatsapp.net', 'No haga spam')
try {
const Rres = await fetch(`https://api.lolhuman.xyz/api/facebook?apikey=${lolkeysapi}&url=${args[0]}`);
const Jjson = await Rres.json();
let VIDEO = Jjson.result[0];
if (VIDEO == '' || !VIDEO || VIDEO == null) VIDEO = Jjson.result[1];
conn.sendMessage(m.chat, {video: {url: VIDEO}, caption: `*🎥 AQUI ESTA TU VIDEO DE FACEBOOK*`}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
db.data.users[m.sender].limit -= 1
m.reply(info.limit)
} catch {
m.reply(info.error)}}

async function ig(conn, text, command, lolkeysapi, args, m) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (global.db.data.users[m.sender].limit < 1) return m.reply(info.endLimit)
if (!text) return m.reply(`*Ejemplo:*\n${prefix + command} https://www.instagram.com/p/CCoI4DQBGVQ/?igshid=YmMyMTA2M2Y=`)
conn.fakeReply(m.chat, `⏳ *Aguarde un momento....*`, '0@s.whatsapp.net', 'No haga spam')
try {
const human = await fetch(`https://api.lolhuman.xyz/api/instagram?apikey=${lolkeysapi}&url=${args[0]}`);
const json = await human.json();
const videoig = json.result;
const shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
conn.sendMessage(m.chat, {video: {url: videoig}, caption: `🔗 *Url:* ${shortUrl1}`}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
db.data.users[m.sender].limit -= 1
m.reply(info.limit)
} catch {
m.reply(info.error)}}           

async function ig2(conn, args, command, m) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (!args[0]) return m.reply(`*Ingrese el nombre del usuario*\n\n*Ejemplo:* ${prefix + command} Emilia`)
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
await conn.sendMessage(m.chat, {image: { url: res.profilePic }, caption: te }, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} catch {
m.reply(info.error)}}

async function apk(conn, text, m) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (global.db.data.users[m.sender].limit < 1) return m.reply(info.endLimit)
let { search, download } = require('aptoide-scraper')
if (!text) return m.reply('*[ ⚠️ ] Que apk esta buscando?*') 
try {     
let searchA = await search(text); 
let data5 = await download(searchA[0].id); 
let response = `╭━─━─━─≪≫─━─━─━╮\n│ ≡ *Descargador de Aptoide* ≡\n│——————«•»——————\n│🔸📌 *Nombre:* ${data5.name}\n│🔸📦 *Package:* ${data5.package}\n│🔸🕒 *Última actualización:* ${data5.lastup}\n│🔸📥 *Tamaño:* ${data5.size}\n╰━─━─━─≪≫─━─━─━╯` 
await conn.sendMessage(m.chat, {image: {url: data5.icon}, caption: response}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100}); 
if (data5.size.includes('GB') || data5.size.replace(' MB', '') > 999) { 
return await conn.sendMessage(m.chat, {text: '*[ ⛔ ] El archivo es demasiado pesado por lo que no se enviará.*'}, {quoted: m})} 
await conn.sendMessage(m.chat, {document: {url: data5.dllink}, mimetype: 'application/vnd.android.package-archive', fileName: data5.name + '.apk', caption: null}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100}); 
db.data.users[m.sender].limit -= 3
m.reply('*3 ᴅɪᴀᴍᴀɴᴛᴇ 💎 ᴜsᴀᴅᴏ*')
} catch { 
return m.reply(`*[ ⚠️ ] Error, no se encontrarón resultados para su búsqueda.*`)}}

async function gdrive(conn, args, command, m) {
const {sizeFormatter} = require('human-readable') 
const formatSize = sizeFormatter({
  std: 'JEDEC', decimalPlaces: 2, keepTrailingZeroes: false, render: (literal, symbol) => `${literal} ${symbol}B`});
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (global.db.data.users[m.sender].limit < 1) return m.reply(info.endLimit)
if (!args[0]) return m.reply(`*⚠️ 𝘐𝘕𝘎𝘙𝘌𝘚𝘌 𝘌𝘓 𝘓𝘐𝘕𝘒 𝘗𝘈𝘙𝘈 𝘋𝘌𝘚𝘊𝘈𝘙𝘎𝘈 𝘚𝘜𝘚 𝘈𝘙𝘊𝘏𝘐𝘝𝘖 𝘋𝘌 𝘋𝘙𝘐𝘝𝘌*\n*𝘌𝘑𝘌𝘔𝘗𝘓𝘖:* ${prefix + command} https://drive.google.com/file/d/1dmHlx1WTbH5yZoNa_ln325q5dxLn1QHU/view*`) 
try {
GDriveDl(args[0]).then(async (res) => {
 m.reply('*𝘋𝘌𝘚𝘊𝘈𝘙𝘎𝘈𝘋𝘖 𝘚𝘜𝘚 𝘈𝘙𝘊𝘏𝘐𝘝𝘖, 𝘈𝘎𝘜𝘈𝘙𝘋𝘌 𝘜𝘕 𝘔𝘖𝘔𝘌𝘕𝘛𝘖 𝘗𝘖𝘙 𝘍𝘈𝘝𝘖𝘙...*\n\nᴱˡ ᵗᶦᵉᵐᵖᵒ ᵈᵉ ᵉˢᵖᵉʳᵃ ᵖᵘᵉᵈᵉ ᵛᵃʳᶦᵃʳ ᵈᵉᵖᵉⁿᵈᶦᵉⁿᵈᵒ ᵈᵉˡ ᵖᵉˢᵒ ᵈᵉˡ ᵃʳᶜʰᶦᵛᵒ ˢᶦ ᵉˡ ᵖᵉˢᵒ ˢᵘᵖᵉʳᵃ ˡᵒˢ ¹⁰⁰ ᴹᴮ ᵖᵘᵉᵈᵉ ᵠᵘᵉ ˢᵘ ᵃʳᶜʰᶦᵛᵒ ⁿᵒ ˢᵉᵃ ᵉⁿᵛᶦᵃᵈᵒ');
if (!res) throw res;
conn.sendMessage(m.chat, {document: {url: res.downloadUrl, mimetype: res.mimetype, asDocument: true, fileName: `${res}`}}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}) 
db.data.users[m.sender].limit -= 3
m.reply('*3 ᴅɪᴀᴍᴀɴᴛᴇ 💎 ᴜsᴀᴅᴏ*')
} catch (e) {
m.reply('*[ ⚠️ ] ᴇʀʀᴏʀ, ᴘᴏʀ ғᴀᴠᴏʀ ᴠᴜᴇʟᴠᴀ ᴀ ɪɴᴛᴇɴᴛᴀʀʟᴏ*');
console.log(e)}}

async function tttimg(conn, text, command, m) {
if (!text) return m.reply(`⚠️ Ingresa un enlace de tiktok imagenes*\n\n*Ejemplo:* ${prefix + command} https://vm.tiktok.com/ZMjnPvJuF/`) 
let imagesSent
if (imagesSent) return;
imagesSent = true    
try {   
m.reply('*Calma Ya estoy buscado tu Perdido...*') 
let tioShadow = await ttimg(text); 
let result = tioShadow?.data;
for (let d of result) {
await conn.sendMessage(m.chat, {image: {url: d}}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})};
imagesSent = false
} catch (e) {
imagesSent = false    
return m.reply(`${info.error} *No se obtuvo respuesta de la página (Api caida), intente más tarde.*\n\n${e}`)}}

async function search(query, options = {}) {
const search = await yts.search({ query, hl: "es", gl: "ES", ...options });
return search.videos};

function MilesNumber(number) {
const exp = /(\d)(?=(\d{3})+(?!\d))/g;
const rep = "$1.";
let arr = number.toString().split(".");
arr[0] = arr[0].replace(exp, rep);
return arr[1] ? arr.join(".") : arr[0]};

function secondString(seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor((seconds % (3600 * 24)) / 3600);
var m = Math.floor((seconds % 3600) / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " día, " : " días, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " hora, " : " horas, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " minuto, " : " minutos, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " segundo" : " segundos") : "";
return dDisplay + hDisplay + mDisplay + sDisplay};

function bytesToSize(bytes) {
return new Promise((resolve, reject) => {
const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
if (bytes === 0) return 'n/a';
const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
if (i === 0) resolve(`${bytes} ${sizes[i]}`);
resolve(`${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`)})};

async function ytMp3(url) {
return new Promise((resolve, reject) => {
ytdl.getInfo(url).then(async(getUrl) => {
let result = [];
for(let i = 0; i < getUrl.formats.length; i++) {
let item = getUrl.formats[i];
if (item.mimeType == 'audio/webm; codecs=\"opus\"') {
let { contentLength } = item;
let bytes = await bytesToSize(contentLength);
result[i] = { audio: item.url, size: bytes }}};
let resultFix = result.filter(x => x.audio != undefined && x.size != undefined) 
let tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].audio}`);
let tinyUrl = tiny.data;
let title = getUrl.videoDetails.title;
let thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
resolve({ title, result: tinyUrl, result2: resultFix, thumb })}).catch(reject)})};

async function ytMp4(url) {
return new Promise(async(resolve, reject) => {
ytdl.getInfo(url).then(async(getUrl) => {
let result = [];
for(let i = 0; i < getUrl.formats.length; i++) {
let item = getUrl.formats[i];
if (item.container == 'mp4' && item.hasVideo == true && item.hasAudio == true) {
let { qualityLabel, contentLength } = item;
let bytes = await bytesToSize(contentLength);
result[i] = { video: item.url, quality: qualityLabel, size: bytes }}};
let resultFix = result.filter(x => x.video != undefined && x.size != undefined && x.quality != undefined) 
let tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].video}`);
let tinyUrl = tiny.data;
let title = getUrl.videoDetails.title;
let thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
resolve({ title, result: tinyUrl, rersult2: resultFix[0].video, thumb })}).catch(reject)})};

async function ytPlay(query) {
return new Promise((resolve, reject) => {
yts(query).then(async(getData) => {
let result = getData.videos.slice( 0, 5 );
let url = [];
for (let i = 0; i < result.length; i++) { url.push(result[i].url) }
let random = url[0];
let getAudio = await ytMp3(random);
resolve(getAudio)}).catch(reject)})};

async function ytPlayVid(query) {
return new Promise((resolve, reject) => {
yts(query).then(async(getData) => {
let result = getData.videos.slice( 0, 5 );
let url = [];
for (let i = 0; i < result.length; i++) { url.push(result[i].url) }
let random = url[0];
let getVideo = await ytMp4(random);
resolve(getVideo)}).catch(reject)})};

async function GDriveDl(url) {
  let id;
  if (!(url && url.match(/drive\.google/i))) throw 'Invalid URL';
  id = (url.match(/\/?id=(.+)/i) || url.match(/\/d\/(.*?)\//))[1];
  if (!id) throw 'ID Not Found';
  const res = await fetch(`https://drive.google.com/uc?id=${id}&authuser=0&export=download`, {
    method: 'post',
    headers: {
      'accept-encoding': 'gzip, deflate, br',
      'content-length': 0,
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      'origin': 'https://drive.google.com',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
      'x-client-data': 'CKG1yQEIkbbJAQiitskBCMS2yQEIqZ3KAQioo8oBGLeYygE=',
      'x-drive-first-party': 'DriveWebUi',
      'x-json-requested': 'true'}});
  const {fileName, sizeBytes, downloadUrl} = JSON.parse((await res.text()).slice(4));
  if (!downloadUrl) throw 'Link Download Limit!';
  const data = await fetch(downloadUrl);
  if (data.status !== 200) throw data.statusText;
  return {downloadUrl, fileName, fileSize: formatSize(sizeBytes), mimetype: data.headers.get('content-type')};
}

async function ttimg(link) {
    try {    
        let url = `https://dlpanda.com/es?url=${link}&token=G7eRpMaa`;    
        let response = await axios.get(url);
        const html = response.data;
        const $ = cheerio.load(html);
        let imgSrc = [];
        $('div.col-md-12 > img').each((index, element) => {
            imgSrc.push($(element).attr('src'));
        });
        if (imgSrc.length === 0) {
            return { data: '*[ ⚠️ ] No se encontraron imágenes en el enlace proporcionado.*' };
        }
        return { data: imgSrc }; 
    } catch (error) {
        console.lo (error);
        return { data: '*[ ⚠️ ] No se obtuvo respuesta de la página, intente más tarde.*'};
    };
};

module.exports = {play, play2, play3, play4, mp3, mp4, git, tiktok, letra, mediafire, fb, ig, ig2, apk, spoti, gdrive, tttimg}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
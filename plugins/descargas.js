require('../main.js') 
const fs = require("fs")
const path = require("path")
const chalk = require("chalk");
const axios = require('axios')
const cheerio = require('cheerio')
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom } = require('../libs/fuctions.js'); 

async function play(conn, text, m) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (!text) return conn.sendMessage(m.chat, { text: `*ingrese nombre de alguna cancion*` }, { quoted: m })
let yts = require("youtube-yts")
let search = await yts(text)
let anup3k = search.videos[0]
let anu = search.videos[Math.floor(Math.random() * search.videos.length)] 
eek = await getBuffer(anu.thumbnail) 
conn.sendMessage(m.chat, { image : eek, caption:  `╭───≪~*╌◌ᰱ•••⃙❨͟͞P̸͟͞L̸͟A̸͟͞Y̸͟͞❩⃘•••ᰱ◌╌*~*
│║📌 *Título* : ${anu.title}
│║📆 *Publicado:* ${anu.ago}
│║⌚ *Duración:* ${anu.timestamp}
│║👤 *Autor:* ${anu.author.name}
│║👀 *Vistas:*  ${anu.views}
│║
│║  *si quiere descarga el video usar:*
│║ #ytvideo ${anu.url}
╰─•┈┈┈•••✦𝒟ℳ✦•••┈┈┈•─╯⟤` }, { quoted: m})
const playmp3 = require('../libs/ytdl2')
const pl= await playmp3.mp3(anup3k.url)
await conn.sendMessage(m.chat, { audio: fs.readFileSync(pl.path), fileName: `error.mp3`, mimetype: 'audio/mp4' }, { quoted: m }); 
await fs.unlinkSync(pl.path)
db.data.users[m.sender].limit -= 1
m.reply(info.limit)}

async function mp3(conn, args, text, command, fkontak, ytplayvid, m) {
const mp = require('../libs/ytdl2')
if (args.length < 1 || !isUrl(text) || !mp.isYTUrl(text)) return m.reply(`*Ejemplo:*\n${prefix + command} https://youtu.be/7ouFkoU8Ap8?si=Bvm3LypvU_uGv0bw`)
conn.sendMessage(m.chat, { text: `*Aguarde un momento*\n\nᴱˡ ᴬᵘᵈᶦᵒ ᵖᵘᵉᵈᵉ ᵗᵃʳᵈᵃ ᵉⁿᵗʳᵉ ⁵ ᵒ ¹⁰ ᵐᶦⁿᵘᵗᵒˢ ᵉˡ ᵉⁿᵛᶦᵃˢᵉ ᵗᵉⁿᵈʳᵃ́ ᵖᵃᶜᶦᵉⁿᶜᶦᵃ` }, { quoted: fkontak });    
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
}}}, {quoted:m}) 
await fs.unlinkSync(audio.path)
db.data.users[m.sender].limit -= 1
m.reply(info.limit)}

async function mp4(conn, args, text, command, fkontak, m) {
const mp = require('../libs/ytdl2')
if (args.length < 1 || !isUrl(text) || !mp.isYTUrl(text)) return m.reply(`*Que esta buscado?*\n\n*Ejemplo:*\n${prefix + command} https://youtu.be/7ouFkoU8Ap8?si=Bvm3LypvU_uGv0bw`)
conn.sendMessage(m.chat, { text: `*Aguarde un momento*\n\nᴱˡ ᵛᶦᵈᵉᵒ ᵖᵘᵉᵈᵉ ᵗᵃʳᵈᵃ ᵉⁿᵗʳᵉ ⁵ ᵒ ¹⁰ ᵐᶦⁿᵘᵗᵒˢ ᵉˡ ᵉⁿᵛᶦᵃˢᵉ ᵗᵉⁿᵈʳᵃ́ ᵖᵃᶜᶦᵉⁿᶜᶦᵃ` }, { quoted: fkontak });    
const vid = await mp.mp4(text)
const ytc = `*❏ Título :* ${vid.title} 
*❏ Duración :* ${vid.duration}
*❏ Subido :* ${vid.date}
*❏ calidad :* ${vid.quality}`
await conn.sendMessage(m.chat, {video: {url : vid.videoUrl}, caption: ytc }, {quoted:m})
db.data.users[m.sender].limit -= 1
m.reply(info.limit)}

async function git(conn, args, command, m) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (!args[0]) return m.reply(`*Ejemplo :*\n${prefix + command} ${md}`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return m.reply(`Link invalido!!`)
conn.sendMessage(m.chat, { text: `*𝘈𝘎𝘜𝘈𝘙𝘋𝘌 𝘜𝘕 𝘔𝘖𝘔𝘌𝘕𝘛𝘖...*\n\nˢᶦ ᵉˡ ᵃʳᶜʰᶦᵛᵒ ⁿᵒ ˡˡᵉᵍᵃ ᵉˢ ᵠᵘᵉ ʳᵉᵖᵒˢᶦᵗᵒʳᶦᵒ ᵉˢ ᵐᵘʸ ᵖᵉˢᵃᵈᵒ` }, { quoted: m })
try {
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let [, user, repo] = args[0].match(regex1) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
conn.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => m.reply(info.error))
db.data.users[m.sender].limit -= 1
m.reply(info.limit) 
} catch {
m.reply(info.error)}}

async function tiktok(conn, text, command, q, m) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (!text) return m.reply(`*Ejemplo:*\n${prefix + command} https://vm.tiktok.com/ZMjdrFCtg/`)
if (!q.includes('tiktok')) return m.reply(`*link invalido!*`)
//await loading ()
conn.fakeReply(m.chat, `⏳ *Aguarde un momento....*`, '0@s.whatsapp.net', 'No haga spam')
try {
require('../libs/tiktok').Tiktok(q).then( data => {
conn.sendMessage(m.chat, { video: { url: data.nowm }}, { quoted: m })
conn.sendMessage(m.chat, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: m })})
db.data.users[m.sender].limit -= 1
m.reply(info.limit) 
} catch {
m.reply(info.error)}}

async function letra(conn, text, command, fkontak, m) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (!text) return m.reply(`*Que esta buscado? ingresa el titulo/nombre de la canción*\n*Ejemplo:* ${prefix + command} ozuna`)
const { lyrics, lyricsv2 } = require('@bochilteam/scraper')
const result = await lyricsv2(text).catch(async _ => await lyrics(text))
conn.editMessage(m.chat, '*Aguarde un momento....*', `*❏ Titulo:* ${result.title}\n*❏ Autor :* ${result.author}\n*❏ Url :* ${result.link}\n\n*❏ Letra :* ${result.lyrics}`, 3, fkontak)
db.data.users[m.sender].limit -= 1
m.reply(info.limit)}

async function mediafire(conn, text, command, mediafireDl, m) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
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
 sourceUrl: md }}}, {quoted: m})
 db.data.users[m.sender].limit -= 2
m.reply(info.limit)}

async function fb(conn, text, command, lolkeysapi, args, m) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (!text) return m.reply(`*Ejemplo:*\n${prefix + command} https://fb.watch/ncowLHMp-x/?mibextid=rS40aB7S9Ucbxw6v`)
conn.fakeReply(m.chat, `⏳ *Aguarde un momento....*`, '0@s.whatsapp.net', 'No haga spam')
try {
const Rres = await fetch(`https://api.lolhuman.xyz/api/facebook?apikey=${lolkeysapi}&url=${args[0]}`);
const Jjson = await Rres.json();
let VIDEO = Jjson.result[0];
if (VIDEO == '' || !VIDEO || VIDEO == null) VIDEO = Jjson.result[1];
conn.sendMessage(m.chat, {video: {url: VIDEO}, caption: `*🎥 AQUI ESTA TU VIDEO DE FACEBOOK*`}, {quoted: m})
db.data.users[m.sender].limit -= 1
m.reply(info.limit)
} catch {
m.reply(info.error)}}

async function ig(conn, text, command, lolkeysapi, args, m) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (!text) return m.reply(`*Ejemplo:*\n${prefix + command} https://www.instagram.com/p/CCoI4DQBGVQ/?igshid=YmMyMTA2M2Y=`)
conn.fakeReply(m.chat, `⏳ *Aguarde un momento....*`, '0@s.whatsapp.net', 'No haga spam')
try {
const human = await fetch(`https://api.lolhuman.xyz/api/instagram?apikey=${lolkeysapi}&url=${args[0]}`);
const json = await human.json();
const videoig = json.result;
const shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
conn.sendMessage(m.chat, {video: {url: videoig}, caption: `🔗 *Url:* ${shortUrl1}`}, {quoted: m})
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
await conn.sendMessage(m.chat, {image: { url: res.profilePic }, caption: te }, {quoted: m})
} catch {
m.reply(info.error)}}

async function apk(conn, text, m) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
let { search, download } = require('aptoide-scraper')
if (!text) return m.reply('*[ ⚠️ ] Que apk esta buscando?*') 
try {     
let searchA = await search(text); 
let data5 = await download(searchA[0].id); 
let response = `╭━─━─━─≪≫─━─━─━╮\n│ ≡ *Descargador de Aptoide* ≡\n│——————«•»——————\n│🔸📌 *Nombre:* ${data5.name}\n│🔸📦 *Package:* ${data5.package}\n│🔸🕒 *Última actualización:* ${data5.lastup}\n│🔸📥 *Tamaño:* ${data5.size}\n╰━─━─━─≪≫─━─━─━╯` 
await conn.sendMessage(m.chat, {image: {url: data5.icon}, caption: response}, {quoted: m}); 
if (data5.size.includes('GB') || data5.size.replace(' MB', '') > 999) { 
return await conn.sendMessage(m.chat, {text: '*[ ⛔ ] El archivo es demasiado pesado por lo que no se enviará.*'}, {quoted: m})} 
await conn.sendMessage(m.chat, {document: {url: data5.dllink}, mimetype: 'application/vnd.android.package-archive', fileName: data5.name + '.apk', caption: null}, {quoted: m}); 
db.data.users[m.sender].limit -= 3
m.reply(info.limit)
} catch { 
return m.reply(`*[ ⚠️ ] Error, no se encontrarón resultados para su búsqueda.*`)}}

module.exports = {play, mp3, mp4, git, tiktok, letra, mediafire, fb, ig, ig2, apk}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
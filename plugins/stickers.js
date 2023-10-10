require('../main.js') 
const fs = require("fs")
const path = require("path")
const chalk = require("chalk");
const axios = require('axios')
const cheerio = require('cheerio')
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom } = require('../libs/fuctions.js'); 

async function s(conn, mime, quoted, m) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (/image/.test(mime)) {  
conn.fakeReply(m.chat, `⏳ *Aguarde un momento estoy creando tu stickers....*`, '0@s.whatsapp.net', 'No haga spam')
media = await quoted.download()  
let encmedia = await conn.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author, contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: [md, nna, yt, faceb, tiktok, nn, nn2, nn6, nn8].getRandom(), thumbnail: imagen1}}}, { quoted: m })
await fs.unlinkSync(encmedia)  
} else if (/video/.test(mime)) {  
if ((quoted.msg || quoted).seconds > 20) return m. reply('¡Máximo 20 segundos!')  
media = await quoted.download()  
let encmedia = await conn.sendVideoAsSticker(m.chat, media, m, { packname: global.author, author: global.packname, contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: wm, body: `h`, mediaType: 2, sourceUrl: [md, nna, yt, faceb, tiktok, nn, nn2, nn6, nn8].getRandom(), thumbnail: imagen1}}}, { quoted: m })
await new Promise((resolve) => setTimeout(resolve, 2000));
await fs.unlinkSync(encmedia)  
} else {  
m.reply(`*Y LA IMAGEN?*`)}}  

async function wm(conn, args, quoted, mime, m) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (!args.join(" ")) return m.reply(`*Responda un sticker para robar*`)
conn.fakeReply(m.chat, `⏳ *Aguarde un momento....*`, '0@s.whatsapp.net', 'No haga spam')
const swn = args.join(" ")
const pcknm = swn.split("|")[0]
const atnm = swn.split("|")[1]
if (m.quoted.isAnimated === true) {
conn.downloadAndSaveMediaMessage(quoted, "gifee")
conn.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await conn.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm, contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: nn, thumbnail: imagen1}}}, { quoted: m })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m. reply('Maximum 10 Seconds!')
let media = await quoted.download()
let encmedia = await conn.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm, contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: wm, body: `h`, mediaType: 2, sourceUrl: nn, thumbnail: imagen1}}}, { quoted: m })
} else {
m.reply(`Y la imagen?`)}}

async function attp(conn, text, lolkeysapi, fkontak, m) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (!text) return m.reply('ingresa algo para convertirlo a sticker :v')
m.reply(`_*Calma crack estoy haciendo tu texto a sticker 👏*_\n\n_*Esto puede demorar unos minutos....*_`) 
let link = `https://api.lolhuman.xyz/api/attp?apikey=${lolkeysapi}&text=${text}`
await conn.sendMessage(m.chat, { sticker: { url: link } }, { quoted: fkontak})}

async function dado(conn, lolkeysapi, fkontak, m) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
let dir = `https://api.lolhuman.xyz/api/sticker/dadu?apikey=${lolkeysapi}`
conn.sendMessage(m.chat, { sticker: { url: dir } }, { quoted: fkontak})}

function getRandom() {
    if (Array.isArray(this) || this instanceof String) return this[Math.floor(Math.random() * this.length)]
    return Math.floor(Math.random() * this)
}

module.exports = {s, wm, attp, dado}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})

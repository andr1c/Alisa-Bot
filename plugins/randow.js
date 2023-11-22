require('../main.js') 
const fs = require("fs")
const chalk = require("chalk");
const axios = require('axios')
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom} = require('../libs/fuctions.js'); 

async function randow(m, sender, command, sendImageAsUrl, pickRandom, conn) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (command == 'memes') {
let hispamemes = require("hispamemes") 
const meme = hispamemes.meme()
sendImageAsUrl(meme, '🤣')
m.react('😆')}
if (command == 'loli') {
var loli = JSON.parse(fs.readFileSync('./src/randow/loli.json'))
var loliresult = pickRandom(loli)
sendImageAsUrl(loliresult)}
if (command == 'lolivid') {
var lolivid = JSON.parse(fs.readFileSync('./src/randow/lolivid.json'))
var lolividresult = pickRandom(lolivid)
conn.sendMessage(m.chat, { video: { url: lolividresult }, caption: `💕💕💕💕` }, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}
if (command == 'neko') {
let ne = await (await fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/anime/neko.txt')).text()
let nek = ne.split('\n')
let neko = pickRandom(nek)
sendImageAsUrl(neko)}
if (command == 'akira' || command == 'akiyama' || command == 'anna' || command == 'asuma' || command == 'ayuzawa' || command == 'boruto' || command == 'chiho' || command == 'chitoge' || command == 'deidara' || command == 'erza' || command == 'elaina' || command == 'eba' || command == 'emilia' || command == 'hestia' || command == 'hinata' || command == 'inori' || command == 'isuzu' || command == 'itachi' || command == 'itori' || command == 'kaga' || command == 'kagura' || command == 'kaori' || command == 'keneki' || command == 'kotori' || command == 'kurumi' || command == 'madara' || command == 'mikasa' || command == 'miku' || command == 'minato' || command == 'naruto' || command == 'nezuko' || command == 'sagiri' || command == 'sakura' || command == 'sasuke' || command == 'cosplay') {
let a = JSON.parse(fs.readFileSync(`./src/randow/anime-${command}.json`))
var result = pickRandom(a)
sendImageAsUrl(result, `${command}`)}
if (command == 'blackpink') {
sendImageAsUrl("https://delirius-image-random.vercel.app/api/all")}}

async function randow2(conn, m, command, text, sender, pushname) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (command == 'horny') {
let who = conn
conn.sendMessage(m.chat, { image: { url: global.API('https://some-random-api.com', '/canvas/horny', { 
avatar: await conn.profilePictureUrl(m.chat, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'), 
})}, caption: `*𝚃𝚄 𝙴𝚂𝚃𝙰𝚂 𝙷𝙾𝚁𝙽𝚈 🥵🔥*`}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}
if (command == 'simp') {
conn.sendMessage(m.chat, { image: { url: global.API('https://some-random-api.com', '/canvas/simpcard', { 
avatar: await conn.profilePictureUrl(m.chat, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'), 
})}, caption: `_𝚃𝚄 𝚁𝙴𝙻𝙸𝙶𝙸𝙾𝙽 𝙴𝚂 𝚂𝙴𝚁 𝚄𝙽 𝚂𝙸𝙼𝙿!!_`}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}
if (command == 'lolice') {
const who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
conn.sendMessage(m.chat, { image: { url: global.API('https://some-random-api.com', '/canvas/lolice', {
 avatar: await conn.profilePictureUrl(who, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
  })}, caption: '*ʟʟᴀᴍᴇɴ ᴀ ʟᴀ ᴘᴏʟɪᴄɪᴀ!!* 😱', mentions: [who] }, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}
if (command == 'comentar' || command == 'comment') {
if (!text) return m.reply('*falta un texto*') 
conn.sendMessage(m.chat, { image: { url: global.API('https://some-random-api.com', '/canvas/youtube-comment', { 
avatar: await conn.profilePictureUrl(m.sender, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'), 
comment: text, 
username: pushname,
})}, caption: `*ʜᴀs ᴄᴏᴍᴇɴᴛᴀᴅᴏ ᴇɴ ʏᴏᴜᴛᴜʙᴇ!!* 😳`, mentions: [m.sender] }, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}}

module.exports = {randow, randow2}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
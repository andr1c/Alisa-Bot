require('../main.js') 
const fs = require("fs")
const chalk = require("chalk");
const axios = require('axios')
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom} = require('../libs/fuctions.js'); 

async function randow1(sendImageAsUrl, m, sender) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
let hispamemes = require("hispamemes") 
const meme = hispamemes.meme()
sendImageAsUrl(meme, '🤣')}

async function randow2(sendImageAsUrl, m, pickRandom, sender){
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
var loli = JSON.parse(fs.readFileSync('./src/randow/loli.json'))
var loliresult = pickRandom(loli)
sendImageAsUrl(loliresult)}

async function randow3(conn, m, pickRandom, sender){
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
var lolivid = JSON.parse(fs.readFileSync('./src/randow/lolivid.json'))
var lolividresult = pickRandom(lolivid)
conn.sendMessage(m.chat, { video: { url: lolividresult }, caption: `💕💕💕💕` }, { quoted: m })}

async function randow4(sendImageAsUrl, m, pickRandom, sender){
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
let ne = await (await fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/anime/neko.txt')).text()
let nek = ne.split('\n')
let neko = pickRandom(nek)
sendImageAsUrl(neko)}

async function randow5(sendImageAsUrl, command, pickRandom, m) {
let a = JSON.parse(fs.readFileSync(`./src/randow/anime-${command}.json`))
var result = pickRandom(a)
sendImageAsUrl(result, `${command}`)}

async function randow6(conn, m) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
let who = conn
conn.sendMessage(m.chat, { image: { url: global.API('https://some-random-api.com', '/canvas/horny', { 
avatar: await conn.profilePictureUrl(m.chat, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'), 
})}, caption: `*𝚃𝚄 𝙴𝚂𝚃𝙰𝚂 𝙷𝙾𝚁𝙽𝚈 🥵🔥*`}, { quoted: m })}

async function randow7(conn, m, who) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
conn.sendMessage(m.chat, { image: { url: global.API('https://some-random-api.com', '/canvas/simpcard', { 
avatar: await conn.profilePictureUrl(m.chat, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'), 
})}, caption: `_𝚃𝚄 𝚁𝙴𝙻𝙸𝙶𝙸𝙾𝙽 𝙴𝚂 𝚂𝙴𝚁 𝚄𝙽 𝚂𝙸𝙼𝙿!!_`}, { quoted: m })}

async function randow8(conn, m) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
const who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
conn.sendMessage(m.chat, { image: { url: global.API('https://some-random-api.com', '/canvas/lolice', {
 avatar: await conn.profilePictureUrl(who, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
  })}, caption: '*ʟʟᴀᴍᴇɴ ᴀ ʟᴀ ᴘᴏʟɪᴄɪᴀ!!* 😱', mentions: [who] }, { quoted: m })}
  
async function randow9(conn, text, m, sender, pushname) {  
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (!text) return m.reply('*falta un texto*') 
conn.sendMessage(m.chat, { image: { url: global.API('https://some-random-api.com', '/canvas/youtube-comment', { 
avatar: await conn.profilePictureUrl(m.sender, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'), 
comment: text, 
username: pushname,
})}, caption: `*ʜᴀs ᴄᴏᴍᴇɴᴛᴀᴅᴏ ᴇɴ ʏᴏᴜᴛᴜʙᴇ!!* 😳`, mentions: [m.sender] }, { quoted: m })}

module.exports = {randow1, randow2, randow3, randow4, randow5, randow6, randow7, randow8, randow9}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
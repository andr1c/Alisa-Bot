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
const Jimp = require('jimp')
const os = require('os')

async function nsfw1(conn, m, pickRandom) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (global.db.data.users[m.sender].limit < 1) return m.reply(info.endLimit)
if (!global.db.data.chats[m.chat].antiNsfw) return m.reply(info.nsfw)
if (!m.isGroup) return m.reply(info.group) 
var hentai = JSON.parse(fs.readFileSync('./src/nsfw/neko.json'))
var hentairesult = pickRandom(hentai)
conn.sendMessage(m.chat, { caption: `🥵`, image: { url: hentairesult.url } }, { quoted: m })
db.data.users[m.sender].limit -= 2
m.reply(info.limit)}

async function nsfw2(conn, m, pickRandom) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (global.db.data.users[m.sender].limit < 1) return m.reply(info.endLimit)
if (!global.db.data.chats[m.chat].antiNsfw) return m.reply(info.nsfw)
if (!m.isGroup) return m.reply(info.group) 
var nsfw = JSON.parse(fs.readFileSync('./src/nsfw/nsfwloli.json'))
var result = pickRandom(nsfw)
conn.sendMessage(m.chat, { caption: '🥵', image: { url: result.url } }, { quoted: m })
db.data.users[m.sender].limit -= 1
m.reply(info.limit)}

async function nsfw3(conn, m, pickRandom, sendImageAsUrl, command) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (global.db.data.users[m.sender].limit < 1) return m.reply(info.endLimit)
if (!global.db.data.chats[m.chat].antiNsfw) return m.reply(info.nsfw)
if (!m.isGroup) return m.reply(info.group) 
sendImageAsUrl(`https://api.lolhuman.xyz/api/random2/${command}?apikey=${lolkeysapi}`, `*🔥 ${command} 🔥*`)
db.data.users[m.sender].limit -= 3
m.reply(info.limit)}

async function nsfw4(sendImageAsUrl, m) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (global.db.data.users[m.sender].limit < 1) return m.reply(info.endLimit)
if (!global.db.data.chats[m.chat].antiNsfw) return m.reply(info.nsfw)
sendImageAsUrl("https://delirius-nsfw.onrender.com/media/h/bdsm", '🥵')
db.data.users[m.sender].limit -= 1
m.reply(info.limit)}

async function nsfw5(sendImageAsUrl, m) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (global.db.data.users[m.sender].limit < 1) return m.reply(info.endLimit)
if (!global.db.data.chats[m.chat].antiNsfw) return m.reply(info.nsfw)
sendImageAsUrl("https://delirius-nsfw.onrender.com/media/r/ass", '🥵');
db.data.users[m.sender].limit -= 1
m.reply(info.limit)}

module.exports = {nsfw1, nsfw2, nsfw3, nsfw4, nsfw5}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
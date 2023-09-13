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

module.exports = {randow1, randow2, randow3, randow4, randow5}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
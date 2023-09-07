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

async function gay(conn, m, participants, sender) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (!m.isGroup) return m.reply(info.group) 
let member = participants.map(u => u.id)
let me = m.sender
let jodoh = member[Math.floor(Math.random() * member.length)]
let ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
let kah = ra[Math.floor(Math.random() * ra.length)]
let jawab = `@${jodoh.split('@')[0]} Es 🏳️‍🌈 ${kah}% Gay\n\nQuién quiere violar a este gay? `
let ments = [me, jodoh]
conn.sendMessage(m.chat, { text: jawab, contextInfo:{
mentionedJid:[me, jodoh],
forwardingScore: 9999999,
isForwarded: true, }}, { quoted: m })
}

async function pareja(conn, m, pushname, participants, sender) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (!m.isGroup) return m.reply(info.group) 
let member = participants.map(u => u.id)
let me = m.sender
let jodoh = member[Math.floor(Math.random() * member.length)]
let love = member[Math.floor(Math.random() * member.length)]
conn.sendMessage(m.chat, { text: `*@${me.split('@')[0]} Te deberias casar con @${love.split('@')[0]} hacen una bonita pareja 💕*`,
contextInfo:{
mentionedJid:[me, love],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${botname}`,
"body": `${pushname}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": imagen1, 
"sourceUrl": md}}},
{ quoted: m})
}

async function fake(conn, text, prefix, command, body, from, m, sender, quoted, target, bot, participant) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
var gh = body.slice(11);
var mentioned = m.message.extendedTextMessage && m.message.extendedTextMessage.contextInfo && m.message.extendedTextMessage.contextInfo.mentionedJid ? m.message.extendedTextMessage.contextInfo.mentionedJid[0] : null;
var replace = gh.split("|")[0];
var target = gh.split("|")[1];
var bot = gh.split("|")[2];
if (mentioned && target && bot) {
var quotedMessage = {
key: {
fromMe: false,
participant: mentioned
},
message: {
conversation: target
}};
var sendMessageOptions = {
text: `${bot}`,
quoted: quotedMessage
};
conn.sendMessage(m.chat, sendMessageOptions, { quoted: quotedMessage });
} else {
conn.sendMessage(m.chat, { text: `Ejemplo: ${prefix + command} @tag|puto|😯`}, { quoted: m })
}}

async function sim(conn, m, text, quoted) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (!text) return conn.sendMessage(m.chat, { text: `*INGRESE UN TEXTO PARA HABLAR CONMIGO*` }, { quoted: m })
await conn.sendPresenceUpdate('composing', m.chat)
let anu = await fetchJson(`https://api.simsimi.net/v2/?text=${text}&lc=es&cf=false`)
let res = anu.success;
m.reply(res)}

module.exports = {gay, pareja, fake, sim}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
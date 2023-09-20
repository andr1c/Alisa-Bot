 const baileys = require('@whiskeysockets/baileys')
 const moment = require('moment-timezone') 
 const gradient = require('gradient-string') 
 const fetch = require('node-fetch') 
 const axios = require('axios')
 const cheerio = require('cheerio')
 const Jimp = require('jimp')
 const os = require('os')
 const chalk = require('chalk')
 const fs = require("fs")
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom } = require('../libs/fuctions.js'); 

async function state(conn, m, speed, sender, fkontak) {
const totalMemory = Math.round(os.totalmem() / (1024 * 1024 * 1024))
const freeMemory = Math.round(os.freemem() / (1024 * 1024 * 1024))
const usedMemory = totalMemory - freeMemory
const cpuUsage = os.loadavg()[0]
let me = m.sender
var timestamp = speed();  
var latensi = speed() - timestamp  
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
let stateRun = `┏━━━━❰･𝐄𝐒𝐓𝐀𝐃𝐎 𝐃𝐄𝐋 𝐁𝐎𝐓･❱━━━━
┃
┃웃 Hola @${sender.split("@")[0]}
┃
┃╍╍╍╍╍╍╍╍╍╍╍╍╍
┃
┃➢ 𝚁𝙰𝙼 𝙳𝙴𝙻 𝚂𝙴𝚁𝚅𝙸𝙳𝙾𝚁 : ${usedMemory} GB / ${totalMemory} GB
┃➢ 𝙿𝙻𝙰𝚃𝙰𝙵𝙾𝚁𝙼𝙰 : ${os.platform()}
┃➢ 𝙷𝙾𝚃𝚂 : ${os.hostname()}
┃➢ 𝙲𝙿𝚄 𝚄𝚂𝙰𝙽𝙳𝙾 : ${cpuUsage.toFixed(2)}%
┃➢ 𝙼𝙴𝙼𝙾𝚁𝙸𝙰 𝚃𝙾𝚃𝙰𝙻 : ${totalMemory} GB
┃╍╍╍╍╍╍╍╍╍╍╍╍╍
┃➢ 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂 : ${Object.keys(global.db.data.users).length}
┃➢ 𝙲𝙷𝙰𝚃 𝚃𝙾𝚃𝙰𝙻𝙴𝚂 : ${Object.keys(m.chat).length}
┃➢ 𝙰𝙲𝚃𝙸𝚅𝙾 : ${runtime(process.uptime())}
┃➢ 𝙼𝙾𝙳𝙾 : ${conn.public ? 'Público' : `Privado`}
┃➢ 𝙱𝙾𝚃 𝚂𝙴𝙲𝚄𝙽𝙳𝙰𝚁𝙸𝙾𝚂 𝙰𝙲𝚃𝙸𝚅𝙾𝚂 : ${listJadibot.length}
┗━━━━━━━━━━━━━`.trim()
let ments = [me]      
await conn.sendMessage(m.chat, {image: imagen1, caption: stateRun, contextInfo:{ mentionedJid:[sender]}}, { quoted: fkontak })
}

async function owner(conn, m, sender) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;OWNER 👑;;;\nFN:OWNER\nORG:OWNER 👑\nTITLE:\nitem1.TEL;waid=595975740803:+595 975 740803\nitem1.X-ABLabel:OWNER 👑\nX-WA-BIZ-DESCRIPTION:ᴇsᴄʀɪʙɪ sᴏʟᴏ ᴘᴏʀ ᴄᴏsᴀs ᴅᴇʟ ʙᴏᴛ.\nX-WA-BIZ-NAME:Owner 👑\nEND:VCARD`
let a = await conn.sendMessage(m.chat, { contacts: { displayName: 'ɴᴏᴠᴀʙᴏᴛ-ᴍᴅ 👑', contacts: [{ vcard }] }}, {quoted: m})
await conn.sendMessage(m.chat, { text : `Hola @${sender.split("@")[0]}, este bot esta desarrollo si quiere contacta con mi creador aqui te dejo sus número`, mentions: [sender]}, { quoted: a })
}

async function grupo(conn, m, sender) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
conn.sendMessage(m.chat, { text: `*BOT EL DESARROLLO*\n\n*Te puede unirte al grupo para proba el bot y sus funciones 😼*\n\n${nnn}` }, { quoted: m })
}

async function instalar(conn, m, pushname, sender) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
conn.sendMessage(m.chat, { text: `┎┈┈┈┈┈┈┈┈┈┈┈┈┈┈
\`\`\`COMO INSTALAR ESTE BOT?\`\`\`
\`\`\`Este bot es nuevo todavía no se puede instalar si quiere probar sus funciones entra al grupo del bot\`\`\`
*Escribe: ${prefix}grupos*

\`\`\`o puede probar las funcion de hacerte un sub bot Escribe: ${prefix}serbot\`\`\`
┖┈┈┈┈┈┈┈┈┈┈┈┈┈┈`,
contextInfo:{
mentions: [sender], 
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${wm}`,
"body": `${pushname}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": imagen1, 
"sourceUrl": md}}},
{ quoted: m})
}

async function ping(conn, from, msg, speed) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
var timestamp = speed();  
var latensi = speed() - timestamp  
conn.sendMessage(from, { text: `*Pong 🏓  ${latensi.toFixed(4)}*` }, { quoted: msg  })
}

async function report(conn, from, m, prefix, command, text) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (!text) return m.reply(`*𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙲𝙾𝙽 𝙵𝙰𝙻𝙻𝙾𝚂*\n\n*𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\n${prefix + command} sticker no funciona`)
conn.sendMessage(`595975740803@s.whatsapp.net`, {text: `╭━━〔 *𝚁𝙴𝙿𝙾𝚁𝚃𝙴 | 𝚁𝙴𝙿𝙾𝚁𝚃 * 〕━━⬣\n┃\n┃✿ *𝙽𝚞𝚖𝚎𝚛𝚘 | 𝚗𝚞𝚖𝚋𝚎𝚛*\n┃⇢ wa.me/${m.sender.split("@")[0]}\n┃\n┃✿ *𝙼𝚎𝚗𝚜𝚊𝚓𝚎 | 𝚝𝚎𝚡𝚝*\n┃: ${text}┃\n╰━━━〔 *${vs}* 〕━━━⬣` })
m.reply(`*𝙴𝙻 𝚁𝙴𝙿𝙾𝚁𝚃𝙴 𝙵𝚄𝙴 𝙴𝙽𝚅𝙸𝙰𝙳𝙾 𝙰 𝙼𝙸 𝙲𝚁𝙴𝙰𝙳𝙾𝚁, 𝙽𝙾𝚂 𝙲𝙾𝙽𝚃𝙰𝚁𝙴𝙼𝙾𝚂 𝙲𝙾𝙽 𝚄𝚂𝚃𝙴𝙳 𝚂𝙸 𝙴𝚂 𝙽𝙴𝙲𝙴𝚂𝙰𝚁𝙸𝙾, 𝙳𝙴 𝚂𝙴𝚁 𝙵𝙰𝙻𝚂𝙾 𝚂𝙴𝚁𝙰 𝙸𝙶𝙽𝙾𝚁𝙰𝙳𝙾 𝚈 𝙱𝙻𝙾𝚀𝚄𝙴𝙰𝙳𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*`)
}

async function ow(conn, args, m) {   
if (!args.join(" ")) return m.reply(`┗❴ ⚠ 𝐀𝐃𝐕𝐄𝐑𝐓𝐄𝐍𝐂𝐈𝐀 ⚠ ❵┛\n\nᴇsᴛᴀ ᴘʀᴏʜɪʙɪᴅᴏ ᴇᴛɪǫᴜᴇᴛᴀʀ ᴀʟ ᴄʀᴇᴀᴅᴏʀ/ᴅᴇsᴀʀʀᴏʟʟᴏ sɪ ᴛɪᴇɴᴇs ᴜɴᴀ sᴜɢᴇʀᴇɴᴄɪᴀs ʀᴇғᴇʀᴇɴᴛᴇ ᴀʟ ʙᴏᴛ ᴇsᴄʀɪʙɪʀʟᴇ ᴀ sᴜs ᴘʀɪᴠ.`)
teks = `*|  |*`
teks1 = `\n\nN`
teks2 = `\n\n`
for (let i of owner) {
conn.sendMessage(i + "@s.whatsapp.net", {text: teks + teks1, mentions:[m.sender]}, {quoted:m})
}
conn.sendMessage(m.chat, {text: teks + teks2 + teks1, mentions:[m.sender]}, {quoted:m})
}

module.exports = { state, owner, grupo, instalar, ping, report, ow}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
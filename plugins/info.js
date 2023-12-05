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

async function info(command, conn, m, speed, sender, fkontak, pickRandom, pushname, from, msg, text) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (command == 'estado' || command == 'infobot') {
const totalMemory = Math.round(os.totalmem() / (1024 * 1024 * 1024))
const freeMemory = Math.round(os.freemem() / (1024 * 1024 * 1024))
const usedMemory = totalMemory - freeMemory
const cpuUsage = os.loadavg()[0]
let me = m.sender
var timestamp = speed();  
var latensi = speed() - timestamp  
let user = [...new Set([...global.listJadibot.filter((conn) => conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED).map((conn) => conn)])];
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
let stateRun = `╭╼⪨ ${lenguaje.info.text} ⪩╼╮
┋
┋🎅 ${lenguaje['smsWel']()} @${sender.split("@")[0]} ${user.registered === true ? 'ͧͧͧͦꙶͣͤ✓' : ''} 
┋
┋${lenguaje.info.text2} ${usedMemory} GB / ${totalMemory} GB
┋${lenguaje.info.text3} ${os.platform()}
┋${lenguaje.info.text4} ${os.hostname()}
┋${lenguaje.info.text5} ${cpuUsage.toFixed(2)}%
┋${lenguaje.info.text6} ${totalMemory} GB
┋╍╍╍╍╍╍╍╍╍╍╍╍╍
┋${lenguaje.info.text7} ${Object.keys(global.db.data.users).length}
┋${lenguaje.info.text8} ${runtime(process.uptime())} 
┋${lenguaje.info.text9} ${conn.public ? 'Público' : `Privado`}
┋${lenguaje.info.text10} ${user.length} 
┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ ${conn.user.id == global.numBot2 ? '' : `\n\n${lenguaje.info.text11} wa.me/${global.numBot.split`@`[0]}`}`.trim()
let ments = [me]      
conn.sendMessage(m.chat, {image: imagen1, caption: stateRun, contextInfo:{ mentionedJid:[sender]}}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
}

if (command == 'owner' || command == 'creador' || command == 'contacto') {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;PROPIETARIO/OWNER DEL BOT 👑;;;\nFN:OWNER\nORG:PROPIETARIO/OWNER DEL BOT 👑\nTITLE:\nitem1.TEL;waid=5492266466080:+54 9 2266 46-6080\nitem1.X-ABLabel:PROPIETARIO/OWNER DEL BOT👑\nX-WA-BIZ-DESCRIPTION:ᴇsᴄʀɪʙɪ sᴏʟᴏ ᴘᴏʀ ᴄᴏsᴀs ᴅᴇʟ ʙᴏᴛ.\nX-WA-BIZ-NAME:PROPIETARIO/OWNER DEL BOT 👑\nEND:VCARD`
let a = await conn.sendMessage(m.chat, { contacts: { displayName: 'ɴᴏᴠᴀʙᴏᴛ-ᴍᴅ 👑', contacts: [{ vcard }] }}, {quoted: m})
await conn.sendMessage(m.chat, { text : `${lenguaje['smsWel']()} @${sender.split("@")[0]}, ${lenguaje.info.text12}`, mentions: [sender]}, { quoted: a, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
}

if (command == 'grupos' || command == 'grupoficiales') {
//const grupp = Math.floor(Math.random() * 70);
let amix = 'https://chat.whatsapp.com/BkU9t4dkJnEBKKhBjEzQf8'
let a = `${pickRandom([nn, nn2, nn3, nn4, nn5, nn6, nna, nn7, nn8, multi])}`
let imagen = `${pickRandom([imagen1, imagen2, imagen3])}`
conn.sendMessage(m.chat, { text: `${lenguaje.info.text13}\n1) ${nn}\n\n2) ${nn2}\n\n${lenguaje.info.text14}\n• ${nn3}\n\n• ${nn4}\n\n• ${nn5}\n\n• ${multi}\n\n${lenguaje.info.text15}\n• ${nn6}\n\n${lenguaje.info.text16}\n• ${nna}\n\n${lenguaje.info.text17}\n• ${nn7}\n\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n${lenguaje.info.text18}\n\n*⇶⃤꙰𝑬𝒏𝒍𝒂𝒄𝒆 𝒍𝒐𝒍𝒊𝒃𝒐𝒕ꦿ⃟⃢*\n${nn8}\n\nPrinces kiara : (  ┞⃞࠘🇧🇷̷̸̶᪵᩵᪰ 𝄈  𝐅࣭𝐌̶𝐋𝐀᪵.  𝐊𝐍̶𝚺࣪𝐙࠘𝐄𝐕𝐈𝐂)\n${amix}\n\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n${lenguaje.info.text19}`, contextInfo:{mentions: [sender], forwardingScore: 9999999, isForwarded: true, "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "title": ` ${wm}`, "body": ` ${vs}`, "previewType": "PHOTO", thumbnail: imagen1, sourceUrl: a}}}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'instalarbot' || command == 'crearbot') {
conn.sendMessage(m.chat, { text: `${lenguaje.info.text20}`,
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
{ quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
}

if (command == 'ping') {
var timestamp = speed();  
var latensi = speed() - timestamp  
conn.sendMessage(from, { text: `*Pong 🏓  ${latensi.toFixed(4)}*` }, { quoted: msg, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
}

if (command == 'report') {
if (!text) return m.reply(`${lenguaje.info.text21}\n${prefix + command} sticker no funciona`)
conn.sendMessage(`5492266466080@s.whatsapp.net`, {text: `╭━━〔 *𝚁𝙴𝙿𝙾𝚁𝚃𝙴 | 𝚁𝙴𝙿𝙾𝚁𝚃* 〕━━⬣\n┃\n┃✿ *𝙽𝚞𝚖𝚎𝚛𝚘 | 𝚗𝚞𝚖𝚋𝚎𝚛*\n┃⇢ wa.me/${m.sender.split("@")[0]}\n┃\n┃✿ *𝙼𝚎𝚗𝚜𝚊𝚓𝚎 | 𝚝𝚎𝚡𝚝*\n┃: ${text}┃\n╰━━━〔 *${vs}* 〕━━━⬣` })
m.reply(`${lenguaje.info.text22}`)
}

if (command == 'donar') {
conn.sendMessage(m.chat, { text: `${lenguaje.info.text23}`, contextInfo:{mentions: [sender], forwardingScore: 9999999, isForwarded: true, "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "body": `ayuda a mantener el bot activo`, "previewType": "PHOTO", thumbnail: imagen1, sourceUrl: md}}}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
m.reply(`${lenguaje.info.text24}\n${md}`)}

if (command == '5492266613038' || command == '593980586516' || command == '595975740803') {
if (!args.join(" ")) return m.reply(lenguaje.info.text25)
teks = `*|  |*`
teks1 = `\n\n`
teks2 = `\n\n`
for (let i of owner) {
conn.sendMessage(i + "@s.whatsapp.net", {text: teks + teks1, mentions:[m.sender]}, {quoted:m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
}
conn.sendMessage(m.chat, {text: teks + teks2 + teks1, mentions:[m.sender]}, {quoted:m})
}

if (command == 'sc') {
let who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
let res = await fetch('https://api.github.com/repos/elrebelde21/NovaBot-MD')
let json = await res.json()
let txt = `			 *乂 B O T  -  S C R I P T 乂*\n\n`
txt += `◦  *Nombre* : ${json.name}\n`
txt += `◦  *Visitantes* : ${json.watchers_count}\n`
txt += `◦  *Tamaños* : ${(json.size / 1024).toFixed(2)} MB\n`
txt += `◦  *Actulizacion* : ${moment(json.updated_at).format('DD/MM/YY - HH:mm:ss')}\n`
txt += `◦  *Url* : ${json.html_url}\n\n`
txt += `${json.forks_count} Forks · ${json.stargazers_count} Stars · ${json.open_issues_count} Issues\n\n`
txt += res
await conn.relayMessage(m.chat,  {requestPaymentMessage: {currencyCodeIso4217: 'INR', amount1000: '1000000000000', requestFrom: '0@s.whatsapp.net', noteMessage: {extendedTextMessage: {text: txt, contextInfo: {mentionedJid: [m.sender], externalAdReply: {showAdAttribution: true }}}}}}, {})}}

module.exports = { info }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})

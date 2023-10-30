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

const state = (conn, m, speed, sender, fkontak) => {
const totalMemory = Math.round(os.totalmem() / (1024 * 1024 * 1024))
const freeMemory = Math.round(os.freemem() / (1024 * 1024 * 1024))
const usedMemory = totalMemory - freeMemory
const cpuUsage = os.loadavg()[0]
let me = m.sender
var timestamp = speed();  
var latensi = speed() - timestamp  
let getGroups = conn.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
let user = [...new Set([...global.listJadibot.filter((conn) => conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED).map((conn) => conn)])];
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
let stateRun = `┏━━━━❰･𝐄𝐒𝐓𝐀𝐃𝐎 𝐃𝐄𝐋 𝐁𝐎𝐓･❱━━━━
┃
┃웃 Hola @${sender.split("@")[0]} ${user.registered === true ? 'ͧͧͧͦꙶͣͤ✓' : ''} 
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
┃➢ 𝙲𝙷𝙰𝚃 𝚃𝙾𝚃𝙰𝙻𝙴𝚂 : ${anu.length} 
┃➢ 𝙰𝙲𝚃𝙸𝚅𝙾 : ${runtime(process.uptime())} 
┃➢ 𝙼𝙾𝙳𝙾 : ${conn.public ? 'Público' : `Privado`}
┃➢ 𝙱𝙾𝚃 𝚂𝙴𝙲𝚄𝙽𝙳𝙰𝚁𝙸𝙾𝚂 𝙰𝙲𝚃𝙸𝚅𝙾𝚂 : ${user.length}
┗━━━━━━━━━━━━━ ${conn.user.id == global.numBot2 ? '' : `\n\n➢ 𝐒𝐨𝐲 𝐮𝐧 𝐒𝐮𝐛𝐁𝐨𝐭 𝐝𝐞 : wa.me/${global.numBot.split`@`[0]}`}`.trim()
let ments = [me]      
conn.sendMessage(m.chat, {image: imagen1, caption: stateRun, contextInfo:{ mentionedJid:[sender]}}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
}

async function owner(conn, m, sender) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;PROPIETARIO/OWNER DEL BOT 👑;;;\nFN:OWNER\nORG:PROPIETARIO/OWNER DEL BOT 👑\nTITLE:\nitem1.TEL;waid=5492266466080:+54 9 2266 46-6080\nitem1.X-ABLabel:PROPIETARIO/OWNER DEL BOT👑\nX-WA-BIZ-DESCRIPTION:ᴇsᴄʀɪʙɪ sᴏʟᴏ ᴘᴏʀ ᴄᴏsᴀs ᴅᴇʟ ʙᴏᴛ.\nX-WA-BIZ-NAME:PROPIETARIO/OWNER DEL BOT 👑\nEND:VCARD`
let a = await conn.sendMessage(m.chat, { contacts: { displayName: 'ɴᴏᴠᴀʙᴏᴛ-ᴍᴅ 👑', contacts: [{ vcard }] }}, {quoted: m})
await conn.sendMessage(m.chat, { text : `Hola @${sender.split("@")[0]}, este bot esta desarrollo si quiere contacta con mi creador aqui te dejo sus número\n\nᴺᵒ ʰᵃᵍᵃⁿ ˢᵖᵃᵐ ᵃ ᵐᶦ ᶜʳᵉᵃᵈᵒʳ ᵒ ᵠᵘᵉ ᵇˡᵒᵠᵘᵉᵃ`, mentions: [sender]}, { quoted: a, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
}

const grupo = (conn, m, sender, pickRandom) => {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
//const grupp = Math.floor(Math.random() * 70);
let a = `${pickRandom([nn, nn2, nn3, nn4, nn5, nn6, nna, nn7, nn8])}`;
let imagen = `${pickRandom([imagen1, imagen2, imagen3])}`;
conn.sendMessage(m.chat, { text: `*ʜᴏʟᴀ ᴇsᴛɪᴍᴀᴅᴏs ᴜsᴜᴀʀɪᴏs 👋🏻, ᴛᴇ ɪɴᴠɪᴛᴏ ᴀ ᴜɴɪʀᴛᴇ ᴀ ʟᴏs ɢʀᴜᴘᴏs ᴏғɪᴄɪᴀʟᴇs ᴅᴇ ʟᴀs ғᴀᴍɪʟᴀs ᴛʜᴇ ʟᴏʟɪʙᴏᴛ-ᴍᴅ ʏ ɴᴏᴠᴀʙᴏᴛ-ᴍᴅ, ᴘᴀʀᴀ ᴄᴏɴᴠɪᴠɪʀ ᴄᴏɴ ʟᴀ ᴄᴏᴍᴜɴɪᴅᴀᴅ :ᴠ*\n\n*➤ ɢʀᴜᴘᴏs ᴏғɪᴄɪᴀʟᴇs ᴅᴇʟ ʙᴏᴛ:*\n1) ${nn}\n\n2) ${nn2}\n\n*➤ ɢʀᴜᴘᴏ ᴅᴇʟ ᴄᴏʟᴀʙᴏʀᴀᴄɪᴏɴ:*\n• ${nn3}\n\n• ${nn4}\n\n• ${nn5}\n\n*➤ ɢʀᴜᴘᴏs ᴛᴇsᴛ ᴘᴀʀᴀ ᴘʀᴜᴇʙᴀ ᴅᴇʟ ʙᴏᴛ:*\n• ${nn6}\n\n*➤ ɪɴғᴏᴍᴀʀᴛᴇ sᴏʙʀᴇ ʟᴀs ɴᴜᴇᴠᴀs ᴀᴄᴛᴜᴀʟɪᴢᴀᴄɪᴏɴᴇs ᴅᴇʟ ʙᴏᴛ ᴀǫᴜɪ:*\n• ${nna}\n\n*➤ ɢʀᴜᴘᴏ ᴅᴇʟ ᴀʏᴜᴅᴀ sᴏʙʀᴇ ᴇʟ ʙᴏᴛ:*\n• ${nn7}\n\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n• ɢʀᴜᴘᴏs ᴅᴇʟ ᴀᴍɪsᴛᴀᴅᴇs ᴅᴏɴᴅᴇ ᴇsᴛᴀ ᴇʟ ʙᴏᴛ\n\n*⇶⃤꙰𝑬𝒏𝒍𝒂𝒄𝒆 𝒍𝒐𝒍𝒊𝒃𝒐𝒕ꦿ⃟⃢*\n${nn8}\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\nˢᶦ ᵠᵘᶦᵉʳᵉˢ ᵠᵘᵉ ᵗᵘ ᵍʳᵘᵖᵒˢ ᵃᵖᵃʳᵉᶻᶜᵃⁿ ᵃᵠᵘᶦ ʰᵃᵇˡᵃʳ ᶜᵒⁿ ᵐᶦ ᶜʳᵉᵃᵈᵒʳ`, contextInfo:{mentions: [sender], forwardingScore: 9999999, isForwarded: true, "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "title": ` ${wm}`, "body": ` ${vs}`, "previewType": "PHOTO", thumbnail: imagen1, sourceUrl: a}}}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

const instalar = (conn, m, pushname, sender) => {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
conn.sendMessage(m.chat, { text: `
╭─────────────┈⊷
│ \`\`\`COMO INSTALAR ESTE BOT?\`\`\`
╰┬────────────┈⊷
┌┤\`\`\`📌 REQUISITOS PARA LAS INSTALACION \`\`\`
┌┤❇️ _Dudas: wa.me/5492266466080_
┌┤❇️ _Tutoríal: https://youtu.be/OhbJjp0L2QA?si=ZqRgG3SGTRFSW6CH_
┌┤❇️ _1 GB de almacenamiento_
┌┤❇️ _Termux: https://www.mediafire.com/file/3hsvi3xkpq3a64o/termux_118.apk/file_
┌┤❇️ _GitHub: ${md}_
┌┤❇️ _un whatsapp inmune (secundario)_
┌┤❇️ _un número victual (otro numero)_
┌┤❇️ _2 dispositivo o una PC para escanear_
╰────────────┈⊷

 \`\`\`📌 COMANDO DE INSTALACION TERMUX\`\`\`

> termux-setup-storage

> apt update && apt upgrade && pkg update && pkg upgrade && pkg install bash && pkg install libwebp && pkg install git -y && pkg install nodejs -y && pkg install ffmpeg -y && pkg install wget && pkg install imagemagick -y && pkg install yarn

> git clone https://github.com/elrebelde21/NovaBot-MD && cd NovaBot-MD && yarn && npm install

> npm start

(𝘌𝘴𝘤𝘢𝘯𝘦𝘢𝘳 𝘦𝘭 𝘘𝘙, 𝘙𝘢𝘱𝘪𝘥𝘰)`,
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

const ping = (conn, from, msg, speed) => {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
var timestamp = speed();  
var latensi = speed() - timestamp  
conn.sendMessage(from, { text: `*Pong 🏓  ${latensi.toFixed(4)}*` }, { quoted: msg, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
}

const report = (conn, from, m, prefix, command, text) => {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (!text) return m.reply(`*𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙲𝙾𝙽 𝙵𝙰𝙻𝙻𝙾𝚂*\n\n*𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\n${prefix + command} sticker no funciona`)
conn.sendMessage(`5492266466080@s.whatsapp.net`, {text: `╭━━〔 *𝚁𝙴𝙿𝙾𝚁𝚃𝙴 | 𝚁𝙴𝙿𝙾𝚁𝚃 * 〕━━⬣\n┃\n┃✿ *𝙽𝚞𝚖𝚎𝚛𝚘 | 𝚗𝚞𝚖𝚋𝚎𝚛*\n┃⇢ wa.me/${m.sender.split("@")[0]}\n┃\n┃✿ *𝙼𝚎𝚗𝚜𝚊𝚓𝚎 | 𝚝𝚎𝚡𝚝*\n┃: ${text}┃\n╰━━━〔 *${vs}* 〕━━━⬣` })
m.reply(`*𝙴𝙻 𝚁𝙴𝙿𝙾𝚁𝚃𝙴 𝙵𝚄𝙴 𝙴𝙽𝚅𝙸𝙰𝙳𝙾 𝙰 𝙼𝙸 𝙲𝚁𝙴𝙰𝙳𝙾𝚁, 𝙽𝙾𝚂 𝙲𝙾𝙽𝚃𝙰𝚁𝙴𝙼𝙾𝚂 𝙲𝙾𝙽 𝚄𝚂𝚃𝙴𝙳 𝚂𝙸 𝙴𝚂 𝙽𝙴𝙲𝙴𝚂𝙰𝚁𝙸𝙾, 𝙳𝙴 𝚂𝙴𝚁 𝙵𝙰𝙻𝚂𝙾 𝚂𝙴𝚁𝙰 𝙸𝙶𝙽𝙾𝚁𝙰𝙳𝙾 𝚈 𝙱𝙻𝙾𝚀𝚄𝙴𝙰𝙳𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*`)
}

const ow = (conn, args, m) => {   
if (!args.join(" ")) return m.reply(`┗❴ ⚠ 𝐀𝐃𝐕𝐄𝐑𝐓𝐄𝐍𝐂𝐈𝐀 ⚠ ❵┛\n\nᴇsᴛᴀ ᴘʀᴏʜɪʙɪᴅᴏ ᴇᴛɪǫᴜᴇᴛᴀʀ ᴀʟ ᴄʀᴇᴀᴅᴏʀ/ᴅᴇsᴀʀʀᴏʟʟᴏ sɪ ᴛɪᴇɴᴇs ᴜɴᴀ sᴜɢᴇʀᴇɴᴄɪᴀs ʀᴇғᴇʀᴇɴᴛᴇ ᴀʟ ʙᴏᴛ ᴇsᴄʀɪʙɪʀʟᴇ ᴀ sᴜs ᴘʀɪᴠ.`)
teks = `*|  |*`
teks1 = `\n\nN`
teks2 = `\n\n`
for (let i of owner) {
conn.sendMessage(i + "@s.whatsapp.net", {text: teks + teks1, mentions:[m.sender]}, {quoted:m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
}
conn.sendMessage(m.chat, {text: teks + teks2 + teks1, mentions:[m.sender]}, {quoted:m})
}

async function sc(conn, m) {
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
await conn.relayMessage(m.chat,  {requestPaymentMessage: {currencyCodeIso4217: 'INR', amount1000: '1000000000000', requestFrom: '0@s.whatsapp.net', noteMessage: {extendedTextMessage: {text: txt, contextInfo: {mentionedJid: [m.sender], externalAdReply: {showAdAttribution: true }}}}}}, {})}

module.exports = { state, owner, grupo, instalar, ping, report, ow, sc}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})

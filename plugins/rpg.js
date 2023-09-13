require('../main.js') 
//require("../main")(conn, m, chatUpdate, mek, color, msgs)
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

let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.data.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
m.reply(`💤 𝙽𝙾 𝙻𝙾𝚂 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙴 💤\n𝙴𝚜𝚝𝚎 𝚞𝚜𝚞𝚊𝚛𝚒𝚘 𝚚𝚞𝚎 𝚖𝚎𝚗𝚌𝚒𝚘𝚗𝚊𝚜 𝚎𝚜𝚝𝚊 𝙰𝙵𝙺\n\n${reason ? '🔸️ *𝚁𝙰𝚉𝙾𝙽* : ' + reason : '🔸️ *𝚁𝙰𝚉𝙾𝙽* : 𝚂𝚒𝚗 𝚛𝚊𝚣𝚘𝚗'}\n🔸️ *𝙴𝚂𝚃𝚄𝚅𝙾 𝙸𝙽𝙰𝙲𝚃𝙸𝚅𝙾 𝙳𝚄𝚁𝙰𝙽𝚃𝙴 : ${clockString(new Date - afkTime)}`.trim())}
if (global.db.data.users[m.sender].afkTime > -1) {
let user = global.db.data.users[m.sender]
m.reply(`╭━─━─━─≪☣️≫─━─━─━╮\n┃𝙳𝙴𝙹𝙰𝚂𝚃𝙴 𝙳𝙴 𝙴𝚂𝚃𝙰 𝙰𝙵𝙺\n┃${user.afkReason ? '\n┃🔸️ *𝚁𝙰𝚉𝙾𝙽 :* ' + user.afkReason : ''}\n┃🔸 *𝙴𝚂𝚃𝚄𝚅𝙾 𝙸𝙽𝙰𝙲𝚃𝙸𝚅𝙾 𝙳𝚄𝚁𝙰𝙽𝚃𝙴* ${clockString(new Date - user.afkTime)}\n╰━─━─━─≪☣️≫─━─━─━╯`.trim())
user.afkTime = -1
user.afkReason = '' 
}

async function reg(conn, m, sender, text, fkontak) { 
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let user = global.db.data.users[m.sender]
if (user.registered === true) return m.reply(`*Ya estas registrado 🧐*`) 
if (!Reg.test(text)) return m.reply(`*❌ Forma incorrecta*\n\nuse de esta forma\nEjemplo: ${prefix}reg nombre.edad`) 
let [_, name, splitter, age] = text.match(Reg)
if (!name) return m.reply('El nombre no puede esta vacio') 
if (!age) return m.reply('La edad no puede esta vacia (Numeros)') 
age = parseInt(age)
if (age > 100) return m.reply('Esta Viejo (。-`ω´-)') 
if (age < 5) return m.reply('🚼  Basado, los bebes saber escribir.✍️😳') 
if (name.length >= 30) return m.reply('🐈 Fua que basado, el nombre es muy largo que quiere un puente como nombre😹') 
user.name = name.trim()
user.age = age
user.regTime = + new Date
user.registered = true
//let sn = createHash('md5').update(m.sender).digest('hex')
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender
const date = moment.tz('America/Bogota').format('DD/MM/YYYY')
const time = moment.tz('America/Argentina/Buenos_Aires').format('LT')
global.db.data.users[m.sender].limit += 2
global.db.data.users[m.sender].exp += 200
conn.sendMessage(m.chat, { text: `*[ ✅ REGISTRO COMPLETADO ]*\n◉ *Nombre:* ${name}\n◉ *Edad:* ${age}\n◉ *Hora:* ${time}\n◉ *Fecha:* ${date}\n◉ *Número:* wa.me/${sender.split("@")[0]}\n\n🎁 Recompensa\n◉ 2 diamante 💎\n◉ 200 exp\n\n*Para ver los comandos del bot usar:*\n\n${prefix}menu`,
contextInfo:{
mentionedJid:[name],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": `${botname}`,
"body": `${name}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": imagen1, 
"sourceUrl": md}}},
{ quoted: m})
}

async function rob(conn, m, sender, fkontak) {
const user = global.db.data.users[m.sender]
const date = global.db.data.users[m.sender].robs + 600000; //600000
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (new Date - global.db.data.users[m.sender].robs < 600000) return m.reply(`*🚓 Regresa el ${msToTime(date - new Date())} minutos*`) 
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false;
else who = m.chat;
if (!who) return m.reply(`*⚠️ ETIQUETA A LA PERSONA BOBO*`)
try { 
if (!(who in global.db.data.users)) return m.reply(`*⚠️ El usuario no se encuentra en mi base de datos.*`)
const users = global.db.data.users[who];
let exp = Math.floor(Math.random() * 15) + 10;
let limit = Math.floor(Math.random() * 5) + 3;
const rob = Math.floor(Math.random() * 500);
if (users.limit < 15) return m.reply("*Este tiene menos del 15 diamante no le robe a un pobre*");
if (users.exp < 10) return m.reply(`*Este usuario esta pobre tiene menos del 10 XP*`);
global.db.data.users[m.sender].exp += exp * 1;
global.db.data.users[m.sender].limit += limit * 1;
global.db.data.users[who].exp -= exp * 1;
global.db.data.users[who].limit -= limit * 1;
conn.sendMessage(m.chat, {text: `*ʜᴀs sᴀǫᴜᴇᴀᴅᴏ ⚔️ ᴀ @${who.split`@`[0]}*\n◦ ᴇxᴘ ${exp}\n◦ ᴅɪᴀᴍᴀɴᴛᴇ: ${limit}\n\nʀᴏʙᴀᴅᴏ ᴘᴏʀ: @${m.sender.split("@")[0]}`, mentions: [who, m.sender]}, {quoted: m});
global.db.data.users[m.sender].robs = new Date * 1;
 } catch {
m.reply(`*🚓🚓🚓No le pudiste robar por que a este usuario los protege la policía 👮(AFK)*`)}}

async function bal(conn, m, sender, fkontak) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let user = global.db.data.users[who]
if (!(who in global.db.data.users)) return m.reply(`✳️ ᴇʟ ᴜsᴜᴀʀɪᴏ ɴᴏ sᴇ ᴇɴᴄᴜᴇɴᴛʀᴀ ᴇɴ ᴍɪ ʙᴀsᴇ ᴅᴇ ᴅᴀᴛᴏs`) 
conn.sendMessage(m.chat, {text: `╔════≪ 𝙱𝙰𝙻𝙰𝙽𝙲𝙴 ≫════╗
║ • *📌𝙽𝚘𝚖𝚋𝚛𝚎* : @${who.split('@')[0]}
║ • *💎𝙳𝚒𝚊𝚖𝚊𝚗𝚝𝚎𝚜* : ${user.limit}
║ • *⬆️𝚇𝚙* : ${user.exp}
║◤━━━━━ ☆. ∆ .☆ ━━━━━◥
║ *𝙽𝙾𝚃𝙰 :* 
║𝙿𝚞𝚎𝚍𝚎𝚜 𝚌𝚘𝚖𝚙𝚛𝚊𝚛 💎 𝚍𝚒𝚊𝚖𝚊𝚗𝚝𝚎𝚜
║𝚞𝚜𝚊𝚗𝚍𝚘 𝚕𝚘𝚜 𝚌𝚘𝚖𝚊𝚗𝚍𝚘𝚜
║ • *${prefix}buy <cantidad>*
║ • *${prefix}buyall*
╚═══════════════`, mentions: [who]}, {quoted: m})
}

async function work(conn, m, sender, fkontak) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
let hasil = Math.floor(Math.random() * 2000)
let time = global.db.data.users[m.sender].lastwork + 3600000
if (new Date - global.db.data.users[m.sender].lastwork < 3600000) return m.reply(`ᴇsᴛᴀ ᴄᴀɴsᴀᴅᴏ, ᴇsᴘᴇʀᴀs ${msToTime(time - new Date())} ᴘᴀʀᴀ ᴠᴏʟᴠᴇʀ ᴀ ᴛʀᴀʙᴀᴊᴀ!`) 
let anu = (await axios.get('https://raw.githubusercontent.com/fgmods/fg-team/main/games/work.json')).data
let res = pickRandom(anu)
global.db.data.users[m.sender].exp += hasil
m.reply(`🔸 ${res.fgwork} *${hasil} XP*`)
global.db.data.users[m.sender].lastwork = new Date * 1
}

async function mine(conn, m, sender, fkontak) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
const date = global.db.data.users[m.sender].lastmiming + 600000;
if (new Date - global.db.data.users[m.sender].lastmiming < 600000) return m.reply(`*[ ⏳ ] Espera ${msToTime(date - new Date())} min para volver a minar*`) 
const exp = Math.floor(Math.random() * 1000)
global.db.data.users[m.sender].exp += exp;
m.reply(`*Genial minaste ${exp} XP*`)
global.db.data.users[m.sender].lastmiming = new Date * 1;
}

async function buy(conn, m, sender, args, command, replace, fkontak) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
let count = command.replace(/^buy/i, '');
count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / 450) : parseInt(count) : args[0] ? parseInt(args[0]) : 1;
count = Math.max(1, count);
if (global.db.data.users[m.sender].exp >= 450 * count) {
global.db.data.users[m.sender].exp -= 450 * count;
global.db.data.users[m.sender].limit += count;
m.reply(`╔═❖ *ɴᴏᴛᴀ ᴅᴇ ᴘᴀɢᴏ*\n║‣ *ʜᴀs ᴄᴏᴍᴘʀᴀᴅᴏ :* ${count}💎\n║‣ *ʜᴀs ɢᴀsᴛᴀᴅᴏ :* ${450 * count} XP\n╚═══════════════`);
} else m.reply(`🔶 ɴᴏ ᴛɪᴇɴᴇ sᴜғɪᴄɪᴇɴᴛᴇ xᴘ ᴘᴀʀᴀ ᴄᴏᴍᴘʀᴀʀ *${count}* ᴅɪᴀᴍᴀɴᴛᴇ 💎 ᴘᴜᴇᴅᴇs ᴄᴏɴsᴇɢᴜɪʀ *xᴘ* ᴜsᴀɴᴅᴏ ᴇʟ ᴄᴏᴍᴀɴᴅᴏs #minar`)
}

async function afk(conn, m, sender, args, pushname, text) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
let user = global.db.data.users[m.sender]
user.afkTime = + new Date
user.afkReason = text
m.reply(`╭━─━─━─≪ 𝙰𝙺𝙵 ≫─━─━─━╮
┃ 𝙴𝚂𝚃𝙴 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂 ${pushname}
┃ 𝙴𝚂𝚃𝙰 𝙸𝙽𝙰𝙲𝚃𝙸𝚅𝙾 😴
┃ ≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋
┃ 💤 𝙽𝙾 𝙻𝙾𝚂 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙴 💤
┃ ☣️ 𝙼𝙾𝚃𝙸𝚅𝙾𝚂 : ${text ? text : ''}
╰━─━─━─≪ ${vs} ≫─━─━─━╯`)}

async function claim(conn, m, sender) {
const free = 5000
const prem = 2000
let time = global.db.data.users[m.sender].lastclaim + 86400000
if (new Date - global.db.data.users[m.sender].lastclaim < 86400000) return m.reply(`🎁 *ʏᴀ ʀᴇᴄᴏɢɪsᴛᴇ ᴛᴜ ʀᴇᴄᴏᴍᴘᴇɴsᴀ ᴅɪᴀʀɪᴀ*\n\n🕚 ᴠᴜᴇʟᴠᴇ ᴇɴ ${msToTime(time - new Date())}`) 
global.db.data.users[m.sender].exp += 2 ? prem : free
const limit = Math.floor(Math.random() * 10)
global.db.data.users[m.sender].limit += limit;
m.reply(`🎁 *ʀᴇᴄᴏᴍᴘᴇɴsᴀ ᴅɪᴀʀɪᴀ*

🔸 *ʜᴀs ʀᴇᴄɪʙɪᴅᴏ:*
🆙 *xᴘ* : ${20 ? prem : free}
💎 *Diamante :* ${limit}`)
global.db.data.users[m.sender].lastclaim = new Date * 1
}

async function perfil(conn, who, sender, pushname, fkontak, m) {
avatar = await conn.profilePictureUrl(who, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
let { money, exp, role, limit, level, registered, age} = global.db.data.users[m.sender]
conn.sendMessage(m.chat, { image: { url: avatar }, caption: `┏─━─━─━∞◆∞━─━─━─┓
│🔸 ️🔖 ɴᴏᴍʙʀᴇ: ${pushname} ${registered === true ? 'ͧͧͧͦꙶͣͤ✓' : ''}
│——————«•»——————
│🔸️ 📱ɴᴜᴍᴇʀᴏ: wa.me/${sender.split("@")[0]} ${registered ? '\n│——————«•»——————\n│🔸 ️ᴇᴅᴀᴅ: ' + age + ' años' : ''}
│——————«•»——————
│🔸 ️💎 ᴅɪᴀᴍᴀɴᴛᴇs : ${limit}
│——————«•»——————
│🔸 ️🆙 ɴɪᴠᴇʟ : ${level}
│——————«•»——————
│🔸 ️⬆️ xᴘ : ${exp}
│——————«•»——————
│🔸 ️🏆ʀᴀɴɢᴏ: ${role}
│——————«•»——————
│🔸 ️📇 ʀᴇɢɪsᴛʀᴀᴅᴏs : ${registered ? 'Si': 'No'}
┗─━─━─━∞◆∞━─━─━─┛`}, { quoted: fkontak })}

async function nivel(conn, sender, canLevelUp, xpRange, m, pushname) {
let name = conn.getName(m.sender);  
let user = global.db.data.users[m.sender]; 
if (!canLevelUp(user.level, user.exp, global.multiplier)) { 
let {min, xp, max} = xpRange(user.level, global.multiplier); 
return m.reply(`*[ TUS ESTADISTICAS 🆙 ]*

Tus estadisticas en tiempo real 🕐

├─ ❏ *NOMBRE:* *${pushname}*
├─ ❏ *XP 🆙:* *${user.exp - min}/${xp}*
└─ ❏ *NIVEL:* *${user.level}*
└─ ❏ *RANGO:* *${user.role}*

ᴛᴇ ғᴀʟᴛᴀ *${max - user.exp}* ᴅᴇ *XP* ᴘᴀʀᴀ sᴜʙɪʀ ᴅᴇ ɴɪᴠᴇʟ`)} 
const before = user.level * 1; 
while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++; 
if (before !== user.level) {
const str = `*[ LEVEL UP 🎊 ]* 

🥳 ${pushname} ғᴇʟɪᴄɪᴅᴀᴅᴇs ʟʟᴇɢᴀsᴛᴇ ᴀ ᴜɴ ɴᴜᴇᴠᴏ ɴɪᴠᴇʟ

├─ ❏ *NIVEL ANTERIOR:* ${before}
├─ ❏ *NIVEL ACTUAL:* ${user.level}
├─ ❏ *RANGO:* ${user.role}

*_ᴄᴜᴀɴᴛᴏ ᴍᴀs ɪɴᴛᴇʀᴀᴄᴛᴜᴇs ᴄᴏɴ ʟᴏs ʙᴏᴛs, ᴍᴀʏᴏʀ sᴇʀᴀ ᴛᴜ ɴɪᴠᴇʟ_*`.trim()
return m.reply(str)}}

//función pickrandow
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}
//temporarily
function msToTime(duration) { 
   var milliseconds = parseInt((duration % 1000) / 100), 
   seconds = Math.floor((duration / 1000) % 60), 
   minutes = Math.floor((duration / (1000 * 60)) % 60), 
   hours = Math.floor((duration / (1000 * 60 * 60)) % 24); 
   hours = hours < 10 ? "0" + hours : hours; 
   minutes = minutes < 10 ? "0" + minutes : minutes; 
   seconds = seconds < 10 ? "0" + seconds : seconds; 
   return minutes + " m y " + seconds + " s "; 
}
module.exports = { rob, reg, bal, work, mine, afk, buy, claim, perfil, nivel}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
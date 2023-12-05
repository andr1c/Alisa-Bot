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
const {createHash} = require('crypto') 
const { canLevelUp, xpRange } = require('../libs/levelling.js')

let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.data.users[jid]
if (!user) continue
let afkTime = user.afkTime 
if (!afkTime || afkTime < 0) continue 
let reason = user.afkReason || ''
m.reply(`[ 💤 𝙽𝙾 𝙻𝙾𝚂 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙴 💤 ]\n\n𝙴𝚜𝚝𝚎 𝚞𝚜𝚞𝚊𝚛𝚒𝚘 𝚚𝚞𝚎 𝚖𝚎𝚗𝚌𝚒𝚘𝚗𝚊𝚜 𝚎𝚜𝚝𝚊 𝙰𝙵𝙺\n\n${reason ? '🔸️ *𝚁𝙰𝚉𝙾𝙽* : ' + reason : '🔸️ *𝚁𝙰𝚉𝙾𝙽* : 𝚂𝚒𝚗 𝚛𝚊𝚣𝚘𝚗'}\n🔸️ *𝙴𝚂𝚃𝚄𝚅𝙾 𝙸𝙽𝙰𝙲𝚃𝙸𝚅𝙾 𝙳𝚄𝚁𝙰𝙽𝚃𝙴 : ${clockString(new Date - afkTime)}`.trim())}
if (global.db.data.users[m.sender].afkTime > -1) {
let user = global.db.data.users[m.sender]
m.reply(`*🕔 𝙳𝙴𝙹𝙰𝚂𝚃𝙴 𝙳𝙴 𝙴𝚂𝚃𝙰 𝙰𝙵𝙺 🕔*\n${user.afkReason ? '\n*𝚁𝙰𝚉𝙾𝙽 :* ' + user.afkReason : ''}\n*𝙴𝚂𝚃𝚄𝚅𝙾 𝙸𝙽𝙰𝙲𝚃𝙸𝚅𝙾 𝙳𝚄𝚁𝙰𝙽𝚃𝙴 :* ${clockString(new Date - user.afkTime)}`.trim())
user.afkTime = -1
user.afkReason = ''  
}

async function reg(command, conn, m, sender, text, fkontak, delay, args) {
if (command == 'reg' || command == 'verificar') {
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let user = global.db.data.users[m.sender]
let codigosIdiomas = ['es', 'en']
let nombresIdiomas = {'es': 'Español', 'en': 'English' }
if (user.registered === true) return m.reply(`*Ya estas registrado 🧐*`) 
if (!Reg.test(text)) return m.reply(`*❌ Forma incorrecta*\n\nuse de esta forma\nEjemplo: ${prefix}reg nombre.edad`) 
let [_, name, splitter, age] = text.match(Reg)
if (!name) return m.reply('El nombre no puede esta vacio') 
if (!age) return m.reply('La edad no puede esta vacia (Numeros)') 
age = parseInt(age)
if (age > 100) return m.reply('Esta Viejo (。-`ω´-)') 
if (age < 6) return m.reply('🚼  Basado, los bebes saber escribir.✍️😳') 
if (name.length >= 30) return m.reply('🐈 Fua que basado, el nombre es muy largo que quiere un puente como nombre😹') 
user.name = name + 'ͧͧͧͦꙶͣͤ✓'.trim()
user.age = age
user.regTime = + new Date
user.registered = true
const sn = createHash('md5').update(m.sender).digest('hex');
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender
const date = moment.tz('America/Bogota').format('DD/MM/YYYY')
const time = moment.tz('America/Argentina/Buenos_Aires').format('LT')
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
global.db.data.users[m.sender].limit += 2
global.db.data.users[m.sender].exp += 200
conn.sendMessage(m.chat, { text: `[ ✅ REGISTRO COMPLETADO ]\n\n ◉ *Nombre:* ${name} ${user.registered === true ? 'ͧͧͧͦꙶͣͤ✓' : ''}\n ◉ *Edad:* ${age} años\n ◉ *Hora:* ${time}\n ◉ *Fecha:* ${date}\n ◉ *Número:* wa.me/${sender.split("@")[0]}\n ◉ *Numero del serie*\n ⤷ ${sn}\n\n 🎁 *Recompensa:*\n ⤷ 2 diamante 💎\n ⤷ 200 exp\n\n *◉ Para ver los comandos del bot usar:*
 ${prefix}menu\n\n ◉ *Total de usuários registrados:* ${rtotalreg}`,
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
{ quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
await delay(2 * 2000)
conn.sendMessage(m.chat, { text: sn, contextInfo:{forwardingScore: 9999999, isForwarded: true, }}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
}

if (command == 'unreg') {
const {createHash} = require('crypto') 
if (!args[0]) return m.reply('*✳️ Ingrese número de serie, verifique su número de serie con el comando:* #myns') 
const user = global.db.data.users[m.sender];
const sn = createHash('md5').update(m.sender).digest('hex');
if (args[0] !== sn) return m.reply('*⚠️ Número de serie incorrecto, usar:* #myns') 
user.registered = false; 
global.db.data.users[m.sender].limit -= 2
global.db.data.users[m.sender].exp -= 200
m.reply(`*✅ ᴿᵉᵍᶦˢᵗʳᵒ ᵉˡᶦᵐᶦⁿᵃᵈᵒ*`)}

if (command == 'myns') {
const {createHash} = require('crypto') 
let sn = createHash('md5').update(m.sender).digest('hex')
conn.fakeReply(m.chat, sn, '0@s.whatsapp.net', '👇 ᴱˢᵗᵉ ᵉˢ ˢᵘˢ ⁿᵘᵐᵉʳᵒ ᵈᵉˡ ˢᵉʳᶦᵉ:', 'status@broadcast')}}

async function rpg(m, command, participants, args, sender, pushname, text, conn, fkontak, replace, who) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (command == 'lb' || command == 'leaderboard') {
let member = participants.map(u => u.id)
let me = m.split
const users = Object.entries(global.db.data.users).map(([key, value]) => {
return {...value, jid: key}});
const sortedExp = users.map(toNumber('exp')).sort(sort('exp'));
const sortedLim = users.map(toNumber('limit')).sort(sort('limit'));
const sortedLevel = users.map(toNumber('level')).sort(sort('level'));
const usersExp = sortedExp.map(enumGetKey);
const usersLim = sortedLim.map(enumGetKey);
const usersLevel = sortedLevel.map(enumGetKey);
const len = args[0] && args[0].length > 0 ? Math.min(100, Math.max(parseInt(args[0]), 10)) : Math.min(10, sortedExp.length);
const texto = `𝚃𝙰𝙱𝙻𝙰 𝙳𝙴 𝙲𝙻𝙰𝚂𝙸𝙵𝙸𝙲𝙰𝙲𝙸𝙾𝙽

╔═❖ *𝚃𝙾𝙿 ${len} 𝚇𝙿* 🧬 
║𝚃𝚞 : ${usersExp.indexOf(m.sender) + 1} 𝚍𝚎 ${usersExp.length}
${sortedExp.slice(0, len).map(({jid, exp}, i) => `║${i + 1}. ${participants.some((p) => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} ➭ *${exp} exp*`).join`\n`}
╚═══════════════  

╔═❖ *𝚃𝙾𝙿 ${len} 𝙳𝙸𝙰𝙼𝙰𝙽𝚃𝙴𝚂 💎*
║𝚃𝚞 : ${usersLim.indexOf(m.sender) + 1} 𝚍𝚎 ${usersLim.length}
${sortedLim.slice(0, len).map(({jid, limit}, i) => `║${i + 1}. ${participants.some((p) => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} ➭ *${limit} diamantes*`).join`\n`}
╚═══════════════  

╔═❖ *𝚃𝙾𝙿 ${len} 𝙽𝙸𝚅𝙴𝙻* ⬆️
║𝚃𝚞 : ${usersLevel.indexOf(m.sender) + 1} 𝚍𝚎 ${usersLevel.length}
${sortedLevel.slice(0, len).map(({jid, level}, i) => `║${i + 1}. ${participants.some((p) => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} ➭ *nivel ${level}*`).join`\n`}
╚═══════════════ `.trim();
conn.sendMessage(m.chat, { text: texto, contextInfo:{
mentionedJid: [...texto.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net')}}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'afk') {
let user = global.db.data.users[m.sender]
user.afkTime = + new Date
user.afkReason = text
const afk = `𝙴𝚂𝚃𝙴 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂 ${pushname}  𝙴𝚂𝚃𝙰 𝙸𝙽𝙰𝙲𝚃𝙸𝚅𝙾 😴\n💤 𝙽𝙾 𝙻𝙾𝚂 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙴 💤\n☣️ 𝙼𝙾𝚃𝙸𝚅𝙾𝚂 : ${text ? text : ''}\n\n\n\n\n\n\n`
conn.relayMessage(m.chat, {scheduledCallCreationMessage: {callType: 'VIDEO', scheduledTimestampMs: 0, title: afk }}, {})}

if (command == 'rob' || command == 'robar') {
const user = global.db.data.users[m.sender]
const date = global.db.data.users[m.sender].robs + 600000; //600000
if (new Date - global.db.data.users[m.sender].robs < 600000) return m.reply(`*🚓 Regresa el ${msToTime(date - new Date())}*`) 
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false;
else who = m.chat;
if (!who) return m.reply(`*⚠️ ETIQUETA A LA PERSONA BOBO*`)
try { 
if (!(who in global.db.data.users)) return m.reply(`*⚠️ El usuario no se encuentra en mi base de datos.*`)
const users = global.db.data.users[who];
let exp = Math.floor(Math.random() * 15) + 10;
let limit = Math.floor(Math.random() * 5) + 3;
const rob = Math.floor(Math.random() * 500);
if (users.limit < 15) return conn.sendMessage(m.chat, {text: `*😔 ᴇʟ ᴜsᴜᴀʀɪᴏ @${who.split`@`[0]} ᴛɪᴇɴᴇ ᴍᴇɴᴏs ᴅᴇ 15 ᴅɪᴀᴍᴀɴᴛᴇ, ɴᴏ ʀᴏʙᴇs ᴀ ᴜɴ ᴘᴏʙʀᴇ* v:`, mentions: [who]}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});  
if (users.exp < 10) return conn.sendMessage(m.chat, {text: `*😔 ᴇʟ ᴜsᴜᴀʀɪᴏ @${who.split`@`[0]} ᴛɪᴇɴᴇ ᴍᴇɴᴏs ᴅᴇ 10 ᴇxᴘ*\n*ɴᴏ ʀᴏʙᴇs ᴀ ᴜɴ ᴘᴏʙʀᴇ* v:`, mentions: [who]}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});   
global.db.data.users[m.sender].exp += exp * 1;
global.db.data.users[m.sender].limit += limit * 1;
global.db.data.users[who].exp -= exp * 1;
global.db.data.users[who].limit -= limit * 1;
conn.sendMessage(m.chat, {text: `*ʜᴀs sᴀǫᴜᴇᴀᴅᴏ ⚔️ ᴀ @${who.split`@`[0]}*\n◦ ᴇxᴘ ${exp}\n◦ ᴅɪᴀᴍᴀɴᴛᴇ: ${limit}\n\nʀᴏʙᴀᴅᴏ ᴘᴏʀ: @${m.sender.split("@")[0]}`, mentions: [who, m.sender]}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
global.db.data.users[m.sender].robs = new Date * 1;
 } catch {
m.reply(`*🚓🚓🚓No le pudiste robar por que a este usuario los protege la policía 👮(AFK)*`)}}

if (command == 'buy' || command == 'buyall') {
let count = command.replace(/^buy/i, '');
count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / 450) : parseInt(count) : args[0] ? parseInt(args[0]) : 1;
count = Math.max(1, count);
if (global.db.data.users[m.sender].exp >= 450 * count) {
global.db.data.users[m.sender].exp -= 450 * count;
global.db.data.users[m.sender].limit += count;
m.reply(`╔═❖ *ɴᴏᴛᴀ ᴅᴇ ᴘᴀɢᴏ*\n║‣ *ʜᴀs ᴄᴏᴍᴘʀᴀᴅᴏ :* ${count}💎\n║‣ *ʜᴀs ɢᴀsᴛᴀᴅᴏ :* ${450 * count} XP\n╚═══════════════`);
} else m.reply(`🔶 ɴᴏ ᴛɪᴇɴᴇ sᴜғɪᴄɪᴇɴᴛᴇ xᴘ ᴘᴀʀᴀ ᴄᴏᴍᴘʀᴀʀ *${count}* ᴅɪᴀᴍᴀɴᴛᴇ 💎 ᴘᴜᴇᴅᴇs ᴄᴏɴsᴇɢᴜɪʀ *xᴘ* ᴜsᴀɴᴅᴏ ᴇʟ ᴄᴏᴍᴀɴᴅᴏs #minar`)
}

if (command == 'bal' || command == 'balance' || command == 'diamond') {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let user = global.db.data.users[who]
if (!(who in global.db.data.users)) return m.reply(`✳️ ᴇʟ ᴜsᴜᴀʀɪᴏ ɴᴏ sᴇ ᴇɴᴄᴜᴇɴᴛʀᴀ ᴇɴ ᴍɪ ʙᴀsᴇ ᴅᴇ ᴅᴀᴛᴏs`) 
conn.sendMessage(m.chat, {text: `╔════≪ 𝙱𝙰𝙻𝙰𝙽𝙲𝙴 ≫════╗
║ • *📌𝙽𝙾𝙼𝙱𝚁𝙴 :* @${who.split('@')[0]} ${user.registered === true ? 'ͧͧͧͦꙶͣͤ✓' : ''} 
║ • *💎𝙳𝙸𝙰𝙼𝙰𝙽𝚃𝙴 :* ${user.limit}
║ • *⬆️𝙴𝚇𝙿 :* ${user.exp}
║ • *🪙𝙲𝙾𝙸𝙽𝚂 :* ${user.money}
║◤━━━━━ ☆. ∆ .☆ ━━━━━◥
║ *𝙽𝙾𝚃𝙰 :* 
║𝙿𝚞𝚎𝚍𝚎𝚜 𝚌𝚘𝚖𝚙𝚛𝚊𝚛 💎 𝚍𝚒𝚊𝚖𝚊𝚗𝚝𝚎𝚜
║𝚞𝚜𝚊𝚗𝚍𝚘 𝚕𝚘𝚜 𝚜𝚒𝚐𝚞𝚎𝚗𝚝𝚎 𝚌𝚘𝚖𝚊𝚗𝚍𝚘𝚜:
║ • *${prefix}buy <cantidad>*
║ • *${prefix}buyall*
╚═══════════════`, mentions: [who]}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
}

if (command == 'minar' || command == 'mine') {
const date = global.db.data.users[m.sender].lastmiming + 600000;
if (new Date - global.db.data.users[m.sender].lastmiming < 600000) return m.reply(`*[ ⏳ ] Espera ${msToTime(date - new Date())} para volver a minar*`) 
const exp = Math.floor(Math.random() * 1500)
global.db.data.users[m.sender].exp += exp;
m.reply(`*⚒️ Genial minaste ${exp} XP*`)
global.db.data.users[m.sender].lastmiming = new Date * 1;
}

if (command == 'minar2' || command == 'mine2') {
const date = global.db.data.users[m.sender].lastmiming + 600000;
if (new Date - global.db.data.users[m.sender].lastmiming < 600000) return m.reply(`*⏳ Espera ${msToTime(date - new Date())} para volver a minar*`) 
const exp = Math.floor(Math.random() * 2500)
const diamond = Math.floor(Math.random() * 60)
const money = Math.floor(Math.random() * 2500)
global.db.data.users[m.sender].exp += exp
global.db.data.users[m.sender].limit += diamond
global.db.data.users[m.sender].money += money
m.reply(`┏┅┅🎅┅┅🎁•┅┅🎅┅┅┅⧼
┋✨ 𝙊𝘽𝙏𝙄𝙀𝙉𝙀𝙎 𝙐𝙉 𝙍𝙀𝙂𝘼𝙇𝙊!!
┋✨ 𝙔𝙊𝙐 𝙂𝙀𝙏 𝘼 𝙂𝙄𝙁𝙏!!
┋┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅
┋💎 𝐃𝐈𝐀𝐌𝐀𝐍𝐓𝐄: ${diamond}
┋🪙 𝐂𝐎𝐈𝐍𝐒: ${money}
┋🆙 𝐗𝐏: ${exp}
┗┅┅🎅┅┅🎁•┅┅🎅┅┅┅⧼`)
m.react('🎅') 
global.db.data.users[m.sender].lastmiming = new Date * 1;
}

if (command == 'trabajar' || command == 'work' || command == 'w') {
let hasil = Math.floor(Math.random() * 3000)
let dono = Math.floor(Math.random() * 40)
let time = global.db.data.users[m.sender].lastwork + 3600000 //3600000
if (new Date - global.db.data.users[m.sender].lastwork < 3600000) return m.reply(`*🎅 Ya trabajarte mucho por hoy*\n\n*🕙 Espera:* ${msToTime(time - new Date())} *para volver a chambea*`) 
let anu = (await axios.get('https://raw.githubusercontent.com/fgmods/fg-team/main/games/work.json')).data
let res = pickRandom(anu)
global.db.data.users[m.sender].exp += hasil
global.db.data.users[m.sender].limit += dono
m.reply(`⚒️ ${res.fgwork} *${hasil} XP*\n\n🎅 *Por tu buen trabajos obtienes un bonos navideños de:* ${dono} diamante 💎`)
global.db.data.users[m.sender].lastwork = new Date * 1
}

if (command == 'claim' || command == 'daily') {
let time = global.db.data.users[m.sender].lastclaim + 7200000
if (new Date - global.db.data.users[m.sender].lastclaim < 7200000) return m.reply(`🎁 *ʏᴀ ʀᴇᴄᴏɢɪsᴛᴇ ᴛᴜ ʀᴇᴄᴏᴍᴘᴇɴsᴀ ᴅɪᴀʀɪᴀ*\n\n🕚 ᴠᴜᴇʟᴠᴇ ᴇɴ ${msToTime(time - new Date())}`) 
const exp = Math.floor(Math.random() * 900)
const limit = Math.floor(Math.random() * 30)
const money = Math.floor(Math.random() * 800)
global.db.data.users[m.sender].limit += limit;
global.db.data.users[m.sender].money += money
global.db.data.users[m.sender].exp += exp
m.reply(`*🎁 ᨵׁׅׅ֮ϐׁtׁׅꪱׁׁׁׅׅׅꫀׁׅܻ݊݊ꪀꫀׁׅܻ݊ υׁׅ݊ꪀ ꭈׁׅꫀׁׅܻ݊ᧁׁɑׁׅᥣׁׅ֪ᨵׁׅׅׅ꯱ ݊ꪀɑׁׁׅׅ᥎ׁׅꪱׁׁׁׅׅׅժׁׅ݊ꫀׁׅܻ݊݊ꪀ̃ᨵׁׅׅׅ꯱ 🎁🎅*

🎅 *ʜᴀs ʀᴇᴄɪʙɪᴅᴏ:*
🆙 *xᴘ* : ${exp}
💎 *ᴅɪᴀᴍᴀɴᴛᴇ :* ${limit}
🪙 *ᴄᴏɪɴs :* ${money}`)
global.db.data.users[m.sender].lastclaim = new Date * 1
}

if (command == 'perfil') {
avatar = await conn.profilePictureUrl(who, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
let { money, exp, role, limit, level, registered, age} = global.db.data.users[m.sender]
conn.sendMessage(m.chat, { image: { url: avatar }, caption: `              *⪨ ＰＥＲＦＩＬ ⪩*

*🎅 NOMBRE :* ${pushname} ${registered === true ? 'ͧͧͧͦꙶͣͤ✓' : ''}
*📱 NUMERO :* wa.me/${sender.split("@")[0]} ${registered ? '\n*🧐 EDAD :* ' + age + ' años' : ''}
*💎 DIAMANTES :* ${limit}
*🆙 NIVEL :* ${level}
*⬆️ EXP :* ${exp}
*🏆 RANGO :* ${role}
*📇 REGISTRADOS :* ${registered ? 'Si': 'No'}`}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
m.react(done)}

if (command == 'levelup' || command == 'nivel') {
let name = conn.getName(m.sender);  
let user = global.db.data.users[m.sender]; 
if (!canLevelUp(user.level, user.exp, global.multiplier)) { 
let {min, xp, max} = xpRange(user.level, global.multiplier); 
return m.reply(`╭╌「 *🎅 TUS ESTADISTICAS 🆙* 」
├╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌
├『 Tus estadisticas en tiempo real 🕐 』
├╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌
├─ ❏ *NOMBRE:* ${pushname}
├─ ❏ *XP 🆙:* ${user.exp - min}/${xp}
├─ ❏ *NIVEL:* ${user.level}
├─ ❏ *RANGO:* ${user.role}
╰╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌

🎊 𝘛𝘦 𝘧𝘢𝘭𝘵𝘢 *${max - user.exp}* 𝘥𝘦 *XP* 𝘱𝘢𝘳𝘢 𝘴𝘶𝘣𝘪𝘳 𝘥𝘦 𝘯𝘪𝘷𝘦𝘭`)} 
const before = user.level * 1; 
while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++; 
if (before !== user.level) {
const str = `╭╌「 *LEVEL UP 🎊* 」
├╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌
├『 🥳 ${pushname} 𝘍𝘦𝘭𝘪𝘤𝘪𝘥𝘢𝘥𝘦𝘴
├ 𝘭𝘭𝘦𝘨𝘢𝘴𝘵𝘦 𝘢 𝘶𝘯 𝘯𝘶𝘦𝘷𝘰 𝘯𝘪𝘷𝘦𝘭 』
├╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌
├─ ❏ *NIVEL ANTERIOR:* ${before}
├─ ❏ *NIVEL ACTUAL:* ${user.level}
├─ ❏ *RANGO:* ${user.role}
╰╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌

*🎅 𝘊𝘶𝘢𝘯𝘵𝘰 𝘮𝘢𝘴 𝘪𝘯𝘵𝘦𝘳𝘢𝘤𝘵𝘶𝘦𝘴 𝘤𝘰𝘯 𝘭𝘰𝘴 𝘣𝘰𝘵𝘴, 𝘮𝘢𝘺𝘰𝘳 𝘴𝘦𝘳𝘢 𝘵𝘶 𝘯𝘪𝘷𝘦𝘭*`.trim()
return m.reply(str)}}

if (command == 'cofre') {
if (global.db.data.users[m.sender].level < 9) return m.reply(`[ ❇️ ] ɴᴇᴄᴇsɪᴛᴀ ᴇʟ ɴɪᴠᴇʟ 9 ᴘᴀʀᴀ ᴘᴏᴅᴇʀ ᴜsᴀʀ ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ᴄᴏᴍᴘʀᴜᴇʙᴀ ᴛᴜ ɴɪᴠᴇʟ ᴀᴄᴛᴜᴀʟ ᴄᴏɴ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ .nivel`) 
const date = global.db.data.users[m.sender].lastcofre + 86400000; //10 hs
if (new Date - global.db.data.users[m.sender].lastcofre < 86400000) return m.reply(`*🎁 𝚈𝙰 𝚁𝙴𝙲𝙾𝙶𝙸𝚂𝚃𝙴 𝚃𝚄 𝙲𝙾𝙵𝚁𝙴*\n🕚 𝚅𝚄𝙴𝙻𝚅𝙴 𝙴𝙻: ${msToTime(date - new Date())}`) 
exp = Math.floor(Math.random() * 9999)
limit = Math.floor(Math.random() * 70)
trash = Math.floor(Math.random() * 600)
potion = Math.floor(Math.random() * 300)
money = Math.floor(Math.random() * 8500)
global.db.data.users[m.sender].exp += exp
global.db.data.users[m.sender].limit += limit
global.db.data.users[m.sender].trash += trash
global.db.data.users[m.sender].potion += potion
global.db.data.users[m.sender].money += money
m.reply(`╔══🎉═🎉═🎉══⬣\n║🛒 𝙾𝙱𝚃𝙸𝙴𝙽𝙴𝚂 𝚄𝙽 𝙲𝙾𝙵𝚁𝙴\n║┈┈┈┈┈┈┈┈┈┈┈┈┈\n║⚡${exp} 𝙴𝚇𝙿\n║💎 ${limit} 𝙳𝙸𝙰𝙼𝙰𝙽𝚃𝙴\n║🗑️ ${trash} 𝙱𝙰𝚂𝚄𝚁𝙰\n║🥤 ${potion} 𝙿𝙾𝙲𝙸𝙾𝙽𝙴𝚂\n║🪙 ${money} 𝙲𝙾𝙸𝙽𝚂\n╚═════════════════⬣`)
global.db.data.users[m.sender].lastcofre = new Date * 1;
}}

//función pickrandow
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}

function sort(property, ascending = true) {
  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property];
  else return (...args) => args[ascending & 1] - args[!ascending & 1];
}

function toNumber(property, _default = 0) {
  if (property) {
    return (a, i, b) => {
      return {...b[i], [property]: a[property] === undefined ? _default : a[property]};
    };
  } else return (a) => a === undefined ? _default : a;
}

function enumGetKey(a) {
  return a.jid;
}

//temporarily
function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " Horas " + minutes + " Minutos"
}
module.exports = { reg, rpg }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
require('../main.js') 
const fs = require("fs")
const path = require("path")
const chalk = require("chalk");
const axios = require('axios')
const cheerio = require('cheerio')
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom } = require('../libs/fuctions.js'); 

async function owner(isCreator, m, command, conn, text, delay, fkontak, store, quoted, sender) {
if (!isCreator) return m.reply(info.owner) 
if (command == 'bcgc' || command == 'bcgroup') {
if (!text) return conn.sendMessage(m.chat, { text: `*Ingrese el texto que quiere difundir*` }, { quoted: m }); 
let getGroups = await conn.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
m.reply(`*Enviando mensajes oficial un momento*`)
for (let i of anu) {
await delay(3 * 3000)
let txt = `「 ✅ *𝘊𝘖𝘔𝘜𝘕𝘐𝘊𝘈𝘋𝘖 𝘖𝘍𝘐𝘊𝘐𝘈𝘓* ✅ 」\n\n${text}`
conn.sendText(i, txt, fkontak)}
m.reply(`ᴛʀᴀɴsᴍɪsɪᴏɴ ʀᴇᴀʟɪᴢᴀᴅᴀ ᴄᴏɴ ᴇxɪᴛᴏs ✅ ᴛᴏᴛᴀʟ ${anu.length} ᴄʜᴀᴛ ɢʀᴜᴘᴏs\nᴛɪᴇᴍᴘᴏ ᴛᴏᴛᴀʟ ᴅᴇ ᴇɴᴠɪᴏ: ${anu.length * 1.5} sᴇɢ`)}

if (command == 'bc' || command == 'broadcast' || command == 'bcall') {
if (!text) return conn.sendMessage(m.chat, { text: `*Ingrese el texto*` }, { quoted: m }); 
let anu = await store.chats.all().map(v => v.id)
m.reply(`ᴛʀᴀɴsᴍɪsɪᴏɴ ʀᴇᴀʟɪᴢᴀᴅᴀ ᴄᴏɴ ᴇxɪᴛᴏs ✅\nᴛᴏᴛᴀʟ ${anu.length} ᴄʜᴀᴛs`)
for (let yoi of anu) {
//await sleep(1500)
await delay(3 * 3000)
let txt = `「 ✅ *𝘊𝘖𝘔𝘜𝘕𝘐𝘊𝘈𝘋𝘖 𝘖𝘍𝘐𝘊𝘐𝘈𝘓* ✅ 」\n\n${text}`
conn.sendText(yoi, txt, fkontak)}
m.reply('Listo')}

if (command == 'block' || command == 'bloquear') {
m.reply(`*El usuario fue bloqueado del bot*`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.updateBlockStatus(users, 'block')}

if (command == 'unblock' || command == 'desbloquear') {
m.reply(`*El usuario fue desbloqueado*`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.updateBlockStatus(users, 'unblock')}

if (command == 'setcmd' || command == 'addcmd') {
if (!m.quoted) return m.reply('*[ ⚠️ ] 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰𝙻 𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝙾 𝙸𝙼𝙰𝙶𝙴𝙽 𝙰𝙻 𝙲𝚄𝙰𝙻 𝙳𝙴𝚂𝙴𝙰 𝙰𝙶𝚁𝙴𝙶𝙰𝚁 𝚄𝙽 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙾 𝚃𝙴𝚇𝚃𝙾*') 
if (!m.quoted.fileSha256) return m.reply('*⚠️ 𝙼𝙴𝙽𝙲𝙸𝙾𝙽𝙰 𝙰𝙻 𝙼𝙴𝙽𝚂𝙰𝙹𝙴*') 
if (!text) return m.reply(`*[ ⚠️ ] 𝙴𝚁𝚁𝙾𝚁 𝙳𝙴 𝚄𝚂𝙾, 𝚃𝙴𝚇𝚃𝙾 𝙵𝙰𝙻𝚃𝙰𝙽𝚃𝙴*\n\n*𝙴𝙹𝙴𝙼𝙿𝙻𝙾 𝙳𝙴 𝚄𝚂𝙾 𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙾 𝙳𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾:*\n*${prefix + command} <#menu> <responder a sticker o imagen>*`) 
let hash = m.quoted.fileSha256.toString('base64')
if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return m.reply('*[ ⚠️ ] 𝙽𝚘 𝚝𝚒𝚎𝚗𝚎𝚜 𝚙𝚎𝚛𝚖𝚒𝚜𝚘 𝚙𝚊𝚛𝚊 𝚌𝚊𝚖𝚋𝚒𝚊𝚛 𝚎𝚜𝚝𝚎 𝚌𝚘𝚖𝚊𝚗𝚍𝚘 𝚍𝚎 𝚂𝚝𝚒𝚌𝚔𝚎𝚛*') 
global.db.data.sticker[hash] = {text, mentionedJid: m.mentionedJid, creator: m.sender, at: + new Date, locked: false, }
m.reply(`*[ ✔ ] ᴇʟ ᴛᴇxᴛᴏ/ᴄᴏᴍᴀɴᴅᴏ ᴀsɪɢɴᴀᴅᴏ ᴀʟ sᴛɪᴄᴋᴇʀ/ɪᴍᴀɢᴇɴ ғᴜᴇ ᴀɢʀᴇɢᴀᴅᴏ ᴀ ʟᴀ ʙᴀsᴇ ᴅᴇ ᴅᴀᴛᴏs ᴄᴏʀʀᴇᴄᴛᴀᴍᴇɴᴛᴇ*`)}

if (command == 'delcmd') {
let _sh = m.quoted.fileSha256.toString('base64')
if (!_sh) return reply('*𝙴𝚜𝚝𝚎 𝚒𝚍 𝚍𝚎 𝚜𝚝𝚒𝚌𝚔𝚎𝚛 𝚗𝚘 𝚎𝚡𝚒𝚜𝚝𝚎*') 
if (global.db.data.sticker[_sh] && global.db.data.sticker[_sh].locked) return m.reply('*[ ⚠️ ] No tienes permiso para cambiar este comando de Sticker*')      
delete global.db.data.sticker[_sh]
m.reply('*✅ 𝙷𝚎𝚌𝚑𝚘*')}

if (command == 'listcmd') {
let _teks = `*𝙻𝙸𝚂𝚃𝙰 𝙳𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂*\n▢ *𝙸𝚗𝚏𝚘:* 𝚂𝚒 𝚎𝚜𝚝𝚊 𝚎𝚗 *𝚗𝚎𝚐𝚛𝚒𝚝𝚊* 𝚎𝚜𝚝𝚊 𝚋𝚕𝚘𝚚𝚞𝚎𝚊𝚍𝚘\n\n──────────────────\n${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}`.trim()
conn.sendText(m.chat, _teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })}

if (command == 'añadirdiamantes' || command == 'dardiamantes' || command == 'addlimit') {
const pajak = 0;
let who;
if (m.isGroup) who = m.mentionedJid[0];
else who = m.chat;
if (!who) return m.reply('*[ ⚠️ ] ᥱ𝗍і𝗊ᥙᥱ𝗍ᥲ ᥲ ᥙᥒ ᥙsᥙᥲrі᥆ ᥴ᥆ᥒ ᥱᥣ @𝚝𝚊𝚐*') 
const txt = text.replace('@' + who.split`@`[0], '').trim();
if (!txt) return m.reply('*[ ⚠️ ] іᥒgrᥱsᥱ ᥣᥲ ᥴᥲᥒ𝗍іძᥲძ ძᥱ ძіᥲmᥲᥒ𝗍ᥱ 𝗊ᥙᥱ ძᥱsᥱᥲ ᥲᥒ̃ᥲძіr*') 
if (isNaN(txt)) return m.reply('*[ ⚠️ ] sіmᑲ᥆ᥣ᥆ ᥒ᥆ ᥲძmі𝗍іძ᥆, s᥆ᥣ᥆ ᥒᥙmᥱr᥆!*') 
const dmt = parseInt(txt);
let limit = dmt;
const pjk = Math.ceil(dmt * pajak);
limit += pjk;
if (limit < 1) return m.reply('*[ ⚠️ ] ᥱᥣ ᥒᥙmᥱr᥆ mіᥒіm᥆ ძᥱ ძіᥲmᥲᥒ𝗍ᥱ ⍴ᥲrᥲ ᥲᥒ̃ᥲძіr ᥱs 𝟷*') 
const users = global.db.data.users;
users[who].limit += dmt;
m.reply(`≡ *💎 sᥱ ᥲᥒ̃ᥲძіძ᥆*
┏╍╍╍╍╍╍╍╍╍╍╍╍╍
┃• *𝗍᥆𝗍ᥲᥣ:* ${dmt}
┗╍╍╍╍╍╍╍╍╍╍╍╍╍`)}

if (command == 'añadirxp' || command == 'addexp' || command == 'addxp') {
const pajak = 0;
let who;
if (m.isGroup) who = m.mentionedJid[0];
else who = m.chat;
if (!who) return m.reply('*[ ⚠️ ] ᥱ𝗍і𝗊ᥙᥱ𝗍ᥲ ᥲ ᥙᥒ ᥙsᥙᥲrі᥆ ᥴ᥆ᥒ ᥱᥣ @𝚝𝚊𝚐*') 
const txt = text.replace('@' + who.split`@`[0], '').trim();
if (!txt) return m.reply('*[ ⚠️ ] іᥒgrᥱsᥲ ᥣᥲ ᥴᥲᥒ𝗍іძᥲძ ძᥱ ᥱ᥊⍴ᥱrіᥱᥒᥴіᥲ (᥊⍴) 𝗊ᥙᥱ ძᥱsᥱᥲᥲ ᥲᥒ̃ᥲძіr*') 
if (isNaN(txt)) return m.reply('*[ ⚠️ ] sіmᑲ᥆ᥣ᥆ ᥒ᥆ ᥲძmі𝗍іძ᥆, s᥆ᥣ᥆ ᥒᥙmᥱr᥆*') 
const xp = parseInt(txt);
let exp = xp;
const pjk = Math.ceil(xp * pajak);
exp += pjk;
if (exp < 1) return m.reply('*[ ⚠️ ] ᥱᥣ ᥒᥙmᥱr᥆ mіᥒіm᥆ ძᥱ ᥱ᥊⍴ᥱrіᥱᥒᥴіᥲ (᥊⍴) ⍴ᥲrᥲ ᥲᥒ̃ᥲძіr ᥱs 𝟷*') 
const users = global.db.data.users;
users[who].exp += xp;
m.reply(`≡ *᥊⍴ ᥲᥒ̃ᥲძіძ᥆*
┏╍╍╍╍╍╍╍╍╍╍╍╍╍
┃• *𝗍᥆𝗍ᥲᥣ:* ${xp}
┗╍╍╍╍╍╍╍╍╍╍╍╍╍`)}}

module.exports = { owner }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
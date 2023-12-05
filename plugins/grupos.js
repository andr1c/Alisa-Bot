//COMANDO PARA GRUPOS
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
require('../main')

async function grupo(m, command, isGroupAdmins, text, conn, participants, isBotAdmins, args, isCreator, delay, sender, quoted, mime, from, isCreator, groupMetadata, fkontak, delay, store) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (command == 'hidetag' || command == 'notificar' || command == 'tag') {  
if (!m.isGroup) return m.reply(info.group) 
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return m.reply(`*Y el texto?*`) 
conn.sendMessage(m.chat, { text : text ? text : '' , mentions: participants.map(a => a.id)}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'grupo') {
if (!m.isGroup) return m.reply(info.group);  
if (!isBotAdmins) return m.reply(info.botAdmin);  
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return m.reply(`*Accion mal usaba*\n\n*Use de esta forma:*\n*${prefix + command} abrir*\n*${prefix + command} cerrar*`)
if (args[0] === 'abrir') {
m.reply(`*GRUPO ABIERTO CON EXITO✅*`)
await conn.groupSettingUpdate(m.chat, 'not_announcement')
} else if (args[0] === 'cerrar') {
m.reply(`*GRUPO CERRADO CON EXITO✅*`)
await conn.groupSettingUpdate(m.chat, 'announcement')
}}
    
if (command == 'delete' || command == 'del') {
if (!m.quoted) throw false
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isGroupAdmins) return m.reply(info.admin)
let { chat, fromMe, id} = m.quoted
let delet = m.message.extendedTextMessage.contextInfo.participant
let bang = m.message.extendedTextMessage.contextInfo.stanzaId
return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
}
  
if (command == 'join' || command == 'unete') {
let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
let link = (m.quoted ? m.quoted.text ? m.quoted.text : text : text) || text
let [_, code] = link.match(linkRegex) || []
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (!code) return m.reply(`*INGRESE ENLACE DEL GRUPO*\n\n*📌 EJEMPLO*\n*#join ${nn}*`) 
if ( isCreator || m.fromMe) {
m.reply(`*YA ME UNÍ 😼*`)
await delay(3 * 3000)
let res = await conn.groupAcceptInvite(code).then((code) => m.reply(jsonformat(code))).catch((err) => m.reply(jsonformat(err)))
//await conn.groupAcceptInvite(code)
} else {
const data = global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)
await delay(2 * 2000)
for (let jid of data.map(([id]) => [id] + '@s.whatsapp.net').filter(v => v != conn.user.jid)) m.reply(`📧 *ＳＯＬＩＣＩＴＵＤ ＰＡＲＡ ＵＮ ＧＲＵＰＯ*\n\n*👤 ＳＯＬＩＣＩＴＡＮＴＥ*\nwa.me/${m.sender.split('@')[0]}\n\n*🔮 ＥＮＬＡＣＥ*\n${link}`, jid)

m.reply(`*✅ 𝘚𝘶 𝘦𝘯𝘭𝘢𝘤𝘦 𝘴𝘦 𝘦𝘯𝘷𝘪𝘰𝘯 𝘢 𝘮𝘪 𝘗𝘳𝘰𝘱𝘪𝘦𝘵𝘢𝘳𝘪𝘰(𝘢)*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n⚠️ *𝘚𝘶 𝘨𝘳𝘶𝘱𝘰 𝘴𝘦𝘳𝘢 𝘦𝘷𝘢𝘭𝘶𝘢𝘥𝘰 𝘺 𝘲𝘶𝘦𝘥𝘢𝘳𝘢 𝘢 𝘥𝘦𝘤𝘪𝘴𝘪𝘰𝘯 𝘥𝘦 𝘮𝘪 𝘗𝘳𝘰𝘱𝘪𝘦𝘵𝘢𝘳𝘪𝘰(𝘢) 𝘴𝘪 𝘦𝘭 𝘣𝘰𝘵 𝘴𝘦 𝘶𝘯𝘦 𝘰 𝘯𝘰 𝘢𝘭 𝘨𝘳𝘶𝘱𝘰.*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n❕ *𝘌𝘴 𝘱𝘰𝘴𝘪𝘣𝘭𝘦 𝘲𝘶𝘦 𝘴𝘶 𝘚𝘰𝘭𝘪𝘤𝘪𝘵𝘶𝘥 𝘴𝘦𝘢 𝘙𝘦𝘤𝘩𝘢𝘻𝘢𝘥𝘢 𝘱𝘰𝘳 𝘭𝘢𝘴 𝘴𝘪𝘨𝘶𝘪𝘦𝘯𝘵𝘦𝘴 𝘊𝘢𝘶𝘴𝘢𝘴:*\n*1️⃣ 𝘌𝘭 𝘉𝘰𝘵 𝘦𝘴𝘵𝘢́ 𝘚𝘢𝘵𝘶𝘳𝘢𝘥𝘰.*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n2️⃣ *𝘌𝘭 𝘉𝘰𝘵 𝘧𝘶𝘦 𝘦𝘭𝘪𝘮𝘪𝘯𝘢𝘥𝘰 𝘥𝘦𝘭 𝘎𝘳𝘶𝘱𝘰.*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n3️⃣ *𝘌𝘭 𝘎𝘳𝘶𝘱𝘰 𝘯𝘰 𝘤𝘶𝘮𝘱𝘭𝘦 𝘤𝘰𝘯 𝘭𝘢𝘴 𝘕𝘰𝘳𝘮𝘢𝘵𝘪𝘷𝘢𝘴 𝘥𝘦 𝘣𝘰𝘵*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n4️⃣ *𝘌𝘭 𝘦𝘯𝘭𝘢𝘤𝘦 𝘥𝘦𝘭 𝘨𝘳𝘶𝘱𝘰 𝘴𝘦 𝘳𝘦𝘴𝘵𝘢𝘣𝘭𝘦𝘤𝘪𝘰.*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n5️⃣ *𝘕𝘰 𝘴𝘦 𝘢𝘨𝘳𝘦𝘨𝘢 𝘢 𝘎𝘳𝘶𝘱𝘰𝘴 𝘴𝘦𝘨𝘶́𝘯 𝘔𝘪 𝘗𝘳𝘰𝘱𝘪𝘦𝘵𝘢𝘳𝘪𝘰(𝘢)*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n📧 *𝘓𝘢 𝘴𝘰𝘭𝘪𝘤𝘪𝘵𝘶𝘥 𝘱𝘶𝘦𝘥𝘦 𝘵𝘢𝘳𝘥𝘢𝘳 𝘏𝘰𝘳𝘢𝘴 𝘦𝘯 𝘴𝘦𝘳 𝘙𝘦𝘴𝘱𝘰𝘯𝘥𝘪𝘥𝘢. 𝘗𝘰𝘳 𝘧𝘢𝘷𝘰𝘳 𝘛𝘦𝘯𝘦𝘳 𝘗𝘢𝘤𝘪𝘦𝘯𝘤𝘪𝘢, 𝘎𝘳𝘢𝘤𝘪𝘢𝘴*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n*ᴾᵘᵉᵈᵉ ᵃᵖᵒʸᵃʳ ᵉˡ ᵇᵒᵗ ᶜᵒⁿ ᵘⁿᵃ ᴱˢᵗʳᵉˡˡᶦᵗᵃ ᵉˡ ⁿᵘᵉˢᵗʳᵒ ʳᵉᵖᵒˢᶦᵗᵒʳᶦᵒ ᵒᶠᶦᶜᶦᵃˡ ʸ ˢᵘˢᶜʳᶦʳᵗᵉ ᵃ ⁿᵘᵉˢᵗʳᵒ ᶜᵃⁿᵃˡ ᵈᵉˡ ʸᵒᵘᵀᵘᵇᵉ ᵐᵃⁿᵈᵃ ᶜᵃʳᵗᵘʳᵃ ᵃ ᵐᶦ ᶜʳᵉᵃᵈᵒʳ ᵖᵃʳᵃ ᵠᵘᵉ ᵖᵘᵉᵈᵃ ᵃᵍʳᵉᵍᵃ ᵉˡ ᵇᵒᵗ ᵃ ᵗᵘ ᵍʳᵘᵖᵒ 💫*`)
await delay(25 * 25000)
m.reply(`*[ ＵＮＥ ＵＮ ＢＯＴ Ａ ＴＵ ＧＲＵＰＯ ]*\n\n𝙀𝙡 𝙗𝙤𝙩 𝙨𝙚 𝙥𝙪𝙚𝙙𝙚𝙣 𝙪𝙣𝙞𝙧 𝙖 𝙩𝙪 𝙜𝙧𝙪𝙥𝙤, 𝙨𝙞 𝙩𝙪 𝙖𝙥𝙤𝙮𝙖𝙧 𝙖𝙡 𝙗𝙤𝙩 𝙘𝙤𝙣 𝙪𝙣𝙖 𝙚𝙨𝙩𝙧𝙚𝙡𝙡𝙞𝙩𝙖 🌟 𝙚𝙡 𝙧𝙚𝙥𝙤𝙨𝙞𝙩𝙤𝙧𝙞𝙤 𝙤𝙛𝙘\n${md}\n\n🔔 𝙎𝙪𝙗𝙨𝙘𝙧𝙞𝙧𝙩𝙚 𝙖 𝙣𝙪𝙚𝙨𝙩𝙧𝙤 𝙘𝙖𝙣𝙖𝙡 𝙙𝙚 𝙮𝙤𝙪𝙩𝙪𝙗𝙚\n${global.yt}\n\n🧐 𝙈𝙖𝙣𝙙𝙖 𝘾𝙖𝙥𝙩𝙪𝙧𝙖 (𝙥𝙧𝙪𝙚𝙗𝙖) 𝙖 𝙢𝙞 𝙘𝙧𝙚𝙖𝙙𝙤𝙧 𝙖𝙡:\nwa.me/5492266466080 𝙋𝙖𝙧𝙖 𝙥𝙤𝙙𝙚𝙧 𝙪𝙣𝙞𝙧 𝙪𝙣 𝙗𝙤𝙩 𝙖 𝙩𝙪 𝙜𝙧𝙪𝙥𝙤 💞`)}
}

if (command == 'setppgroup' || command == 'setpp') {
if (!m.isGroup) return m.reply(info.group) 
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isGroupAdmins) return m.reply(info.admin)
if (!quoted) return m.reply(`*⚠️Y la imagen?*`)
if (!/image/.test(mime)) return m.reply(`*⚠️ Responde a una con:* ${prefix + command}`)
if (/webp/.test(mime)) return m.reply(`*⚠️Responde a una  Image con :* ${prefix + command}`)
var mediz = await conn. downloadAndSaveMediaMessage(quoted, 'ppgc.jpeg')
if (args[0] == `full`) {
var { img } = await generateProfilePicture(mediz)
await conn.query({tag: 'iq', attrs: {to: m.chat, type:'set', xmlns: 'w:profile:picture' }, content: [ {tag: 'picture', attrs: { type: 'image' }, content: img } ]}) 
fs.unlinkSync(mediz)
m.reply(`*✅Exito*`)
} else {
var memeg = await conn.updateProfilePicture(m.chat, { url: mediz })
fs.unlinkSync(mediz)
m.reply(`*✅Exito*`)}}

if (command == 'setppname' || command == 'nuevonombre' || command == 'newnombre') {
if (!m.isGroup) return m.reply(info.group) 
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return m.reply('*⚠️ Ingresa el texto*')
await conn.groupUpdateSubject(m.chat, text)
await m.reply(`*✅El nombre del grupo se cambio correctamente*`)}

if (command == 'setdesc' || command == 'descripción') {
if (!m.isGroup) return m.reply(info.group) 
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return m.reply('*⚠️ Ingresa el texto*')
await conn.groupUpdateDescription(m.chat, text)
await m.reply(`*✅La descripción del grupo se cambio con éxito*`)}

if (command == 'anularlink' || command == 'resetlink' || command == 'revoke') {
if (!m.isGroup) return m.reply(info.group) 
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isGroupAdmins) return m.reply(info.admin)
let res = conn.groupRevokeInvite(m.chat)}

if (command == 'add' || command == 'agregar' || command == 'invitar') {
if (!m.isGroup) return m.reply(info.group);  
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return m.reply(`*[ ⚠️ ] INGRESA EL NÚMERO DEL LA PERSONA QUE QUIERA AGREGA*\n*EJEMPLO:*\n${prefix}add +5244446577`)
if (text.includes('+')) return m.reply(`*⚠️ INGRESA EL NUMERO SIN EL (+)*`)
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group)
await conn.sendMessage(text+'@s.whatsapp.net', {text: `≡ *INVITACIÓN*\n\nHola un usuario te invito a unirte a este grupos\n\n${link}`, mentions: [m.sender]})
m.reply(`*✅Listo*`)}

if (command == 'kick' || command == 'echar' || command == 'sacar') {
if (!m.isGroup) return m.reply(info.group) 
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isGroupAdmins) return m.reply(info.admin)
const kicktext = `*[ ⚠️ ] A QUIEN CARAJO ELIMINO? ETIQUETA ALGUN USUARIO NO SOY ADIVINO 😯*`;
if (!m.mentionedJid[0] && !m.quoted) return m.reply(kicktext, m.chat, {mentions: conn.parseMention(kicktext)});
if (m.mentionedJid.includes(conn.user.jid)) return;
const user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;
const owr = m.chat.split`-`[0];
await conn.groupParticipantsUpdate(m.chat, [user], 'remove')}

if (command == 'promote' || command == 'darpoder') {
if (!m.isGroup) return m.reply(info.group) 
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isGroupAdmins) return m.reply(info.admin)
if (!m.mentionedJid[0] && !m.quoted) return m.reply(`*[ ⚠️ ] A QUIEN LE DOY ADMIN? ETIQUETA A LA PERSONA O RESPONDE A SUS MENSAJES*`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))}

if (command == 'demote' || command == 'quitarpoder') {
if (!m.isGroup) return m.reply(info.group) 
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isGroupAdmins) return m.reply(info.admin)
if (!m.mentionedJid[0] && !m.quoted) return m.reply(`*[ ⚠️ ] A QUIEN LE QUITO ADMINS? ETIQUETA A LA PERSONA O RESPONDE A SUS MENSAJES*`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))}

if (command == 'link' || command == 'linkgc') {
if (!m.isGroup) return m.reply(info.group) 
if (!isBotAdmins) return m.reply(info.botAdmin)
let response = await conn.groupInviteCode(m.chat)
conn.sendText(m.chat, `https://chat.whatsapp.com/${response}`, m, { detectLink: true })}

if (command == 'banchat') { 
if (!m.isGroup) return m.reply(info.group) 
if (!isCreator) return m.reply(info.owner) 
if (!text) return m.reply(`*Accion mal usaba*\n\n*Use de esta forma:*\n*${prefix + command} on*\n*${prefix + command} off*`)
if (args[0] === "on") {
if (global.db.data.chats[m.chat].isBanned) return m.reply(`*Ya esta baneado este chat*`)
global.db.data.chats[m.chat].isBanned = true
m.reply(`*BOT OFF*`)
} else if (args[0] === "off") {  
if (!global.db.data.chats[m.chat].isBanned) return m.reply(`*Este chat no esta baneado*`)
global.db.data.chats[m.chat].isBanned = false
m.reply(`*BOT ONLINE YA ESTOY DISPONIBLE ✅*`)}}

if (command == 'tagall' || command == 'invocar' || command == 'todos') {
if (!m.isGroup) return m.reply(info.group) 
if (!isGroupAdmins) return m.reply(info.admin)
const pesan = args.join` `;
const oi = `❑ Mensaje: ${pesan}`;
let teks = `❑ ━〔 *📢 ＩＮＶＯＣＡＣＩＯＮ 📢* 〕━ ❑\n\n`
teks += `${oi}\n\n`
for (let mem of participants) {
teks += `➥ @${mem.id.split('@')[0]}\n`
}
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'admins' || command == 'administradores') {
if (!m.isGroup) return m.reply(info.group);  
const pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => null) || './src/admins.jpg';
const groupAdmins = participants.filter((p) => p.admin);
const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n➥ ');
const owner = groupMetadata.owner || groupAdmins.find((p) => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net';
const pesan = args.join` `;
const oi = `*ᴍᴇɴsᴀᴊᴇ:* ${pesan}`;
const text = `═✪〘 *ＩＮＶＯＣＡＮＤＯ ＡＤＭＩＮＳ* 〙✪═\n\n• *ɢʀᴜᴘᴏ:* [ ${groupMetadata.subject} ]\n\n• ${oi}\n\n• *ᴀᴅᴍɪɴs:*\n➥ ${listAdmin}\n\n*[ ⚠ ️] ᴜsᴀʀ ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏʟᴏ ᴄᴜᴀɴᴅᴏ sᴇ ᴛʀᴀᴛᴇ ᴅᴇ ᴜɴᴀ ᴇᴍᴇʀɢᴇɴᴄɪᴀ*`.trim();
conn.sendMessage(m.chat, { text: text, mentions: participants.map(a => a.id) }, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'infogrupo' || command == 'groupinfo') {
if (!m.isGroup) return m.reply(info.group);  
const pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => null) || './src/avatar_contact.png';
const {welcome, antilink, antiFake, antiArabe, detect, autosticker, antiNsfw, modeadmin} = global.db.data.chats[m.chat];
const groupAdmins = participants.filter((p) => p.admin);
const listAdmin = groupAdmins.map((v, i) => `${i + 1} @${v.id.split('@')[0]}`).join('\n ');
const owner = groupMetadata.owner || groupAdmins.find((p) => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net';
const text = `╭━━[ .⋅ ɪɴғᴏ ᴅᴇ ɢʀᴜᴘᴏ ⋅]━━━⬣ 
*🔸️ ɪᴅ:*
• ${groupMetadata.id}

*🔸️ ɴᴏᴍʙʀᴇ* : 
• ${groupMetadata.subject}

*🔸️ ᴍɪᴇᴍʙʀᴏs* :
• ${participants.length} Participantes

*🔸️ ᴄʀᴇᴀᴅᴏʀ ᴅᴇʟ ɢʀᴜᴘᴏ:*
• @${owner.split('@')[0]}

*🔸️ ᴀᴅᴍɪɴs:*
 ${listAdmin}

*🔸️ ᴄᴏɴғɪɢᴜʀᴀᴄɪᴏɴ ᴅᴇʟ ɢʀᴜᴘᴏ:*
• Welcome: ${welcome ? '✅' : '❌'}
• Antilink: ${antilink ? '✅' : '❌'}
• Antifake: ${antiFake ? '✅' : '❌'}
• Antiarabe : ${antiArabe ? '✅' : '❌'}
• Detect: ${detect ? '✅' : '❌'}
• Autostickers: ${autosticker ? '✅' : '❌'}
• modocaliente: ${antiNsfw ? '✅' : '❌'}
• modoadmins: ${modeadmin ? '✅' : '❌'}

*🔸️ ᴅᴇsᴄʀɪᴘᴄɪᴏɴ* :
• ${groupMetadata.desc?.toString() || 'desconocido'}`.trim();
conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, {mentions: [...groupAdmins.map((v) => v.id), owner]})}

if (command == 'warn' || command == 'advertencia') {
if (!m.isGroup) return m.reply(info.group);  
if (!isBotAdmins) return m.reply(info.botAdmin);  
if (!isGroupAdmins) return m.reply(info.admin)
let war = global.maxwarn 
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
else who = m.chat
if (!who) return m.reply(`[ ⚠️ ] ᴇᴛɪǫᴜᴇᴛᴀ/ᴍᴇɴᴄɪᴏɴᴀ ᴀ ᴀʟɢᴜɪᴇɴ\n\n📌 ᴇᴊᴇᴍᴘʟᴏ : ${prefix + command} @user`) 
if (!(who in global.db.data.users)) return m.reply(`✳️ ᴇʟ ᴜsᴜᴀʀɪᴏ ɴᴏ sᴇ ᴇɴᴄᴜᴇɴᴛʀᴀ ᴇɴ ᴍɪ ʙᴀsᴇ ᴅᴇ ᴅᴀᴛᴏs`)  
let name = conn.getName(m.sender)
let warn = global.db.data.users[who].warn
if (warn < war) {
global.db.data.users[who].warn += 1
conn.sendMessage(m.chat, { text: `╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┝ ⚠️ *𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝙰𝙳𝚅𝙴𝚁𝚃𝙸𝙳𝙾* ⚠️
┊┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┊ • *𝚄𝚜𝚞𝚊𝚛𝚒𝚘:* @${who.split`@`[0]}
┊ • *𝙰𝚍𝚖𝚒𝚗𝚜:* ${name}
┊ • *𝙰𝚍𝚟𝚎𝚛𝚝𝚎𝚗𝚌𝚒𝚊:* ${warn + 1}/${war}
┊ • *𝚁𝚊𝚣𝚘𝚗:* 🫵🏾 ${text}
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈`, mentions: [who]}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
await delay(2000)
m.reply(`⚠️ *𝙰𝙳𝚅𝙴𝚁𝚃𝙴𝙽𝙲𝙸𝙰* ⚠️
𝚁𝚎𝚌𝚒𝚋𝚒𝚜𝚝𝚎 𝚞𝚗𝚊 𝚊𝚍𝚟𝚎𝚛𝚝𝚎𝚗𝚌𝚒𝚊 𝚍𝚎 𝚞𝚗 𝚊𝚍𝚖𝚒𝚗

• *𝙰𝚍𝚟𝚎𝚛𝚝𝚎𝚗𝚌𝚒𝚊:* ${warn + 1}/${war} 
𝚜𝚒 𝚛𝚎𝚌𝚒𝚋𝚎𝚜 *${war}* 𝚊𝚍𝚟𝚎𝚛𝚝𝚎𝚗𝚌𝚒𝚊𝚜 𝚜𝚎𝚛𝚊𝚜 𝚎𝚕𝚒𝚖𝚒𝚗𝚊𝚍𝚘 𝚊𝚞𝚝𝚘𝚖𝚊𝚝𝚒𝚌𝚊𝚖𝚎𝚗𝚝𝚎 𝚍𝚎𝚕 𝚐𝚛𝚞𝚙𝚘`, who)
} else if (warn == war) {
global.db.data.users[who].warn = 0
m.reply(`⛔ 𝙴𝚕 𝚞𝚜𝚞𝚊𝚛𝚒𝚘 𝚜𝚞𝚙𝚎𝚛𝚘 𝚕𝚊𝚜 *${war}* 𝚊𝚍𝚟𝚎𝚛𝚝𝚎𝚗𝚌𝚒𝚊𝚜 𝚙𝚘𝚛 𝚕𝚘 𝚝𝚊𝚗𝚝𝚘 𝚜𝚎𝚛𝚊 𝚎𝚕𝚒𝚖𝚒𝚗𝚊𝚍𝚘`)
await delay(3000)
await conn.groupParticipantsUpdate(m.chat, [who], 'remove')}}

if (command == 'unwarn' || command == 'quitardvertencia') {
if (!m.isGroup) return m.reply(info.group);  
if (!isBotAdmins) return m.reply(info.botAdmin);  
if (!isGroupAdmins) return m.reply(info.admin)
let who 
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
else who = m.chat
if (!who) return m.reply(`[ ⚠️ ] ᴇᴛɪǫᴜᴇᴛᴀ/ᴍᴇɴᴄɪᴏɴᴀ ᴀ ᴀʟɢᴜɪᴇɴ`) 
if (!(who in global.db.data.users)) return m.reply(`✳️ ᴇʟ ᴜsᴜᴀʀɪᴏ ɴᴏ sᴇ ᴇɴᴄᴜᴇɴᴛʀᴀ ᴇɴ ᴍɪ ʙᴀsᴇ ᴅᴇ ᴅᴀᴛᴏs`) 
let warn = global.db.data.users[who].warn
if (warn > 0) {
global.db.data.users[who].warn -= 1
m.reply(`╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┝ ⚠️ *𝚂𝙴 𝚀𝚄𝙸𝚃𝙾 𝚄𝙽𝙰 𝙰𝙳𝚅𝙴𝚁𝚃𝙴𝙽𝙲𝙸𝙰* ⚠️ 
┊┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┊ • ᴡᴀʀɴ: *-1*
┊ • ᴀᴅᴠᴇʀᴛᴇɴᴄɪᴀs ᴛᴏᴛᴀʟ: *${warn - 1}*
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈`)
await delay(3000)
m.reply(`🔸️ ᴜɴ ᴀᴅᴍɪɴ ʀᴇᴅᴜᴊᴏ sᴜ ᴀᴅᴠᴇʀᴛᴇɴᴄɪᴀ, ᴀʜᴏʀᴀ ᴛɪᴇɴᴇs *${warn - 1}*`, who)
} else if (warn == 0) {
m.reply('🔸️ ᴇʟ ᴜsᴜᴀʀɪᴏ ɴᴏ ᴛɪᴇɴᴇ ɴɪɴɢᴜɴᴀ ᴀᴅᴠᴇʀᴛᴇɴᴄɪᴀ')}}

if (command == 'listwarn') {
const adv = Object.entries(global.db.data.users).filter((user) => user[1].warn);
const warns = global.db.data.users.warn;
const user = global.db.data.users;
const imagewarn = './src/warn.jpg';
const caption = `⚠️ 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂 𝙰𝙳𝚅𝙴𝚁𝚃𝙸𝙳𝙾𝚂\n 
╔═══════════════════·•
║ *𝚃𝚘𝚝𝚊𝚕 : ${adv.length} 𝚄𝚜𝚞𝚊𝚛𝚒𝚘𝚜* ${adv ? '\n' + adv.map(([jid, user], i) => `
║
║ 1.- ${isCreator ? '@' + jid.split`@`[0] : jid} *(${user.warn}/4)*\n║\n║ - - - - - - - - -`.trim()).join('\n') : ''}
╚══════════════════·•`;
conn.sendMessage(m.chat, {text: caption, contextInfo:{ mentionedJid: [...caption.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net')}}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'enline' || command == 'online' || command == 'listonine' || command == 'listaenlinea' || command == 'enlinea' || command == 'listonline') {
if (!m.isGroup) return m.reply(info.group);  
let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
let online = [...Object.keys(store.presences[id]), numBot]
conn.sendText(m.chat, '*ESTA ONLINE 😎 :*\n\n' + online.map(v => '❑ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })}}

module.exports = { grupo }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})

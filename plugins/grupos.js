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
const getFileBuffer = async (mediakey, MediaType) => {
const stream = await downloadContentFromMessage(mediakey, MediaType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk]) }
return buffer}

async function grup(conn, m, args, isBotAdmins, isGroupAdmins, prefix, command, text) {
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
    
async function del(conn, m, isBotAdmins, isGroupAdmins) {    
if (!m.quoted) throw false
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isGroupAdmins) return m.reply(info.admin)
let { chat, fromMe, id} = m.quoted
let delet = m.message.extendedTextMessage.contextInfo.participant
let bang = m.message.extendedTextMessage.contextInfo.stanzaId
return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
}

async function join(conn, m, isCreator, text, args) {    
if (!isCreator) return m.reply(info.owner)
if (!text) return m.reply(`*Y EL LINK DEL GRUPO?*`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return m.reply(`*Link incorrecto!*`)
m.reply(`*YA ME UNIR 😼*`)
let result = args[0].split('https://chat.whatsapp.com/')[1]
await conn.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => m. reply(jsonformat(err)))
}

async function setpp(conn, m, isBotAdmins, isGroupAdmins, quoted, prefix, command, mime, args, from) {   
if (!m.isGroup) return reply(info.group) 
if (!isBotAdmins) return reply(info.botAdmin)
if (!isGroupAdmins) return reply(info.admin)
if (!quoted) return reply(`*⚠️Y la imagen?*`)
if (!/image/.test(mime)) return reply(`*⚠️ Responde a una con:* ${prefix + command}`)
if (/webp/.test(mime)) return reply(`*⚠️Responde a una  Image con :* ${prefix + command}`)
var mediz = await conn. downloadAndSaveMediaMessage(quoted, 'ppgc.jpeg')
if (args[0] == `full`) {
var { img } = await generateProfilePicture(mediz)
await conn.query({tag: 'iq', attrs: {to: m.chat, type:'set', xmlns: 'w:profile:picture' }, content: [ {tag: 'picture', attrs: { type: 'image' }, content: img } ]}) 
fs.unlinkSync(mediz)
reply(`*✅Exito*`)
} else {
var memeg = await conn.updateProfilePicture(m.chat, { url: mediz })
fs.unlinkSync(mediz)
reply(`*✅Exito*`)}}

async function hide(conn, m, isBotAdmins, isGroupAdmins, q, participants) {   
if (!m.isGroup) return m.reply(info.group) 
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isGroupAdmins) return m.reply(info.admin)
if (!q) return m.reply(`*Y el texto?*`)
conn.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })}

async function setna(conn, m, isBotAdmins, isGroupAdmins, text) {   
if (!m.isGroup) return m.reply(info.group) 
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return m.reply('*⚠️ Ingresa el texto*')
await conn.groupUpdateSubject(m.chat, text)
await m.reply(`*✅El nombre del grupo se cambio correctamente*`)}

async function setde(conn, m, isBotAdmins, isGroupAdmins, text) {   
if (!m.isGroup) return m.reply(info.group) 
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return m.reply('*⚠️ Ingresa el texto*')
await conn.groupUpdateDescription(m.chat, text)
await m.reply(`*✅La descripción del grupo se cambio con éxito*`)}

async function add(conn, m, isBotAdmins, isGroupAdmins, text, sender, prefix) {   
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (!m.isGroup) return m.reply(info.group);  
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return m.reply(`*[ ⚠️ ] INGRESA EL NÚMERO DEL LA PERSONA QUE QUIERA AGREGA*\n*EJEMPLO:*\n${prefix}add +5244446577`)
if (text.includes('+')) return m.reply(`*⚠️ INGRESA EL NUMERO SIN EL (+)*`)
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group)
await conn.sendMessage(text+'@s.whatsapp.net', {text: `≡ *INVITACIÓN*\n\nHola un usuario te invito a unirte a este grupos\n\n${link}`, mentions: [m.sender]})
m.reply(`*✅Listo*`)}

async function k(conn, m, isBotAdmins, isGroupAdmins, quated, text, sender) {   
if (!m.isGroup) return m.reply(info.group) 
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return m.reply(`[ ⚠️ ] A QUIEN CARAJO ELIMINO? ETIQUETA ALGUN USUARIO NO SOY ADIVINO 😯`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
conn.groupParticipantsUpdate(m.chat, [users], 'remove')}

async function p(conn, m, isBotAdmins, isGroupAdmins, quoted, sender) {   
if (!m.isGroup) return m.reply(info.group) 
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isGroupAdmins) return m.reply(info.admin)
if (!m.quoted) return m.reply(`*[ ⚠️ ] A QUIEN LE DOY ADMIN? ETIQUETA A LA PERSONA O RESPONDE A SUS MENSAJES*`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))}

async function d(conn, m, isBotAdmins, isGroupAdmins, quoted, sender) {   
if (!m.isGroup) return m.reply(info.group) 
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isGroupAdmins) return m.reply(info.admin)
if (!m.quoted) return m.reply(`*[ ⚠️ ] A QUIEN LE QUITO ADMINS? ETIQUETA A LA PERSONA O RESPONDE A SUS MENSAJES*`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))}

async function link(conn, m, isBotAdmins){   
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (!m.isGroup) return m.reply(info.group) 
if (!isBotAdmins) return m.reply(info.botAdmin)
let response = await conn.groupInviteCode(m.chat)
conn.sendText(m.chat, `https://chat.whatsapp.com/${response}`, m, { detectLink: true })}

async function ban(conn, m, isBotAdmins, isGroupAdmins, text, args, prefix, command){   
if (!m.isGroup) return m.reply(info.group) 
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return m.reply(`*Accion mal usaba*\n\n*Use de esta forma:*\n*${prefix + command} on*\n*${prefix + command} off*`)
if (args[0] === "on") {
if (db.data.chats[m.chat].ban) return m.reply(`*Ya esta baneado este chat*`)
db.data.chats[m.chat].ban = true
m.reply(`*BOT OFF*`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].ban) return m.reply(`*Este chat ya esta desbaneado*`)
db.data.chats[m.chat].ban = false
m.reply(`*BOT ONLINE YA ESTOY DISPONIBLE ✅*`)}}

async function tag(conn, m, isBotAdmins, isGroupAdmins, participants, q){   
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (!m.isGroup) return m.reply(info.group) 
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isGroupAdmins) return m.reply(info.admin)
let teks = `❑ ━〔 *📢 ＩＮＶＯＣＡＣＩＯ́Ｎ 📢* 〕━ ❑\n\n`
teks += `❑ Mensaje:  ${q ? q : 'Active perra'}\n\n`
for (let mem of participants) {
teks += `➥ @${mem.id.split('@')[0]}\n`
}
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })}

async function on(conn, m, isBotAdmins, isGroupAdmins, text, prefix, command, args){   
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (!m.isGroup) return m.reply(info.group)
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return m.reply(`*Use de esta forma ejemplo:*\n*${prefix + command} on*\n*${prefix + command} off*`)
if (args[0] === "on") {
if (!global.db.data.chats[m.chat].detect) 
if (!global.db.data.chats[m.chat].antilink) 
if (!global.db.data.chats[m.chat].audios) 
if (!global.db.data.chats[m.chat].welcome)
if (!global.db.data.chats[m.chat].modeadmin)
if (!global.db.data.chats[m.chat].antifake)
if (!global.db.data.chats[m.chat].antiarabe)
global.db.data.chats[m.chat].detect = true
global.db.data.chats[m.chat].antilink = true
global.db.data.chats[m.chat].audios = true
global.db.data.chats[m.chat].welcome = true
global.db.data.chats[m.chat].modeadmin = true
global.db.data.chats[m.chat].antifake = true
global.db.data.chats[m.chat].antiarabe = true
m.reply(`*✅El ${command} se activo con exito*`)
} else if (args[0] === "off") {
if (!global.db.data.chats[m.chat].detect) 
if (!global.db.data.chats[m.chat].antilink)
if (!global.db.data.chats[m.chat].audios) 
if (!global.db.data.chats[m.chat].welcome) 
if (!global.db.data.chats[m.chat].modeadmin)
if (!global.db.data.chats[m.chat].antifake)
if (!global.db.data.chats[m.chat].antiarabe)
global.db.data.chats[m.chat].detect = false
global.db.data.chats[m.chat].antilink = false
global.db.data.chats[m.chat].audios = false
global.db.data.chats[m.chat].welcome = false
global.db.data.chats[m.chat].modeadmin = false
global.db.data.chats[m.chat].antifake = false
global.db.data.chats[m.chat].antiarabe = false
m.reply(`*${command} desactivado!*`)}}

async function on2(conn, m, isCreator, text, prefix, command, args){   
if (!isCreator) return m.reply(info.owner)
if (!text) return m.reply(`*Use de esta forma ejemplo:*\n*${prefix + command} on*\n*${prefix + command} off*`)
if (args[0] === "on") {
if (db.data.chats[m.chat].modojadibot)
if (db.data.settings[numBot].anticall)
if (db.data.settings[numBot].antiprivado)
db.data.chats[m.chat].modojadibot = true
db.data.settings[numBot].anticall = true
db.data.settings[numBot].antiprivado = true
m.reply(`*✅El ${command} se activo con exito*`)
} else if (args[0] === "off") {
if (db.data.chats[m.chat].modojadibot)
if (db.data.settings[numBot].anticall)
if (db.data.settings[numBot].antiprivado)
db.data.settings[numBot].anticall = false
db.data.chats[m.chat].modojadibot = false
db.data.settings[numBot].antiprivado = false
m.reply(`*${command} desactivado!*`)}}

module.exports = {grup, del, join, setpp, hide, setna, setde, add, k, p, d, link, ban, tag, on, on2}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
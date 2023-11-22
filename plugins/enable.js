require('../main.js') 
const fs = require("fs") 
const path = require("path")
const chalk = require("chalk");
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom } = require('../libs/fuctions.js'); 

async function enable(m, command, isGroupAdmins, text, command, args, isBotAdmins, isGroupAdmins, isCreator) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (command == 'welcome' || command == 'bienvenida') {
if (!m.isGroup) return m.reply(info.group)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return m.reply(`*Use de esta forma ejemplo:*\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*`)
if (args[0] === "on") {
global.db.data.chats[m.chat].welcome = true
m.reply(`*✅El ${command} se activo con exito*`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].welcome = false
m.reply(`*🟢 ${command} esta desactivado!*`)}}

if (command == 'antilink' || command == 'antienlace') {
if (!m.isGroup) return m.reply(info.group)
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return m.reply(`*Use de esta forma ejemplo:*\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*`)
if (args[0] === "on") {
global.db.data.chats[m.chat].antilink = true
m.reply(`*Atención a todos los miembros activos de este grupo 📣*\n\n*El antilink esta activo*\n\n*Y solo los admins de este grupo podran pasar el enlace*\n\nSi algun participante que no es admin envía un enlace de otro grupo sera expulsado de este grupo de inmediato`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].antilink = false
m.reply(`*🟢 ${command} esta desactivado!*`)}}

if (command == 'antifake' || command == 'antiFake') {
if (!m.isGroup) return m.reply(info.group)
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return m.reply(`*Use de esta forma ejemplo:*\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*`)
if (args[0] === "on") {
global.db.data.chats[m.chat].antiFake = true
m.reply(`*Atención a todos los miembros activos de este grupo 📣*\n\n*El ${command} esta activo*\n\n⚠️ *Los cual el grupo no esta permitido ingreso de numero fake (virtuales), seran explusado automáticamente del Grupo...*`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].antiFake = false
m.reply(`*🟢 ${command} esta desactivado!*`)}}

if (command == 'antiarabe' || command == 'antiArabe') {
if (!m.isGroup) return m.reply(info.group)
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return m.reply(`*Use de esta forma ejemplo:*\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*`)
if (args[0] === "on") {
global.db.data.chats[m.chat].antiArabe = true
m.reply(`*Atención a todos los miembros activos de este grupo 📣*\n\n*El ${command} esta activo*\n\n⚠️ *Los cual el grupo no esta permitido ingreso de numero arabe (+212, +91, +92, etc), seran explusado automáticamente del Grupo...*`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].antiArabe = false
m.reply(`*🟢 ${command} esta desactivado!*`)}}

if (command == 'autodetect' || command == 'detect') {
if (!m.isGroup) return m.reply(info.group)
if (!isGroupAdmins) return m.reply(info.admin)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return m.reply(`*Use de esta forma ejemplo:*\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*`)
if (args[0] === "on") {
global.db.data.chats[m.chat].detect = true
m.reply(`*✅El ${command} se activo con exito*`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].detect = false
m.reply(`*🟢 ${command} esta desactivado!*`)}}

if (command == 'audios') {
if (!text) return m.reply(`*Use de esta forma ejemplo:*\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*`)
if (args[0] === "on") {
global.db.data.chats[m.chat].audios = true
m.reply(`*✅ ${command} se activó con éxito*`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].audios = false
m.reply(`*🟢 ${command} esta desactivado!*`)}}

if (command == 'autosticker' || command == 'stickers') {
if (!text) return m.reply(`*Use de esta forma ejemplo:*\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*`)
if (args[0] === "on") {
global.db.data.chats[m.chat].autosticker = true
m.reply(`*✅ ${command} se activó con éxito*`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].autosticker = false
m.reply(`*🟢 ${command} esta desactivado!*`)}}

if (command == 'modocaliente' || command == 'antinsfw') {
if (!m.isGroup) return m.reply(info.group)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return m.reply(`*Use de esta forma ejemplo:*\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*`)
if (args[0] === "on") {
global.db.data.chats[m.chat].antiNsfw = true
m.reply(`*✅ ${command} se activó con éxito*`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].antiNsfw = false
m.reply(`*🟢 ${command} esta desactivado!*`)}}

if (command == 'modoadmin' || command == 'soloadmin' || command == 'modoadmins') {
if (!m.isGroup) return m.reply(info.group)
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return m.reply(`*Use de esta forma ejemplo:*\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*`)
if (args[0] === "on") { 
global.db.data.chats[m.chat].modeadmin = true
m.reply(`*✅ ${command} se activó con éxito*\n\nEl Bot solo responderá a los admins del grupo.`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].modeadmin = false
m.reply(`*🟢 ${command} esta desactivado!*\n\nAhora el bot funciona para todos los participante del grupo 🥳`)}}

if (command == 'antiprivado' || command == 'antipv') {
if (!isCreator) return m.reply(info.owner)
if (!text) return m.reply(`*Use de esta forma ejemplo:*\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*`)
if (args[0] === "on") {
global.db.data.chats[m.chat].antiprivado = true
m.reply(`*✅ ${command} se activó con éxito*`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].antiprivado = false
m.reply(`*🟢 ${command} esta desactivado!*`)}}

if (command == 'anticall' || command == 'antillamada') {
if (!isCreator) return m.reply(info.owner)
if (!text) return m.reply(`*Use de esta forma ejemplo:*\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*`)
if (args[0] === "on") {
global.db.data.chats[m.chat].anticall = true
m.reply(`*✅ ${command} se activó con éxito*`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].anticall = false
m.reply(`*🟢 ${command} esta desactivado!*`)}}

if (command == 'modojadibot' || command == 'jadibot') {
if (!isCreator) return m.reply(info.owner)
if (!text) return m.reply(`*Use de esta forma ejemplo:*\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*`)
if (args[0] === "on") {
global.db.data.chats[m.chat].jadibot = true
m.reply(`*✅ ${command} se activó con éxito*`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].jadibot = false
m.reply(`*🟢 ${command} esta desactivado!*`)}}

if (command == 'autoread' || command == 'autovisto') {
if (!isCreator) return m.reply(info.owner)
if (!text) return m.reply(`*Use de esta forma ejemplo:*\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*`)
if (args[0] === "on") {
global.db.data.settings[conn.user.jid].autoread = false
//conn.autoread = false
m.reply(`*✅ ${command} se activó con éxito*`)
} else if (args[0] === "off") {
global.db.data.settings[conn.user.jid].autoread = true
//conn.autoread = true
m.reply(`*🟢 ${command} esta desactivado!*`)}}

if (command == 'antispam') {
if (!isCreator) return m.reply(info.owner)
if (!text) return m.reply(`*Use de esta forma ejemplo:*\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*`)
if (args[0] === "on") {
global.db.data.chats[m.chat].antispam = true
m.reply(`*✅ ${command} se activó con éxito*`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].antispam = false
m.reply(`*🟢 ${command} esta desactivado!*`)}}

if (command == 'chatbot' || command == 'simsimi') {
if (!m.isGroup) return m.reply(info.group)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return m.reply(`*Use de esta forma ejemplo:*\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*`)
if (args[0] === "on") {
global.db.data.chats[m.chat].simi = true
m.reply(`*✅ ${command} se activó con éxito*`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].simi = false
m.reply(`*🟢 ${command} esta desactivado!*`)}}

if (command == 'autolevelup' || command == 'autonivel') {
if (!m.isGroup) return m.reply(info.group)
if (!text) return m.reply(`*Use de esta forma ejemplo:*\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*`)
if (args[0] === "on") {
global.db.data.chats[m.chat].autolevelup = true
m.reply(`*✅ ${command} se activó con éxito*`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].autolevelup = false
m.reply(`*🟢 ${command} esta desactivado!*`)}}}

module.exports = { enable }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
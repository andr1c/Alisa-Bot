require('../main.js') 
const fs = require("fs") 
const path = require("path")
const chalk = require("chalk");
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom } = require('../libs/fuctions.js'); 

async function on(isGroupAdmins, text, command, args, m) {
if (!m.isGroup) return m.reply(info.group)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return m.reply(`*Use de esta forma ejemplo:*\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*`)
if (args[0] === "on") {
global.db.data.chats[m.chat].welcome = true
m.reply(`*✅El ${command} se activo con exito*`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].welcome = false
m.reply(`*🟢 ${command} esta desactivado!*`)}}

async function on1(isBotAdmins, isGroupAdmins, text, command, args, m) {
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

async function on2(isBotAdmins, isGroupAdmins, text, command, args, m) {
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

async function on3(isBotAdmins, isGroupAdmins, text, command, args, m) {
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

async function on4(isBotAdmins, isGroupAdmins, text, command, args, m) {
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

async function on5(text, command, args, m) {
if (!text) return m.reply(`*Use de esta forma ejemplo:*\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*`)
if (args[0] === "on") {
global.db.data.chats[m.chat].audios = true
m.reply(`*✅ ${command} se activó con éxito*`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].audios = false
m.reply(`*🟢 ${command} esta desactivado!*`)}}

async function on6(text, command, args, m) {
if (!text) return m.reply(`*Use de esta forma ejemplo:*\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*`)
if (args[0] === "on") {
global.db.data.chats[m.chat].autosticker = true
m.reply(`*✅ ${command} se activó con éxito*`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].autosticker = false
m.reply(`*🟢 ${command} esta desactivado!*`)}}

async function on7(isGroupAdmins, text, command, args, m) {
if (!m.isGroup) return m.reply(info.group)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return m.reply(`*Use de esta forma ejemplo:*\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*`)
if (args[0] === "on") {
global.db.data.chats[m.chat].antiNsfw = true
m.reply(`*✅ ${command} se activó con éxito*`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].antiNsfw = false
m.reply(`*🟢 ${command} esta desactivado!*`)}}

async function on8(isBotAdmins, isGroupAdmins, text, command, args, m) {
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

async function on9(isCreator, text, command, args, m) {
if (!isCreator) return m.reply(info.owner)
if (!text) return m.reply(`*Use de esta forma ejemplo:*\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*`)
if (args[0] === "on") {
global.db.data.chats[m.chat].antiprivado = true
m.reply(`*✅ ${command} se activó con éxito*`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].antiprivado = false
m.reply(`*🟢 ${command} esta desactivado!*`)}}

async function on10(isCreator, text, command, args, m) { 
if (!isCreator) return m.reply(info.owner)
if (!text) return m.reply(`*Use de esta forma ejemplo:*\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*`)
if (args[0] === "on") {
global.db.data.chats[m.chat].anticall = true
m.reply(`*✅ ${command} se activó con éxito*`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].anticall = false
m.reply(`*🟢 ${command} esta desactivado!*`)}}

async function on11(isCreator, text, command, args, m) {
if (!isCreator) return m.reply(info.owner)
if (!text) return m.reply(`*Use de esta forma ejemplo:*\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*`)
if (args[0] === "on") {
global.db.data.chats[m.chat].jadibot = true
m.reply(`*✅ ${command} se activó con éxito*`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].jadibot = false
m.reply(`*🟢 ${command} esta desactivado!*`)}}

async function on12(isCreator, text, command, args, m, conn) {
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

async function on13(isCreator, text, command, args, m) {
if (!isCreator) return m.reply(info.owner)
if (!text) return m.reply(`*Use de esta forma ejemplo:*\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*`)
if (args[0] === "on") {
global.db.data.chats[m.chat].antispam = true
m.reply(`*✅ ${command} se activó con éxito*`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].antispam = false
m.reply(`*🟢 ${command} esta desactivado!*`)}}

async function on14(text, command, args, m) {
if (!text) return m.reply(`*Use de esta forma ejemplo:*\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*`)
if (args[0] === "on") {
global.db.data.chats[m.chat].simi = true
m.reply(`*✅ ${command} se activó con éxito*`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].simi = false
m.reply(`*🟢 ${command} esta desactivado!*`)}}

async function on15(text, command, args, m) {
if (!m.isGroup) return m.reply(info.group)
if (!text) return m.reply(`*Use de esta forma ejemplo:*\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*`)
if (args[0] === "on") {
global.db.data.chats[m.chat].autolevelup = true
m.reply(`*✅ ${command} se activó con éxito*`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].autolevelup = false
m.reply(`*🟢 ${command} esta desactivado!*`)}}

module.exports = {on, on1, on2, on3, on4, on5, on6, on7, on8, on9, on10, on11, on12, on13, on14, on15}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
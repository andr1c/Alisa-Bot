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

const menu = (conn, prefix, pushname, sender, m, fkontak) => {
let user = global.db.data.users[m.sender]
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
const date = moment.tz('America/Bogota').format('DD/MM/YYYY')
const time = moment.tz('America/Argentina/Buenos_Aires').format('LT')
/*const d = new Date(new Date + 3600000);
const locale = 'es';
const week = d.toLocaleDateString(locale, {weekday: 'long'});
const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});*/
let wa = m.key.id.length > 21 ? 'Android' : m.key.id.substring(0, 2) == '3A' ? 'IOS' : 'whatsapp web'
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
let menu = `╔══════ ≪ •❈• ≫ ══════╗
║◤━━━━━ ☆. ∆ .☆ ━━━━━◥
║✾ Hola @${sender.split("@")[0]} ${user.registered === true ? 'ͧͧͧͦꙶͣͤ✓' : ''} 👋🏻
║◤━━━━━ ☆. ∆ .☆ ━━━━━◥
║✾ ᴘʀᴇғɪᴊᴏ: [ ${prefix} ]
║✾ ғᴇᴄʜᴀ: ${date}
║✾ ʜᴏʀᴀ: ${time}
║✾ ᴜsᴜᴀʀɪᴏ : ${Object.keys(global.db.data.users).length}
║✾ ᴀᴄᴛɪᴠɪᴅᴀᴅ : ${runtime(process.uptime())}
║✾ ᴍᴏᴅᴏ : ${conn.public ? 'publico' : 'privado'}
║✾ ${conn.user.id == global.numBot2 ? 'ʙᴏᴛ ᴏғᴄ : ᴇsᴛᴇ ᴇs ᴇʟ ʙᴏᴛ ᴏғᴄ' : `sᴏʏ ᴜɴ sᴜʙʙᴏᴛ ᴅᴇ : @${global.numBot.split`@`[0]}`}
║
║✾ ʟɪᴍɪᴛᴇ : ${user.limit}
║✾ ɴɪᴠᴇʟ : ${user.level}
║✾ ʀᴀɴɢᴏ : ${user.role}
║✾ ᴇxᴘ : ${user.exp}
║✾ ᴄᴏɪɴs : ${user.money}
║ 
║✾ ʀᴇɢɪsᴛʀᴀᴅᴏ : ${rtotalreg} de ${totalreg}
║◤━━━━━ ☆. ∆ .☆ ━━━━━◥
╚══════ ≪ •❈• ≫ ══════╝

\`\`\`🟢 ＩＮＦＯＲＭＡＣＩＯＮ 🟢\`\`\`
\`\`\`♨️ ᴇʟ ʙᴏᴛ ᴇs ɴᴜᴇᴠᴏ ᴛᴏᴅᴀᴠɪᴀ ᴇsᴛᴀ ᴅᴇsᴀʀʀᴏʟʟᴀᴅᴏ,  sɪ ᴘʀᴇsᴇɴᴛᴀ ᴀʟɢᴜɴ ᴘʀᴏʙʟᴇᴍᴀ, ᴄᴏᴍᴜɴɪᴄᴀʀsᴇ ᴄᴏɴ ᴍɪ ᴄʀᴇᴀᴅᴏʀ ᴇsᴄʀɪʙɪʀ #creador\`\`\`

===============================
\`\`\`♨️ ＬＩＳＴＡ ＤＥ ＣＯＭＡＮＤＯ ♨️\`\`\`
\`\`\`ʙᴏᴛ sɪᴍᴘʟᴇ ᴄᴏɴ ᴘᴏᴄᴏs ᴄᴏᴍᴀɴᴅᴏs\`\`\`
===============================

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐ℹ️ ＩＮＦＯＢＯＴ*️⃟ᬽ፝֟━*
├❥ᰰຼ ❏ ${prefix}reg 
├❥ᰰຼ _(registrarte para poder usar el bot)_
├❥ᰰຼ ❏ ${prefix}unreg
├❥ᰰຼ _(para borrar sus registro)_
├❥ᰰຼ ❏ ${prefix}myns
├❥ᰰຼ _(para vez tu numero del serie)_
├❥ᰰຼ ❏ ${prefix}estado 
├❥ᰰຼ _(comprueba el estado del bot)_
├❥ᰰຼ ❏ ${prefix}menu2
├❥ᰰຼ ❏ ${prefix}audios
├❥ᰰຼ ❏ ${prefix}ping 
├❥ _(Velocidad del bot)_
├❥ᰰຼ ❏ ${prefix}grupos 
├❥ _(unirte al los grupos oficiales y divirte con el bot 😸)_
├❥ᰰຼ ❏ ${prefix}join _(solicita un bot para tu grupo)_
├❥ᰰຼ ❏ ${prefix}owner
├❥ᰰຼ ❏ ${prefix}creador
├❥ᰰຼ _(te envia los contactos del mi creador)_
├❥ᰰຼ ❏ ${prefix}instalarbot (pronto) 
├❥ᰰຼ ❏ ${prefix}report 
├❥ᰰຼ _(reporta comando con falla/errores/ortografía, etc)_
*╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫*

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐🤖ＪＡＤＩＢＯＴ*️⃟ᬽ፝֟━*
├❥ᰰຼ  *(Este serbot esta modo beta)*
├ *✧･ﾟ: *✧･ﾟ:*✧･ﾟ: *✧･ﾟ:*✧･ﾟ: *✧･ﾟ:
├❥ᰰຼ ❏ ${prefix}serbot
├❥ᰰຼ ❏ ${prefix}qr
├❥ _(General un qr para convertirte el un sub bot)_
├❥ᰰຼ ❏ ${prefix}jadibot --code
├❥ᰰຼ ❏ ${prefix}sercode
├❥ _(Nueva forma de hacerte un subbot beta)_
├❥ᰰຼ ❏ ${prefix}bots
├❥ _(comprueba si hay sub bot conectado)_
├❥ᰰຼ ❏ ${prefix}stop
├❥ᰰຼ ❏ ${prefix}deljadibot
├❥ᰰຼ _(Comando solo para los sub bot)_
*╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫*

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐🔄ＤＥＳＣＡＲＧＡ*️⃟ᬽ፝֟━*
├❥ᰰຼ ❏ ${prefix}play 
├❥ᰰຼ ❏ ${prefix}play2 
├❥ᰰຼ _(Titulo/nombre de la canción para descargar el audio)_
├❥ᰰຼ ❏ ${prefix}yts 
├❥ᰰຼ  _(buscar los links para descarga el video)_
├❥ᰰຼ ❏ ${prefix}ytmp3
├❥ᰰຼ _(ingresa el link para descargar el audio)_
├❥ᰰຼ ❏ ${prefix}ytmp4
├❥ᰰຼ _(ingresa el link para descargar el video)_
├❥ᰰຼ ❏ ${prefix}gitclone
├❥ᰰຼ _(ingresa el link del GitHub para descargar el repositorio)_
├❥ᰰຼ ❏ ${prefix}tiktok
├❥ᰰຼ (Ingresa el link del tiktok para descargar el video)
├❥ᰰຼ ❏ ${prefix}igstalk
├❥ᰰຼ _(Buscar algun usuarios de Instagram para vez sus perfil)_
├❥ᰰຼ ❏ ${prefix}facebook
├❥ᰰຼ ❏ ${prefix}fb
├❥ᰰຼ _(descarga video de Facebook)_
├❥ᰰຼ ❏ ${prefix}instagram
├❥ᰰຼ ❏ ${prefix}ig
├❥ᰰຼ _(descarga video de Instagram)_
├❥ᰰຼ ❏ ${prefix}mediafire
├❥ᰰຼ (descarga archivo de mediafire)_
*╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫*

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*🔰⃐ＧＲＵＰＯＳ*️⃟ᬽ፝֟━*
├❥ᰰຼ ❏ ${prefix}welcome _(on/off)_
├❥ᰰຼ ❏ ${prefix}antilink _(on/off)_
├❥ᰰຼ ❏ ${prefix}antienlace _(on/off)_
├❥ᰰຼ ❏ ${prefix}antifake _(on/off)_
├❥ᰰຼ ❏ ${prefix}antiarabe _(on/off)_
├❥ᰰຼ ❏ ${prefix}autosticker _(on/off)_
├❥ᰰຼ ❏ ${prefix}detect _(on/off)_
├❥ᰰຼ ❏ ${prefix}autodetect _(on/off)_
├❥ᰰຼ ❏ ${prefix}antinsfw _(on/off)_
├❥ᰰຼ ❏ ${prefix}modocaliente _(on/off)_
├❥ᰰຼ ❏ ${prefix}autosticker _(on/off)_
├❥ᰰຼ ❏ ${prefix}modoadmin _(on/off)_
├❥ᰰຼ ❏ ${prefix}kick _(@tag)_
├❥ᰰຼ ❏ ${prefix}add _(@tag)_
├❥ᰰຼ ❏ ${prefix}invita _(@tag)_
├❥ᰰຼ ❏ ${prefix}promote _(@tag)_
├❥ᰰຼ ❏ ${prefix}demote _(@tag)_
├❥ᰰຼ ❏ ${prefix}infogrupo
├❥ᰰຼ ❏ ${prefix}groupinfo
├❥ᰰຼ ❏ ${prefix}admins _(llama a los admins)_
├❥ᰰຼ ❏ ${prefix}grupo close/open 
├❥ᰰຼ ❏ ${prefix}warn _(@tag)_
├❥ᰰຼ ❏ ${prefix}advertencia _(@tag)_
├❥ᰰຼ ❏ ${prefix}unwarn _(@tag)_
├❥ᰰຼ ❏ ${prefix}quitardvertencia _(@tag)_
├❥ᰰຼ ❏ ${prefix}setppname _(cambia el nombre del grupo)_
├❥ᰰຼ ❏ ${prefix}setdesc _(cambia la descripción del Grupo)_
├❥ᰰຼ ❏ ${prefix}setppgroup _(cambia la foto del Grupo)_
├❥ᰰຼ ❏ ${prefix}anularlink 
├❥ᰰຼ ❏ ${prefix}resetlink _(restablecer el link del grupo)_
├❥ᰰຼ ❏ ${prefix}hidetag _(etiqueta a todos el un mensaje)_
├❥ᰰຼ ❏ ${prefix}tagall 
├❥ᰰຼ ❏ ${prefix}invocar _(etiqueta a todos el una listas)_
├❥ᰰຼ ❏ ${prefix}listonline _(etiquetas a los usuarios que esta activo|online)_
*╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫*

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*🔎⃐ＢＵＳＣＡＤＯＲＥＳ*️⃟ᬽ፝֟━*
├❥ᰰຼ ❏ ${prefix}google 
├❥ᰰຼ _(ingresa nombre de que quiera buscar)_
├❥ᰰຼ ❏ ${prefix}ia 
├❥ᰰຼ _(ingresa el texto de que quiera buscar con la (IA)_
├❥ᰰຼ ❏ ${prefix}imagen
├❥ᰰຼ _ingresa texto de la imagen que quiere buscar_
├❥ᰰຼ ❏ ${prefix}traducir
├❥ᰰຼ _(traducir algun texto)_
├❥ᰰຼ ❏ ${prefix}wallpaper
├❥ᰰຼ _(Buscar imagen del wallpaper)_
├❥ᰰຼ ❏ ${prefix}ss 
├❥ᰰຼ _(ingresa un link para manda captura)_
*╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫*

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐👾ＪＵＥＧＯＳ*️⃟ᬽ፝֟━*
├❥ᰰຼ ❏ ${prefix}simi 
├❥ᰰຼ _(Hablar con el bot)_
├❥ᰰຼ ❏ ${prefix}ppt
├❥ᰰຼ _(juegas un piedra, papel, o tijera)_
├❥ᰰຼ ❏ ${prefix}gay @tag
├❥ᰰຼ ❏ ${prefix}pareja @tag
├❥ᰰຼ ❏ ${prefix}follar @tag
├❥ᰰຼ ❏ ${prefix}topgays
├❥ᰰຼ ❏ ${prefix}topotakus
├❥ᰰຼ ❏ ${prefix}top
├❥ᰰຼ ❏ ${prefix}pregunta
├❥ᰰຼ ❏ ${prefix}verdad
├❥ᰰຼ ❏ ${prefix}reto
├❥ᰰຼ ❏ ${prefix}doxear
├❥ᰰຼ ❏ ${prefix}personalidad
├❥ᰰຼ ❏ ${prefix}racista
├❥ᰰຼ ❏ ${prefix}slot
├❥ᰰຼ ❏ ${prefix}dado
├❥ᰰຼ ❏ ${prefix}piropo
├❥ᰰຼ ❏ ${prefix}fake
├❥ᰰຼ _(Ingresa el texto + tag para joder a alguien con chat fake😹)_
*╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫*

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*🎤 EFECTOS DE AUDIOS*️⃟ᬽ፝֟━*
├❥ᰰຼ *(𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝙰𝚄𝙳𝙸𝙾 𝙾 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉)*
├ *✧･ﾟ: *✧･ﾟ:*✧･ﾟ: *✧･ﾟ:*✧･ﾟ: *✧･ﾟ:
├❥ᰰຼ ❏ ${prefix}bass
├❥ᰰຼ ❏ ${prefix}blown
├❥ᰰຼ ❏ ${prefix}deep
├❥ᰰຼ ❏ ${prefix}earrape
├❥ᰰຼ ❏ ${prefix}fast
├❥ᰰຼ ❏ ${prefix}fat
├❥ᰰຼ ❏ ${prefix}nightcore
├❥ᰰຼ ❏ ${prefix}reverse
├❥ᰰຼ ❏ ${prefix}robot
├❥ᰰຼ ❏ ${prefix}slow
├❥ᰰຼ ❏ ${prefix}smooth
├❥ᰰຼ ❏ ${prefix}squirrel
*╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫*

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐🧧CONVERTIDORES*️⃟ᬽ፝֟━*
├❥ᰰຼ ❏ ${prefix}tourl
├❥ᰰຼ ❏ ${prefix}tts
├❥ᰰຼ ❏ ${prefix}tomp3
├❥ᰰຼ ❏ ${prefix}toimg
├❥ᰰຼ ❏ ${prefix}toaudio
*╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫* 	

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐🥵COMANDO +18*️⃟ᬽ፝֟━*
├❥ᰰຼ  *Activa con (antiNsfw on)*
├ *✧･ﾟ: *✧･ﾟ:*✧･ﾟ: *✧･ﾟ:*✧･ﾟ: *✧･ﾟ:
├❥ᰰຼ ❏ ${prefix}pussy
├❥ᰰຼ ❏ ${prefix}nsfwloli
├❥ᰰຼ ❏ ${prefix}hentai
├❥ᰰຼ ❏ ${prefix}hentai2
├❥ᰰຼ ❏ ${prefix}porno
├❥ᰰຼ ❏ ${prefix}lewd'
├❥ᰰຼ ❏ ${prefix}feed'
├❥ᰰຼ ❏ ${prefix}gasm
├❥ᰰຼ ❏ ${prefix}anal	    	
├❥ᰰຼ ❏ ${prefix}holo	    	
├❥ᰰຼ ❏ ${prefix}tits	    	
├❥ᰰຼ ❏ ${prefix}kuni
├❥ᰰຼ ❏ ${prefix}kiss
├❥ᰰຼ ❏ ${prefix}erok
├❥ᰰຼ ❏ ${prefix}smug
├❥ᰰຼ ❏ ${prefix}solog
├❥ᰰຼ ❏ ${prefix}feetg
├❥ᰰຼ ❏ ${prefix}lewdk    
├❥ᰰຼ ❏ ${prefix}femdom
├❥ᰰຼ ❏ ${prefix}cuddle
├❥ᰰຼ ❏ ${prefix}eroyuri
├❥ᰰຼ ❏ ${prefix}cum	    
├❥ᰰຼ ❏ ${prefix}blowjob
├❥ᰰຼ ❏ ${prefix}holoero
├❥ᰰຼ ❏ ${prefix}erokemo
├❥ᰰຼ ❏ ${prefix}fox_girl
├❥ᰰຼ ❏ ${prefix}futanari
├❥ᰰຼ ❏ ${prefix}wallpaper	   
├❥ᰰຼ *Nota: usarlo baja tu responsabilidad*
*╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫* 	
	
╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⛩️ ⃐RANDOW*️⃟ᬽ፝֟━*
├❥ᰰຼ ❏ ${prefix}memes
├❥ᰰຼ ❏ ${prefix}horny
├❥ᰰຼ ❏ ${prefix}simp
├❥ᰰຼ ❏ ${prefix}lolice
├❥ᰰຼ ❏ ${prefix}comentar
├❥ᰰຼ ❏ ${prefix}comment
├❥ᰰຼ ❏ ${prefix}loli
├❥ᰰຼ ❏ ${prefix}lolivid
├❥ᰰຼ ❏ ${prefix}neko
├❥ᰰຼ ❏ ${prefix}waifu	
├❥ᰰຼ ❏ ${prefix}blackpink
├❥ᰰຼ ❏ ${prefix}akira
├❥ᰰຼ ❏ ${prefix}akiyama
├❥ᰰຼ ❏ ${prefix}anna
├❥ᰰຼ ❏ ${prefix}asuna
├❥ᰰຼ ❏ ${prefix}ayuzawa
├❥ᰰຼ ❏ ${prefix}boruto
├❥ᰰຼ ❏ ${prefix}chiho
├❥ᰰຼ ❏ ${prefix}chitoge
├❥ᰰຼ ❏ ${prefix}deidara
├❥ᰰຼ ❏ ${prefix}erza
├❥ᰰຼ ❏ ${prefix}elaina
├❥ᰰຼ ❏ ${prefix}eba
├❥ᰰຼ ❏ ${prefix}emilia
├❥ᰰຼ ❏ ${prefix}hestia
├❥ᰰຼ ❏ ${prefix}hinata
├❥ᰰຼ ❏ ${prefix}inori
├❥ᰰຼ ❏ ${prefix}isuzu
├❥ᰰຼ ❏ ${prefix}itachi
├❥ᰰຼ ❏ ${prefix}itori
├❥ᰰຼ ❏ ${prefix}kaga
├❥ᰰຼ ❏ ${prefix}kagura
├❥ᰰຼ ❏ ${prefix}kaori':
├❥ᰰຼ ❏ ${prefix}keneki
├❥ᰰຼ ❏ ${prefix}kotori
├❥ᰰຼ ❏ ${prefix}kurumi
├❥ᰰຼ ❏ ${prefix}madara
├❥ᰰຼ ❏ ${prefix}mikasa
├❥ᰰຼ ❏ ${prefix}miku
├❥ᰰຼ ❏ ${prefix}minato
├❥ᰰຼ ❏ ${prefix}naruto
├❥ᰰຼ ❏ ${prefix}nezuko
├❥ᰰຼ ❏ ${prefix}sagiri
├❥ᰰຼ ❏ ${prefix}sasuke
├❥ᰰຼ ❏ ${prefix}sakura
├❥ᰰຼ ❏ ${prefix}'cosplay
*╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫*
             
*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐🪙 ＥＣＯＮＯＭＩＡ*️⃟ᬽ፝֟━*
├❥ᰰຼ ❏ ${prefix}minar _(para minar exp)_
├❥ᰰຼ ❏ ${prefix}robar
├❥ᰰຼ ❏ ${prefix}rob _(roban exp algun usuarios)_
├❥ᰰຼ ❏ ${prefix}trabajar
├❥ᰰຼ ❏ ${prefix}work _(trabajar y ganas exp)_
├❥ᰰຼ ❏ ${prefix}buy _(comprar mas diamante (limit)_
├❥ᰰຼ ❏ ${prefix}bal
├❥ᰰຼ ❏ ${prefix}balace _(para sabes cuanto diamante/exp tiene)_
├❥ᰰຼ ❏ ${prefix}claim
├❥ᰰຼ _(recoger tu recompensa)_
├❥ᰰຼ ❏ ${prefix}lb
├❥ᰰຼ ❏ ${prefix}leaderboard
├❥ᰰຼ ❏ ${prefix}cofre
├❥ᰰຼ ❏ ${prefix}perfil
├❥ᰰຼ ❏ ${prefix}nivel
├❥ᰰຼ ❏ ${prefix}levelup
├❥ᰰຼ ❏ ${prefix}afk 
*╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫*

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐👽ＳＴＩＣＫＥＲ*️⃟ᬽ፝֟━*
├❥ᰰຼ ❏ ${prefix}s
├❥ᰰຼ ❏ ${prefix}sticker 
├❥ᰰຼ ❏ ${prefix}wm
├❥ᰰຼ ❏ ${prefix}attp
├❥ᰰຼ ❏ ${prefix}emojimix
*╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫*

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐👑ＯＷＮＥＲ*️⃟ᬽ፝֟━*
├❥ _(Comando exclusivo para propietario/owner del bot)_
├ *✧･ﾟ: *✧･ﾟ:*✧･ﾟ: *✧･ﾟ:*✧･ﾟ: *✧･ﾟ:
├❥ᰰຼ ❏ ${prefix}anticall _(on/off)_
├❥ᰰຼ ❏ ${prefix}antillamada _(on/off)_
├❥ᰰຼ ❏ ${prefix}antipv _(on/off)_
├❥ᰰຼ ❏ ${prefix}antiprivado _(on/off)_
├❥ᰰຼ ❏ ${prefix}autoread _(on/off)_
├❥ᰰຼ ❏ ${prefix}modojadibot _(on/off)_
├❥ᰰຼ ❏ ${prefix}autoadmin 
├❥ᰰຼ ❏ ${prefix}bc (difusión a todos los chat)
├❥ᰰຼ ❏ ${prefix}bcgc (difusión solo a grupos)
├❥ᰰຼ ❏ ${prefix}setpp (cambia la foto del bot) 
├❥ᰰຼ ❏ ${prefix}public (modo público) 
├❥ᰰຼ ❏ ${prefix}privado (modo privado) 
├❥ᰰຼ ❏ ${prefix}getcase
├❥ᰰຼ ❏ ${prefix}addcase
├❥ᰰຼ ❏ ${prefix}update
├❥ᰰຼ ❏ ${prefix}restart
├❥ᰰຼ ❏ ${prefix}reiniciar
├❥ᰰຼ ❏ $
├❥ᰰຼ ❏ >
├❥ᰰຼ ❏ => 
*╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫*`
conn.sendMessage(m.chat, { text: menu,  
contextInfo:{  
forwardingScore: 9999999,  
isForwarded: true,   
mentions:[sender, global.numBot.split],  
"externalAdReply": {  
"showAdAttribution": true,  
"renderLargerThumbnail": true,  
"title": wm,   
"containsAutoReply": true,  
"mediaType": 1,   
"thumbnail": imagen3,  
"mediaUrl": md, 
"sourceUrl": md, 
}}}, { quoted: fkontak }) 
}

const menu2 = (conn, pushname, m, fkontak) => {

let menu2 = `*Palabras especificas para que el bot interactue con ustedes*

a
Feliz cumpleaños
Pasa pack
Uwu
Siuuu
Vete a la verga
Pasen porno
Hora del sexito
Pongan cuties
Fiesta del admin
Admin party
Viernes
GOOOOD
Alto temazo
Todo bien
Buenos dias
Bot gay
Gracias
Hola
Fua
Corte
Gaspi buenos dias 
Gaspi me saludas
Gaspi y las minitas
Gaspi todo bien
Me quiero suicidar
Gaspi ya no aguanto
Contate algo bot
Sexo
Momento epico
El bot del orto no funciona
Epicardo
Insta de la minita
Una mierda de bot
Ultimo momento
Nefasto
Paraguayo
Bot de mierda
Venezolano
Gaspi corte
Ya me voy a dormir
Calefon
Apurate bot
Un chino
No funciona
Boliviano
Enano
Quien es tu sempai botsito
Me gimes 7u7
Te amo botsito uwu
Onichan
La toca 7w7

_*Ojito escribe tal y como esta en el mensaje*_`
conn.sendMessage(m.chat, { text: menu2}, { quoted: fkontak })}

module.exports = { menu, menu2}

 let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})

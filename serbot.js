//jadibot adartado 
const { default: makeWaSocket, decodeJid, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, generateWAMessage, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto } = require('@whiskeysockets/baileys')   
   const logg = (pino = require("pino"))   
   const { Boom } = require('@hapi/boom')   
   const yargs = require('yargs/yargs')   
   const fs = require('fs')   
   const FileType = require('file-type')   
   const chalk = require('chalk')   
   const path = require('path')   
   const qrcode = require('qrcode')   
   const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom } = require('./libs/fuctions')   
   const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })   
  
   const storetes = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'storetes' }) })   
  
  
   if (global.listJadibot instanceof Array) console.log()   
   else global.listJadibot = []   
  
   const jadibot = async (conn, msg, from, command, prefix) => {   
   const { sendImage, sendMessage } = conn;   
   const { reply, sender } = m;   
   let senderbot = m.sender   
//if (!global.db.data.settings[conn.user.jid].modojadibot) return m.reply(`*[ ⚠️ ] Este comando fue desabilitado por el creador*`)
   if (conn.user.id !== global.numBot2) return m.reply(`⚠️ Este comando solo puede ser usado en un Bot principa\n👉🏻 https://api.whatsapp.com/send/?phone=${global.numBot.split`@`[0]}&text=${prefix + command}&type=phone_number&app_absent=0`) 
   const { state, saveCreds } = await useMultiFileAuthState(path.join(__dirname, `./jadibts/${senderbot.split("@")[0]}`), logg({ level: "silent" }));   
   try {   
   async function startconn() {   
   let { version, isLatest } = await fetchLatestBaileysVersion();   
   const conn = await makeWaSocket({   
   auth: state,   
   printQRInTerminal: true,   
   browser: ['Sub bot', "Opera", "5.0"],   
   logger: logg({ level: "silent" }),   
   version,   
   })   
  
   conn.ev.on('messages.upsert', async chatUpdate => {   
       //console.log(JSON.stringify(chatUpdate, undefined, 2))   
       try {   
       chatUpdate.messages.forEach(async (mek) => {   
       try {   
       //mek = (Object.keys(chatUpdate.messages[0])[0] !== "senderKeyDistributionMessage") ?  chatUpdate.messages[0] : chatUpdate.messages[1]   
  
       if (!mek.message) return   
       //console.log(chatUpdate.type)   
       mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message   
       if (mek.key && mek.key.remoteJid === 'status@broadcast') return   
  
       if (!chatUpdate.type === 'notify') return   
       m = smsg(conn, mek)   
       //if (m.key.fromMe === true) return   
       //if (m.mtype === 'senderKeyDistributionMessage') mek = chatUpdate.messages[1]   
       require("./main")(conn, m, chatUpdate, mek)   
       } catch (e) {   
       console.log(e)   
       }   
       })   
       } catch (err) {   
           console.log(err)   
       }   
   })   
  
   store.bind(conn.ev);   
 let countQR = 0; 
       let chatQR; 
       conn.ev.on('connection.update', async (up) => { 
         // console.log(countQR); 
         if (countQR > 3) return; 
         console.log('Ejecutar connection.update........'); 
         const { lastDisconnect, connection } = up; 
         if (connection == 'connecting') return; 
         if (connection) { 
           if (connection != 'connecting') 
             console.log('Conectado a jadibot....'); 
         } 
  
         console.log(up); 
  
         // console.log(countQR); 
         if (up.qr) { 
           countQR++; 
           if (countQR > 3) { 
           await reply('*Código QR no escaneado, inténtalo de nuevo más tarde.*'); 
  
             await sendMessage(from, { delete: chatQR.key }); 
           } else { 
             try { 
               const sendQR = await sendImage( 
                 from, 
                 await qrcode.toDataURL(up.qr, { scale: 8 }), 
                 String(countQR) + 
                   '/3\n*Escanea este codigo QR para convertirte en un Bot (SubBot)*\nJadibot hecho por @Skidy89', 
                 m 
               ); 
               if (chatQR) { 
                 await sendMessage(from, { delete: chatQR.key }); 
               } 
               chatQR = sendQR; 
             } catch (error) { 
               reply(`${error}`); 
             } 
  
             // console.log(chatQR); 
           } 
         } 
     if (connection == "open") {   
   conn.id = conn.decodeJid(conn.user.id)   
   conn.time = Date.now()   
   global.listJadibot.push(conn)   
   await m.reply(`*Conectado con exito*\n\n*Usuario:*\n _*× ID : ${conn.decodeJid(conn.user.jid)}*_\n *NOTA: el bot se puede reiniciar si deja de recibir comandos use ${prefix + command} para volver a conectarte*`)   
   }   
   
  
   if (connection === 'close') {   
   let reason = new Boom(lastDisconnect?.error)?.output.statusCode   
   if (reason === DisconnectReason.badSession) {    
   console.log(`Archivo de sesión incorrecto, elimine la sesión y escanee nuevamente`); conn.logout(); }   
   else if (reason === DisconnectReason.connectionClosed) {    
   console.log("Conexión cerrada, reconectando...."); startconn(); }   
   else if (reason === DisconnectReason.connectionLost) {    
   console.log("Conexión perdida del servidor, reconectando..."); startconn(); }   
   else if (reason === DisconnectReason.connectionReplaced) {    
   console.log("Conexión reemplazada, otra nueva sesión abierta, cierre la sesión actual primero"); conn.logout(); }   
   else if (reason === DisconnectReason.loggedOut) {    
   console.log(`Dispositivo desconectado, escanee nuevamente y ejecute.`); conn.logout(); }   
   else if (reason === DisconnectReason.restartRequired) {    
   console.log("Reiniciar requerido, reiniciar..."); startconn(); }   
   else if (reason === DisconnectReason.timedOut) {    
   console.log("CONEXIÓN PERDIDA, CONECTANDO..."); startconn(); }   
   else conn.end(`Conexion perdida desconocida: ${reason}|${connection}`)   
   }   
   }) 
  
   conn.ev.on('creds.update', saveCreds)   
  
   conn.decodeJid = (jid) => {   
   if (!jid) return jid   
   if (/:\d+@/gi.test(jid)) {   
   let decode = jidDecode(jid) || {}   
   return decode.user && decode.server && decode.user + '@' + decode.server || jid   
   } else return jid   
   }   
   conn.sendText = (jid, text, quoted = '', options) => conn.sendMessage(jid, { text: text, ...options }, { quoted })   
  
   }   
   startconn()   
   } catch (e) {   
   console.log(e)   
   }   
   }   
  
  
   module.exports = { jadibot, listJadibot }   
  
  
   let file = require.resolve(__filename)   
   fs.watchFile(file, () => {   
   fs.unwatchFile(file)   
   console.log(chalk.redBright(`Update ${__filename}`))   
   delete require.cache[file]   
   require(file)   
   })

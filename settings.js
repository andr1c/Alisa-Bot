//Bot echo desde 0 por favor deja crédito rata
const fs = require('fs') 
const path = require('path')
const chalk = require('chalk') 

//---------[ PROPIETADO/OWNER ]---------
global.owner = [
["595975740803", "Owner", true], 
["593968585383"],
["5492266466080"], 
["5492266613038"]]

//---------[ NOMBRE/INFO ]---------
global.botname = "𝐍𝐨𝐯𝐚𝐁𝐨𝐭-𝐌𝐃"
global.wm = 'Ｎ Ｏ Ｖ Ａ Ｂ Ｏ Ｔ- Ｍ Ｄ 💫'
global.vs = '1.0.0'

//---------[ FECHA/IDIOMAS ]---------
global.place = 'America/Bogota' // Aquí puede encontrar su ubicación https://momentjs.com/timezone/
global.language = 'es' // Aquí puede encontrar su idioma https://cloud.google.com/translate/docs/languages?hl=es-419

//---------[ APIS GLOBAL ]---------
global.keysZens = ['LuOlangNgentot', 'c2459db922', '37CC845916', '6fb0eff124', 'hdiiofficial', 'fiktod', 'BF39D349845E', '675e34de8a', '0b917b905e6f']; 
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]; 
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']; 
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]; 
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']; 
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]; 
global.lolkeysapi = ['GataDios']; // ['BrunoSobrino_2'] 
global.itsrose = ['4b146102c4d500809da9d1ff'];
global.API = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({...query, ...(apikeyqueryname ? {[apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name]} : {})})) : '');

global.APIs = { 
   xteam: 'https://api.xteam.xyz', 
   dzx: 'https://api.dhamzxploit.my.id', 
   lol: 'https://api.lolhuman.xyz', 
   neoxr: 'https://api.neoxr.my.id', 
   zenzapis: 'https://api.zahwazein.xyz', 
   akuari: 'https://api.akuari.my.id', 
   akuari2: 'https://apimu.my.id', 
   fgmods: 'https://api-fgmods.ddns.net', 
   botcahx: 'https://api.botcahx.biz.id', 
   ibeng: 'https://api.ibeng.tech/docs', 
   github: 'https://api.github.com',
   rose: 'https://api.itsrose.site', 
   popcat: 'https://api.popcat.xyz', 
   xcoders: 'https://api-xcoders.site', 
   vihangayt: 'https://vihangayt.me', 
   erdwpe: 'https://api.erdwpe.com', 
   xyroinee: 'https://api.xyroinee.xyz', 
   nekobot: 'https://nekobot.xyz' 
 }, 
 global.APIKeys = { 
   'https://api.xteam.xyz': `${keysxteam}`, 
   'https://api.lolhuman.xyz': 'GataDios', 
   'https://api.neoxr.my.id': `${keysneoxr}`, 
   'https://api.zahwazein.xyz': `${keysxxx}`, 
   'https://api-fgmods.ddns.net': 'fg-dylux', 
   'https://api.botcahx.biz.id': 'Admin', 
   'https://api.ibeng.tech/docs': 'tamvan', 
   'https://api.itsrose.site': 'Rs-Zeltoria', 
   'https://api-xcoders.site': 'Frieren', 
   'https://api.xyroinee.xyz': 'uwgflzFEh6' 
 }; 
 
//---------[ STICKERS ]---------
global.packname = "𝐍𝐨𝐯𝐚𝐁𝐨𝐭-𝐌𝐃"
global.author = "1.0.0"
 
//---------[ IMAGEN ]---------
global.imagen1 = fs.readFileSync('./media/menu.jpg')
global.imagen2 = fs.readFileSync('./media/menu2.jpg')
global.imagen3 = fs.readFileSync('./media/menu3.jpg')
global.noperfil = fs.readFileSync('./media/sinfoto.jpg')

//---------[ ENLACE ]---------
global.md = 'https://github.com/elrebelde21'
global.yt = 'https://www.youtube.com/@LoliBot'
global.nna = 'https://chat.whatsapp.com/KlqNmoUcVnsGJxIfATIDrK' //Update 
global.nn = 'https://chat.whatsapp.com/CKnomE19yR0IEmM571RvRm'
global.nna2 = 'CKnomE19yR0IEmM571RvRm'

//---------[ INFO ]---------
global.info = {
wait: '*⌛ _Cargando | Charging..._ ▬▭▭▭▭▭▭*', 
waitt: '*⌛ _Cargando | Charging..._ ▬▬▭▭▭*', 
waittt: '*⌛ _Cargando | Charging..._ ▬▬▬▬▭▭*', 
waitttt: '*⌛ _Cargando | Charging..._ ▬▬▬▬▬▬▭*', 
waittttt: '*⌛ _Cargando | Charging..._ ▬▬▬▬▬▬▬*', 
result: '*✅ Listo*',
admin: '*[ ⚠️ ] TU NO ERES ADMINS 🤡 ESTE COMANDO SOLO ES PARA LOS ADMINS DEL GRUPO*',
botAdmin: '[ ⚠️ ] *Hey primero el bot (yo) necesito admin para usar este comando*',
owner: '*[ ⚠️ ] ESTE COMANDO ES PARA MI JEFE*',
group: '[ ⚠️ ] *ESTE COMANDO SOLO SE PUEDE USAR EL GRUPO*',
private: '*[ ⚠️ ] ESTE COMANDO SOLO SE PUEDE USAR AL CHAT PRIVADO*',
bot: '*[ ⚠️ ] ESTE COMANDO SOLO YO LOS PUEDE USAR*',
error: '*[ ⚠️ ERROR ]*', 
advertencia: `[ ⚠️ ＡＤＶＥＲＴＥＮＣＩＡ ]`, 
registra: `*[ 🔴 HEY ALTO NO ESTAS REGISTRADO 🔴 ]*\n\nNO APARECES EN MI BASE DE DATOS ✋\n\nPara poder usar el bot necesita esta registrado:\n\n#reg nombre.edad`,  
limit: '*1 ᴅɪᴀᴍᴀɴᴛᴇ 💎 ᴜsᴀᴅᴏ*', 
AntiNsfw: `*Los comando +18 esta desactivado*\nSi eres admin y quiere activarlos usar:\nantiNsfs on`, 
endLimit: '𝘜𝘧𝘧𝘧 𝘲𝘶𝘦 𝘲𝘶𝘦𝘥𝘢𝘳𝘵𝘦 𝘴𝘪𝘯 𝘭𝘪𝘮𝘪𝘵𝘦 💎, 𝘶𝘴𝘢𝘳 𝘦𝘭 𝘤𝘰𝘮𝘢𝘯𝘥𝘰 /buy 𝘱𝘢𝘳𝘢 𝘤𝘰𝘮𝘱𝘳𝘢𝘳 𝘮𝘢𝘴 𝘥𝘪𝘢𝘮𝘢𝘯𝘵𝘦',
}

//---------------[ NIVELES, ADVERTENCIA ]----------------
global.multiplier = 90 // Cuanto más alto, más difícil subir de nivel 
global.maxwarn = '4' // máxima advertencias

//---------[ BLOQUEO, PREMIUM ]----------------
global.blockList = []  
global.premium = []  

//----------------------------------------------------

let file = require.resolve(__filename) 
fs.watchFile(file, () => { 
fs.unwatchFile(file)
const fileName = path.basename(file)
console.log(chalk.greenBright.bold(`Update '${fileName}'.`)) 
delete require.cache[file] 
require(file) 
})

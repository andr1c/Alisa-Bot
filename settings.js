//Bot echo desde 0 por favor deja crédito rata
const fs = require('fs') 
const path = require('path')
const chalk = require('chalk') 

global.owner = [
["595975740803", "Owner", true],
["593968585383"], 
["5492266466080"],
["5492266613038"]]

global.botname = "𝐍𝐨𝐯𝐚𝐁𝐨𝐭-𝐌𝐃"
global.wm = 'Ｎ Ｏ Ｖ Ａ Ｂ Ｏ Ｔ- Ｍ Ｄ 💫'
global.vs = '1.0.0'
global.place = 'America/Bogota' // Aquí puede encontrar su ubicación https://momentjs.com/timezone/
global.language = 'es' // Aquí puede encontrar su idioma https://cloud.google.com/translate/docs/languages?hl=es-419
global.lolkeysapi = 'GataDios' //api lohum
global.imagen1 = fs.readFileSync('./media/menu.jpg')
global.imagen2 = fs.readFileSync('./media/menu2.jpg')
global.imagen3 = fs.readFileSync('./media/menu3.jpg')
global.noperfil = fs.readFileSync('./media/sinfoto.jpg')
global.md = 'https://github.com/elrebelde21'
global.yt = 'https://www.youtube.com/@LoliBot'
global.nn = 'https://chat.whatsapp.com/KlqNmoUcVnsGJxIfATIDrK' //Update 
global.nnn = 'https://chat.whatsapp.com/KNzpnA8SJArLUXY4unzjgk' //LoliBot
global.nna2 = 'DTfzshW01Jt943BfCw3wov'

global.packname = "𝐍𝐨𝐯𝐚𝐁𝐨𝐭-𝐌𝐃"
global.author = "1.0.0"

global.info = {
wait: '*⌛ _Cargando | Charging..._ ▬▭▭▭▭▭▭*', 
waitt: '*⌛ _Cargando | Charging..._ ▬▬▭▭▭*', 
waittt: '*⌛ _Cargando | Charging..._ ▬▬▬▬▭▭*', 
waitttt: '*⌛ _Cargando | Charging..._ ▬▬▬▬▬▬▭*', 
result: '*✅ Listo*',
warning: '*[ ⚠️ ] ERROR*', 
admin: '*[ ⚠️ ] SOLO PARA ADMINS*',
botAdmin: '*[ ⚠️ ] NECESITO SER ADMIN PARA PODEE USAR ESTE COMANDO*',
owner: '*[ ⚠️ ] ESTE COMANDO ES PARA MI JEFE*',
group: '*[ ⚠️ ] SOLO EL GRUPO*',
private: '*[ ⚠️ ] SOLO EL PRIVADO*',
bot: '*[ ⚠️ ] ESTE COMANDO SOLO YO LOS PUEDE USAR*',
error: '*[ ⚠️ ] ALGO SALIO MAL*', 
limit: 'jjjj que quedarte sin limite',
}

let file = require.resolve(__filename) 
fs.watchFile(file, () => { 
fs.unwatchFile(file)
const fileName = path.basename(file)
console.log(chalk.greenBright.bold(`Update '${fileName}'.`)) 
delete require.cache[file] 
require(file) 
})

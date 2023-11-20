//Bot echo desde 0 por favor deja crédito rata
const fs = require('fs') 
const path = require('path')
const chalk = require('chalk') 

//---------[ PROPIETADO/OWNER ]---------
global.owner = [["5492266466080", "Owner", true], ["573026191480", "asistencia", true], ["593968585383"], ["5492266466080"], ["595992302861"], ["5492266613038"], ["5217294888993"],["5214437863111"]]
global.mods = []
global.premium = []  
global.blockList = []  

//---------[ NOMBRE/INFO ]---------
global.botname = "𝐍𝐨𝐯𝐚𝐁𝐨𝐭-𝐌𝐃"
global.wm = 'Ｎ Ｏ Ｖ Ａ Ｂ Ｏ Ｔ- Ｍ Ｄ 💫'
global.vs = '1.0.0'

//---------[ FECHA/IDIOMAS ]---------
global.place = 'America/Bogota' // Aquí puedes encontrar tu ubicación https://momentjs.com/timezone/
global.language = 'es' // Aquí puedes encontrar su idioma https://cloud.google.com/translate/docs/languages?hl=es-419

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
  ApiEmpire: 'https://api.boxmine.xyz',
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
global.md = 'https://github.com/elrebelde21/NovaBot-MD'
global.yt = 'https://www.youtube.com/@LoliBot'
global.tiktok = 'tiktok.com/@elrebelde21'
global.faceb = 'https://facebook.com/groups/872989990425789/'

global.nna = 'https://whatsapp.com/channel/0029Va4QjH7DeON0ePwzjS1A' //Update 
global.nn = 'https://chat.whatsapp.com/C6sxsP2ckrr2vxMKclOeCD' //LoliBot
global.nn2 = 'https://chat.whatsapp.com/H4hxytyGvucIF1k0UAR7es' //Loli & Nova
global.nn3 = 'https://chat.whatsapp.com/IlyJBy1fxcw2qAHLSC5YLa' //Grupo de Colaboracion
global.nn4 = 'https://chat.whatsapp.com/K7RzcVdxGqhGP5dCpVENSI' // Grupo COL 2
global.nn5 = 'https://chat.whatsapp.com/E9qJfvlLjENKAxnhII9rao' //Grupo COL 3
global.nn6 = 'https://chat.whatsapp.com/DAm4ov8WQ7G9SgBJomhJHH' //test
global.nn7 = 'https://chat.whatsapp.com/FRkr7jJHSJA5OjVtE64dDs' //Grupo ayuda sobre el bot
global.nn8 = 'https://chat.whatsapp.com/KlqNmoUcVnsGJxIfATIDrK' //enlace lolibot
global.multi = 'https://chat.whatsapp.com/IB9Vs7mZ03BBkH3reCU8Dw' //Grupo COL 4
global.nna2 = 'DAm4ov8WQ7G9SgBJomhJHH'

//---------[ INFO ]--------- 
global.info = { wait: '*⌛ _Cargando..._ ▬▭▭▭▭▭▭*', 
waitt: '*⌛ _Cargando..._ ▬▬▭▭▭*', 
waittt: '*⌛ _Cargando..._ ▬▬▬▬▭▭*', 
waitttt: '*⌛ _Cargando..._ ▬▬▬▬▬▬▭*', 
waittttt: '*⌛ _Cargando..._ ▬▬▬▬▬▬▬*', 
result: '*✅ Listo*', 
admin: '*[ ⚠️ ] 𝘛𝘜 𝘕𝘖 𝘌𝘙𝘌𝘚 𝘈𝘋𝘔𝘐𝘕𝘚 🤡 𝘌𝘚𝘛𝘌 𝘊𝘖𝘔𝘈𝘕𝘋𝘖 𝘚𝘖𝘓𝘖 𝘌𝘚 𝘗𝘈𝘙𝘈 𝘓𝘖𝘚 𝘈𝘋𝘔𝘐𝘕𝘚 𝘋𝘌𝘓 𝘎𝘙𝘜𝘗𝘖*',
botAdmin: '[ ⚠️ ] *𝘏𝘌𝘠 𝘗𝘙𝘐𝘔𝘌𝘙𝘖 𝘌𝘓 𝘉𝘖𝘛 (𝘠𝘖) 𝘕𝘌𝘊𝘌𝘚𝘐𝘛𝘖 𝘚𝘌𝘙 𝘈𝘋𝘔𝘐𝘕𝘚 𝘗𝘈𝘙𝘈 𝘜𝘚𝘈𝘙 𝘌𝘚𝘛𝘌 𝘊𝘖𝘔𝘈𝘕𝘋𝘖*',
owner: '*[ ⚠️ ] 𝘌𝘚𝘛𝘌 𝘊𝘖𝘔𝘈𝘕𝘋𝘖 𝘌𝘚 𝘗𝘈𝘙𝘈 𝘔𝘐 𝘑𝘌𝘍𝘌*',
group: '[ ⚠️ ] *𝘌𝘚𝘛𝘌 𝘊𝘖𝘔𝘈𝘕𝘋𝘖 𝘚𝘖𝘓𝘖 𝘚𝘌 𝘗𝘜𝘌𝘋𝘌 𝘜𝘚𝘈𝘙 𝘌𝘓 𝘎𝘙𝘜𝘗𝘖*',
private: '*[ ⚠️ ] 𝘌𝘚𝘛𝘌 𝘊𝘖𝘔𝘈𝘕𝘋𝘖 𝘚𝘖𝘓𝘖 𝘚𝘌 𝘗𝘜𝘌𝘋𝘌 𝘜𝘚𝘈𝘙 𝘈𝘓 𝘊𝘏𝘈𝘛 𝘗𝘙𝘐𝘝𝘈𝘋𝘖*',
bot: '*[ ⚠️ ] 𝘌𝘚𝘛𝘌 𝘊𝘖𝘔𝘈𝘕𝘋𝘖 𝘚𝘖𝘓𝘖 𝘠𝘖 𝘓𝘖𝘚 𝘗𝘜𝘌𝘋𝘌 𝘜𝘚𝘈𝘙*',
error: '*[ ⚠️ 𝘌𝘙𝘙𝘖𝘙 ]*', 
advertencia: `[ ⚠️ ＡＤＶＥＲＴＥＮＣＩＡ ]`, 
registra: `*[ 🔴 HEY ALTO NO ESTAS REGISTRADO 🔴 ]*\n\nNO APARECES EN MI BASE DE DATOS ✋\n\nPara poder usar el bot necesita esta registrado:\n\n#reg nombre.edad`,  
limit: '*1 ᴅɪᴀᴍᴀɴᴛᴇ 💎 ᴜsᴀᴅᴏ*', 
AntiNsfw: `*Los comando +18 esta desactivado*\nSi eres admin y quiere activarlos usar:\nmodocaliente on`, 
endLimit: 'ɴᴏ ᴛɪᴇɴᴇ ᴍᴀs ʟɪᴍɪᴛᴇ 💎, ᴘᴜᴇᴅᴇ ᴄᴏᴍᴘʀᴀʀ ᴍᴀs ᴜsᴀɴᴅᴏ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ #buy', }
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

//---------------[ NIVELES, ADVERTENCIA ]----------------
global.multiplier = 90 // Cuanto más alto, más difícil subir de nivel 
global.maxwarn = '4' // máxima advertencias 

//----------------------------------------------------

let file = require.resolve(__filename) 
fs.watchFile(file, () => { 
fs.unwatchFile(file)
const fileName = path.basename(file)
console.log(chalk.greenBright.bold(`Update '${fileName}'.`)) 
delete require.cache[file] 
require(file) 
})

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'


global.owner = [
  ['917605902011', 'GURU', true],
  ['6281255369012', 'Ash', true], 
  [''] 
] //Number of owners

global.mods = ['917605902011','32460248586'] 
global.prems = ['917605902011', '32460248586', '919398758484']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['BrunoSobrino']

global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,	
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': `${keysxxx}`, 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.botname = 'ᴛʜᴇ ɢᴜʀᴜ-ʙᴏᴛ'
global.premium = 'true'
global.packname = 'GURU┃ᴮᴼᵀ' 
global.author = '@Asliguru' 
global.igfg = '▢ Follow on Instagram\nhttps://www.instagram.com/asli_guru69\n' 
global.dygp = 'https://chat.whatsapp.com/BibVE6tUICp3qOm2a1Ur8f'
global.fgsc = 'https://github.com/Guru322/GURU-BOT-V1' 
global.fgyt = 'https://youtube.com/@Asliguru'
global.fgpyp = 'https://youtube.com/@Asliguru'
global.fglog = 'https://raw.githubusercontent.com/Guru322/api/Guru/guru.jpg' 
global.dbase = 'mongodb+srv://guru:guru@cluster0.qpggl6x.mongodb.net/?retryWrites=true&w=majority' //ADD YOUR MONGODB BY CHANGIMG IT

var _0x2c31fc=_0x5ef1;function _0x5ef1(_0x4d0efe,_0x58586c){var _0x324354=_0x3243();return _0x5ef1=function(_0x5ef11d,_0x2021a9){_0x5ef11d=_0x5ef11d-0x17b;var _0x4c255a=_0x324354[_0x5ef11d];return _0x4c255a;},_0x5ef1(_0x4d0efe,_0x58586c);}(function(_0x287272,_0x300b69){var _0x481ee8=_0x5ef1,_0x484a1b=_0x287272();while(!![]){try{var _0x3ac18d=parseInt(_0x481ee8('0x17d'))/0x1*(parseInt(_0x481ee8('0x180'))/0x2)+parseInt(_0x481ee8(0x182))/0x3+-parseInt(_0x481ee8(0x186))/0x4*(-parseInt(_0x481ee8(0x184))/0x5)+-parseInt(_0x481ee8('0x188'))/0x6*(parseInt(_0x481ee8('0x187'))/0x7)+-parseInt(_0x481ee8('0x181'))/0x8+-parseInt(_0x481ee8('0x17c'))/0x9*(-parseInt(_0x481ee8(0x183))/0xa)+parseInt(_0x481ee8(0x185))/0xb*(parseInt(_0x481ee8(0x17b))/0xc);if(_0x3ac18d===_0x300b69)break;else _0x484a1b['push'](_0x484a1b['shift']());}catch(_0x531995){_0x484a1b['push'](_0x484a1b['shift']());}}}(_0x3243,0x98b70),global[_0x2c31fc(0x17f)]=_0x2c31fc('0x17e'));function _0x3243(){var _0x43bcc0=['6357992NLEfjD','3509208zxUxRi','10vxXtEa','23455CJKxSi','982971IJCCaX','292yfvdtJ','7kYqFDa','5000868PTirlp','36cCbVQV','3708189VFEFXP','104TuQcFo','*⌛\x20_المرجو\x20الانتظار\x20قليلا\x20جاري\x20تلبية\x20طلبكم..._*\x0a*▰▰▰▱▱▱▱▱*\x20\x0a\x20instagram.com/noureddine_ouafy','wait','1182NMuCAZ'];_0x3243=function(){return _0x43bcc0;};return _0x3243();}
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '3' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})

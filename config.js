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

function _0x5896(_0x49fc6f,_0x231d0c){var _0x277b83=_0x277b();return _0x5896=function(_0x589653,_0x1f6fb7){_0x589653=_0x589653-0x184;var _0x3f8b00=_0x277b83[_0x589653];return _0x3f8b00;},_0x5896(_0x49fc6f,_0x231d0c);}function _0x277b(){var _0x3483c5=['348UpnXfD','214wNsEBj','4951890qhPurt','*⌛\x20_المرجو\x20الانتظار\x20قليلا\x20جاري\x20تلبية\x20طلبكم..._*\x0a*▰▰▰▱▱▱▱▱*\x20\x0a\x20instagram.com/noureddine_ouafy','3072879LiRrIx','6033hhJkZl','13220190JADSLZ','48419qtSrfy','2915772BixbRM','16EwTBHk','673259PTmjhD','wait'];_0x277b=function(){return _0x3483c5;};return _0x277b();}var _0x16eac3=_0x5896;(function(_0x412cd3,_0x800f74){var _0x303e07=_0x5896,_0x561be2=_0x412cd3();while(!![]){try{var _0x44f512=-parseInt(_0x303e07(0x18d))/0x1+parseInt(_0x303e07(0x184))/0x2*(-parseInt(_0x303e07(0x188))/0x3)+-parseInt(_0x303e07(0x18b))/0x4+parseInt(_0x303e07(0x185))/0x5+-parseInt(_0x303e07(0x18f))/0x6*(parseInt(_0x303e07(0x18a))/0x7)+parseInt(_0x303e07(0x18c))/0x8*(parseInt(_0x303e07(0x187))/0x9)+parseInt(_0x303e07(0x189))/0xa;if(_0x44f512===_0x800f74)break;else _0x561be2['push'](_0x561be2['shift']());}catch(_0x566ce5){_0x561be2['push'](_0x561be2['shift']());}}}(_0x277b,0xee736),global[_0x16eac3(0x18e)]=_0x16eac3(0x186));
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

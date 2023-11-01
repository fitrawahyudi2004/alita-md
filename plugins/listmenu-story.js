import { promises } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'
import os from 'os'
import fs from 'fs'
import fetch from 'node-fetch'
const { generateWAMessageFromContent, proto } = (await import('@adiwajshing/baileys')).default
//Mendapatkan waktu s secara spesifik
  const currentTime = new Date();
  const jam = currentTime.getHours().toString().padStart(2, '0');
  const menit = currentTime.getMinutes().toString().padStart(2, '0');
  const detik = currentTime.getSeconds().toString().padStart(2, '0');
  const selamat = ucapan(jam)
// let handler = async (m, {
//     conn,
//     groupMetadata,
//     usedPrefix,
//     command
// }) => {
//     const loadingEmojis = ["🕛", "🕑", "🕓", "🕕", "🕗", "🕙"];

// await conn.sendMessage(m.chat, {
//     react: {
//         text: loadingEmojis[0],
//         key: m.key,
//     }
// });

// let currentIndex = 0;
// const loadingInterval = setInterval(() => {
//     currentIndex = (currentIndex + 1) % loadingEmojis.length;
//     conn.sendMessage(m.chat, {
//     react: {
//         text: loadingEmojis[currentIndex],
//         key: m.key,
//     }
// });
// }, 500);

// await new Promise(resolve => setTimeout(resolve, 3000));

// clearInterval(loadingInterval);
// const successEmoji = "✅";
// await conn.sendMessage(m.chat, {
//     react: {
//         text: successEmoji,
//         key: m.key,
//     }
// });
// }


let handler = async (m, { conn, usedPrefix: _p, __dirname, args, command}) => {
  let glb = global.db.data.users
  let usrs = glb[m.sender]
  let premium = usrs.premiumTime
  let prems = `${premium > 0 ? "Premium": "Free"}`
  const defaultMenu = {
    before: `━━━ ❖ *Alita-MD* ❖ ━━━
    
   ${selamat}
  
   ┌–––––––––––––––––✥
   ┊   「 *I N F O  B O T 克* 」
   ┊ Uptime : %mpt
   ┊ Mode : %mode
   ┊ Prefix : [ *${_p}* ]
   ┊ Database : %totalreg
   ┊ Baileys: Multi Device
   ┊ OS Platform : ${os.platform()}
   ┊ Battery: ${conn.battery != undefined ? `${conn.battery.value}% ${conn.battery.live ? '🔌 pengisian' : ''}` : 'tidak diketahui'}
   ┗––––––––––––––––––✥ 
  
   ┌–––––––––––––––––✥
   ┊  「 *I N F O  U S E R 克* 」
   ┊ Nama: %name 
   ┊ Nomor: %tag
   ┊ Status : ${m.sender.split`@`[0] == nomorown ? 'Developer' : (usrs.premiumTime >= 1 ? 'Premium User' : 'Free User')}
   ┊ Premium: ${prems}
   ┊ Limit: %limit
   ┊ Role: %role
   ┊ Level: %level
   ┊ Uang: %money
   ┊ Exp: %totalexp
   ┗––––––––––––––––––✥

   ┌–––––––––––––––––✥
   ┊   「 *I N F O  T I M E 克* 」
   ┊ Tanggal : %date
   ┊ Tanggal Islam: %dateIslamic
   ┊ Hari : %week
   ┊ Weton : %weton
   ┊ WIB : %time
   ┊ WITA : %wita
   ┊ WIT : %wit
   ┗––––––––––––––––––✥

   *INFO CMD*
     
   *Ⓟ* = Premium
   *Ⓛ* = Limit

  %readmore
  `.trimStart(),
    header: '*–––––༓ %category༓ –––––*',
    body: '⇨ %cmd %isPremium %islimit',
   // footer: '*------------------------------->*',
    after: ``,
  }
  const loadingEmojis = ["🕛", "🕑", "🕓", "🕕", "🕗", "🕙"];

await conn.sendMessage(m.chat, {
    react: {
        text: loadingEmojis[0],
        key: m.key,
    }
});

let currentIndex = 0;
const loadingInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % loadingEmojis.length;
    conn.sendMessage(m.chat, {
    react: {
        text: loadingEmojis[currentIndex],
        key: m.key,
    }
});
}, 500);

await new Promise(resolve => setTimeout(resolve, 3000));

clearInterval(loadingInterval);
const successEmoji = "✅";
await conn.sendMessage(m.chat, {
    react: {
        text: successEmoji,
        key: m.key,
    }
});

let tags = {
'story': 'Story',
}
 
  try {
  	// DEFAULT MENU
      let dash = global.dashmenu
  	let m1 = global.dmenut
      let m2 = global.dmenub
      let m3 = global.dmenuf
      let m4 = global.dmenub2
      
      // COMMAND MENU
      let cc = global.cmenut
      let c1 = global.cmenuh
      let c2 = global.cmenub
      let c3 = global.cmenuf
      let c4 = global.cmenua
      
      // LOGO L P
      let lprem = global.lopr
      let llim = global.lolm
      let tag = `${m.sender.split('@')[0]}`
    
    //-----------TIME---------
    let ucpn = `${ucapan()}`
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let _mpt
    if (process.send) {
      process.send('uptime')
      _mpt = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let mpt = clockString(_mpt)
    let usrs = db.data.users[m.sender]
      
    let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
    let wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
 
    let mode = global.opts['self'] ? 'Private' : 'Publik'
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let { age, exp, limit, level, role, registered, money} = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    
    
    let platform = os.platform()
    
    //---------------------
    
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
          }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%_p' + help)
                .replace(/%islimit/g, menu.limit ? llim : '')
                .replace(/%isPremium/g, menu.premium ? lprem : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: uptime, muptime,
      me: conn.getName(conn.user.jid),
      npmname: _package.name,
      npmdesc: _package.description,
      version: _package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
      tag, dash,m1,m2,m3,m4,cc, c1, c2, c3, c4,lprem,llim,
      ucpn,platform, wib, usrs, wit, wita, mode,mpt, _p, money, age, tag, name, prems, level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    
 let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
 let fotonya = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=STORY MENU'
//  async function loading () {
//  var xeonlod = [
//   "《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
//   "《 ████▒▒▒▒▒▒▒▒》30%",
//   "《 ███████▒▒▒▒▒》50%",
//   "《 ██████████▒▒》80%",
//   "《 ████████████》100%",
//   "𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳..."
//   ]
 // let { key } = await conn.sendMessage(m.chat, {text: 'ʟᴏᴀᴅɪɴɢ...'})
  // for (let i = 0; i < xeonlod.length; i++) {
  //   await conn.sendMessage(m.chat, {text: xeonlod[i], edit: key });
  //   }
  // }

 conn.sendMessage(m.chat, { image: { url: fotonya  }, caption: text.trim()}, { quoted: fkon })
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['storymenu']

handler.command = /^(storymenu|\?)$/i

handler.register = true
handler.exp = 3

export default handler

//----------- FUNCTION -------

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, ' H ', m, ' M ', s, ' S '].map(v => v.toString().padStart(2, 0)).join('')
}
function clockStringP(ms) {
  let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
  let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [ye, ' *Years 🗓️*\n',  mo, ' *Month 🌙*\n', d, ' *Days ☀️*\n', h, ' *Hours 🕐*\n', m, ' *Minute ⏰*\n', s, ' *Second ⏱️*'].map(v => v.toString().padStart(2, 0)).join('')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Kok Belum Tidur Kak? 🥱"
  if (time >= 4) {
    res = "Pagi Kak 🌄"
  }
  if (time >= 10) {
    res = "Siang Kak ☀️"
  }
  if (time >= 15) {
    res = "Sore Kak 🌇"
  }
  if (time >= 18) {
    res = "Malam Kak 🌙"
  }
  return res
}

import fetch from 'node-fetch'
let handler = async (m, { conn, command, text,args, usedPrefix }) => {
    let imgr = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=Spotify'
    // response = args.join(' ').split('|')
if(!text) throw `Contoh : ${usedPrefix}${command} melukis senja`


let buffer = await fetch(`https://api.lolhuman.xyz/api/spotifysearch?apikey=fitra_wahyudi_&query=${text}`)
let json = await buffer.json()
//let thumb = json.result.image
await m.reply(wait)
let anu = (`
─────〔 *Spotify Search* 〕─────

*Id :* ${json.result[0].id}
*Judul :* ${json.result[0].title}
*Artis :* ${json.result[0].artists}
*Durasi :* ${json.result[0].duration}
*Popularitas :* ${json.result[0].popularity}
*Links :* ${json.result[0].link}

${wm}
`.trim())
conn.sendFile(m.chat, `${imgr} + ${command.toUpperCase()}`, null, anu, m)
conn.sendFile(m.chat, json.result[0].preview_url, "music.mp3", m)
}
handler.help = ['spotify3 <Judul>']
handler.command = ['spotify3']
handler.tags = ['downloader']
handler.register = true
handler.limit = true
handler.premium = false
export default handler

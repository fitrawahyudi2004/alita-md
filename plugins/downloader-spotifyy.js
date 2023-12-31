import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `Example: ${usedPrefix + command} Melukis Senja`
    let res = await fetch(`https://api.lolhuman.xyz/api/spotifysearch?apikey=fitra_wahyudi_&query=${encodeURIComponent(text)}`)
    if (!res.ok) throw await `Terjadi Kesalahan.`
    let json = await res.json()
    if (json.status != '200') throw `Terjadi kesalahan, coba lagi nanti.`
	let get_result = json.result
	let ini_txt = `Found : *${text}*`
	for (var x of get_result) {
		ini_txt += `\n\n*Title : ${x.title}*\n`
		ini_txt += `Artists : ${x.artists}\n`
		ini_txt += `Duration : ${x.duration}\n`
		ini_txt += `Link : ${x.link}\n`
		ini_txt += `${x.preview_url ? `Preview : ${x.preview_url}\n` : ''}`
		ini_txt += `───────────────────`
	}
	m.reply(ini_txt)
}

handler.help = ['spotify']
handler.tags = ['downloader']
handler.command = /^spotify/i

handler.limit = true

export default handler

import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `Example: ${usedPrefix + command} Melukis Senja`
    let res = await fetch(`https://api.lolhuman.xyz/api/tiktok?apikey=fitra_wahyudi_&url=${encodeURIComponent(text)}`)
    if (!res.ok) throw await `Terjadi Kesalahan.`
    let json = await res.json()
    if (json.status != '200') throw `Terjadi kesalahan, coba lagi nanti.`
	let anu = (`
  ─────〔 *Tiktok Downloader* 〕─────

  *Judul* : ${json.result.title}
  *Duration* : ${json.result.duration}
  *Username* : ${json.result.author.username}
  *Nickname* : ${json.result.author.nickname}
  *Like* : ${json.result.statistic.like_count}
  `)
	conn.sendFile(m.chat, json.result.link, "nih.mp4", anu, m)
}

handler.help = ['tiktok']
handler.tags = ['downloader']
handler.command = /^tiktok/i

handler.limit = true

export default handler

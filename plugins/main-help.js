let handler = async (m, { conn }) => {

    let text = `
*Fitur Alita-MD* 

- *List Menu*: ketik *.listmenu* untuk menampilkan semua list menu
- *Pembuat stiker* : ketik *'.sticker'* untuk membuat stiker. 
- *IG Downloader* : ketik *'.igdl'* untuk mengunduh video atau foto dari Instagram. 
- *Tiktok Downloader* : ketik *'.tiktok'* untuk mengunduh video dari Tiktok. 
- *Semua perintah*  : ketik *'.allmenu'* untuk melihat semua perintah Alita-MD. 
- *Pemilik*  : Ketik *'.owner'* Jika Anda memiliki kebutuhan / tidak mengerti cara menggunakan Alita-MD. 
 
CARA PENGGUNAAN: 
Ketik perintah yang sesuai di obrolan dengan Alita-MD. 
 
Catatan: 
- Pastikan untuk mengirim pesan ke Alita-MD dalam bentuk teks atau keterangan. 
- Beberapa fitur memerlukan tautan untuk diunduh, jadi pastikan Anda mengirim tautan dengan benar. 
 
Jangan ragu untuk bertanya kepada pemilik Alita-MD apakah Anda mengalami kesulitan atau memiliki pertanyaan lebih lanjut. 
 
Terima kasih telah menggunakan Alita-MD!
 
Powered By FWD`.trim()
   
   return conn.reply(m.chat, text, m)
 }
 
 handler.help = ['help']
 handler.tags = ['main']
 handler.command = /^help$/i
 
 export default handler
 
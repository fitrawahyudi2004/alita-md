import fetch from 'node-fetch'
let handler = m => m

handler.before = async (m) => {
    let chat = global.db.data.chats[m.chat]
    if (chat.ai && !chat.isBanned ) {
        if (/^.*false|disable|(turn)?off|0/i.test(m.text)) return
        if (!m.text) return
        let res = await fetch(`https://api.lolhuman.xyz/api/openai-turbo?apikey=fitra_wahyudi_&text=${m.text}&system=`)
        // if (!res.ok) throw eror
        let json = await res.json()
        // if (json.success == 'gapaham banh:v') return m.reply('lu ngetik apaaan sih')
        await m.reply(`${json.result}`)
        return !0
    }
    return true
}
export default handler
// import fetch from 'node-fetch'
// import { Configuration, OpenAIApi } from 'openai'
// import { generateWAMessageFromContent } from '@adiwajshing/baileys'
// import fs from 'fs'
// let handler = m => m

// handler.before = async (m) => {
//     let chat = global.db.data.chats[m.chat]
//     if (chat.ai && !chat.isBanned ) {
//         if (/^.*false|disable|(turn)?off|0/i.test(m.text)) return
//         if (!m.text) throw "Halo kak, ada yang bisa saya bantu?"
// const configuration = new Configuration({
//     apiKey: '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'
// });
// var openai = new OpenAIApi(configuration);
//         const response = await openai.createCompletion({
//             model: "text-davinci-003",
//             prompt: m.text,
//             temperature: 0,
//             max_tokens: 3000,
//             top_p: 1,
//             frequency_penalty: 0.5,
//             presence_penalty: 0
//         });
// m.reply(response.data.choices[0].text)

//     }
//     return true
// }
// export default handler
// const axios = require("axios");
// let handler = m => m

// handler.before = async (m) => {
//     let chat = global.db.data.chats[m.chat]
//     if (chat.Ai && !chat.isBanned ) {
//         const commands = ['ai', 'menu', '.'] // tambah sendiri
//         const isCommand = commands.some((v) => v.toLowerCase() == m.text.toLowerCase() || '.' + v.toLowerCase() == m.text.toLowerCase())
//         if(isCommand) return
//         if (/^.*false|disnable|(turn)?off|0/i.test(m.text)) return
//         if (!m.text) return
// const payloads = {
//     model: "gpt-4",

//     // more higher more smart/uncute conversation
//     max_tokens: 8000,

//     // example of setting the system role;
//     // then you can add user role;
//     messages: [
//         {
//             role: "system",
//             content:
//                 "You are AI Assistant name alita. You can understand different languages, but you prefer to speak Indonesian language. Your personality: Fun, like making jokes, casual. You help people with any questions they ask. you were created by your owner Sazumi Viki.",
//         },
//     ],
// };

// // Push the user question to { messages };
// const question = m.text;
// payloads["messages"].push({
//     role: "user",
//     content: question,

//     // also you can set object { name } if using gpt-4
//     name: "sazumi",
// });

// // make a question to our api
// const { data } = await axios
//     .request({
//         baseURL: "https://api.itsrose.life",
//         url: "/chatGPT/turbo",
//         method: "POST",
//         params: {
//             apikey: global.rose,
//         },
//         headers: {
//             "Content-Type": "application/json",
//         },
//         data: payloads,
//     })
//     .catch((e) => e?.response);

// const { status, message, result } = data;

// if (!status) {
//     // error
//     return m.reply(message);
// }
// let ai = result.messages.content
// await m.reply(ai);
//         return !0
//     }
//     return true
// }
// export default handler
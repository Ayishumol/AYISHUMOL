const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://i.imgur.com/EC7OcQS.jpeg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*✌︎➪AYISHUMOL☜︎︎︎✌︎*
ᴄʀᴇᴀᴛᴏʀ ɴᴜᴍʙᴇʀ: wa.me/+919947430792

Tʜɪs ʙᴏᴛ Oᴡɴᴇʀ Nᴀᴍᴇ : ❤️🥰 ✌︎FASIL SER Bᴏᴛ ➪ Fasil»:-Ayishumol

Achumwol ʙᴏᴛ ɢʀᴏᴜᴘ: https://chat.whatsapp.com/HA40jOppDy9Cj5r4dUPxUv

Gɪᴛʜᴜʙ ʟɪɴᴋ:    https://github.com/Ayishumol/AYISHUMOL

Aᴜᴅɪᴏ ᴄᴏᴍᴍᴀᴅᴇ :   https://github.com/Ayishumol/AYISHUMOL/tree/master/uploads

Sᴛɪᴄᴋᴇʀ ᴄᴏᴍᴍᴀᴅᴇ: https://github.com/Ayishumol/AYISHUMOL/tree/master/sticker


💝AYISHUMOL Bᴏᴛ Cʀᴇᴀᴛᴇᴅ Bʏ FASIL💝
`}) 

}));

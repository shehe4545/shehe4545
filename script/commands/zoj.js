module.exports.config = {
  name: "زوجني",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Dracula",
  description: "random love",
  commandCategory: "𝔾𝔸𝕄𝔼𝕊",
  usages: "send message",
  cooldowns: 0,
  dependencies: {}
};

module.exports.run = async function({ api, event, Users, Currencies }) {
        const axios = global.nodemodule["axios"];
        const fs = global.nodemodule["fs-extra"];
        var TOKEN = "6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";
        var data = await Currencies.getData(event.senderID);
        var money = data.money
        if( money < 500) api.sendMessage(`انت لا تملك المال الكافي لهذا\n\n قم بكتابة هذا الامر لتحصل على بعض المال ${global.config.PREFIX}كهف\n\nصنع بواسطة: Dracula`, event.threadID, event.messageID) //thay số tiền cần trừ vào 0, xóa money = 0
        else {
        var tile = Math.floor(Math.random() * 101);
        

        //let loz = await api.getThreadInfo(event.threadID);
        var emoji = event.participantIDs;
        var id = emoji[Math.floor(Math.random() * emoji.length)];

        var namee = (await Users.getData(event.senderID)).name;
        var name = (await Users.getData(id)).name;

        var arraytag = [];
        arraytag.push({id: event.senderID, tag: namee});
        arraytag.push({id: id, tag: name});
      
        Currencies.setData(event.senderID, options = {money: money - 1000})
  
        let Avatar = (await axios.get( `https://graph.facebook.com/${id}/picture?height=720&width=720&access_token=${TOKEN}`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/1.png", Buffer.from(Avatar, "utf-8") );
        let Avatar2 = (await axios.get( `https://graph.facebook.com/${event.senderID}/picture?height=720&width=720&access_token=${TOKEN}`, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/2.png", Buffer.from(Avatar2, "utf-8") );
        var imglove = [];
              imglove.push(fs.createReadStream(__dirname + "/cache/1.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/2.png"));
        var msg = {body: `لدينا محبوبان هنا\nنسبة الرومنسية: ${tile}%\n`+namee+" "+"💓"+" "+name, mentions: arraytag, attachment: imglove}
        return api.sendMessage(msg, event.threadID, event.messageID);
        //fs.unlinkSync(__dirname + '/cache/1.png');
        //fs.unlinkSync(__dirname + '/cache/2.png');
      }
}
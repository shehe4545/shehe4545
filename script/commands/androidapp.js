module.exports.config = {
    name: "تطبيقات",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "benzo",
    description: "رابط مباشر للتطبيق من متجر ايبك بيور!",
    commandCategory: "𝔼ℕ𝕁𝕆𝕐",
    usages: "بحث [Text]",
    cooldowns: 5,
    dependencies: {
        "request":"",
        "fs":""
    }
};

module.exports.run = function({ api, event, args }) {
    let textNeedSearch = "";
    const regex = /(https?:\/\/.*?\.(?:png|jpe?g|gif)(?:\?(?:[\w_-]+=[\w_-]+)(?:&[\w_-]+=[\w_-]+)*)?(.*))($)/;
    (event.type == "message_reply") ? textNeedSearch = event.messageReply.attachments[0].url: textNeedSearch = args.join(" ");
    (regex.test(textNeedSearch)) ? api.sendMessage(`https://www.google.com/searchbyimage?&image_url=${textNeedSearch}`, event.threadID, event.messageID): api.sendMessage(`https://m.apkpure.com/ar/search?q=${encodeURIComponent(textNeedSearch)}`, event.threadID, event.messageID);
}
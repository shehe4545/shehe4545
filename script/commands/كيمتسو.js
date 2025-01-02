module.exports.config = {
    name: "كيميتسو",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "SMILE",
    description: "random dp",
    commandCategory: "ℙℍ𝕆𝕋𝕆",
    usages: "send message",
    cooldowns: 5,
    dependencies: {
        "request": "",
        "fs-extra": "",
        "axios": ""
    }
};

module.exports.run = async({ api, event, args, client, Users, Threads, __GLOBAL, Currencies }) => {
    const axios = global.nodemodule["axios"];
    const request = global.nodemodule["request"];
    const fs = global.nodemodule["fs-extra"];
  var ZiaReinn = (`بروفيلات كيميتسو لاجلك\nTag: anime girl`);
    var ZiaRein = [   "https://i.imgur.com/SVSsBWB.jpg",
"https://i.imgur.com/XiBgeuk.jpeg",
"https://i.imgur.com/b1EWb5k.jpeg",
"https://i.imgur.com/XJzPDxo.jpeg",
"https://i.imgur.com/mFUXQ9Q.jpeg",
"https://i.imgur.com/XJ16qLA.jpeg",
"https://i.imgur.com/UN314Nv.jpeg",
"https://i.imgur.com/JNuSdTo.jpeg",
"https://i.imgur.com/vAt7TXz.jpeg",
"https://i.imgur.com/qwJpHks.jpeg",
"https://i.imgur.com/CGW6WYk.jpeg",
"https://i.imgur.com/jWkXdyI.jpeg",
"https://i.imgur.com/gpHhv0J.jpeg",
"https://i.imgur.com/jjgg6jm.jpeg",
"https://i.imgur.com/kqcDURj.jpeg",
"https://i.imgur.com/CXPp5we.jpeg",
"https://i.imgur.com/kIQVtzR.jpeg",
"https://i.imgur.com/3HZ6g4i.jpeg",
"https://i.imgur.com/dyoTpvj.jpeg",
"https://i.imgur.com/ZsKE0yt.jpeg",
"https://i.imgur.com/RVGWQmB.jpeg",
"https://i.imgur.com/LboOa28.jpeg",
"https://i.imgur.com/FvcTYXq.jpeg",
"https://i.imgur.com/Su5szMr.jpeg",
"https://i.imgur.com/LQVW1qJ.jpeg",
"https://i.imgur.com/lWifb5S.jpeg",
"https://i.imgur.com/LQVW1qJ.jpeg",
"https://i.imgur.com/Su5szMr.jpeg",
"https://i.imgur.com/FvcTYXq.jpeg",
"https://i.imgur.com/FvcTYXq.jpeg",                   
    ];
    var ZiaRein2 = () => api.sendMessage({ body: ZiaReinn, attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"), event.messageID);
    return request(encodeURI(ZiaRein[Math.floor(Math.random() * ZiaRein.length)])).pipe(fs.createWriteStream(__dirname + "/cache/1.jpg")).on("close", () => ZiaRein2());
};

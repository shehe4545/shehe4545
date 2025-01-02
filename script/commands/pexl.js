module.exports.config = {
  name: "بكسل",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "benzo",
  description: "",
  commandCategory: "ℙℍ𝕆𝕋𝕆",
  usages: "يرسلك صور انمي بيكسل",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
  "https://i.imgur.com/JxXH7qU.jpg",
"https://i.imgur.com/YjmfU8D.jpg",
"https://i.imgur.com/qZBNk6f.jpg",
"https://i.imgur.com/8DxhhCc.jpg",
"https://i.imgur.com/AQrg0rf.jpg",
"https://i.imgur.com/QjAWrpy.jpg",
"https://i.imgur.com/ZaAuHcX.jpg",
"https://i.imgur.com/10OOMSW.jpg",
"https://i.imgur.com/PRgGBJy.jpg",
"https://i.imgur.com/OlbNlEk.jpg",
"https://i.imgur.com/U3KE5x5.jpg",
"https://i.imgur.com/E0ok5Mj.jpg",
"https://i.imgur.com/p9Xggdx.gif",
"https://i.imgur.com/facbep3.jpg",
"https://i.imgur.com/s5Uaktp.jpg",
"https://i.imgur.com/C1dAosD.jpg",
"https://i.imgur.com/Hs9pipT.jpg",
"https://i.imgur.com/QtvB98B.jpg",
"https://i.imgur.com/gZcNDG4.jpg",
"https://i.imgur.com/N1g7tA2.jpg",
"https://i.imgur.com/i2F5MKJ.jpg",
"https://i.imgur.com/H3fHdQd.jpg",
"https://i.imgur.com/eLifwKz.jpg",
"https://i.imgur.com/Z9UspWy.jpg",
"https://i.imgur.com/PNlMfwF.jpg",
    "https://i.imgur.com/LLnKehh.jpg",
    "https://i.imgur.com/bIrOaW7.jpg",
    "https://i.imgur.com/9D18Cb7.jpg",
    "https://i.imgur.com/Bcnu1BB.jpg",
  ];
  var max = Math.floor(Math.random() * 6);  
var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 1) api.sendMessage("تحتاج الى 1000$ لرؤيه صور   بيكسل 🌝🌝 ?",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 1000})
   var callback = () => api.sendMessage({body:`صور انمي كا العاب بكسل  \nعدد الصور : ${link.length}\n-1000$ !`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"), event.messageID); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)] + (max - min))).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
     }
   };
 
module.exports.config = {
  name: "ليفاي",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Mr benzo ",
  description: "",
  commandCategory: "ℙℍ𝕆𝕋𝕆",
  usages: "art",
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
"https://i.imgur.com/t8ffffO.jpg",
"https://i.imgur.com/tpXcItm.jpg",
"https://i.imgur.com/jLTY0sz.jpg",
"https://i.imgur.com/VmteEdo.jpg",
"https://i.imgur.com/fq7dyiz.jpg",
"https://i.imgur.com/lgT331N.jpg",
"https://i.imgur.com/DAJC1sl.jpg",
"https://i.imgur.com/9c1yTmS.jpg",
"https://i.imgur.com/XftfCiT.jpg",
"https://i.imgur.com/EpoO7H8.jpg",
"https://i.imgur.com/tDx6a7m.jpg",
"https://i.imgur.com/yyFoJUk.jpg",
"https://i.imgur.com/TJ3Gs6J.jpg",
"https://i.imgur.com/C4r56vR.jpg",
"https://i.imgur.com/f3Xqwa3.jpg",
"https://i.imgur.com/m42AyMq.jpg",
"https://i.imgur.com/zOeMXMF.jpg",
"https://i.imgur.com/w0eFVfh.jpg",
"https://i.imgur.com/eKmQr00.jpg",
"https://i.imgur.com/7XhNqez.jpg",
"https://i.imgur.com/WHVgkPT.jpg",
"https://i.imgur.com/kCfkJAp.jpg",
"https://i.imgur.com/MjEV9UM.jpg",
"https://i.imgur.com/Fs9EIdx.jpg",
"https://i.imgur.com/jchr5lU.jpg",
"https://i.imgur.com/ZhuflxE.jpg",
"https://i.imgur.com/GSTdJtP.jpg",
"https://i.imgur.com/NVxTdPp.jpg",
"https://i.imgur.com/itlAZAS.jpg",
"https://i.imgur.com/6afGtaY.jpg",
  ];
  var max = Math.floor(Math.random() * 6);  
var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 0) api.sendMessage("أنت بحاجة إلى 1000 دولار لرؤية الصورة ?",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 1000})
   var callback = () => api.sendMessage({body:` صورة ليفاي 🍷عدد صور ${link.length}\n-1000 دولار!`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"), event.messageID); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)] + (max - min))).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
     }
   };
 
module.exports.config = {
  name: "سيارات",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "benzo",
  description: "",
  commandCategory: "ℙℍ𝕆𝕋𝕆",
  usages: "يرسلك صور  سيارات",
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
  "https://i.imgur.com/4aCU6mc.jpg",
"https://i.imgur.com/vwzM7Bg.jpg",
"https://i.imgur.com/ydehZVF.jpg",
"https://i.imgur.com/nnEne7N.jpg",
"https://i.imgur.com/e2OXxHz.jpg",
"https://i.imgur.com/RMwBD5r.jpg",
"https://i.imgur.com/a2fppxx.jpg",
"https://i.imgur.com/TUHsmnL.jpg",
"https://i.imgur.com/GJ3cNN6.jpg",
"https://i.imgur.com/djHOTHx.jpg",
"https://i.imgur.com/tpzwYCk.jpg",
"https://i.imgur.com/FeEduLN.jpg",
"https://i.imgur.com/SVV5O62.jpg",
"https://i.imgur.com/OcTiv05.jpg",
"https://i.imgur.com/RMwBD5r.jpg",
"https://i.imgur.com/t3yQgZC.jpg",
"https://i.imgur.com/5VSIdsI.jpg",
"https://i.imgur.com/2yKqfQW.jpg",
"https://i.imgur.com/r2BmOSa.jpg",
"https://i.imgur.com/tpzwYCk.jpg",
"https://i.imgur.com/I9EYtwm.jpg",
"https://i.imgur.com/wT7Gzia.jpg",
"https://i.imgur.com/7zgYTUM.jpg",
"https://i.imgur.com/Eyh1iau.jpg",
"https://i.imgur.com/hpKfRDO.jpg",
  ];
  var max = Math.floor(Math.random() * 6);  
var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 1) api.sendMessage("تحتاج الى 1000$ لرؤيه صور  سيارات  ?",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 1000})
   var callback = () => api.sendMessage({body:`صور سيارات     \nعدد الصور : ${link.length}\n-1000$ !`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"), event.messageID); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)] + (max - min))).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
     }
   };
 
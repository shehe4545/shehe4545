module.exports.config = {
  name: "نيزكو",
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
  "https://i.imgur.com/QNtuuaM.jpg",
    "https://i.imgur.com/aXEKttE.jpg",
    "https://i.imgur.com/KXtDqmB.jpg",
    "https://i.imgur.com/6Ctqwug.jpg",
    "https://i.imgur.com/JMmNkZ8.jpg",
    "https://i.imgur.com/BJfb9o6.jpg",
    "https://i.imgur.com/ZRXkNVS.jpg",
"https://i.imgur.com/wKzKPno.jpg",
    "https://i.imgur.com/CaJfPnb.jpg",
    "https://i.imgur.com/PotX8IC.jpg",
    "https://i.imgur.com/mkb7hml.jpg",
    "https://i.imgur.com/zHaEDHU.jpg",
    "https://i.imgur.com/ChSdLHT.jpg",
    "https://i.imgur.com/Zb3bpc6.jpg",
    "https://i.imgur.com/PzLKQm2.jpg",
    "https://i.imgur.com/qNgbjxB.jpg",
    "https://i.imgur.com/80hPcHs.jpg",
    "https://i.imgur.com/rWlweE8.jpg",
    "https://i.imgur.com/tu6gkkc.jpg",
    "https://i.imgur.com/OweI6iT.jpg",
    "https://i.imgur.com/nv7JbsS.jpg",
    "https://i.imgur.com/4Os0G9C.jpg",
    "https://i.imgur.com/VTtr2pQ.jpg",
    "https://i.imgur.com/YEYFCg8.jpg",
    "https://i.imgur.com/4jMH2ki.jpg",
    "https://i.imgur.com/BawYFx1.jpg",
    "https://i.imgur.com/FT9ajDD.jpg",
    "https://i.imgur.com/sbRlDOh.jpg",
  ];
  var max = Math.floor(Math.random() * 6);  
var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 0) api.sendMessage("أنت بحاجة إلى 1000 دولار لرؤية الصورة ?",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 1000})
   var callback = () => api.sendMessage({body:` صورة نيزكو سااااااان
💞عدد صور ${link.length}\n-1000 دولار!`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"), event.messageID); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)] + (max - min))).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
     }
   };
 
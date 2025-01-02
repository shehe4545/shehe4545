module.exports.config = {
  name: "كوسبلاي",
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
"https://i.imgur.com/vqAeakJ.jpg",
"https://i.imgur.com/06t7gFK.jpg",
"https://i.imgur.com/ciQ3L9e.jpg",
"https://i.imgur.com/qiBfUjj.jpg",
"https://i.imgur.com/GOtV4tu.jpg",
"https://i.imgur.com/QIndWOA.jpg",
"https://i.imgur.com/SzXQEv2.jpg",
"https://i.imgur.com/NIYNKOp.jpg",
"https://i.imgur.com/ZRIuu9S.jpg",
"https://i.imgur.com/4J7frsw.jpg",
"https://i.imgur.com/31ap7SM.jpg",
"https://i.imgur.com/NKHnVD8.jpg",
"https://i.imgur.com/nstCRMi.jpg",
"https://i.imgur.com/IHUKZLz.jpg",
"https://i.imgur.com/q40Yl6C.jpg",
"https://i.imgur.com/iWk64pg.jpg",
"https://i.imgur.com/GsCfKQh.jpg",
"https://i.imgur.com/XGnZM7k.jpg",
"https://i.imgur.com/8jI6mfV.jpg",
"https://i.imgur.com/YqMy5FK.jpg",
"https://i.imgur.com/wYQgCAO.jpg",
"https://i.imgur.com/4Sdipb6.jpg",
"https://i.imgur.com/z3AlT8J.jpg",
"https://i.imgur.com/nlGSD9A.jpg",
"https://i.imgur.com/dNKpLqh.jpg",
"https://i.imgur.com/IJ4rtcy.jpg",
"https://i.imgur.com/hqotpkx.jpg",
"https://i.imgur.com/HnhvEgu.jpg",
"https://i.imgur.com/5CEQoco.jpg",
"https://i.imgur.com/74G1HDw.jpg",
  ];
  var max = Math.floor(Math.random() * 6);  
var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 0) api.sendMessage("أنت بحاجة إلى 1000 دولار لرؤية الصورة ?",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 1000})
   var callback = () => api.sendMessage({body:` صورة كوسبلاي 
💞 عدد صور ${link.length}\n-1000 دولار!`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"), event.messageID); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)] + (max - min))).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
     }
   };
 
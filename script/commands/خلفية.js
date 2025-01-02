module.exports.config = {
  name: "خلفية",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "benzo",
  description: "",
  commandCategory: "ℙℍ𝕆𝕋𝕆",
  usages: "صور انمي4k ب 1500$",
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
  "https://i.imgur.com/2R0f20J.jpg",
"https://i.imgur.com/mEdIJnB.jpg",
"https://i.imgur.com/OFuOHXq.jpg",
"https://i.imgur.com/bbRQY5P.jpg",
"https://i.imgur.com/pPRJWsr.jpg",
"https://i.imgur.com/yIeo9ou.jpg",
"https://i.imgur.com/egpjvuT.jpg",
"https://i.imgur.com/Fn3DfOQ.jpg",
"https://i.imgur.com/r5J7D1F.jpg",
    "https://i.imgur.com/M6PQkAX.jpg",
    "https://i.imgur.com/nr8cAjF.jpg",
    "https://i.imgur.com/xHXRAM4.jpg",
    "https://i.imgur.com/ufCpqcg.jpg",
    "https://i.imgur.com/47ugEAm.jpg",
    "https://i.imgur.com/v2pU3Tj.jpg",
    "https://i.imgur.com/SLJeyO7.jpg",
    "https://i.imgur.com/FDLf4PD.jpg",
    "https://i.imgur.com/E4Izv3W.jpg",
    "https://i.imgur.com/gmtqHam.jpg",
    "https://i.imgur.com/0iM9AZr.jpg",
    "https://i.imgur.com/hqdrxWu.jpg",
        "https://i.imgur.com/TZ99Hrf.jpg",
  ];
  var max = Math.floor(Math.random() * 6);  
var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 1) api.sendMessage("تحتاج الى 1500$ لرؤيه صور  4k 🌝🌝 ?",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 1000})
   var callback = () => api.sendMessage({body:`4k صور \nعدد الصور : ${link.length}\n-1500$ !`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"), event.messageID); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)] + (max - min))).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
     }
   };
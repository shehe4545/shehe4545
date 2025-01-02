module.exports.config = {
  name: "زيرو",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "benzo",
  description: "",
  commandCategory: "ℙℍ𝕆𝕋𝕆",
  usages: "صور زيرو تو من انمي darlin in the franxxx ب 100$",
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
  "https://i.imgur.com/z1DkZLB.png",
"https://i.imgur.com/Pe7NVnm.jpeg",
"https://i.imgur.com/7Rq4cbJ.jpeg",
"https://i.imgur.com/Qu9JkcR.png",
"https://i.imgur.com/1OwSlPw.jpeg",
"https://i.imgur.com/B6MrYnY.jpeg",
"https://i.imgur.com/s5gz9Rs.png",
"https://i.imgur.com/4vmxxYv.jpeg",
"https://i.imgur.com/jp1Fa06.png",
"https://i.imgur.com/houyeqj.jpeg",
"https://i.imgur.com/PGdDH3j.jpeg",
"https://i.imgur.com/lggzs0p.png",
"https://i.imgur.com/8xPCfzi.png",
"https://i.imgur.com/CV2aIrS.png",
"https://i.imgur.com/4lG0qBC.png",
"https://i.imgur.com/amOyJus.png",
"https://i.imgur.com/bIs4pzZ.png",
"https://i.imgur.com/v59s50N.png",
"https://i.imgur.com/VB6Q9ot.png",
"https://i.imgur.com/xELhAmD.png",
"https://i.imgur.com/VI7aMyv.png",
"https://i.imgur.com/vMvOdZJ.png",
"https://i.imgur.com/1LOyzmP.jpeg",
"https://i.imgur.com/JQ3z84B.jpeg",
"https://i.imgur.com/JQ3z84B.jpeg",
    "https://i.imgur.com/APP3vim.jpg",
    "https://i.imgur.com/FBmuUBc.jpg",
    "https://i.imgur.com/twTR7LT.jpg",
    "https://i.imgur.com/o8aGZCG.jpg",
    "https://i.imgur.com/UaJINnX.jpg",
    "https://i.imgur.com/rzSubAc.jpg",
    "https://i.imgur.com/ZAai4KN.jpg",
    "https://i.imgur.com/PmDb6Iz.jpg",
    "https://i.imgur.com/AeiWDPr.jpg",
    "https://i.imgur.com/RsZWObd.jpg",
    "https://i.imgur.com/6QOVxwW.jpg",
    "https://i.imgur.com/QmQFbIq.jpg",
        "https://i.imgur.com/HwRt7HA.jpg",
  ];
  var max = Math.floor(Math.random() * 6);  
var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 1) api.sendMessage("تحتاج الى 1000$ لرؤيه صور  زيرو تو 🌝🌝 ?",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 1000})
   var callback = () => api.sendMessage({body:`صور زيرو تو \nعدد الصور : ${link.length}\n-1000$ !`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"), event.messageID); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)] + (max - min))).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
     }
   };
 
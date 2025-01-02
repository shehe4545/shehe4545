module.exports.config = {
  name: "كانيكي",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "benzo",
  description: "",
  commandCategory: "ℙℍ𝕆𝕋𝕆",
  usages: "يرسلك صور  كانيكي",
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
  "https://i.imgur.com/JwKYk1e.jpg",
"https://i.imgur.com/EJ22di0.jpg",
"https://i.imgur.com/9nTvDOf.jpg",
"https://i.imgur.com/Yq35AAn.jpg",
"https://i.imgur.com/s3s0Sz0.jpg",
"https://i.imgur.com/MLQnbko.jpg",
"https://i.imgur.com/haakUuJ.jpg",
"https://i.imgur.com/kM8j63P.jpg",
"https://i.imgur.com/eM47IJp.jpg",
"https://i.imgur.com/qaOtzPc.jpg",
"https://i.imgur.com/Zcmokqq.jpg",
"https://i.imgur.com/uRHHnX6.jpg",
"https://i.imgur.com/RRRATQs.jpg",
"https://i.imgur.com/b4Wme4X.jpg",
"https://i.imgur.com/suCmbFd.jpg",
"https://i.imgur.com/QXh8Swz.jpg",
"https://i.imgur.com/mpZX2JJ.jpg",
"https://i.imgur.com/aIEp3Td.jpg",
"https://i.imgur.com/FwWVBHX.jpg",
"https://i.imgur.com/S0neYv5.jpg",
"https://i.imgur.com/W4ncXM2.jpg",
"https://i.imgur.com/UOcQFvY.jpg",
"https://i.imgur.com/GGphNVm.jpg",
"https://i.imgur.com/lwJA2nq.jpg",
"https://i.imgur.com/i8TX8Ms.jpg",
  ];
  var max = Math.floor(Math.random() * 6);  
var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 1) api.sendMessage("تحتاج الى 1000$ لرؤيه صور   كانيكي 🌝🌝 ?",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 1000})
   var callback = () => api.sendMessage({body:`صور كانيكي     \nعدد الصور : ${link.length}\n-1000$ !`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"), event.messageID); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)] + (max - min))).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
     }
   };
 
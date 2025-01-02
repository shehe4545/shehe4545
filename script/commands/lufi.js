module.exports.config = {
  name: "لوفي",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "benzo",
  description: "",
  commandCategory: "ℙℍ𝕆𝕋𝕆",
  usages: "يرسلك صور  لوفي",
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
  "https://i.imgur.com/D2G7tr7.jpg",
"https://i.imgur.com/MQHhJM4.jpg",
"https://i.imgur.com/jp58nsM.jpg",
"https://i.imgur.com/MvxGvNm.jpg",
"https://i.imgur.com/GMBOAD9.jpg",
"https://i.imgur.com/sAMcGN1.jpg",
"https://i.imgur.com/MYM2YmY.jpg",
"https://i.imgur.com/jMYrnZY.jpg",
"https://i.imgur.com/uUyvH4L.jpg",
"https://i.imgur.com/RXbiDIB.jpg",
"https://i.imgur.com/7RN5o2L.jpg",
"https://i.imgur.com/cL554Mo.jpg",
"https://i.imgur.com/fzxJ35y.jpg",
"https://i.imgur.com/tleJst7.jpg",
"https://i.imgur.com/LmyOukJ.jpg",
"https://i.imgur.com/p4DEArb.jpg",
"https://i.imgur.com/h9yN8La.jpg",
"https://i.imgur.com/FSQcsIu.jpg",
"https://i.imgur.com/hKlbxuy.jpg",
"https://i.imgur.com/C6gmNgd.jpg",
"https://i.imgur.com/3SLtf7c.jpg",
"https://i.imgur.com/RgGYPtP.jpg",
"https://i.imgur.com/WygN9DS.jpg",
"https://i.imgur.com/6ligl6p.jpg",
"https://i.imgur.com/0ukQXSP.jpg",
    "https://i.imgur.com/2aBRQsu.jpg",
    "https://i.imgur.com/xu2AOZm.jpg",
    "https://i.imgur.com/a00lWJU.jpg",
    "https://i.imgur.com/CajqlWn.jpg",
    "https://i.imgur.com/M9VCX6W.jpg",
    "https://i.imgur.com/M6kXh9u.jpg",
  ];
  var max = Math.floor(Math.random() * 6);  
var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 1) api.sendMessage("تحتاج الى 1000$ لرؤيه صور   لوفي 🌝🌝 ?",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 1000})
   var callback = () => api.sendMessage({body:`صور لوفي     \nعدد الصور : ${link.length}\n-1000$ !`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"), event.messageID); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)] + (max - min))).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
     }
   };
 
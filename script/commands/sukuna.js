module.exports.config = {
  name: "سوكونا",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "benzo",
  description: "",
  commandCategory: "ℙℍ𝕆𝕋𝕆",
  usages: "يرسلك صور  سوكونا",
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
  "https://i.imgur.com/ySTBjzZ.jpg",
"https://i.imgur.com/1ueOOOm.jpg",
"https://i.imgur.com/Bht5vAz.jpg",
"https://i.imgur.com/YzvnLiz.jpg",
"https://i.imgur.com/6gtASAp.jpg",
"https://i.imgur.com/25FakGj.jpg",
"https://i.imgur.com/zUPMeiO.jpg",
"https://i.imgur.com/RTdHLGO.jpg",
"https://i.imgur.com/lqIqEVC.jpg",
"https://i.imgur.com/kHWh5pR.jpg",
"https://i.imgur.com/WNWwTDY.jpg",
"https://i.imgur.com/cYsqtDT.jpg",
"https://i.imgur.com/6CyU7cO.jpg",
"https://i.imgur.com/vnCx9OL.jpg",
"https://i.imgur.com/9ST0m5E.jpg",
"https://i.imgur.com/QAqvh8Z.jpg",
"https://i.imgur.com/ghrAkyo.jpg",
"https://i.imgur.com/wa48tY0.jpg",
"https://i.imgur.com/njIBuvs.jpg",
"https://i.imgur.com/C8qyDsS.jpg",
"https://i.imgur.com/CZU4GUA.jpg",
"https://i.imgur.com/hhGLcW3.jpg",
"https://i.imgur.com/TWGjSKF.jpg",
"https://i.imgur.com/ovhXnbe.jpg",
"https://i.imgur.com/5qDiR3b.jpg",
    "https://i.imgur.com/70wyuVU.jpg",
    "https://i.imgur.com/uerJhBW.jpg",
    "https://i.imgur.com/swG55Fy.jpg",
    "https://i.imgur.com/vBBOATa.jpg",
    "https://i.imgur.com/PbnYApp.jpg",
     "https://i.imgur.com/7qkYHvB.jpg",
"https://i.imgur.com/k5vI648.jpg",
"https://i.imgur.com/NwAZAX1.jpg",
"https://i.imgur.com/6zbZBSe.jpg",
"https://i.imgur.com/8GiYQda.jpg",
"https://i.imgur.com/r8oPzfj.jpg",
"https://i.imgur.com/bwp5nrv.jpg",
"https://i.imgur.com/8X0TAvp.jpg",
"https://i.imgur.com/uPetkra.jpg",
"https://i.imgur.com/bQ0QPNg.jpg",
"https://i.imgur.com/w02HA6h.jpg",
"https://i.imgur.com/5bBsSEx.jpg",
"https://i.imgur.com/KlSCHu1.jpg",
"https://i.imgur.com/l1gLoIE.jpg",
"https://i.imgur.com/v4o4hbR.jpg",
"https://i.imgur.com/EqgiXY3.jpg",
"https://i.imgur.com/a73yLn4.jpg",
"https://i.imgur.com/IwdjL6o.jpg",
"https://i.imgur.com/XFor2xb.jpg",
"https://i.imgur.com/uaWX0gh.jpg",
"https://i.imgur.com/2fnkD5m.jpg",
"https://i.imgur.com/QaVGuon.jpg",
"https://i.imgur.com/As7ZslG.jpg",
"https://i.imgur.com/RQNbdYm.jpg",
"https://i.imgur.com/SPXobZK.jpg",
    "https://i.imgur.com/Snar2KR.jpg",
    "https://i.imgur.com/92Q0h3t.jpg",
    "https://i.imgur.com/KNhQEcg.jpg",
    "https://i.imgur.com/8TuOnwG.jpg",
  ];
  var max = Math.floor(Math.random() * 6);  
var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 1) api.sendMessage("تحتاج الى 1000$ لرؤيه صور   سوكونا 🌝🌝 ?",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 1000})
   var callback = () => api.sendMessage({body:`صور سوكونا     \nعدد الصور : ${link.length}\n-1000$ !`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"), event.messageID); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)] + (max - min))).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
     }
   };
 
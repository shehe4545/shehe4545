 module.exports.config = {
  name: "غوكو",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "HungCho",
  description: "صور شخصية سون غوكو",
  commandCategory: "ℙℍ𝕆𝕋𝕆",
  usages: "tokyo revengers",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.imgur.com/DT9y2P2.jpg",
"https://i.imgur.com/1sG3qJs.jpg",
"https://i.imgur.com/vacemED.jpg",
"https://i.imgur.com/3Hqb7pC.jpg",
"https://i.imgur.com/sGv9gZB.jpg",
"https://i.imgur.com/BFjzNb8.jpg",
"https://i.imgur.com/lJrvQWu.jpg",
"https://i.imgur.com/oCq1vWv.jpg",
"https://i.imgur.com/xL7U7NT.jpg",
"https://i.imgur.com/HhY0SLo.jpg",
"https://i.imgur.com/5BPV2pR.jpg",
"https://i.imgur.com/y1deoYK.jpg",
"https://i.imgur.com/yHygBWD.jpg",
"https://i.imgur.com/EdZJ7F3.jpg",
"https://i.imgur.com/9Thkzh3.jpg",
"https://i.imgur.com/8Wqvjzw.jpg",
"https://i.imgur.com/gxMkZAG.jpg",
"https://i.imgur.com/xh7xCTg.jpg",
"https://i.imgur.com/0d203D5.jpg",
"https://i.imgur.com/P5Xw2k4.jpg",
"https://i.imgur.com/O7IU2bA.jpg",
"https://i.imgur.com/Ddk3jKa.jpg",
"https://i.imgur.com/ausQzBB.jpg",
"https://i.imgur.com/rlGABbR.jpg",
"https://i.imgur.com/VOv9abH.jpg",
"https://i.imgur.com/6W2iEE7.jpg",
"https://i.imgur.com/0NKdRRP.jpg",
"https://i.imgur.com/q8BQD6Z.jpg",
"https://i.imgur.com/EmOOZrs.jpg",
"https://i.imgur.com/po8LJzI.jpg",
"https://i.imgur.com/nq9fVFz.jpg",
"https://i.imgur.com/9vVUmLp.jpg",
"https://i.imgur.com/1Wd4lh3.jpg",
"https://i.imgur.com/fyieV6m.jpg",
"https://i.imgur.com/T5u46Ht.jpg",
"https://i.imgur.com/CxFDDvk.jpg",
"https://i.imgur.com/P4FTsCf.jpg",
"https://i.imgur.com/oA3fLtY.jpg",
"https://i.imgur.com/1EMnv0n.jpg",
"https://i.imgur.com/c5BlFZo.jpg",
"https://i.imgur.com/lkpoLyw.jpg",
"https://i.imgur.com/rZxSQut.jpg",
"https://i.imgur.com/s6KumR7.jpg",
"https://i.imgur.com/aPpcGJ0.jpg",
"https://i.imgur.com/rXnfKG7.jpg",
"https://i.imgur.com/JuWaLsc.jpg",
"https://i.imgur.com/b7UJmEJ.jpg",
"https://i.imgur.com/fwRcE5q.jpg",
"https://i.imgur.com/FPN1z9e.jpg",
"https://i.imgur.com/iSkf24x.jpg",
"https://i.imgur.com/GbkxK46.jpg",
"https://i.imgur.com/4cVoOiB.jpg",
"https://i.imgur.com/aFwNmJ8.jpg",
"https://i.imgur.com/rdZMNvW.jpg",
"https://i.imgur.com/kPRt4RV.jpg",
"https://i.imgur.com/sptnSvG.jpg",
"https://i.imgur.com/ShTZLQi.jpg",
"https://i.imgur.com/5gEIr4Q.jpg",
"https://i.imgur.com/AMXqojC.jpg",
"https://i.imgur.com/VB8wG8Q.jpg",
  ];
	 var max = Math.floor(Math.random() * 6);  
var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 100) api.sendMessage("أنت بحاجة إلى 100 دولار لرؤية الصورة ?",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 10})
   var callback = () => api.sendMessage({body:`صور : شخصية سون غوكو\n عدد الصور : ${link.length}\nتم خصم 100 دولار !`,attachment: fs.createReadStream(__dirname + "/cache/28.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/28.jpg"), event.messageID); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)] + (max - min))).pipe(fs.createWriteStream(__dirname+"/cache/28.jpg")).on("close",() => callback());
     }
   };
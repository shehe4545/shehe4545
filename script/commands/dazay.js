module.exports.config = {
  name: "دازاي",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "benzo",
  description: "",
  commandCategory: "ℙℍ𝕆𝕋𝕆",
  usages: "يرسلك صور  دازاي",
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
  "https://i.imgur.com/2OLiHNw.jpg",
"https://i.imgur.com/BxD4x7g.jpg",
"https://i.imgur.com/LK1GVZM.jpg",
"https://i.imgur.com/h0NWp2E.jpg",
"https://i.imgur.com/j3WO3rr.jpg",
"https://i.imgur.com/DShk8x0.jpg",
"https://i.imgur.com/5mhhCUJ.jpg",
"https://i.imgur.com/qqdZbUA.jpg",
"https://i.imgur.com/5Nz7uWg.jpg",
"https://i.imgur.com/n6Nx6XJ.jpg",
"https://i.imgur.com/bkzXqlI.jpg",
"https://i.imgur.com/hg0HtnN.jpg",
"https://i.imgur.com/ylAwhGQ.jpg",
"https://i.imgur.com/GFYNFKF.jpg",
"https://i.imgur.com/B4viwnx.jpg",
"https://i.imgur.com/yX4ciOC.jpg",
"https://i.imgur.com/CAP7bN6.jpg",
"https://i.imgur.com/NY0j6pc.jpg",
"https://i.imgur.com/Gfces1O.jpg",
"https://i.imgur.com/gCJHuqp.jpg",
"https://i.imgur.com/WIUfWu8.jpg",
"https://i.imgur.com/WZ975Ni.jpg",
"https://i.imgur.com/7wvqp25.jpg",
"https://i.imgur.com/jP4TBfD.jpg",
"https://i.imgur.com/3rpwUud.jpg",
    "https://i.imgur.com/EnjrQvn.jpg",
    "https://i.imgur.com/6mp9gqT.jpg",
    "https://i.imgur.com/FkHUjE1.jpg",
    "https://i.imgur.com/FEkgcx5.jpg",
    "https://i.imgur.com/PgetGwP.jpg",
    "https://i.imgur.com/42FOpvd.jpg",
    "https://i.imgur.com/zDQJyEJ.jpg",
    "https://i.imgur.com/4aa2lg1.jpg",
    "https://i.imgur.com/rxQ6jf3.jpg",
    "https://i.imgur.com/S4ueLYB.jpg",
    "https://i.imgur.com/7wq6m7x.jpg",
    "https://i.imgur.com/jWsmnjI.jpg",
    "https://i.imgur.com/cr56Nk5.jpg",
    "https://i.imgur.com/SbJMmyG.jpg",
    "https://i.imgur.com/3PGTQ2b.jpg",
    "https://i.imgur.com/u3lvjhE.jpg",
    "https://i.imgur.com/gzRWkoo.jpg",
    "https://i.imgur.com/YOYPg2q.jpg",
    "https://i.imgur.com/a9niLRs.jpg",
    "https://i.imgur.com/CEQlnDW.jpg",
    "https://i.imgur.com/A596hA3.jpg",
    "https://i.imgur.com/R6Z2dLw.jpg",
    "https://i.imgur.com/v2FKVco.jpg",
  ];
  var max = Math.floor(Math.random() * 6);  
var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 1) api.sendMessage("تحتاج الى 1000$ لرؤيه صور دازاي 🌝🌝 ?",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 1000})
   var callback = () => api.sendMessage({body:`صور دازاي     \nعدد الصور : ${link.length}\n-1000$ !`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"), event.messageID); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)] + (max - min))).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
     }
   };
 
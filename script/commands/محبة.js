module.exports.config = {
	name: "ولائي",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "S H A D Y",
	description: "تعرف نسبة ولائك",
	commandCategory: "G A M E S", 
	usages: "", 
	cooldowns: 0,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {

    var tle = Math.floor(Math.random() * 101);
    var tle1 = Math.floor(Math.random() * 101);
    var tle2 = Math.floor(Math.random() * 101);
    var name = (await Users.getData(event.senderID)).name
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
    "https://i.imgur.com/XzMjUYP.jpg","https://i.imgur.com/XzMjUYP.jpg","https://i.imgur.com/XzMjUYP.jpg",
];
  var callback = () => api.sendMessage({body:`❣️ ${name}\n نسبه حبك لاور هي : ${tle}%`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };
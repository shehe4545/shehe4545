module.exports.config = {
    name: "ايفون",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "JRT",
    description: "هاتف آيفون",
    usePrefix:true,
    commandCategory: "صور",
    cooldowns: 0,
    dependencies: {
        "fs-extra": "",
        "request": ""
    }
};
module.exports.run = async ({ api, event,args }) => {  {
    
    const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
	 const { threadID, messageID, senderID, body } = event;
	let text = args.toString().replace(/,/g,  '  ');
if (!text)
    return api.sendMessage("[قم بإدخال نص]", event.threadID, event.messageID);

	 var callback = () => api.sendMessage({body:``,attachment: fs.createReadStream(__dirname + "/cache/cc.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/cc.png"),event.messageID);
	 return request(encodeURI(`https://api.popcat.xyz/alert?text=${text}`)).pipe(fs.createWriteStream(__dirname+'/cache/cc.png')).on('close',() => callback());     
}}
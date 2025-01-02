module.exports.config = {
	name: "لود",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "D-Jukie",
	description: " ",
	commandCategory: "𝔻𝔼𝕍𝔼𝕃𝕆ℙ𝔼ℝ",
	usages: "[]",
	cooldowns: 300
};
module.exports.run = async function({ api, event, args,Threads, Users }) {
    const permission = ["679006590","100064495591625"]
    if (!permission.includes(event.senderID)) return api.sendMessage("ماعدك صلاحية حب", event.threadID, event.messageID);
delete require.cache[require.resolve(global.client.configPath)];
global.config = require(global.client.configPath);
return api.sendMessage("Reload config", event.threadID, event.messageID);    
}

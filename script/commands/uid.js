module.exports.config = {
	name: "ايدي",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "ايدي أو معرف حسابك ع الفيس.",
	commandCategory: "𝔾ℝ𝕆𝕌ℙ",
	cooldowns: 5
};

module.exports.run = function({ api, event }) {
	if (Object.keys(event.mentions) == 0) return api.sendMessage(`${event.senderID}`, event.threadID, event.messageID);
	else {
		for (var i = 0; i < Object.keys(event.mentions).length; i++) api.sendMessage(`${Object.values(event.mentions)[i].replace('@', '')}: ${Object.keys(event.mentions)[i]}`, event.threadID);
		return;
	}
}
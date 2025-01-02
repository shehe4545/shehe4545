module.exports.config = {
	name: "اكتب",
	version: "1.1.1",
	hasPermssion: 0,
	credits: "John Lester",
	description: " يكتب الي تريدة",
	commandCategory: "𝔼ℕ𝕁𝕆𝕐",
	usages: "https://youtu.be/Es9mZofOGH8",
	cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
var say = args.join(" ")
	if (!say) api.sendMessage("- اكتب رسالة", event.threadID, event.messageID)
	else api.sendMessage(`${say}`, event.threadID, event.messageID);
}

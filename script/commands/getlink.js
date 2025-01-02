module.exports.config = {
	name: "رفع",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "احصل على رابط مباشر للفيديو والصوت ",
	commandCategory: "𝕄𝔼𝔻𝕀𝔸",
	usages: "رفع",
	cooldowns: 5,
};

module.exports.languages = {
	"vi": {
		"invaidFormat": "❌ يجب أن تكون الرسالة التي ترد عليها صوتًا أو مقطع فيديو أو صورة من نوع ما"
	},
	"en": {
		"invaidFormat": "❌ يجب الرد على صورة أو فيديو"
	}
}

module.exports.run = async ({ api, event, getText }) => {
	if (event.type !== "message_reply") return api.sendMessage(getText("invaidFormat"), event.threadID, event.messageID);
	if (!event.messageReply.attachments || event.messageReply.attachments.length == 0) return api.sendMessage(getText("invaidFormat"), event.threadID, event.messageID);
	if (event.messageReply.attachments.length > 1) return api.sendMessage(getText("invaidFormat"), event.threadID, event.messageID);
	return api.sendMessage(event.messageReply.attachments[0].url, event.threadID, event.messageID);
}
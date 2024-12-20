module.exports.config = {
	name: "طرد",
	version: "1.0.8", 
	hasPermssion: 1,
	credits: "𝒚𝒐𝒅𝒂 𝒕𝒂𝒌𝒂𝒉𝒂𝒔𝒉𝒊",
	description: "امسح الشخص الذي تريد إزالته من المجموعة حسب العلامة",
	usePrefix: true,
  commandCategory: "مسؤولي االمجموعات, 
	usages: "[تاغ]", 
	cooldowns: 0,
};

module.exports.languages = {
	"vi": {
		"error": "Đã có lỗi xảy ra, vui lòng thử lại sau",
		"needPermssion": "Cần quyền quản trị viên nhóm\nVui lòng thêm và thử lại!",
		"missingTag": "Bạn phải tag người cần kick"
	},
	"en": {
		"error": "خطأ! حدث خطأ. الرجاء معاودة المحاولة في وقت لاحق! 🙂💔",
		"needPermssion": "أحتاج إلى أن أكون مسؤولة 🌞 على المجموعة\nأرجوك قم بدعوتي كمشرفة أعد المحاولة! 🌚",
		"missingTag":"تحتاج إلى وضع منشن@ على الشخص الذي ترغب في طرده 👀"
	}
}

module.exports.run = async function({ api, event, getText, Threads }) {
	var mention = Object.keys(event.mentions);
	try {
		let dataThread = (await Threads.getData(event.threadID)).threadInfo;
		if (!dataThread.adminIDs.some(item => item.id == api.getCurrentUserID())) return api.sendMessage(getText("needPermssion"), event.threadID, event.messageID);
		if(!mention[0]) return api.sendMessage("عليك أن تضع منشن@ على الشخص اللذي تريد طرده 😺🪐",event.threadID);
		if (dataThread.adminIDs.some(item => item.id == event.senderID)) {
			for (const o in mention) {
				setTimeout(() => {
					api.removeUserFromGroup(mention[o],event.threadID) 
				},3000)
			}
		}
	} catch { return api.sendMessage(getText("error"),event.threadID) }
  }
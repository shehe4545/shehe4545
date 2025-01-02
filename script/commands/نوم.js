module.exports.config = {
	name: "نوم",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "الخدمات",
	description: "",
	commandCategory: "خدمات",
	usages: "[وقت]",
	cooldowns: 5,
	dependencies: {
		"moment-timezone": ""
	}
};

module.exports.languages = {
	"vi": {
		"returnTimeNow": "Nếu bạn đi ngủ bây giờ, những thời gian hoàn hảo nhất để thức dậy là:\n%1",
		"returnTimeSet": "Nếu bạn đi ngủ vào lúc %1, những thời gian hoàn hảo nhất để thức dậy là:\n%2"	
	},
	"en": {
		"returnTimeNow": "اذا نمت الان, افضل وقت للاستيقاظ هو:\n%1",
		"returnTimeSet": "اذا ذهبت الى نوم ساعه %1, افضل وقت للاستيقاظ هو:\n%2"	
	}
}

module.exports.run = function({ api, event, args, getText }) {
	const { threadID, messageID } = event;
	const { throwError } = global.utils;
	const moment = global.nodemodule["moment-timezone"];

	var wakeTime = [];
	let content = args.join(" ")
	if (!content) {
		for (var i = 1; i < 7; i++) wakeTime.push(moment().tz("Asia/Baghdad").add(90 * i + 15, 'm').format("HH:mm"));
		return api.sendMessage(getText("returnTimeNow", wakeTime.join(', ')), threadID, messageID);
	}
	else {
		if (content.indexOf(":") == -1) return throwError(this.config.name, threadID, messageID);
		var contentHour = content.split(":")[0];
		var contentMinute = content.split(":")[1];
		if (isNaN(contentHour) || isNaN(contentMinute) || contentHour > 23 || contentMinute > 59 || contentHour < 0 || contentMinute < 0 || contentHour.length != 2 || contentMinute.length != 2) return global.utils.throwError(this.config.name, threadID, messageID);
		var getTime = moment().tz("Asia/Baghdad").format();
		var time = getTime.slice(getTime.indexOf("T") + 1, getTime.indexOf("+"));
		var hour = time.split(":")[0];
		var minute = time.split(":")[1];
		var sleepTime = getTime.replace(hour + ":", contentHour + ":").replace(minute + ":", contentMinute + ":");
		for (var i = 1; i < 7; i++) wakeTime.push(moment(sleepTime).tz("Asia/Baghdad").add(90 * i + 15, 'm').format("HH:mm"));
		return api.sendMessage(getText("returnTimeSet", content, wakeTime.join(', ')), threadID, messageID);
	}
                                                                              }
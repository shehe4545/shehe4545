module.exports.config = {
	name: "أرسل",
	version: "1.0.7",
	hasPermssion: 2,
	credits: "manhG",
	description: "أرسل [آيدي] [نص]",
	commandCategory: "𝔻𝔼𝕍𝔼𝕃𝕆ℙ𝔼ℝ",
	usages: "ID [نص]",
	cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
 //if (!args[0]) return api.sendMessage(`${api.getthreadID()}`, event.threadID);
    
	var idbox = args[0];
    var reason = args.slice(1);
	//let threadID = await api.getThreadID();
	if (args.length == 0) api.sendMessage("خطأ: أكتب آيدي المجموعة [رسالة]", event.threadID, event.messageID);
	
	else if(reason == "")api.sendMessage("خطأ أكتب: أرسل آيدي المجموعة [الرسالة]", event.threadID, event.messageID);
	
	else
		api.sendMessage("رسالة من المطور لمجموعتكم \n\n" + reason.join(" "), idbox, () =>
			api.sendMessage(`${api.getCurrentUserID()}`, () =>
				api.sendMessage("أرسل لكم ما يلي: " + reason.join(" "), event.threadID)));
}

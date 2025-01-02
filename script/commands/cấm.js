module.exports.config = {
	name: "bc",
	version: "1.0.5",
	hasPermssion: 2,
	credits: "Mirai team",
	description: "الأوامر المحظورة",
	commandCategory: "𝔻𝔼𝕍𝔼𝕃𝕆ℙ𝔼ℝ",
	usages: "-l < أمر الحظر >\n -u <الأمر للإزالة> \n يمكن حظر جميع الأوامر بواسطة  -l all \nقم بإلغاء حظر جميع الأوامر بعد ذلك  -u all",
	cooldowns: 5,
	dependencies: {
		"moment-timezone": ""
	}
};

module.exports.languages = {
  "vi": {
		"allCommand": "toàn bộ lệnh",
		"commandList": "những lệnh",
		"banCommandSuccess": "[ THÔNG BÁO ] Đã xử lý thành công yêu cầu cấm lệnh trên nhóm này",
		"unbanCommandSuccess": "[ THÔNG BÁO ] Đã xử lý thành công yêu cầu gỡ cấm %1 trên nhóm này",
		"missingCommandInput": "%1 Phần command cần cấm không được để trống!",
		"notExistBanCommand": "[ THÔNG BÁO ] Hiện tại ID nhóm bạn nhập chưa từng bị cấm sử dụng lệnh",

	
		"returnBanCommand": "[ THÔNG BÁO ] Bạn đang yêu cầu cấm sử dụng lệnh trên nhóm này\n- Các lệnh cần cấm: %2\n\n❮ Thả cảm xúc tin nhắn này để xác thực ❯",
		"returnUnbanCommand": "[ THÔNG BÁO ] Bạn đang yêu cầu gỡ cấm sử dụng lệnh trên nhóm này\n- Các lệnh cần gỡ cấm: %2\n\n❮ Thả cảm xúc tin nhắn này để xác thực ❯"
 
		"en": {
			"allCommand": "toàn bộ lệnh",
			"commandList": "những lệnh",
			"banCommandSuccess": "[ THÔNG BÁO ] Đã xử lý thành công yêu cầu cấm lệnh trên nhóm này",
			"unbanCommandSuccess": "[ THÔNG BÁO ] Đã xử lý thành công yêu cầu gỡ cấm %1 trên nhóm này",
			"missingCommandInput": "%1 Phần command cần cấm không được để trống!",
			"notExistBanCommand": "[ THÔNG BÁO ] Hiện tại ID nhóm bạn nhập chưa từng bị cấm sử dụng lệnh",
	
		
			"returnBanCommand": "[ THÔNG BÁO ] Bạn đang yêu cầu cấm sử dụng lệnh trên nhóm này\n- Các lệnh cần cấm: %2\n\n❮ Thả cảm xúc tin nhắn này để xác thực ❯",
			"returnUnbanCommand": "[ THÔNG BÁO ] Bạn đang yêu cầu gỡ cấm sử dụng lệnh trên nhóm này\n- Các lệnh cần gỡ cấm: %2\n\n❮ Thả cảm xúc tin nhắn này để xác thực ❯"
	}
}
	
module.exports.handleReaction = async ({ event, api, Threads, handleReaction, getText }) => {
  if (parseInt(event.userID) !== parseInt(handleReaction.author)) return;
	const moment = require("moment-timezone");
	const { threadID } = event;
	const { messageID, type, targetID, reason, commandNeedBan } = handleReaction;
	
	const time = moment.tz("Asia/Ho_Chi_minh").format("HH:MM:ss L");
	global.client.handleReaction.splice(global.client.handleReaction.findIndex(item => item.messageID == messageID), 1);
  switch (type) {
  case "banCommand": {
			try {	
				let data = (await Threads.getData(targetID)).data || {};
				data.commandBanned = [...data.commandBanned || [], ...commandNeedBan];
				await Threads.setData(targetID, { data });
				global.data.commandBanned.set(targetID, data.commandBanned);
				return api.sendMessage(getText("banCommandSuccess", targetID), threadID, () => {
					return api.unsendMessage(messageID);
				});
			} catch (e) { return api.sendMessage(getText("errorReponse", "[ THÔNG BÁO ]", targetID), threadID) };
		}
    case "unbanCommand": {
			try {
				let data = (await Threads.getData(targetID)).data || {};
				data.commandBanned = [...data.commandBanned.filter(item => !commandNeedBan.includes(item))];
				await Threads.setData(targetID, { data });
				global.data.commandBanned.set(targetID, data.commandBanned);
				if(data.commandBanned.length == 0) global.data.commandBanned.delete(targetID)
				return api.sendMessage(getText("unbanCommandSuccess", ((data.commandBanned.length == 0) ? getText("allCommand") : `${getText("commandList")}: ${commandNeedBan.join(", ")}`), targetID), threadID, () => {
					return api.unsendMessage(messageID);
				});
			} catch (e) { return api.sendMessage(getText("errorReponse", "[ THÔNG BÁO ]", targetID), threadID) };
		}
		default:
			break;
	}
}
module.exports.run = async ({ event, api, args, Threads, getText }) => { 
	const { threadID, messageID } = event;
	var targetID = String(args[1]);
	var reason = (args.slice(2, args.length)).join(" ") || null;

	if (isNaN(targetID)) {
		targetID = String(event.threadID);
		reason = (args.slice(1, args.length)).join(" ") || null;
	}
  switch (args[0]) {
  case "lệnh":
		case "l": {
			const permission = ["100036947774673"];
    if (!permission.includes(event.senderID)) return api.sendMessage("Bạn làm gì vậy :>", event.threadID, event.messageID);
			if (!global.data.allThreadID.includes(targetID)) return api.sendMessage(getText("IDNotFound", "[ THÔNG BÁO ]"), threadID, messageID);
			if (reason == null || reason.length == 0) return api.sendMessage(getText("missingCommandInput", '[ THÔNG BÁO ]'), threadID, messageID);
			if (reason == "all") {
				var allCommandName = [];
				const commandValues = global.client.commands.keys();
				for (const cmd of commandValues) allCommandName.push(cmd);
				reason = allCommandName.join(" ");
			}
			const commandNeedBan = reason.split(" ");
			return api.sendMessage(getText("returnBanCommand", targetID, ((commandNeedBan.length == global.client.commands.size) ? getText("allCommand") : commandNeedBan.join(", "))), threadID, (error, info) => {
				global.client.handleReaction.push({
					type: "banCommand",
					targetID,
					commandNeedBan,
					name: this.config.name,
					messageID: info.messageID,
					author: event.senderID,
					
				});
			}, messageID);
		}

		case "unban":
		case "u": {
			const permission = ["100036947774673"];
    if (!permission.includes(event.senderID)) return api.sendMessage("Bạn làm gì vậy :>", event.threadID, event.messageID);
			if (!global.data.allThreadID.includes(targetID)) return api.sendMessage(getText("IDNotFound", "[ THÔNG BÁO ]"), threadID, messageID);
			if (!global.data.commandBanned.has(targetID)) return api.sendMessage(getText("notExistBanCommand"), threadID, messageID);
			if (reason == null || reason.length == 0) return api.sendMessage(getText("missingCommandInput", "[ THÔNG BÁO ]"), threadID, messageID);
			if (reason == "all") {
				reason = (global.data.commandBanned.get(targetID)).join(" ");
			}
			const commandNeedBan = reason.split(" ");
			return api.sendMessage(getText("returnUnbanCommand", targetID, ((commandNeedBan.length == global.data.commandBanned.get(targetID).length) ? "toàn bộ lệnh" : commandNeedBan.join(", "))), threadID, (error, info) => {
				global.client.handleReaction.push({
					type: "unbanCommand",
					targetID,
					commandNeedBan,
					name: this.config.name,
					messageID: info.messageID,
					author: event.senderID,
					
				});
			}, messageID);
		}
  }
    }

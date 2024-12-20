module.exports.config = {
	name: "ثريد",
	version: "1.0.5",
	hasPermssion: 2,
	credits: "𝒚𝒐𝒅𝒂 𝒕𝒂𝒌𝒂𝒉𝒂𝒔𝒉𝒊",
	description: "حضر او الغاء حضر عن المجموعات",
	commandCategory: "المطور",
	usages: "",
	cooldowns: 5,
	dependencies: {
		"moment-timezone": ""
	}
};

module.exports.languages = {
	"vi": {
		"reason": "Lý do",
		"at": "vào lúc",
		"allCommand": "toàn bộ lệnh",
		"commandList": "những lệnh",
		"بانSuccess": "[ Ban Thread ] Đã xử lý thành công yêu cầu cấm nhóm có ID %1",
		"نوبانSuccess": "[ Unبان Thread ] Đã xử lý thành công yêu cầu gỡ cấm nhóm có ID %1",
		"كومبانSuccess": " Đã xử lý thành công yêu cầu cấm lệnh đối với nhóm có ID %1",
		"كومنوبانSuccess": " Đã xử lý thành công yêu cầu gỡ cấm %1 đối với nhóm có ID %2",
		"errorReponse": "%1 Không thể hoàn tất công việc bạn yêu cầu đối với nhóm có ID %2",
		"IDNotFound": "%1 ID bạn nhập không tồn tại trong cơ sở dữ liệu",
		"existBan": "[ Ban Thread ] ID %1 đã bị بان từ trước %2 %3",
		"notExistBan": "[ Unبان Thread ] ID bạn nhập chưa từng bị cấm sử dụng bot",
		"missingCommandInput": "%1 Phần command cần cấm không được để trống!",
		"notExistBanCommand": " Hiện tại ID nhóm bạn nhập chưa từng bị cấm sử dụng lệnh",

		"returnBan": "[ Ban Thread ] Hiện tại bạn đang yêu cầu cấm nhóm:\n- ID nhóm cần cấm: %1%2\n\n❮ Reaction tin nhắn này để xác thực ❯",
		"returnUnبان": "[ Unبان Thread ] Hiện tại bạn đang yêu cầu gỡ cấm nhóm:\n- ID nhóm cần gỡ cấm: %1\n\n❮ Reaction tin nhắn này để xác thực ❯",
		"returnBanCommand": " Hiện tại bạn đang yêu cầu cấm sử dụng lệnh đối với nhóm:\n - ID nhóm cần cấm: %1\n- Các lệnh cần cấm: %2\n\n❮ Reaction tin nhắn này để xác thực ❯",
		"returnUnكومبان": " Hiện tại bạn đang yêu cầu gỡ cấm sử dụng lệnh đối với nhóm:\n - ID nhóm cần gỡ cấm lệnh: %1\n- Các lệnh cần gỡ cấm: %2\n\n❮ Reaction tin nhắn này để xác thực ❯",
	
		"returnResult": "Đây là kết quả phù hợp: \n",
		"returnNull": "Không tìm thấy kết quả dựa vào tìm kiếm của bạn!",
		"returnList": "[ Thread List ]\nHiện tại đang có %1 nhóm bị بان, dưới đây là %2 nhóm\n\n%3",
		"returnInfo": "[ Info Thread ] Đây là một sô thông tin về nhóm bạn cần tìm:\n- ID của nhóm: %1n- Có bị بان?: %2 %3 %4\n- Bị بان lệnh?: %5"
	},
	"en": {
		"reason": "السبب ",
		"at": "في",
		"allCommand": "كل الاوامر",
		"commandList": "الاوامر",
		"بانSuccess": "[ ثريد بان ] الكروب المحظور له معرف %1",
		"نوبانSuccess": "[ الغاء حضر ] تم الغاء الحضر عن المجموعة , الايدي : %1",
		"كومبانSuccess": " تم حضر الامر عن الكروب , ايدي الكروب : %1",
		"كومنوبانSuccess": " تم فك حظر الامر  %1 للمجموعه : %2",
		"errorReponse": "%1 Can't do what you request with thread has ID %2",
		"IDNotFound": "%1 الايدي اللي دخلته مموجود بقاعدة البيانات",
		"existBan": "[ ثريد بان ] المجموعة  %1 تم حضرها من قبل %2 %3",
		"notExistBan": "هذه المجموعة غير محضورة",
		"missingCommandInput": "%1 يجب عليك ادحال الامر اللذي تريد حضره عن المجموعه  !",
		"notExistBanCommand": " هاي المجموعة ممحضورة قبل",

		"returnBan": "[ حضر مجموعة ] انت تطلب حضر المجموعة :\n-  ايدي المجموعة : %1%2\n\n❮ تفاعل على هذه الرسالة لآكمال الطلب ❯",
		"returnUnبان": "[ الغاء حضر ] انت تطلب الغاء الحضر عن المجموعة :\n- ايدي المجموعةالطلب\n\n❮ تفاعل على هذه الرسالة لآكمال الطلب ❯",
		"returnBanCommand": " انت تطلب حضر أمر عن المجموعة :\n - ايدي المجموعة : %1\n- الامر : %2\n\n❮ تفاعل على هذه الرسالة لآكمال الطلب ❯",
		"returnUnكومبان": " انت تطلب فك حضر الامر عن المجموعة :\n - ايدي المجموعة : %1\n- الامر : %2\n\n❮ تفاعل على هذه الرسالة لآكمال الطلب ❯",
	
		"returnResult": "هذه هي النتيجة : \n",
		"returnNull": "There is no result with your input!",
		"returnList": "[ Thread List ]\There are %1 بانned thread, here are %2\n\n%3",
		"returnInfo": "[ معلومات المجموعه ] هذه بعض المعلومات عن المجموعه:\n- معرف المجموعه : %1\n- محظوره؟: %2 %3 %4\n- كوم باند؟: %5"
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
		case "بان": {
			try {
				let data = (await Threads.getData(targetID)).data || {};
				data.بانned = true;
				data.reason = reason || null;
				data.dateAdded = time;
				await Threads.setData(targetID, { data });
				global.data.threadBanned.set(targetID, { reason: data.reason, dateAdded: data.dateAdded });
				return api.sendMessage(getText("بانSuccess", targetID), threadID, () => {
					return api.unsendMessage(messageID);
				});
			} catch { return api.sendMessage(getText("errorReponse", "[ Ban Thread ]", targetID), threadID) };
		}

		case "نوبان": {
			try {
				let data = (await Threads.getData(targetID)).data || {};
				data.بانned = false;
				data.reason = null;
				data.dateAdded = null;
				await Threads.setData(targetID, { data });
				global.data.threadBanned.delete(targetID);
				return api.sendMessage(getText("نوبانSuccess", targetID), threadID, () => {
					return api.unsendMessage(messageID);
				});
			} catch { return api.sendMessage(getText("errorReponse", "[ unBan Thread ]", targetID), threadID) };
		}

		case "كومبان": {
			try {	
				let data = (await Threads.getData(targetID)).data || {};
				data.commandBanned = [...data.commandBanned || [], ...commandNeedBan];
				await Threads.setData(targetID, { data });
				global.data.commandBanned.set(targetID, data.commandBanned);
				return api.sendMessage(getText("كومبانSuccess", targetID), threadID, () => {
					return api.unsendMessage(messageID);
				});
			} catch (e) { return api.sendMessage(getText("errorReponse", "", targetID), threadID) };
		}
		
		case "كومنوبان": {
			try {
				let data = (await Threads.getData(targetID)).data || {};
				data.commandBanned = [...data.commandBanned.filter(item => !commandNeedBan.includes(item))];
				await Threads.setData(targetID, { data });
				global.data.commandBanned.set(targetID, data.commandBanned);
				if(data.commandBanned.length == 0) global.data.commandBanned.delete(targetID)
				return api.sendMessage(getText("كومنوبانSuccess", ((data.commandBanned.length == 0) ? getText("allCommand") : `${getText("commandList")}: ${commandNeedBan.join(", ")}`), targetID), threadID, () => {
					return api.unsendMessage(messageID);
				});
			} catch (e) { return api.sendMessage(getText("errorReponse", "", targetID), threadID) };
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
		case "بان":
		case "-b": {
			if (!global.data.allThreadID.includes(targetID)) return api.sendMessage(getText("IDNotFound", "[ Ban Thread ]"), threadID, messageID);
			if (global.data.threadBanned.has(targetID)) {
				const { reason, dateAdded } = global.data.threadBanned.get(targetID) || {};
				return api.sendMessage(getText("existBan", targetID, ((reason) ? `${getText("reason")}: "${reason}"` : ""), ((dateAdded) ? `${getText("في")}: ${dateAdded}` : "")), threadID, messageID);
			}
			return api.sendMessage(getText("returnBan", targetID, ((reason) ? `\n- ${getText("reason")}: ${reason}` : "")), threadID, (error, info) => {
				global.client.handleReaction.push({
					type: "بان",
					targetID,
					reason,
					name: this.config.name,
					messageID: info.messageID,
					author: event.senderID,
					
				});
			}, messageID);
		}

		case "نوبان":
		case "-ub": {
			if (!global.data.allThreadID.includes(targetID)) return api.sendMessage(getText("IDNotFound", "[ Unبان Thread ]"), threadID, messageID);
			if (!global.data.threadBanned.has(targetID)) return api.sendMessage(getText("notExistBan"), threadID, messageID);
			return api.sendMessage(getText("returnUnبان", targetID), threadID, (error, info) => {
				global.client.handleReaction.push({
					type: "نوبان",
					targetID,
					name: this.config.name,
					messageID: info.messageID,
					author: event.senderID,
					
				});
			}, messageID);
		}

		case "كومبان":
		case "-bc": {
			if (!global.data.allThreadID.includes(targetID)) return api.sendMessage(getText("IDNotFound", "[ BanCommand Thread ]"), threadID, messageID);
			if (reason == null || reason.length == 0) return api.sendMessage(getText("missingCommandInput", '[ BanCommand Thread ]'), threadID, messageID);
			if (reason == "الكل") {
				var allCommandName = [];
				const commandValues = global.client.commands.keys();
				for (const cmd of commandValues) allCommandName.push(cmd);
				reason = allCommandName.join(" ");
			}
			const commandNeedBan = reason.split(" ");
			return api.sendMessage(getText("returnBanCommand", targetID, ((commandNeedBan.length == global.client.commands.size) ? getText("allCommand") : commandNeedBan.join(", "))), threadID, (error, info) => {
				global.client.handleReaction.push({
					type: "كومبان",
					targetID,
					commandNeedBan,
					name: this.config.name,
					messageID: info.messageID,
					author: event.senderID,
					
				});
			}, messageID);
		}

		case "كومنوبان":
		case "-ubc": {
			if (!global.data.allThreadID.includes(targetID)) return api.sendMessage(getText("IDNotFound", ""), threadID, messageID);
			if (!global.data.commandBanned.has(targetID)) return api.sendMessage(getText("notExistBanCommand"), threadID, messageID);
			if (reason == null || reason.length == 0) return api.sendMessage(getText("missingCommandInput", ""), threadID, messageID);
			if (reason == "الكل") {
				reason = (global.data.commandBanned.get(targetID)).join(" ");
			}
			const commandNeedBan = reason.split(" ");
			return api.sendMessage(getText("returnUnكومبان", targetID, ((commandNeedBan.length == global.data.commandBanned.get(targetID).length) ? "الأومر كلها" : commandNeedBan.join(", "))), threadID, (error, info) => {
				global.client.handleReaction.push({
					type: "كومنوبان",
					targetID,
					commandNeedBan,
					name: this.config.name,
					messageID: info.messageID,
					author: event.senderID,
					
				});
			}, messageID);
		}

		case "بحث":
		case "-s": {
			const contentJoin = reason || "";
			const getThreads =  (await Threads.getAll(['threadID', 'threadInfo'])).filter(item => !!item.threadInfo);
			var matchThreads = [], a = '', b = 0;
			getThreads.forEach(i => {
				if ((i.threadInfo.threadName || "").toLowerCase().includes(contentJoin.toLowerCase())) {
					matchThreads.push({
						name: i.threadInfo.threadName,
						id: i.threadID
					});
				}
			});
			matchThreads.forEach(i => a += `\n${b += 1}. ${i.name} - ${i.id}`);
			(matchThreads.length > 0) ? api.sendMessage(getText("returnResult", a), threadID) : api.sendMessage(getText("returnNull"), threadID, messageID);
			break;
		}

		case "القاءمه":
		case "-l": {
			var listBan = [], i = 0;
			const threadData = global.data.threadBanned.keys();
			for (; ;) {
				if (i > global.data.threadBanned.size) break;
				let idThread = String(threadData.next().value);
				if (typeof idThread == "undefined") {
					const nameThread = (await Threads.getData(idThread)).threadInfo.threadName || "unknown";
					listBan.push(`${i+=1}/ ${idThread} - ${nameThread}`)
				}
				if (i == global.data.threadBanned.size || i == (parseInt(reason) || 10)) break;
			}
			return api.sendMessage(getText("returnList",(global.data.threadBanned.size || 0), listBan.length, listBan.join("\n")), threadID, messageID);
		}

		case "معلومات":
		case "-i": {
			if (!global.data.allThreadID.includes(targetID)) return api.sendMessage(getText("IDNotFound", "[ Info Thread ]"), threadID, messageID);
			if (global.data.commandBanned.has(targetID)) { var commandBanned = global.data.commandBanned.get(targetID) || [] };
			if (global.data.threadBanned.has(targetID)) { var { reason, dateAdded } = global.data.threadBanned.get(targetID) || {} };
			return api.sendMessage(getText("returnInfo", targetID, ((!dateAdded) ? "لا !" : " يب !"), ((reason) ? `${getText("reason")}: "${reason}"` : ""), ((dateAdded) ? `${getText("at")}: ${dateAdded}` : ""), ((commandBanned) ? `يب !: ${commandBanned.join(", ")}` : "لا !")), threadID, messageID);
		}
	}
    }
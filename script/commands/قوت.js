module.exports.config = {
	name: "rule",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "CatalizCS",
	description: "تعديل القواعد",
	commandCategory: "𝔸𝔻𝕄𝕀ℕ 𝔾ℝ𝕆𝕌ℙ",
	usages: "[اضف/حذف/قائمة] [رقم القانون/ID]",
	cooldowns: 5,
	dependencies: {
        "fs-extra": "",
        "path": ""
    }
}

module.exports.onLoad = () => {
    const { existsSync, writeFileSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];
    const pathData = join(__dirname, "cache", "rules.json");
    if (!existsSync(pathData)) return writeFileSync(pathData, "[]", "utf-8"); 
}

module.exports.run = ({ event, api, args, permssion }) => {
    const { threadID, messageID } = event;
    const { readFileSync, writeFileSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

    const pathData = join(__dirname, "cache", "rules.json");
    const content = (args.slice(1, args.length)).join(" ");
    var dataJson = JSON.parse(readFileSync(pathData, "utf-8"));
    var thisThread = dataJson.find(item => item.threadID == threadID) || { threadID, listRule: [] };

    switch (args[0]) {
        case "اضف": {
            if (permssion == 0) return api.sendMessage("[Rule] أنت روح ضيف قوانين   !", threadID, messageID);
            if (content.length == 0) return api.sendMessage("[Rule] لا تخلي المكان فارغ أدخل قانون", threadID, messageID);
            if (content.indexOf("\n") != -1) {
                const contentSplit = content.split("\n");
                for (const item of contentSplit) thisThread.listRule.push(item);
            }
            else {
                thisThread.listRule.push(content);
            }
            writeFileSync(pathData, JSON.stringify(dataJson, null, 4), "utf-8");
            api.sendMessage('[Rule] إضافة قانون جديد ✓!', threadID, messageID);
            break;
        }
        case "قائمة":
        case"all": {
            var msg = "", index = 0;
            for (const item of thisThread.listRule) msg += `${index+=1}/ ${item}\n`;
            if (msg.length == 0) return api.sendMessage("[Rule] المجموعة لا تملك قائمة قواعد .!", threadID, messageID);
            api.sendMessage(`=== قواعد المجموعة ===\n\n${msg}`, threadID, messageID);
            break;
        }
        case "rm":
        case "remove":
        case "حذف": {
            if (!isNaN(content) && content > 0) {
                if (permssion == 0) return api.sendMessage("[Rule] أنت روح إلعب أحسن من أن تضيف قوانين", threadID, messageID);
                if (thisThread.listRule.length == 0) return api.sendMessage("[Rule] هذه المجموعة لا تملك قوانين!", threadID, messageID);
                thisThread.listRule.splice(content - 1, 1);
                api.sendMessage(`[Rule] تم حذف القانون بنجاح : ${content}`, threadID, messageID);
                break;
            }
            else if (content == "all") {
                if (permssion == 0) return api.sendMessage("[Rule] أنت مازلت صغير لا يمكنك لقوانينك أن تتحكم بالمجموعة !", threadID, messageID);
                if (thisThread.listRule.length == 0) return api.sendMessage("[Rule] المجموعة لا تملك أي قانون يمكن حذفه !", threadID, messageID);
                thisThread.listRule = [];
                api.sendMessage(`[Rule] المجموعة لا تملك أي قانون يمكن حذفه `, threadID, messageID);
                break;
            }
        }
        default: {
            if (thisThread.listRule.length != 0) {
                var msg = "", index = 0;
                for (const item of thisThread.listRule) msg += `${index+=1}/ ${item}\n`;
                return api.sendMessage(`=== قوانين المجموعة ===\n\n${msg} \n[لا تخالفوا هذه القوانين من فضلكم وإلى  لطردكم !]`, threadID, messageID);
            }
            else return global.utils.throwError(this.config.name, threadID, messageID);
        }
    }

    if (!dataJson.some(item => item.threadID == threadID)) dataJson.push(thisThread);
    return writeFileSync(pathData, JSON.stringify(dataJson, null, 4), "utf-8");
  }
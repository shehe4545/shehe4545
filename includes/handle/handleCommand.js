module.exports = function ({ api, models, Users, Threads, Currencies }) {
    const stringSimilarity = require('string-similarity'),
        escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
        logger = require("../../utils/log.js");
    const moment = require("moment-timezone");

    return async function ({ event }) {
        const dateNow = Date.now();
        const time = moment.tz("Africa/Algiers").format("HH:MM:ss DD/MM/YYYY");
        const { allowInbox, PREFIX, ADMINBOT, DeveloperMode, adminOnly } = global.config;
        const { userBanned, threadBanned, threadInfo, threadData, commandBanned } = global.data;
        const { commands, cooldowns } = global.client;
        var { body, senderID, threadID, messageID } = event;

        var senderID = String(senderID),
            threadID = String(threadID);
        const threadSetting = threadData.get(threadID) || {}

        const prefixRegex = new RegExp(`^(<@!?${senderID}>|${escapeRegex((threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : PREFIX )})\\s*`);
        if (!prefixRegex.test(body)) return;

        if (userBanned.has(senderID) || threadBanned.has(threadID) || allowInbox == ![] && senderID == threadID) {
            if (!ADMINBOT.includes(senderID.toString())) {
                if (userBanned.has(senderID)) {
                    const { reason, dateAdded } = userBanned.get(senderID) || {};
                    return api.sendMessage(global.getText("handleCommand", "userBanned", reason, dateAdded), threadID, async (err, info) => {
                        await new Promise(resolve => setTimeout(resolve, 5 * 1000));
                        return api.unsendMessage(info.messageID);
                    }, messageID);
                } else {
                    if (threadBanned.has(threadID)) {
                        const { reason, dateAdded } = threadBanned.get(threadID) || {};
                        return api.sendMessage(global.getText("handleCommand", "threadBanned", reason, dateAdded), threadID, async (err, info) => {
                            await new Promise(resolve => setTimeout(resolve, 5 * 1000));
                            return api.unsendMessage(info.messageID);
                        }, messageID);
                    }
                }
            }
        }

        const [matchedPrefix] = body.match(prefixRegex);
        const args = body.slice(matchedPrefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();
        var command = commands.get(commandName);

        if (!command) {
            // استخدام stringSimilarity للتأكد من أن اسم الأمر مطابق بنسبة عالية
            const allCommandName = [];
            const commandValues = commands['keys']();
            for (const cmd of commandValues) allCommandName.push(cmd);
            const checker = stringSimilarity.findBestMatch(commandName, allCommandName);

            if (checker.bestMatch.rating >= 0.7) {
                // إذا كانت النسبة أعلى من 70% يتم تنفيذ الأمر
                command = commands.get(checker.bestMatch.target);
            } else {
                // إذا كانت النسبة أقل من 70% يتم تجاهل الأمر
                return api.sendMessage(global.getText("handleCommand", "commandNotExist", checker.bestMatch.target), threadID);
            }
        }

        if (commandBanned.get(threadID) || commandBanned.get(senderID)) {
            if (!ADMINBOT.includes(senderID)) {
                const banThreads = commandBanned.get(threadID) || [],
                    banUsers = commandBanned.get(senderID) || [];
                if (banThreads.includes(command.config.name)) 
                    return api.sendMessage(global.getText("handleCommand", "commandThreadBanned", command.config.name), threadID, async (err, info) => {
                        await new Promise(resolve => setTimeout(resolve, 5 * 1000));
                        return api.unsendMessage(info.messageID);
                    }, messageID);
                if (banUsers.includes(command.config.name)) 
                    return api.sendMessage(global.getText("handleCommand", "commandUserBanned", command.config.name), threadID, async (err, info) => {
                        await new Promise(resolve => setTimeout(resolve, 5 * 1000));
                        return api.unsendMessage(info.messageID);
                    }, messageID);
            }
        }

        if (command.config.commandCategory.toLowerCase() == 'nsfw' && !global.data.threadAllowNSFW.includes(threadID) && !ADMINBOT.includes(senderID)) 
            return api.sendMessage(global.getText("handleCommand", "threadNotAllowNSFW"), threadID, async (err, info) => {
                await new Promise(resolve => setTimeout(resolve, 5 * 1000));
                return api.unsendMessage(info.messageID);
            }, messageID);

        var permssion = 0;
        var threadInfoo = (threadInfo.get(threadID) || await Threads.getInfo(threadID));
        const find = threadInfoo.adminIDs.find(el => el.id == senderID);
        if (ADMINBOT.includes(senderID.toString())) permssion = 2;
        else if (!ADMINBOT.includes(senderID) && find) permssion = 1;
        if (command.config.hasPermssion > permssion) return api.sendMessage(global.getText("handleCommand", "permssionNotEnough", command.config.name), event.threadID, event.messageID);

        if (!client.cooldowns.has(command.config.name)) client.cooldowns.set(command.config.name, new Map());
        const timestamps = client.cooldowns.get(command.config.name);
        const expirationTime = (command.config.cooldowns || 1) * 1000;
        if (timestamps.has(senderID) && dateNow < timestamps.get(senderID) + expirationTime) 
            return api.setMessageReaction('😼', event.messageID, err => (err) ? logger('Đã có lỗi xảy ra khi thực thi setMessageReaction', 2) : '', true);

        try {
            const Obj = {
                api, event, args, models, Users, Threads, Currencies, permssion, getText: () => {}
            };
            command.run(Obj);
            timestamps.set(senderID, dateNow);

            if (DeveloperMode == true) 
                logger(global.getText("handleCommand", "executeCommand", time, commandName, senderID, threadID, args.join(" "), Date.now() - dateNow), "[ DEV MODE ]");

            return;
        } catch (e) {
            return api.sendMessage(global.getText("handleCommand", "commandError", commandName, e), threadID);
        }
    };
};

module.exports.config = {
    name: "joinNoti",
    eventType: ["log:subscribe"],
    version: "1.0.1",
    credits: "CatalizCS", // fixing ken gusler
    description: "Notify bot or group member with random gif/photo/video",
    dependencies: {
        "fs-extra": "",
        "path": "",
        "pidusage": ""
    }
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

    const path = join(__dirname, "cache", "joinGif");
    if (!existsSync(path)) mkdirSync(path, { recursive: true });

    const path2 = join(__dirname, "cache", "joinGif", "randomgif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}

module.exports.run = async function ({ api, event }) {
    const { join } = global.nodemodule["path"];
    const { threadID } = event;

    if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
        return api.sendMessage("لقد نورتكم بوت سام 🤧لا تنسو علامة بوت(×) 🤧🤍و شكر مطوري عبدو 🤧🤍✨", event.threadID);
    } else {
        try {
            const { createReadStream, existsSync, readdirSync } = global.nodemodule["fs-extra"];
            let { threadName, participantIDs } = await api.getThreadInfo(threadID);

            const threadData = global.data.threadData.get(parseInt(threadID)) || {};
            const path = join(__dirname, "cache", "joinGif");

            var mentions = [], nameArray = [], memLength = [], i = 0;

            for (const participant of event.logMessageData.addedParticipants) {
                const userName = participant.fullName;
                const id = participant.userFbId;
                nameArray.push(userName);
                mentions.push({ tag: userName, id });
                memLength.push(participantIDs.length - i++);
            }

            memLength.sort((a, b) => a - b);

            if (!existsSync(path)) mkdirSync(path, { recursive: true });

            const randomPath = readdirSync(join(__dirname, "cache", "joinGif", "randomgif"));

            let formPush;
            if (randomPath.length != 0) {
                const pathRandom = join(__dirname, "cache", "joinGif", "randomgif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
                formPush = { body: "", attachment: createReadStream(pathRandom), mentions };
            } else {
                formPush = { body: "", mentions };
            }

            return api.sendMessage(formPush, threadID);
        } catch (e) {
            return console.log(e);
        }
    }
}

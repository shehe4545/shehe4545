module.exports.config = {
	name: "تصنيفي",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "SenProject",
	description: "الاختيار التفاعلي",
	commandCategory: "ℝ𝔸ℕ𝕂",
	usages: "checktt",
	cooldowns: 5,
	dependencies: {
		"fs-extra": ""
	}
}

const path = __dirname + '/count-by-thread/';

module.exports.onLoad = () => {
    const fs = require('fs');
    if (!fs.existsSync(path) || !fs.statSync(path).isDirectory()) {
        fs.mkdirSync(path, { recursive: true });
    }
}

module.exports.handleEvent = function ({ event }) {
    const { messageID, threadID, senderID } = event;
    if (!global.data.allThreadID.some(tid => tid == threadID)) return;
    const fs = global.nodemodule['fs'];
    const threadPath = path + threadID + '.json';
    if (!fs.existsSync(threadPath) || fs.statSync(threadPath).isDirectory()) {
        fs.writeFileSync(threadPath, JSON.stringify({}, null, 4));
    }
    const getThreadJSON = JSON.parse(fs.readFileSync(threadPath)) || {};
    if (!getThreadJSON.hasOwnProperty(senderID)) {
        getThreadJSON[senderID] = 0;
    }
    getThreadJSON[senderID]++;
    fs.writeFileSync(threadPath, JSON.stringify(getThreadJSON, null, 4));
}


 const getRankName = count => {
    return count > 50000 ? 'جنرالات الحرب'
    :count > 9000 ? 'جنرال'
        : count > 8000 ? 'نخبة V'
            : count > 6100 ? 'نخبة IV'
                : count > 5900? 'نخبة III'
                    : count > 5700 ? 'نخبة II'
                        : count > 5200 ? 'نخبة I'
                            : count > 5000 ? 'الماس V'
                                : count > 4800 ? 'الماس IV'
                                    : count > 4500 ? 'الماس III'
                                        : count > 4000 ? 'الماس II'
                                            : count > 3800 ? 'الماس I'
                                                : count > 3500 ? 'البلاتين IV'
                                                    : count > 3200 ? 'البلاتين III'
                                                        : count > 3000 ? 'البلاتين II'
                                                            : count > 2900 ? 'البلاتين I'
                                                                : count > 2500 ? 'فضي IV'
                                                                    : count > 2300 ? 'فضي III'
                                                                        : count > 2000 ? 'فضي II'
                                                                            : count > 1500 ? 'فضي I'
                                                                                : count > 1200 ? 'برونز III'
                                                                                    : count > 1000 ? 'برونز II'
                                                                                        : count > 900 ? 'برونز I'
                                                                                            : count > 500 ? 'حديد III'
                                                                                                : count > 100 ? 'حديد II'
                                                                                                    : 'حديد I'
}



module.exports.run = async function ({ api, event, args, Users }) {
    const fs = global.nodemodule['fs'];
    const { messageID, threadID, senderID, mentions } = event;
    const threadPath = path + threadID + '.json';
    if (!fs.existsSync(threadPath) || fs.statSync(threadPath).isDirectory()) {
        fs.writeFileSync(threadPath, JSON.stringify({}, null, 4));
    }
    const query = args[0] ? args[0].toLowerCase() : '';
    const getThreadJSON = JSON.parse(fs.readFileSync(threadPath)) || {};
    if (!getThreadJSON.hasOwnProperty(senderID)) {
        getThreadJSON[senderID] = 1;
    }
    var storage = [],
        msg = '';
    if (query == 'all') {
        const allThread = await api.getThreadInfo(threadID) || { participantIDs: [] };
        for (id of allThread.participantIDs) {
            if (!getThreadJSON.hasOwnProperty(id)) {
                getThreadJSON[id] = 0;
            }
        }
    }
    for (const id in getThreadJSON) {
        const name = await Users.getNameUser(id);
        storage.push({ id, name, count: getThreadJSON[id] });
    }
    storage.sort((a, b) => {
        if (a.count > b.count) return -1;
        else if (a.count < b.count) return 1;
        else return a.name.localeCompare(b.name);
    });
    if (query == 'all') {
        let count = 1;
        msg += '===CHECKTT===';
        for (const user of storage) {
            msg += `\n${count++}. ${user.name} - ${user.count}`;
        }
    } else if (query == 'rank') {
        msg += 'حديد 1 (10رساله)\nحديد 2 (100رساله)\nحديد 3 (500رساله)\nبرونز 1 (900 رساله)\nبرنز 2 (1000 رساله)\nبرونز 3 (1200 رساله)\nفضي 1 (1500 رساله)\nفضي 2 (2000 رساله)\nفضي 3 (2300 رساله)\nفضي 4 (2500 رساله)\nالبلاتين 1 (2900 رساله)\nالبلاتين  2 (3000 رساله)\nالبلاتين 3 (3200 رساله)\nالبلاتين 4 (3500 رساله)\nالماس 1(3800 رساله)\nالماس 2 (4000 رساله)\nالماس 3 (4500 رساله)\nالماس 4(4800 رساله)\nالماس 5 (5000 رساله)\nنخبة1 (5200 رساله)\nنخبة2 (5700 رساله)\nنخبة 3 (5900 رساله)\nنخبة 4 (6100 رساله)\nنخبة 5 (8000 رساله)\nجنرال (9000 رساله)\nجنرال الحرب (50000 رساله)'
    } else if (!query) {
        let userID = senderID;
        if (Object.keys(mentions).length > 0) {
            userID = mentions[0];
        }
        const rankUser = storage.findIndex(e => e.id == userID);
        msg += `${userID == senderID ? '💠صديق' : storage[rankUser].name} مرتبة ${rankUser + 1}\n💌عدد رساله: ${storage[rankUser].count}\n🔰Rank ${getRankName(storage[rankUser].count)}`;
    }
    api.sendMessage(msg, threadID);
    return;
}

module.exports.config = {
	name: "تصفية",
	version: "1.0.0",
	hasPermssion: 1,
	credits: "ProCoderMew",
	description: " ",
	commandCategory: "𝔸𝔻𝕄𝕀ℕ 𝔾ℝ𝕆𝕌ℙ",
	usages: "",
	cooldowns: 300
};

module.exports.run = async function({ api, event }) {
    var { userInfo, adminIDs } = await api.getThreadInfo(event.threadID);    
    var success = 0, fail = 0;
    var arr = [];
    for (const e of userInfo) {
        if (e.gender == undefined) {
            arr.push(e.id);
        }
    };

    adminIDs = adminIDs.map(e => e.id).some(e => e == global.data.botID);
    if (arr.length == 0) {
        return api.sendMessage("- ماكو حسابات طايرة بالمجموعة.", event.threadID);
    }
    else {
        api.sendMessage("أكو  " + arr.length + " حسابات طايرة بالكروب .", event.threadID, function () {
            if (!adminIDs) {
                api.sendMessage("-صعدني أدمن حتى أكدر اصفيهم .", event.threadID);
            } else {
                api.sendMessage("- جار التصفية ..", event.threadID, async function() {
                    for (const e of arr) {
                        try {
                            await new Promise(resolve => setTimeout(resolve, 1000));
                            await api.removeUserFromGroup(parseInt(e), event.threadID);   
                            success++;
                        }
                        catch {
                            fail++;
                        }
                    }
                  
                    api.sendMessage("تمت تصفية  " + success + " أشخاص بنجاح.", event.threadID, function() {
                        if (fail != 0) return api.sendMessage("- حدث خطاء , لم أتمكن من تصفية " + fail + " أشخاص.", event.threadID);
                    });
                })
            }
        })
    }
}
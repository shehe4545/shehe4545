module.exports.config = {
	name: "شغل_البوت",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "HTHB",
	description: "تشغيل البوت ✅",
	commandCategory: "𝔻𝔼𝕍𝔼𝕃𝕆ℙ𝔼ℝ",
	cooldowns: 0
        };
module.exports.run = ({event, api}) =>api.sendMessage("تم تشغيل البوت🌝✅",event.threadID, () =>process.enter(0))

module.exports.config = {
	name: "طفي_البوت",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "HTHB",
	description: "إطفاء البوت",
	commandCategory: "𝔻𝔼𝕍𝔼𝕃𝕆ℙ𝔼ℝ",
	cooldowns: 0
        };
module.exports.run = ({event, api}) =>api.sendMessage("اخيرا رحمتوني",event.threadID, () =>process.exit(0))
module.exports.config = {
	name: "شخصيتي",
	version: "1.1.2",
	hasPermssion: 0,
	credits: "HelyT",
	description: "ابحث عن شخصيتك السينمائية",
	commandCategory: "𝔾𝔸𝕄𝔼𝕊",
	usages: "[شخصيتي]",
	cooldowns: 1,
};
module.exports.handleEvent = function ({ api, event }) {
	const { commands } = global.client;
	
	if (!event.body) return;

	const { threadID, messageID, body } = event;

	if (body.indexOf("askme") != 0) return;

	const splitBody = body.slice(body.indexOf("askme")).trim().split(/\s+/);


	if (splitBody.length == 1 || !commands.has(splitBody[1].toLowerCase())) return;

	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const command = commands.get(splitBody[1].toLowerCase());

	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;

	return api.sendMessage(`⚔️ ${command.config.name} ⚔️\n${command.config.description}\n\n❯ Cách sử dụng: ${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}\n❯ Thuộc nhóm: ${command.config.commandCategory}\n❯ Thời gian chờ: ${command.config.cooldowns} giây(s)\n❯ Quyền hạn: ${((command.config.hasPermssion == 0) ? "Người dùng" : (command.config.hasPermssion == 1) ? "Quản trị viên" : "Người vận hành bot" )}\n❯ Prefix: ${prefix}\n\n» Module code by ${command.config.credits} «`, threadID, messageID);
};

module.exports.run = async function({ api, args, Users, event, Threads, utils, client }) {
const { commands } = global.client;
const { threadID, messageID } = event;
const command = commands.get((args[0] || "").toLowerCase());
const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
if (!command) {
const command = commands.values();
var tl = ["هانابيل ليكتر","نورمان بيتس","دارث فيدر","هاري بوتر","جيمس بوند","ريك بلين","روكي بالبوا","روبن هود","سوبرمان","ايرون  مان","باتمان","بروس وين","زورو","أندرو بيكيت","المحقق ألونسو هاريس","فيربل كينت","توني سبرانو","جون سنو","الجوكر","تي باج","الحاكم","تايون لانيستر","والتر وايت","جاس فرينج","آريا ستارك","شارلوك هولمز","دين وينشستر","توماس شيلبي","ثانوس","هانز جروبر","فولدمورث","انت لا تشبه احد ، أنت فريد من نوعك ! ","مايكل مايرز","هومر سيمبسون","غرينتش","تشارلي براون","جيقساو","بيتمان","انطونيو مونتانا","فيتو كوروليوني","مايكل كوروليوني","روكي بالبوا","رامبو","جاك سبارو","تايلر دردن","ليون","ماكسيموس","جانغو الحر","جون ويك" ,"هاري بوتر","لورد فولدمورت","ثانوس","ايرون مان","ثور" ,"فورست غامب","نورمان بيتس" ,"ترمنايتور","ماكس","الملك ليونايدس","سبايدر مان" ,"ولڤرين","كابتن اميركا","بينجامين بوتين","جاك دوسون" ,"انطوان شوغر","ترافيس","دارث فيدر","شارلي شابلن","فينوم"];
var tle = tl[Math.floor(Math.random() * tl.length)];
var lon = ` 🍒 شخصيتك السينمائية : 

${tle}.`;
return api.sendMessage(lon, event.threadID, event.messageID);
}
const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
return api.sendMessage(`⚔️ ${command.config.name} ⚔️\n${command.config.description}\n\n❯ Cách sử dụng: ${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}\n❯ Thuộc nhóm: ${command.config.commandCategory}\n❯ Thời gian chờ: ${command.config.cooldowns} giây(s)\n❯ Quyền hạn: ${((command.config.hasPermssion == 0) ? "Người dùng" : (command.config.hasPermssion == 1) ? "Quản trị viên" : "Người vận hành bot" )}\n❯ Prefix: ${prefix}\n\n» Module code by ${command.config.credits} «`, threadID, messageID);
};
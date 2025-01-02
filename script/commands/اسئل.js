module.exports.config = {
	name: "اسئلني2",
	version: "1.1.2",
	hasPermssion: 0,
	credits: "benzo",
	description: "البوت يسئلك اسئله عشوائية",
	commandCategory: "𝔾𝔸𝕄𝔼𝕊",
	usages: " ",
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
var tl = ["اذا أراد شخص التقرب من حياتك فهل تساعدة ؟","اذا كان والدك يملك المال لكنه لا يصرف عليك فماذا ستفعل ؟","انت في الجامعة ويوجد فتاة تعجبك لكن شخص مزعج يتقرب منها قبلك، فهل سوف تصبح طرف ثالث ؟","أن كنت تمتلك القدرة على محو انسان واحد من الحياة فهل سيكون عدوك ام توغاشي 😂؟","انت بطل العالم لمدة 1 دقيقة ماذا ستفعل في هذه الثواني؟","لو كان هناك بوابة تساعدك على الأنتقال مرة واحدة إلى أي مكان تريدة فماذا سيكون ؟ 🕶️","هل تظن أن الشيطان اقوى منك ؟ 🕶️","هل هناك شيء يزعجك في العالم وتريد أن يزال ؟","اذا كان هناك امنية واحدة تتحقق فماذا تريدها أن تكون ؟ 😌","هل قمت بفعل أشياء لم تفعلها حتى لنفسك ، لأجل شخص لا يستحقها ؟","هل تظن انك سبب في المواقف المحرجة الذاتية لك ؟ 😂🙄","ماهوه الأنمي المفضل لك ؟ 😌","هل تظن أن جسم الأنسان يمكنه الوصول لمرحلة الكمال العضلي ؟ 😌","هل يعجبك صنف جنسك الحالي ام تمنيت أن تصبح/ي من الصنف الآخر ؟","هل ترقص بحماس عندما تستمع للموسيقى بمفردك؟ 🕶️","اذا استطعت أن ترسم شيء ويصبح حقيقة فماذا سترسم، وهل انت تجيد الرسم اصلا 😂؟","ما هي اكبر خطيئة قمت بها بنظرك ؟","لو كنت تستطيع الدخول في سبات طويل فهل ستفعل ؟ وكم مدة السبات 🕶️!","هل جربت أن تعشق انسان، ثم ادركت انك اضعت وقتك ؟ 😌","ما هي المناسبة المفضلة لديك ^^ ؟","هل تظن أن حلمك لن يتحقق ؟","عندما تتوتر الأوضاع ، هل ستبحث عن حل سريع أم تتركها للقدر ؟ 🕶️","ما هيه اكثر وجبة تفضلها في حياتك وتتمنى تناولها كل يوم،؟","كم مرة ظننت أن الشمس مجرد كرة نارية معلقة في الغيوم ؟ 😂","هل احزنك مشاهدة أنمي مؤثر ؟","لو كنت تستطيع أن تصبح شخصية في أي أنمي لمرة واحدة، فمن ستكون ؟","إذا كان لديك قصر مليئ بالخدم ، فهل ستعاملهم بأحسان ام تتأمر فقط ؟ 🕶️","ما أكثر ما تترقبه في حياتك ؟","هل تظن أن التكنلوجيا ازعاج للعالم ؟ 🕶️","ما الذي سيجعلك تبتسم كل يوم ؟ ربما أنا ؟ 🕶️","اذا كنت تستطيع أن تصبح غنياً بشرط التخلي عن انسانيتك فهل ستصبح ؟ 🕶️","هل فكرت يوماً ما أن أصبحت عجوز في المستقبل ستشعر بلأشتياق إلى مرحلة نضوجك الحالية ؟ 🕶️","أي جزء من جسم الإنسان يعتبر الأقوى ؟ 🕶️"];
var tle = tl[Math.floor(Math.random() * tl.length)];
var lon = ` ${tle}.`;
return api.sendMessage(lon, event.threadID, event.messageID);
}
const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
return api.sendMessage(`⚔️ ${command.config.name} ⚔️\n${command.config.description}\n\n❯ Cách sử dụng: ${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}\n❯ Thuộc nhóm: ${command.config.commandCategory}\n❯ Thời gian chờ: ${command.config.cooldowns} giây(s)\n❯ Quyền hạn: ${((command.config.hasPermssion == 0) ? "Người dùng" : (command.config.hasPermssion == 1) ? "Quản trị viên" : "Người vận hành bot" )}\n❯ Prefix: ${prefix}\n\n» Module code by ${command.config.credits} «`, threadID, messageID);
};
module.exports.config = {
	name: "معلومات",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Mirai Team",// Đã mod thêm thời gian và ngày
	description: "معلومات عن وقت تشغيل البوت",
	commandCategory: "اشياء",
	cooldowns: 5,
	dependencies: {
		"pidusage": "",
    "fast-speedtest-api": ""
	}
};

function byte2mb(bytes) {
	const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
	let l = 0, n = parseInt(bytes, 10) || 0;
	while (n >= 1024 && ++l) n = n / 1024;
	return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
}

module.exports.run = async ({ api, event, args }) => {
		const fast = global.nodemodule["fast-speedtest-api"];
   const prefix = config.PREFIX
  const moment = require("moment-timezone");
		const speedTest = new fast({
			token: "YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm",
			verbose: false,
			timeout: 10000,
			https: true,
			urlCount: 5,
			bufferSize: 8,
			unit: fast.UNITS.Mbps
		});
  var gio = moment.tz("Asia/Baghdad").format("D/MM/YYYY || HH:mm:ss");
   var thu = moment.tz('Asia/Baghdad').format('dddd');
  if (thu == 'Sunday') thu = 'الاحد'
  if (thu == 'Monday') thu = 'الاثنين'
  if (thu == 'Tuesday') thu = 'الثلاثاء'
  if (thu == 'Wednesday') thu = 'الاربعاء'
  if (thu == "Thursday") thu = 'الخميس'
  if (thu == 'Friday') thu = 'الجمعة'
  if (thu == 'Saturday') thu = 'السب'
		const resault = await speedTest.getSpeed();
	const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
	const axios = global.nodemodule["axios"];
	const pidusage = await global.nodemodule["pidusage"](process.pid);
	const timeStart = Date.now();
	return api.sendMessage("", event.threadID, () => api.sendMessage(`❯اليوم : ${thu}\n❯${gio}\n❯البوت يعمل منذ: ${hours} ساعة ،  ${minutes} دقيقة و ${seconds} ثانية \n❯المستخدمين : ${global.data.allUserID.length}\n❯البنك: ${Date.now() - timeStart}ms\n❯اداة الاستخدام: ${prefix}\n❯السرعة : ${resault} Mbs`, event.threadID, event.messageID));
}
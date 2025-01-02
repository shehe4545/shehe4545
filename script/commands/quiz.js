module.exports.config = {
	name: "جروب",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "HungCho (Khánh Milo Fix)",
    description: "تعديل المجموعة من قبل المطور فقط",
	commandCategory: "𝔸𝔻𝕄𝕀ℕ 𝔾ℝ𝕆𝕌ℙ",
	usages: "[الاسم/الصورة/الادمن/الايموجي]",
	cooldowns: 1,
	dependencies: {
		"request":"",
		"fs-extra":""
}
};

module.exports.run = async({api, event, args}) => {
	const fs = global.nodemodule["fs-extra"];
	const request = global.nodemodule["request"];
	 if (args.length == 0) return api.sendMessage(`You can use:\n/groupemoji [icon]\n\n/groupname [the box name needs to be changed]\n\n/groupimage [rep any image needs to be set as group chat image]\n\n/gcadmin [tag] => it will give qtv to the person tagged\n\n/groupinfo => All group information !
`, event.threadID, event.messageID);


	if (args[0] == "اسم") {
var content = args.join(" ");
var c = content.slice(4, 99) || event.messageReply.body;
api.setTitle(`${c } `, event.threadID);
 }
	if (args[0] == "ايموجي") {
const name = args[1] || event.messageReply.body;
api.changeThreadEmoji(name, event.threadID)

 }
if(args[0] == "انا"){
	 if (args[1] == "ادمن") {
		const threadInfo = await api.getThreadInfo(event.threadID)
		const find = threadInfo.adminIDs.find(el => el.id == api.getCurrentUserID());
		if(!find) api.sendMessage("احتاج ادمن ❤️💛✅ ?", event.threadID, event.messageID)
	  else if(!global.config.ADMINBOT.includes(event.senderID)) api.sendMessage("عندك صلاحية ?", event.threadID, event.messageID)
     else api.changeAdminStatus(event.threadID, event.senderID, true);
     }
} 
if (args[0] == "ادمن") {

if (args.join().indexOf('@') !== -1){
	 namee = Object.keys(event.mentions)}
else namee = args[1]
if (event.messageReply) {namee = event.messageReply.senderID}

const threadInfo = await api.getThreadInfo(event.threadID)
const findd = threadInfo.adminIDs.find(el => el.id == namee);
const find = threadInfo.adminIDs.find(el => el.id == api.getCurrentUserID());
const finddd = threadInfo.adminIDs.find(el => el.id == event.senderID);

if (!finddd) return api.sendMessage("أنت مش ادمن?", event.threadID, event.messageID);		
if(!find) {api.sendMessage("الادمن يستعملون الشبشب?", event.threadID, event.messageID)}
if (!findd) {api.changeAdminStatus(event.threadID, namee, true);}
else api.changeAdminStatus(event.threadID, namee, false)
 }

if (args[0] == "صورة") {

if (event.type !== "message_reply") return api.sendMessage("❌رد على صورة", event.threadID, event.messageID);
	if (!event.messageReply.attachments || event.messageReply.attachments.length == 0) return api.sendMessage("❌ رد على صورة او صوت او فيديوا", event.threadID, event.messageID);
	if (event.messageReply.attachments.length > 1) return api.sendMessage(`من فضلك فقط صورة او صوت او فيديوا !`, event.threadID, event.messageID);
	 var callback = () => api.changeGroupImage(fs.createReadStream(__dirname + "/cache/1.png"), event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"));	
      return request(encodeURI(event.messageReply.attachments[0].url)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
      };
if (args[0] == "معلومات") {
		var threadInfo = await api.getThreadInfo(event.threadID);
		let threadMem = threadInfo.participantIDs.length;
	var gendernam = [];
	var gendernu = [];
	var nope = [];
	for (let z in threadInfo.userInfo) {
		var gioitinhone = threadInfo.userInfo[z].gender;

		var nName = threadInfo.userInfo[z].name;

		if (gioitinhone == 'MALE') {
			gendernam.push(z + gioitinhone);
		} else if (gioitinhone == 'FEMALE') {
			gendernu.push(gioitinhone);
		} else {
			nope.push(nName);
		}
	}
	var nam = gendernam.length;
	var nu = gendernu.length;
	let qtv = threadInfo.adminIDs.length;
	let sl = threadInfo.messageCount;
	let icon = threadInfo.emoji;
	let threadName = threadInfo.threadName;
	let id = threadInfo.threadID;
	var listad = '';
	var qtv2 = threadInfo.adminIDs;
	for (let i = 0; i < qtv2.length; i++) {
const infu = (await api.getUserInfo(qtv2[i].id));
const name = infu[qtv2[i].id].name;
		listad += '•' + name + '\n';
	}
	let sex = threadInfo.approvalMode;
	var pd = sex == false ? 'Turn off' : sex == true ? 'Turn on' : 'Kh';
	var pdd = sex == false ? '❎' : sex == true ? '✅' : '⭕';
	 var callback = () =>
				api.sendMessage(
					{
						body: `إسم الجروب: ${threadName}\nالآيدي: ${id}\n${pdd} القبول: ${pd}\nالإيموجي: ${icon}\n-معلومات:\nحاليا ${threadMem} عضو\nذكرور ${nam} أعضاء \nبنات: ${nu} أعضاء\n\nمع ${qtv} أدمن الرسائل:\n${listad}\nعددها: ${sl} رسالة.`,
						attachment: fs.createReadStream(__dirname + '/cache/1.png')
					},
					event.threadID,
					() => fs.unlinkSync(__dirname + '/cache/1.png'),
					event.messageID
				);
			return request(encodeURI(`${threadInfo.imageSrc}`))
				.pipe(fs.createWriteStream(__dirname + '/cache/1.png'))
				.on('close', () => callback());

	}	  
}
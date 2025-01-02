module.exports.config = {
	name: "قائمة",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "𝙈𝙧𝙏𝙤𝙢𝙓𝙭𝙓",
	description: "Beginner's Guide",
	usages: "[all/-a] [number of pages]",
	commandCategory: "For users",
	cooldowns: 5
};

module.exports.handleReply = async function ({ api, event, handleReply }) {
	let num = parseInt(event.body.split(" ")[0].trim());
	(handleReply.bonus) ? num -= handleReply.bonus : num;
	let msg = "";
	let data = handleReply.content;
	let check = false;
	if (isNaN(num)) msg = " من فضلك قم بادخال الرقم اللذي تريده";
	else if (num > data.length || num <= 0) msg = "الرقم اللذي اخترته لا يوجد في القائمة , اعد المحاولة مجددا";
	else {
		const { commands } = global.client;
		let dataAfter = data[num-=1];
		if (handleReply.type == "cmd_info") {
			let command_config = commands.get(dataAfter).config;
			msg += ` 『  ${command_config.commandCategory.toUpperCase()}   』   \n`;
			msg += `\nالامر: ${dataAfter}`;
			msg += `\nالوصف: ${command_config.description}`;
			msg += `\nالاستخدام: ${(command_config.usages) ? command_config.usages : ""}`;
			msg += `\nالمهلة: ${command_config.cooldowns || 5}s`;
			msg += `\nالقوة: ${(command_config.hasPermssion == 0) ? "User" : (command_config.hasPermssion == 1) ? "Group administrator" : "Bot admin"}`;
      msg += `\n✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏`
			msg += `\n\n» تم تعديله بواسطة: ${command_config.credits} «`;
		} else {
			check = true;
			let count = 0;
			msg += `» ${dataAfter.group.toUpperCase()} «\n`;

			dataAfter.cmds.forEach(item => {
				msg += `\n ${count+=1}. » ${item}: ${commands.get(item).config.description}`;
			})
			msg += "\n\n╭──────╮\n     𝟵𝟵𝟵 الاوامر \n╰──────╯\nلعرض التفاصيل قم بالرد على الرسالة بالرقم اللذي اخترته";
		}
	}
	const axios = require('axios');
	const fs = require('fs-extra');
	const img = ["https://i.imgur.com/nrWAIKa.jpeg", "https://i.imgur.com/C5SLnyh.jpeg", "https://i.imgur.com/CoJ3jRO.jpeg", "https://i.imgur.com/yPPoSQy.jpeg", "https://i.imgur.com/VEWNw68.jpeg", "https://i.imgur.com/YgMRrJW.gif", "https://i.imgur.com/IpuGKQ9.gif", "https://i.imgur.com/oHDlwaL.gif", "https://i.imgur.com/JlRBMeS.gif", "https://i.imgur.com/zQqhgM4.gif", "https://i.imgur.com/hrJJLu3.gif"]
	var path = __dirname + "/cache/menu.gif"
	var rdimg = img[Math.floor(Math.random() * img.length)]; 
	const imgP = []
	let dowloadIMG = (await axios.get(rdimg, { responseType: "arraybuffer" } )).data; 
	fs.writeFileSync(path, Buffer.from(dowloadIMG, "utf-8") );
	imgP.push(fs.createReadStream(path))
	var msgg = {body: msg, attachment: imgP}
	api.unsendMessage(handleReply.messageID);
	return api.sendMessage(msgg, event.threadID, (error, info) => {
		if (error) console.log(error);
		if (check) {
			global.client.handleReply.push({
				type: "cmd_info",
				name: this.config.name,
				messageID: info.messageID,
				content: data[num].cmds
			})
		}
	}, event.messageID);
}

module.exports.run = async function({ api, event, args }) {
	const { commands } = global.client;
	const { threadID, messageID } = event;
	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
	const axios = require('axios');
	const fs = require('fs-extra');
	const imgP = []
	const img = ["https://i.imgur.com/PfioSJP.gif", "https://i.imgur.com/6PArjh2.gif", "https://i.imgur.com/sclek83.gif", "https://i.imgur.com/c7jER2a.gif", "https://i.imgur.com/PAvBbgQ.gif", "https://i.imgur.com/YgMRrJW.gif", "https://i.imgur.com/IpuGKQ9.gif", "https://i.imgur.com/oHDlwaL.gif", "https://i.imgur.com/JlRBMeS.gif", "https://i.imgur.com/zQqhgM4.gif", "https://i.imgur.com/hrJJLu3.gif"]
	var path = __dirname + "/cache/menu.gif"
	var rdimg = img[Math.floor(Math.random() * img.length)]; 

   	let dowloadIMG = (await axios.get(rdimg, { responseType: "arraybuffer" } )).data; 
        fs.writeFileSync(path, Buffer.from(dowloadIMG, "utf-8") );
        imgP.push(fs.createReadStream(path))
	const command = commands.values();
	var group = [], msg = "» قائمة الاوامر المتاحة «\n";
	let check = true, page_num_input = "";
	let bonus = 0;

	for (const commandConfig of command) {
		if (!group.some(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase())) group.push({ group: commandConfig.config.commandCategory.toLowerCase(), cmds: [commandConfig.config.name] });
		else group.find(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase()).cmds.push(commandConfig.config.name);
	}

	if (args[0] && ["all", "-a"].includes(args[0].trim())) {
		let all_commands = [];
		group.forEach(commandGroup => {
			commandGroup.cmds.forEach(item => all_commands.push(item));
		});
		let page_num_total = Math.ceil(all_commands.length / 2222222222);
		if (args[1]) {
			check = false;
			page_num_input = parseInt(args[1]);
			if (isNaN(page_num_input)) msg = "اختر رقما من فضلك";
			else if (page_num_input > page_num_total || page_num_input <= 0) msg = "الرقم اللذي اخترته غير موجود في القائمة, اعد المحاولة مجددا";
			else check = true;
		}
		if (check) {
		index_start = (page_num_input) ? (page_num_input * 2222222222) - 2222222222 : 0;
			bonus = index_start;
			index_end = (index_start + 2222222222 > all_commands.length) ? all_commands.length : index_start + 2222222222;
			all_commands = all_commands.slice(index_start, index_end);
			all_commands.forEach(e => {
				msg += `\n${index_start+=1}. » ${e}: ${commands.get(e).config.description}`;
			})
			msg += `\n\nالصفحة ${page_num_input || 1}/${page_num_total}`;
			msg += `\nلعرض الصفحات الاخرى استخدم,: ${prefix}menu [all/-a] [number of pages]`;
      msg += `\nلعرض الصفحات الاخرى استخدم ${prefix}help كي ترى بقية الصفحات`
			msg += "\n╭──────╮\n       𝟵𝟵𝟵 الاوامر \n╰──────╯ لعرض تفاصيل الأمر وكيفية استخدام الأمر قم بالرد على الرسالة بالرقم اللذي اخترته";
		}
		var msgg = {body: msg, attachment: imgP}
		return api.sendMessage(msgg, threadID, (error, info) => {
			if (check) {
				global.client.handleReply.push({
					type: "cmd_info",
					bonus: bonus,
					name: this.config.name,
					messageID: info.messageID,
					content: all_commands
				})
			}
		}, messageID)
	}

	let page_num_total = Math.ceil(group.length / 2222222222);
	if (args[0]) {
		check = false;
		page_num_input = parseInt(args[0]);
		if (isNaN(page_num_input)) msg = "من فضلك اختر رقما";
		else if (page_num_input > page_num_total || page_num_input <= 0) msg = "الرقم اللذي اخترته غير موجود في القائمة, اعد المحاولة مجددا";
		else check = true;
	}
	if (check) {
		index_start = (page_num_input) ? (page_num_input * 2222222222) - 2222222222 : 0;
		bonus = index_start;
		index_end = (index_start + 2222222222 > group.length) ? group.length : index_start + 2222222222;
		group = group.slice(index_start, index_end);
		group.forEach(commandGroup => msg += `\n${index_start+=1}. » ${commandGroup.group.toUpperCase()} `);
		msg += `\n\nالصفحة【${page_num_input || 1}/${page_num_total}】`;
		msg += `\nلرؤية الصفحات الاخرى استخدم: ${prefix}menu متبوعا برقم الصفحة`;

		msg += `\n╭──────╮\n       𝟵𝟵𝟵 أمر\n╰──────╯ قم بالرد على الرسالة بالرقم اللذي اخترته`;
	}
	var msgg = {body: msg, attachment: imgP}
	return api.sendMessage(msgg, threadID, async (error, info) => {
		global.client.handleReply.push({
			name: this.config.name,
			bonus: bonus,
			messageID: info.messageID,
			content: group
		})
	});
}
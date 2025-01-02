module.exports.config = {
	name: "الرياكشنات",
	version: "1.1.1",
	hasPermission: 0,
	credits: "John Lester",
	description: " ",
	commandCategory: "𝔻𝔼𝕍𝔼𝕃𝕆ℙ𝔼ℝ",
	cooldowns: 0,
};
const fs = require("fs");
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("هههههه") || react.includes("hhhhhhh") || react.includes("pakyu") || react.includes("😆") || react.includes("😂") || react.includes(":)") || react.includes("🙂") || react.includes("😹") || react.includes("🤣") || react.includes("Pota") || react.includes("baboy") || react.includes("kababuyan") || react.includes("🖕") || react.includes("🤢") || react.includes("😝") || react.includes("نجب") || react.includes("lmao") || react.includes("مطي") || react.includes("نعال") || react.includes("زمال") || react.includes("عير") || react.includes("زب") || react.includes("كسمج") || react.includes("كس") || react.includes("كسمك") || react.includes("كواد") || react.includes("فرخ") || react.includes("كحبة") || react.includes("قحبة") || react.includes("كحبه") || react.includes("قحبه") || react.includes("كلب") || react.includes("مطي") || react.includes("فقير")) {
    var msg = {
				body: ""
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😆", event.messageID, (err) => {}, true)
          };
    if(react.includes("افويسد") || react.includes("Mahal") || react.includes("Love") || react.includes("love") || react.includes("lab") || react.includes("lab") || react.includes("😊") || react.includes("😗") || react.includes("😙") || react.includes("😘") || react.includes("🐢") || react.includes("😍") || react.includes("🤭") || react.includes("🥰") || react.includes("😇") || react.includes("🤡")) {
      var lab = {
				body: ""
			}
			api.sendMessage(lab, threadID, messageID);
    api.setMessageReaction("🕶️", event.messageID, (err) => {}, true)
          };
    if(react.includes("حزن") || react.includes("مات") || react.includes("توفى") || react.includes("صمده") || react.includes("صمدة") || react.includes("ساد") || react.includes("خزان") || react.includes("احزان") || react.includes("يرحمه") || react.includes("يرحمة") || react.includes("اخ") || react.includes("ضايج") || react.includes("زعلان") || react.includes("زعلت") || react.includes("يمعود") || react.includes("ساد") || react.includes("ضجت") || react.includes("ضوجتني") || react.includes("كئيب") || react.includes(" 😥") || react.includes("😰") || react.includes("😨") || react.includes("😢") || react.includes("اموت") || react.includes("😔") || react.includes("😞") || react.includes("فلوس") || react.includes("مادري") || react.includes("شغل") || react.includes("Depress") || react.includes("تعب") || react.includes("تعبت") || react.includes("kalungkutan") || react.includes("Kalungkutan") || react.includes("😭")) {
      var sad = {
				body: ""
			}
			api.sendMessage(lab, threadID, messageID);
    api.setMessageReaction("😥", event.messageID, (err) => {}, true)
          };
    if(react.includes("طماطة") || react.includes("kangkutan") || react.includes("Kalungkutan") || react.includes("🐐")) {
      var sad = {
				body: ""
			}
			api.sendMessage(sad, threadID, messageID);
    api.setMessageReaction("🐐", event.messageID, (err) => {}, true)
          };
    if(react.includes("زيرو") || react.includes("دييم") || react.includes("احبك") || react.includes("بوت") || react.includes("هاتو") || react.includes("بينزو") || react.includes("مطور") || react.includes("سراج") || react.includes("صباح") || react.includes("تصبحون") || react.includes("ثباحو") || react.includes("ثباحوو") || react.includes("صباحو") || react.includes("هلا") || react.includes("هلاوات") || react.includes("شلونكم") || react.includes("الحمدالله") || react.includes("روعه") || react.includes("المطور")) {
      var heart = {
				body: ""
			}
			api.sendMessage(heart, threadID, messageID);
    api.setMessageReaction("❤", event.messageID, (err) => {}, true)
                }
        }
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }


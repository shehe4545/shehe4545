module.exports.config = {
	name: "قلوب",
	version: "1.0.2",
	hasPermssion: 0,
	credits: "benzo",
	description: "Module code by benzo \n",
	commandCategory: "𝔾𝔸𝕄𝔼𝕊",
	usages: "[ازرق/blue][برتقالي/orange][اخضر/green][اصفر/yellow][بنفسج/violet][اسود/black]",
	cooldowns: 0,
   dependencies: {}
};
module.exports.run = async function ({event, api, args, Currencies, __GLOBAL }) {
	             var data = await Currencies.getData(event.senderID);
  var money = data.money
  const moneyUser = (await Currencies.getData(event.senderID)).money;
  if (5000 > moneyUser) return api.sendMessage("ليس لديك ما يكفي من المال للعب", event.threadID, event.messageID);
	            var color = args.join("") 
				var check = (num) => (num == 0) ? '💙' : (num % 2 == 0 && num % 6 != 0 && num % 10 != 0) ? '🧡' : (num % 3 == 0 && num % 6 != 0) ? '💚' : (num % 5 == 0 && num % 10 != 0) ? '💛' : (num % 10 == 0) ? '💜' : '🖤️';
				let random = Math.floor(Math.random() * 5);
				if (color == "ازرق" || color == "blue") color = 0;
				else if (color == "برتقالي" || color == "orange") color = 1;
				else if (color == "اخضر" || color == "green") color = 2;
				else if (color == "اصفر" || color == "yellow") color = 3;
				else if (color == "بنفسج" || color == "violet") color = 4;
				else if (color == "اسود" || color == "black") color = 5;
				else return api.sendMessage("لم تدخل معلومات الرهان\n💙ازرق/blue \n🧡برتقالي/orange \n💚اخضر/green \n💛اصفر/yellow \n💜بنفسج/violet \n🖤اسود/black", event.threadID, event.messageID);
				let coin = Math.floor(Math.random() * (1000 - 500 + 1)) + 500;
				if (color == 0 && check(random) == '💙') api.sendMessage(`لقد اخترت اللون 💙, لقد ربحت وحصلت + ${coin}$\nالمبلغ الحالي الخاص بك هو: ${moneyUser + coin}$`, event.threadID,() => Currencies.setData(event.senderID, options = {money: money + coin}),event.messageID);
				else if (color == 1 && check(random) == '🧡') api.sendMessage(`لقد اخترت اللون 🧡, لقد ربحت وحصلت + ${coin}$\nالمبلغ الحالي الخاص بك là: ${moneyUser + coin}$`, event.threadID,() => Currencies.setData(event.senderID, options = {money: money + coin}),event.messageID);
				else if (color == 2 && check(random) == '💚') api.sendMessage(`اختاريت اللون الاخضر 💚, لقد ربحت وحصلت + ${coin}$\nفلوسك صارن: ${moneyUser + coin}$`, event.threadID,() => Currencies.setData(event.senderID, options = {money: money + coin}),event.messageID);
				else if (color == 3 && check(random) == '💛') api.sendMessage(`اختاريت اللون الاصفر 💛 لقد ربحت وحصلت + ${coin}$\nفلوسك صارن: ${moneyUser + coin}$`, event.threadID,() => Currencies.setData(event.senderID, options = {money: money + coin}),event.messageID);
				else if (color == 4 && check(random) == '💜') api.sendMessage(`اختاريت اللون البنفسجي 💜, لقد ربحت وحصلت + ${coin}$\nفلوسك صارن: ${moneyUser + coin}$`, event.threadID,() => Currencies.setData(event.senderID, options = {money: money + coin}),event.messageID);
				else if (color == 5 && check(random) == '🖤️') api.sendMessage(`اختاريت اللون الاسود 🖤️, لقد ربحت وحصلت + ${coin}$\nفلوسك صارن: ${moneyUser + coin}$`, event.threadID,() => Currencies.setData(event.senderID, options = {money: money + coin}),event.messageID);
				else api.sendMessage(`اللون  ${check(random)}\n خسرت وخصمت 1000$ من فلوسك \nفلوسك الباقية هيه: ${moneyUser - 1000}$`, event.threadID,() => Currencies.setData(event.senderID, options = {money: money - 1000}),event.messageID);
    }
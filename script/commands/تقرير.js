module.exports.config = {
  name: "تقرير",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "NTKhang fix by Jukie",
  description: "ارسال المخالفات او طلب ازاله الحضر او الموافقه على كروب التقارير تذهب للمطور والمشرف",
  commandCategory: "اوامر الكروبات",
  usages: "[lỗi gặp phải hoặc ý kiến]",
  cooldowns: 5,
};

module.exports.handleReply = async function({ api, args, event, handleReply, Users}) {
  var name = (await Users.getData(event.senderID)).name 
 switch(handleReply.type) {
   case "reply": {
     var idad = global.config.ADMINBOT;
     for(let ad of idad) {
     api.sendMessage({body: "📄الرسالة من "+name+":\n"+event.body, mentions: [{
      id: event.senderID,
      tag: name}]},ad , (e, data) => global.client.handleReply.push({
      name: this.config.name,
      messageID: data.messageID,
      messID: event.messageID,
      author: event.senderID,
      id: event.threadID,
      type: "calladmin"}))
     }
   break;}
    case "calladmin": {
      api.sendMessage({ body: `⚡رسالة من المطور ${name} لك :\n--------\n${event.body}\n--------\n»💬قم بالرد على هذه الرسالة لأستكمال ارسال الرسالة للمطور `, mentions: [{tag: name, id : event.senderID}]}, handleReply.id, (e, data) => global.client.handleReply.push({
  name: this.config.name,
  author: event.senderID,
  messageID: data.messageID,
  type: "reply"}), handleReply.messID);
   break;}
     
     }
  
  
};

module.exports.run = async function({ api, event, args, Users }) {
  if (!args[0])
    return api.sendMessage(
      "انت لم تقم بأدخال محتوى نصي لأرساله للمطور !",
      event.threadID,
      event.messageID
    );
  //var data = await api.getUserInfo(event.senderID); 
  var name = (await Users.getData(event.senderID)).name;
  var idbox = event.threadID;
 // const url = (api.getCurrentUserID(event.senderID));
  var datathread = await api.getThreadInfo(event.threadID);
  var namethread = datathread.name;

  const moment = require("moment-timezone");
  var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss D/MM/YYYY");
  var soad = global.config.ADMINBOT.length;
  api.sendMessage(
    "تم إرسال تقريرك إلى مطور البوت !",
    event.threadID,
    () => {
    var idad = global.config.ADMINBOT;
    for(let ad of idad) {
        api.sendMessage(`⚡تقرير من: ${name}\n⚡الكروب : ${namethread}\n⚡ايدي الكروب : ${idbox}\n----------------\n⚠️الرسالة: ${args.join(
            " "
          )}\n----------------\n⚡الوقت: ${gio}`,
          ad, (error, info) =>
            global.client.handleReply.push({
              name: this.config.name,
              messageID: info.messageID,
              author: event.senderID,
              messID: event.messageID,
              id: idbox,
              type: "calladmin"
            })
        );
    }
    }
  );
};
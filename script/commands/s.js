module.exports.config = {
  name: "اتصال",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "NTKhang update & fix by DuyVuong and D-jukie Mod by TuấnDz",
  description: "البوت يرسل رسالة للمطور",
  commandCategory: "𝔾ℝ𝕆𝕌ℙ",
  usages: "[إشعار][الرسالة]",
  cooldowns: 5,
};

module.exports.handleReply = async function({ api, args, event, handleReply, Users }) {
  try {
    var name = (await Users.getData(event.senderID)).name;
    var s = [];
    var l = [];
    const fs = require('fs-extra');
    const { join } = require('path');
    const axios = require('axios');
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length || 20;
    if (event.attachments.length != 0) {
      for (var p of event.attachments) {
        var result = '';
        for (var i = 0; i < charactersLength; i++) result += characters.charAt(Math.floor(Math.random() * charactersLength));
        if (p.type == 'photo') {
          var e = 'jpg';
        }
        if (p.type == 'video') {
          var e = 'mp4';
        }
        if (p.type == 'audio') {
          var e = 'mp3';
        }
        if (p.type == 'animated_image') {
          var e = 'gif';
        }
        var o = join(__dirname, 'cache', `${result}.${e}`);
        let m = (await axios.get(encodeURI(p.url), { responseType: "arraybuffer" })).data;
        fs.writeFileSync(o, Buffer.from(m, "utf-8"));
        s.push(o);
        l.push(fs.createReadStream(o));
      }
    };
    switch (handleReply.type) {
      case "reply": {
        var idad = global.config.ADMINBOT;
        if (s.length == 0) {
          for (let ad of idad) {
            api.sendMessage({
              body: "[📲] رد من " + name + " :\n[💬] قال لك: " + (event.body) || "مافي رد", mentions: [{
                id: event.senderID,
                tag: name
              }]
            }, ad, (e, data) => global.client.handleReply.push({
              name: this.config.name,
              messageID: data.messageID,
              messID: event.messageID,
              author: event.senderID,
              id: event.threadID,
              type: "calladmin"
            }));
          }
        }
        else {
          for (let ad of idad) {
            api.sendMessage({
              body: "[📲] رد من " + name + ":\n" + (event.body) || "فقط الملفات لا تملك ردود 🧡", attachment: l, mentions: [{
                id: event.senderID,
                tag: name
              }]
            }, ad, (e, data) => global.client.handleReply.push({
              name: this.config.name,
              messageID: data.messageID,
              messID: event.messageID,
              author: event.senderID,
              id: event.threadID,
              type: "calladmin"
            }));
            for (var b of s) {
              fs.unlinkSync(b);
            }
          }
        }
        break;
      }
      case "إشعار": {
        if (s.length == 0) {
          api.sendMessage({ body: `[📌] رسالة من ${name} لك:\n\n[💬] قال لك: ${(event.body) || "مافي ردود 🌸 "}\n\n» رد على هذه الرسالة للإستمرار في التواصل`, mentions: [{ tag: name, id: event.senderID }] }, handleReply.id, (e, data) => global.client.handleReply.push({
            name: this.config.name,
            author: event.senderID,
            messageID: data.messageID,
            type: "reply"
          }), handleReply.messID);
        }
        else {
          api.sendMessage({ body: `[📌] رسالة من ${name} إليك:\n\n[💬] قال لك: ${(event.body) || "الملفات ليس لها ردود 🌸 "}\n[💌] أدمن الملفات أرسل لك\n\n» رد على هذه الرسالة للإستمرار في التواصل`, attachment: l, mentions: [{ tag: name, id: event.senderID }] }, handleReply.id, (e, data) => global.client.handleReply.push({
            name: this.config.name,
            author: event.senderID,
            messageID: data.messageID,
            type: "reply"
          }), handleReply.messID);
          for (var b of s) {
            fs.unlinkSync(b);
          }
        }
        break;
      }
    }
  }
  catch (ex) {
    console.log(ex);
  }
};

module.exports.run = async function({ api, event, Threads, args, Users }) {
  try {
    var s = [];
    var l = [];
    const fs = require('fs-extra');
    const { join } = require('path');
    const axios = require('axios');
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length || 20;
    if (event.messageReply) {
    if (event.messageReply.attachments.length != 0) {
      for (var p of event.messageReply.attachments) {
        var result = '';
        for (var i = 0; i < charactersLength; i++) result += characters.charAt(Math.floor(Math.random() * charactersLength));
        if (p.type == 'photo') {
          var e = 'jpg';
        }
        if (p.type == 'video') {
          var e = 'mp4';
        }
        if (p.type == 'audio') {
          var e = 'mp3';
        }
        if (p.type == 'animated_image') {
          var e = 'gif';
        }
        var o = join(__dirname, 'cache', `${result}.${e}`);
        let m = (await axios.get(encodeURI(p.url), { responseType: "arraybuffer" })).data;
        fs.writeFileSync(o, Buffer.from(m, "utf-8"));
        s.push(o);
        l.push(fs.createReadStream(o));
      }
    }
  }
    if (!args[0] && event.messageReply.attachments.length == 0)
      return api.sendMessage(`أدخل التقرير 📋`,
        event.threadID,
        event.messageID
      );

    var name = (await Users.getData(event.senderID)).name;
    var idbox = event.threadID;

    var datathread = (await Threads.getData(event.threadID)).threadInfo;
    var namethread = datathread.threadName;
    var uid = event.senderID;

    const moment = require("moment-timezone");
    var gio = moment.tz("Asia/Manila").format("HH:mm:ss D/MM/YYYY");
    var soad = global.config.ADMINBOT.length;
    api.sendMessage(`[🤖] - البوت أرسل رسالتك بنجاح إلى ${soad} أدمن 🍄 \n[⏰] - الساعة: ${gio}`,
      event.threadID,
      () => {
        var idad = global.config.ADMINBOT;
        if (s.length == 0) {
          for (let ad of idad) {
            api.sendMessage({ body: `📱[ إتصال الأونر ]📱 \n\n\n[👤] التقرير من: ${name}\n[❗] آيدي ${uid}\n[🗣️] مجموعة: ${namethread}\n[🔰] آيدي المجموعة : ${idbox}\n\n[💌] إينبوكس: ${args.join(
              " "
            )}\n[⏰] الوقت: ${gio}`, mentions: [{ id: event.senderID, tag: name }] },
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
        else {
          for (let ad of idad) {
            api.sendMessage({
              body: `📱 ===[إتصال]====📱\n\n\n[👤] من: ${name}\n[❗] آيديه ${uid}\n[ 👧 👩 👧 👨 ] مجموعة: ${namethread}\n[🔰] آيديها: ${idbox}\n\n[💌] Inbox: ${(args.join(
                " "
              )) || "الملفات لا تملك تقرير ❤️ "}\n[⏰] الوقت: ${gio}\n[📌] الملف`, attachment: l, mentions: [{ id: event.senderID, tag: name }]
            },
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
          for (var b of s) {
            fs.unlinkSync(b);
          }
        }
      }
      , event.messageID);
  }
  catch (ex) {
    console.log(ex);
  }
};
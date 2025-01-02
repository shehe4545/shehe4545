module.exports.config = {
  name: "موفقه",
  version: "1.0.2",
  hasPermssion: 2,
  credits: "DungUwU",
  description: "قبول list/del/pending",
  commandCategory: "𝔻𝔼𝕍𝔼𝕃𝕆ℙ𝔼ℝ",
  cooldowns: 5
};


const dataPath = __dirname + "/cache/approvedThreads.json";
const pendingPath = __dirname + "/cache/pendingThreads.json";
const fs = require("fs");

module.exports.onLoad = () => {
  if (!fs.existsSync(dataPath)) fs.writeFileSync(dataPath, JSON.stringify([]));
  if (!fs.existsSync(pendingPath)) fs.writeFileSync(pendingPath, JSON.stringify([]));
}

module.exports.run = async ({ event, api, args }) => {
  const { threadID, messageID, senderID } = event;
  let data = JSON.parse(fs.readFileSync(dataPath));
  let pending = JSON.parse(fs.readFileSync(pendingPath));
  let msg = "";
  let idBox = (args[0]) ? args[0] : threadID;
  if (args[0] == "قائمة") {
    msg = "قائمة المجموعات المقبولة ✅! ";
    let count = 0;
    for (e of data) {
      msg += `\n${count += 1}. ID: ${e}`;
    }
    api.sendMessage(msg, threadID, messageID);
  }
  else if (args[0] == "حذف") {
    idBox = (args[1]) ? args[1] : event.threadID;
    if (isNaN(parseInt(idBox))) return api.sendMessage("البوت ليس عضو هناك ❌.", threadID, messageID);
    if (!data.includes(idBox)) return api.sendMessage("إستعمل  [Prefix]طلب ليقوم المطور بقبول مجموعتك لأنها غير مقبولة ❌", threadID, messageID);
    api.sendMessage(`⚠️قام المطور بإزالة القبول لازمك قبول منه مجددا ⛔ `, threadID, () => {
      if (!pending.includes(idBox)) pending.push(idBox);
      data.splice(data.indexOf(idBox), 1);
      fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
      fs.writeFileSync(pendingPath, JSON.stringify(pending, null, 2));
    }, messageID)
  }
  else if (args[0] == "الإنتظار") {
    msg = "مجموعات تنتضر القبول ❌!";
    let count = 0;
    for (e of pending) {
      let name = (await api.getThreadInfo(e)).name || "Group Chat";
      msg += `\n${count += 1}. ${name}\nID: ${e}`;
    }
    api.sendMessage(msg, threadID, messageID);
  }
  else if (isNaN(parseInt(idBox))) api.sendMessage("آيدي خاطأ ", threadID, messageID);
  else if (data.includes(idBox)) api.sendMessage(`ID المجموعات ${idBox} المقبولة ✅! `, threadID, messageID);
  else api.sendMessage("» ⚠️مجموعتك قبلها المطور إستعمل /أوامر لرؤية أوامر البوت ☑", idBox, (error, info) => {
    if (error) return api.sendMessage("تأكد أن الآيدي صحيح و أن البوت موجود في المجموعة ! ", threadID, messageID);
    else {
      data.push(idBox);
      pending.splice(pending.indexOf(idBox), 1);
      fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
      fs.writeFileSync(pendingPath, JSON.stringify(pending, null, 2));
      api.sendMessage(`» ✅تم قبول المجموعة من قبل مطور البوت :\n${idBox}\nإستعملني بدون إسائة☑`, threadID, messageID);
    }
  });
    }
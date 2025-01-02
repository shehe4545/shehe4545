module.exports.config = {
    name: "قفل",
    version: "1.0.0",
    credits: "DungUwU (Khánh Milo Fix)",
    hasPermssion: 1,
    description: "منع خروج الأعضاء ",
    usages: "تشغيل/ايقاف",
    commandCategory: "𝔾ℝ𝕆𝕌ℙ",
    cooldowns: 0
};

module.exports.run = async({ api, event, Threads}) => {
    let data = (await Threads.getData(event.threadID)).data || {};
    if (typeof data["antiout"] == "undefined" || data["antiout"] == false) data["antiout"] = true;
    else data["antiout"] = false;
    
    await Threads.setData(event.threadID, { data });
    global.data.threadData.set(parseInt(event.threadID), data);
    
    return api.sendMessage(`✅ تم ${(data["antiout"] == true) ? "تشغيل" : "إيقاف"} وضع منع الخروج!`, event.threadID);

}
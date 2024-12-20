module.exports.config = {
    name: "برا",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "𝒚𝒐𝒅𝒂 𝒕𝒂𝒌𝒂𝒉𝒂𝒔𝒉𝒊",
    description: "مو شغلك 😇",
    commandCategory: "المطور",
    usages: "غادر [ايدي الكروب]",
    cooldowns: 10,
};

module.exports.run = async function({ api, event, args }) {
    const permission = [`61569409418704`, `61569409418704`];

    if (!permission.includes(event.senderID)) return api.sendMessage("مش لك", event.threadID, event.messageID);

    if (!args[0]) {
        // إضافة رسالة قبل الخروج
        await api.sendMessage("ليس بارادتي أن أغادر أصدقائي، ولكن المطور أمرني بالخروج. سأفتقدكم إلى لقاء 🥀🧸.", event.threadID);

        // الخروج من المجموعة بعد إرسال الرسالة
        api.removeUserFromGroup(api.getCurrentUserID(), event.threadID);
    }

    if (!isNaN(args[0])) {
        // الخروج من المجموعة باستخدام الأيدي المحدد
        api.removeUserFromGroup(api.getCurrentUserID(), args.join(" "));
    }
}

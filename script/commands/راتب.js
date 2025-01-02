module.exports.config = {
    name: "راتب",
    version: "1.0.2",
    hasPermssion: 0,
    credits: "datoccho",
    description: "a",
    commandCategory: "الاموال",
    usages: "a",
    cooldowns: 50000
};
module.exports.run = async ({ api, event, args, Currencies }) => {
    const { getData } = Currencies;
    const { threadID, messageID, senderID } = event;
    const data = (await Currencies.getData(senderID)).data || {};
    const money = (await getData(senderID)).money;
    const coin = Math.floor(Math.random() * 5000);
    var rdm = [`  - راتبك اليومي لأستعمال البوت  :    ${coin}$`,];
    const text = rdm[Math.floor(Math.random() * rdm.length)]
    return api.sendMessage(`${text}`, threadID, async () => {
        await Currencies.increaseMoney(senderID, parseInt(coin));
        await Currencies.setData(event.senderID, { data });
        return;
    }, messageID);
          }
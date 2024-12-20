module.exports.config = {
  name: "id3",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "𝒚𝒐𝒅𝒂 𝒕𝒂𝒌𝒂𝒉𝒂𝒔𝒉𝒊",
  description: "قم على الآيدي الخاص بك",
  commandCategory: "خدمات",
  usePrefix:false,
  cooldowns: 5
};

module.expo🤑rts.run = function({ api, event }) {
  if (Object.keys(event.mentions) == 0) return api.sendMessage(`ٍ     ༺ཌ༈ᏃᏫᎡᏫ ᏰᏫᎿ༈ད༻ \n\n𓍯𓂃𓆉\n★آيدي المستخدم★🍃\n${event.senderID}\n\n★رابط الفيسبوك★🍃\nwww.facebook.com/${event.senderID} \n\n★رابط الدردشة★🍃\nm.me/${event.senderID}\n\n
  ٍ     ༺ཌ༈𝒚𝒐𝒅𝒂 𝒕𝒂𝒌𝒂𝒉𝒂𝒔𝒉𝒊༈ད༻`, event.threadID, event.messageID);
  else {
    for (var i = 0; i < Object.keys(event.mentions).length; i++) api.sendMessage(`${Object.values(event.mentions)[i].replace('@', '')}: ${Object.keys(event.mentions)[i]}`, event.threadID);
    return;
  }
                                                                                                                                          }
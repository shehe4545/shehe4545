module.exports.config = {
  name: "اسم_فيس",
  version: "0.0.1",
  hasPermssion: 0,
  credits: "SEN",
  description: "đo độ bê đê",
  commandCategory: "𝕋𝔼𝕏𝕋",
  cooldowns: 5
};

module.exports.run = function({ api, event }) {
  const data = ["", "ఌ︎ఌ︎ఌ︎ఌ︎ఌ︎ఌ︎", "", "☘︎☘︎☘︎☘︎☘︎☘︎☘︎", "", " ", "シ︎シ︎シ︎シ︎", "〆 〆", "းမလးး းမလးး", "メ メ", "", "‏‎ミ罒 ェ 罒ミ‎", " ", "φποιτς ψΣξτε", "シシ シシ", "☁︎☁︎☁︎☁︎☁︎☁︎☁︎☁︎", "ဗီူ ဗီူ", "Յիդբ Ռֆւե", "ဆမမ တါ ဆမမ တါ", "シ シシ シ", "ਮਾਰੀਆ ਮੈਰੀ", "じづ づ ゞゞ", "தக ஓர", "んん いい", "コーラ ンの人", "❦︎❦︎❦︎❦︎❦︎❦︎❦︎❦︎❦︎❦︎❦︎", "ꨄ︎ꨄ︎ꨄ︎ꨄ︎ꨄ︎ꨄ︎ꨄ︎ꨄ︎ꨄ︎ꨄ︎ꨄ︎", "ఝటడ యీబదధౌ", "ဗီူ ဗီူ ဗီူ ဗီူ", "ット シリネ ット", "ʚʬɞ ʚʬɞ", "ლრლ ლრლ", "毛衣", "㋛︎㋛︎㋛︎㋛︎㋛︎㋛︎", "전나래국",
  ];
  return api.sendMessage(`${data[Math.floor(Math.random() * data.length)]}`, event.threadID, event.messageID);
}
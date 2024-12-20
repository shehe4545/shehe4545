module.exports.config = {
  name: "تخيل",
  version: "1.0.",
  hasPermssion: 0,
  credits: "𝒚𝒐𝒅𝒂 𝒕𝒂𝒌𝒂𝒉𝒂𝒔𝒉𝒊",
  description: "مدري",
  usePrefix: true,
  commandCategory: "صور",
  usages: "نص",
  cooldowns: 2,
};

module.exports.run = async ({api, event, args }) => {
const axios = require('axios');
const fs = require('fs-extra');
 let { threadID, messageID } = event;
  let query = args.join(" ");
  if (!query) return api.sendMessage("الامر ونص", threadID, messageID);
let path = __dirname + `/cache/pol4i.png`;

  const translationResponse = await axios.get(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=${encodeURIComponent(query)}`);
  const translation = translationResponse.data[0][0][0];
  
  const poli = (await axios.get(`https://image.pollinations.ai/prompt/${translation}`, {
    responseType: "arraybuffer",
  })).data;
  fs.writeFileSync(path, Buffer.from(poli, "utf-8"));
  api.sendMessage({
    body: "تفضل صورة🤍🤧شكرا لي استخدامك بوت سام🤧✨",
    attachment: fs.createReadStream(path) }, threadID, () => fs.unlinkSync(path), messageID);
};

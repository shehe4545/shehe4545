module.exports.config = {
  name: "ارسمي",
  version: "1.0.",
  hasPermssion: 0,
  credits: "scorpion",
  description: "رسم اي شيء تريده فقط اكتب اسمه بالانجليزية ",
  commandCategory: "صور",
  usages: "query",
  cooldowns: 2,
};
module.exports.run = async ({api, event, args }) => {
const axios = require('axios');
const fs = require('fs-extra');
 let { threadID, messageID } = event;
  let query = args.join(" ");
  if (!query) return api.sendMessage("ضع الاسم بلإنجليزي لكي يتم رسم الصورة بنجاح", threadID, messageID);
let path = __dirname + `/cache/poli.png`;
  const poli = (await axios.get(`https://image.pollinations.ai/prompt/${query}`, {
    responseType: "arraybuffer",
  })).data;
  fs.writeFileSync(path, Buffer.from(poli, "utf-8"));
  api.sendMessage({
    body: "تفضل، اتمنى ان تعجبك الرسمة",
    attachment: fs.createReadStream(path) }, threadID, () => fs.unlinkSync(path), messageID);
};
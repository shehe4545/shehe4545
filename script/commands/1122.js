const request = require("request");
const fs = require("fs")
const axios = require("axios");
module.exports.config = {
  name: "بوسه",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "𝒚𝒐𝒅𝒂 𝒕𝒂𝒌𝒂𝒉𝒂𝒔𝒉𝒊",
  description: "بوسه - سوي تاك",
  commandCategory: "صور",
  usages: "[تاك]",
  cooldowns: 60,
};
module.exports.run = async ({
  api,
  event,
  args,
  client,
  Users,
  Threads,
  __GLOBAL,
  Currencies
}) => {
  const request = require("request");
  const fs = require("fs");
  var mention = Object.keys(event.mentions)[0];
  let tag = event.mentions[mention].replace("@", "");
  var link = ["https://media.tenor.com/dJU8aKmPKAgAAAAC/anime-kiss.gif",
             "https://media.tenor.com/v4Ur0OCvaXcAAAAC/koi-to-uso-kiss.gif",
             "https://media.tenor.com/DKwQ5_B7OygAAAAM/kisses-love.gif",
             "https://thumbs.gfycat.com/PlasticCarefulBrahmanbull-size_restricted.gif",
             "https://media.tenor.com/dJU8aKmPKAgAAAAC/anime-kiss.gif",
             ];
  var callback = () =>
    api.sendMessage(
      {
        body: `${tag}, مححححححححح 💕`,
        mentions: [
          {
            tag: tag,
            id: Object.keys(event.mentions)[0]
          }
        ],
            attachment: fs.createReadStream(__dirname + "/cache/omngu.gif")ا
      },
      event.threadID,
      () => fs.unlinkSync(__dirname + "/cache/omngu.gif")
    );
  return request(encodeURI(link[Math.floor(Math.random() * link.length)]))
    .pipe(fs.createWriteStream(__dirname + "/cache/omngu.gif"))
    .on("close", () => callback());
};
module.exports.config = {
    name: "تقييد",
    version: "1.0",
    hasPermssion: 1,
    credits: "𝒚𝒐𝒅𝒂 𝒕𝒂𝒌𝒂𝒉𝒂𝒔𝒉𝒊",
    description: " ",
    commandCategory: "مسؤولي المجموعات",
    usages: "تقييد",
    cooldowns: 5,
    dependencies: {
        "fs-extra": ""
    }
};

module.exports.onLoad = function() {
    const { writeFileSync, existsSync } = require('fs-extra');
    const { resolve } = require("path");
    const path = resolve(__dirname, 'cache', 'data.json');
    if (!existsSync(path)) {
        const obj = {
            adminbox: {}
        };
        writeFileSync(path, JSON.stringify(obj, null, 4));
    } else {
        const data = require(path);
        if (!data.hasOwnProperty('adminbox')) data.adminbox = {};
        writeFileSync(path, JSON.stringify(data, null, 4));
    }
}
module.exports.run = async function ({ api, event, args }) {
const { threadID, messageID, mentions } = event;

        const { resolve } = require("path");
        const pathData = resolve(__dirname, 'cache', 'data.json');
        const database = require(pathData);
        const { adminbox } = database;   
        if (adminbox[threadID] == true) {
            adminbox[threadID] = false;
            api.sendMessage("» 🔱تم ايقاف تقييد استخدام البوت وسيتمكن اعضاء المجموعة من استخدام البوت🔱", threadID, messageID);
        } else {
            adminbox[threadID] = true;
            api.sendMessage("» 🔱تم بنجاح تقييد استخدام البوت ولن يتمكن الاعضاء من استخدام البوت🔱", threadID, messageID);
        }
}

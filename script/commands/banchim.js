const path = require("path");
const { mkdirSync, writeFileSync, existsSync, createReadStream, readdirSync } = require("fs-extra")
const axios = require("axios")

module.exports.config = {
    name: "صيد",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "benzo",
    description: "إطلاق النار على طائر",
    commandCategory: "𝔾𝔸𝕄𝔼𝕊",
    usages: "[]",
    cooldowns: 0
};


module.exports.onLoad = async () => {
    const dir = __dirname + `/banchim/datauser/`;
    const _dir = __dirname + `/banchim/datauser/`;
    const __dir = __dirname + `/banchim/cache/`;
    if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
    if (!existsSync(_dir)) mkdirSync(_dir, { recursive: true });
    if (!existsSync(__dir)) mkdirSync(__dir, { recursive: true });
    return;
}

module.exports.checkPath = function (type, senderID) {
    const pathGame = path.join(__dirname, 'banchim', 'datauser', `${senderID}.json`);
    const pathGame_1 = require("./banchim/datauser/" + senderID + '.json');
    if (type == 1) return pathGame
    if (type == 2) return pathGame_1
}

module.exports.image = async function(link) {
    var images = [];
    let download = (await axios.get(link, { responseType: "arraybuffer" } )).data; 
        writeFileSync( __dirname + `/banchim/cache/banchim.png`, Buffer.from(download, "utf-8"));
        images.push(createReadStream(__dirname + `/banchim/cache/banchim.png`));
    return images
}

module.exports.run = async function ({ api, event, args, client,Threads,__GLOBAL, Users, Currencies,getText }) {
   const { senderID, messageID, threadID } = event;
     const axios = require('axios');
    const request = require('request');
    const fs = require('fs-extra');
    const pathData = path.join(__dirname, 'banchim', 'datauser', `${senderID}.json`);
    switch (args[0]) {
        case 'تسجيل':
        case '-r': {
            const nDate = new Date().toLocaleString('vi-VN', {
                timeZone: 'Asia/Ho_Chi_Minh'
            });
            if (!existsSync(pathData)) {
                var obj = {};
                obj.name = (await Users.getData(senderID)).name;
                obj.ID = senderID;
                obj.shield = 3
                obj.coins = 20000
                obj.Island = {};
                obj.Island.level = 1
                obj.Island.coinsLV = 200
                obj.Island.data = {};
                obj.Island.data.tower = 0
                obj.Island.data.tree = 0
                obj.Island.data.pool = 0
                obj.Island.data.pet = 0
                obj.spin = 20
                obj.timeRegister = nDate
                writeFileSync(pathData, JSON.stringify(obj, null, 4));
                return api.sendMessage("⚔️ تم التسجيل بنجاح", threadID, messageID);
            } else return api.sendMessage("⚔️أنت موجود بالفعل في قاعدة البيانات⚔️", threadID, messageID);

        }
        case 'دورة': {
            if (!existsSync(pathData)) {
                return api.sendMessage({body: `لم تسجل اللعبة بعد!`, attachment: await this.image('https://c.tenor.com/4gs3TAnGH0sAAAAi/covid-covid19.gif')}, threadID, messageID);
            }
            if(this.checkPath(2, senderID).spin == 0) return api.sendMessage('لقد نفدت الهدايا لديك ، يرجى شراء المزيد أو الانتظار لمدة 10 دقائق ، سيمنحك النظام 5 أدوار', threadID, messageID);
            this.checkPath(2, senderID).spin = parseInt(this.checkPath(2, senderID).spin) - 1;
            writeFileSync(this.checkPath(1, senderID), JSON.stringify(this.checkPath(2, senderID), null, 4));
            var items = [`${this.checkPath(2, senderID).Island.level * 1000} coins`, `${this.checkPath(2, senderID).Island.level * 3000} coins`, `${this.checkPath(2, senderID).Island.level * 5000} عملة `, 'مشد', 'بندقية', ' ترقية الذخيرة', 'دورة واحدة ', 'دورتان ', '5 دورات '];
            var getItem = items[Math.floor(Math.random() * items.length)];
            var i = this.getSpin(items, getItem, senderID);
            api.sendMessage({body: `مبروك لقد حصلت على  : ${getItem}`, attachment: await this.image('https://c.tenor.com/4gs3TAnGH0sAAAAi/covid-covid19.gif')}, threadID, messageID);
            await new Promise(resolve => setTimeout(resolve, 1000));
            const data = readdirSync(__dirname + `/banchim/datauser`);
            if(i == 3) {
                if(data.length < 4) return api.sendMessage(`تحتاج على الأقل 3 لاعبين على الخادم`, threadID, messageID);
                const dem = [];
                for (let i of data) { 
                    if(i != `${senderID}.json`) {
                        dem.push(require(`./banchim/datauser/${i}`));
                    }
                }
                dem.sort((a, b) => a.coins + b.coins);
                var msg = `أعلى مبلغ: ${dem[0].coins / 2}\n`
                const randomIndex = dem.sort(function() { return .5 - Math.random() });
                for(var i = 0; i < 3; i ++) {
                    msg += `${i+1}. ${randomIndex[i].name} - مستوى في اللعبه   ${randomIndex[i].Island.level}\n`
                }
                msg += 'الرجاء الرد مع الخيار الذي تريد سرقته !!'
                return api.sendMessage(`==========\n${msg}`, threadID, (error, info) => {
                    global.client.handleReply.push({
                        name: this.config.name,
                        messageID: info.messageID,
                        author: event.senderID,
                        type: "steal",
                        dem,
                        randomIndex
                    })
                }, messageID);
            }
            else if(i == 5) {
                if(data.length < 4) return api.sendMessage(`مطلوب ما لا يقل عن 3 لاعبين على الخادم للعب`, threadID, messageID);
                var msgf = `[====هجوم====]\n`, number = 1, p = [];
                for (let i of data) { 
                    if(i != `${senderID}.json`) {
                        var o = require(`./banchim/datauser/${i}`);
                        p.push(o)
                        msgf += `${number++}. ${o.name} - Đảo level ${o.Island.level}\n`
                    }
                }
                return api.sendMessage(msgf, threadID, (error, info) => {
                    global.client.handleReply.push({
                        name: this.config.name,
                        messageID: info.messageID,
                        author: event.senderID,
                        type: "attack",
                        p
                    })
                }, messageID);
            }
            break;
        }
        case 'بناء': 
        case 'xaydung': {
            if (!existsSync(pathData)) {
                return api.sendMessage({body: "لم تقم بتسجيل اللعبة بعد!", attachment: await this.image('https://photo-cms-plo.zadn.vn/w559/Uploaded/2022/vrwqqxjwp/2015_01_31/12_ytwh.jpg')}, threadID, messageID);
            }
            var a = require(`./banchim/datauser/${senderID}.json`);
            return api.sendMessage(`ما هي المنطقة في القفص التي تريد بناءها؟!\n1. جسم القفص - ${a.Island.coinsLV * (a.Island.data.tower + 1)} $ (${a.Island.data.tower}/50)\n2. لأشجار الخضراء حول القفص لتجلس الطيور - ${a.Island.coinsLV * (a.Island.data.tree + 1)} $ (${a.Island.data.tree}/50)\n3.منطقة لعب الطيور - ${a.Island.coinsLV * (a.Island.data.pool + 1)} $ (${a.Island.data.pool}/50)\n4. منطقة طعام الطيور- ${a.Island.coinsLV * (a.Island.data.pet + 1)} $ (${a.Island.data.pet}/50)\n==============`, threadID, (error, info) => {
                global.client.handleReply.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    type: "بناء"
                })
            }, messageID);
        }
        case 'متجر': {
            if (!existsSync(pathData)) {
                return api.sendMessage({body: "عليك التسجيل باللعبة اولا!", attachment: await this.image('https://static.wikia.nocookie.net/gta/images/6/6b/WeaponRack-GTAV.jpg/revision/latest?cb=20180522025306&path-prefix=vi')}, threadID, messageID);
            }
     return api.sendMessage({body: `── [ متجر الاسحلة ] ──  \n\n🐸قائمة البنادق التي يمكنك شراؤها\n[🔫1]. A47K\n[🐉2]. M4A\n[🦋3].ASM10\n[🎀4]. LK24\n[🍁5]. Type 25\n[🛡6]. AK117\n[🧨7]. M16\n[🔪8]. BK57\n[🧬9]. ICR-1\n\n-قم بالرد على هذه الرسالة برقم السلاح`, attachment: await this.image('https://static.wikia.nocookie.net/gta/images/6/6b/WeaponRack-GTAV.jpg/revision/latest?cb=20180522025306&path-prefix=vi')}, threadID, (error, info) => {
                global.client.handleReply.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    type: "متجر"
                })
            }, messageID);
        }
        case 'المناطق': {
            if (!existsSync(pathData)) {
                return api.sendMessage({body: "لم تقم بتسجيل اللعبة بعد!", attachment: await this.image('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7Y3CRoSY_FkWBbPrXZ1a-siVa_KziUvDMIA&usqp=CAU')}, threadID, messageID);
            }
     return api.sendMessage({body: `── [ Banchim Attack ] ──  \n\n🦋قائمة مناطق صيد الطيور\n[1]. غابة الأمازون\n[2]. غابة أستوائية\n[3].منطقة التلال\n\n- قم بالرد على الرسالة برقم المنطقة للصيد`, attachment: await this.image('https://play-lh.googleusercontent.com/7qDDAqGG2LNkgzougZO5kRSu4CuqGTl0yvWE2jhQldbb_JWfIH9vcfwyHEHp9RG3ug=w412-h220-rw')}, threadID, (error, info) => {
                global.client.handleReply.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    type: "المناطق"
                })
            }, messageID);
        }
        case 'me':
        case 'معلوماتي': {
            if (!existsSync(pathData)) {
                return api.sendMessage({body: "لم تقم بتسجيل اللعبة بعد!", attachment: await this.image('https://scontent.fhan6-1.fna.fbcdn.net/v/t39.30808-6/275123529_5339827326061697_8913009583387379628_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=bMtSu2UNpAgAX-Vxlsg&_nc_ht=scontent.fhan6-1.fna&oh=00_AT8JX66T8yoIm8wAzBKBnN3lMfmQBiyODwr90c1BG5nRMA&oe=622AEB91')}, threadID, messageID);
            }
            var a = require(`./banchim/datauser/${senderID}.json`);
            return api.sendMessage(`===== صيد =====\n- أنت في مستوى القفص ${a.Island.level}\n- الدورات المتبقية: ${a.spin}\n- اموال اللعبة : ${a.coins}\n- معلومات الحظيرة:\n• قفص (${a.Island.data.tower}/50)\n•الأشجار لطيور جثم (${a.Island.data.tree}/50)\n•منطقة لعب الطيور الصغيرة (${a.Island.data.pool}/50)\n• منطقة طعام الطيور (${a.Island.data.pet}/50)`, threadID, messageID);
        }
        case 'توب': {
            if (!existsSync(pathData)) {
                return api.sendMessage({body: "لم تقم بالتسجيل !", attachment: await this.image('https://scontent.fhan6-1.fna.fbcdn.net/v/t39.30808-6/275123529_5339827326061697_8913009583387379628_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=bMtSu2UNpAgAX-Vxlsg&_nc_ht=scontent.fhan6-1.fna&oh=00_AT8JX66T8yoIm8wAzBKBnN3lMfmQBiyODwr90c1BG5nRMA&oe=622AEB91')}, threadID, messageID);
            }
            const data = readdirSync(__dirname + `/banchim/datauser`);
            if(data.length < 3) return api.sendMessage(`تحتاج على الأقل 3 لاعبين على الخادم لرؤية القمة
`, threadID, messageID);
            var p = []
            for (let i of data) { 
                var o = require(`./banchim/datauser/${i}`);
                p.push(o)
                msgf += `${number++}. ${o.name} - Đảo level ${o.Island.level}\n`
            }
            p.sort((a, b) => b.Island.level - a.Island.level);
            var msg = '===مستوى أعلى 3 أقفاص ===\n'
            for(var i = 0; i < 3; i++) {
                msg += `${i+1}. ${p[i].name} المستوى ${p[i].Island.level}\n`
            }
            return api.sendMessage(msg, threadID, messageID);
        }
        default: {
            return api.sendMessage({body: `===[ صيد الطيور ] === \n »تسجيل: تسجيل \n» دورة: دوران اللعبة \n »بناء: بناء قفص للطيور\n» متجر: تسوق لشراء أسلحة \n »المناطق : مناطق صيد الطيور المتاحة \n»معلوماتي: عرض معلومات عنك \n» توب: عرض المستوى الأعلى على الخادم \n »تحويل: تحويل أموال الروبوت إلى أموال اللعبة والعكس صحيح`, attachment: await this.image('https://thaotruong.com/wp-content/uploads/2019/02/ban-vit-1.jpg')}, threadID, messageID);
        }
    }
}
module.exports.handleReply = async ({ event, api, Currencies, handleReply, Users, getText}) => {

  const { body, threadID, messageID, senderID } = event;
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
    switch (handleReply.type) {
        case 'بناء': {
            var a = require(`./banchim/datauser/${senderID}.json`);
            var l = ['tower', 'tree', 'pool', 'pet']
            if(a.coins < a.Island.coinsLV * (a.Island.data[l[parseInt(body) - 1]] + 1)) return api.sendMessage(`ليس لديك ما يكفي من العملات المعدنية في اللعبة للبناء!`, threadID, messageID);
            a.coins = a.Island.coinsLV * (a.Island.data[l[parseInt(body) - 1]] + 1);
            await Currencies.decreaseMoney(senderID, a.Island.coinsLV * (a.Island.data[l[parseInt(body) - 1]] + 1));
            api.unsendMessage(handleReply.messageID)
            if(body == 1) {
                if(a.Island.data.tower == 50) return api.sendMessage('مستوى هذه المنطقة في أقصى حد له ، لذا لا يمكن بناؤها', threadID, messageID);
                a.Island.data.tower = a.Island.data.tower + 10;
                api.sendMessage(`بناء ناجح: ${a.Island.data.tower}/50`, threadID, messageID);
            }
            if(body == 2) {
                if(a.Island.data.tree == 50) return api.sendMessage('مستوى هذه المنطقة في أقصى حد له ، لذا لا يمكن بناؤها', threadID, messageID);
                a.Island.data.tree = a.Island.data.tree + 10;
                api.sendMessage(`تم الانتهاء من البناء: ${a.Island.data.tree}/50`, threadID, messageID);
            }
            if(body == 3) {
                if(a.Island.data.pool == 50) return api.sendMessage('مستوى هذه المنطقة في أقصى حد له ، لذا لا يمكن بناؤها', threadID, messageID);
                a.Island.data.pool = a.Island.data.pool + 10;
                api.sendMessage(`بناء ناجح: ${a.Island.data.pool}/50`, threadID, messageID);
            }
            if(body == 4) {
                if(a.Island.data.pet == 50) return api.sendMessage('مستوى هذه المنطقة في أقصى حد له ، لذا لا يمكن بناؤها', threadID, messageID);
                a.Island.data.pet = a.Island.data.pet + 10;
                api.sendMessage(`بناء ناجح: ${a.Island.data.pet}/50`, threadID, messageID);
            }
            if(a.Island.data.tower == 50 && a.Island.data.tree == 50 && a.Island.data.pool == 50 && a.Island.data.pet == 50) {
                await new Promise(resolve => setTimeout(resolve, 1000));
                api.sendMessage(`وصل بناء الحظيرة الخاص بك إلى الحد الأقصى!\n ستتم ترقيتك إلى المستوى المنخفض ${(a.Island.level) + 1}`, threadID, messageID);
                a.Island.level = a.Island.level + 1;
                a.Island.coinsLV = a.Island.coinsLV + 100;
                a.Island.data.tower = 0;
                a.Island.data.tree = 0;
                a.Island.data.pool = 0;
                a.Island.data.pet = 0;
            }
            return writeFileSync(this.checkPath(1, senderID), JSON.stringify(a, null, 4));
        }
        case 'متجر': {
            if(body == 1) {
                return api.sendMessage({body: `----> المتجر <---- \n[🔫]الاسم : A47K\n[🍁]معلومات : بندقية أوتوماتيكية ، أضرار عالية وارتداد.\n[🩸]قوة الدمج : 70\n[🛡]معدل إطلاق النار : 55 \n[🧨]دقة : 48 \n[🔪]المسافة: 66 \n[🧬] المرونة : 60`, attachment: await this.image('https://cdn.tgdd.vn/2020/04/content/a47k-800x447.png')}, threadID, messageID);
            }
            else if(body == 2) {
                return api.sendMessage({body: `----> المتجر <---- \n[🔫]الاسم : M4A
[🍁]معلومات : بندقية آلية متوسطة المدى بدقة عالية.
[🩸]الضرر  : 45
[🛡]معدل إطلاق النار : 60 
[🧨] دقة : 70 
[🔪]المسافة: 45 
[🧬] المرونة: 60`, attachment: await this.image('https://cdn.tgdd.vn/2020/04/content/m4A-800x447.png')}, threadID, messageID);
            }
            else if(body == 3) {

                return api.sendMessage({body: `----> المتجر <---- \n[🔫]الاسم : ASM10
[🍁]معلومت : بندقية أوتوماتيكية ، طلقات أحدية و ثلاثية عالية الدقة.
[🩸]الضرر : 60
[🛡]معدل اطلاق النار : 65 
[🧨] الدقة : 51 
[🔪]المسافة : 55 
[🧬] المرونة : 55`, attachment: await this.image('https://cdn.tgdd.vn/2020/04/content/ASM10-800x447.png')}, threadID, messageID);
             }
            else if(body == 4) {
                return api.sendMessage({body: `----> المتجر <---- \n[🔫]الاسم : LK24
[🍁]معلومات : بندقية آلية ، نسبة عالية من النيران. فعال عند التصوير من مسافة متوسطة.
[🩸]الضرر : 46
[🛡]معدل اطلاق النار  : 62 
[🧨] الدقة : 66 
[🔪]المسافة : 50 `, attachment: await this.image('https://cdn.tgdd.vn/2020/04/content/LK24-800x450.png')}, threadID, messageID);
            }
            else if(body == 5) {
                return api.sendMessage({body: `----> المتجر <---- \n[🔫]الاسم : Type 25
[🍁]معلومات : البندقية الأوتوماتيكية ، معدل إطلاق النار السريع والارتداد المتوسط.
[🩸]الضرر : 55
[🛡]معدل اطلاق النار : 70 
[🧨] الدقة : 44 
[🔪]المسافة : 35 
[🧬] المرونة : 60`, attachment: await this.image('https://cdn.tgdd.vn/2020/04/content/type25-800x447.png')}, threadID, messageID);
            }
            else if(body == 6) {
                return api.sendMessage({body: `----> المتجر <---- \n[🔫]الاسم : AK117
[🍁]معلومات : بندقية آلية ، نسبة عالية من النيران.
[🩸]الضرر : 60
[🛡]معدل اطلاق النار : 70 
[🧨] الدقة : 55 
[🔪]المسافة : 45 
[🧬] المرونة : 60`, attachment: await this.image('https://cdn.tgdd.vn/2020/04/content/AK117-800x450.png')}, threadID, messageID);
            }
            else if(body == 7) {
                return api.sendMessage({body: `----> المتجر <---- \n[🔫]الاسم : M16
[🍁]معلومات : بندقية نصف آلية مع القدرة على إطلاق رشقة من 3 جولات. فعال عند التصوير من مدى متوسط ​​إلى بعيد
.
[🩸]الضرر : 65
[🛡]معدل اطلاق النار : 45 
[🧨] الدقة : 60 
[🔪]المسافة: 60 
[🧬] المرونة: 60`, attachment: await this.image('https://cdn.tgdd.vn/2020/04/content/M16-800x450.png')}, threadID, messageID);
            }
            else if(body == 8) {
                return api.sendMessage({body: `----> المتجر <---- \n[🔫]الاسم  : BK57
[🍁]معلومات : يزيد من سرعة الحركة لفترة معينة من الوقت عند إعادة الظهور (ترقية مستوى البندقية 11).
[🩸]الضرر : 48
[🛡]معدل اطلاق النار : 63 
[🧨] الدقة : 65 
[🔪]المسافة : 50 
[🧬] المرونة : 60`, attachment: await this.image('"https://cdn.tgdd.vn/2020/04/content/BK57-800x450.png')}, threadID, messageID);
            }
            else if(body == 9) {
                return api.sendMessage({body: `----> المتجر  <---- \n[🔫]الاسم : ICR-1
[🍁]معلومات :  مدى إطلاق واسع للنار.
[🩸]الضرر : 45
[🛡]معدل اطلاق النار : 57 
[🧨] الدقة : 76 
[🔪]المسافة: 48 
[🧬] المرونة: 60`, attachment: await this.image('https://cdn.tgdd.vn/2020/04/content/ICR1-800x450.png')}, threadID, messageID);
            }
            else {
                return api.sendMessage('اختيار غير صحيح!', threadID, messageID);
            }
        }

         case 'تحويل': {
            if(body == 1) {
                return api.sendMessage('-يرجى الرد على هذه الرسالة بالمبلغ الذي تريد استبداله', threadID, (error, info) => {
                    global.client.handleReply.push({
                        name: this.config.name,
                        messageID: info.messageID,
                        author: event.senderID,
                        type: "للبوت"
                    })
                }, messageID);
            }
            else if(body == 2) {
                return api.sendMessage('-يرجى الرد على هذه الرسالة بالمبلغ الذي تريد استبداله', threadID, (error, info) => {
                    global.client.handleReply.push({
                        name: this.config.name,
                        messageID: info.messageID,
                        author: event.senderID,
                        type: "للعبة"
                    })
                }, messageID);
            }
            else if(body == 3) {
                return api.sendMessage(' -الرجاء الرد على هذه الرسالة بعدد الدورات التي تريد شراءها! (10 جولات = 2000 دولار)', threadID, (error, info) => {
                    global.client.handleReply.push({
                        name: this.config.name,
                        messageID: info.messageID,
                        author: event.senderID,
                        type: "دورة"
                    })
                }, messageID);
            }
            else {
                return api.sendMessage('اختيار غير صحيح!', threadID, messageID);
            }
        }
        case 'المناطق': {
            if(body == 1) {
  var coinbanchim = Math.floor(Math.random() * 80000) + 10000;
  var dohiem = Math.floor(Math.random() * 90) + 20;
                return api.sendMessage({body: `----> معلومات <---- \n[🐉] الموقع : غابة الأمازون.\n[🔫]لقد أطلقت النار على الطائر وربحت  ${coinbanchim} عملة \n[🍁]ندارة الطائر : ${dohiem}%`, attachment: await this.image('https://media3.giphy.com/media/Rs2iAnfEImXIs/giphy.gif?cid=ecf05e47lhtnv5vbbtysfuyatifr6qlvggh2osfg24cxgmz7&rid=giphy.gif&ct=g')}, threadID, messageID);
        }
            else if(body == 2) {
               var coinbanchim = Math.floor(Math.random() * 80000) + 10000;
  var dohiem = Math.floor(Math.random() * 90) + 20;
                return api.sendMessage({body: `----> معلومات <---- \n[🐉] الموقع : غابة أستوائية.\n[🔫]لقد أطلقت النار على الطائر وربحت ${coinbanchim} عملة\n[🍁] ندارة الطائر : ${dohiem}%`, attachment: await this.image('https://imgur.com/0HJ7KbS.gif')}, threadID, messageID);
        }
            else if(body == 3) {
   var coinbanchim = Math.floor(Math.random() * 80000) + 10000;
  var dohiem = Math.floor(Math.random() * 90) + 20;
                return api.sendMessage({body: `----> خدمات <---- \n[🐉] الموقع : منطقة التلال.\n[🔫]لقد أطلقت النار على الطائر وربحت  ${coinbanchim} عملة \n[🍁] ندارة الطائر : ${dohiem}%`, attachment: await this.image('https://media3.giphy.com/media/Rs2iAnfEImXIs/giphy.gif?cid=ecf05e47lhtnv5vbbtysfuyatifr6qlvggh2osfg24cxgmz7&rid=giphy.gif&ct=g')}, threadID, messageID);
            }
        }        
        case 'دورة': {
            await checkMoney(senderID, parseInt(body));
            api.unsendMessage(handleReply.messageID)
            await Currencies.decreaseMoney(senderID, parseInt(body));
            a.spin = a.spin + parseInt(body)
            writeFileSync(this.checkPath(1, senderID), JSON.stringify(a, null, 4));
            return api.sendMessage(`تم الشراء بنجاح ${body} تحويل (${parseInt(body) * 200}$`, threadID, messageID);
        }
        case 'للعبة': {
            var a = require(`./banchim/datauser/${senderID}.json`);
            await checkMoney(senderID, parseInt(body));
            api.unsendMessage(handleReply.messageID)
            await Currencies.decreaseMoney(senderID, parseInt(body));
            a.coins = a.coins + parseInt(body)
            writeFileSync(this.checkPath(1, senderID), JSON.stringify(a, null, 4));
            return api.sendMessage(`تم التحويل بنجاح ${body} العملات المعدنية في اللعبة!`, threadID, messageID);
        }
        case 'للبوت': {
            var a = require(`./banchim/datauser/${senderID}.json`);
            if(a.coins < parseInt(body)) return api.sendMessage('ليس لديك ما يكفي من المال لإجراء هذه الصفقة!', threadID, messageID);
            api.unsendMessage(handleReply.messageID)
            await Currencies.increaseMoney(senderID, parseInt(body));
            a.coins = a.coins - parseInt(body)
            writeFileSync(this.checkPath(1, senderID), JSON.stringify(a, null, 4));
            return api.sendMessage(` ناجح , تم تحويل ${body} عملات معدنية لحساب بوت !`, threadID, messageID);
        }
    }
    async function checkMoney(senderID, maxMoney) {
        var i, w;
        i = (await Currencies.getData(senderID)) || {};
        w = i.money || 0
        if (w < parseInt(maxMoney)) return api.sendMessage('ليس لديك ما يكفي من المال لإجراء هذه الصفقة!', threadID, messageID);
    }
}
module.exports.getSpin = function (items, getItem, senderID) {
    const path = this.checkPath(1, senderID)
    var pathData = this.checkPath(2, senderID)
    var i = items.findIndex(index => index == getItem);
    if(i == 0) pathData.coins = parseInt(pathData.coins) + pathData.Island.level * 1000
    if(i == 1) pathData.coins = parseInt(pathData.coins) + pathData.Island.level * 3000
    if(i == 2) pathData.coins = parseInt(pathData.coins) + pathData.Island.level * 5000
    if(i == 4) {
        if(pathData.shield != 3) {
            pathData.spin = parseInt(pathData.spin) + 1
            pathData.shield = parseInt(pathData.shield) + 1;
        }
    }
    if(i == 6) pathData.spin = parseInt(pathData.spin) + 1
    if(i == 7) pathData.spin = parseInt(pathData.spin) + 2
    if(i == 8) pathData.spin = parseInt(pathData.spin) + 5
    writeFileSync(path, JSON.stringify(pathData, null, 4));
    return i
}

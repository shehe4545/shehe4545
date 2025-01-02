module.exports.config = {
    name: "عمل",
    version: "1.0.2",
    hasPermssion: 0,
    credits: "⚡D-Jukie", 
    description: "تشتغل وتحصل فلوس",
    commandCategory: "𝔹𝔸ℕ𝕂",
    cooldowns: 5,
    envConfig: {
        cooldownTime: 12000000
    }
};
module.exports.languages = {
    "vi": {
        "cooldown": "⚡️Bạn đã làm việc rồi, quay lại sau: %1 phút %2 giây."      
    },
    "en": {
        "cooldown": "⚡️انت اليوم اشتغلت , حتى ما تتعب لين اخاف عليك   تعال بعد : %1 دقيقة و %2 ثانية."
    }
}
module.exports.handleReply = async ({ event, api, handleReply, Currencies, getText }) => {
    const { threadID, messageID, senderID } = event;
    let data = (await Currencies.getData(senderID)).data || {};
//random coins nhận được khi làm việc ít nhất 200
var coinscn = Math.floor(Math.random() * 100000) + 100000; //random coins khi làm ở khu công nghiệp
var coinsdv = Math.floor(Math.random() * 80100) + 100000; //random coins khi làm ở khu dịch vụ
var coinsmd = Math.floor(Math.random() * 40100) + 50000; //random coins khi làm ở mỏ dầu
var coinsq = Math.floor(Math.random() * 60100) + 50000; //random coins khi khai thác quặng
var coinsdd = Math.floor(Math.random() * 20100) + 50000; //random coins khi đào đá
var coinsdd1 = Math.floor(Math.random() * 200) + 600; //random coins khi đào đá
var coinsdd2 = Math.floor(Math.random() * 20) + 400; //random coins 

//random công việc cần làm
var rdcn = [' تعيين الموظفين ',' مدير الفندق ',' في محطة توليد الكهرباء ','طاه مطعم ','عامل ']; //random công việc khi làm ở khu công nghiệp
var work1 = rdcn[Math.floor(Math.random() * rdcn.length)];   

var rddv = ['إصلاح السبائك','إصلاح مكيف الهواء في الحي','المبيعات متعددة المستويات','توزيع النشرات الإعلانية','نصاب ','إصلاح الكمبيوتر','الدليل السياحي','ممرض']; //random công việc khi làm ở khu dịch vụ
var work2 = rddv[Math.floor(Math.random() * rddv.length)]; 

var rdmd = ['سرقت وبيع 13 برميلًا من النفط','بعت 8 براميل نفط','بعت 9 براميل من النفط','سرقت وبيع 8 براميل من النفط','سرقت الزيت',' قمت بمزج الماء والبنزين وبيعه ']; //random công việc khi làm ở mỏ dầu
var work3 = rdmd[Math.floor(Math.random() * rdmd.length)]; 

var rdq = ['خام الحديد','خام الذهب','خام الفحم','خام الرصاص','خام النحاس','خام النفط']; //random công việc khi khai thác quặng
var work4 = rdq[Math.floor(Math.random() * rdq.length)]; 

var rddd = ['الماس','الذهب','الفحم','الزمرد','الحديد','الحجر العادي','كسول','بلوستون']; //random công việc khi đào đá
var work5 = rddd[Math.floor(Math.random() * rddd.length)]; 

var rddd1 = ['شخص مميز','مستفيد','غريب','شخص عمره 23 عامًا و أحمق','غريب','راعي','رجل  يبلغ من العمر 92 عاما ','صبي عمره 21 عامًا','شرطي','شخص سكير','رجل اعمال','رجل دولة','رجل سياسي']; //random công việc khi đào đá
var work6 = rddd1[Math.floor(Math.random() * rddd1.length)];
  
var rddd2 = ['شخص مميز','مستفيد','غريب','شخص عمره 23 عامًا و أحمق','غريب','راعي','رجل  يبلغ من العمر 92 عاما ','رجل عمره 22 عام رجل متعب','شرطي','رجل عجوز','رجل اعمال','رجل دولة','رجل سياسي']; //random công việc khi đào đá
var work7 = rddd2[Math.floor(Math.random() * rddd2.length)];


var msg = "";
    switch(handleReply.type) {
        case "choosee": {
            
            switch(event.body) {
                case "1": msg = `⚡️ لقد عملت في مجال ${work1} بشكل يومي وكسبت ${coinscn}$` ; Currencies.increaseMoney(event.senderID, coinscn); break;             
                case "2": msg = `⚡️لقد عملت بالمهن اليومية في ${work2} وربحت ${coinsdv}$`; Currencies.increaseMoney(event.senderID, coinsdv); break;
                case "3": msg = `⚡️لقد  ${work3} وربحت ${coinsmd}$`; Currencies.increaseMoney(event.senderID, coinsmd); break;
                case "4": msg = `⚡️لقد قمت بنعدين ${work4} وقمت ببيعه وربحت ${coinsq}$`; Currencies.increaseMoney(event.senderID, coinsq); break;
                case "5": msg = `⚡️انت بعت ${work5} وربحت ${coinsdd}$` ; Currencies.increaseMoney(event.senderID, coinsdd); break;
                case "6": msg = `⚡️ ${work6} يعرض عليك ${coinsdd1}$قص ورد`; Currencies.increaseMoney(event.senderID, coinsdd1); break;
                case "7": msg = `⚡️ ${work7} يعرض عليك ${coinsdd2}$ مقابل جز العشب الخاص بمزرعته وأنت توافق وتأخذ المال `; Currencies.increaseMoney(event.senderID, coinsdd2); break; //thêm case nếu muốn 
                default: break;
            };
            const choose = parseInt(event.body);
            if (isNaN(event.body)) return api.sendMessage("⚡️ الرجاء إدخال رقم", event.threadID, event.messageID);
            if (choose > 7 || choose < 1) return api.sendMessage("⚡️الرقم ليس في القائمة.", event.threadID, event.messageID); //thay số case vào số 7
            api.unsendMessage(handleReply.messageID);
            if (msg == "⚡️Chưa update...") {
                msg = "⚡️التحديث قريبا...";
            };
            return api.sendMessage(`${msg}`, threadID, async () => {
            data.work2Time = Date.now();
            await Currencies.setData(senderID, { data });
            
        });

    };
}
}
module.exports.run = async ({  event, api, handleReply, Currencies, getText }) => {
    const { threadID, messageID, senderID } = event;
    const cooldown = global.configModule[this.config.name].cooldownTime;
    let data = (await Currencies.getData(senderID)).data || {};
    //cooldownTime cho mỗi lần nhận 
    if (typeof data !== "undefined" && cooldown - (Date.now() - data.work2Time) > 0) {

        var time = cooldown - (Date.now() - data.work2Time),
            minutes = Math.floor(time / 600000),
            seconds = ((time % 600000) / 10000).toFixed(0); 
        return api.sendMessage(getText("cooldown", minutes, (seconds < 10 ? "0" + seconds : seconds)), event.threadID, event.messageID);
    }
    else {    
    return api.sendMessage(" " +
                "\n\n1. المجمع الصناعي 🏗️." +
                "\n2. منطقة الخدمة 🏘️." +
                "\n3. حقل نفط 🏭." +
                "\n4.  خام التعدين." +
                "\n5. حفر الصخور ⛰️" +
                "\n6. في حديقة🍂" +
                "\n7. جز العشب 🌳" +
                "\n\n⚡️ رد على الرسالة واختار برقم" //thêm hiển thị case tại đây ||  \n[number]. [Ngành nghề]" +
            , event.threadID, (error, info) => {
                data.work2Time = Date.now();
        global.client.handleReply.push({
            type: "choosee",
            name: this.config.name,
            author: event.senderID,
            messageID: info.messageID
          })  
        })
    }
}

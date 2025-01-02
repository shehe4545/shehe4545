    module.exports.config = {
    name: "هديه",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Horizon Lucius Synthesis I",
    description: "",
    commandCategory: "𝔹𝔸ℕ𝕂",
    usages: "",
    cooldowns: 5
    };
    var array = [];
    module.exports.run = async function ({ api,event,Users,Currencies,args }) {
    var x = global.data.allCurrenciesID;var out = (msg) => api.sendMessage(msg,event.threadID,event.messageID);
        let ix = ["50000","10000","10500","16000","10000","10000","10000","10000","14000","15081","19080","99010","10609","6009","6009","60099","400231","540082","100581","100510","50040"];
            let rxx = ix[Math.floor(Math.random() * ix.length)]; 
                let rxxi = global.data.allThreadID;var xs = false;
                    var mention = Object.keys(event.mentions);
                    switch (args[0]) {
                        case 'all': {
                            if (xs == true) return out("Red envelopes");
                            for (let ex of x) {
                                await Currencies.increaseMoney(ex, parseInt(rxx));
                                    array.push(ex);
                            }
                            for (let exs of rxxi) {
                                api.sendMessage(``,exs,(error,info) => {
                                    if (error) return;
                                });
                            }
                                xs = true;
                            return api.sendMessage("تم !",event.threadID);
                        }
                            break;
                        case "user": {
                            if (xs == true) return out("مغلفات حمراء");if(array.includes(args[1])) return out("  !");array.push(args[1]);
                            if (isNaN(args[1])) return api.sendMessage("الرجاء إدخال معرف المستخدم !",event.threadID,event.messageID);
                                await Currencies.increaseMoney(parseInt(args[1]), parseInt(rxx));
                                    out("تم الاسترداد بنجاح !");
                                        return api.sendMessage(" ،  حصلت ع فلوس هدية =) ، المبلغ الذي تلقيته هو : " +  rxx,parseInt(args[1]));
                        }
                            break;
                        case "thread": {
                            if (isNaN(args[1])) return api.sendMessage("الرجاء إدخال معرف المجموعة !",event.threadID,event.messageID);
                                var xl = await api.getThreadInfo(args[1]);
                                    var sll = xl.participantIDs;var outlix = [];
                                        for (let cham of sll) {
                                                if(array.includes(cham)) return outlix.push(cham);
                                            await Currencies.increaseMoney(cham, parseInt(rxx)); 
                                        }
                                    out("نجاح! ، عدد الأشخاص الذين لم يحالفهم الحظ للمرة الثانية هو : " + outlix.join(", "));
                                return api.sendMessage(" =))",parseInt(args[1]));
                        }   
                            break;  
                        case  `${mention[0]}`: {    
                            if (isNaN(mention[0])) return out("حدث خطاء =))");array.push(mention[0]);
                            if(array.includes(mention[0])) return out("انت حصلت فلوس بعد ماكو عزلمه !");
                                else await Currencies.increaseMoney(mention[0], parseInt(rxx)); 
                                    return out ("UwU " + event.mentions[mention].replace("@", "") + "حصلت ع فلوس الهدية  🐧, الملبغ هوة :  " + rxx);
                        }
                    break;
                default: {
                        if(array.includes(event.senderID)) return out("انت محصل ع الفلوس بعد ماكو  !");array.push(event.senderID);
                    await Currencies.increaseMoney(event.senderID, parseInt(rxx)); 
                return out("====[ Success ]====\nمبروك حصلت ع فلوس الحظ , والمبلغ هوة  : " + rxx);
            }
        }
    };

const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "ردود_سياف",
  version: "1.7.3",
  hasPermssion: 0,
  credits: "𝒚𝒐𝒅𝒂 𝒕𝒂𝒌𝒂𝒉𝒂𝒔𝒉𝒊",
  description: "لا تتدخل في مالايعنيك يافتى",
  commandCategory: "المطور",
  usages: "سانتوريو باكا",
  usePrefix:false,
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Africa/Casablanca").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["انا لحين نايمة انقلع من امامي","ماذا هناك😑""أتعلم ان لوفي لديه القدرة ليلتهم المجموعة كلها هاهاها","هوي هوي ماذا تريد يا أيها الفتى اللعين","هل هذاا الشخص اللعين لا يصمت اوجع رأسي بنباحه","هل تريد ان تهلك قبل موعدك","حسنا فقط توقف عن النباح هاهاها ماذا هناك"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "احبك") || (event.body.toLowerCase() == "أحبك")) {
     return api.sendMessage("سأترك الحب لسانجي وأحتفظ بقوتي", threadID);
   };

    if ((event.body.toLowerCase() == "شكرا") || (event.body.toLowerCase() ==  "هه")) {
     return api.sendMessage("انقلع من أمامي ياحشره", threadID);
   };

    if ((event.body.toLowerCase() == "فخامة") || (event.body.toLowerCase() == "فخامه")) {
     return api.sendMessage("بالطبع هذا المتوقع من ملك الجحيم رورونوا زورو", threadID);
   };

   if ((event.body.toLowerCase() == "صباح الخير") || (event.body.toLowerCase() == "صباح")) {
     return api.sendMessage("أوهايو يا ايها لعين", threadID);
   };

   if ((event.body.toLowerCase() == "كيفكم") || (event.body.toLowerCase() == "كيفك")) {
     return api.sendMessage("بأسوء الأحوال", threadID);
   };

   if ((event.body.toLowerCase() == "اتفق") || (event.body.toLowerCase() == "أتفق")) {
     return api.sendMessage("اياً كان ما تتحدثون عنه لكنني لا اتفق معك يا جرذ", threadID);
   };

  if ((event.body.toLowerCase() == "نامو") || (event.body.toLowerCase() == "اصنام")) {
     return api.sendMessage("قد ذهبو لمطابخهم مع ذو الحواجب الملتويه", threadID);
   };

   if ((event.body.toLowerCase() == "مرحبا") || (event.body.toLowerCase() == "جيت")) {
     return api.sendMessag("تبا عد من حيث جئت احسن ما افشخك  سَــانْــتُــورْيُــو ⚔️ اَلــهَــلاَك  ", threadID);
   };

   if ((event.body.toLowerCase() == "هلو") || (event.body.toLowerCase() == "هلا")) {
     return api.sendMessage("اتيت يا أيها اللعين", threadID);
   };

   if ((event.body.toLowerCase() == "باكا") || (event.body.toLowerCase() == "بوت غبي")) {
     return api.sendMessage("يا شباب هل يمكنكم ايقاف هذا الكلب عن النباح قد صم أذناي", threadID);
   };

   if ((event.body.toLowerCase() == "جميل") || (event.body.toLowerCase() == "حلو")) {
     return api.sendMessage("يا أيها النذل أنا هو الاقوى اترك الجمال ورقي للفتيات لأمثال سانجي", threadID);
   };

   if ((event.body.toLowerCase() == "مح") || (event.body.toLowerCase() == "بحبك")) {
     return api.sendMessage("محاايي", threadID);
   };


   if ((event.body.toLowerCase() == ".زوجني") || (event.body.toLowerCase() == "زوجني")) {
     return api.sendMessage("️يال كرامتك المنخفضه انقلع قبل أن اقطعك" , threadID);
   };

   if ((event.body.toLowerCase() == "كيف الحال") || (event.body.toLowerCase() == "كيف حالك ")) {
     return api.sendMessage("بخير يا أيها اللعين", threadID);
   };

   if ((event.body.toLowerCase() == "الحمدلله") || (event.body.toLowerCase() == "تمام وانت")) {
     return api.sendMessage("ليس لدي وقت لك هل رأيت شخصاً أحمق ذو حواجب ملتويه أسمه سانجي اللعين", threadID);
   };

   if ((event.body.toLowerCase() == "سانجي") || (event.body.toLowerCase() == "فينسموك سانجي")) {
     return api.sendMessage("️طباخ لعين'", threadID);
   };

   if ((event.body.toLowerCase() == "زورو ضايع") || (event.body.toLowerCase() ==  "لقد ضعت")) {
     return api.sendMessage("️هوي انا ضايع اكثر منك هل رايت طريق لعالم ون بيس اظنني امام تنين يشبه كايدو يقول لي تمنى أمنيات", threadID);
   };

   if ((event.body.toLowerCase() == "السلام عليكم") || (event.body.toLowerCase() == "سلام")) {
     return api.sendMessage("️وعليكم السلام منذ متى وانت تسلم على الناس يا باكا", threadID);
   };

   if ((event.body.toLowerCase() == "وداعا") || (event.body.toLowerCase() == "أنا ذاهب")) {
     return api.sendMessage("️أخبار رائعة لا تعد مجدداً", threadID);
   };

   if ((event.body.toLowerCase() == "من أنت") || (event.body.toLowerCase() == "مين انت")) {
     return api.sendMessage("️انا رورونوا زورو ملك الجحيم النائب الأول للوفي ملك القراصنة المستقبلي سأصبح أعظم سياف يوماً ما والعالم سيشهد على هذا", threadID);
   };

   if ((event.body.toLowerCase() == "بوت احمق") || (event.body.toLowerCase() == "بوت غبي")) {
     return api.sendMessage("️من أدخل هذه الحيوانات إلى هنا إن لم يصمت سوف أقطعه وأعطيه لحماً للوفي", threadID);
   };

   if ((event.body.toLowerCase() == "يودا") || (event.body.toLowerCase() == "شريان")) {
     return api.sendMessage("️عمك يتمرن حالياً أتركه وشأنه يا أيها اللعين هل تفكر بـ أن الجميع مثلك احمق مثلك إن ناديته مجددا لا تلمني ان أرسلتك للجحيم", threadID);
   };

   if ((event.body.toLowerCase() == "المالك") || (event.body.toLowerCase() == "المطور")) {
     return api.sendMessage("️اتقصد صديقي يودا من افضل المبرمجين ومن افضل المقاتلين لكن انا الأقوى طبعاً", threadID);
   };

   if ((event.body.toLowerCase() == "مساء الخير") || (event.body.toLowerCase() == "مساء الخير")) {
     return api.sendMessage(" هوي هوي كيف الحال️", threadID);
   };

   if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == "🙂")) {
     return api.sendMessage("وجه الزفت انقلع من امامي", threadID);
   };

   if ((event.body.toLowerCase() == "جوعان") || (event.body.toLowerCase() == "عطشان")) {
     return api.sendMessage("هوي هل لديك بعض الساكي يا فتى", threadID);
   };

   if ((event.body.toLowerCase() == "بوت") || (event.body.toLowerCase() == "وينك")) {
     return api.sendMessage("انا هنا إستعد لقطع كل عضمة في جسدك اللعين قَــاطِــعُ ⚔️ اُلْــغُــول", threadID);
   };

   if ((event.body.toLowerCase() =="مع السلامه") || (event.body.toLowerCase() == "بدي انام")) {
     return api.sendMessage("وداعا يا فتى أتمنى لك أحلاماً سيئه", threadID);
   };

   if ((event.body.toLowerCase() == "تصبحون على خير") || (event.body.toLowerCase() == "تصبح على خير")) {
     return api.sendMessage("إذهب للنوم أحلام جحيم سعيده لك", threadID);
   };

   if ((event.body.toLowerCase() == "الساكي") || (event.body.toLowerCase() == "ساكي")) {
     return api.sendMessage("هوي يافتى هل لديك البعض منه لنشربه ونرتاح قليلاً", threadID);
   };

   if ((event.body.toLowerCase() == "ياحب") || (event.body.toLowerCase() == "حبيبي")) {
     return api.sendMessage("احب سيوفي وكوني الافضل والقوى دائما", threadID);
   };

   if ((event.body.toLowerCase() == "سنجل") || (event.body.toLowerCase() == "وحيد")) {
     return api.sendMessage("ثق بنفسك وضع كبريائك أولاً وكرامتك إسعى نحو هدفك لا تقل أني سقطتت وخسرت بل ثق بنفسك و يجب ان تنهض بشكل أقوى نحو هدفك فالعالم لن يبقي به ضعفاء", threadID);
   };

   if ((event.body.toLowerCase() == "راح البوت") || (event.body.toLowerCase() == "وين راح")) {
     return api.sendMessage("وهل أنا الذي هنا شبح يا حشره", threadID);
   };

   if ((event.body.toLowerCase() == "كم عمرك ") || (event.body.toLowerCase() == "كم عمرك ")) {
     return api.sendMessage("لا شأن لك بعمري", threadID);
   };

  if (event.body.indexOf("زورو") == 0 || (event.body.indexOf("رورونوا") == 0)) {
    var msg = {
      body: `${name}, ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
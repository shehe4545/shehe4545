module.exports.config = {
  name: "معلوماتي",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "𝒚𝒐𝒅𝒂 𝒕𝒂𝒌𝒂𝒉𝒂𝒔𝒉𝒊",
  description: "أحصل على معلومات حول المستخدم.",
  usePrefix:true,
  commandCategory: "خدمات",
  cooldowns: 5
};

module.exports.run = async function ({ api, event, args }) {
  let { threadID, senderID, messageID } = event;

  const getUserInfo = async (targetID) => {
    try {
      const threadInfo = await api.getThreadInfo(threadID);
      const userInfo = await api.getUserInfo(targetID);

      const userName = userInfo[targetID].name || "هذا الإسم غير متاح";
      const uid = targetID;
      const gender = userInfo[targetID].gender || "هذا الجنس غير متاح";
      const birthday = userInfo[targetID].birthday || "تاريخ الإزدياد غير متاح";

      // Construct Facebook profile link
      const fbLink = `https://www.facebook.com/profile.php?id=${uid}`;

      // Get profile picture URL
      const profilePicURL = userInfo[targetID].profileUrl || "";

      // Get user status (online, offline, idle)
      const userStatus = userInfo[targetID].isOnline ? "متصل 🟢" : "غير متصل 🔴";

      // Check friendship status (friends or not)
      const areFriends = userInfo[targetID].isFriend ? "نعم ✅" : "لا ❌";

      // Additional social media links (if available)
      const socialMediaLinks = userInfo[targetID].socialMediaLinks || "لا يوجد روابط للتطبيقات التواصل الإجتماعي ";

      const userInfoMessage = `
🌟 معلومات حول المستخدم 🌟

📝 الإسم: ${userName}
🆔 آيدي: ${uid}
👤 النوع: ${gender}
🎂 تاريخ الإزدياد: ${birthday}
📊 الحالة: ${userStatus}
🤝 أصدقاء: ${areFriends}
🌐 رابط الفيسبوك: ${fbLink}

🖼️ صورة البروفايل: ${profilePicURL}

🔗 روابط أخرى للتواصل الإجتماعي:
${socialMediaLinks}
      `;

      api.sendMessage(userInfoMessage, threadID, (error, info) => {
        if (!error) {
          api.sendTypingIndicator(threadID);

          // Add a delay to simulate typing
          setTimeout(() => {
            // Add emoji reactions to the message
            api.react("❤️", info.messageID);
            api.react("😊", info.messageID);
            api.react("👍", info.messageID);
          }, 1000);
        }
      });
    } catch (error) {
      console.error(error);
      api.sendMessage("حدث خطأ عند الحصول على المعلومات .", threadID, messageID);
    }
  };

  if (!args[0]) {
    // If no UID is provided, use the sender's UID
    getUserInfo(senderID);
  } else if (args[0].indexOf("@") !== -1) {
    // If the message mentions a user, extract UID from mentions
    const mentionedUID = Object.keys(event.mentions)[0];
    if (mentionedUID) {
      getUserInfo(mentionedUID);
    }
  } else {
    api.sendMessage("إستخدام غير صالح. إستخدم `معلومات-حوب-المستخدم` أو `معلومات-حول-المستخدم @منشن`.", threadID, messageID);
  }
};
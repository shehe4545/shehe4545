  exports.config = {
  name: 'جودة',
  version: '0.0.1',
  hasPermssion: 0,
  credits: 'scorpion',
  description: 'يعدل جودة صورة ل 4k',
  commandCategory: 'صور',
  usages: '[image]',
  cooldowns: 3
};
let eta = 3;
exports.run = async o=> {
  let send = msg => o.api.sendMessage(msg, o.event.threadID, o.event.messageID);

  if (o.event.type != 'message_reply')return send(`رجاءا قم بالرد على الصورة التي تريد رفع جودتها!
`);
  send(`جاري تحسين جودة الصورة ${o.event.messageReply.attachments.length} انتظر (${o.event.messageReply.attachments.length*eta}ثواني)`);

  let stream = [];
  let exec_time = 0;
  for (let i of o.event.messageReply.attachments)try {
    let res = await require('axios').get(encodeURI(`https://nams.live/upscale.png?{"image":"${i.url}","model":"4x-UltraSharp"}`), {
      responseType: 'stream',
    });

    exec_time+=+res.headers.exec_time;
    eta = res.headers.exec_time/1000<<0;
    res.data.path = 'tmp.png';
    stream.push(res.data);
  } catch (e) {};

  send({
    body: `تفضل، تم رفع جودتها بنجاح (${exec_time/1000<<0}s)`,
    attachment: stream,
  });
};

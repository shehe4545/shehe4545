 module.exports.config = {
  name: "قرآن",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "HungCho",
  description: "أيات قرأنية",
  commandCategory: "ℚ𝕌ℝ𝔸ℕ 𝕂𝔸ℝ𝕀𝕄",
  usages: " ",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://audio.jukehost.co.uk/Rv4gPOzornuPEGv5XIJWNm56CWG3fnSp",
    "https://audio.jukehost.co.uk/e5st7AgyjXleDzPUwBvRt70GNaKpQwNV",
    "https://audio.jukehost.co.uk/ngWtCumV4MTVPBLyk14O9ev2ZxT0sEzr",
    "https://audio.jukehost.co.uk/jnnKiNtQLdsRiorMbHGgm0dLWy64YYx4",
    "https://audio.jukehost.co.uk/eCdZZh7PUHqi6mCI0l3LAoznfKkX4yeb",
    "https://audio.jukehost.co.uk/6t60PWxEa6WaT9QLRFrg0UTwtLYTFHkU",
    "https://audio.jukehost.co.uk/gldIjl98nL1HNgSyztqjEvA5vhaUttb3",
    "https://audio.jukehost.co.uk/Gdrk7gCl7CpDXZ41GaPAxJtguDUElfCU",
    "https://audio.jukehost.co.uk/KWa6s4YLClDCv20tsdQFtMqB3UXMO4tJ",
    "https://audio.jukehost.co.uk/nct5hsU0xjHNTUZDEvDTaoH8QhD0AMFa",
    "https://audio.jukehost.co.uk/QWYnnIcJ3OEz3FcB5sGKesNEtpm3ye61",
    "https://audio.jukehost.co.uk/Rv4gPOzornuPEGv5XIJWNm56CWG3fnSp",
    "https://audio.jukehost.co.uk/BNyXe9xeXm7eXcRkzQkki408Nia0qcGF",
    "https://audio.jukehost.co.uk/wNZcxyQFHUGfh86GpwbY3r6SHvCkdwfO",
    "https://audio.jukehost.co.uk/A38nNEQAeCbTuIYIToBI9poggCVyIv2G",
    "https://audio.jukehost.co.uk/oQ7YX2iWNaCLrPvFIIvWyD3ZvC0gEGIg",
    "https://audio.jukehost.co.uk/bLqmHpnLswF9xKUglJALaeOD8EhNywEe",
    "https://audio.jukehost.co.uk/qvMhsEB4Vc3RIyfdwbgGTn0q5ij6OO8f",
    "https://audio.jukehost.co.uk/hZ8YNEzUMWxQpWuNg5Es68aYlN9bvkYf",
    "https://audio.jukehost.co.uk/qbE2d68bPVWZ48qSJp1ieCBFhSDgauXz",
    "https://audio.jukehost.co.uk/bbhiehfZzMyx7msYQxsVoUznHXUskjNF",
    "https://audio.jukehost.co.uk/M1g2130L7Pe2Tx7eoCzG8MpxqdxT2L78",
    "https://audio.jukehost.co.uk/ucToAA7bEPaHoZIlckOnHmBZmNUTpZCh",
    "https://audio.jukehost.co.uk/KIqlgdinCb9J6uZzOP7hLGsjYlxi7hg8",
    "https://audio.jukehost.co.uk/Pif1PGNAqBWgClf67N2r4zD5Llij2SrV",
  ];
	 var max = Math.floor(Math.random() * 6);  
var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 100) api.sendMessage(" - يجب أن يكون لديك على الاقل 100 دولار للأستماع للأيات القرأنية ! ",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 100})
   var callback = () => api.sendMessage({body:` `,attachment: fs.createReadStream(__dirname + "/cache//288.mp3")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/288.mp3"), event.messageID); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)] + (max - min))).pipe(fs.createWriteStream(__dirname+"/cache/288.mp3")).on("close",() => callback());
     }
   };
module.exports.config = {
  name: "Funss",
  version: "1.0.0",
  permission: 2,
  credits: "SK-SIDDIK-KHAN",
  description: "",
  prefix: true, 
  category: "fun", 
  usages: "user",
  cooldowns: 2,
  dependencies: {
	}
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
  
 "https://i.postimg.cc/9F7ghrWv/IMG-20250615-WA0002.jpg",

"https://i.postimg.cc/CL3tBbPh/IMG-20250615-WA0001.jpg",

"https://i.postimg.cc/gJKd4N7H/IMG-20250615-WA0003.jpg",

"https://i.postimg.cc/MT1Xw7Fn/IMG-20250615-WA0004.jpg",

"https://i.postimg.cc/Hsgsw8P2/IMG-20250615-WA0005.jpg",

 "https://i.postimg.cc/MG8cXrJW/IMG-20250615-WA0007.jpg",

"https://i.postimg.cc/zDwxf9mf/IMG-20250615-WA0008.jpg",

"https://i.postimg.cc/zDwxf9mf/IMG-20250615-WA0008.jpg",

"https://i.postimg.cc/zDwxf9mf/IMG-20250615-WA0008.jpg",

"https://i.postimg.cc/8PDnBTdW/IMG-20250615-WA0010.jpg",

"https://i.postimg.cc/qBK9xmPf/IMG-20250615-WA0009.jpg",

"https://i.postimg.cc/qBK9xmPf/IMG-20250615-WA0009.jpg",

"https://i.postimg.cc/HL7JLDhv/IMG-20250615-WA0011.jpg",

"",

"",

"",

"",

"",

"",

"",

"",

"",

"",

"",

"",

"",

"",

"",

"",

"",

"",

"",

    ];
   var callback = () => api.sendMessage({body:`✨ BD SEX PIC ✨`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };

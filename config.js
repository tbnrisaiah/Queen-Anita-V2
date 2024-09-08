//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2348156027777";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieVA5UjM1amdEQXowbEhralBCLzBJbjJmWUxNdXUwMTh4eURFZUMxZ0VHRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUxIVGE0MHZ5ZmJNWVNYYlVUMWtuYmhXYkM2VlFMWnpheUo3OUdNT00xVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBRHdZU0FHYnhvSTJCeFN2UEN5K0xmS3cxekRrYVM5VDJIMWk4MUNVZUVnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXcWdZd1Fxam90SXBhNTdLbDBOYzNqN0EzL3Zka29KNFJmTUprWDRvbFZRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlKK1FXZ3U0RDRBV1h2dk1qdjVqT25OSFFQSzhuVjVVVFgwMGI0TDRJazA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVFc1NldE9YRU9iMzEvTU9reGFReWJhMzBPTDQ0anRoYzJhSzR1MVAvRTg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUtsaTkycGVkQUlqaFFqN0VLb2JlMmxNRWRuOHVlZWhRM0VFb2I2MXpYND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibERreW0vZlduTEkzNFJwY05wOWt2YXNaUjd3NnJZb0tiR1VKRjVDdU5WYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlE1ZCtiQ0ZwaGF6MmhoM0lJcGZyZlk2d2dsdGY0NWV1MnFwc1dUOEsyRmR3aWJrNmh6dWlsbFB0TEs5bXpJdVExQkdmWDBXNlJFU1cxcnJhRG9FWkFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc5LCJhZHZTZWNyZXRLZXkiOiI1MUZsTFJZbytFQUk5RG1IQ2hISVFDZ1djT2pwRDhFaXZNYmxYKzJSc2ZnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzIsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMiwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJIRmVOQldJOFFQcVlWNVVIam55ODlnIiwicGhvbmVJZCI6IjgyMzQ3Y2I5LWRhMDgtNDc5MC1iOTMxLWZiNmYxMjc5NmY3NCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvVUlCTFh0N0k1RFVlaUM0LzVuZHVtZmpqRVk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUVhkUEVLbzZoejA5a3ZqNG5hMDI0VVJqaCtRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkNMRlNZV0VWIiwibWUiOnsiaWQiOiIyMzQ4MTU2MDI3Nzc3Ojg0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ik8uRy4ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01EVHc0VUJFSXVqK0xZR0dBb2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlVMc2ZXYzZlMTdDakczRktRcDEvUVcwb2VFRHpKNTliVUZ5amIwNjM2Q2s9IiwiYWNjb3VudFNpZ25hdHVyZSI6InRPbnZ2enN4SjVUNDlwSklVSi9TQTBYRE92dkk1ZkVyd0FtZEFFdHB4YXFERm8wTnRlUUZobEdsY0x1RndQdXRXY0c4OWQzTUxkMDg5WFgyTjBnNEFnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJyVmNUMzZtS1JldnZjUkREQUdnamgrNlg1YmJtL1dHYnVvTGVyVFNVU2VXeXRWUlBLaDIwWDBDZEoxMGw0L25pUEZFcWlwbVE0Yzk3UnZIcjRmMlVBUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgxNTYwMjc3Nzc6ODRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVkM3SDFuT250ZXdveHR4U2tLZGYwRnRLSGhBOHllZlcxQmNvMjlPdCtncCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNTgyOTUyOX0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "OG",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});

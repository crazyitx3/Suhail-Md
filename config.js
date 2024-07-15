const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꧁❤•༆HU$N么IN ♡¸.•*³" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923165167688";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_47_07_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDc3LFxuICAgICAgICA1OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxODYsXG4gICAgICAgIDMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgODAsXG4gICAgICAgIDgwLFxuICAgICAgICA0OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDI1LFxuICAgICAgICAzMixcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTksXG4gICAgICAgIDE5MixcbiAgICAgICAgMTksXG4gICAgICAgIDE4NixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxOTksXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTAyLFxuICAgICAgICA2NSxcbiAgICAgICAgODQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDczLFxuICAgICAgICAxNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0LFxuICAgICAgICAyOSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxODQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTQzLFxuICAgICAgICA2MixcbiAgICAgICAgMTQ0LFxuICAgICAgICA4NixcbiAgICAgICAgOTUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgODYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDQ2LFxuICAgICAgICA0NCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxODUsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDIsXG4gICAgICAgIDkzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxODIsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDkzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTk4LFxuICAgICAgICA4NixcbiAgICAgICAgMTcwLFxuICAgICAgICAxNyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzMixcbiAgICAgICAgNjAsXG4gICAgICAgIDI1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQwLFxuICAgICAgICAzLFxuICAgICAgICAzNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTY4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDcyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDYxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTk2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMzEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDM2LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDUyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjUwLFxuICAgICAgICAxNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjUzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgODhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNSxcbiAgICAgICAgMjU0LFxuICAgICAgICA2MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDMxLFxuICAgICAgICAyNDksXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxODYsXG4gICAgICAgIDE0NixcbiAgICAgICAgNTYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTA2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOCxcbiAgICAgICAgMjE1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDgzLFxuICAgICAgICAxNCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDQxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgODksXG4gICAgICAgIDUxLFxuICAgICAgICA1NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgODEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTYzLFxuICAgICAgICA0MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDEzN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTMxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIldBaWxsbHNKYXo0ODhQS3RzajBtdzZBQWpHM0I2aXowekRLdXNoY05FTWs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImFuMEEwTjBjUzRPbWVWMlQ0d2pOX1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiYWUwZTAxZmMtNTg3MS00ZThhLTg4ZjItMGE1OWIyNDExNTkyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2OCxcbiAgICAgIDI2LFxuICAgICAgMjA4LFxuICAgICAgMyxcbiAgICAgIDE4NCxcbiAgICAgIDE5LFxuICAgICAgMTMxLFxuICAgICAgMjUxLFxuICAgICAgMTA0LFxuICAgICAgODQsXG4gICAgICAxMDAsXG4gICAgICAxMzAsXG4gICAgICAxMzIsXG4gICAgICAxOTgsXG4gICAgICAxOTIsXG4gICAgICA2MixcbiAgICAgIDIyOSxcbiAgICAgIDE0MSxcbiAgICAgIDgyLFxuICAgICAgMjhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMyLFxuICAgICAgMTgxLFxuICAgICAgMTE3LFxuICAgICAgNjcsXG4gICAgICA2NyxcbiAgICAgIDc3LFxuICAgICAgMTQ0LFxuICAgICAgMjUzLFxuICAgICAgMzAsXG4gICAgICAyNDUsXG4gICAgICAyNyxcbiAgICAgIDE4LFxuICAgICAgMTg2LFxuICAgICAgMTkyLFxuICAgICAgMTk4LFxuICAgICAgMTE4LFxuICAgICAgMTg2LFxuICAgICAgMTkwLFxuICAgICAgMjAsXG4gICAgICAxOTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUTExM0pMSjVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzE2NTE2NzY4ODoyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTI3NjIxMTQ0ODMwMDU2OjI1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lPUnpzb0NFSTZNMDdRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwieDJYcGJHazlQbFdFSldDR1JQSmg0TUQ3NTdUUGZRVlN0a3F1R1E4YTF6TT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIrUWZJc2IxeWxtRjlFUUJlZ3ljem45MHVPSEhXM2htR2l1Y0p1M3YvZFBsZFFsdllONjJXSWUzZysrU25PWXM5MUdBWVh5eHdYdWpVOGdGRWw1Z2ZCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJmQlVPMml5K0F5cno2Y0VsRDhiOHNwWHhWQUxqd284b21vRUJ3UythZ056TWxQZXdRMGhNNUJhUzNaNkpVNzRRb1NhY0hlM0ZpcUsyL2FpZDZkNHdpdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMxNjUxNjc2ODg6MjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDUxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEwMjYwNjUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLeERcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUt4RC5qc29uIjogIntcImtleURhdGFcIjpcInJSWndDNXhCczZZMWxURHVyUDltMHF1ckJKN2FKNFlHZkRmL3ovYnhZNDQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjkzMzQwMjkwLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzIxMDI2MDQ3MDAwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

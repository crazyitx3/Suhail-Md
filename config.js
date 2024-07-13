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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_01_07_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA1MCxcbiAgICAgICAgMyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNDksXG4gICAgICAgIDk3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjA4LFxuICAgICAgICA4MSxcbiAgICAgICAgMzksXG4gICAgICAgIDM3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDkzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDU2LFxuICAgICAgICAxNCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxODcsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxODcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDIsXG4gICAgICAgIDk1LFxuICAgICAgICAxMixcbiAgICAgICAgNzksXG4gICAgICAgIDkxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTUxLFxuICAgICAgICA5OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTc0LFxuICAgICAgICA5MCxcbiAgICAgICAgMjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjMyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA5MixcbiAgICAgICAgMjMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDM5LFxuICAgICAgICAxODcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTAxLFxuICAgICAgICA2LFxuICAgICAgICA4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDYwLFxuICAgICAgICAzNixcbiAgICAgICAgMjgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDQ2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTUyLFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTQxLFxuICAgICAgICA0NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDcwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTksXG4gICAgICAgIDExMSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgODEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDc3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTI1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTA1LFxuICAgICAgICA3MyxcbiAgICAgICAgNTksXG4gICAgICAgIDQxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxODQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTkxLFxuICAgICAgICA5MixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDgsXG4gICAgICAgIDkyLFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDQzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNyxcbiAgICAgICAgOCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjMzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxODMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODMsXG4gICAgICAgIDgyLFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA3MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3OSxcbiAgICAgICAgMTM5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE1NixcbiAgICAgICAgOTAsXG4gICAgICAgIDU4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTg4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTk0LFxuICAgICAgICA5MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDgzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDU4LFxuICAgICAgICAxMTksXG4gICAgICAgIDE3MixcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDQ5LFxuICAgICAgICA0NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTE1LFxuICAgICAgICA4NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDcxLFxuICAgICAgICAzMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTM2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRHR3M3pkc1FwSzZPcldzZm5XbDFsdkNEa1o5UWlpVHZwdHhLa2FjSDZVbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMzNjU2NDU4OTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjhFRUMwRkNGNTQyMzc3MUI3ODdCNzlCQjVBNDMxMEJBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDg2NDg3MFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzM2NTY0NTg5MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRjdDOTQ5M0JBMkRCRDgyQjUyMTEyRERFN0NGNjI1MjNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwODY0ODcwXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIldxcXlHSS1KVFVhSWd0a0FFYjFpakFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYWE2ZTUwMDUtYjc3OC00OGM2LWI5ZmEtODM0YjM4NDQ2OWZkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMixcbiAgICAgIDEzNSxcbiAgICAgIDg0LFxuICAgICAgNjcsXG4gICAgICAxMTMsXG4gICAgICAyMzMsXG4gICAgICAwLFxuICAgICAgMTQ3LFxuICAgICAgMTQyLFxuICAgICAgMTQ1LFxuICAgICAgNzIsXG4gICAgICAyMTIsXG4gICAgICAxNDEsXG4gICAgICAxMDUsXG4gICAgICAyNixcbiAgICAgIDE3NixcbiAgICAgIDMxLFxuICAgICAgMjE2LFxuICAgICAgMjQwLFxuICAgICAgMTc2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDYsXG4gICAgICAyMTQsXG4gICAgICA3MyxcbiAgICAgIDIxNSxcbiAgICAgIDEwOSxcbiAgICAgIDIyOCxcbiAgICAgIDE5NSxcbiAgICAgIDE0MSxcbiAgICAgIDQ1LFxuICAgICAgMTgyLFxuICAgICAgNSxcbiAgICAgIDE5NCxcbiAgICAgIDI0NCxcbiAgICAgIDE4OCxcbiAgICAgIDExMyxcbiAgICAgIDE1NCxcbiAgICAgIDIyMixcbiAgICAgIDg2LFxuICAgICAgMjcsXG4gICAgICA4MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BmSi9NY0NFTitneWJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidzlMd3NmbGo4Sk10TWFTSW9OWnFjNmk1TWl6cms4dGFsTHRnOTdVbEF3VT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ3a2pIQWpXT1BnUU9BalB4a25IY2NQR0FPbGdnNWhVU0hGK2FoWnJXc0lzUE43RXd4YWo1WVBLSVJzN3dwaXB0cVFtTDB6MmJBQUlIaWhURXlZcElDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJhY2lvellTaXhCNGI3U0o5ZU85Q0NRcU5xUWxWc1U1azVSbTd1Mlh3cjREUHlqTzlRYzJSRHJhVCtEQU05TFdWNnhNYmk5WElBK1pVZHlkTlhHVUZodz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzM2NTY0NTg5MDoxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiOTI4MjMzMDI5Nzk2NDA6MTRAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi4pmhXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMzNjU2NDU4OTA6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA4NjQ4NjcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBWHNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFYcy5qc29uIjogIntcImtleURhdGFcIjpcIk4vbVAyTG53RFNtVHlaa0t4NmsrOEtZTE4vR0NweXlGR29XdkVNaXFpRzA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6Njg3ODA5NzgzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA4NjQ4Njk2MDFcIn0iCn0="  // PUT your SESSION_ID 


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

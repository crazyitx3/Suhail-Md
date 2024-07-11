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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_02_54_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDksXG4gICAgICAgIDY3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTU2LFxuICAgICAgICA4MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjksXG4gICAgICAgIDM5LFxuICAgICAgICAxODUsXG4gICAgICAgIDU3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTY5LFxuICAgICAgICA1MixcbiAgICAgICAgMjA1LFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDM4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDU1LFxuICAgICAgICAxODYsXG4gICAgICAgIDkwLFxuICAgICAgICAxMjksXG4gICAgICAgIDYyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDQxLFxuICAgICAgICAxODIsXG4gICAgICAgIDc1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzksXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE2LFxuICAgICAgICA1NixcbiAgICAgICAgMjE3LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDksXG4gICAgICAgIDcwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTc0LFxuICAgICAgICA2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDY4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTY5LFxuICAgICAgICA5MixcbiAgICAgICAgMTM5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTU5LFxuICAgICAgICA1NixcbiAgICAgICAgMTg5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDcsXG4gICAgICAgIDM0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTYsXG4gICAgICAgIDUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTksXG4gICAgICAgIDIzLFxuICAgICAgICA2MixcbiAgICAgICAgODcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDgyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDU5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDgxLFxuICAgICAgICA1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQyLFxuICAgICAgICAxODksXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxODcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMjUxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDM5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDExNixcbiAgICAgICAgMTAxLFxuICAgICAgICAxNTksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDY3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDUwLFxuICAgICAgICA4MixcbiAgICAgICAgNDgsXG4gICAgICAgIDMzLFxuICAgICAgICA0OSxcbiAgICAgICAgMTE2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTEwLFxuICAgICAgICA5MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMixcbiAgICAgICAgMTE1LFxuICAgICAgICAyNDksXG4gICAgICAgIDk5LFxuICAgICAgICAzOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAzNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTMyLFxuICAgICAgICA2NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEyN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMjYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxODUsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDkyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMDksXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjI0LFxuICAgICAgICA5MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDQsXG4gICAgICAgIDI3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMixcbiAgICAgICAgMjU0LFxuICAgICAgICA2NyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxODQsXG4gICAgICAgIDEwLFxuICAgICAgICA0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwLFxuICAgICAgICA0NixcbiAgICAgICAgMTQsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDMsXG4gICAgICAgIDk1LFxuICAgICAgICAyNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMyxcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOTQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiS0l1dU1PRGsvWitVL2t5dXRiZ0hpSDdoWUpURGZMbEFGcW43MnRaOG1BQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSEpvRk1DdzdTS1d3V2VQcTB0RFpRZ1wiLFxuICBcInBob25lSWRcIjogXCI3ZWNhMzVhMS1kM2Y4LTRkMDctYmY5Mi0wY2FmODNjMDgxOGFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTAsXG4gICAgICA4MCxcbiAgICAgIDIyOSxcbiAgICAgIDQwLFxuICAgICAgNTgsXG4gICAgICAyMixcbiAgICAgIDE2NixcbiAgICAgIDMwLFxuICAgICAgMjE2LFxuICAgICAgMjQzLFxuICAgICAgMTE1LFxuICAgICAgMjQsXG4gICAgICAxNjIsXG4gICAgICAxOCxcbiAgICAgIDE1OCxcbiAgICAgIDEwLFxuICAgICAgMTQ5LFxuICAgICAgMTc3LFxuICAgICAgMTg3LFxuICAgICAgMTgxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ5LFxuICAgICAgMTY0LFxuICAgICAgOCxcbiAgICAgIDMyLFxuICAgICAgMTgyLFxuICAgICAgMjEsXG4gICAgICA3LFxuICAgICAgNTcsXG4gICAgICAyMzIsXG4gICAgICAyMDUsXG4gICAgICAxMTQsXG4gICAgICAxMDgsXG4gICAgICAyMTYsXG4gICAgICAyLFxuICAgICAgNTMsXG4gICAgICAyNixcbiAgICAgIDIzNSxcbiAgICAgIDk4LFxuICAgICAgOTQsXG4gICAgICA2MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJNVlYyQUdTVFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMTY1MTY3Njg4OjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEyNzYyMTE0NDgzMDA1Njo2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BTUXpzb0NFT0NTdmJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwieDJYcGJHazlQbFdFSldDR1JQSmg0TUQ3NTdUUGZRVlN0a3F1R1E4YTF6TT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJjenMwbU9aazdjaGpoK3hvWmthUVdBY0VmbUNJdjFoV0pkaHl1MlYyZDRWVXJQeTFISEhWd3I1dFdwNEhkUU1tYVZVYy9IWGFsSkVwOTVyV0U3MURCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI1TXN1ZUtrQVJqYitTOUZHa2VYV2JCSHdZZExaVnZEWkZjTmNzSWpJNHBaT0JXd0F2UEtJb3B0ZXMyZnVPK0RkZElCMFlyRGlwd2FsbGplWXVhdEtnQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMxNjUxNjc2ODg6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDY2NjQ2NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUUyN1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRTI3Lmpzb24iOiAie1wia2V5RGF0YVwiOlwidDBTSUdaUnRQdHkxbG1yU3NmNURKSkZJUG4wRG0zOHBRejU0a29SUktYYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2OTMzNDAyNzUsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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

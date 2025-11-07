// Placeholder logo CDN
const BOT_LOGO = "https://cdn.discordapp.com/attachments/1436166255747792936/1436169385772318720/IMG_5179-removebg-preview.png?ex=690ea078&is=690d4ef8&hm=db84a71457abbe2f0475932b70475e52bcbd918e4e3fd8797fea32963921dced&";

// Set logo
document.getElementById("bot-logo").src = BOT_LOGO;

// Set invite link (replace YOUR_CLIENT_ID)
document.querySelector(".invite-btn").href = 
`https://discord.com/oauth2/authorize?client_id=1436165650786812089&scope=bot&permissions=8`;

const Discord = require('discord.js');
let roblox = require('noblox.js');
const bot = new Discord.Client();
const fs = require("fs");
bot.msgs = require ("./msgs.json")

const token = require('./config.json').token
const botname = require('./config.json').Botname1
const PREFIX = require('./config.json').preefix
const logo = require('./config.json').Logoo;
const realminv = "**https://realms.gg/gNIAIvVEDVg**" // HERE you chanage the invite code!

bot.on('ready', () => {
    bot.user.setActivity("Quarantine Sanctuary")
})

bot.on('ready', () => {
    console.log('Quarantine Sanctuary is online')
})





bot.on('message', message => {
    console.log(message.content + '---' + message.author.username)
    let args = message.content.substring(PREFIX.length).split(" ");
    if(message.channel.name == undefined)  { return }

        switch (args[0]) {
        case 'rule1':
          message.delete();
          if (!message.member.roles.has("712112441802358857") && !message.member.hasPermission("ADMINISTRATOR") && !message.author.username == "Bedrockminecart") { return; }
          message.channel.send ("", {files: ["./rules_logo.png"]})
        break;
        case 'rule2':
          message.delete();
          if (!message.member.roles.has("712112441802358857") && !message.member.hasPermission("ADMINISTRATOR") && !message.author.username == "Bedrockminecart") { return; }
          message.channel.send("1] Be Respectful! Treat all members with respect & express all concerns to Staff!\n\n2] Avoid excessive messages, images, formatting, emoji, commands, and @mentions\n\n3] Do not self-promote or advertise! This includes links to social media, servers, communities, etc without having the <@&712076908451332107> tag!\n\n4] Strickly no harassment, abuse, bullying, rasist, sexist, Anti-LGBTQ+, or otherwise considered offensive language. Zero-Tolerance! You will be Banned!\n\n5] No political or religious debates. These are too complex conversations that we do not want in this server.\n\n6] No NSFW content! Zero-Tolerance!\n\n7] All members on the realm must be in the discord and have the “Member” tag. Your Discord nickname must also be changed to your Username in the Realm for identification purposes. Failure to do so may result in removal from Realm.\n\n8] All members must live somewhere, you can either build a house or live in one of the pre-made aresidences. (You are required to DM a <@&698800632819351583> your Coordinates or Residence #) Failure to do so will result in removal from Realm.\n\n9] All members must have some sort of border around your property.\n\n10] Respect all “Private Property” & “No Trespassing” signs.\n\n11] Do NOT Grief others peoples properties. If it isn’t yours dont destroy it!\n\n12] Do NOT steal from others, if you need something ask to borrow that item!\n\n13] Do not build over/block someone else’s property without permission.\n\n14] Do not build over/block any pre-built paths, or spawn town entrances and exits\n\n15] Don’t build too close to another players building area, give them space!\n\n16] Pranking is ok, as long as it doesn’t destroy properties. If it does, you are responsible for fixing it.\n\n17] Do not build within 100 blocks of spawn town.")
        break;
        case 'rule3':
          message.delete();
          if (!message.member.roles.has("712112441802358857") && !message.member.hasPermission("ADMINISTRATOR") && !message.author.username == "Bedrockminecart") { return; }
          message.channel.send("18] No Hacking! This includes Autominers, Plugins, Apps or any other work arounds that violate Minecraft ToS.\n\n19] Do NOT be afk in the servers. This takes up space for people who wanna join.\n\n20] All members cannot use a skin that will make them invisible.\n\n21] No Duplicating, or Duplicating Machines.\n\n22] No lag machines! This includes no tick farms, or similar that will cause lag to the server.\n\n23] No unnecessary pings or ticket creations.\n\n24] Be responsible and keep valuables (Ores, Important Enchanted Items, etc) in a Enderchest. There are Enderchests at spawn to use, or you may purchase them. WE ARE NOT RESPONSIBLE FOR STOLEN VALUABLE ITEMS\n\n25] HAVE FUN!!\n\nRules are subject to change")
        break;
        case 'tro':
          message.delete();
          if (!message.member.roles.has("712112441802358857") && !message.member.hasPermission("ADMINISTRATOR") && !message.author.username == "Bedrockminecart") { return; }
          message.channel.send("**Trail Realm Operator Responsibilities**\nEnforce Rules, Monitor suspicious activity, and Monitor members. Assisting Moderators with any questions that they may have. Helps with #tasks-to-do\n**Can Warn & Mute.**")
        break;
        case 'tm':
          message.delete();
          if (!message.member.roles.has("712112441802358857") && !message.member.hasPermission("ADMINISTRATOR") && !message.author.username == "Bedrockminecart") { return; }
          message.channel.send("**Trail Moderator Responsibilities**\nTrial Moderators are persons who are the beginner's of staff! They are being watched and monitored more closely to see if they are worthy of becoming a Moderator! Trial Moderators must help keep the peace and making sure everyone is following the rules across the Realm and Discord.")
        break;
        case 'storemanager':
          message.delete();
          if (!message.member.roles.has("712112441802358857") && !message.member.hasPermission("ADMINISTRATOR") && !message.author.username == "Bedrockminecart") { return; }
          message.channel.send("**Store Manager Responsibilities**\nResponsible for managing the stores. Can add items to the stores, give members items that they purchased, distribute funds to members who sell items.")
        break;
        case 'staffagree':
          message.delete();
          if (!message.member.roles.has("712112441802358857") && !message.member.hasPermission("ADMINISTRATOR") && !message.author.username == "Bedrockminecart") { return; }
          message.channel.send("**Staff Team Agreement**\nBy typing in “Agree” below, you are agreeing to upholding all of the Realm Rules to the full extent. You understand that all conversations that go on in the categories “Staff Sanctuary”, “Legion Channel” & obvious private channels that normal members aren't supposed fo see are private and confidential and cannot be released to the public. Releasing any information will result in demotion and/or removal from the realm. You are agreeing to the job descriptions put forth to you, failure to do so will result in a warning. Staff are only allowed 3 warnings before they are demoted. If at lowest rank, you will be removed from the staff team.  ")
        break;
        case 'ro':
          message.delete();
          if (!message.member.roles.has("712112441802358857") && !message.member.hasPermission("ADMINISTRATOR") && !message.author.username == "Bedrockminecart") { return; }
          message.channel.send("**Realm Operator Responsibilities**\nEnforce rules, monitor members in the Realm and Discord Server. Assist any Trail Realm Operators with questions that they may have. Helps with #tasks-to-do\n**Can Warn, Ban, & Mute.*")
        break;
        case 'mod':
          message.delete();
          if (!message.member.roles.has("712112441802358857") && !message.member.hasPermission("ADMINISTRATOR") && !message.author.username == "Bedrockminecart") { return; }
          message.channel.send("**Moderators Responsibilities**\nModerators are persons who would like to help out, and monitor either the Discord Server or Realms. They are in the beginning stages to eventually become Operators.\n**Can Warn and Mute members.**")
        break;
        case 'joinrealm':
          message.delete();
          if (!message.member.roles.has("698800854744170608") || message.member.roles.has("698800723931955240")) { return; }
          message.channel.send(message.author.toString() + " Thank you for your interest in Joining Quarantine Sanctuary! Please check your DMs!")
          message.author.send("Hello! So you need to do a couple things before you join.\n\n**__Please do before you join!__**\n1) Change your nickname in the discord to what it shows in-game! This is important!\nIf the name in discord does not match in-game you may be kicked!\n\n2) Join the realm by using the following code!\n" + realminv + "\n\n3) Once you have connected to the realm and you are in game, please type in <#701075770881212426> the command `!connected`\n\n __Only type in the above command once you have joined the realm and you are IN game.__\n\n(You WILL be warned if you do not follow the above steps.)\n\nThank you!")
        break;
        case 'denied':
          message.delete();
          if (!message.member.roles.has("712112441802358857") && !message.member.hasPermission("ADMINISTRATOR") && !message.author.username == "Bedrockminecart") { return; }
          message.channel.send("Thank you for showing interest in an amazing staff team!\n\n**What do i do now?**\nAfter your staff application has been denied, you may apply for staff again in 1 week up to 3 times. After the 3rd time, you will no longer be able to apply for staff. ")
        break;
        case 'connected':
          message.delete();
          if (!message.member.roles.has("698800854744170608") || message.member.roles.has("698800723931955240")) { return; }
          message.member.addRole("707262257532502026").catch(console.error)
          message.member.addRole("698800723931955240").catch(console.error)
          message.member.removeRole("698800854744170608").catch(console.error)
          bot.channels.get("698802085155700747").send("Welcome to **Quarantine Sanctuary**!\nMake sure to keep up to date on rules and announcements!\n\n1) Give yourself some roles! <#712083583363317771>\n2) Make sure to read the <#698801670590693397> \n3) Please DM a online **Realm Operator** your house coordinates when you start building your house.\n4) If you don’t wanna build a house right away, Spawn Town Residences are Free! Just let us know which Residence #.\n\nLastly, **HAVE FUN!** " + message.author.toString())
        break;
        case 'format':
          message.delete();
          if (message.member.roles.has("698800854744170608") || message.member.roles.has("698800723931955240")) { return; }
          message.channel.send("`(Item Purchased), (Quantity), (Server #), (Coordinates of Drop off)`")
        break;
        case 'buildingdivision':
          message.delete();
          if (!message.member.roles.has("712112441802358857") && !message.member.hasPermission("ADMINISTRATOR") && !message.author.username == "Bedrockminecart") { return; }
          message.channel.send("**Building Division Responsibilities**\nResponsible for maintaining the Realms. Can build cool additions to Spawn town or around the map for members to enjoy. Assist with creating Event maps or locations. Helps with <#709262061804453958> ")
        break;
        case 'botmanager':
          message.delete();
          if (!message.member.roles.has("712112441802358857") && !message.member.hasPermission("ADMINISTRATOR") && !message.author.username == "Bedrockminecart") { return; }
          message.channel.send("**Bot Manager Responsibilities**\nResponsible for maintaining the bots in the discord server. Updating any information and making sure they work correctly.")
        break;
        case 'basecoordinator':
          message.delete();
          if (!message.member.roles.has("712112441802358857") && !message.member.hasPermission("ADMINISTRATOR") && !message.author.username == "Bedrockminecart") { return; }
          message.channel.send("**Base Coordinator Responsibilities**\nResponsible for keeping the Member Base Document current with all new and removed members and making sure all members DM you with coordinates.\n**Can warn for violating <#698801670590693397> 9**")
        break;



        } 
                      
                      
    })

bot.on('error', err => {
  console.log(err)
});

bot.login(token);
const Discord = require('discord.js');
const bot = new Discord.Client();
require('dotenv/config');
const http = require('http');
const port = process.env.PORT || 3000;
http.createServer().listen(port);

const token = process.env.TOKEN;
const botname = require('./config.json').Botname1
const PREFIX = require('./config.json').preefix
const logo = require('./config.json').Logoo;

bot.on('ready', () => {
    bot.user.setActivity("!commands for Help!")
})

bot.on('ready', () => {
    console.log('Hello 1 2 1 2, Your bot is online')
    console.log('We are online')
})


bot.on('messageDelete', async (message) => {
    const logs = message.guild.channels.find(channel => channel.name === "audit-log");
    if (message.guild.me.hasPermission('MANAGE_CHANNELS') && !logs) {
      message.guild.createChannel('audit-log', 'text');
    }
    if (!message.guild.me.hasPermission('MANAGE_CHANNELS') && !logs) { 
      console.log('The logs channel does not exist and tried to create the channel but I am lacking permissions')
    }  
    const entry = await message.guild.fetchAuditLogs({type: 'MESSAGE_DELETE'}).then(audit => audit.entries.first())
    let user = ""
      if (entry.extra.channel.id === message.channel.id
        && (entry.target.id === message.author.id)
        && (entry.createdTimestamp > (Date.now() - 5000))
        && (entry.extra.count >= 1)) {
      user = entry.executor.username
    } else { 
      user = message.author.username
    }
    const Messagedelelfs = new Discord.RichEmbed()
	            .setColor('#ff0000')
	            .setTitle('A message was deleted!')
                .setAuthor(botname, logo)
                .setDescription(`A message was deleted in #${message.channel.name} made by ${user}`)
                .setThumbnail(logo)
	            .setTimestamp()
	            .setFooter('Bot made by bedrockminecart.');
                logs.send(Messagedelelfs);
  })



bot.on('message', message => {
    console.log(message.content)
    if (message.content === 'who is the best'){
        const iamthebest = new Discord.RichEmbed()
        .setColor('#ff0000')
        .setTitle('I AM THE BEST')
        .setAuthor(botname)
        .setThumbnail(logo)
        .setTimestamp()
        .setFooter('Bot made by bedrockminecart.');
        message.channel.send(iamthebest)

    }
    if (message.content === 'who is the worst'){
      message.channel.send('@Deathfly is the worst')
    }
    let args = message.content.substring(PREFIX.length).split(" ");


        switch (args[0]) {
        case 'ping':
            message.channel.sendMessage('pong!');
            break;
        case 'info':
                if (args[1] === 'server') {
                    const server = new Discord.RichEmbed()
                    .setColor('#ff0000')
                    .setTitle('Info')
                    .setAuthor(botname, logo)
                    .setDescription('This is a talk server with loots of channels to talk to people, we also have alot of bots you can play with!')
                    .setThumbnail(logo)
                    .setTimestamp()
                    .setFooter('Bot made by Bedrockminecart.');
                    message.channel.sendMessage(server);
                } if (args[1] === 'bot') {
                    const survival = new Discord.RichEmbed()
                    .setColor('#ff0000')
                    .setTitle('Info')
                    .setAuthor(botname, logo)
                    .setDescription('Hello, \n I am bedrock otherwise known as Tall and I am the maker of this bot. \n If you need anything just @BedrockMinecart. \n And for your imforamtion this is 175 lines of code.')
                    .setThumbnail(logo)
                    .setTimestamp()
                    .setFooter('Bot made by Bedrockminecart.');
                    message.channel.sendMessage(survival);
                } if (args[1] === 'Subway') {
                    const creative = new Discord.RichEmbed()
                    .setColor('#ff0000')
                    .setTitle('Info')
                    .setAuthor(botname, logo)
                    .setDescription('Subway is a Roblox group made by SFT_lil.')
                    .setThumbnail(logo)
                    .setTimestamp()
                    .setFooter('Bot made by Bedrockminecart.');
                    message.channel.sendMessage(creative);
            
        
            }
            break;

          case 'time':
            const time = new Discord.RichEmbed()
	          .setColor('#ff0000')
              .setTitle('Time')
              .setThumbnail(logo)
              .setDescription('Time')
              .setTimestamp()
              message.channel.sendMessage(time);
              break;
        case 'commands':
            const commands = new Discord.RichEmbed()
	            .setColor('#ff0000')
	            .setTitle('Commands')
                .setAuthor(botname, logo)
                .setDescription('**Current commands:** \n -ping (usage: !ping) \n -time (usage: !time) \n -commands (usage: !commands) \n -info (usage: !info server/bot/Subway) \n -suggest (usage: !suggest [suggetion]) \n **Current logs:** \n -message deleted')
                .setThumbnail(logo)
	            .setTimestamp()
	            .setFooter('Bot made by Bedrockminecart.');
                message.channel.sendMessage(commands);
                break;
        case 'suggest':
          if (!args[1]) { return }
          else {
          const annnnonnoni = message.content.slice (8);
          const talkannounc = new Discord.RichEmbed()
              .setColor('#ff0000')
              .setTitle('A suggestion!')
              .setAuthor(botname, logo)
              .setDescription(annnnonnoni)
              .setThumbnail(logo)
              .setTimestamp()
              .setFooter('Bot made by Bedrockminecart.');
              bot.channels.get("649756831622627335").send(talkannounc)
          }  break;
             case 'delete595':
              if (!args[1]) return message.reply('Error please define number')
              message.channel.bulkDelete(args[1])
              break;
              case 'talk595':
                  if (!args[1]) { return }
                   else {
                    message.delete();
                    const lol = args[1].length;
                    const annnnonnonii = message.content.slice (7 + lol);
                    const talkannounce = new Discord.RichEmbed()
                        .setColor('#ff0000')
                        .setTitle(args[1])
                        .setAuthor(botname, logo)
                        .setDescription(annnnonnonii)
                        .setThumbnail(logo)
                        .setTimestamp()
                        .setFooter('Bot made by Bedrockminecart.');
                        message.channel.sendMessage(talkannounce)
                       break;   
                  }
                     case 'poll595':
                      if (!args[1]) { return }
                      else {
                      const annnnonnoniiiii = message.content.slice (5);
                      const talkannounccc = new Discord.RichEmbed()
                          .setColor('#ff0000')
                          .setTitle('Poll!')
                          .setAuthor(botname, logo)
                          .setDescription(annnnonnoniiiii)
                          .setThumbnail(logo)
                          .setTimestamp()
                          .setFooter('Bot made by Bedrockminecart.');
                          bot.channels.get("649756880314302464").send(talkannounccc).then(sentEmbed => {
                            sentEmbed.react("👍")
                            sentEmbed.react("👎")
                        })}
                         break;
      }
        
            
    
                

        
        
        

    }

)

bot.on('error', err => {
  console.log(err)
});

bot.login(token);
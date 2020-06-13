const Discord = require("discord.js");
const colours = require("../JSON/colours.json");
module.exports = {
  name: "features",
  category: "utilty",
  description: "Breif overwiew of the bots commands",
  run: async (bot, message, args) => {
    var features = new Discord.MessageEmbed()
    .setTitle('<:AuraCheck:721117662951768244> **HERE ARE THE AURA FEATURES** <:AuraCheck:721117662951768244> ')
    .setDescription('The Aura Prefix Is Currently `a!`. You Can Find More Commands And Information About Aura On Our **[Website](https://aurabot.xyz/)**')
    .addField('Moderation', '```Kick\nBan\nSlowmode\nLockdown\nMute\nUnmute\nUnban\nClear```', true)
    .addField('Utilty', '```Status\nHelp\nNick\nBotstats\nUserinfo\nServerinfo\nPing\nEmbed```', true)
    .addField('Fun', '```Google\nSpotify\nAv\nPoll\nMeme\nGiveaway\n8ball\nReddit```', true)
    .addField('Important Information', '```Aura Is Still Under Development, This Means We Would LOVE Feedback On Our Bot. To Give Feedback Join Our Discord Server By Using -aura And Head Over To The Suggestions Channel! Thank YOU For Using Aura!```')
    .addField('Looking To Support Us','Interested On Helping The Aura Development Project? [**Click Here**](https://aurabot.xyz/docs-page.html#section-3) or Trigger The Donation Command Using `-donate` For More Information')
    .setColor(colours.bot_white)
    .setFooter('Aura Discord Bot | Developed By Void');
    message.channel.send(features);
  }};

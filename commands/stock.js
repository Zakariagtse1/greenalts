const Discord = require ("discord.js")

exports.run = async (client, message) => {
  let embed = new Discord.RichEmbed()
.setColor("#363940")
.setFooter('©️ CopyRight Para™️')
.addField('__STOCK__','__**STOCK COMMANDS**__\n\n`$spotify`: 3203 .\n`$hulu`: 650 .\n`$minecraft`: 0 .\n`$nitro`: unlimited .\n`$nordvpn`: 100.\n`$origin` 5600.\n`$proxy`: unlimited .\n\n **✩** Remember that you are using the free generator, the accounts may not work !');
message.channel.send(embed)
}
module.exports.help = {
  name: 'help'
}

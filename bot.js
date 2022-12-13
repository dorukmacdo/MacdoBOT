//###############################
//####      Discord Bot      ####
//####Made by dorukmacdo#9030####
//###############################
const Discord = require('discord.js');
const { EmbedBuilder } = require('discord.js');
const client = new Discord.Client();

//Baslatma Mesaji

client.on('ready', () => {
  console.log(`Bot Baslatildi`);
});

//Bot Durum Ogrenme

client.on('message', msg => {
  if (msg.content === '!bot') {
    msg.channel.send('Ben **MacdoCraft** Sunucunun Botuyum Şuan **Stabil** Şekilde Çalışıyorum **Sürümüm: 0.0.9 Pre-Beta**');
  }
});

//Hoş Geldin Mesajı

client.on('guildMemberAdd', (member) => {
  const exampleEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('Some title')
	.setURL('https://discord.js.org/')
	.setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
	.setDescription('Some description here')
	.setThumbnail('https://i.imgur.com/AfFp7pu.png')
	.addFields(
		{ name: 'Regular field title', value: 'Some value here' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
	.addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
	.setImage('https://i.imgur.com/AfFp7pu.png')
	.setTimestamp()
	.setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

channel.send({ embeds: [exampleEmbed] });
});

//sa as otomatik mesajlar

client.on('message', msg => {
  if (msg.content === 'sa') {
    msg.reply('AS Sunucumuza Hoş Geldin');
  }
});

client.on('message', msg => {
  if (msg.content === 'selam') {
    msg.reply('Selam Sunucumuza Hoş Geldin');
  }
});

client.on('message', msg => {
  if (msg.content === 'Selam') {
    msg.reply('Selam Sunucumuza Hoş Geldin');
  }
});

client.on('message', msg => {
  if (msg.content === 'SELAM') {
    msg.reply('Selam Sunucumuza Hoş Geldin');
  }
});

client.on('message', msg => {
  if (msg.content === 'Sa') {
    msg.reply('AS Sunucumuza Hoş Geldin');
  }
});

client.on('message', msg => {
  if (msg.content === 'SA') {
    msg.reply('AS Sunucumuza Hoş Geldin');
  }
});


client.on('message', msg => {
  if (msg.content === 'sA') {
    msg.reply('AS Sunucumuza Hoş Geldin');
  }
});

//Komutlar Baslangic

client.on('message', msg => {
  if (msg.content === '!site') {
    msg.reply('**http://map.macdocraft.com**');
  }
});

client.on('message', msg => {
  if (msg.content === '!Site') {
    msg.reply('**http://map.macdocraft.com**');
  }
});


client.on('message', msg => {
  if (msg.content === '!yardım') {
    msg.reply('**🤝・destek-talebi**  Kanalından Destek Alabilirsin :lock:');
  }
});

client.on('message', msg => {
  if (msg.content === '!yardim') {
    msg.reply('**🤝・destek-talebi**  Kanalından Destek Alabilirsin :lock:');
  }
});

client.on('message', msg => {
  if (msg.content === 'yardım') {
    msg.reply('**🤝・destek-talebi**  Kanalından Destek Alabilirsin :lock:');
  }
});

client.on('message', msg => {
  if (msg.content === 'yardim') {
    msg.reply('**🤝・destek-talebi**  Kanalından Destek Alabilirsin :lock:');
  }
});

client.on('message', msg => {
  if (msg.content === '!ip') {
    msg.reply('Vay **MacdoCraft** mı Oynayacaksın Ip Adresi **oyna.macdocraft.com**');
    msg.reply('**Sürüm 1.16-1.19 Arası**');
  }
});

client.on('message', msg => {
  if (msg.content === 'ip') {
    msg.reply('Vay **MacdoCraft** mı Oynayacaksın Ip Adresi **oyna.macdocraft.com**');
    msg.reply('**Sürüm 1.16-1.19 Arası**');
  }
});

client.on('message', msg => {
  if (msg.content === '!sunucu') {
    msg.reply('Vay **MacdoCraft** mı Oynayacaksın Ip Adresi **oyna.macdocraft.com**');
    msg.reply('**Sürüm 1.16-1.19 Arası**');
  }
});

client.on('message', msg => {
  if (msg.content === 'sunucu') {
    msg.reply('Vay **MacdoCraft** mı Oynayacaksın Ip Adresi **oyna.macdocraft.com**');
    msg.reply('**Sürüm 1.16-1.19 Arası**');
  }
});

client.on('message', msg => {
  if (msg.content === '!server') {
    msg.reply('Vay **MacdoCraft** mı Oynayacaksın Ip Adresi **oyna.macdocraft.com**');
    msg.reply('**Sürüm 1.16-1.19 Arası**');
  }
});

client.on('message', msg => {
  if (msg.content === 'server') {
    msg.reply('Vay **MacdoCraft** mı Oynayacaksın Ip Adresi **oyna.macdocraft.com**');
    msg.reply('**Sürüm 1.16-1.19 Arası**');
  }
});

client.on('message', msg => {
  if (msg.content === '!mc') {
    msg.reply('Vay **MacdoCraft** mı Oynayacaksın Ip Adresi **oyna.macdocraft.com**');
    msg.reply('**Sürüm 1.16-1.19 Arası**');
  }
});

client.on('message', msg => {
  if (msg.content === 'mc') {
    msg.reply('Vay **MacdoCraft** mı Oynayacaksın Ip Adresi **oyna.macdocraft.com**');
    msg.reply('**Sürüm 1.16-1.19 Arası**');
  }
});

client.on('message', msg => {
  if (msg.content === '!macdocraft') {
    msg.reply('Vay **MacdoCraft** mı Oynayacaksın Ip Adresi **oyna.macdocraft.com**');
    msg.reply('**Sürüm 1.16-1.19 Arası**');
  }
});

client.on('message', msg => {
  if (msg.content === 'macdocraft') {
    msg.reply('Vay **MacdoCraft** mı Oynayacaksın Ip Adresi **oyna.macdocraft.com**');
    msg.reply('**Sürüm 1.16-1.19 Arası**');
  }
});

client.on('message', msg => {
  if (msg.content === '!map') {
    msg.reply('Vay **Towny** Oynayacaksın Demek Gerçek Dünya Haritasının Linki **http://map.macdocraft.com**');
  }
});

client.on('message', msg => {
  if (msg.content === '!harita') {
    msg.reply('Vay **Towny** Oynayacaksın Demek Gerçek Dünya Haritasının Linki **http://map.macdocraft.com**');
  }
});

client.on('message', msg => {
  if (msg.content === '!towny') {
    msg.reply('Vay **Towny** Oynayacaksın Demek Gerçek Dünya Haritasının Linki **http://map.macdocraft.com**');
  }
});

client.on('message', msg => {
  if (msg.content === 'harita') {
    msg.reply('Vay **Towny** Oynayacaksın Demek Gerçek Dünya Haritasının Linki **http://map.macdocraft.com**');
  }
});

client.on('message', msg => {
  if (msg.content === 'map') {
    msg.reply('Vay **Towny** Oynayacaksın Demek Gerçek Dünya Haritasının Linki **http://map.macdocraft.com**');
  }
});

//Komutlar Bitis

//Argo, Kufur Baslangic

client.on('message', msg => {
  if (msg.content === 'salak') {
    msg.reply('**Hey Küfür Yok**');
    msg.reply('**Mesaj Silinme Nedeni** ||salak||');
  }
});

client.on('message', msg => {
  if (msg.content === 'mal') {
    msg.delete()
    msg.reply('**Hey Küfür Yok**');
    msg.reply('**Mesaj Silinme Nedeni** ||mal||');
  }
});

client.on('message', msg => {
  if (msg.content === 'aq') {
    msg.delete()
    msg.reply('**Hey Küfür Yok**');
    msg.reply('**Mesaj Silinme Nedeni** ||aq||');
  }
});

client.on('message', msg => {
  if (msg.content === 'orospu') {
    msg.delete()
    msg.reply('**Hey Küfür Yok**');
    msg.reply('**Mesaj Silinme Nedeni** ||orospu||');
  }
});

client.on('message', msg => {
  if (msg.content === 'beyinsiz') {
    msg.delete()
    msg.reply('**Hey Küfür Yok**');
    msg.reply('**Mesaj Silinme Nedeni** ||beyinsiz||');
  }
});

client.on('message', msg => {
  if (msg.content === 'or') {
    msg.delete()
    msg.reply('**Hey Küfür Yok**');
    msg.reply('**Mesaj Silinme Nedeni** ||or||');
  }
});

client.on('message', msg => {
  if (msg.content === 'gerizekalı') {
    msg.delete()
    msg.reply('**Hey Küfür Yok**');
    msg.reply('**Mesaj Silinme Nedeni** ||gerizekalı||');
  }
});

//Argo, Kufur Bitis



client.login('TOKEN');

/** @format
 *
 * Arrkiii By Ozuma xd
 * © 2024 Arrkiii Development
 *
 */

const {
  EmbedBuilder,
  MessageFlags,
  ButtonBuilder,
  ActionRowBuilder,
  ButtonStyle,
  StringSelectMenuBuilder,
  StringSelectMenuOptionBuilder,
  ComponentType,
} = require("discord.js");

module.exports = {
  name: "team",
  category: "Information",
  aliases: ["team"],
  description: "See information about this project.",
  args: false,
  usage: "",
  owner: false,
  cooldown: 3,
  execute: async (message, args, client, prefix, interaction) => {
    const ozuma = await client.users.fetch(`803285289358983199`);
    const roke = await client.users.fetch(`937253889252675696`);

    const embedt = new EmbedBuilder()
      .setAuthor({
        name: `${client.user.username}\`'s Team`,
        iconURL: client.user.displayAvatarURL({ dynamic: true, size: 2048 }),
      })
      .setDescription(
        `> ***[${message.author.username}](https://discord.com/users/${message.author.id})*** ***Konichiwa!!*** ***Our Bot Is A Versatile And Intelligent Digital Assistant Designed To Handle A Wide Range Of Tasks And Interactions.*** <:Heart_Red_AE:1388117805404127282>`,
      )
      .setImage(client.config.links.arrkiii)
      .setColor(client.color)
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
      .setFooter({
        text: client.config.links.power,
        iconURL: message.author.displayAvatarURL({ dynamic: true }),
      });

    const row = new ActionRowBuilder().addComponents([
      new ButtonBuilder()
        .setStyle(ButtonStyle.Secondary)
        .setCustomId("1")
        .setEmoji("1127607405061079061"),
    ]);

    const devsbaby = new ActionRowBuilder().addComponents(
      new StringSelectMenuBuilder()
        .setCustomId("teamm")
        .setPlaceholder("Moon development <3")
        .addOptions([
          {
            label: `parth6866`,
            value: `parth6866`,
            description: "Info About My Developer!",
            emoji: `1169971284332003440`,
          },
            {
            label: `het9999`,
            value: `het9999`,
            description: "Info About My Co Owner",
            emoji: `1242053801016299520`,
          },
        ]),
    );
    const msg = await message.channel.send({
      embeds: [embedt],
      components: [devsbaby],
    });
    const collector = await msg.createMessageComponentCollector({
      filter: (i) => {
        if (message.author.id === i.user.id) return true;
        else {
          i.reply({
            content: `${client.emoji.cross} | That's not your session run : \`${prefix}team\` to create your own.`,
            ephemeral: true,
          });
        }
      },
      time: 100000,
    });
    const oembed = new EmbedBuilder()
      .setThumbnail(ozuma.displayAvatarURL())
      .setAuthor({
        name: "Info About Toto",
        iconURL: message.guild.iconURL({ dynamic: true, size: 2048 }),
      })
      .setFooter({
        text: `Thanks For Using Me <3`,
        iconURL: message.author.displayAvatarURL(),
      })
      .setDescription(
        `> <:Owners:1199282508269879346> **__Developer__**\n> - [@parth6866](https://discord.com/users/803285289358983199)\n> **ID:** \`-\` 803285289358983199\n\`\`\`ㅤ\`\`\`\n> <:links:1188351754128080957> **__Social Medias ↓__**\n\n> <:Insta:1196715538773180478> __[Insta!](https://www.instagram.com/ozuma_xd/)__\n> <:Snap:1196715534587281438> __[Snap!](https://www.snapchat.com/add/ozuma_xd)__\n> <:config:1127607954561056768> __[Support!](${client.config.links.support})__`,
      )
      .setImage(
        "https://media.discordapp.net/attachments/1356252196093821162/1387815991894872094/IMG_0753.png?ex=685f609c&is=685e0f1c&hm=677fde4812ab90536c6a0e6514374beabd2b8b157f364b3ead85331dca463b91&=&format=webp&quality=lossless&width=1867&height=350",
      )
      .setColor("#2f3136")
      .setTimestamp();
  
    const rembed = new EmbedBuilder()
      .setThumbnail(roke.displayAvatarURL())
      .setAuthor({
        name: "Info About Het",
        iconURL: message.guild.iconURL({ dynamic: true, size: 2048 }),
      })
      .setFooter({
        text: `Thanks For Using Me <3`,
        iconURL: message.author.displayAvatarURL(),
      })
      .setDescription(
        `> <:Owners:1199282508269879346> **__Owner?__**\n> - [@het9999](https://discord.com/users/937253889252675696)\n> **ID:** \`-\` 937253889252675696\n\`\`\`ㅤ\`\`\`\n> <:links:1188351754128080957> **__Social Medias ↓__**\n\n> <:Insta:1196715538773180478> __[Insta!](https://www.instagram.com/hetwaslost/)__\n> <:Snap:1196715534587281438> __[Snap!](https://www.snapchat.com/add/hetp2610)__\n> <:config:1127607954561056768> __[Support!](${client.config.links.support})__`,
      )
      .setImage(
        "https://media.discordapp.net/attachments/1356252196093821162/1387812796686930000/image.jpg?ex=685f5da3&is=685e0c23&hm=384643b35c3354f03c1b034673cd137e9a47419db8bafc32c53999c8f6b25f87&=&format=webp&width=1867&height=350",
      )
      .setColor("#2f3136")

    collector.on("collect", async (i) => {
      if (i.isStringSelectMenu()) {
        for (const value of i.values) {
          if (value === ozuma.username) {
            return i.update({ embeds: [oembed], components: [devsbaby, row] });
          }
          if (value === roke.username) {
            return i.update({ embeds: [rembed], components: [devsbaby, row] });
          }
          if (value === ayush.username) {
            return i.update({ embeds: [aembed], components: [devsbaby, row] });
          }
            if (value === roke.username) {
            return i.update({ embeds: [rembed], components: [devsbaby, row] });
          }
        }
      }
      if (i.isButton()) {
        if (i.customId === "1")
          await i.update({ embeds: [embedt], components: [devsbaby] });
      }
      {
        if (i.customId === "2")
          await i.update({ embeds: [oembed], components: [devsbaby] });
      }
    });
    collector.on("end", async (i) => {
      if (!msg) return;
      msg.edit({
        embeds: [embedt],
        components: [],
        content: `<a:simpers_cheers:1194607806893015081> | Team commands timed out. Run \`${prefix}Team\` again.`,
      });
    });
  },
};

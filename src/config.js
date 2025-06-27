/** @format */

module.exports = {
  token:
    "MTM4MjI0Nzc4MDA5NzA2OTEzNw.GCqlXk.9vBv9WaajKHd9RMsZAa59YclvuwPQIzKu8KT-E",
  prefix: ">",
  ownerID: "937253889252675696",
  SpotifyID: "85aab1d51a174aad9eed6d7989f530e6",
  SpotifySecret: "b2ad05aa725e434c88776a1be8eab6c2",
  mongourl:
    "mongodb+srv://codex-us2:codex-us2@codex-us2.62zm1.mongodb.net/?retryWrites=true&w=majority&appName=codex-us2",
  embedColor: "#2f3136",
  logs: "1374956285480407070",
  node_source: "ytsearch",
  topgg:
    "https://top.gg/bot/1033496708992204840/vote",
  links: {
    BG: "https://cdn.discordapp.com/attachments/1061636453437804544/1186002755924525166/20231217_232106.jpg",
    support: "https://discord.gg/urV9mkfW9t",
    invite:
      "https://discord.com/api/oauth2/authorize?client_id=1033496708992204840&permissions=824671333721&scope=bot",
    arrkiii:
      "https://media.discordapp.net/attachments/1356252196093821162/1387780054666317884/IMG_0744.gif?ex=685f3f24&is=685deda4&hm=fd3bd8f8e986a57bf3516bb6b6cf8381376d2e7294d55d7207cdd51c38195efe&=&width=515&height=66",
    power: "Powered By ForceX Development 🌙",
    vanity: "https://discord.gg/tyQ3aDVgaP",
    guild: "1365702811165392966",
    topgg: "https://top.gg/bot/1033496708992204840/vote",
  },
  Webhooks: {
      black: "",
    player_create:
      "",
    player_delete:
      "",
    guild_join:
      "",
      guild_leave: "",
    cmdrun:
 "",
  },

  nodes: [
  {
    url: "lava-v4.ajieblogs.eu.org:443",
    name: "Lavalink",
    auth: "https://dsc.gg/ajidevserver",
    secure: true,
  },
],
};

function parseBoolean(value) {
  if (typeof value === "string") {
    value = value.trim().toLowerCase();
  }
  switch (value) {
    case true:
    case "true":
      return true;
    default:
      return false;
  }
}

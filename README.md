# bedbot
A Minecraft Web Socket Server interacting with Discord.

## Repository goal
This repository rose out of some Discord chat related to the possibilities
available from Web Socket servers in Minecraft, and whether it was possible
to save the chat from Minecraft. After a little bit of discussion, the idea
of "storing" the chat into a Discord channel was mentioned, and also the
idea of checking for various Player events arose.

Current goal for _bedbot_ is therefore to list any chat messages it can
see to a Discord channel, and for starters also list any player related
events like join, leave or being killed. In due time it _might_ also allow
for messages to be sent back to Minecraft, and some commands related to
handling the bot and/or the connections.

## Building blocks
To get the show running a lot of googling occurred, and a choice of which
modules/libraries to use was made. Currently _bedbot_ is written in javascript, utilising the [ws](https://www.npmjs.com/package/ws) and [discord.js](https://www.npmjs.com/package/discord.js) libraries from [node.js](https://nodejs.org/). The prime example for _bedbot_ is the _guidebot_, and much of the structure and initial code comes from that bot.

### Discord
* [Discord Developers applications](https://discordapp.com/developers/applications/)
* [Discord.js](https://discord.js.org/#/docs/main/stable/general/welcome) – A node.js library to help build discord bots
  * [Discord server for Discord.js](https://discord.gg/bRCvFy9) – The discord server to discuss stuff related to `discord.js`. See also `#useful-servers` within this Discord
* [An Idiots Guide](https://anidiots.guide/) – A guide to build a discord bot from scratch utilising `discord.js`
  * [Github source of documentation](https://github.com/AnIdiotsGuide/discordjs-bot-guide)
  * [Github source of guidebot](https://github.com/AnIdiotsGuide/guidebot)
  * [Discord server for An Idiots Guide](https://discord.gg/4NE4bk7)
* Some other Discord related links
  * [Building a Discord bot with Node.js and Repl.it](https://www.codementor.io/garethdwyer/building-a-discord-bot-with-node-js-and-repl-it-mm46r1u8y) – A discord bot within repl.it
  * [Markus Rost discord-wiki-bot](https://github.com/Markus-Rost/discord-wiki-bot) – The bot used by the Minecraft Gamepedia Wiki
  * [leovoel's Embed Visualizer](https://leovoel.github.io/embed-visualizer/) – The wiki-bot uses embeds to better show of some stuff, and this is a visualizer to help build an embed

### Web socket
* [Web Sockets, Huge potential, currently unusable](https://www.reddit.com/r/MCPE/comments/5qf4ah/websockets_huge_potential_currently_unusable/) by Matt Jocopa – One of the first to utlise the Web Socket for Minecraft
* [A Web Socket Library](https://www.npmjs.com/package/ws) – A Web Socket library written in nodejs.
* [An echo service for Web Socket](https://www.websocket.org/echo.html)
* [A start to build World Edit for bedrock](https://github.com/The-HeX/minecraft-worldedit-bedrock) – The name promises a lot, but this github repository does show a way to build commands and events in C#.
* Some various tidbits
  * [SupremeMortals's link to available commands](https://hastebin.com/afekusekud.php)
  * [An event list](https://hastebin.com/oconuwavuq.rb) and [another event list](https://hastebin.com/uxoyidixoh.cpp)
  * If you’re on Windows, you need to enable Minecraft to be able to do loopbacks, and this is done using the mysterious command in an elevated cmd prompt: `CheckNetIsolation LoopbackExempt -a -n=microsoft.minecraftuwp_8wekyb3d8bbwe`. See https://docs.microsoft.com/en-us/windows/iot-core/develop-your-app/loopback for a little more information on this topic, if needed.  Or https://www.reddit.com/user/ProfessorValko/comments/9f438p/bedrock_dedicated_server_tutorial/ for an interesting tutorial on how to start the bedrock dedicated server (or BDS).

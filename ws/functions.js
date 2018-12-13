module.exports = (client) => {
  /*
  McInstance SETTINGS FUNCTION
  This function merges the default settings (from config.defaultSettings) with any
  mcinstance override you might have for particular mcinstance. If no overrides are present,
  the default settings are used.
  */
  client.getSettings = (mcinstance) => {
    const defaults = client.config.defaultSettings || {};
    if (!mcinstance) return defaults;
    const mcinstanceData = client.settings.get(mcinstance) || {};
    const returnObject = {};
    Object.keys(defaults).forEach((key) => {
      returnObject[key] = mcinstanceData[key] ? mcinstanceData[key] : defaults[key];
    });
    return returnObject;
  };



  client.loadCommand = (commandName) => {
    try {
      client.logger.log(`Loading Web Socket Command: ${commandName}`);
      const props = require(`../wscommands/${commandName}`);
      if (props.init) {
        props.init(client);
      }
      client.commands.set(props.help.name, props);
      props.conf.aliases.forEach(alias => {
        client.aliases.set(alias, props.help.name);
      });
      return false;
    } catch (e) {
      return `Unable to load web socket command ${commandName}: ${e}`;
    }
  };

  client.unloadCommand = async (commandName) => {
    let command;
    if (client.commands.has(commandName)) {
      command = client.commands.get(commandName);
    } else if (client.aliases.has(commandName)) {
      command = client.commands.get(client.aliases.get(commandName));
    }
    if (!command) return `The web socket command \`${commandName}\` doesn"t seem to exist, nor is it an alias. Try again!`;

    if (command.shutdown) {
      await command.shutdown(client);
    }
    const mod = require.cache[require.resolve(`../wscommands/${commandName}`)];
    delete require.cache[require.resolve(`../wscommands/${commandName}.js`)];
    for (let i = 0; i < mod.parent.children.length; i++) {
      if (mod.parent.children[i] === mod) {
        mod.parent.children.splice(i, 1);
        break;
      }
    }
    return false;
  };
};

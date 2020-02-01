require('dotenv/config');
const { Client, Collection } = require("discord.js");
const { readdir, lstatSync } = require("fs");

const client = new Client();
client.cmds = new Collection();
client.aliases = new Collection();

client.on('ready', () => console.log('bot online !')

const carregarComandos = module.exports.carregarComandos = (path = './commands') => {
    readdir(path, (error, files) => {
        if(error) console.log(error);
        for (const file of files) {
            console.log(`Atualmente no arquivo: ${file}`);
            if(lstatSync(`${path}/${file}`).isDirectory()) {
                carregarComandos(`${path}/${file}`);
            } else {
                if(file.endsWith('.js') {
                    const command = require(`${path}/${file}`);
                    client.cmds.set(command.help.name, command);
                    if(command.info.aliases && command.info.aliases.length) {
                        for (const alias of command.info.aliases) {
                            client.aliases.set(alias, command);
                        };
                    };
               };
            };
        };
    });
};

client.on('message', message => {
    if (message.author.bot) return;
    if (message.content.indexOf(process.env.PREFIX) !== 0) return;
    if (message.channel.type != 'text') return; 
    
    const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    const cmdParaExecutar = client.cmds.get(cmd) || client.aliases.get(cmd);
    
    if (cmdParaExecutar) 
        cmdParaExecutar.run(client, message, args);
});

client.login(process.env.TOKEN);

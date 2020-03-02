require('dotenv/config'); // Para que o process.env possa ser usado 
const { Client, Collection } = require('discord.js');
const { readdir, lstatSync } = require('fs');
const client = new Client();

// Essa é a array onde vão estar salvos os comandos.
client.commands = [];

client.on('ready', () => {
    console.log(`Logado no usuário: ${client.user.tag}`);
});

// Cria a função dentro do this, assim ela poderá ser chamada dentro da função.
const carregarComandos = (path = './commands') => {
    readdir(path, (error, files) => {
        if(error) 
            return console.log(error);
        for (const file of files) {
            console.log(`Atualmente no arquivo: ${file}`);
            if(lstatSync(`${path}/${file}`).isDirectory()) {
                carregarComandos(`${path}/${file}`);
            } else {
                if(file.endsWith('.js')) {
                    const command = require(`${path}/${file}`);
                    client.commands.push(command);
                    console.log(`${command.info.name} carregado!`);
               };
            };
        };
    });
};
carregarComandos();

client.on('message', message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(process.env.PREFIX)) return;
    if (message.channel.type != 'text') return; 
    
    // Remove o prefix da mensagem, e separa ela em um array pelos espaços. Por exemplo '!comando oi tudo bom', seria: ['comando', 'oi', 'tudo', 'bom']
    const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/g);
    // Só lembrando, mas a função shift() remove o primero elemento do Array e retorna ele !
    const cmd = args.shift().toLowerCase();
    // Utilizando find, é feita uma busca pelo comando dentro dos aliases ou pelo name.
    const cmdParaExecutar = client.commands.find(command => command.info.name === cmd || command.info.aliases.includes(cmd));
    
    if (cmdParaExecutar) 
        cmdParaExecutar.run(client, message, args);
});

client.login(process.env.TOKEN);

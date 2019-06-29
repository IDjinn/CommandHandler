const { Client, Collection } = require("discord.js");
const { readdir, lstatSync } = require("fs");
const { token, prefix } = require("./config.json");
const client = new Client();

client.cmds = new Collection();
client.aliases = new Collection();

const LerDiretorio = module.exports = (diretorio = "./commands/") => {
    readdir(diretorio, (erro, arquivos) => {
        if (erro) return console.log(erro)
        arquivos.forEach((arquivo) => {
            if (lstatSync(`./${diretorio}/${arquivo}`).isDirectory()) {
                LerDiretorio(`./${diretorio}/${arquivo}`)
            } else if (arquivo.endsWith(".js")) {
                const props = require(`./${diretorio}/${arquivo}`)
                if (!props || !props.info.name || !props.info.aliases || !props.run) {
                    console.log(`Não foi possível carregar o comando ${arquivo.split(".")[0]} pois há alguma propiedade faltando.`)
                    return;
                }

                client.cmds.set(props.info.name, props)
                client.aliases.forEach((alias) => {
                    client.aliases.set(alias, props)
                })
                console.log(`Comando ${props.info.name} e seus ${props.info.aliases.length} aliases salvos.`)
            }
        })
    })
}
LerDiretorio();

/*
Todo arquivo de comando deve seguir o seguinte padrão:

module.exports.run = (client, message, args) => {
~ código do comando aqui ~
}

module.exports.info = {
    name: "nome do comando"
    aliases: ["outro meio de chamar o comando"]
}
*/

client.on("message", async message => {
    if (message.author.bot) return;
    if (message.content.indexOf(prefix) !== 0) return;
    if(message.channel.type != 'text') return; // opcional: vai ignorar todos os comandos que não forem executados em canais de texto
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    const cmdParaExecutar = client.cmds.get(cmd) || client.aliases.get(cmd)
    if(cmdParaExecutar != null) cmdParaExecutar.run(client, message, args)
})

client.login(token)

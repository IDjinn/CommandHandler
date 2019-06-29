module.exports.run = (client, message, args) => {
    message.channel.send(Math.round(client.ping))
}

module.exports.info = {
    name: "ping",
    aliases: ["latencia"]
}

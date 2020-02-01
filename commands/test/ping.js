module.exports.run = (client, message, args) => {
    message.channel.send(~~client.ping);
};

module.exports.info = {
    name: "ping",
    aliases: ["latencia"]
};

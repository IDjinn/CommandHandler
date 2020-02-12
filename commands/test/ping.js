module.exports = {
    run: (client, message, args) => {
       message.channel.send(`🏓 Pong ! ${~~client.ping}ms.`)
    },
    info: {
        name: 'ping',
        aliases: ['pingpong']
    }
}

### HandlerBasico

- Capaz de reconher arquivos de comando mesmo que eles estejam em outros diretorios dentro de "commands";

#### Modelo dos comandos:
```javascript
module.exports.run = (client, message, args) => {
// código do comando aqui
}
module.exports.info = {
    name: "nome do comando",
    aliases: ["outro meio de chamar o comando"] // opcional
}
```
###### Feito com amor e javascript por [Torres#0001 (597098946871164929)](https://discordapp.com/users/505096421532368907 "kubi#0001 (597098946871164929)")

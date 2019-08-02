### HandlerBasico

- Handler de comandos para bots do discord feitos em javascript, é possível separa-los em sub-pastas dentro da pasta "commands" se for de seu desejo

#### Modelo dos comandos:
```javascript
module.exports.run = (client, message, args) => {
// código do comando aqui
}
module.exports.info = {
    name: "nome do comando",
    aliases: ["outro meio de chamar o comando"]
}
```
Caso esse modelo não seja seguido você provavelmente verá no console a mensagem "Não foi possível carregar o comando x pois ou não há ou falta propiedades." sendo x o nome do arquivo.

###### Feito com amor e javascript por [kubi#0001 (505096421532368907)](https://discordapp.com/users/505096421532368907 "kubi#0001 (505096421532368907)")

### HandlerBasico

- Capaz de reconher arquivos de comando mesmo que eles estejam em outros diretorios dentro de "commands"

- Capaz de reconher o nome e os aliases do comando mesmo que eles não estejam dentro do objeto "info" do arquivo do comando.

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
Caso não haja em algum objeto que o modulo exporta o nome do comando, você verá um erro no console
###### Feito com amor e javascript por [kubi#0001 (505096421532368907)](https://discordapp.com/users/505096421532368907 "kubi#0001 (505096421532368907)")

### HandlerBasico

- Capaz de reconher arquivos de comando mesmo que eles estejam em outros diretorios dentro de "commands";
### Como usar
- Clone o repositório:
    ``` 
    $ git clone https://github.com/migueltsantos/HandlerBasico.git
    ```
- Apague o .example do arquivo .env.example e coloque o seu token e o seu prefix
- Instale as depêndencias:
    ```
    $ npm install
    ```
- Crie arquivos de comandos seguindo o modelo dos comandos.
#### Modelo dos comandos:
```javascript
module.exports.run = (client, message, args) => {
    // código do comando aqui
}
module.exports.info = {
    name: 'modo para chamar o comando',
    aliases: ['outro modo'] // opcional
}
```
###### Feito com amor e javascript por [Torres#0001 (597098946871164929)](https://discordapp.com/users/505096421532368907 "kubi#0001 (597098946871164929)")

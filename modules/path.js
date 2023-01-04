const path = require('path')

//Retorna o nome do arquivo atual
console.log('Nome do arquivo:',path.basename(__filename))

//Retorna o diretorio em que o arquivo atual se encontra.
console.log('Diretorio do arquivo:', path.dirname(__filename))

//Retorna a linguagem ou extensão que o arquivo está sendo escrito (no nosso caso JavaScript ou seja .js)
console.log('Extensão ou linguagem do arquivo:', path.extname(__filename))

//Cria um objeto com as informações do arquivo atual
console.log("Criar um objeto com as informações do arquivo atual:", path.parse(__filename))

//Junta caminhos e a cada virgula é uma barra diferente e é adicionado caminhos diferentes.
console.log('Juntar caminho de arquivos:', path.join(__dirname,'test','index.html'))
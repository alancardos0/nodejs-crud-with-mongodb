const fs = require('fs')
const path = require('path')

//o mkdir ele cria uma pasta e o dirname ele é o local onde se encontra o
// arquivo que eu estou mexendo no momento
// o mkdir recebe então o dirname, o nome da pasta que eu quero criar
// e uma função de callback porque na segunda vez que for executada
// vai estourar um erro porque a pasta já foi criada.

fs.mkdir(path.join(__dirname,'/test'),(error) =>{
  if(error){
    return console.log(`Ocorreu um erro: ${error}`)
  }
  console.log('Pasta criada com sucesso!')
})

//o writeFile ele cria um arquivo dentro do diretorio especificado
//nele vai o diretorio, nome do arquivo, conteudo e uma função de callback
//para exibir caso de algum error 
fs.writeFile(path.join(__dirname,'/test','index.csv'), 'hello node', (error) =>{
  if(error){
    return console.log('Ocorreu um erro:', error)
  }
  console.log('Pasta e arquivo criado com sucesso')
})

//o appendFile ele adiciona o que eu quiser colocar dentro do arquivo criado
// com o writeFile a diferença é que eu não vou sobrescrever o que já existe
// e sim adicionar ao arquivo.
fs.appendFile(path.join(__dirname,'/test','index.csv'),' olá node', (error) =>{
  if(error){
    return console.log(error)
  }
  console.log("Texto adicionado com sucesso!")
})


// o readFile serve para mim ler algum arquivo.
fs.readFile(path.join(__dirname,'/test','index.csv'),'utf-8',(error,data) =>{
  if(error){
    return console.log('Ocorreu um erro: ', error)
  }
  console.log(data)
})
const mongoose = require('mongoose')

const connectToDatabase = async () =>{
  await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.sku0x85.mongodb.net/?retryWrites=true&w=majority`, (error) =>{
    if(error){
      return console.log('Ocorreu um erro ao se conectar ao banco de dados', error)
    }
    console.log('Conexão com o banco de dados feita com sucesso')
  })
}

module.exports = connectToDatabase
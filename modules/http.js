const http = require('http')

const port = 8080

const server = http.createServer((req,res) =>{
  if(req.url === '/home'){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.end("<h1>Hello World!</h1>")
  }
  if(req.url ==='/users'){
    const users = [
      {
        name:'Alan',
        age:18
      },
      {
        name:'Tatiane',
        age:95
      }
    ]
    res.writeHead(200,{'Content-Type':'application/json'})
    res.end(JSON.stringify(users))
  }
})

server.listen(port,() => console.log('Server rodando na porta 8080'))
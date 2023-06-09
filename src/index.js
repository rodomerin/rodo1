import express from 'express'

const app = express()

app.get('/', (req,res)=>{
    res.send('<h1>Bienvenido, este es mi primer despliege de node a internet</h1>')
    
})

app.get('/about', (req,res)=>{
    res.send('<h1>Soy un loco que esta aprendiendo de forma autodidacta</h1>') 
    
})
app.listen(3000)

console.log("server on port", 3000)
const express = require('express')
const cors = require('cors')
const app = express()
const port =  process.env.PORT || 5000;

//middleware

app.use(cors())
app.use(express.json())


const uri = `mongodb+srv://<db_username>:<db_password>@cluster0.u675lb8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

app.get('/', (req, res)=>{
    res.send('Coffee maker is running')
})


app.listen(port, ()=>{
    console.log(`Coffee server is running on prot: ${port}`)
})
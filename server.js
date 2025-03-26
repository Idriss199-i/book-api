const express = require('express')
const dataBase = require('./confi/db')
const bookroutes = require('./routes/bookroutes_temp')
const authorsRoutes = require('./routes/authors')
const userRoutes = require('./routes/useroutes')
const port = 4000
const app = express()

app.use(express.json())
require('dotenv').config()



// Connecter à la base de données
dataBase()
app.use('/api/books', bookroutes )
app.use('/api/authors', authorsRoutes)
app.use('/api/user', userRoutes);


app.listen(port, () => {
    console.log({message: `Le server est en ligne`})
})

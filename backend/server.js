const express = require('express')
const colors = require('colors')
const dotenv = require("dotenv").config()
const connectDB = require("./config/db")
const cors = require('cors')
const port = process.env.PORT || 5000
const { errorHandler } = require("./middleware/errorMiddleware")


connectDB()

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/hechizos', require("./routes/hechizosRoutes"))
app.use('/api/clases', require("./routes/clasesRoutes"))
app.use('/api/characters', require("./routes/characterRoutes"))

app.use(errorHandler)

app.listen(port, () => console.log(`Servidor iniciado en el puerto ${port}`))


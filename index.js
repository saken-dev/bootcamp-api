const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const connectDB = require('./config/database')
const colors = require('colors')
const errorHandler = require('./middleware/error')

dotenv.config({ path: './config/config.env'})
const port = process.env.PORT || 3000

connectDB()

const bootcampRouter = require('./routes/bootcampRoutes')

const app = express()

app.use(express.json())

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

app.use('/api/v1/bootcamps', bootcampRouter)

app.use(errorHandler)

const serverListen = app.listen(port, () => {
    console.log(`App listening on port ${port}, app work on ${process.env.NODE_ENV} mode`.yellow.bold);
})

process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err}`.red)
    serverListen.close(() => process.exit(1))
})
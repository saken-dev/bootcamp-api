const moongoose = require('mongoose')

const connectDB = async() => {
    const connect = await moongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
    console.log(` MongoDB connected ${connect.connection.host}`.blue.underline)
}
                                                                 
module.exports = connectDB
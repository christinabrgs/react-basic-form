const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.URI)
        console.log(`database connected:
            host ${connect.connection.host}
            name ${connect.connection.name}
        `)
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDB;
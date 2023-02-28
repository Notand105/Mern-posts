import connectDb from './DataBase/db.js'
import { PORT } from './config.js'
import app from './app.js'

connectDb()
app.listen(PORT)


console.log('server running on port ', PORT)
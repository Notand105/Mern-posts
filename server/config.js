import dotenv from 'dotenv'

dotenv.config()

export const MongoUri = process.env.MONGODB_URI

export const PORT = process.env.PORT || 3000
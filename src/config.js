import { config } from "dotenv"

config();

export default {
    port: process.env.PORT || 3000,
    dbUser: process.env.DB_USER || '',
    dbPassword: process.env.DB_PASSWORD || '',
    dbServer: '192.168.0.177' || '',
    dbDatabase: process.env.DB_DATABASE || ''
}
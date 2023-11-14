import { config } from "dotenv"

config();

export default {
    port: process.env.PORT || 3000,
    dbUser: 'lautaro.quevedo' || '',
    dbPassword: 'Laucha2012!' || '',
    dbServer: '192.168.0.177' || '',
    dbDatabase: 'progressaluminio' || ''
}
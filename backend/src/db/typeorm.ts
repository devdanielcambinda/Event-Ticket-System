import { DataSource } from "typeorm";
import path from 'path'

import * as dotenv from 'dotenv'
dotenv.config({ path: path.join(__dirname, "../config/.env") })

const typeorm = new DataSource({
    type: "postgres",
    host: "localhost",
    port: parseInt(process.env.DBPORT!),
    username: process.env.DBUSERNAME,
    password: process.env.DBPASSWORD,
    database: "event-tickets",
    entities: [`${path.join(__dirname, "../entity/*.entity.ts")}`],
    synchronize: true
})


export {
    typeorm
}
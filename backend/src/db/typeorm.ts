import { DataSource } from "typeorm";
import path from 'path'

import * as dotenv from 'dotenv'
dotenv.config({ path: path.join(__dirname, "../../config/.env") })

export const typeorm: DataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: +process.env.DBPORT!,
    username: process.env.DBUSERNAME,
    password: process.env.DBPASSWORD,
    database: "event-tickets",
    entities: [`${path.join(__dirname, "../entity/*.entity.ts")}`],
    synchronize: true
})
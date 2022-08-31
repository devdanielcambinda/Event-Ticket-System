import path from 'path'
import * as dotenv from 'dotenv'
import app from "./app";

type PortType = number | string
dotenv.config({ path: path.join(__dirname, "../config/.env") });

const port: PortType = process.env.PORT || 3006

app.listen(port, ()=>{
    console.log(`App running on port ${port}`)
})
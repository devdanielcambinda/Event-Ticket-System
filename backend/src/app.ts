import path from "path";
import * as dotenv from "dotenv";
import express, {Request,Response} from "express";
import cors from 'cors'
import session from 'express-session'
import passport from './passport/passport'
import notFoundRoute from "./routes/notFoundRoute";
import { typeorm } from "./db/typeorm";
import { User } from "./entity/user.entity"

dotenv.config({ path: path.join(__dirname, "../config/.env") });

typeorm.initialize()
.then(()=>{
  console.log("Ligação a funfar")
})
.catch(()=>{
  console.log("Erro na ligação")
})

const app = express()

app.use(cors());
app.use(express.json());
app.use(
  session({
    name: "sessionCookie",
    secret: process.env.SESSION_SECRET! ,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: false,
      maxAge: 1000 * 60 * 60, // 1 hora
      sameSite: "strict",
    },
  })
);

app.get('/users', async (req: Request,res: Response)=> {
    try{
        const users = await typeorm.getRepository(User).find()
        return res.json(users)
    }catch (e) {
        return res.status(404).json(req.body)
    }
})

app.post('/user', async (req:Request, res:Response)=>{
    try{
        const user: User[] = typeorm.getRepository(User).create(req.body)
        const result: User[] = await typeorm.getRepository(User).save(user)
        return res.send(result)
    }catch (e) {
        return res.status(400).send(e)
    }
})

app.post('/user/login',passport.authenticate('local'), async (req:Request, res:Response) => {
    res.send(req.user)
})

app.use(passport.initialize());
app.use(passport.session());

// app.use("/user");
// app.use('/ticket')
// app.use('/event')
app.use('*', notFoundRoute)
export default app

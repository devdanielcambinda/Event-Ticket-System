import path from "path";
import * as dotenv from "dotenv";
import express from "express";
import cors from 'cors'
import session from 'express-session'
import passport from 'passport'
import notFoundRoute from "./routes/notFoundRoute";

dotenv.config({ path: path.join(__dirname, "../config/.env") });

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

app.use(passport.initialize());
app.use(passport.session());

// app.use("/user");
// app.use('/ticket')
// app.use('/event')
app.use('*', notFoundRoute)
export default app

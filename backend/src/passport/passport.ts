import {Strategy} from "passport-local";
import passport from "passport";
import {User} from '../entity/user.entity'
import {typeorm} from "../db/typeorm";

passport.use(
    new Strategy({usernameField:'email', passwordField:'password'}, async function (email, password, done) {
        try {
            const user: User | null = await typeorm.getRepository(User).findOne({
                where: {
                    email,
                }
            });

            if ( !user) {
                return done(null, false, { message: "Password and/or email incorrect" });
            }

            const passVal: boolean = await  user.isValidPassword(password);
            if(!passVal){
                return done(null, false, { message: "Password e/ou email incorreto(s)." });
            }

            return done(null, user);
        } catch (err) {
            return done(err);
        }
    })
);

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user: User, done) {
    typeorm.getRepository(User).findOne({where: {id: user.id}}).then(function (user) {
        done(null, user);
    });
})

export default passport
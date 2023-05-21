import React from "react"
import { useNavigate, useLocation} from "react-router-dom"
import useAuth from "../../../hooks/useAuth";

const Login: React.FC = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const userContext = useAuth();
    const [email, setEmail] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");
    const [loginError, setLoginError] = React.useState<boolean>(false);

    const emailChangeHandler: React.ChangeEventHandler<HTMLInputElement> = ({target}: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(target.value);
    }

    const passwordChangeHandler: React.ChangeEventHandler<HTMLInputElement> = ({target}: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(target.value);
    }

    const submitHandler: React.FormEventHandler<HTMLFormElement> = async ({target,preventDefault}:React.FormEvent<HTMLFormElement>) => {
        preventDefault()

        const result = await fetch("/user/login", {
            method: "POST",
            body: JSON.stringify({
              email,
              password
            }),
            headers: {"Content-Type": "application/json"},
          });
      
          if(result.status === 200) {
            const {user} = await result.json();
            userContext.setUser(user)

            setEmail("");
            setPassword("");
            navigate('/profile')
          }else {
            setLoginError(true)
            setEmail("");
            setPassword("");
          }
    }

    return (
    <div className="container text-center" style={{ maxWidth: 500 }}>
        {loginError && <p style={{"color":"red"}} >Email and&#47;or password incorrect&#40;s&#41; </p>}
        {location.state!.id! === 1 && <p style={{"color":"red"}} >{location.state.message}</p>}
        {location.state!.id! === 2 && <p style={{"color":"green"}} >{location.state.message}</p>}
        <form onSubmit={submitHandler}>
        
            <h2 className="mb-5">Login</h2>
            
            <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form1Example1">Email</label>
                <input type="email" id="form1Example1" className="form-control" value={email} onChange={emailChangeHandler} required/>
            
            </div>
        
            
            <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form1Example2">Password</label>
                <input type="password" id="form1Example2" className="form-control" value={password} onChange={passwordChangeHandler} required/>
            </div>
                
            <button type="submit" className="btn btn-primary btn-block">Login</button>
        </form>
    </div>
    );
}

export default Login;
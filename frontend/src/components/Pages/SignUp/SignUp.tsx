import React from "react";
//import { useNavigate} from "react-router-dom"

const SignUp: React.FC = () => {

    //const navigate = useNavigate();

    const [nome, setNome] = React.useState<string>("");

    const nomeChangeHandler: React.ChangeEventHandler<HTMLInputElement> = ({target}: React.ChangeEvent<HTMLInputElement>) => {
        setNome(target.value);
    }

    const submitHandler: React.FormEventHandler<HTMLFormElement> = async ({preventDefault}:React.FormEvent<HTMLFormElement>) => {
        preventDefault()

        const fd = new FormData()
        fd.append("nome",nome)

    }

    return (

        <div className="container text-center" style={{ maxWidth: 500 }}>
            <form onSubmit={submitHandler}>
            <h2 className="mb-5">Sign up</h2>
            <label className="form-label" htmlFor="form1Example1">Nome</label>
            <input type="text" id="form1Example1" className="form-control" value={nome} onChange={nomeChangeHandler} required/>
            </form>
        </div>
    )
};

export default SignUp;

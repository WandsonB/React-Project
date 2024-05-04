import {FaUser,FaLock} from "react-icons/fa";

import { useState } from "react";

import "./login.css";

const Login = () => {

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()

        console.log("teste", userName, password)

        console.log("Envio")
    }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <h1>Acesse o sistema</h1>
        <div className="input-field">
            <input type="email" placeholder='E-mail' onChange={(ev) => setUserName(ev.target.value)}/>
            <FaUser className="icon"/>
        </div>

        <div className="input-field">
            <input type="password" placeholder='Senha' onChange={(ev) => setPassword(ev.target.value)}/>
            <FaLock className="icon"/>
        </div>

        <div className="recall-forget">
            <label>
                <input type="checkbox" />
                Lembre de mim
            </label>
            <a href="#">Esqueceu a senha?</a>
        </div>

        <button>Entrar</button>

        <div className="signup-link">
            <p>Não tem uma conta? <a href="#">Resgistre-se</a></p>
        </div>

      </form>
    </div>
  )
}

export default Login
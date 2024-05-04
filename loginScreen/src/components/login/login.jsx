import {FaUser,FaLock} from "react-icons/fa";

import { useState } from "react";

import "./login.css";

const Login = () => {

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = () => {
        console.log("Envio")
    }

  return (
    <div className='container'>
      <form action="">
        <h1>Acesse o sistema</h1>
        <div>
            <input type="email" placeholder='E-mail'/>
            <FaUser className="icon"/>
        </div>

        <div>
            <input type="password" placeholder='Senha'/>
            <FaLock className="icon"/>
        </div>

        <div className="recall-forget">
            <label>
                <input type="checkbox" />
                Lembre de mim
            </label>
            <a href="#">Esqueceu a senha?</a>
        </div>

        <div className="signup-link">
            <p>Não tem uma conta? <a href="#">Resgistre-se</a></p>
        </div>


        <button>Entrar</button>
      </form>
    </div>
  )
}

export default Login
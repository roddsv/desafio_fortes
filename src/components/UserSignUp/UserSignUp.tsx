import { Link } from "react-router-dom";
import { useState } from "react";
import "./UserSignUp.css";

const UserSignUp = () => {
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    
    return (
        <main>
            <img className="logo" src="/assets/logo_fortes.svg" alt="Logo Fortes" />
            <form className="form centered">
                <p className="login-header">Cadastro de Usuário</p>
                <div className="field">
                    <input
                        type="text"
                        className="input-field"
                        placeholder="Insira o login"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)} />
                </div>
                <div className="field">
                    <input
                        type="password"
                        className="input-field"
                        placeholder="Insira a senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="btn">                    
                    <button className="login-button">
                        <Link to="/">
                            Cadastrar
                            </Link>
                    </button>
                </div>
            </form>
        </main>
    );
}

export default UserSignUp;
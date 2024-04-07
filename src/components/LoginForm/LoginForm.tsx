import React, { useState } from "react";
import "./LoginForm.css";
import { Link } from "react-router-dom";

const LoginForm: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    return (
        <main>
            <img className="logo" src="/assets/logo_fortes.svg" alt="Logo Fortes" />
            <form className="form centered">
                <p className="login-header">Login</p>
                <div className="field">
                    <input
                        type="text"
                        className="input-field"
                        placeholder="Usuário"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="field">
                    <input
                        type="password"
                        className="input-field"
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="btn">
                    <button className="login-button">Login</button>
                    <button className="login-button">
                        <Link to="/sign_up">
                            Cadastre-se
                            </Link>
                    </button>
                </div>
            </form>
        </main>

    );
};

export default LoginForm;
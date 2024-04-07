import React, { useState } from "react";
import "./LoginForm.css";

const LoginForm: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    return (
        <main>
            <form>
                <p className="login-header">Faça seu login</p>
                <div className="field">
                    <input 
                    type="text"
                    className="input-field"
                    placeholder="Usuário" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div className="field">
                    <input 
                    type="password"
                    className="input-field"
                    placeholder="Senha" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                </div>
            </form>
        </main>

    );
};

export default LoginForm;
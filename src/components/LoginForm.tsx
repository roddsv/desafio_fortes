import React, { useState } from "react";
import "./LoginForm.css";

const LoginForm: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    return (
        <main>
            <form>
                <p className="login-header">Faça seu login</p>
                <div>
                    <input 
                    type="text" 
                    placeholder="Digite o nome de usuário" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div>
                    <input 
                    type="password" 
                    placeholder="Senha" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                </div>
            </form>
        </main>

    );
};

export default LoginForm;
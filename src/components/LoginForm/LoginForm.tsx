import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import api from "../../services/api";
import User from '../../interfaces/User';

import "./LoginForm.css";

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
        const response = await api.get('http://localhost:3001/users');
        const data = response.data;
    
        const user = data.find((user: User) => user.username === username && user.password === password);
        console.log(user)

        if (user) {
          console.log('Login bem sucedido')
          navigate('/users')
        } else {
            setError('Usuário ou senha incorretos');
        }
    } catch (err) {
        setError('Erro ao tentar fazer login');
    }
};
    
    
    return (
        <main>
            <img className="logo" src="/assets/logo_fortes.svg" alt="Logo Fortes" />
            <form onSubmit={handleSubmit} className="form centered">
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
                    <button type="submit" className="login-button cadastro">Login</button>
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
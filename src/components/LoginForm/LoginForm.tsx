import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import axios from "axios";

import "./LoginForm.css";

const LoginForm: React.FC = () => {
    const [username, setUsername] = useState<string>('fortes');
    const [password, setPassword] = useState<string>('senha');
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        try {
          const response = await axios.post<{ success: boolean; token?: string }>(
            'http://localhost:3001/users',
            {
              username,
              password,
            }
          );
    
          if (response.data.success && response.data.token) {
            localStorage.setItem('token', response.data.token);
            navigate('/users');
          } else {
            setError('Login falhou');
          }
        } catch (error) {
          setError('Erro ao fazer login');
        }
    };
    
    
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
                    <button type="submit" className="login-button">Login</button>
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
import {useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./UserSignUp.css";

const UserSignUp = () => {
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post('http:localhost:3001/users', {
                login,
                password,
                dataCadastro: new Date().toISOString()
            });

            if (response.data) {
                navigate('/users');
            }
        } catch (error) {
            setError('Erro no cadastro do usuário');
        }
    };
    
    return (
        <main>
            <img className="logo" src="/assets/logo_fortes.svg" alt="Logo Fortes" />
            <form onSubmit={handleSubmit} className="form centered">
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
                    <button type="submit" className="login-button">
                        <Link to="/users">
                            Cadastrar
                            </Link>
                    </button>
                </div>
            </form>
        </main>
    );
}

export default UserSignUp;
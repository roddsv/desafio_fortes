import { Link } from "react-router-dom";
import { useState } from "react";

import { api } from "../../services/api";

import "./UserSignUp.css";

const UserSignUp = () => {
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [dataCadastro, setDataCadastro] = useState<Date>();
    

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        await api.post('/users', {username: login, password: password, dataCadastro: new Date(Date.now()).toLocaleDateString()})
            .then((response) => console.log(response));
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
                    <input
                        type="hidden"
                        onChange={(e) => setDataCadastro(dataCadastro)} />
                
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
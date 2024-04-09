import { useState, useEffect } from "react";
import User from '../../interfaces/User';
import { api } from "../../services/api";
import { Link } from "react-router-dom";

import './UsersList.css';

const UsersList: React.FC = () => {

    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        
        const fetchUsers = async () => {
            try {
                api.get(`http://localhost:3001/users`)
                    .then((response) => setUsers(response.data));

            } catch (error) {
                console.error('Usuário não encontrado');
            }
        };

        fetchUsers();

    }, []);

    const deleteUser = async (id: string) => {
        try {
            const response = await api.delete(`http://localhost:3001/users/${id}`);
            console.log(response.data);
            const updatedUsers = users.filter(user => user.id.toString() !== id);
            setUsers(updatedUsers);
        } catch (e) {
            setError('Usuário não excluído');
        }
    };


    return (
        <div>
            <h1 className="titulo-lista">Lista de Usuários</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Senha</th>
                        <th>Data de Cadastro</th>
                        <th>Opções</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>{user.password}</td>
                            <td>{user.dataCadastro}</td>
                            <td>
                                <button><Link to={`/users/edit/${user.id}`}>Editar</Link>
                                </button>
                                <span> | </span>  
                                <button onClick={() => {deleteUser(user.id.toString())}}>Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="buttons">
                <button type="submit" className="login-button">
                    <Link to="/">Home</Link>
                </button>
                <button className="login-button">
                    <Link to="/sign_up">Cadastro</Link>
                </button>
            </div>
        </div>
    )
}

export default UsersList;
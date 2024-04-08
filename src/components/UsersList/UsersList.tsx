import axios from "axios";
import { useState, useEffect } from "react";
import User from '../../interfaces/User';
import { api } from "../../services/api";

const UsersList: React.FC = () => {
    
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const users = axios.get(`http://localhost:3001/users`)
                .then((response) => setUsers(response.data));
            
                console.log(users);
            } catch (error) {
                console.error('Usuário não encontrado');
            }
        };

        fetchUsers();
    }, []);

    return(
        <div>
        <h1>Lista de Usuários</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        Login: {user.username}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UsersList;
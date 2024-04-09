import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import User from '../../interfaces/User';
import { api } from '../../services/api';

useState

const UserEdit: React.FC = () => {

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string | null>();
    const navigate = useNavigate();

    const handleSubmit = async (e:React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await api.put(`http://localhost:3001/users/${id}`, {
                username,
                password
            });

            if (response.data) {
                useNavigate('/users');
            }
        } catch (e) {
            setError('Erro ao atualizar usuário.')
        }
    }

    return (
        <div>
          <h1>Editar Usuário</h1>
          {error && <p>{error}</p>}
          <form onSubmit={handleSubmit}>
            <div>
              <label>Username:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Confirmar Alterações</button>
          </form>
        </div>
    );
};


export default UserEdit;
import { useEffect, useState } from 'react';
import api from '../../services/api'
import { useNavigate, useParams } from 'react-router-dom';

import './UserEdit.css';

import User from '../../interfaces/User';

const UserEdit: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [dataCadastro, setDataCadastro] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await api.get<User>(`http://localhost:3001/users/${id}`);
        setDataCadastro(response.data.dataCadastro);
      } catch (e) {
        setError('Usuário não encontrado');
      }
    };

    fetchUser();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await api.put(`http://localhost:3001/users/${id}`, {
        username,
        password,
        dataCadastro
      });

      
      if (response.data) {
        navigate('/users');
      }
    } catch (e) {
      setError('Erro ao atualizar usuário');
    }
  };

  return (
    <div className="container">
      <h1 className="title">Editar Usuário</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <input
          type="hidden"
          value={dataCadastro}
          onChange={(e) => setDataCadastro(dataCadastro)}
        />
        <div className="buttons">
          <button type="submit">Confirmar Alterações</button>
          <button onClick={() => navigate('/users')}>Cancelar</button>
        </div>
      </form>
    </div>
  );
};

export default UserEdit;
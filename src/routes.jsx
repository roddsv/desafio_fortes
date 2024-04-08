import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from './components/LoginForm/LoginForm';
import UserSignUp from './components/UserSignUp/UserSignUp';
import UsersList from './components/UsersList/UsersList';


const RoutesApp = () => { 
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<LoginForm />} />
                <Route path='/sign_up' element={<UserSignUp />} />
                <Route path='/users' element={<UsersList />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RoutesApp;
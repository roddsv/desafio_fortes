import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from './components/LoginForm/LoginForm';
import UserSignUp from './components/UserSignUp/UserSignUp';


const RoutesApp = () => { 
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LoginForm />} />
                <Route path='/sign_up' element={<UserSignUp />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RoutesApp;
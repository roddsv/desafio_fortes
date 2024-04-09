import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from './components/LoginForm/LoginForm';
import UserSignUp from './components/UserSignUp/UserSignUp';
import UsersList from './components/UsersList/UsersList';
import UserEdit from './components/UserEdit/UserEdit';


const RoutesApp = () => { 
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LoginForm />} exact/>
                <Route path='/sign_up' element={<UserSignUp />} exact/>
                <Route path='/users' element={<UsersList />} exact/>
                <Route path="/users/edit/:id" element={<UserEdit exact/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default RoutesApp;
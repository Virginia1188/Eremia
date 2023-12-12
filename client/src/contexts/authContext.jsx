import { createContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import * as authService from '../services/authService';
import usePersistedState from "../hooks/usePersistedState";
import Path from "../paths";


const AuthContext = createContext();

const ADMIN_CODE = 'admin_code';

export const AuthProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [auth, setAuth] = usePersistedState('auth', {});

    const [error, setError] = useState();


    const loginSubmitHandler = async (values) => {

        try {
            const result = await authService.login(values.email, values.password);

            setAuth(result);
            localStorage.setItem('accessToken', result.accessToken);
            navigate(Path.Home);
        } catch (error) {
            setError(error.message)
            // console.log(error.message);
            return error.message
        }

 
    }


    const logoutHandler = () => {
        setAuth({});
        localStorage.removeItem('accessToken');
    }


    const registerSubmitHandler = async (values,errors) => {
        if(values.adminPass !== ''){
            if( values.adminPass !== ADMIN_CODE){
                alert('Invalid verification code. Admin registration not allowed.');
                return;
            }

            if(values.adminPass === ADMIN_CODE){
                values.admin = true;
    
            }
        }

 
        const result = await authService.register(
            values.email,
            values.password,
            values.name,
            values.surname,
            values.studio,
            values.admin,
        );


        setAuth(result);
        localStorage.setItem('accessToken', result.accessToken);
        navigate(Path.Home);
    }


    const values = {
        loginSubmitHandler,
        logoutHandler,
        registerSubmitHandler,
        email: auth.email,
        name: auth.name,
        userId: auth._id,

        isAuthenticated: !!auth.accessToken,
        isAdmin: !!auth.admin,
        error,

    }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;



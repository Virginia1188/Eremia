import * as request from '../lib/request';
import Path from '../paths';

const baseUrl = 'http://localhost:3030/users';

export const login = async (email, password) => {
    const result = await request.post(`${baseUrl}/${Path.Login}`, {
        email,
        password,
    });

    return result;
}


export const logout = () => request.get(`${baseUrl}/${Path.Logout}`)


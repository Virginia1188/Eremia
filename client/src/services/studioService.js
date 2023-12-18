import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/data/studios';

export const getAll = async () => {
    const result = await request.get(baseUrl);
    return Object.values(result);
}


export const create = async (studioData) => {
    if(studioData.name === ''){
        throw new Error('Please fill the empty fields!');
    }
    const result = await request.post(baseUrl, studioData);

    return result;
}

export const getOne = async (studioId) => {
    const result = await request.get(`${baseUrl}/${studioId}`);
    return result;
}

export const remove = async (studioId) => request.remove(`${baseUrl}/${studioId}`);

export const edit = async (studioId, studioData) => {

    const result = await request.put(`${baseUrl}/${studioId}`, studioData)

    return result;
}
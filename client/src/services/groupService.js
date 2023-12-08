import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/data/groups';

export const getAll = async (studioId) => {
    const result = await request.get(baseUrl);
    const myGroups = result.filter(group =>group._studioId === studioId);
    return myGroups;
}


export const create = async (groupData, studioId) => {
    console.log(groupData);
    console.log(studioId);
    const result = await request.post(baseUrl, groupData);
    

    return result;
}

export const getOne = async (groupId) => {
    const result = await request.get(`${baseUrl}/${groupId}`);
    return result;
}
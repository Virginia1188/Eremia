
const buildOptions = (data, isAdmin) => {
    const options = {};
    const token = localStorage.getItem('accessToken');

    if (data) {
        
        options.body = JSON.stringify(data);
        options.headers = {
            'content-type': 'applications/json'
        };

    }

    // if(token && isAdmin){
    //     options.headers = {
    //         ...options.headers,
    //         'X-Admin': token
    //     }
    // }
    
    if (token) {
        options.headers = {
            ...options.headers,
            'X-Authorization': token
        }
    }
    // console.log('from requester', options);
    return options;
}

export const request = async (method, url, data) => {
    const response = await fetch(url, {

        ...buildOptions(data),
        method
    });

    if (response.status === 204) {
        return {};
    }

    const result = await response.json();
    // console.log(result );

    if (!response.ok) {
        console.log('from requester', result);
        throw result;
    }
    // console.log('from requester', result);
    return result;
}

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const remove = request.bind(null, 'DELETE');
export const patch = request.bind(null, 'PATCH');

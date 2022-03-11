import axios from 'axios';

export function createAxios(baseUrl='https://www.thecocktaildb.com/api/json/v1/1/')
{
    return axios.create({
        baseURL: baseUrl,
    })
}

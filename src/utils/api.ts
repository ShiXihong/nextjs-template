import axios from './axios'

export const getTestData = () => axios.get('https://jsonplaceholder.typicode.com/users')

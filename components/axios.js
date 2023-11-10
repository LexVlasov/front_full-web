import axios from 'axios';

const instance = axios.create({
    baseURL:
    process.env.NEXT_PUBLIC_API_URL?process.env.NEXT_PUBLIC_API_URL:
    'http://localhost:4444/',
});

export default instance;
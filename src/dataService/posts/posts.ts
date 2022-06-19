import client from '../client';


const postPath = 'posts';

const getPosts = async () => {
    const response = await client.get(`${postPath}`);
    return response;
}

export{ 
    getPosts
}  
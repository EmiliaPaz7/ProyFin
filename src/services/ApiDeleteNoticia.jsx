import axios from 'axios';

const DeleteNewsPaper = async (newsId) => {
    const apiUrl = `https://api.totalum.app/api/v1/crud/noticias/${newsId}`;
    
    try {
        const response = await axios.delete(apiUrl, {
            headers: {
                'api-key': process.env.REACT_APP_API_KEY,
            },
        });
        
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default DeleteNewsPaper;
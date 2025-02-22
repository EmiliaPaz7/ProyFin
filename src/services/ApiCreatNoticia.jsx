import axios from 'axios';

const CreatPost = async (data) => {
    const apiUrl = 'https://api.totalum.app/api/v1/crud/noticias';

    // Verify that content is not empty (trimmed)
    if (!data.title || data.title.trim() === '') {
        throw new Error('Por favor escriba algo antes de Publicar');
    }
    if (!data.main || data.main.trim() === '') {
        throw new Error('Por favor escriba algo antes de Publicar');
    }

    try {
        // Hacer la solicitud POST a la API
        const response = await axios.post(apiUrl, {
                "user": userId,
                "content": content
            },
            {
                headers: {
                    'api-key': process.env.REACT_APP_API_KEY,
                    'content-type': 'application/json'
                }
            }
        );
        // Retornar la respuesta
        return response.data;
    } catch (error) {
        throw error; // Re-lanzar el error para que se maneje en el componente
    }
};

export default CreatPost;
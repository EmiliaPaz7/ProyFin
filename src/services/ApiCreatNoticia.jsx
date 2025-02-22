import axios from 'axios';

const CreatNewPaper = async (data) => {
    const apiUrl = 'https://api.totalum.app/api/v1/crud/noticias';
    const storedUserId = localStorage.getItem('user') || sessionStorage.getItem('user');

    try {
        const formData = new FormData();
        formData.append('file', data.image);

        const fileUploadResponse = await axios.post('https://api.totalum.app/api/v1/files/upload', formData, {
            headers: {
                'api-key': process.env.REACT_APP_API_KEY,
                'content-type': 'multipart/form-data',
            },
        });
        let profilePictureId = fileUploadResponse.data.data;
        // Hacer la solicitud POST a la API
        const response = await axios.post(apiUrl, {
                user : storedUserId,
                title : data.title,
                main: data.main,
                newsimage: {name:profilePictureId}
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

export default CreatNewPaper;
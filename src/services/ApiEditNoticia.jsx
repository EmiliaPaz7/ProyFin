import axios from 'axios';

const EditNewPaper = async (data) => {
    const apiUrl = `https://api.totalum.app/api/v1/crud/noticias/${data._id}`;

    try {
        if (data.image instanceof File) {
            const formData = new FormData();
            formData.append('file', data.image);

            const fileUploadResponse = await axios.post('https://api.totalum.app/api/v1/files/upload', formData, {
                headers: {
                    'api-key': process.env.REACT_APP_API_KEY,
                    'content-type': 'multipart/form-data',
                },
            });

            // Actualizar con la nueva imagen
            data.image = fileUploadResponse.data.data
        }
        // Hacer la solicitud POST a la API
        const response = await axios.patch(apiUrl, {
            title: data.title,
            main: data.main,
            newsimage: { name: data.image }
        },
            {
                headers: {
                    'api-key': process.env.REACT_APP_API_KEY,
                    'content-type': 'application/json'
                }
            }
        );
        // Retornar la respuesta
        window.location.reload();
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default EditNewPaper;
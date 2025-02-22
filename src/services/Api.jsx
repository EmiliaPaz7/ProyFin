import axios from 'axios';

const Lamados = async (direccion) => {
    const apiUrl = `https://api.totalum.app/api/v1/crud/${direccion}`;
    try {
        const response = await axios.get(apiUrl, {
            headers: {
                'api-key': process.env.REACT_APP_API_KEY
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error al obtener los datos:', error);
        return null;
    }
};
export default Lamados;
import axios from 'axios';

const Register = async (data) => {
    const apiUrl = `https://api.totalum.app/api/v1/crud/users`;
    if (data.registrationCode !== "123456") {
        throw new Error('Clave incorrecta');
    }
    try {
        const response = await axios.post(apiUrl, {
            nombres: data.nombres,
            apellidos: data.apellidos,
            fecha_nacimiento: data.fechaNacimiento,
            genero: data.genero,
            email: data.email,
            telefono: data.telefono,
            direccion: data.direccion,
            ciudad: data.ciudad,
            user: data.usuario,
            password: data.password
        }, {
            headers: {
                'api-key': process.env.REACT_APP_API_KEY,
                'content-type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        throw new Error('Error en la creación del usuario: ' + error.message);
    }
};

export default Register;
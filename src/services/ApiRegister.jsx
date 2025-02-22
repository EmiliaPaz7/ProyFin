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
                'api-key': 'sk-eyJrZXkiOiI2Y2FhODdmMGRmYmEyNTEyNDIxYWM3YTMiLCJuYW1lIjoicHJveWVjdCIsIm9yZ2FuaXphdGlvbklkIjoiY2Zici1ub3RpY2lhcyJ9',
                'content-type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        throw new Error('Error en la creación del usuario: ' + error.message);
    }
};

export default Register;
import Datos from "./ApiDatos";

const Verificación = async (data) => {
    if (!data?.email || !data?.password) {
        throw new Error('Email y contraseña son requeridos');
    }

    try {
        const usuarios = await Datos('users');
        
        // Usar find en lugar de while para buscar el usuario
        const usuario = usuarios.find(user => 
            user.email === data.email && 
            user.password === data.password
        );

        if (!usuario) {
            throw new Error('Credenciales incorrectas');
        }

        // Función auxiliar para manejar el almacenamiento
        const guardarSesion = (storage) => {
            storage.setItem('isLoggedIn', 'true');
            storage.setItem('user', usuario.id);
        };

        // Guardar en el almacenamiento apropiado
        data.rememberMe ? 
            guardarSesion(localStorage) : 
            guardarSesion(sessionStorage);

        window.location.href = '/';

    } catch (error) {
        // Limpiar almacenamiento en caso de error
        [localStorage, sessionStorage].forEach(storage => {
            storage.removeItem('isLoggedIn');
            storage.removeItem('user');
        });
        
        console.error('Error al verificar el usuario:', error);
        throw error;
    }
};

export default Verificación;
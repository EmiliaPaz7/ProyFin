export const getAuthToken = () => localStorage.getItem('token');

export const setAuthToken = (token) => {
    if (token) {
        localStorage.setItem('token', token);
        return true;
    }
    return false;
};

export const removeAuthToken = () => {
    localStorage.removeItem('token');
};

export const isAuthenticated = () => {
    const token = getAuthToken();
    return !!token;
};

export const getAuthHeaders = () => ({
    headers: {
        'Authorization': `Bearer ${getAuthToken()}`,
        'api-key': process.env.REACT_APP_API_KEY
    }
});
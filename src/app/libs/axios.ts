import axios from 'axios';

const instance = axios.create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Intercepteur pour les requêtes
instance.interceptors.request.use(
    (config) => {
        // Vous pouvez ajouter des headers personnalisés ici si nécessaire
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Intercepteur pour les réponses
instance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // Gérez les erreurs globales ici
        console.error('Erreur Axios:', error);
        return Promise.reject(error);
    }
);

export default instance;
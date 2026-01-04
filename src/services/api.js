import axios from 'axios';

// Configuration de base
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Intercepteur pour ajouter le token si disponible
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Token ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ==================== MISSIONS ====================
export const missionsAPI = {
  // Récupérer toutes les missions
  getAll: (params = {}) => api.get('/missions/', { params }),
  
  // Récupérer une mission par ID
  getById: (id) => api.get(`/missions/${id}/`),
  
  // Créer une nouvelle mission
  create: (data) => api.post('/missions/', data),
  
  // Mettre à jour une mission
  update: (id, data) => api.put(`/missions/${id}/`, data),
  
  // Supprimer une mission
  delete: (id) => api.delete(`/missions/${id}/`),
  
  // Récupérer les missions d'une organisation
  getByOrganization: (orgId) => api.get('/missions/by_organization/', { params: { org_id: orgId } }),
  
  // Compter les candidatures d'une mission
  getApplicationsCount: (id) => api.get(`/missions/${id}/applications_count/`),
};

// ==================== APPLICATIONS ====================
export const applicationsAPI = {
  // Récupérer toutes les candidatures
  getAll: (params = {}) => api.get('/applications/', { params }),
  
  // Récupérer une candidature par ID
  getById: (id) => api.get(`/applications/${id}/`),
  
  // Créer une candidature
  create: (data) => api.post('/applications/', data),
  
  // Accepter une candidature
  accept: (id) => api.post(`/applications/${id}/accept/`),
  
  // Refuser une candidature
  reject: (id) => api.post(`/applications/${id}/reject/`),
  
  // Récupérer les candidatures d'un bénévole
  getMyApplications: (volunteerId) => api.get('/applications/my_applications/', { params: { volunteer_id: volunteerId } }),
  
  // Récupérer les candidatures en attente pour une organisation
  getPendingForOrganization: (orgId) => api.get('/applications/pending_for_organization/', { params: { org_id: orgId } }),
};

// ==================== USERS ====================
export const usersAPI = {
  // Inscription bénévole
  volunteerSignup: (data) => api.post('/volunteer-signup/', data),
  
  // Inscription organisation
  organizationSignup: (data) => api.post('/organization-signup/', data),
  
  // Connexion
  login: (data) => api.post('/login/', data),
  
  // Déconnexion
  logout: () => api.post('/logout/'),
  
  // Récupérer le profil actuel
  getProfile: () => api.get('/me/'),
};

// ==================== SKILLS ====================
export const skillsAPI = {
  getAll: () => api.get('/skills/'),
  getById: (id) => api.get(`/skills/${id}/`),
};

// ==================== ODDS ====================
export const oddsAPI = {
  getAll: () => api.get('/odds/'),
  getById: (id) => api.get(`/odds/${id}/`),
};

export default api;
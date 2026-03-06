import { MOCK_PROPERTIES, MOCK_USER, MOCK_APPOINTMENTS, MOCK_AI_RESULTS, MOCK_TRENDS } from './mockData';

// Mock API Base URL
const API_BASE_URL = 'http://localhost:4000/api';

// Helper to simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Helper for successful response format
const successResponse = (data: any) => ({
  data: {
    success: true,
    ...data
  }
});

// ═══════════════════════════════════════════════════════════
// Mock API Endpoints
// ═══════════════════════════════════════════════════════════

// User Authentication
export const userAPI = {
  register: async (data: { fullName: string; email: string; phone: string; password: string }) => {
    await delay(800);
    return successResponse({ message: 'Registration successful', user: { ...MOCK_USER, name: data.fullName, email: data.email } });
  },

  login: async (data: { email: string; password: string }) => {
    await delay(800);
    return successResponse({ token: 'mock_token_123', user: MOCK_USER });
  },

  forgotPassword: async (email: string) => {
    await delay(800);
    return successResponse({ message: 'Reset email sent' });
  },

  resetPassword: async (token: string, password: string) => {
    await delay(800);
    return successResponse({ message: 'Password reset successful' });
  },

  getProfile: async () => {
    await delay(500);
    return successResponse({ user: MOCK_USER });
  },
};

// Properties (CRUD — admin-managed listings)
export const propertiesAPI = {
  getAll: async () => {
    await delay(600);
    return successResponse({ products: MOCK_PROPERTIES });
  },

  getById: async (id: string) => {
    await delay(400);
    const property = MOCK_PROPERTIES.find(p => p._id === id);
    return successResponse({ property });
  },
};

// Appointments
export const appointmentsAPI = {
  schedule: async (data: any) => {
    await delay(1000);
    return successResponse({ message: 'Appointment scheduled successfully', appointment: { ...data, _id: 'new_appt_id' } });
  },

  getByUser: async () => {
    await delay(600);
    return successResponse({ appointments: MOCK_APPOINTMENTS });
  },

  cancel: async (id: string, reason?: string) => {
    await delay(500);
    return successResponse({ message: 'Appointment cancelled' });
  },
};

// AI-Powered Property Search (Mocked AI results)
export const aiAPI = {
  search: async (data: any) => {
    await delay(2000); // Simulate AI generation/scraping delay
    return successResponse(MOCK_AI_RESULTS);
  },

  locationTrends: async (city: string) => {
    await delay(1500);
    return successResponse({ trends: MOCK_TRENDS });
  },
};

// Helpers to read/write user API keys in localStorage (kept for UI compatibility)
export const apiKeyStorage = {
  getGithubKey: () => localStorage.getItem('Crespo Real Estate_github_key') || '',
  getFirecrawlKey: () => localStorage.getItem('Crespo Real Estate_firecrawl_key') || '',
  setGithubKey: (key: string) => localStorage.setItem('Crespo Real Estate_github_key', key),
  setFirecrawlKey: (key: string) => localStorage.setItem('Crespo Real Estate_firecrawl_key', key),
  hasKeys: () => !!(localStorage.getItem('Crespo Real Estate_github_key') && localStorage.getItem('Crespo Real Estate_firecrawl_key')),
  clear: () => {
    localStorage.removeItem('Crespo Real Estate_github_key');
    localStorage.removeItem('Crespo Real Estate_firecrawl_key');
  },
};

// Contact Form
export const contactAPI = {
  submit: async (data: any) => {
    await delay(500);
    return successResponse({ message: 'Message sent successfully' });
  },
};

// Default export of a mock apiClient for any direct axios usage (though not recommended)
const apiClient = {
  get: async (url: string) => ({ data: { success: true } }),
  post: async (url: string, data: any) => ({ data: { success: true } }),
  put: async (url: string, data: any) => ({ data: { success: true } }),
  delete: async (url: string) => ({ data: { success: true } }),
  interceptors: {
    request: { use: () => { } },
    response: { use: () => { } },
  }
};

export default apiClient;


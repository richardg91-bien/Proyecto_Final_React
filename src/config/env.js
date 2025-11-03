// Configuración centralizada de variables de entorno
// Este archivo actúa como una capa de abstracción para import.meta.env

export const config = {
  // API Configuration
  api: {
    baseUrl: import.meta.env.VITE_API_BASE_URL || 'https://69000051e02b16d1753fd8e6.mockapi.io',
    productsEndpoint: import.meta.env.VITE_API_PRODUCTS_ENDPOINT || '/products',
    fakeStoreApi: import.meta.env.VITE_FAKE_STORE_API || 'https://fakestoreapi.com',
    pexelsApi: import.meta.env.VITE_PEXELS_API_BASE || 'https://images.pexels.com',
    unsplashApi: import.meta.env.VITE_UNSPLASH_API_BASE || 'https://images.unsplash.com',
  },

  // App Configuration
  app: {
    name: import.meta.env.VITE_APP_NAME || 'Indumentaria Agat',
    version: import.meta.env.VITE_APP_VERSION || '1.0.0',
    description: import.meta.env.VITE_APP_DESCRIPTION || 'E-Commerce de Moda de Calidad',
    logoUrl: import.meta.env.VITE_APP_LOGO_URL || '/vite.svg',
  },

  // Development Configuration
  dev: {
    mode: import.meta.env.VITE_DEV_MODE === 'true',
    debug: import.meta.env.VITE_ENABLE_DEBUG === 'true',
    nodeEnv: import.meta.env.VITE_NODE_ENV || 'development',
  },

  // Features Flags
  features: {
    adminPanel: import.meta.env.VITE_ENABLE_ADMIN_PANEL === 'true',
    localProducts: import.meta.env.VITE_ENABLE_LOCAL_PRODUCTS === 'true',
    cartPersistence: import.meta.env.VITE_ENABLE_CART_PERSISTENCE === 'true',
    serviceWorker: import.meta.env.VITE_ENABLE_SERVICE_WORKER === 'true',
    demoAccounts: import.meta.env.VITE_ENABLE_DEMO_ACCOUNTS === 'true',
  },

  // Authentication Configuration
  auth: {
    sessionTimeout: parseInt(import.meta.env.VITE_SESSION_TIMEOUT) || 3600000,
    admin: {
      email: import.meta.env.VITE_ADMIN_EMAIL || 'admin@shopnow.com',
      password: import.meta.env.VITE_ADMIN_PASSWORD || 'admin123',
    },
    user: {
      email: import.meta.env.VITE_USER_EMAIL || 'usuario@shopnow.com',
      password: import.meta.env.VITE_USER_PASSWORD || 'user123',
    },
  },

  // Image Configuration
  images: {
    basePath: import.meta.env.VITE_IMAGES_BASE_PATH || '/images/products',
    defaultProduct: import.meta.env.VITE_DEFAULT_PRODUCT_IMAGE || 'https://via.placeholder.com/300x300?text=Producto',
    placeholderBase: import.meta.env.VITE_PLACEHOLDER_IMAGE_BASE || 'https://via.placeholder.com',
    fallback1: import.meta.env.VITE_FALLBACK_IMAGE_1 || 'https://image.ibb.co/mJppz5/img6.jpg',
    fallback2: import.meta.env.VITE_FALLBACK_IMAGE_2 || 'https://image.ibb.co/eZiSmk/img7.jpg',
  },

  // External CDNs
  cdn: {
    bootstrapIcons: import.meta.env.VITE_BOOTSTRAP_ICONS_CDN || 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css',
    googleFonts: import.meta.env.VITE_GOOGLE_FONTS_API || 'https://fonts.googleapis.com',
  },

  // Social Media Links
  social: {
    twitter: import.meta.env.VITE_TWITTER_URL || 'https://twitter.com',
    instagram: import.meta.env.VITE_INSTAGRAM_URL || 'https://instagram.com',
    whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER || '1234567890',
    whatsappUrl: import.meta.env.VITE_WHATSAPP_URL || 'https://wa.me/1234567890',
  },

  // Company Information
  company: {
    name: import.meta.env.VITE_COMPANY_NAME || 'Indumentaria Agat',
    slogan: import.meta.env.VITE_COMPANY_SLOGAN || 'Moda de Calidad',
    phone: import.meta.env.VITE_COMPANY_PHONE || '+1234567890',
    email: import.meta.env.VITE_COMPANY_EMAIL || 'info@indumentariaagat.com',
  },

  // UI Configuration
  ui: {
    currency: import.meta.env.VITE_DEFAULT_CURRENCY || '€',
    itemsPerPage: parseInt(import.meta.env.VITE_ITEMS_PER_PAGE) || 12,
    animationInterval: parseInt(import.meta.env.VITE_HEADER_ANIMATION_INTERVAL) || 3000,
    fontFamily: import.meta.env.VITE_DEFAULT_FONT_FAMILY || 'Quicksand, sans-serif',
    headingFont: import.meta.env.VITE_HEADING_FONT_FAMILY || 'Lato, sans-serif',
  },

  // Service Worker Configuration
  serviceWorker: {
    publicUrl: import.meta.env.VITE_PUBLIC_URL || '/',
    filename: import.meta.env.VITE_SW_FILENAME || 'service-worker.js',
  },

  // External Services
  external: {
    imgur: import.meta.env.VITE_IMGUR_URL || 'https://imgur.com',
    googleShortener: import.meta.env.VITE_GOOGLE_LINK_SHORTENER || 'https://goo.gl',
  },

  // Development URLs
  localhost: {
    url: import.meta.env.VITE_LOCALHOST_URL || 'http://localhost',
    port: parseInt(import.meta.env.VITE_LOCALHOST_PORT) || 5173,
  },
};

// Helper functions
export const getApiUrl = (endpoint = '') => {
  return `${config.api.baseUrl}${config.api.productsEndpoint}${endpoint}`;
};

export const getImageUrl = (imagePath) => {
  if (imagePath?.startsWith('http')) {
    return imagePath;
  }
  return `${config.images.basePath}/${imagePath}`;
};

export const isProduction = () => {
  return import.meta.env.MODE === 'production';
};

export const isDevelopment = () => {
  return import.meta.env.MODE === 'development';
};

export const getPlaceholderImage = (width = 300, height = 300, text = 'Producto') => {
  return `${config.images.placeholderBase}/${width}x${height}?text=${encodeURIComponent(text)}`;
};

export default config;
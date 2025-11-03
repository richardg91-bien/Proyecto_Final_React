// Componente para mostrar variables de entorno en desarrollo
import React from 'react';
import { config, isDevelopment } from '../../config/env';

const EnvDisplay = () => {
  // Solo mostrar en modo desarrollo
  if (!config.dev.mode || !config.dev.debug) {
    return null;
  }

  const envVars = {
    'API Base URL': config.api.baseUrl,
    'API Products Endpoint': config.api.productsEndpoint,
    'App Name': config.app.name,
    'App Version': config.app.version,
    'Dev Mode': config.dev.mode.toString(),
    'Debug Enabled': config.dev.debug.toString(),
    'Admin Panel': config.features.adminPanel.toString(),
    'Local Products': config.features.localProducts.toString(),
    'Cart Persistence': config.features.cartPersistence.toString(),
    'Images Base Path': config.images.basePath,
    'Default Currency': config.ui.currency,
    'Items Per Page': config.ui.itemsPerPage.toString(),
    'Environment': isDevelopment() ? 'Development' : 'Production',
  };

  return (
    <div 
      style={{
        position: 'fixed',
        bottom: '10px',
        right: '10px',
        background: 'rgba(0,0,0,0.8)',
        color: 'white',
        padding: '10px',
        borderRadius: '5px',
        fontSize: '12px',
        maxWidth: '300px',
        zIndex: 9999,
        fontFamily: 'monospace'
      }}
    >
      <h4 style={{ margin: '0 0 10px 0', fontSize: '14px' }}>
        🔧 Variables de Entorno
      </h4>
      {Object.entries(envVars).map(([key, value]) => (
        <div key={key} style={{ marginBottom: '5px' }}>
          <strong>{key}:</strong> {value || 'undefined'}
        </div>
      ))}
      <div style={{ marginTop: '10px', fontSize: '10px', opacity: 0.7 }}>
        Solo visible en desarrollo
      </div>
    </div>
  );
};

export default EnvDisplay;
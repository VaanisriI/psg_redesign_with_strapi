import type { Core } from '@strapi/strapi';

const config: Core.Config.Middlewares = [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'https:', 'http://127.0.0.1:1337'],
          'media-src': ["'self'", 'data:', 'blob:', 'https:', 'http://127.0.0.1:1337'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      headers: '*',
      origin: [
        'http://localhost:4321',
        'http://localhost:4322',
        'http://localhost:4323',
        'http://127.0.0.1:4321',
        'http://127.0.0.1:4322',
        'http://127.0.0.1:1337',
        'http://localhost:1337',
      ],
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];

export default config;


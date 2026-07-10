import { authPaths } from './paths/auth.js';
import { userPaths } from './paths/users.js';
import { teacherPaths } from './paths/teachers.js';
import { otherPaths } from './paths/others.js';
import { schemas } from './components/schemas.js';
import { parameters } from './components/parameters.js';
import swaggerUi from 'swagger-ui-express';

const swaggerSpec = {
  openapi: '3.0.3',
  info: {
    title: 'LearnLingo API',
    version: '1.0.0',
    description: 'API documentation for LearnLingo language learning platform',
  },
  servers: [
    {
      url: process.env.BASE_URL || 'http://localhost:3001',
      description: 'Development server',
    },
  ],
  tags: [
    { name: 'Auth', description: 'Operations related to user authentication' },
    { name: 'Teachers', description: 'Teacher profile and search operations' },
    {
      name: 'Users',
      description: 'User profile and favorite teacher management',
    },
    {
      name: 'Languages',
      description: 'Endpoints for fetching language options',
    },
    { name: 'Prices', description: 'Endpoints for fetching pricing options' },
  ],
  components: {
    securitySchemes: {
      bearerAuth: { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
    },
    schemas,
    parameters,
  },
  paths: {
    ...authPaths,
    ...teacherPaths,
    ...userPaths,
    ...otherPaths,
  },
};

export const setupSwagger = (app) => {
  app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec, {
      customSiteTitle: 'LearnLingo API Docs',
    }),
  );
};

export default swaggerSpec;

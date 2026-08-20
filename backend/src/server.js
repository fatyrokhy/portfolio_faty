require('dotenv').config();
const express = require('express');
const cors = require('cors');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: process.env.FRONTEND_URL || '*' }));
app.use(express.json());

// Swagger
const swaggerSpec = swaggerJsdoc({
  definition: {
    openapi: '3.0.0',
    info: { title: 'Faty Rokhy — Portfolio API', version: '1.0.0', description: 'API du portfolio de Faty Rokhy Niasse, Développeure Full Stack.' },
    servers: [{ url: `http://localhost:${PORT}`, description: 'Local' }]
  },
  apis: ['./src/routes/*.js']
});
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, {
  customSiteTitle: 'Faty Rokhy — API Docs'
}));

// Routes
app.use('/api/portfolio', require('./routes/portfolio'));
app.use('/api/contact', require('./routes/contact'));

app.get('/health', (_, res) => res.json({ status: 'OK', timestamp: new Date().toISOString() }));
app.get('/', (_, res) => res.json({ message: '🚀 Portfolio API — Faty Rokhy Niasse', docs: `/api/docs` }));
app.use((req, res) => res.status(404).json({ success: false, message: 'Route introuvable' }));

app.listen(PORT, () => {
  console.log(`✅  API    → http://localhost:${PORT}`);
  console.log(`📚  Swagger → http://localhost:${PORT}/api/docs`);
});

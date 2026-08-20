const router = require('express').Router();
const ctrl = require('../controllers/portfolioController');

/**
 * @swagger
 * tags:
 *   name: Portfolio
 *   description: Données du portfolio
 */

/** @swagger
 * /api/portfolio:
 *   get:
 *     summary: Toutes les données
 *     tags: [Portfolio]
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/', ctrl.getAll);

/** @swagger
 * /api/portfolio/profile:
 *   get:
 *     summary: Profil
 *     tags: [Portfolio]
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/profile', ctrl.getProfile);

/** @swagger
 * /api/portfolio/skills:
 *   get:
 *     summary: Compétences
 *     tags: [Portfolio]
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/skills', ctrl.getSkills);

/** @swagger
 * /api/portfolio/projects:
 *   get:
 *     summary: Projets (filtres: featured, category)
 *     tags: [Portfolio]
 *     parameters:
 *       - in: query
 *         name: featured
 *         schema:
 *           type: boolean
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/projects', ctrl.getProjects);

/** @swagger
 * /api/portfolio/projects/{id}:
 *   get:
 *     summary: Projet par ID
 *     tags: [Portfolio]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: OK
 *       404:
 *         description: Not found
 */
router.get('/projects/:id', ctrl.getProjectById);

/** @swagger
 * /api/portfolio/stats:
 *   get:
 *     summary: Statistiques
 *     tags: [Portfolio]
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/stats', ctrl.getStats);

module.exports = router;

const router = require('express').Router();
const { body } = require('express-validator');
const ctrl = require('../controllers/contactController');

/**
 * @swagger
 * tags:
 *   name: Contact
 *   description: Formulaire de contact
 */

/**
 * @swagger
 * /api/contact:
 *   post:
 *     summary: Envoyer un message
 *     tags: [Contact]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name, email, message]
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Jean Dupont"
 *               email:
 *                 type: string
 *                 example: "jean@exemple.com"
 *               subject:
 *                 type: string
 *                 example: "Collaboration"
 *               message:
 *                 type: string
 *                 example: "Bonjour Faty, j'aimerais discuter d'un projet..."
 *     responses:
 *       201:
 *         description: Message envoyé
 *       422:
 *         description: Erreur de validation
 */
router.post('/', [
  body('name').trim().notEmpty().withMessage('Le nom est requis'),
  body('email').isEmail().withMessage('Email invalide').normalizeEmail(),
  body('message').trim().isLength({ min: 10 }).withMessage('Message trop court (10 caractères min)')
], ctrl.sendMessage);

module.exports = router;

const { validationResult } = require('express-validator');
const messages = [];

const sendMessage = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(422).json({ success: false, errors: errors.array() });
  const entry = { id: messages.length + 1, ...req.body, createdAt: new Date().toISOString() };
  messages.push(entry);
  console.log(`📧 Message de ${entry.name} <${entry.email}>`);
  res.status(201).json({ success: true, message: 'Message reçu ! Je vous réponds très bientôt.' });
};

module.exports = { sendMessage };

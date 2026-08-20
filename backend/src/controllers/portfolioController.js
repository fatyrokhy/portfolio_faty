const data = require('../data/portfolio');

const getAll = (req, res) => res.json({ success: true, data });
const getProfile = (req, res) => res.json({ success: true, data: data.profile });
const getSkills = (req, res) => res.json({ success: true, data: data.skills });
const getProjects = (req, res) => {
  let projects = [...data.projects];
  if (req.query.featured === 'true') projects = projects.filter(p => p.featured);
  if (req.query.category) projects = projects.filter(p => p.category.toLowerCase() === req.query.category.toLowerCase());
  res.json({ success: true, data: projects, total: projects.length });
};
const getProjectById = (req, res) => {
  const p = data.projects.find(p => p.id === parseInt(req.params.id));
  if (!p) return res.status(404).json({ success: false, message: 'Project not found' });
  res.json({ success: true, data: p });
};
const getStats = (req, res) => res.json({ success: true, data: data.stats });

module.exports = { getAll, getProfile, getSkills, getProjects, getProjectById, getStats };

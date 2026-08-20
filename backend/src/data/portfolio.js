const portfolioData = {
  profile: {
    name: "Faty Rokhy Niasse",
    title: "Développeure Full Stack",
    tagline: "Je conçois et développe des applications web robustes, du backend à l'interface utilisateur.",
    email: "fatyrokhy777@gmail.com",
    location: "Dakar, Sénégal",
    availability: true,
    bio: "Étudiante en licence informatique, passionnée par le développement full stack avec près de 3 ans d'expérience pratique. Je construis des APIs REST solides, des applications Java Spring Boot et des interfaces modernes en Angular et React.",
    social: {
      github: "https://github.com/fatyrokhy",
      linkedin: "https://www.linkedin.com/in/faty-rokhy-niasse-30023131b/"
    }
  },

  skills: [
    {
      id: 1,
      category: "Frontend",
      icon: "🎨",
      items: [
        { name: "React / Vite", level: 85 },
        { name: "Angular", level: 70 },
        { name: "HTML / CSS", level: 90 },
        { name: "Figma", level: 75 }
      ]
    },
    {
      id: 2,
      category: "Backend",
      icon: "⚙️",
      items: [
        { name: "Node.js / Express / Hono", level: 90 },
        { name: "Java / Spring Boot", level: 75 },
        { name: "PHP", level: 90 },
        { name: "API REST", level: 92 }
      ]
    },
    {
      id: 3,
      category: "Base de données & Design",
      icon: "🗄️",
      items: [
        { name: "SQL / JDBC / JPA", level: 80 },
        { name: "UML / Conception", level: 82 },
        { name: "Git / GitHub / GitLab", level: 88 },
        { name: "Jira / Trello", level: 80 }
      ]
    },
    {
      id: 4,
      category: "DevOps",
      icon: "🚀",
      items: [
        { name: "GitHub Actions (CI/CD)", level: 70 },
        { name: "Terraform", level: 60 },
        { name: "Ansible", level: 60 },
        { name: "Docker (bases)", level: 65 }
      ]
    }
  ],

  projects: [
    {
      id: 1,
      title: "Dakar Tech Wallet — Backend",
      description: "Plateforme de gestion financière : portefeuille, virements, prêts et remboursements avec scoring de solvabilité automatisé.",
      longDescription: "API REST complète construite avec Spring Boot. Gère les transactions, les évaluations de risque de crédit basées sur le comportement de paiement, et l'administration des comptes clients.",
      tags: ["Java", "Spring Boot", "REST API", "JPA"],
      category: "Backend",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
      github: "https://github.com/fatyrokhy/dakar-tech-walet-back",
      live: null,
      featured: true,
      year: 2024,
      status: "Open Source"
    },
    {
      id: 2,
      title: "Dakar Tech Wallet — Frontend",
      description: "Interface Angular de la plateforme financière : tableau de bord, historique des transactions et gestion des demandes de prêt.",
      longDescription: "Application Angular consommant l'API Spring Boot. Composants réutilisables, gestion d'état et interface responsive pour les opérations financières.",
      tags: ["Angular", "TypeScript", "REST API"],
      category: "Frontend",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      github: "https://github.com/fatyrokhy/dakar-wallet-front-angular",
      live: null,
      featured: true,
      year: 2024,
      status: "Open Source"
    },
    {
      id: 3,
      title: "Gestion d'Entrepôt Logistique",
      description: "API REST de gestion d'entrepôt : stocks, mouvements de marchandises et suivi des entrées/sorties.",
      longDescription: "Backend Node.js / Express structuré en architecture MVC. Endpoints pour la gestion des produits, des emplacements et des flux logistiques.",
      tags: ["Node.js", "Express", "REST API"],
      category: "Backend",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
      github: "https://github.com/fatyrokhy/Ges_entrepot_logist",
      live: null,
      featured: true,
      year: 2023,
      status: "Open Source"
    },
    {
      id: 4,
      title: "Todo App DevOps",
      description: "Application React simple, utilisée comme support pour maîtriser l'environnement DevOps : Terraform, Ansible et CI/CD GitHub Actions.",
      longDescription: "Le projet met l'accent sur l'infrastructure : provisionnement avec Terraform, configuration avec Ansible, et pipeline CI/CD complet sur GitHub Actions.",
      tags: ["React", "Terraform", "Ansible", "GitHub Actions", "CI/CD"],
      category: "DevOps",
      image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&q=80",
      github: "https://github.com/fatyrokhy/tp-devops-todoapp",
      live: null,
      featured: false,
      year: 2024,
      status: "Open Source"
    }
  ],

  stats: {
    yearsExperience: 3,
    projectsCompleted: 25,
    technologies: 10,
    available: true
  }
};

module.exports = portfolioData;

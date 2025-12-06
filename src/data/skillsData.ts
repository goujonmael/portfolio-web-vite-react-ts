export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'devops' | 'tools' | 'soft_skills' | 'languages' | 'security';
  origin: 'university' | 'internship' | 'personal_project' | 'youtube' | 'freelance' | 'other' | 'TryHackMe';
  proficiency?: number; // 1-5 or 1-100
  icon?: string; // Path to icon or component name
  link?: string; // URL to the corresponding GitHub repository
}

export const skillsData = {
  fr: [
    {
      name: "React",
      category: "frontend",
      origin: "personal_project",
      proficiency: 70,
      link: "https://github.com/goujonmael/portfolio-web-vite-react-ts"
    },
    {
      name: "TypeScript",
      category: "frontend",
      origin: "personal_project",
      proficiency: 75,
      link: "https://github.com/goujonmael/nextjs-dashboard-from-doc"
    },
    {
      name: "JavaScript",
      category: "frontend",
      origin: "personal_project",
      proficiency: 60,
      link: "https://github.com/goujonmael/Food-Delivery-App"
    },
    {
      name: "HTML",
      category: "frontend",
      origin: "university",
      proficiency: 60,
      link: "https://github.com/maelgoujon/site-iut-html"
    },
    {
      name: "CSS",
      category: "frontend",
      origin: "personal_project",
      proficiency: 65,
    },
    {
      name: "Java / Spring Boot",
      category: "backend",
      origin: "university",
      proficiency: 70,
      link: "https://github.com/maelgoujon/Suivi-de-formation-Spring-Boot"
    },
    {
      name: "Python",
      category: "backend",
      origin: "personal_project",
      proficiency: 50,
      link: "https://github.com/goujonmael/PyQt5-Chatbot-Client"
    },
    {
      name: "PHP",
      category: "backend",
      origin: "university",
      proficiency: 60,
      link: "https://github.com/maelgoujon/Cabinet-Medical-PHP"
    },
    {
      name: "C++",
      category: "backend",
      origin: "personal_project",
      proficiency: 25,
      link: "https://github.com/goujonmael/Nanoleaf-Alternative"
    },
    {
      name: "C",
      category: "backend",
      origin: "university",
      proficiency: 25,
      link: "https://github.com/maelgoujon/ProxyFTP_C"
    },
    {
      name: "Kotlin",
      category: "backend",
      origin: "personal_project",
      proficiency: 25,
      link: "https://github.com/goujonmael/element-android"
    },
    {
      name: "DevOps (GitLab CI/CD)",
      category: "devops",
      origin: "internship",
      proficiency: 80
    },
    {
      name: "Ansible",
      category: "devops",
      origin: "internship",
      proficiency: 70
    },
    {
      name: "Docker",
      category: "devops",
      origin: "personal_project",
      proficiency: 35,
      link: "https://github.com/goujonmael/WebServerConfiguration"
    },
    {
      name: "Kubernetes",
      category: "devops",
      origin: "TryHackMe",
      proficiency: 35
    },
    {
      name: "Shell / Bash",
      category: "devops",
      origin: "personal_project",
      proficiency: 90,
      link: "https://github.com/goujonmael/encrypted_gdrive_backup"
    },
    {
      name: "Arduino",
      category: "tools",
      origin: "personal_project",
      proficiency: 60,
      link: "https://github.com/goujonmael/Nanoleaf-Alternative"
    },
    {
      name: "Pentesting",
      category: "security",
      origin: "TryHackMe",
      proficiency: 70
    },
    {
      name: "SELinux",
      category: "security",
      origin: "internship",
      proficiency: 50
    },
    {
      name: "OWASP",
      category: "security",
      origin: "TryHackMe",
      proficiency: 50
    },
    {
      name: "Cryptography",
      category: "security",
      origin: "TryHackMe",
      proficiency: 45,
      link: "https://github.com/goujonmael/Secure-Chat-App"
    }
  ] as Skill[],
  en: [
    {
      name: "React",
      category: "frontend",
      origin: "personal_project",
      proficiency: 70,
      link: "https://github.com/goujonmael/portfolio-web-vite-react-ts"
    },
    {
      name: "TypeScript",
      category: "frontend",
      origin: "personal_project",
      proficiency: 75,
      link: "https://github.com/goujonmael/nextjs-dashboard-from-doc"
    },
    {
      name: "JavaScript",
      category: "frontend",
      origin: "personal_project",
      proficiency: 60,
      link: "https://github.com/goujonmael/Food-Delivery-App"
    },
    {
      name: "HTML",
      category: "frontend",
      origin: "university",
      proficiency: 60,
      link: "https://github.com/maelgoujon/site-iut-html"
    },
    {
      name: "CSS",
      category: "frontend",
      origin: "personal_project",
      proficiency: 65,
    },
    {
      name: "Java / Spring Boot",
      category: "backend",
      origin: "university",
      proficiency: 70,
      link: "https://github.com/maelgoujon/Suivi-de-formation-Spring-Boot"
    },
    {
      name: "Python",
      category: "backend",
      origin: "personal_project",
      proficiency: 50,
      link: "https://github.com/goujonmael/PyQt5-Chatbot-Client"
    },
    {
      name: "PHP",
      category: "backend",
      origin: "university",
      proficiency: 60,
      link: "https://github.com/maelgoujon/Cabinet-Medical-PHP"
    },
    {
      name: "C++",
      category: "backend",
      origin: "personal_project",
      proficiency: 25,
      link: "https://github.com/goujonmael/Nanoleaf-Alternative"
    },
    {
      name: "C",
      category: "backend",
      origin: "university",
      proficiency: 25,
      link: "https://github.com/maelgoujon/ProxyFTP_C"
    },
    {
      name: "Kotlin",
      category: "backend",
      origin: "personal_project",
      proficiency: 25,
      link: "https://github.com/goujonmael/element-android"
    },
    {
      name: "DevOps (GitLab CI/CD)",
      category: "devops",
      origin: "internship",
      proficiency: 80
    },
    {
      name: "Ansible",
      category: "devops",
      origin: "internship",
      proficiency: 70
    },
    {
      name: "Docker",
      category: "devops",
      origin: "personal_project",
      proficiency: 35,
      link: "https://github.com/goujonmael/WebServerConfiguration"
    },
    {
      name: "Kubernetes",
      category: "devops",
      origin: "TryHackMe",
      proficiency: 35
    },
    {
      name: "Shell / Bash",
      category: "tools",
      origin: "personal_project",
      proficiency: 95,
      link: "https://github.com/goujonmael/encrypted_gdrive_backup"
    },
    {
      name: "Arduino",
      category: "tools",
      origin: "personal_project",
      proficiency: 60,
      link: "https://github.com/goujonmael/Nanoleaf-Alternative"
    },
    {
      name: "Pentesting",
      category: "security",
      origin: "TryHackMe",
      proficiency: 70
    },
    {
      name: "SELinux",
      category: "security",
      origin: "internship",
      proficiency: 50
    },
    {
      name: "OWASP",
      category: "security",
      origin: "TryHackMe",
      proficiency: 50
    },
    {
      name: "Cryptography",
      category: "security",
      origin: "TryHackMe",
      proficiency: 45,
      link: "https://github.com/goujonmael/Secure-Chat-App"
    }
  ] as Skill[]
};

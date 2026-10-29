import { Component, OnInit } from '@angular/core';

interface Skill {
  name: string;
  icon: string;
  level: number;
  category: string;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  frontendSkills: Skill[] = [
    {
      name: 'HTML5',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      level: 90,
      category: 'Frontend'
    },
    {
      name: 'CSS3',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      level: 88,
      category: 'Frontend'
    },
    {
      name: 'JavaScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      level: 82,
      category: 'Frontend'
    },
    {
      name: 'Angular',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
      level: 88,
      category: 'Frontend'
    },
    {
      name: 'React',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      level: 72,
      category: 'Frontend'
    },
    {
      name: 'Bootstrap',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
      level: 85,
      category: 'Frontend'
    }
  ];

  programmingSkills: Skill[] = [
    {
      name: 'Java',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      level: 88,
      category: 'Programming'
    },
    {
      name: 'Python',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      level: 82,
      category: 'Programming'
    },
    {
      name: 'C',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
      level: 80,
      category: 'Programming'
    },
    {
      name: 'DSA',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codepen/codepen-original.svg',
      level: 78,
      category: 'Programming'
    }
  ];

  backendSkills: Skill[] = [
    {
      name: 'Spring Boot',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
      level: 85,
      category: 'Backend'
    },
    {
      name: 'Node.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      level: 70,
      category: 'Backend'
    },
    {
      name: 'PHP',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
      level: 65,
      category: 'Backend'
    },
    {
      name: 'MySQL',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      level: 85,
      category: 'Backend'
    },
    {
      name: 'PostgreSQL',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      level: 75,
      category: 'Backend'
    }
  ];

  developmentTools: Skill[] = [
    {
      name: 'VS Code',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
      level: 90,
      category: 'Tools'
    },
    {
      name: 'STS',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
      level: 85,
      category: 'Tools'
    },
    {
      name: 'Postman',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
      level: 82,
      category: 'Tools'
    }
  ];

  versionControl: Skill[] = [
    {
      name: 'Git',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      level: 85,
      category: 'Version Control'
    },
    {
      name: 'GitHub',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      level: 88,
      category: 'Version Control'
    }
  ];

  deploymentTools: Skill[] = [
    {
      name: 'Netlify',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg',
      level: 85,
      category: 'Deployment'
    },
    {
      name: 'Vercel',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg',
      level: 75,
      category: 'Deployment'
    },
    {
      name: 'Render',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/render/render-original.svg',
      level: 70,
      category: 'Deployment'
    },
    {
      name: 'Railway',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/railway/railway-original.svg',
      level: 70,
      category: 'Deployment'
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
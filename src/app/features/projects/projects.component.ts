import { Component, OnInit } from '@angular/core';

interface Project {
  id: number;
  slug: string;
  name: string;
  shortDescription: string;
  thumbnail: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [

    {
      id: 1,
      slug: 'pg-life',
      name: 'PG Life',
      shortDescription:
        'A web project focused on helping users explore and find suitable PG accommodation options through a responsive interface.',
      thumbnail: 'assets/images/projects/pg-life/i3.png',
      technologies: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'React'
      ],
      liveUrl: '#',
      githubUrl: '#'
    },

    {
      id: 2,
      slug: 'amazora',
      name: 'Amazora',
      shortDescription:
        'An e-commerce inspired web application developed using Java web technologies with database connectivity.',
      thumbnail: 'assets/images/projects/amazora/p1.png',
      technologies: [
        'JSP',
        'Servlets',
        'JDBC',
        'PostgreSQL'
      ],
      liveUrl: '#',
      githubUrl: '#'
    },

    {
      id: 3,
      slug: 'dreamhome',
      name: 'DreamHome',
      shortDescription:
        'A responsive frontend web project designed around a modern real-estate experience using core web technologies.',
      thumbnail: 'assets/images/projects/dreamhome/a1.png',
      technologies: [
        'HTML5',
        'CSS3',
        'JavaScript'
      ],
      liveUrl: '#',
      githubUrl: '#'
    },

    {
      id: 4,
      slug: 'personal-portfolio',
      name: 'Personal Portfolio',
      shortDescription:
        'A modern developer portfolio created to showcase my skills, projects, education, experience, certifications and achievements.',
      thumbnail: 'assets/images/projects/portfolio/po1.png',
      technologies: [
        'Angular 15',
        'TypeScript',
        'HTML5',
        'CSS3'
      ],
      liveUrl: '#',
      githubUrl: '#'
    },

    {
      id: 5,
      slug: 'leadpilot-crm',
      name: 'LeadPilot CRM',
      shortDescription:
        'A full-stack customer lead management application designed to manage leads, follow-ups, employees and customer interactions.',
      thumbnail: 'assets/images/projects/leadpilot/l1.png',
      technologies: [
        'Angular 15',
        'Spring Boot',
        'Java',
        'MySQL'
      ],
      liveUrl: '#',
      githubUrl: '#'
    },

    {
      id: 6,
      slug: 'cartlane',
      name: 'CartLane',
      shortDescription:
        'A full-stack online product management system built to handle products, inventory, customers and order-related operations.',
      thumbnail: 'assets/images/projects/cartlane/c1.png',
      technologies: [
        'Angular 15',
        'Spring Boot',
        'Java',
        'MySQL'
      ],
      liveUrl: '#',
      githubUrl: '#'
    }

  ];


  constructor() {}


  ngOnInit(): void {}


  /*
   * Preview a new project thumbnail.
   *
   * This only changes the image in the current browser session.
   * Permanent storage can be connected later through the backend.
   */
  onThumbnailUpload(
    event: Event,
    project: Project
  ): void {

    const input = event.target as HTMLInputElement;

    if (!input.files || input.files.length === 0) {
      return;
    }

    const file = input.files[0];

    if (!file.type.startsWith('image/')) {
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      project.thumbnail = reader.result as string;
    };

    reader.readAsDataURL(file);
  }


  openProject(url: string): void {

    if (!url || url === '#') {
      return;
    }

    window.open(
      url,
      '_blank',
      'noopener,noreferrer'
    );
  }

}
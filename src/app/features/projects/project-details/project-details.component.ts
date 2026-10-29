import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface ProjectDetails {
  name: string;
  category: string;
  overview: string;

  technologies: string[];

  images: string[];

  videoUrl: string;

  documentationUrl: string;

  frontendDeployUrl: string;

  frontendGithubUrl: string;

  backendGithubUrl: string;
}

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit, OnDestroy {

  project: ProjectDetails | undefined;

  currentImageIndex = 0;

  private autoplayInterval: any;


  /*
   * =========================================================
   * PROJECT DETAILS
   * =========================================================
   */

  projects: { [key: string]: ProjectDetails } = {

    /* =======================================================
       CARTLANE
    ======================================================== */

    'cartlane': {

      name: 'CartLane',

      category: 'FULL-STACK WEB APPLICATION',

      overview:
        'A full-stack online product management and shopping platform developed using Angular, Spring Boot, Java and MySQL.',

      technologies: [
        'Angular 15',
        'Spring Boot',
        'Java',
        'MySQL'
      ],

      images: [
        'assets/images/projects/cartlane/c1.png',
        'assets/images/projects/cartlane/c2.png',
        'assets/images/projects/cartlane/c3.png',
        'assets/images/projects/cartlane/c4.png',
        'assets/images/projects/cartlane/c5.png',
        'assets/images/projects/cartlane/c6.png',
        'assets/images/projects/cartlane/c7.png',
        'assets/images/projects/cartlane/c8.png',
        'assets/images/projects/cartlane/c9.png',
        'assets/images/projects/cartlane/c10.png',
        'assets/images/projects/cartlane/c11.png',
        'assets/images/projects/cartlane/c12.png',
        'assets/images/projects/cartlane/c13.png',
        'assets/images/projects/cartlane/c14.png'
      ],

      videoUrl:
        'assets/videos/projects/CartLane.mp4',

      documentationUrl:
        'assets/documents/projects/cartlane-documentation.pdf',

      frontendDeployUrl:
        'https://cartlane-justonelaneaaway.netlify.app',

      frontendGithubUrl:
        'https://github.com/SoumyashreePanda38-coder/CartLane_Online-Product-Management-System',

      backendGithubUrl:
        'https://github.com/SoumyashreePanda38-coder/CartLane-Backend'
    },


    /* =======================================================
       LEADPILOT CRM
    ======================================================== */

    'leadpilot-crm': {

      name: 'LeadPilot CRM',

      category: 'FULL-STACK CRM APPLICATION',

      overview:
        'A full-stack customer lead management system developed with Angular, Spring Boot, Java and MySQL.',

      technologies: [
        'Angular 15',
        'Spring Boot',
        'Java',
        'MySQL'
      ],

      images: [
        'assets/images/projects/leadpilot/l1.png',
        'assets/images/projects/leadpilot/l2.png',
        'assets/images/projects/leadpilot/l3.png',
        'assets/images/projects/leadpilot/l4.png',
        'assets/images/projects/leadpilot/l5.png',
        'assets/images/projects/leadpilot/l6.png',
        'assets/images/projects/leadpilot/l7.png',
        'assets/images/projects/leadpilot/l8.png',
        'assets/images/projects/leadpilot/l9.png',
        'assets/images/projects/leadpilot/l10.png',
        'assets/images/projects/leadpilot/l11.png',
        'assets/images/projects/leadpilot/l12.png',
        'assets/images/projects/leadpilot/l13.png'
      ],

      videoUrl:
        'assets/videos/projects/leadpilot.mp4',

      documentationUrl:
        'assets/documents/projects/leadpilot-documentation.pdf',

      frontendDeployUrl:
        'https://leadpilot-crmapp.netlify.app',

      frontendGithubUrl:
        'https://github.com/SoumyashreePanda38-coder/LeadPilot_CRM-Frontend',

      backendGithubUrl:
        'https://github.com/SoumyashreePanda38-coder/LeadPilot-CRM-Backend'
    },


    /* =======================================================
       PG LIFE
    ======================================================== */

    'pg-life': {

      name: 'PG Life',

      category: 'WEB APPLICATION',

      overview:
        'A web project designed around exploring and finding PG accommodation options through a responsive user interface.',

      technologies: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'React'
      ],

      images: [
        'assets/images/projects/pg-life/i1.png',
        'assets/images/projects/pg-life/i2.png',
        'assets/images/projects/pg-life/i3.png',
        'assets/images/projects/pg-life/i4.png'
      ],

      videoUrl:
        'assets/videos/projects/pg-life-demo.mp4',

      documentationUrl:
        'assets/documents/projects/pg-life-documentation.pdf',

      frontendDeployUrl:
        '#',

      frontendGithubUrl:
        '#',

      backendGithubUrl:
        '#'
    },


    /* =======================================================
       AMAZORA
    ======================================================== */

    'amazora': {

      name: 'Amazora',

      category: 'JAVA WEB APPLICATION',

      overview:
        'An e-commerce inspired web application developed using JSP, Servlets, JDBC and PostgreSQL.',

      technologies: [
        'JSP',
        'Servlets',
        'JDBC',
        'PostgreSQL'
      ],

      images: [
        'assets/images/projects/amazora/p1.png',
        'assets/images/projects/amazora/p2.png',
        'assets/images/projects/amazora/p3.png',
        'assets/images/projects/amazora/p4.png',
        'assets/images/projects/amazora/p5.png'
      ],

      videoUrl:
        'assets/videos/projects/amazora-demo.mp4',

      documentationUrl:
        'assets/documents/projects/amazora-documentation.pdf',

      frontendDeployUrl:
        '#',

      frontendGithubUrl:
        '#',

      backendGithubUrl:
        '#'
    },


    /* =======================================================
       DREAMHOME
    ======================================================== */

    'dreamhome': {

      name: 'DreamHome',

      category: 'FRONTEND WEB PROJECT',

      overview:
        'A responsive real-estate themed frontend project created using HTML, CSS and JavaScript.',

      technologies: [
        'HTML5',
        'CSS3',
        'JavaScript'
      ],

      images: [
        'assets/images/projects/dreamhome/a1.png',
        'assets/images/projects/dreamhome/a2.png'
      ],

      videoUrl:
        'assets/videos/projects/dreamhome-demo.mp4',

      documentationUrl:
        'assets/documents/projects/dreamhome-documentation.pdf',

      frontendDeployUrl:
        '#',

      frontendGithubUrl:
        '#',

      backendGithubUrl:
        '#'
    },


    /* =======================================================
       PERSONAL PORTFOLIO
    ======================================================== */

    'personal-portfolio': {

      name: 'Personal Portfolio',

      category: 'FRONTEND WEB PROJECT',

      overview:
        'A modern developer portfolio created to showcase skills, projects, education, experience, certifications and achievements.',

      technologies: [
        'Angular 15',
        'TypeScript',
        'HTML5',
        'CSS3'
      ],

      images: [
        'assets/images/projects/portfolio/po1.png',
        'assets/images/projects/portfolio/po2.png',
        'assets/images/projects/portfolio/po3.png',
        'assets/images/projects/portfolio/po4.png',
        'assets/images/projects/portfolio/po5.png',
        'assets/images/projects/portfolio/po6.png',
        'assets/images/projects/portfolio/po7.png',
        'assets/images/projects/portfolio/po8.png',
        'assets/images/projects/portfolio/po9.png'
      ],

      videoUrl:
        'assets/videos/projects/portfolio-demo.mp4',

      documentationUrl:
        'assets/documents/projects/portfolio-documentation.pdf',

      frontendDeployUrl:
        'https://soumyashree-services.netlify.app',

      frontendGithubUrl:
        'https://github.com/SoumyashreePanda38-coder/Personal-Portfolio',

      backendGithubUrl:
        '#'
    }

  };


  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}


  /* =========================================================
     INIT
  ========================================================= */

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {

      const slug = params.get('slug');

      if (slug && this.projects[slug]) {

        this.project = this.projects[slug];

        this.currentImageIndex = 0;

        this.startAutoplay();

      } else {

        this.router.navigate(['/'], {
          fragment: 'projects'
        });

      }

    });

  }


  /* =========================================================
     DESTROY
  ========================================================= */

  ngOnDestroy(): void {

    this.stopAutoplay();

  }


  /* =========================================================
     NEXT IMAGE
  ========================================================= */

  nextImage(): void {

    if (!this.project || this.project.images.length === 0) {
      return;
    }

    this.currentImageIndex =
      (this.currentImageIndex + 1) %
      this.project.images.length;

    this.restartAutoplay();

  }


  /* =========================================================
     PREVIOUS IMAGE
  ========================================================= */

  previousImage(): void {

    if (!this.project || this.project.images.length === 0) {
      return;
    }

    this.currentImageIndex =
      (this.currentImageIndex - 1 +
        this.project.images.length) %
      this.project.images.length;

    this.restartAutoplay();

  }


  /* =========================================================
     SELECT IMAGE
  ========================================================= */

  selectImage(index: number): void {

    if (!this.project) {
      return;
    }

    this.currentImageIndex = index;

    this.restartAutoplay();

  }


  /* =========================================================
     AUTOPLAY
  ========================================================= */

  startAutoplay(): void {

    this.stopAutoplay();

    if (
      !this.project ||
      this.project.images.length <= 1
    ) {
      return;
    }

    this.autoplayInterval = setInterval(() => {

      if (!this.project) {
        return;
      }

      this.currentImageIndex =
        (this.currentImageIndex + 1) %
        this.project.images.length;

    }, 4000);

  }


  stopAutoplay(): void {

    if (this.autoplayInterval) {

      clearInterval(this.autoplayInterval);

      this.autoplayInterval = null;

    }

  }


  restartAutoplay(): void {

    this.startAutoplay();

  }


  /* =========================================================
     OPEN EXTERNAL LINK
  ========================================================= */

  openLink(url: string): void {

    if (!url || url === '#') {
      return;
    }

    window.open(
      url,
      '_blank',
      'noopener,noreferrer'
    );

  }


  /* =========================================================
     BACK TO PROJECTS
  ========================================================= */

  goBack(): void {

    this.router.navigate(['/'], {
      fragment: 'projects'
    });

  }

}
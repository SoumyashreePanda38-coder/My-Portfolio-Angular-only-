import { Component, OnInit, OnDestroy } from '@angular/core';

interface Certification {
  title: string;
  issuer: string;
  year: string;
  image: string;
  certificateUrl: string;
}

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent implements OnInit, OnDestroy {

  certifications: Certification[] = [

    {
      title: 'Full Stack Development,IBM (Bhubaneswar)',
      issuer: 'Angular • Java • MySQL • Spring Boot',
      year: '2026',
      image: 'assets/images/certificates/c1.jpeg',
      certificateUrl: '#'
    },

    {
      title: 'Full Stack Development with AI,Internshala',
      issuer: 'Internshala Trainings',
      year: '2026',
      image: 'assets/images/certificates/c2.jpeg',
      certificateUrl: '#'
    },

    {
      title: 'Ideate Senior,Silicon University',
      issuer: 'Nirman',
      year: '2025',
      image: 'assets/images/certificates/c3.jpeg',
      certificateUrl: '#'
    },

    {
      title: 'Python Internship,Codebeat(Hyderabad)',
      issuer: 'SA',
      year: '2025',
      image: 'assets/images/certificates/c4.jpeg',
      certificateUrl: '#'
    },

    {
      title: 'Generative AI Workshop',
      issuer: 'NxtWave',
      year: '2025',
      image: 'assets/images/certificates/c5.jpeg',
      certificateUrl: '#'
    }

  ];

  currentIndex = 0;

  private autoplayInterval: any;

  constructor() {}

  ngOnInit(): void {
    this.startAutoplay();
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
  }

  nextSlide(): void {
    this.currentIndex =
      (this.currentIndex + 1) % this.certifications.length;

    this.restartAutoplay();
  }

  previousSlide(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.certifications.length) %
      this.certifications.length;

    this.restartAutoplay();
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
    this.restartAutoplay();
  }

  startAutoplay(): void {

    this.stopAutoplay();

    this.autoplayInterval = setInterval(() => {

      this.currentIndex =
        (this.currentIndex + 1) % this.certifications.length;

    }, 5000);
  }

  stopAutoplay(): void {

    if (this.autoplayInterval) {

      clearInterval(this.autoplayInterval);

      this.autoplayInterval = null;
    }
  }

  restartAutoplay(): void {
    this.stopAutoplay();
    this.startAutoplay();
  }

  openCertificate(url: string): void {

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
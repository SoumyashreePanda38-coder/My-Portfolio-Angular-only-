import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menuOpen = false;
  isScrolled = false;

  constructor() {}

  ngOnInit(): void {}

  /**
   * Detect page scrolling
   */
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 40;
  }

  /**
   * Toggle mobile navigation
   */
  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  /**
   * Close mobile navigation
   */
  closeMenu(): void {
    this.menuOpen = false;
  }

  /**
   * Smoothly scroll to a section
   */
  scrollToSection(event: Event, sectionId: string): void {

    // Prevent browser from changing the URL / jumping
    event.preventDefault();

    const section = document.getElementById(sectionId);

    if (!section) {
      console.warn(`Section #${sectionId} not found.`);
      return;
    }

    const navbarHeight = 75;

    const sectionTop =
      section.getBoundingClientRect().top +
      window.scrollY -
      navbarHeight;

    window.scrollTo({
      top: sectionTop,
      behavior: 'smooth'
    });

    this.closeMenu();
  }

}
import { Component, OnInit } from '@angular/core';

interface FooterNavItem {
  number: string;
  name: string;
  link: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  currentYear: number = new Date().getFullYear();

  navigation: FooterNavItem[] = [
    {
      number: '01',
      name: 'Home',
      link: '#home'
    },
    {
      number: '02',
      name: 'About',
      link: '#about'
    },
    {
      number: '03',
      name: 'Skills',
      link: '#skills'
    },
    {
      number: '04',
      name: 'Education',
      link: '#education'
    },
    {
      number: '05',
      name: 'Projects',
      link: '#projects'
    },
    {
      number: '06',
      name: 'Experience',
      link: '#experience'
    },
    {
      number: '07',
      name: 'Contact',
      link: '#contact'
    }
  ];

  constructor() {}

  ngOnInit(): void {}

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  /* =====================================================
     IBM TECHNOLOGY STACK
     ===================================================== */

  ibmTechnologies: string[] = [
    'Spring Boot',
    'Java',
    'MySQL',
    'Angular'
  ];


  /* =====================================================
     CODEBEAT CORE FOCUS
     ===================================================== */

  codebeatTechnologies: string[] = [
    'Python',
    'Data Structures',
    'Algorithms'
  ];


  constructor() {}


  ngOnInit(): void {
  }

}
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './features/home/home.component';
import { AboutComponent } from './features/about/about.component';
import { SkillsComponent } from './features/skills/skills.component';
import { EducationComponent } from './features/education/education.component';
import { ExperienceComponent } from './features/experience/experience.component';

import { ProjectsComponent } from './features/projects/projects.component';
import { ProjectDetailsComponent } from './features/projects/project-details/project-details.component';

import { CertificationsComponent } from './features/certifications/certifications.component';
import { AchievementsComponent } from './features/achievements/achievements.component';
import { ContactComponent } from './features/contact/contact.component';

const routes: Routes = [

  // Home
  {
    path: '',
    component: HomeComponent
  },

  // About
  {
    path: 'about',
    component: AboutComponent
  },

  // Skills
  {
    path: 'skills',
    component: SkillsComponent
  },

  // Education
  {
    path: 'education',
    component: EducationComponent
  },

  // Experience
  {
    path: 'experience',
    component: ExperienceComponent
  },

  // Projects listing
  {
    path: 'projects',
    component: ProjectsComponent
  },

  // Individual project details
  {
    path: 'projects/:slug',
    component: ProjectDetailsComponent
  },

  // Certifications
  {
    path: 'certifications',
    component: CertificationsComponent
  },

  // Achievements
  {
    path: 'achievements',
    component: AchievementsComponent
  },

  // Contact
  {
    path: 'contact',
    component: ContactComponent
  },

  // Invalid route
  {
    path: '**',
    redirectTo: ''
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Layout
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';

// Shared Components
import { SectionTitleComponent } from './shared/components/section-title/section-title.component';
import { ScrollToTopComponent } from './shared/components/scroll-to-top/scroll-to-top.component';

// Features
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

@NgModule({
  declarations: [
    AppComponent,

    // Layout
    NavbarComponent,
    FooterComponent,

    // Shared
    SectionTitleComponent,
    ScrollToTopComponent,

    // Features
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    EducationComponent,
    ExperienceComponent,
    ProjectsComponent,
    ProjectDetailsComponent,
    CertificationsComponent,
    AchievementsComponent,
    ContactComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],

  providers: [],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
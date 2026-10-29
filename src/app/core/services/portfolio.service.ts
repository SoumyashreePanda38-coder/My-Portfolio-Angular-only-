import { Injectable } from '@angular/core';

import { Achievement } from '../models/achievement.model';
import { Certificate } from '../models/certificate.model';
import { Education } from '../models/education.model';
import { Experience } from '../models/experience.model';
import { Project } from '../models/project.model';
import { Skill } from '../models/skill.model';
import { portfolioData } from '../constants/portfolio-data';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  getProfile() {
    return portfolioData.profile;
  }

  getAbout() {
    return portfolioData.about;
  }

  getSkills(): Skill[] {
    return portfolioData.skills;
  }

  getEducation(): Education[] {
    return portfolioData.education;
  }

  getExperience(): Experience[] {
    return portfolioData.experience;
  }

  getProjects(): Project[] {
    return portfolioData.projects;
  }

  getCertificates(): Certificate[] {
    return portfolioData.certificates;
  }

  getAchievements(): Achievement[] {
    return portfolioData.achievements;
  }
}

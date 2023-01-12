import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { EducationPageComponent } from './education-page/education-page.component';
import { MyPageComponent } from './my-page/my-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { SkillsPageComponent } from './skills-page/skills-page.component';

const routes: Routes = [
  { path: '', component: MyPageComponent, },
  { path: 'contact', component: ContactPageComponent },
  { path: 'education', component: EducationPageComponent },
  { path: 'skills', component: SkillsPageComponent },
  { path: 'projects', component: ProjectsPageComponent }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigationComponent } from './navigation/navigation.component';
import { MyPageComponent } from './my-page/my-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { EducationPageComponent } from './education-page/education-page.component';
import { SkillsPageComponent } from './skills-page/skills-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MyPageComponent,
    ContactPageComponent,
    ProjectsPageComponent,
    EducationPageComponent,
    SkillsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

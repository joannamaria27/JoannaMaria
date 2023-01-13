import { Component, OnInit } from '@angular/core';
import { ApiProjectsService } from '../api-service/api-projects.service';
import { Project } from '../api-service/project';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})
export class ProjectsPageComponent implements OnInit {
  public isCollapsed = true;

  public projects: Project[] = [];

  openLink(pdfUrl: string) {
    window.open(pdfUrl, '_blank');
  }

  constructor(private apiprojects: ApiProjectsService) { }
  ngOnInit(): void {
    this.apiprojects.getProjects().subscribe(p => {
      console.log(p);
      this.projects = p;
    })


  }



}

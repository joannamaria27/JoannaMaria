import { Component } from '@angular/core';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})
export class ProjectsPageComponent {
  public isCollapsed = true;
  projectName = 'Test nazwa';
  projectDescription = "opis";
  images = [944, 1011, 1011].map((n) => `https://picsum.photos/id/${n}/900/500`);
}

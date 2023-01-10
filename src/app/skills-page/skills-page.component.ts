import { Component } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faAngular, faCss3, faHtml5, faJs, faFigma, faNode, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-skills-page',
  templateUrl: './skills-page.component.html',
  styleUrls: ['./skills-page.component.css']
})
export class SkillsPageComponent {
  currentRate = 3.14;
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faAngular,
      faCss3,
      faHtml5,
      faJs,
      faLanguage


    );
  }
}

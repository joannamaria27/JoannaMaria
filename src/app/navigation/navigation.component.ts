import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navigation',
 // standalone: true, 
 // imports: [NgbModule],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  constructor() {}

  openLink(pdfUrl: string) {
    window.open(pdfUrl , '_blank');
  }
  copy() {
    navigator.clipboard.writeText(`joan.mk7@gmail.com`);
  } 
}

import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { withLatestFrom } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  //backgroundClass: 'backgroundBlack' | 'backgroundWhite' = 'backgroundBlack';

  constructor() { }



  openLink(pdfUrl: string) {
    window.open(pdfUrl, '_blank');
  }
  copy() {
    navigator.clipboard.writeText(`joan.mk7@gmail.com`);
  }
  // changeColor(colorClass: 'backgroundBlack' | 'backgroundWhite') {
  //   this.backgroundClass = colorClass;
  // }



}

import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styles: [`
    .white-text {
      color: white;
    }
`]
})
export class DirectivesComponent {
  showPassword = false;
  log = [];

  showDetails() {
    this.showPassword = !this.showPassword;
    //this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }

}

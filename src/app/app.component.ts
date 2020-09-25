import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddComponents: any[] = [];
  evenComponents: any[] = [];

  onStartIncrement = increment => {
    if(increment % 2 === 0)
      this.evenComponents.push({'number': increment});
    else
      this.oddComponents.push({'number': increment});
  }
}

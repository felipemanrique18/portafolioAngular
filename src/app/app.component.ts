import { Component } from '@angular/core';
declare const loading: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){
    loading();
  }
  title = 'landignpage';
}

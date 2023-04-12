import { Component } from '@angular/core';
import {content} from './content'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public obj = content;
  

 noOfCols=this.obj.length;

  returnNewList(data) {
    this.obj = data;
  }
}

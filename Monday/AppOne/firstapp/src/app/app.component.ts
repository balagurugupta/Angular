import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First App';
  childtitles:string[]= ["E Items", "Stationery Items", "Sports Items"];
  things:string[][] = [
    ["RAM", "Pendrive", "Hard disk", "Tablet", "Keyboard"],
    ["Pen", "Pencil", "Eraser", "Notebook", "Book"],
    ["Bat", "Stump", "Wickets", "Pad", "Ball"]
  ]


    newItem:string;

  subscribedInfo(info, boxnumber) {
    this.newItem = info;
    this.things[boxnumber].push(info);
  }
}

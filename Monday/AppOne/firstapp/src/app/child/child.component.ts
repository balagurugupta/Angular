import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input('title') info:string;
  @Input('things') items:string[];
  box:string="redbox";
  @Output('notify') notifyParent:EventEmitter<string> = new EventEmitter<string>();
  newone:string;
  

  constructor() { }

  ngOnInit() {
  }

  update(x:number):void{
    if (x == 1) {
      this.box="redbox"
    } else {
      this.box="bluebox"
    }
  }

  sendToParent():void {
    this.notifyParent.emit(this.newone);
  }

  

}

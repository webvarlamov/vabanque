import {Component, EventEmitter, OnInit, Output} from '@angular/core';
@Component({
  selector: 'app-widget-base',
  template: ``,
  styleUrls: ['./widget-base.component.css']
})
export class WidgetBaseComponent implements OnInit {
  @Output() afterOnInit: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    this.afterOnInit.emit(this);
  }

}

import {Component, DoCheck, Input, OnChanges, SimpleChanges} from '@angular/core';
import {LoggingService} from "../logging.service";

@Component({
  selector: 'app-warning',
  template: 'omg we better look at this',
  styles:[':host{border: 1px solid white;background: orange;text-align: center;width: 25%;border-radius: 3px;}']
})
export class WarningComponent implements DoCheck {

  @Input() text:String = "omg we better look at this";
  aufgerufen = 0;

  constructor(private loggingService: LoggingService) {}

  ngDoCheck(): void {
    this.aufgerufen++;
  }


}

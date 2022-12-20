import {Component, DoCheck, Input, OnChanges, OnInit, SimpleChange, SimpleChanges} from '@angular/core';
import {LoggingService} from "../logging.service";

@Component({
  selector: 'app-error',
  template: 'An error, wearedoomed!',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnChanges, DoCheck, OnInit{
  @Input() text: string = "we are doomed";
  aufgerufen = 0;

  constructor(private loggingService: LoggingService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.text = "we are really doomed";
  }

  ngDoCheck(): void {
    this.aufgerufen++;
    if (this.aufgerufen > 1) {
      this.ngOnInit();
    }
  }

  ngOnInit():void {
    if (this.aufgerufen > 1) {
      this.text = this.text + " ";
    }
  }
}

import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  name: string = "";
  type: string = "";
  ip: string = "";

  @Input() passing:{name: string, type:string, ip: string, id: number} | undefined;

  @Input() arr:{name: string, type:string, ip: string, id: number}[] = [];

  @Output('newServer') newServerEvent: EventEmitter<{name: string, type:string, ip: string, id: number}> = new EventEmitter<{name: string, type:string, ip: string, id: number}>();

  create() {
    let checker = false;
    let lastId = 0;

    for (let arrElem of this.arr) {
      if (this.name == arrElem.name || this.ip == arrElem.ip) {
        checker = true
      }
      lastId = arrElem.id;
    }
  }
}

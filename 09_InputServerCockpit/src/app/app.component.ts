import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arr: Array<{ name: string, ip: string, type: string, id: number }> = [];
  server: { name: string; type: string; ip: string; id: number; } | undefined;

  @Output('copiyng') changeEvent: EventEmitter<{name: string, type:string, ip: string, id: number}>
    = new EventEmitter<{name: string, type:string, ip: string, id: number}>();


  copy(get: { name: string, type: string, ip: string, id: number }) {
    this.server = {
      name: get.name.valueOf(),
      type: get.type.valueOf(),
      ip: get.ip.valueOf(),
      id: get.id.valueOf()
    }
  }

  newServerCreated(get: { name: string, type: string, ip: string, id: number }) {
    get.id = this.getIndex() + 1;
    this.arr.push(get);
  }
  getIndex() {
    let index = 0;
    for (let arr of this.arr) {
      index = arr.id;
    }

    return index;
  }

  removingObject(get: { name: string, type: string, ip: string, id: number }) {
    for (let arr of this.arr) {
      if (arr.name == get.name && arr.ip == get.ip) {
        this.arr.splice(this.arr.indexOf(get) - 1, 1)
        for (let arr of this.arr.slice(this.arr.indexOf(get))) {
          arr.id -= 1
        }
        break
      }
    }
  }

}

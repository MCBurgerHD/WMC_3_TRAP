import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  @Input() passing: { name: string; type: string; ip: string; id: number; } | undefined;
  @Input() name: string = "";
  @Input() type: string = "";
  @Input() ip: string = "";
  @Input() id: number = 0;
  @Input() arr: { name: string, type: string, ip: string }[] = [];


  @Output('removeObject') removingObject: EventEmitter<{ name: string, type: string,
    ip: string, id: number }> = new EventEmitter<{ name: string, type: string, ip: string, id: number }>();
  @Output('copyObject') copyObject: EventEmitter<{ name: string, type: string,
    ip: string, id: number }> = new EventEmitter<{ name: string, type: string, ip: string, id: number }>();

  copy() {
    this.copyObject.emit({name: this.name, type: this.type, ip: this.ip, id:this.id})
  }

  remove() {
    this.removingObject.emit({name: this.name, type: this.type, ip: this.ip, id: this.id});
  }


}

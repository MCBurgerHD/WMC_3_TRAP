import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  @Input() name:String = "";
  @Input() type:String = "";

  constructor() {
  }

  ngOnInit(): void {
  }
}

import {Component, Input} from '@angular/core';
import {ServerComponent} from "./server/server.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'InputServerCockpit';
  @Input() name:String = "";
  exam:String = "Exam";
  traning:String = "traning";
  @Input() type:String = "";
  arr:ServerComponent[] = [];


  create() {
    if (this.name == "") {
      alert("Name ist Leer!");
    }
    let server = new Server()
    server.name = this.name;
    server.type = this.type;
    this.arr.push(<ServerComponent>server);
    this.name = "";
    this.type = "";
  }
}

class Server {
  name:String = "";
  type:String = "";
}

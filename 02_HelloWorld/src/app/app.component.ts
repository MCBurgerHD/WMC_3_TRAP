import { Component,  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HelloWorld';
  error:boolean = false;
  output:String = "";
  firstName:String = "";
  lastName:String = "";

  sayHello() {
    // let fname = document.getElementById("first-name");
    // let lname = document.getElementById("last-name");
    // document.getElementById("first-name").value = "";
    // document.getElementById("last-name").value = "";

    //document.getElementById("hello").innerHTML = "Hello" + fname + " " + lname + "!";
    let output;
    if (this.firstName && this.lastName !== null) {
      this.output = `Hello${(this.lastName + " " + this.firstName)}!`;
    }
    else {
      this.output = "You must input firstname and lastname!"
    }
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fibonacci';
  output = "";
  anzahl = 0;
  zahl1 = 1;
  zahl2 = 1;
  fib = 0;

  calc() {
    for(let i = 0; i < this.anzahl; i++) {
        this.fib = this.zahl1 + this.zahl2;
        this.zahl1 = this.zahl2;
        this.zahl2 = this.fib;
    }
    this.output = this.fib.toString();
  }

}

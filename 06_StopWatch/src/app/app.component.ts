import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StopWatch';
  lastName = "";
  running: boolean = false;
  currentTime = new Date();
  time:String = "";
  minuten:number = 0;
  sekunden:number = 0;
  ms:number = 0;
  output:String = "";



  startTimer() {
    this.running = true;
    while (this.running) {
      this.ms++;
    }
    if (this.ms === 1000)  {
      this.sekunden++;
      this.ms -= 1000;
    }
    if (this.sekunden === 60) {
      this.minuten++;
      this.sekunden -= 60;
    }
  }

  stopTimer() {
    this.time = this.minuten + ":" + this.sekunden + "." + this.ms;
    this.output = this.time + " (" + this.lastName + ")";
    this.running = false;
    this.ms = 0;
    this.sekunden = 0;
    this.minuten = 0;
    this.lastName = "";
  }
}

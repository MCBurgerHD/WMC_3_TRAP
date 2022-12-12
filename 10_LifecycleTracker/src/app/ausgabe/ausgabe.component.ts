import {Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-ausgabe',
  templateUrl: './ausgabe.component.html',
  styleUrls: ['./ausgabe.component.css']
})
export class AusgabeComponent implements OnInit, OnChanges, DoCheck, OnDestroy{

    text:String = "";
    ausgabe:String = "";
    destroy:Boolean = false;

    constructor() {
    }

    setOutput() {
      if (this.ausgabe == "ddd") {
        this.ngDoCheck();
      }
      if (this.ausgabe == "tt") {
        this.ausgabe = "";
      }
      this.ausgabe = "ddd";
      this.destroy = true;
    }

    destroyComponnt() {
      this.destroy = false;
    }

  ngDoCheck(): void {
    this.ausgabe = "tt";
    console.log("ngDoCheck");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges" + "," + this + ", " + changes);
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy");
  }

  ngOnInit(): void {
    console.log("ngOnInit");
  }
}

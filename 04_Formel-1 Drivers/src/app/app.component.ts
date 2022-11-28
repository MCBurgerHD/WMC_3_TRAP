import { Component } from '@angular/core';
import {Driver} from "./driver";
import {UpperCasePipe} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Formel-1-Drivers';
  arr:Driver[] = Driver.getData();
  name:String = "";
  kuerzel:{} = "";
  teamName:String = "";
  geburtsdatum:Date;
  alter:number = 0;
  gehalt:number = 0;

  read() {
    for (var i = 0; i < this.arr.length; i++) {
    this.name = this.arr[i].firstname + " " + this.arr[i].lastname;
    this.kuerzel = {{arr[i].lastname[2] | uppercase}}
    this.teamName = this.arr[i].team;
    this.geburtsdatum = {{this.arr[i].Date | date: 'dd.MM.yyyy'}};
    this.alter = 2022 - this.geburtsdatum.getFullYear();
    this.gehalt = {{this.arr[this.i].salary | currency:'USD':'$':'1.2-2':'"us'}};
    }
  }

}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {WarningComponent} from "./warning/warning.component";
import { ErrorComponent } from './error/error.component';

@NgModule({declarations: [
  AppComponent,
    WarningComponent,
    ErrorComponent],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

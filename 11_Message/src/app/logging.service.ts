import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  error(message: string){}

  warn(message: string){}

  constructor(private loggingService: LoggingService) {}
}

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private componentMethodCall = new Subject<any>();

  componentMethodCalled = this.componentMethodCall.asObservable();

  callComponentMethod() {
    this.componentMethodCall.next();

  }
  constructor() { }

}
